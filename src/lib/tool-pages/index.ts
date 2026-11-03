import { getPageConfig, type PageSEO } from "@/lib/page-config";
import type { ToolPage } from "./types";
import removeBg from "./remove-bg";
import upscale from "./upscale";
import aiEditor from "./ai-editor";
import aiHeadshot from "./ai-headshot";
import compressImage from "./compress-image";
import resizeImage from "./resize-image";
import cropImage from "./crop-image";
import convertImage from "./convert-image";
import rotateImage from "./rotate-image";
import watermarkImage from "./watermark-image";
import imageToPdf from "./image-to-pdf";
import memeGenerator from "./meme-generator";
import blurImage from "./blur-image";
import qrCodeGenerator from "./qr-code-generator";
import invisibleWatermarkRemover from "./invisible-watermark-remover";
import tiktokWatermarkRemover from "./tiktok-watermark-remover";
import aiImageGenerator from "./ai-image-generator";

/**
 * The tool pages that have an article of their own, one file each in this
 * folder, keyed by route ("/remove-bg" → "remove-bg"). Server-only: these are
 * long, and LandingPage is a client component, so the article is rendered on
 * the server (AppArticle) and handed to it as a node.
 */
export const TOOL_PAGES: Record<string, ToolPage> = {
  "remove-bg": removeBg,
  "upscale": upscale,
  "ai-editor": aiEditor,
  "ai-headshot": aiHeadshot,
  "compress-image": compressImage,
  "resize-image": resizeImage,
  "crop-image": cropImage,
  "convert-image": convertImage,
  "rotate-image": rotateImage,
  "watermark-image": watermarkImage,
  "image-to-pdf": imageToPdf,
  "meme-generator": memeGenerator,
  "blur-image": blurImage,
  "qr-code-generator": qrCodeGenerator,
  "invisible-watermark-remover": invisibleWatermarkRemover,
  "tiktok-watermark-remover": tiktokWatermarkRemover,
  "ai-image-generator": aiImageGenerator,
};

/** page-config ids that differ from their route. */
const ROUTE_OF: Record<string, string> = { headshot: "ai-headshot" };

export function toolPage(id: string): ToolPage | undefined {
  return TOOL_PAGES[ROUTE_OF[id] ?? id];
}

/**
 * The page config with the tool page's own title, heading, description, line
 * and FAQ in place of the stored ones. Applied after the page_seo row is
 * merged, so an old row saved from /admin/seo can't bring the thin copy back.
 * The feature grid is dropped: the article replaces it.
 */
export function withToolPage(config: PageSEO, page: ToolPage | undefined): PageSEO {
  if (!page) return config;
  return {
    ...config,
    title: page.title,
    meta_description: page.metaDescription,
    og_title: page.title,
    og_description: page.metaDescription,
    keywords: page.keywords,
    h1: page.h1,
    subtitle: page.subtitle,
    cta_text: page.ctaText ?? config.cta_text,
    features: [],
    faq: page.faq,
  };
}

/** getPageConfig, with the tool page applied. */
export async function toolConfig(id: string): Promise<PageSEO> {
  return withToolPage(await getPageConfig(id), toolPage(id));
}
