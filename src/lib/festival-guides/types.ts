/**
 * The written guide on a festival page (/festivals/{slug}), below its About:
 * the story behind it, how it's celebrated, what people wear, photo ideas,
 * tips and its own FAQ. One per festival, so no two pages share their copy.
 */
export interface FestivalGuide {
  /** "The story behind {name}": origins and meaning. */
  story: string[];
  /** "How {name} is celebrated": days, places, customs. */
  celebrate: string[];
  /** "What to wear in {name} photos": clothes, fabrics and colours. */
  wear: string[];
  /** "{name} photo ideas". */
  ideas: { t: string; d: string }[];
  /** "How to get the best {name} photo": tips for this festival and its apps. */
  tips: string[];
  /** Questions about this festival, after "When is…?" and "What can I make…?". */
  faq: { q: string; a: string }[];
}
