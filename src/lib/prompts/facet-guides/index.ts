import { allFacets } from "@/lib/prompts/data";
import { facetIndexable } from "@/lib/seo/index-policy";
import type { Media } from "@/lib/prompts/types";
import type { HubPage } from "@/lib/hub-pages/types";
import { IMAGE_STYLES } from "./image-styles";
import { IMAGE_SUBJECTS } from "./image-subjects";
import { IMAGE_USE_CASES } from "./image-use-cases";
import { IMAGE_EXTRAS } from "./extras-image";
import { VIDEO_EXTRAS } from "./extras-video";
import type { FacetExtras, FacetGuide } from "./types";
import { VIDEO_FACETS } from "./video";

export type { FacetGuide } from "./types";

const GUIDES: Record<Media, Record<string, FacetGuide>> = {
  image: { ...IMAGE_USE_CASES, ...IMAGE_STYLES, ...IMAGE_SUBJECTS },
  video: VIDEO_FACETS,
};

const EXTRAS: Record<Media, Record<string, FacetExtras>> = { image: IMAGE_EXTRAS, video: VIDEO_EXTRAS };

// Every category that's indexed must have its own written guide.
for (const media of ["image", "video"] as const) {
  const missing = allFacets(media).filter(({ facet }) => facetIndexable(facet.count) && !(GUIDES[media][facet.slug] && EXTRAS[media][facet.slug])).map(({ facet }) => facet.slug);
  if (missing.length) throw new Error(`Prompt category guides missing for ${media}: ${missing.join(", ")}`);
}

/** The written guide for a prompt category, as hub sections and a FAQ. */
export function facetGuidePage(media: Media, slug: string, name: string): HubPage | null {
  const g = GUIDES[media][slug];
  const x = EXTRAS[media][slug];
  if (!g) return null;
  const label = name.replace(/ \/ /g, " and ");
  // "image"/"video" in the headings keeps twin categories (vehicle, product…) from sharing them.
  const kind = media === "video" ? "video" : "image";
  return {
    sections: [
      { heading: `What makes a good ${label} ${kind} prompt?`, paragraphs: g.intro },
      ...(x ? [{ heading: `Who uses ${label} ${kind} prompts?`, items: x.audiences }] : []),
      { heading: `What to put in a ${label} ${kind} prompt`, items: g.ingredients },
      ...(x ? [{ heading: `A ${label} ${kind} prompt template`, paragraphs: [`Copy this and replace each part in square brackets with your own idea: "${x.template}"`] }] : []),
      { heading: `A ${label} ${kind} prompt, explained`, paragraphs: [`**The prompt:** "${g.example.prompt}"`], items: g.example.notes },
      ...(x ? [{ heading: `${label} ${kind} variations to try`, items: x.variations }] : []),
      { heading: `Which model suits ${label} ${media === "video" ? "videos" : "images"}?`, paragraphs: [g.models] },
      { heading: `Common ${label} ${kind} prompt mistakes`, list: g.mistakes },
    ],
    faq: [...g.faq, ...(x?.faq ?? [])],
  };
}
