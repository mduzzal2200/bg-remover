import type { PageFAQ } from "@/lib/page-config";
import type { AppSection } from "@/lib/app-pages/types";

/**
 * A tool page's own article (/remove-bg, /compress-image, …): copy written for
 * that one tool, in place of the blocks LandingPage used to share between
 * every tool (the features grid, the fixed three steps, the use-case cards,
 * the "About" paragraphs). Same outline as docs/seo/content-style.md:
 * how to use it → who it's for → what it's good at → free vs credits → how it
 * compares → tips → what it can't do → FAQ. Every heading is a question or a
 * job a reader would search for.
 *
 * Inside any paragraph, list line, item or table cell: **bold** and
 * [words](/path) links.
 */
export interface ToolPage {
  /** <title>, keyword first; brandedTitle() adds the brand when it fits. */
  title: string;
  h1: string;
  /** ≤ 155 characters. */
  metaDescription: string;
  /** The line under the H1: what you get, answer first. */
  subtitle: string;
  keywords: string;
  /** The button on pages without an upload box. */
  ctaText?: string;
  /** Alt text for the image(s) the page already shows in its hero. */
  alt?: { hero?: string; before?: string; after?: string };
  /** The article under the tool. The first section should be the how-to. */
  sections: AppSection[];
  /** 8–10 real questions. The same list feeds the FAQPage structured data. */
  faq: PageFAQ[];
}
