import type { ToolPage } from "../types";
import type { ParentTool } from "@/lib/landing-variants";
import removeBgProductPhotos from "./remove-bg/product-photos";
import removeBgSignature from "./remove-bg/signature";
import removeBgLogo from "./remove-bg/logo";
import removeBgPassportPhoto from "./remove-bg/passport-photo";
import upscaleOldPhotos from "./upscale/old-photos";
import upscale4k from "./upscale/4k";
import upscaleAnime from "./upscale/anime";
import upscaleProfilePicture from "./upscale/profile-picture";
import headshotLinkedin from "./ai-headshot/linkedin";
import headshotCorporate from "./ai-headshot/corporate";
import editorChangeBackground from "./ai-editor/change-background";

/**
 * The use-case pages under a tool (/remove-bg/logo, /upscale/4k, …), each
 * with an article of its own, keyed "<parent>/<slug>" — the same path the
 * page lives at, and the folder/file the copy is in.
 */
export const VARIANT_PAGES: Record<string, ToolPage> = {
  "remove-bg/product-photos": removeBgProductPhotos,
  "remove-bg/signature": removeBgSignature,
  "remove-bg/logo": removeBgLogo,
  "remove-bg/passport-photo": removeBgPassportPhoto,
  "upscale/old-photos": upscaleOldPhotos,
  "upscale/4k": upscale4k,
  "upscale/anime": upscaleAnime,
  "upscale/profile-picture": upscaleProfilePicture,
  "ai-headshot/linkedin": headshotLinkedin,
  "ai-headshot/corporate": headshotCorporate,
  "ai-editor/change-background": editorChangeBackground,
};

export function variantPage(parent: ParentTool, slug: string): ToolPage | undefined {
  return VARIANT_PAGES[`${parent}/${slug}`];
}
