import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "4K Image Upscaler — Upscale Images to 4K Online",
  h1: "4K Image Upscaler",
  metaDescription: "Upscale a photo to 4K (3840×2160) for wallpapers, TVs, prints and thumbnails. Which sizes reach 4K at 2× or 4×, and when to use Pro AI.",
  subtitle: "Turn a smaller image into a 4K one (3,840 × 2,160 pixels) for wallpapers, big screens, prints and high-quality thumbnails. Pick 2× or 4× and let AI rebuild the detail.",
  keywords: "4k image upscaler, upscale image to 4k, 4k upscaler, convert image to 4k, 4k photo enhancer, upscale to 4k free, high resolution image",
  sections: [
    {
      heading: "How do you upscale an image to 4K?",
      figure: creativeFigure("4k-image-upscaler", "4K Image Upscaler", "A soft landscape photo of a woman overlooking a coastal town next to a sharper, more detailed version", "A soft coastal photo, upscaled with sharper detail in the hills and buildings."),
      items: [
        { t: "1. Check your starting size", d: "4K is 3,840 pixels wide. At 2× you need an image at least 1,920 pixels wide (Full HD); at 4× you need at least 960 pixels wide. The editor shows the size you'll get before you press the button." },
        { t: "2. Upscale with the right mode", d: `**Pro AI** (${COST}) rebuilds fine detail and is the one to use for photos you'll see big. **Normal** enlarges with sharpening in your browser, fine for graphics and already-sharp images.` },
        { t: "3. Crop to 16:9 if needed", d: "A 4K screen is 16:9. If your photo is a different shape, [crop it to Wide](/crop-image) so it fills the screen without bars." },
      ],
    },
    {
      heading: "What exactly is 4K?",
      paragraphs: [
        "On TVs, monitors and phones, \"4K\" means **3,840 × 2,160 pixels** (UHD), a 16:9 shape with four times as many pixels as Full HD. In cinema, 4K is slightly wider (4,096 pixels). For images, what matters is having around 3,840 pixels across, so the picture stays sharp on a 4K screen or a large print.",
      ],
      table: {
        head: ["Starting width", "2× gives", "4× gives"],
        rows: [
          ["960 px", "1,920 px", "**3,840 px (4K)**"],
          ["1,280 px", "2,560 px", "5,120 px"],
          ["1,920 px (Full HD)", "**3,840 px (4K)**", "7,680 px (8K)"],
          ["2,560 px", "5,120 px", "10,240 px"],
        ],
      },
      after: ["Results are capped at 20,000 pixels on a side, so very large images should use 2×."],
    },
    {
      heading: "Who needs 4K images?",
      items: [
        { t: "Wallpaper and screen savers", d: "A phone photo or AI image looks soft on a 4K monitor or TV. Upscale it to 3,840 pixels wide and it fills the screen crisply." },
        { t: "Creators", d: "YouTube thumbnails, channel art and video backgrounds hold up better when the source is sharp. Upscale stills grabbed from older footage before using them." },
        { t: "Prints and posters", d: "At about 300 pixels per inch, a 4K-wide image prints sharply at around 12.8 inches wide, and larger posters viewed from a distance need less. See [upscale old photos](/upscale/old-photos) for family prints." },
        { t: "AI art", d: "Many AI image models produce around 1,024 pixels. A 4× Pro AI upscale takes that past 4K for printing and big displays." },
        { t: "Online sellers", d: "Large product images let shoppers zoom right into texture and stitching, which builds trust." },
      ],
    },
    {
      heading: "Is it real 4K or just bigger?",
      paragraphs: [
        "Normal mode makes the image 4K in size, with sharpening, but can't add detail that wasn't in the photo, so a soft image looks like a soft image on a bigger canvas. Pro AI genuinely rebuilds detail: hair strands, leaves, textures, edges. It's as close to \"real\" 4K as you can get from a smaller original, with the caveat that the new detail is the AI's best estimate rather than something the camera recorded.",
      ],
    },
    {
      heading: "Tips for sharp 4K results",
      list: [
        "**Start from the original file**, not a screenshot or a WhatsApp copy.",
        "**Crop before you upscale**, so the pixels go where you need them.",
        "**Use 4× only when the image is small.** Over-enlarging an already large image wastes time and can look artificial.",
        "**Check fine text and faces** at 100% after Pro AI.",
        "**Save as PNG or high-quality JPG** for printing; compress only copies meant for the web.",
      ],
    },
    {
      heading: "How much does 4K upscaling cost?",
      paragraphs: [
        `Reaching 4K from a Full HD image with Normal 2× is free. Starting from something smaller means 4×: in Normal mode that's available once you hold credits, while a Pro AI run that rebuilds detail costs ${COST} and is refunded automatically if it fails. Credits start at ${PACK_FROM} for a pack you can use whenever you like. The main [image upscaler](/upscale) page compares the modes in detail.`,
      ],
    },
  ],
  faq: [
    { q: "How do I upscale an image to 4K?", a: "Drop it here, choose 2× if it's at least 1,920 pixels wide or 4× if it's at least 960 pixels wide, and use Pro AI for photos. Then download the 4K image." },
    { q: "What resolution is 4K?", a: "3,840 × 2,160 pixels on TVs and monitors (UHD). Cinema 4K is 4,096 pixels wide." },
    { q: "Is 4K upscaling free?", a: `Normal 2× upscaling is free in your browser. Pro AI, which rebuilds detail for a true 4K look, costs ${COST} per image.` },
    { q: "Can I make a 4K wallpaper from a phone photo?", a: "Yes. Most phone photos are already wide enough for 2× to pass 4K. Crop to 16:9 so it fills the screen." },
    { q: "Does upscaling to 4K add real detail?", a: "Pro AI rebuilds detail like hair and textures; Normal only enlarges and sharpens what's there." },
    { q: "How big can I print a 4K image?", a: "About 12.8 inches wide at 300 pixels per inch, and larger for posters viewed from a distance." },
    { q: "Is there a size limit?", a: "Results can be up to 20,000 pixels on a side. The editor suggests 2× if 4× would go over." },
    { q: "Will there be a watermark?", a: "No. 4K results download without a watermark." },
  ],
};

export default page;
