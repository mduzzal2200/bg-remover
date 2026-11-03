import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Compress Image to 200KB — Fast Web Images Without Visible Loss",
  h1: "Compress Image to 200KB",
  metaDescription: "Shrink photos to 200 KB for websites, blogs, product pages and email, with quality you can't tell from the original. Free, no watermark.",
  subtitle: "200 KB keeps a photo looking like the original while making it ten to twenty times smaller than a phone picture. Ideal for websites, product pages, blogs and email.",
  keywords: "compress image to 200kb, reduce image size to 200kb, compress jpeg to 200kb, image under 200kb, optimize image 200kb, compress photo for website",
  sections: [
    {
      heading: "How do you compress an image to 200 KB?",
      items: [
        { t: "1. Resize if it's huge", d: "If your site never shows the image wider than 1,600 pixels, [resize](/resize-image) a 4,000-pixel photo down first. You'll keep more quality at 200 KB." },
        { t: "2. Drop it here and compress", d: "The target is set to 200 KB. The compressor picks the highest quality that fits." },
        { t: "3. Download and upload", d: "Use the JPG on your site or listing; you'll have a fast page and a photo that looks right." },
      ],
    },
    {
      heading: "Why is 200 KB a good size for the web?",
      paragraphs: [
        "Because it's where quality stops being the trade-off. At 200 KB a typical photo around 1,200 to 1,800 pixels wide looks the same as the original on a laptop or phone, and it loads quickly even on mobile data. Images are usually the heaviest part of a web page, so keeping each one around this size is one of the simplest things you can do for page speed, which affects how long visitors stay and how search engines judge the page.",
      ],
      table: {
        head: ["Image on your site", "Suggested width", "Target"],
        rows: [
          ["Full-width hero", "1,600–2,000 px", "200–400 KB (or WebP)"],
          ["Blog post image", "1,200 px", "100–200 KB"],
          ["Product photo", "1,000–1,500 px", "100–200 KB"],
          ["Thumbnail", "300–600 px", "20–60 KB"],
        ],
      },
    },
    {
      heading: "Who compresses images to 200 KB?",
      items: [
        { t: "Bloggers and website owners", d: "Every photo straight from a phone adds megabytes to a page. Compressing to 200 KB before uploading keeps posts quick to open." },
        { t: "Online store owners", d: "Product galleries with six or eight photos load much faster at 200 KB each, and still look sharp when zoomed on most screens." },
        { t: "People emailing photos", d: "Twenty holiday photos at 200 KB each are 4 MB, small enough for any email service, and still look great on a phone." },
        { t: "Designers delivering web assets", d: "Hand clients images that are ready for the web instead of print-sized files that slow their site down." },
      ],
    },
    {
      heading: "Should you use WebP instead?",
      paragraphs: [
        "For your own website, often yes. WebP gives a similar-looking image at a noticeably smaller size than JPG, and all modern browsers support it. Use [JPG to WebP](/convert/jpg-to-webp) for site images. Stick to JPG when the destination might not accept WebP: email, forms, marketplaces and anything you're unsure about.",
      ],
    },
    {
      heading: "Tips for 200 KB images",
      list: [
        "**Resize, then compress.** Pixel size is the biggest lever on file size.",
        "**Keep the original** in case you need a print or a larger version later.",
        "**Check gradients**: skies and studio backdrops show compression first. If you see bands, allow 250–300 KB.",
        "**Name files sensibly** before uploading (\"blue-linen-shirt.jpg\", not \"IMG_4821.jpg\"); it helps image search.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes, with no watermark and nothing added to the photo. It runs in your browser: two goes without an account, unlimited once you sign up for free. Signed-in users also find a copy in My Creations. For tighter limits see [100 KB](/compress/compress-image-to-100kb); for near-original quality see [500 KB](/compress/compress-image-to-500kb).",
      ],
    },
    {
      heading: "Does compression affect SEO?",
      paragraphs: [
        "Indirectly, yes. Search engines look at how quickly pages load and become usable, and oversized images are the most common reason pages are slow. Compressing images to around 200 KB, sizing them to how they're displayed, and giving them descriptive file names and alt text all help a page's chances. Compression on its own won't rank a weak page, but a heavy page can lose visitors before they ever see your content.",
      ],
    },
  ],
  faq: [
    { q: "How do I compress an image to 200 KB?", a: "Drop it on this page and press Compress; the target is already 200 KB. Download the JPG when the size shown fits." },
    { q: "Is 200 KB good quality?", a: "Yes. A photo around 1,200 to 1,800 pixels wide looks the same as the original on most screens at 200 KB." },
    { q: "What size should website images be?", a: "Around 1,200 to 1,600 pixels wide and 100 to 200 KB for most content images. Full-width heroes can be a bit bigger." },
    { q: "Should I use WebP or JPG for my website?", a: "WebP is smaller at the same quality and works in all modern browsers. Use JPG where WebP might not be accepted, such as email or forms." },
    { q: "Will compressing change my image dimensions?", a: "Usually not at 200 KB. Only very large photos are also reduced in pixels to fit." },
    { q: "Can I compress a PNG to 200 KB?", a: "Yes. It's saved as a JPG, so transparent areas become white." },
    { q: "Is it free?", a: "Yes, with no watermark. Guests get two compressions, and a free account makes it unlimited." },
    { q: "Can I compress many images at once?", a: "The batch editor compresses up to 100 images with one quality setting." },
  ],
};

export default page;
