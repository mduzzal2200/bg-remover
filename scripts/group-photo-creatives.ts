/**
 * group-photo-creatives.ts — make the owner's Group Photo examples small.
 *
 *   npm run group:creatives
 *
 * The originals are full-size PNGs in the public Supabase bucket "Group
 * Photo", one folder per example. This writes a small WebP of each next to
 * the site (public/group-photo/examples/<folder>/<name>.webp) and records
 * their sizes in src/lib/group-photo-creatives.json, so /group-photo loads
 * them from the site's CDN instead of pulling multi-megabyte files from the
 * bucket.
 *
 * Supabase won't list a folder without a key, so the files are named here,
 * as paths inside each example's folder. The group photo is
 * "<folder>/<folder>-group.png" (it sits in a subfolder of the same name);
 * the rest are the separate photos, "<folder>-<n>-<name>.png". Add new names
 * to FILES and run it again. A file that isn't in the bucket is skipped and
 * reported.
 */

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SUPABASE = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lwworujvfttxkrjfrgav.supabase.co";
const BUCKET = "Group Photo";
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public/group-photo/examples");
const MANIFEST = path.join(ROOT, "src/lib/group-photo-creatives.json");

const FILES: Record<string, string[]> = {
  family: ["family/family-group.png", "family-1-grandma.png", "family-2-dad.png", "family-3-mum.png", "family-4-daughter.png"],
  friends: ["friends/friends-group.png", "friends-1-maya.png", "friends-2-kofi.png", "friends-3-lena.png", "friends-4-mateo.png", "friends-5-yuki.png"],
  team: ["team/team-group.png", "team-1-emma.png", "team-2-daniel.png", "team-3-amara.png", "team-4-wei.png", "team-5-omar.png", "team-6-sofia.png"],
};

/** Separate photos are shown small; the group photo is the big one. */
const SINGLE_WIDTH = 480;
const GROUP_WIDTH = 1400;

const objectUrl = (folder: string, name: string) =>
  `${SUPABASE}/storage/v1/object/public/${[BUCKET, folder, ...name.split("/")].map(encodeURIComponent).join("/")}`;

async function main() {
  const manifest: Record<string, [number, number]> = {};
  const missing: string[] = [];
  let before = 0, after = 0;
  for (const [folder, names] of Object.entries(FILES)) {
    fs.mkdirSync(path.join(OUT, folder), { recursive: true });
    for (const name of names) {
      const res = await fetch(objectUrl(folder, name));
      if (!res.ok) { missing.push(`${folder}/${name}`); continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      const group = /group|after/i.test(name);
      const out = path.join(OUT, folder, path.basename(name).replace(/\.(png|jpe?g|webp)$/i, ".webp"));
      const info = await sharp(buf).rotate()
        .resize({ width: group ? GROUP_WIDTH : SINGLE_WIDTH, withoutEnlargement: true })
        .webp({ quality: group ? 78 : 74, effort: 6 })
        .toFile(out);
      manifest[`${folder}/${name}`] = [info.width, info.height];
      before += buf.length;
      after += info.size;
      console.log(`✓ ${folder}/${name}  ${(buf.length / 1024) | 0} KB → ${(info.size / 1024) | 0} KB`);
    }
  }
  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + "\n");
  console.log(`\n${Object.keys(manifest).length} images. ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(2)} MB.`);
  if (missing.length) console.warn(`\nNot in the bucket yet (skipped):\n  ${missing.join("\n  ")}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
