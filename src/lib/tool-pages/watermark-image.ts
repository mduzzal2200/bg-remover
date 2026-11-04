import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Add Watermark to Photo Online — Text Watermark, Free",
  h1: "Add a Watermark to Photos",
  metaDescription: "Put your name, shop or © notice on a photo before you share it. Corner, centre or tiled across the image, any colour and opacity. Free.",
  subtitle: "Put your name, shop or © notice on a photo before it goes online. Choose a corner, the centre, or a tiled pattern across the whole image, and set the size, colour and opacity.",
  keywords: "add watermark to photo, watermark image, watermark photo online, add text watermark, copyright watermark, watermark maker, tiled watermark, protect photos",
  alt: { hero: "A photo with a small semi-transparent text watermark added in the corner" },
  sections: [
    {
      heading: "How do you add a watermark to a photo?",
      items: [
        { t: "1. Drop your photo here", d: "Any JPG, PNG or WebP works. The editor opens with the Watermark panel ready for your text." },
        { t: "2. Type your watermark and place it", d: "Write your name, website, shop name or \"© 2026 Your Name\". Choose one of six positions: top-left, top-right, centre, bottom-left, bottom-right, or **tiled**, which repeats it diagonally across the whole image." },
        { t: "3. Set size, colour and opacity, then download", d: "Size runs from 2% to 15% of the photo's shorter side, so it looks the same on a small or a large image. Pick a colour and an opacity between 10% and 100%. Apply, check it, and download." },
      ],
    },
    {
      heading: "Which watermark style should you use?",
      table: {
        head: ["Style", "How it looks", "Best for"],
        rows: [
          ["Small corner mark", "Your name in a corner at 50–70% opacity", "Portfolios, social posts, anything where the photo should be enjoyed"],
          ["Centred mark", "Larger text across the middle at 20–40% opacity", "Client proofs you don't want used before they're paid for"],
          ["Tiled", "The text repeated diagonally over the whole image", "Product photos and artwork that people copy; hardest to crop or edit out"],
        ],
      },
      after: [
        "A watermark is a trade-off between protection and how nice the photo looks. A tiny corner mark can be cropped away in seconds; a tiled one can't, but it's always visible. Pick the lightest style that still does the job.",
      ],
    },
    {
      heading: "Who watermarks their photos?",
      items: [
        { t: "Photographers", d: "Send proofs to a client with a centred or tiled mark, and the final, clean files once they've chosen and paid. Put a small, tasteful corner credit on images you post to Instagram or your portfolio." },
        { t: "Online sellers", d: "Product photos you paid to shoot get copied onto other people's listings. A tiled shop name or website makes them useless to copy and tells shoppers where the original came from." },
        { t: "Artists and designers", d: "Share work-in-progress and finished pieces with a © notice so it's clear who made it, and so reposts keep your name attached." },
        { t: "Estate agents and businesses", d: "Brand every property or project photo with your company name and website, so they still point back to you when they're shared." },
        { t: "Anyone sharing documents", d: "Mark a copy of an ID or a certificate with \"Copy for [purpose] only\" across it before sending, so it can't easily be reused for something else." },
      ],
    },
    {
      heading: "What should your watermark say?",
      list: [
        "**Your name or brand**, exactly as people would search for it. It's free advertising every time the photo is shared.",
        "**Your website or handle**, such as @yourstudio, if you want people to find more of your work.",
        "**A © notice**, such as \"© 2026 Priya Shah\". It doesn't create copyright (you already own it), but it reminds people that someone does.",
        "**A purpose line** on documents: \"For bank KYC only, 3 Nov 2026\".",
        "Keep it short. Two to four words read cleanly even when the mark is small.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes, and the tool never puts its own name on your photo, only the words you type. The mark is drawn by your browser, so there's no fee and no cap. You can watermark two photos as a guest; a free account makes it unlimited.",
        "To watermark a whole set of photos in one go, use the [batch editor](/batch-editor): add the text once and it's applied to up to 100 images, all in the same place and style.",
      ],
    },
    {
      heading: "How do you make a watermark that looks good?",
      list: [
        "**White text at 50–60% opacity** works on most photos; it has a soft shadow so it stays readable on light areas too.",
        "**Match the colour to the photo** for a subtler mark: a dark grey on a bright product shot, a cream on a warm portrait.",
        "**Keep corner marks small**, around 3–5%. Big corner text competes with the photo.",
        "**Use tiled for protection, not decoration.** It's the hardest to remove, and the busiest to look at.",
        "**Apply it last.** Crop, resize and edit first, so the watermark sits where you want it on the final image.",
      ],
    },
    {
      heading: "What can't the watermark tool do?",
      list: [
        "Add a logo image. It adds text. To use a logo, first make it transparent with the [background remover](/remove-bg), then place it in a design app.",
        "Stop a determined person completely. A watermark is a deterrent and a credit, not a lock. Tiled marks come closest.",
        "Hide a watermark inside the file. If you want to remove a watermark rather than add one, see the [watermark remover](/watermark-remover), for your own photos only.",
      ],
    },
    {
      heading: "Is it private?",
      paragraphs: [
        "Your mark is drawn onto the photo by your own browser; the image isn't uploaded to do it. If you have an account, a copy is kept in My Creations, which you can clear at any time. A PNG stays a PNG; a JPG is saved at high quality.",
      ],
    },
  ],
  faq: [
    { q: "How do I add a watermark to a photo?", a: "Drop the photo here, type your watermark text, choose a position, size, colour and opacity, then press Apply and download." },
    { q: "Is the watermark tool free?", a: "Yes, with no fee and none of our branding on your photo. Guests can watermark two photos; a free account removes the limit." },
    { q: "Can I put the watermark all over the photo?", a: "Yes. Choose Tiled and the text repeats diagonally across the whole image, which is the hardest style to crop or edit out." },
    { q: "Can I change the opacity?", a: "Yes, anywhere from 10% to 100%. 50 to 60% is a good starting point for a visible but unobtrusive mark." },
    { q: "Can I add my logo as a watermark?", a: "Not here; this tool adds text. You can make your logo transparent with the background remover and place it with a design app." },
    { q: "Can I watermark many photos at once?", a: "Yes. The batch editor applies the same watermark to up to 100 images in one go." },
    { q: "Does it reduce photo quality?", a: "No. PNG photos stay lossless and JPGs are saved at high quality, so only the watermark changes." },
    { q: "What should I write in a watermark?", a: "Your name or brand, your website or handle, or a © notice such as © 2026 Your Name. Keep it to a few words." },
  ],
};

export default page;
