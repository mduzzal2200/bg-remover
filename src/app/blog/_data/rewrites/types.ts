import type { BlogPost } from "../posts";

/**
 * A short post rewritten in full: the new copy replaces the post's sections
 * (and any of its headline fields given here) wherever the post is read, so
 * the old, thin version never renders. `updated` becomes the post's
 * dateModified and its sitemap date.
 */
export type BlogRewrite = Partial<Pick<BlogPost, "title" | "metaTitle" | "metaDescription" | "excerpt" | "keywords" | "toolHref" | "toolLabel" | "readTime">> & {
  updated: string;
  /** The post's new copy, in place of all its sections. */
  sections?: BlogPost["sections"];
  /** Or: sections added to a post that is long already, before its FAQ. */
  append?: BlogPost["sections"];
};

/** A "Frequently asked questions" body in the format the post page reads into FAQPage data. */
export const FAQ = (pairs: [string, string][]) => pairs.map(([q, a]) => `**${q}**\n${a}`).join("\n\n");
