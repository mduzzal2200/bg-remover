/**
 * festival-creatives.ts — the owner's before/after image for each festival app.
 *
 * The files are made by `npm run festival:creatives` from the "Festival
 * creatives" bucket and committed under public/festivals/creatives. The JSON
 * beside this file is that script's record of which exist and their size, so
 * a page can put the image straight into its HTML instead of probing for it.
 */

import SIZES from "./festival-creatives.json";

const BASE = "https://www.sjpt.io";
const FILES: Record<string, number[]> = SIZES;

export interface FestivalCreative {
  /** Site path, e.g. /festivals/creatives/diwali-portrait.webp */
  src: string;
  w: number;
  h: number;
}

/** The before/after for a festival app, if one has been added. */
export function festivalCreative(slug: string): FestivalCreative | null {
  const size = FILES[slug];
  return size ? { src: `/festivals/creatives/${slug}.webp`, w: size[0], h: size[1] } : null;
}

/** The 1200×630 share image made for a festival from its portrait app's before/after. */
export function festivalOgImage(festivalSlug: string, portraitSlug: string): string | null {
  return FILES[portraitSlug] ? `${BASE}/festivals/og/${festivalSlug}.jpg` : null;
}
