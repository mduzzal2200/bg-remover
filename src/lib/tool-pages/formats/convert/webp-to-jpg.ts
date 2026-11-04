import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "WebP to JPG Converter — Convert WebP Photos to JPG",
  h1: "Convert WebP to JPG",
  metaDescription: "Convert WebP images to JPG so you can upload, email, print or edit them in any app. Small files, universal format. Free, in your browser.",
  subtitle: "Turn a WebP photo into the format everything accepts. JPG works in every form, email, phone gallery, print shop and editing app, and stays a small file.",
  keywords: "webp to jpg, convert webp to jpg, webp to jpeg, webp to jpg converter, change webp to jpg, save webp as jpg",
  sections: [
    {
      heading: "How do you convert WebP to JPG?",
      items: [
        { t: "1. Drop the WebP here", d: "The converter opens with JPG as the output." },
        { t: "2. Convert", d: "The photo is saved as a JPG at high quality (92%). Any transparent areas become white." },
        { t: "3. Download", d: "Use it wherever WebP was refused." },
      ],
    },
    {
      heading: "When do you need JPG instead of WebP?",
      table: {
        head: ["Situation", "Why WebP fails", "JPG fixes it"],
        rows: [
          ["Online application form", "Only accepts JPG/JPEG", "Uploads first time"],
          ["Email to someone on an old device", "Attachment won't preview", "Opens anywhere"],
          ["Photo printing kiosk or shop", "Format not recognised", "Prints normally"],
          ["Older editing or office software", "Can't import WebP", "Imports as a normal photo"],
          ["Marketplace listing", "Some don't accept WebP uploads", "Accepted"],
        ],
      },
    },
    {
      heading: "WebP to JPG or WebP to PNG?",
      paragraphs: [
        "For photos, JPG is the better choice: small files, accepted everywhere, and no visible difference. Choose [WebP to PNG](/convert/webp-to-png) instead when the image has a transparent background you need to keep (stickers, logos, cutouts), because JPG fills it with white.",
      ],
    },
    {
      heading: "Who converts WebP to JPG?",
      items: [
        { t: "Anyone saving photos from websites", d: "Right-clicking a photo often saves a .webp. Convert to JPG so it behaves like every other photo on your phone or computer. Only reuse images you have the rights to." },
        { t: "Applicants and office workers", d: "Forms and document systems that predate WebP still expect JPG." },
        { t: "Sellers moving listings", d: "Images downloaded from one platform as WebP can be converted before uploading to another that only takes JPG." },
        { t: "Students and teachers", d: "Images saved for assignments and slides from websites, which older classroom software won't import as WebP." },
        { t: "Families sharing photos", d: "Pictures saved from a website or a cloud album that relatives' phones or digital frames can't open." },
      ],
      after: ["In every case the picture stays the same; only the container changes, so it works in more places."],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. The file never leaves your device; the conversion is done in the browser, with no fee and no watermark. As a guest you can convert two images; a free account makes it unlimited. Need a size limit too? [Compress to 100 KB](/compress/compress-image-to-100kb) afterwards.",
      ],
    },
    {
      heading: "How do you convert WebP to JPG on a phone?",
      items: [
        { t: "On iPhone", d: "Save the image to Files (or Photos), open this page in Safari, tap the upload box, and choose the image. Convert, then tap the download and save the JPG back to Photos or Files." },
        { t: "On Android", d: "Download the image (it goes to your Downloads folder), open this page in Chrome, tap the upload box and pick it from Downloads. Convert and download; the JPG appears in Downloads and your gallery." },
        { t: "Then share or upload", d: "Because it's now a JPG, it attaches to emails, uploads to forms and opens in every gallery and editing app without complaints." },
      ],
    },
    {
      heading: "What happens to animated or see-through WebP files?",
      paragraphs: [
        "JPG can't store either. An animated WebP becomes a still JPG of a single frame, so if you need the movement, keep the WebP or convert to a GIF elsewhere. A WebP with transparent areas, such as a logo or a sticker, gets a plain white background in the JPG.",
        "If you need to keep the see-through parts, choose PNG in the converter instead: it keeps transparency and is still accepted almost everywhere JPG is.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert WebP to JPG?", a: "Drop the WebP on this page, keep JPG selected and press Convert. Download the JPG." },
    { q: "Does converting WebP to JPG lose quality?", a: "Very little. It's saved at 92% quality, so photos look the same." },
    { q: "What happens to transparent parts?", a: "They become white, because JPG has no transparency. Use WebP to PNG to keep them." },
    { q: "Is WebP to JPEG the same?", a: "Yes. JPEG is the format's full name and JPG the three-letter extension; the file you get works for both." },
    { q: "Why do websites use WebP?", a: "It's smaller than JPG at the same quality, so pages load faster." },
    { q: "Can I convert animated WebP?", a: "Only the first frame is converted, as a still image." },
    { q: "Is it free?", a: "Yes. Your first two WebP to JPG conversions need no sign-up, a free account covers the rest, and nothing is stamped on the photo." },
    { q: "Does it work on iPhone and Android?", a: "Yes, in any modern mobile browser." },
    { q: "Will the JPG be the same size in pixels?", a: "Yes. The width and height stay the same; only the format changes." },
    { q: "Can I convert several WebP files at once?", a: "The batch editor converts up to 100 images to JPG in one session." },
  ],
};

export default page;
