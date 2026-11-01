import { FESTIVALS, REGIONS, festivalAppSlug, monthsLabel, searchText, type Festival, type Region } from "@/lib/festivals";
import { getCreativeApp, previewUrl } from "@/lib/creative-apps";
import { creativeSources, mainSources } from "@/lib/app-creatives";
import { festivalCreative } from "@/lib/festival-creatives";

/**
 * Example image URLs for a festival app, best first: the owner's before/after
 * (known to exist, so nothing is tried and missed before it), then an admin
 * "main" creative, then the generated example and its fallbacks.
 */
function festivalSources(slug: string): string[] {
  const own = festivalCreative(slug);
  return [...(own ? [own.src] : []), ...mainSources(slug), ...creativeSources(slug, "after", previewUrl(slug))];
}

/** What a festival card and the search need: small enough to hand to the browser for all 40. */
export interface FestivalSummary {
  slug: string;
  name: string;
  emoji: string;
  short: string;
  when: string;
  regions: Region[];
  /** Name, other names, countries, regions and months, normalised for search. */
  haystack: string;
  /** The portrait app whose example image stands for the festival. */
  imageSlug: string;
  sources: string[];
  gradient: [string, string];
  appCount: number;
}

export function summarize(f: Festival): FestivalSummary {
  const imageSlug = festivalAppSlug(f, f.apps[0]);
  return {
    slug: f.slug,
    name: f.name,
    emoji: f.emoji,
    short: f.short,
    when: monthsLabel(f),
    regions: f.regions,
    haystack: searchText(f),
    imageSlug,
    sources: festivalSources(imageSlug),
    gradient: f.gradient,
    appCount: f.apps.length,
  };
}

export const FESTIVAL_SUMMARIES: FestivalSummary[] = FESTIVALS.map(summarize);
export { REGIONS };

/** One festival app on a card. */
export interface FestivalAppCardData {
  slug: string;
  name: string;
  blurb: string;
  emoji: string;
  gradient: [string, string];
  /** Example image URLs, best first. */
  sources: string[];
  /** The image box's aspect ratio: 3:2 for a before/after, 4:5 for a single picture. */
  ratio: string;
}

/** A festival's four apps as cards, each with its example. */
export function festivalAppCards(f: Festival): FestivalAppCardData[] {
  return f.apps.map((spec) => {
    const slug = festivalAppSlug(f, spec);
    const own = festivalCreative(slug);
    return { slug, name: spec.name, blurb: spec.blurb, emoji: spec.emoji, gradient: f.gradient, sources: festivalSources(slug), ratio: own ? `${own.w} / ${own.h}` : "4 / 5" };
  });
}

/** Existing apps that suit the festival too, skipping any already among its four. */
export function festivalRelatedCards(f: Festival): FestivalAppCardData[] {
  const own = new Set(f.apps.map((s) => festivalAppSlug(f, s)));
  return (f.related ?? [])
    .filter((slug) => !own.has(slug))
    .map((slug) => getCreativeApp(slug))
    .filter((a): a is NonNullable<typeof a> => !!a)
    .map((a) => ({ slug: a.slug, name: a.h1, blurb: a.intro, emoji: a.emoji, gradient: [a.gradient[0], a.gradient[1]] as [string, string], sources: creativeSources(a.slug, "after", previewUrl(a.slug)), ratio: "4 / 5" }));
}
