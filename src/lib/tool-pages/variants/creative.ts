import { uploadedCreative } from "@/lib/app-creatives";
import type { AppSection } from "@/lib/app-pages/types";

/**
 * An app's existing before-and-after creative (creatives/<slug>-main.webp,
 * 1400×933), shown on a related tool page as its comparison preview. Never a
 * new image: the caption says which app made it, with a link to that app.
 */
export function creativeFigure(slug: string, appName: string, alt: string, what: string): NonNullable<AppSection["figure"]> {
  return {
    src: uploadedCreative(slug, "main"),
    alt,
    caption: `${what} Made with the [${appName}](/creative/${slug}) app.`,
    width: 1400,
    height: 933,
  };
}
