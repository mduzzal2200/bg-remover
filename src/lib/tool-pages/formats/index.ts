import type { ToolPage } from "../types";
import compress_compress_image_to_100kb from "./compress/compress-image-to-100kb";
import compress_compress_image_to_1mb from "./compress/compress-image-to-1mb";
import compress_compress_image_to_200kb from "./compress/compress-image-to-200kb";
import compress_compress_image_to_20kb from "./compress/compress-image-to-20kb";
import compress_compress_image_to_500kb from "./compress/compress-image-to-500kb";
import compress_compress_image_to_50kb from "./compress/compress-image-to-50kb";
import crop_circle_crop_image from "./crop/circle-crop-image";
import crop_crop_image_to_square from "./crop/crop-image-to-square";
import crop_instagram_post_size from "./crop/instagram-post-size";
import crop_instagram_profile_picture from "./crop/instagram-profile-picture";
import crop_instagram_story_size from "./crop/instagram-story-size";
import crop_youtube_thumbnail_crop from "./crop/youtube-thumbnail-crop";
import convert_avif_to_jpg from "./convert/avif-to-jpg";
import convert_avif_to_png from "./convert/avif-to-png";
import convert_bmp_to_jpg from "./convert/bmp-to-jpg";
import convert_gif_to_png from "./convert/gif-to-png";
import convert_jpg_to_png from "./convert/jpg-to-png";
import convert_jpg_to_webp from "./convert/jpg-to-webp";
import convert_png_to_jpg from "./convert/png-to-jpg";
import convert_png_to_webp from "./convert/png-to-webp";
import convert_svg_to_png from "./convert/svg-to-png";
import convert_webp_to_jpg from "./convert/webp-to-jpg";
import convert_webp_to_png from "./convert/webp-to-png";

/**
 * The crop / convert / compress size pages (/compress/compress-image-to-20kb,
 * /convert/png-to-jpg, /crop/crop-image-to-square, …), each with an article of
 * its own in place of the template text lib/crops, lib/conversions and
 * lib/compressions used to build. Keyed "<family>/<slug>", the page's path.
 */
export const FORMAT_PAGES: Record<string, ToolPage> = {
  "compress/compress-image-to-100kb": compress_compress_image_to_100kb,
  "compress/compress-image-to-1mb": compress_compress_image_to_1mb,
  "compress/compress-image-to-200kb": compress_compress_image_to_200kb,
  "compress/compress-image-to-20kb": compress_compress_image_to_20kb,
  "compress/compress-image-to-500kb": compress_compress_image_to_500kb,
  "compress/compress-image-to-50kb": compress_compress_image_to_50kb,
  "crop/circle-crop-image": crop_circle_crop_image,
  "crop/crop-image-to-square": crop_crop_image_to_square,
  "crop/instagram-post-size": crop_instagram_post_size,
  "crop/instagram-profile-picture": crop_instagram_profile_picture,
  "crop/instagram-story-size": crop_instagram_story_size,
  "crop/youtube-thumbnail-crop": crop_youtube_thumbnail_crop,
  "convert/avif-to-jpg": convert_avif_to_jpg,
  "convert/avif-to-png": convert_avif_to_png,
  "convert/bmp-to-jpg": convert_bmp_to_jpg,
  "convert/gif-to-png": convert_gif_to_png,
  "convert/jpg-to-png": convert_jpg_to_png,
  "convert/jpg-to-webp": convert_jpg_to_webp,
  "convert/png-to-jpg": convert_png_to_jpg,
  "convert/png-to-webp": convert_png_to_webp,
  "convert/svg-to-png": convert_svg_to_png,
  "convert/webp-to-jpg": convert_webp_to_jpg,
  "convert/webp-to-png": convert_webp_to_png,
};

export type FormatFamily = "compress" | "crop" | "convert";

export function formatPage(family: FormatFamily, slug: string): ToolPage | undefined {
  return FORMAT_PAGES[`${family}/${slug}`];
}
