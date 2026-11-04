import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "Upscale Old Photos — Sharpen and Enlarge Old Family Photos",
  h1: "Upscale Old Photos",
  metaDescription: "Make small, soft old photos bigger and sharper for printing, framing and sharing. Scan tips, AI enhancement, and when to restore instead.",
  subtitle: "Turn a small, soft scan of an old family photo into a larger, sharper picture you can print, frame or share, with faces, hair and fabric brought back into focus.",
  keywords: "upscale old photos, enhance old photos, sharpen old photo, enlarge old photo, improve old photo quality, old photo enhancer, increase resolution of old photo",
  sections: [
    {
      heading: "How do you upscale an old photo?",
      items: [
        { t: "1. Scan or photograph the print", d: "A flatbed scanner at 600 dpi is best. With a phone, lay the print flat by a window, hold the phone straight above it, and avoid glare on glossy prints. Crop away the table." },
        { t: "2. Choose Pro AI and 2× or 4×", d: `Drop the scan here. For old photos, **Pro AI** (${COST}) is the one that matters: it rebuilds faces, hair and textures that a plain enlargement would only blur. Pick 4× for a small print, 2× if the scan is already large.` },
        { t: "3. Compare and download", d: "Check faces against the original, then download. If the photo is also faded, scratched or torn, run it through restore as well (below)." },
      ],
    },
    {
      heading: "Upscale or restore: which does your photo need?",
      figure: creativeFigure("restore-old-photos", "Restore Old Photos", "A torn, faded sepia family photo next to the same photo restored in sharp colour", "A torn, faded family print, restored and colourised."),
      paragraphs: [
        "Upscaling makes a photo **bigger and sharper**. Restoring **repairs damage**: tears, creases, spots, scratches, fading and colour casts, and can add colour to black-and-white. Many old photos need both.",
      ],
      table: {
        head: ["Your photo is…", "Use"],
        rows: [
          ["Small or soft but in good condition", "Upscale (Pro AI)"],
          ["Faded, scratched, creased or torn", "[Restore old photos](/creative/restore-old-photos), then upscale if you need it bigger"],
          ["Black and white and you'd like colour", "[Colorize photo](/creative/colorize-photo)"],
          ["Good, just needs to be bigger for a print", "Upscale (Normal is often enough)"],
        ],
      },
    },
    {
      heading: "Who upscales old photos?",
      items: [
        { t: "Families making albums and gifts", d: "Grandparents' wedding photos, school portraits and holiday snaps printed small in the 1960s–90s can be enlarged for frames, canvases and anniversary gifts." },
        { t: "People preparing memorials", d: "A funeral or memorial often needs one photo printed large at short notice, and the only copy is a small, old print. Upscaling makes it presentable at poster size." },
        { t: "Family historians", d: "Sharpen faces in group photos and old documents so relatives can be recognised and labelled for the family tree." },
        { t: "Local history groups and archives", d: "Make digitised photos clearer for exhibitions, books and websites, while keeping the original scan as the record." },
      ],
    },
    {
      heading: "How sharp can an old photo get?",
      paragraphs: [
        "It depends on what the original captured. A small but well-focused print upscales beautifully. A photo that was blurry when it was taken, or a face that's only a few millimetres wide in a group shot, will get sharper but the AI has to fill in detail it can't see. The result looks natural, but small features like teeth, eyes and jewellery may not match exactly.",
        "Because Pro AI redraws fine detail, always compare faces with the original. If a face looks unfamiliar, run it again or use the Normal mode result, which only enlarges what's there.",
      ],
    },
    {
      heading: "Scanning tips that make the biggest difference",
      list: [
        "**Scan at 600 dpi or more** for small prints; the more real detail you start with, the less the AI has to guess.",
        "**Clean the print and the scanner glass** with a soft, dry cloth. Dust becomes spots.",
        "**Avoid glare on glossy prints.** Photograph at a slight angle to the window, or use a scanner.",
        "**Scan the whole print, borders included,** then crop in the editor.",
        "**Keep the original scan** untouched as your master copy.",
      ],
    },
    {
      heading: "What does restoring and upscaling cost?",
      paragraphs: [
        `Pro AI upscaling is ${COST} per photo, charged only when it works; Normal 2× upscaling is free in your browser. Restoration and colourisation are ${COST} each as well. Credits come from packs (from ${PACK_FROM}, never expiring) or a monthly plan. No watermark is added.`,
        "Your photo is processed by fal.ai's servers for Pro AI and saved to My Creations, where you can delete it. Images aren't used to train AI models.",
      ],
    },
  ],
  faq: [
    { q: "How can I make an old photo clearer?", a: "Scan it at 600 dpi or more, drop it on this page and use Pro AI at 2× or 4×. If it's also faded or damaged, restore it as well." },
    { q: "What's the difference between upscaling and restoring?", a: "Upscaling makes a photo bigger and sharper. Restoring repairs damage like tears, scratches and fading. Many old photos benefit from both." },
    { q: "Can I enlarge an old photo for a frame?", a: "Yes. As a guide, a sharp print needs about 300 pixels per inch, so a 10×8-inch print wants roughly 3,000×2,400 pixels." },
    { q: "Will the faces stay the same?", a: "Pro AI aims to keep likeness, but it redraws fine detail. Compare faces with the original and run it again if one doesn't look right." },
    { q: "Can it colourise black-and-white photos?", a: "Not the upscaler itself. Use the Colorize Photo app, then upscale the result if you need it bigger." },
    { q: "How much does it cost?", a: `${COST} per photo for Pro AI, only when it works. Normal 2× upscaling is free.` },
    { q: "Can I scan with my phone?", a: "Yes. Lay the print flat by a window, hold the phone straight above it, avoid glare, and crop away the background." },
    { q: "Is there a watermark?", a: "No. Restored and enlarged family photos download without any mark, ready to print." },
  ],
};

export default page;
