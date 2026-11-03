import type { ToolPage } from "./types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";

const page: ToolPage = {
  title: "Image Upscaler — Upscale and Unblur Photos Online",
  h1: "AI Image Upscaler",
  metaDescription: "Make a small or blurry photo bigger and sharper. Free 2× upscaling in your browser, or Pro AI that rebuilds fine detail. No watermark.",
  subtitle: "Make a small or soft photo bigger and crisper. Normal mode upscales 2× in your browser for free; Pro AI rebuilds hair, skin and fabric detail for 2 credits.",
  keywords: "image upscaler, upscale image, increase image resolution, unblur image, enhance photo quality, ai upscaler, make picture clearer, photo enhancer, 4k upscaler",
  alt: {
    before: "A small, soft portrait photo before upscaling",
    after: "The same portrait after upscaling, sharper with visible hair and skin detail",
  },
  sections: [
    {
      heading: "How do you upscale an image?",
      items: [
        { t: "1. Drop your photo on this page", d: "JPG, PNG or WebP. It opens in the Pixel Shine editor with the upscaler already open." },
        { t: "2. Pick a mode and a size", d: "**Normal** makes the image 2× (or 4×) bigger in your browser with gentle sharpening. **Pro AI** sends it to an AI model that redraws fine detail. Choose 2× or 4×; the editor tells you the size you'll get before you press the button." },
        { t: "3. Compare and download", d: "Look at the result next to your original, then download it. If you want to keep going, crop, compress or convert it in the same window." },
      ],
    },
    {
      heading: "Normal or Pro AI: which one should you use?",
      paragraphs: [
        "They solve different problems, and picking the right one saves you credits.",
        "**Normal** is a careful resize. It scales the picture up with high-quality smoothing, then adds a little contrast, colour and sharpening so the bigger version doesn't look washed out. It never invents anything: every detail in the result was in your photo. That makes it right for logos, screenshots, graphics and photos that are already sharp but simply too small, for example a 600-pixel product shot you need at 1,200 pixels.",
        "**Pro AI** is for photos that are soft, noisy or blurry, where making them bigger only makes the problem bigger. It sends the image to Google's Nano Banana Pro model, which looks at what's in the picture and rebuilds what a sharper photo would show: individual strands of hair, skin texture, the weave of a fabric, crisp edges on lettering. It costs **" + COST + "**.",
      ],
      table: {
        head: ["", "Normal", "Pro AI"],
        rows: [
          ["Best for", "Sharp images that are too small: logos, screenshots, product shots", "Soft, blurry or noisy photos, old scans, low-light shots"],
          ["What it does", "Enlarges with smoothing and light sharpening", "Redraws fine detail with an AI model"],
          ["Where it runs", "In your browser", "On fal.ai's servers"],
          ["Cost", "Free (2×)", COST],
          ["Changes details?", "Never", "Can, slightly — check faces and text"],
        ],
      },
    },
    {
      heading: "Who needs an image upscaler?",
      items: [
        { t: "Online sellers", d: "Marketplaces and stores look better with large product images that customers can zoom into. If a supplier sent you small photos, upscale them before listing. Product shots with clean edges usually do well in Normal mode; soft ones are worth Pro AI." },
        { t: "Creators and social media managers", d: "A frame grabbed from a video, a meme saved from a chat, or an old post you want to reuse are often too small and too soft for a new thumbnail. Pro AI is the one that brings back a readable face; then crop it to 16:9 in the same editor for YouTube." },
        { t: "Families restoring old photos", d: "A scanned print from the 1990s is usually small and grainy. Pro AI sharpens it and cleans the grain. If it's also faded, torn or scratched, the [restore old photos](/creative/restore-old-photos) app is built for that, and [upscale old photos](/upscale/old-photos) covers scans in detail." },
        { t: "Anyone printing a photo", d: "Prints need more pixels than screens. A rough guide is about 300 pixels per inch for a sharp print, so a 6×4-inch print wants roughly 1,800×1,200 pixels. If your photo is smaller, upscale it first. For posters and wall art, see [4K image upscaler](/upscale/4k)." },
        { t: "Designers and marketers", d: "Logos sent as tiny JPGs, icons for a high-resolution screen, and AI images that came out at 1,024 pixels all need to be bigger. Normal mode keeps graphics faithful; Pro AI suits photographs." },
      ],
    },
    {
      heading: "Can you really unblur a photo?",
      paragraphs: [
        "Partly, and it's worth being honest about where the line is. Mild softness, a slightly missed focus, compression blur from WhatsApp, and grain from a phone in low light all improve a lot with Pro AI, because the model can tell what the detail should look like and redraws it.",
        "Heavy motion blur, a face that is only a few pixels wide, or text you genuinely can't read are different. The information isn't in the photo, so any tool can only guess. Pro AI will produce something sharp and plausible, but it may not be exactly what was there. For anything that has to be accurate, such as a document or a licence plate, treat the result as an illustration, not evidence.",
      ],
    },
    {
      heading: "Is the image upscaler free?",
      paragraphs: [
        "Normal 2× upscaling is free. It runs in your browser, so there's no per-image cost. You can try it twice without an account; after that, a free account keeps it unlimited. Normal 4× is unlocked once your account has credits.",
        `Pro AI costs ${COST} per image and is only charged when it works. Credits come from a one-time pack (from ${PACK_FROM}; pack credits never expire) or a monthly plan. Nothing you download has a watermark.`,
      ],
    },
    {
      heading: "How does it compare with other upscalers?",
      table: {
        head: ["Option", "Good for", "Keep in mind"],
        rows: [
          ["**Pixel Shine**", "Free browser upscaling plus AI detail when you need it, with the rest of the editor in the same window.", `Pro AI is ${COST} per image.`],
          ["Upscayl", "A free, open-source desktop app with several AI models.", "You install it, and it runs on your own computer's graphics card."],
          ["Topaz Gigapixel", "Very fine control for photographers.", "Paid desktop software."],
          ["Photoshop Super Resolution", "Built into Camera Raw for people who already pay for Photoshop.", "Doubles the size only; part of a subscription."],
          ["Let's Enhance", "An online upscaler with print-oriented sizes.", "Free trial credits, then a subscription."],
        ],
      },
    },
    {
      heading: "How do you get the best result?",
      list: [
        "**Start from the original file**, not a screenshot of it or a copy sent through a chat app. Every re-save throws detail away.",
        "**Crop first, then upscale.** If you only need a face, crop to it before enlarging; the tool spends its effort where it matters.",
        "**Upscale once.** Running a photo through twice compounds sharpening and can look artificial. Go straight to the size you need.",
        "**Check faces and lettering** after Pro AI. If something looks slightly off, run it again; each run is a fresh attempt.",
        "**Compress after, not before.** If the upscaled file is too big to upload, use [compress image](/compress-image) at the end.",
      ],
    },
    {
      heading: "What can't an upscaler do?",
      list: [
        "Recover detail that was never captured. Upscaling makes a picture larger and clearer; it can't read a number plate that is a grey smudge.",
        "Fix a photo that's badly framed, too dark or overexposed. Brighten it with Adjust in the editor first.",
        "Produce unlimited sizes. Results are capped at 20,000 pixels on a side, and very large images may need 2× instead of 4×.",
        "Promise an identical face. Pro AI is good at keeping likeness, but it redraws, so compare it with the original for anything important.",
      ],
    },
    {
      heading: "What happens to your photo?",
      paragraphs: [
        "Normal mode runs in your browser; the photo isn't sent anywhere to be processed. Pro AI sends the photo to fal.ai, which runs the model. If you're signed in, the result is saved in My Creations so you can find it later, and you can delete it there. Images aren't used to train AI models and aren't sold. More in the [privacy policy](/privacy).",
      ],
    },
  ],
  faq: [
    { q: "How do I increase the resolution of an image?", a: "Drop the image on this page, choose 2× or 4×, and pick Normal or Pro AI. Normal enlarges and sharpens in your browser; Pro AI rebuilds fine detail with an AI model. Then download the larger image." },
    { q: "Is the image upscaler free?", a: `Normal 2× upscaling is free and runs in your browser; a free account keeps it unlimited after two tries. Pro AI uses an AI model and costs ${COST} per image, only when it works.` },
    { q: "Can it unblur a photo?", a: "It improves mild blur, soft focus, compression and grain a lot, especially in Pro AI mode. Heavy motion blur or tiny unreadable details can't be recovered exactly; the AI can only make a plausible guess." },
    { q: "What's the difference between 2× and 4×?", a: "2× doubles the width and height, so the image has four times as many pixels. 4× quadruples them. A 1,000×750 photo becomes 2,000×1,500 at 2× and 4,000×3,000 at 4×." },
    { q: "Will Pro AI change my face?", a: "It aims to keep the likeness, and usually does. Because it redraws fine detail, small things can shift, so compare the result with the original, and run it again if a face doesn't look right." },
    { q: "Can I upscale to 4K?", a: "Yes, if your image is at least about 1,000 pixels wide: 4× of 960×540 is 3,840×2,160, which is 4K. The 4K image upscaler page explains which sizes reach 4K." },
    { q: "Does upscaling work on anime and drawings?", a: "Yes. Normal mode keeps line art faithful, which suits most anime images and illustrations. The anime upscaler page covers the details." },
    { q: "Is there a watermark?", a: "No. Upscaled images download without a watermark on any plan." },
    { q: "What's the largest image I can make?", a: "Up to 20,000 pixels on the longer side. If 4× would go past that, the editor tells you and suggests 2× instead." },
  ],
};

export default page;
