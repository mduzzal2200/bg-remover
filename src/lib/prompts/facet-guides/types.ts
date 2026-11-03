/**
 * The written guide on a prompt category page (/prompts/{media}/{facet}),
 * below the prompts: how to write a prompt for this kind of picture or clip,
 * an example taken apart, model advice, mistakes and a FAQ. One per category.
 */
export interface FacetGuide {
  /** "What makes a good {facet} prompt?" */
  intro: string[];
  /** "What to put in a {facet} prompt": the ingredients, in order. */
  ingredients: { t: string; d: string }[];
  /** "A {facet} prompt, explained": one original example and what each part does. */
  example: { prompt: string; notes: { t: string; d: string }[] };
  /** "Which model to use". */
  models: string;
  /** "Common mistakes". */
  mistakes: string[];
  faq: { q: string; a: string }[];
}

/** More of the same guide: who it's for, a fill-in template, variations and two more questions. */
export interface FacetExtras {
  /** "Who uses {facet} prompts?" */
  audiences: { t: string; d: string }[];
  /** "A {facet} prompt template": blanks in [square brackets]. */
  template: string;
  /** "Variations to try": small changes to the example and what they do. */
  variations: { t: string; d: string }[];
  faq: { q: string; a: string }[];
}
