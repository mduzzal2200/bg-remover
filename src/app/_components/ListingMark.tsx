/**
 * Marks where a list of cards that repeat other pages' titles and excerpts
 * starts and ends (blog lists, topic hubs). Invisible; scripts/seo-thin.mjs
 * leaves the text between the marks out of a page's own words and overlap,
 * so a hub is judged on the guide written for it.
 */
export default function ListingMark({ at }: { at: "start" | "end" }) {
  return <span hidden data-seo-listing={at} />;
}
