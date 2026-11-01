/**
 * festival-creatives.ts — turn the owner's festival before/after images into
 * the small files the site serves.
 *
 *   npm run festival:creatives
 *
 * The originals live in the public Supabase bucket "Festival creatives", one
 * per festival app, named `<app-slug>-before-after.png` (jpg/jpeg/webp also
 * accepted). Each is a 1536×1024 PNG of about 2.5 MB: the before on the left,
 * the after on the right, labels baked in.
 *
 * For every app in FESTIVALS this writes:
 *   public/festivals/creatives/<app-slug>.webp   1200 px wide, ~110 KB
 *   public/festivals/og/<festival>.jpg           1200×630 share image (portrait app)
 *   src/lib/festival-creatives.json              app-slug → [width, height]
 *
 * They are served from the site rather than the bucket: next/image resizes
 * them per screen, and the bucket's egress isn't spent on every page view.
 *
 * Re-run it after replacing or adding an image in the bucket. It stops with a
 * list if any app has no image, so a missing file can't go unnoticed.
 */

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { FESTIVALS, festivalAppSlug } from "../src/lib/festivals";

const SUPABASE = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lwworujvfttxkrjfrgav.supabase.co";
const BUCKET = "Festival creatives";
const EXTS = ["png", "jpg", "jpeg", "webp"];
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public/festivals/creatives");
const OG = path.join(ROOT, "public/festivals/og");
const MANIFEST = path.join(ROOT, "src/lib/festival-creatives.json");
const WIDTH = 1200;
const OG_BG = "#0B0B0E";

const objectUrl = (name: string) =>
  `${SUPABASE}/storage/v1/object/public/${encodeURIComponent(BUCKET)}/${encodeURIComponent(name)}`;

async function download(slug: string): Promise<{ name: string; buf: Buffer } | null> {
  for (const ext of EXTS) {
    const name = `${slug}-before-after.${ext}`;
    const res = await fetch(objectUrl(name));
    if (res.ok) return { name, buf: Buffer.from(await res.arrayBuffer()) };
  }
  return null;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(OG, { recursive: true });

  const jobs = FESTIVALS.flatMap((f) => f.apps.map((spec) => ({ f, spec, slug: festivalAppSlug(f, spec) })));
  const manifest: Record<string, [number, number]> = {};
  const missing: string[] = [];
  const seen = new Map<string, string>(); // content hash → slug, to catch the same file uploaded twice
  let before = 0;
  let after = 0;

  // A few at a time: fast, without hammering the bucket.
  const queue = [...jobs];
  async function worker() {
    for (let job = queue.shift(); job; job = queue.shift()) {
      const { f, spec, slug } = job;
      const got = await download(slug);
      if (!got) { missing.push(slug); continue; }

      const hash = (await import("node:crypto")).createHash("sha1").update(got.buf).digest("hex");
      if (seen.has(hash)) console.warn(`! ${slug} is the same file as ${seen.get(hash)}`);
      seen.set(hash, slug);

      const img = sharp(got.buf).rotate();
      const out = path.join(OUT, `${slug}.webp`);
      const info = await img.clone().resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: 78, effort: 6 }).toFile(out);
      manifest[slug] = [info.width, info.height];
      before += got.buf.length;
      after += info.size;

      if (spec === f.apps[0]) {
        // The whole before/after, centred on the brand dark: a share image
        // that crops nothing off either half.
        const inner = await img.clone().resize({ width: 1200, height: 630, fit: "contain", background: OG_BG }).flatten({ background: OG_BG }).toBuffer();
        await sharp(inner).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(OG, `${f.slug}.jpg`));
      }
      console.log(`✓ ${slug}  ${(got.buf.length / 1024) | 0} KB → ${(info.size / 1024) | 0} KB  (${got.name})`);
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));

  if (missing.length) {
    console.error(`\n✗ ${missing.length} festival app(s) have no image in "${BUCKET}":\n  ${missing.join("\n  ")}`);
    process.exit(1);
  }

  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");
  console.log(`\n${jobs.length} images, ${FESTIVALS.length} share images. ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
