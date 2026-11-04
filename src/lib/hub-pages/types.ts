import type { AppSection } from "@/lib/app-pages/types";

/** A hub page's written guide: sections in the AppArticle format and a FAQ. */
export interface HubPage {
  sections: AppSection[];
  faq: { q: string; a: string }[];
}
