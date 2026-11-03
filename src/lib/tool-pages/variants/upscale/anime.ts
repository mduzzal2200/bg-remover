import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";

const page: ToolPage = {
  title: "Anime Upscaler — Upscale Anime Art and Wallpapers Online",
  h1: "Anime Image Upscaler",
  metaDescription: "Upscale anime art, screenshots and wallpapers to 2× or 4× with clean lines and flat colours. When to use Normal and when to use Pro AI.",
  subtitle: "Make anime art, screenshots, fan art and wallpapers bigger while keeping clean lines and flat colours. Normal mode keeps the drawing faithful; Pro AI rebuilds soft detail.",
  keywords: "anime upscaler, upscale anime image, anime image enhancer, anime wallpaper upscale, upscale anime art, waifu2x alternative, anime 4k upscale",
  sections: [
    {
      heading: "How do you upscale anime art?",
      items: [
        { t: "1. Start from the cleanest copy", d: "The original upload from the artist or the highest-quality screenshot you can get, not a re-shared, compressed copy." },
        { t: "2. Try Normal first", d: "Drop it here, pick 2× or 4× and run **Normal**. It's free, runs in your browser, and enlarges line art with gentle sharpening without changing the drawing." },
        { t: "3. Use Pro AI for soft or blocky images", d: `If the image is blurry or full of compression blocks, run **Pro AI** (${COST}). It rebuilds clean lines and smooth colour areas, but because it redraws, compare it with the original.` },
      ],
    },
    {
      heading: "Why is anime different from photos?",
      paragraphs: [
        "Anime and illustration are built from clean outlines and large areas of flat or softly shaded colour. Upscalers trained on photographs try to add texture: skin pores, fabric weave, grain. On line art that looks wrong, like noise on a clean cel. What anime needs is crisp edges, smooth gradients and no new texture.",
        "That's why the order matters. Normal mode only enlarges and sharpens, so lines stay exactly where the artist drew them. Pro AI is more powerful on badly compressed images, but it interprets the picture, so it may smooth or reshape small details like eyes, hair strands or background patterns.",
      ],
      table: {
        head: ["Your image", "Best mode"],
        rows: [
          ["Clean art, just small", "Normal 2× or 4×"],
          ["Screenshot with JPEG blocks or blur", "Pro AI"],
          ["Pixel art", "Neither: enlarge by whole numbers with no smoothing in an art app"],
          ["Mixed photo and drawing", "Pro AI, then check the drawn parts"],
        ],
      },
    },
    {
      heading: "Who upscales anime images?",
      items: [
        { t: "Wallpaper collectors", d: "Turn a 1080p screenshot or fan art into a crisp desktop or phone wallpaper. Crop to 16:9 for monitors or 9:16 for phones with the [crop tool](/crop-image)." },
        { t: "Fan artists and VTubers", d: "Enlarge older art for prints, stream overlays and model sheets without redrawing it." },
        { t: "Streamers and creators", d: "Upscale panels and screenshots for thumbnails, emotes and channel art that need to stay sharp at large sizes." },
        { t: "Collectors making prints", d: "Bring a favourite image up to print size. See the [4K upscaler](/upscale/4k) for sizes." },
      ],
    },
    {
      heading: "How does it compare with waifu2x and Real-ESRGAN?",
      paragraphs: [
        "waifu2x and the anime versions of Real-ESRGAN are well-known free tools trained specifically on anime, and they're excellent at it, usually as desktop apps or web demos with queues. Pixel Shine's Normal mode is a straightforward, free browser upscale that keeps the drawing faithful, and Pro AI is a general model that handles very damaged images well. If you upscale anime constantly and have a good graphics card, a dedicated anime model on your own computer is worth having; for occasional wallpapers and art, this is quicker.",
      ],
    },
    {
      heading: "Tips for anime upscaling",
      list: [
        "**Don't upscale twice.** Go straight to the size you need.",
        "**Crop first** to the part you want as a wallpaper or icon.",
        "**Keep it PNG** when you download; JPG adds blocks around lines.",
        "**Respect the artist.** Upscaling someone's art for personal use is one thing; reposting or selling it needs their permission and credit.",
        "**Turn a photo into anime** instead? That's the [photo to anime](/creative/anime-style) app.",
      ],
    },
    {
      heading: "Upscaling fan art, screenshots and manga pages",
      items: [
        { t: "Fan art you drew yourself", d: "Export the largest version your drawing app allows, then upscale only if a print shop or a site needs more pixels. Normal mode keeps your linework untouched." },
        { t: "Episode screenshots", d: "Streaming screenshots are often softened by video compression. Pro AI cleans the blocky edges around hair and eyes; check the face afterwards so the character still looks on-model." },
        { t: "Scanned manga and comic pages", d: "Black-and-white pages with screentone are tricky: Normal keeps the dots faithful, while Pro AI may smooth them into grey. Try Normal first and zoom in on a toned area." },
      ],
      after: ["Only upscale art you made or have permission to use, and credit the artist when you post someone else's work."],
    },
    {
      heading: "Is the anime upscaler free?",
      paragraphs: [
        `The faithful Normal mode costs nothing at 2×, which is all most wallpapers need; its 4× option opens up for accounts holding credits. Rebuilding a blurry screenshot with Pro AI uses ${COST}, and failed runs are never charged. A pack from ${PACK_FROM} covers plenty of wallpapers, and the art you download carries no mark of ours.`,
      ],
    },
  ],
  faq: [
    { q: "How do I upscale an anime image?", a: "Start with Normal at 2× or 4×, which keeps line art exactly as drawn. Switch to Pro AI only when the screenshot is blurry or blocky from compression." },
    { q: "Which mode is best for anime?", a: "Normal for clean art, because it keeps the lines exactly as drawn. Pro AI for soft or badly compressed screenshots." },
    { q: "Is the anime upscaler free?", a: `Yes for Normal 2×, which runs on your own device. The Pro AI redraw for damaged screenshots is ${COST} a go.` },
    { q: "Will a Full HD screenshot become a 4K wallpaper?", a: "Yes. A frame grabbed at 1,920 pixels wide reaches 3,840 at 2×, which is 4K width. Crop it to 16:9 so it fills a monitor." },
    { q: "Will Pro AI change the art style?", a: "It can smooth or reshape small details, because it redraws. Compare it with the original and use Normal if the style matters most." },
    { q: "Does it work on pixel art?", a: "Not well. Pixel art should be enlarged by whole numbers with smoothing turned off, which keeps the pixels square." },
    { q: "Is it like waifu2x?", a: "waifu2x is trained only on anime. Normal mode here is a faithful browser upscale and Pro AI is a general model that handles damaged images." },
    { q: "What format should I download?", a: "PNG, so flat colour fills and ink lines stay free of JPG speckle. Make a smaller WebP or JPG copy only for posting." },
  ],
};

export default page;
