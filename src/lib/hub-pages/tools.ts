import { CREDIT_COST } from "@/lib/plans";
import type { HubPage } from "./types";

/** The guide under the tool grid on /tools. */
const page: HubPage = {
  sections: [
    {
      heading: "Which image tool do you need?",
      paragraphs: [
        "Most everyday image problems fall into a handful of jobs. Pick the one that matches what you're trying to do, and the tool follows:",
      ],
      table: {
        head: ["You want to…", "Use", "Free?"],
        rows: [
          ["Get under an upload limit like 100 KB", "[Compress Image](/compress-image) with Target size", "Yes"],
          ["Make a photo an exact number of pixels", "[Resize Image](/resize-image)", "Yes"],
          ["Make it square, 4:5, 9:16, 16:9 or round", "[Crop Image](/crop-image)", "Yes"],
          ["Open a WebP, or turn PNG into JPG", "[Convert Image](/convert-image)", "Yes"],
          ["Fix a sideways photo or mirror a selfie", "[Rotate & Flip](/rotate-image)", "Yes"],
          ["Hide a face, number plate or address", "[Blur Image](/blur-image)", "Yes"],
          ["Add your name or \"Sample\" across a photo", "[Add Watermark](/watermark-image)", "Yes"],
          ["Erase a date stamp or logo from your own photo", "[Watermark Remover](/watermark-remover)", "Yes"],
          ["Make a small photo bigger and sharper", "[Image Upscaler](/upscale)", `Normal 2× free; Pro AI ${CREDIT_COST} credits`],
          ["Cut out a person or product", "[Background Remover](/remove-bg)", `${CREDIT_COST} credits`],
          ["Edit a photo by describing the change", "[AI Photo Editor](/ai-editor)", `${CREDIT_COST} credits`],
        ],
      },
    },
    {
      heading: "What's free, and what uses credits?",
      paragraphs: [
        `The tools that run **in your browser** are free: compress, convert, crop, resize, rotate, blur, watermark, meme text, image to PDF, QR codes, the watermark removers and Normal upscaling. They have no watermark and no daily cap. As a guest you get two edits before we ask you to create a free account, which then makes them unlimited.`,
        `The **AI tools** run on paid models on our servers, so they use credits: ${CREDIT_COST} per result, charged only when it works. That includes the background remover, Pro AI upscaling, the AI photo editor, AI headshots, the object remover and the 200+ [AI photo apps](/creative). See [pricing](/pricing) for packs and plans.`,
      ],
    },
    {
      heading: "Are my images private?",
      paragraphs: [
        "With the browser tools, your images never leave your device. The work happens inside your browser, using your computer's or phone's own processor, so nothing is uploaded to us or anyone else. That makes them a good fit for ID documents, contracts, family photos and anything else you'd rather keep to yourself.",
        "The AI tools send your image to our AI provider, fal.ai, to process it. Results are saved to My Creations in your account, where you can delete them; images aren't used to train AI models and aren't sold.",
      ],
    },
    {
      heading: "Do the tools work on phones?",
      paragraphs: [
        "Yes. Every tool works in a phone browser: Safari on iPhone, Chrome on Android. Tap the upload box to choose a photo from your gallery or files, and the result downloads to your Downloads folder or Files app. The watermark remover and blur tool let you paint or drag with your finger. Nothing needs installing.",
      ],
    },
    {
      heading: "Common combinations",
      items: [
        { t: "Upload a photo to a job or exam form", d: "Crop to the shape the form wants, resize to its pixels, then compress to its KB limit. Our [guide to reducing image size in KB](/blog/how-to-reduce-image-size-in-kb) walks through it." },
        { t: "Prepare product photos for a shop", d: "Remove the background, place the product on white, then resize and compress the set with the [batch editor](/batch-editor)." },
        { t: "Make a sharp profile picture", d: "Upscale a small photo, crop it square, and swap a messy background if needed. See [how to make a profile picture](/blog/how-to-make-a-profile-picture)." },
        { t: "Speed up a website", d: "Resize images to their display width, convert to WebP and compress. See [how to optimize images for a website](/blog/how-to-optimize-images-for-website)." },
        { t: "Send documents as one file", d: "Crop and rotate photos of each page, then turn them into a PDF. See [how to combine images into a PDF](/blog/how-to-combine-images-into-a-pdf)." },
      ],
    },
    {
      heading: "Size and format pages for common jobs",
      paragraphs: [
        "Some jobs come up so often they have their own pages, set up with the right options: [compress to 20 KB](/compress/compress-image-to-20kb), [50 KB](/compress/compress-image-to-50kb), [100 KB](/compress/compress-image-to-100kb) or [200 KB](/compress/compress-image-to-200kb); crop for an [Instagram post](/crop/instagram-post-size), a [story](/crop/instagram-story-size) or a [YouTube thumbnail](/crop/youtube-thumbnail-crop); convert [WebP to PNG](/convert/webp-to-png), [PNG to JPG](/convert/png-to-jpg) or [JPG to WebP](/convert/jpg-to-webp). Each explains the sizes and formats involved, so you get it right first time.",
      ],
    },
  ],
  faq: [
    { q: "Are these image tools really free?", a: "Yes. The browser tools are free with no watermark and no daily limit. Guests get two edits, and a free account makes them unlimited. Only the AI tools use credits." },
    { q: "Do I need to create an account?", a: "Not for your first two edits with the free tools. After that, a free account keeps them unlimited. AI tools always need an account." },
    { q: "Are my photos uploaded?", a: "Not with the browser tools; they process images on your device. AI tools send images to our AI provider to process them." },
    { q: "Which formats can I use?", a: "JPG, PNG and WebP work everywhere. The convert pages also handle GIF, BMP, SVG and AVIF." },
    { q: "Can I edit many images at once?", a: "Yes. The batch editor compresses, resizes, crops, rotates, watermarks and converts up to 100 images in your browser." },
    { q: "Is there a watermark on downloads?", a: "No. Nothing you download from PixelShine has a watermark, free or paid." },
  ],
};

export default page;
