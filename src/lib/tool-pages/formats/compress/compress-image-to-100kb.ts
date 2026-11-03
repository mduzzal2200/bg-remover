import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Compress Image to 100KB — Reduce JPG or PNG Under 100 KB",
  h1: "Compress Image to 100KB",
  metaDescription: "Make any photo 100 KB or smaller for portals, email and websites, with almost no visible loss. Type 100 and download a JPG that fits.",
  subtitle: "100 KB is the most common upload limit on forms and portals, and a sweet spot for web images. Drop a photo here and get a JPG under 100 KB that still looks like the original.",
  keywords: "compress image to 100kb, reduce image size to 100kb, image under 100kb, compress photo to 100kb, jpg to 100kb, reduce png size to 100kb",
  sections: [
    {
      heading: "How do you compress an image to 100 KB?",
      items: [
        { t: "1. Drop the photo here", d: "JPG, PNG or WebP, any size. The compressor opens with Target size set to 100 KB." },
        { t: "2. Press Compress", d: "It tries qualities until it finds the best one that stays under 100 KB, and only reduces the pixel size if quality alone isn't enough." },
        { t: "3. Download the JPG", d: "The editor shows the new size so you know it fits before uploading." },
      ],
    },
    {
      heading: "How good does a 100 KB photo look?",
      paragraphs: [
        "Good. 100 KB is enough for a portrait or product photo around 800 to 1,200 pixels wide at a quality where you'd struggle to see the difference on a phone or laptop screen. That's why so many forms choose it: big enough to see clearly, small enough to store millions of.",
        "Where you might notice it: fine text in a screenshot, large smooth gradients like a sunset sky (they can show faint bands), and very detailed scenes like foliage. For those, crop to the important part or allow a bigger file.",
      ],
    },
    {
      heading: "Where do you need images under 100 KB?",
      items: [
        { t: "Government and university portals", d: "Photo, ID proof and certificate uploads are often capped at 100 KB. Scans of documents with lots of text may need a [PDF](/image-to-pdf) instead, if allowed." },
        { t: "Email", d: "Ten photos at 100 KB each are 1 MB in total, easy to send and quick to open on a phone." },
        { t: "Website thumbnails and blog images", d: "Small images under 100 KB keep pages light. For hero images, aim for [200 KB](/compress/compress-image-to-200kb) and use WebP." },
        { t: "Marketplace and classified listings", d: "Many listing sites resize images anyway; uploading compact files makes the upload faster on mobile data." },
      ],
    },
    {
      heading: "PNG to under 100 KB: what changes?",
      paragraphs: [
        "PNG is lossless, which is why screenshots and photos saved as PNG are often several megabytes. Compressing here saves the image as a JPG, which is what makes 100 KB possible. Two things to know: transparent areas become white, and very sharp text loses a little crispness. If you need the transparency, [convert the PNG to WebP](/convert/png-to-webp) instead; WebP keeps it and is far smaller than PNG.",
      ],
      table: {
        head: ["You have", "Best route to ~100 KB"],
        rows: [
          ["Phone photo (JPG/HEIC)", "Compress to 100 KB here"],
          ["Screenshot (PNG)", "Crop to the useful part, then compress"],
          ["Logo with transparency", "Convert to WebP instead"],
          ["Multi-page document", "Image to PDF, if the form accepts PDFs"],
        ],
      },
    },
    {
      heading: "Tips for a sharper 100 KB image",
      list: [
        "**Crop before compressing**; less area means more quality per KB.",
        "**Avoid re-compressing** a photo that already came through WhatsApp or email.",
        "**Resize huge photos** to about 1,200 pixels wide first if the destination never shows them bigger.",
        "**Target 95 KB** to stay safely under a strict 100 KB check.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. Your browser does the work, so there's no charge and no watermark. Guests get two compressions; a free account lifts that. Photos aren't sent to a server to be compressed, and a copy is saved in My Creations only when you're signed in.",
      ],
    },
  ],
  faq: [
    { q: "How do I compress an image to 100 KB?", a: "Drop it on this page, press Compress with the target at 100 KB, and download the JPG once the size shown is 100 KB or less." },
    { q: "Will my photo lose quality at 100 KB?", a: "Very little that you can see. A portrait or product photo around 800 to 1,200 pixels wide looks almost identical at 100 KB." },
    { q: "How do I reduce a PNG to 100 KB?", a: "Compress it here; it becomes a JPG, which is much smaller. Transparent areas turn white, so convert to WebP instead if you need transparency." },
    { q: "Why is my file still over 100 KB?", a: "That shouldn't happen: the compressor also reduces the pixel size until it fits. If a form still rejects it, target 95 KB, since some forms count kilobytes differently." },
    { q: "Can I compress a document scan to 100 KB?", a: "Yes, but small text may soften. Crop to the page, raise the contrast with Adjust, then compress. A PDF may be better if the form allows it." },
    { q: "Does it change the image dimensions?", a: "Only if quality alone can't reach 100 KB. For most photos the width and height stay the same." },
    { q: "Is it free?", a: "Yes, with no watermark. Two compressions as a guest, unlimited with a free account." },
    { q: "Is my image private?", a: "Yes. It's compressed in your browser; nothing is uploaded to do it." },
  ],
};

export default page;
