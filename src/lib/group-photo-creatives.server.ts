/**
 * group-photo-creatives.server.ts — the owner's Group Photo examples.
 *
 * They live in the public Supabase bucket "Group Photo", one folder per
 * example (family/, friends/, team/, and any added later). In each folder
 * the group photo has "group" or "after" in its file name; every other image
 * is one of the separate photos it was made from.
 *
 * Every file that `npm run group:creatives` has copied is served from the
 * site as a small WebP (public/group-photo/examples, sizes in
 * group-photo-creatives.json): about 40 KB a photo instead of 3 MB.
 *
 * The page also reads the bucket when it renders (hourly), so a folder or
 * file added later still shows up, straight from the bucket, until the
 * script is run again. Listing needs the service role key, which the
 * deployments have. With neither, the page falls back to its drawn
 * illustrations.
 */

import { createAdminSupabase } from "@/lib/auth";
import COPIES from "./group-photo-creatives.json";

export const CREATIVES_BUCKET = "Group Photo";
const ORDER = ["family", "friends", "team"];
const IMAGE = /\.(jpe?g|png|webp)$/i;
const RESULT = /group|after/i;

export interface CreativePhoto { label: string; src: string }
export interface GroupCreative {
  id: string;
  title: string;
  caption: string;
  singles: CreativePhoto[];
  result: string;
  /** The group photo's own shape, e.g. "1536 / 1024", when it could be read. */
  ratio: string | null;
}

const SIZES: Record<string, number[]> = COPIES;

/** The site's small copy of a bucket file, if the script has made one. */
function copyOf(folder: string, name: string): { src: string; w: number; h: number } | null {
  const size = SIZES[`${folder}/${name}`];
  return size ? { src: `/group-photo/examples/${folder}/${name.split("/").pop()!.replace(IMAGE, ".webp")}`, w: size[0], h: size[1] } : null;
}

function publicUrl(folder: string, name: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lwworujvfttxkrjfrgav.supabase.co";
  return `${base}/storage/v1/object/public/${[CREATIVES_BUCKET, folder, ...name.split("/")].map(encodeURIComponent).join("/")}`;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** "family-1-grandma.png" → "Grandma", "dad.jpg" → "Dad"; numbers and camera names ("IMG_2041", "before-2", "3") → "Photo n". */
export function labelFor(name: string, index: number, folder = ""): string {
  let base = name.split("/").pop()!.replace(IMAGE, "").replace(/[_-]+/g, " ").trim();
  if (folder) base = base.replace(new RegExp(`^${folder.replace(/[^a-z0-9]/gi, ".")}\\s*`, "i"), "");
  base = base.replace(/^\d+\s+(?=\D)/, "");
  const generic = !base || /\d{3,}/.test(base) || /^(img|image|photo|pic|picture|before|single|person|input|dsc|pxl|whatsapp|screenshot|chatgpt|gemini)\b/i.test(base) || /^\d+$/.test(base);
  if (generic || base.length > 16) return `Photo ${index + 1}`;
  return base.split(/\s+/).map(cap).join(" ");
}

/** Splits one folder's file names into the group photo and the separate photos. */
export function splitFolder(names: string[]): { result: string; singles: string[] } | null {
  const images = names.filter((n) => IMAGE.test(n) && !n.split("/").pop()!.startsWith("."));
  const result = images.find((n) => RESULT.test(n));
  if (!result) return null;
  const singles = images.filter((n) => n !== result && !RESULT.test(n)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  return singles.length >= 2 ? { result, singles } : null;
}

/** Width and height from an image's first bytes (PNG, JPEG or WebP), without decoding it. */
export function imageSize(buf: Uint8Array): { w: number; h: number } | null {
  const u16be = (o: number) => (buf[o] << 8) | buf[o + 1];
  const u32be = (o: number) => ((buf[o] << 24) | (buf[o + 1] << 16) | (buf[o + 2] << 8) | buf[o + 3]) >>> 0;
  const u16le = (o: number) => buf[o] | (buf[o + 1] << 8);
  const ascii = (o: number, n: number) => String.fromCharCode(...Array.from(buf.slice(o, o + n)));
  if (buf.length >= 24 && buf[0] === 0x89 && ascii(1, 3) === "PNG") return { w: u32be(16), h: u32be(20) };
  if (buf.length >= 30 && ascii(0, 4) === "RIFF" && ascii(8, 4) === "WEBP") {
    const kind = ascii(12, 4);
    if (kind === "VP8 ") return { w: u16le(26) & 0x3fff, h: u16le(28) & 0x3fff };
    if (kind === "VP8L") { const b = buf.slice(21, 25); return { w: 1 + (((b[1] & 0x3f) << 8) | b[0]), h: 1 + (((b[3] & 0x0f) << 10) | (b[2] << 2) | ((b[1] & 0xc0) >> 6)) }; }
    if (kind === "VP8X") return { w: 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16)), h: 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16)) };
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let o = 2;
    while (o + 9 < buf.length) {
      if (buf[o] !== 0xff) { o++; continue; }
      const marker = buf[o + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return { w: u16be(o + 7), h: u16be(o + 5) };
      o += 2 + u16be(o + 2);
    }
  }
  return null;
}

async function ratioOf(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { headers: { Range: "bytes=0-131071" }, next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const size = imageSize(new Uint8Array(await res.arrayBuffer()));
    return size && size.w > 0 && size.h > 0 ? `${size.w} / ${size.h}` : null;
  } catch {
    return null;
  }
}

function captionFor(id: string, n: number): string {
  if (id === "family") return `${n} separate photos of the family, turned into one family photo.`;
  if (id === "friends") return `${n} friends photographed separately, together in one group photo.`;
  if (id === "team") return `${n} colleagues' separate photos, turned into one team photo.`;
  return `${n} separate photos, one group photo.`;
}

/** File names per folder, as the bucket lists them; null when it can't be read here. */
async function listBucket(): Promise<Map<string, string[]> | null> {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  try {
    const storage = createAdminSupabase().storage.from(CREATIVES_BUCKET);
    const { data: root, error } = await storage.list("", { limit: 100 });
    if (error || !root) return null;
    // Folders come back without an id.
    const folders = root.filter((e) => !e.id && !e.name.startsWith(".")).map((e) => e.name);
    const out = new Map<string, string[]>();
    await Promise.all(folders.map(async (folder) => {
      const { data } = await storage.list(folder, { limit: 100 });
      const names = (data ?? []).filter((e) => e.id).map((e) => e.name);
      // One level down too: renaming a file to "family/x.png" inside the family
      // folder puts it in family/family/, which is where the group photos are.
      const subs = (data ?? []).filter((e) => !e.id && !e.name.startsWith("."));
      await Promise.all(subs.map(async (sub) => {
        const { data: inner } = await storage.list(`${folder}/${sub.name}`, { limit: 100 });
        for (const e of inner ?? []) if (e.id) names.push(`${sub.name}/${e.name}`);
      }));
      out.set(folder, names);
    }));
    return out;
  } catch (e) {
    console.error("[group-photo] couldn't read the creatives bucket", e);
    return null;
  }
}

/** Every example folder that has a group photo and at least two separate photos, small copies first. */
export async function loadGroupCreatives(): Promise<GroupCreative[]> {
  const listed = await listBucket();
  // Without the bucket listing, the copies on the site are all there is.
  const folders = new Map<string, string[]>(listed ?? []);
  if (!listed) {
    for (const key of Object.keys(SIZES)) {
      const [folder, ...rest] = key.split("/");
      folders.set(folder, [...(folders.get(folder) ?? []), rest.join("/")]);
    }
  }
  const order = Array.from(folders.keys()).sort((a, b) => {
    const ia = ORDER.indexOf(a.toLowerCase()), ib = ORDER.indexOf(b.toLowerCase());
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b);
  });
  const out = await Promise.all(order.map(async (folder): Promise<GroupCreative | null> => {
    const split = splitFolder(folders.get(folder) ?? []);
    if (!split) return null;
    const src = (name: string) => copyOf(folder, name)?.src ?? publicUrl(folder, name);
    const copy = copyOf(folder, split.result);
    return {
      id: folder.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: folder.split(/[\s_-]+/).map(cap).join(" "),
      caption: captionFor(folder.toLowerCase(), split.singles.length),
      singles: split.singles.map((name, i) => ({ label: labelFor(name, i, folder), src: src(name) })),
      result: src(split.result),
      ratio: copy ? `${copy.w} / ${copy.h}` : await ratioOf(publicUrl(folder, split.result)),
    };
  }));
  return out.filter((c): c is GroupCreative => !!c);
}
