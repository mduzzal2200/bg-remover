import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Compress Image to 1MB — Get Photos Under 1 MB Without Loss",
  h1: "Compress Image to 1MB",
  metaDescription: "Bring a large photo under 1 MB for uploads, email and job portals while keeping full resolution and near-original quality. Free.",
  subtitle: "Many uploads stop at 1 MB, but a phone photo is often 3 to 8 MB. Drop yours here and get it under 1 MB at full resolution, with quality you won't be able to tell apart.",
  keywords: "compress image to 1mb, reduce image size to 1mb, photo under 1mb, compress jpeg to 1mb, image size less than 1mb, compress photo for upload",
  sections: [
    {
      heading: "How do you get a photo under 1 MB?",
      items: [
        { t: "1. Drop the photo here", d: "The compressor opens with Target size at 1 MB (1,024 KB). You can change it to 900 or 1,000 if the site counts differently." },
        { t: "2. Compress", d: "At 1 MB, almost every photo keeps its full width and height; only the hidden detail is trimmed." },
        { t: "3. Download and upload", d: "The size is shown first, so the upload won't bounce." },
      ],
    },
    {
      heading: "Why are phone photos bigger than 1 MB?",
      paragraphs: [
        "Modern phones take photos with 12 to 50 megapixels and save them at very high quality, sometimes with extra data like depth maps and HDR information. That's great for editing and printing, but most websites and forms don't need it. Compressing to 1 MB keeps the full picture and removes data your eye won't miss.",
        "On iPhones, photos are often HEIC rather than JPG. HEIC files are smaller, but many websites don't accept them; the compressed JPG you get here is accepted everywhere. (If your browser can't open a HEIC, set the camera to Most Compatible or share the photo by email to get a JPG first.)",
      ],
    },
    {
      heading: "Where is the 1 MB limit?",
      items: [
        { t: "Job applications", d: "Resume photos, certificates and portfolio samples on recruitment sites are commonly limited to 1 MB per file." },
        { t: "Visa and government services", d: "Some online services allow documents up to 1 MB; check whether they want JPG or PDF." },
        { t: "Forums, communities and school portals", d: "Attachment limits of 1 MB keep servers manageable; compressing first saves a failed upload." },
        { t: "Email to many people", d: "Under 1 MB per photo keeps a message with several pictures well inside email limits." },
      ],
      after: ["Need it smaller still? [500 KB](/compress/compress-image-to-500kb) keeps high quality; [200 KB](/compress/compress-image-to-200kb) is right for websites."],
    },
    {
      heading: "Compress, convert or resize to get under 1 MB?",
      table: {
        head: ["Situation", "Best move"],
        rows: [
          ["Phone photo, 3–8 MB", "Compress to 1 MB here"],
          ["Screenshot saved as PNG", "[Convert PNG to JPG](/convert/png-to-jpg), or compress here"],
          ["Huge camera photo for a small display", "[Resize](/resize-image) to the display size, then compress"],
          ["Multi-page scan", "Compress each page, then combine as PDFs"],
        ],
      },
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes, and it adds no watermark. Compression happens in your browser; guests can do it twice, and a free account keeps it unlimited. The result is a JPG (transparent areas become white). Signed-in users get a copy in My Creations, which they can delete.",
      ],
    },
    {
      heading: "Will the website shrink it anyway?",
      paragraphs: [
        "Often, yes. Many websites resize and recompress uploads after you send them, which is why a 1 MB limit exists in the first place. Compressing to just under 1 MB yourself has two advantages: the upload goes through first time instead of failing with a size error, and you decide how the image is compressed rather than leaving it to the website, which may be harsher than it needs to be.",
        "If you're uploading many files on a slow or metered connection, compressing first also saves time and data; ten photos at 1 MB upload far faster than ten at 6 MB.",
      ],
    },
    {
      heading: "Is under 1 MB good enough to print?",
      paragraphs: [
        "For everyday prints, yes. A 1 MB JPG from a 12-megapixel phone photo still holds the full 4,000 × 3,000 pixels and prints well at 6 × 4 or even 10 × 8 inches. For very large prints or professional work, send the original file instead.",
      ],
    },
  ],
  faq: [
    { q: "How do I make a photo less than 1 MB?", a: "Drop it on this page; the target is 1 MB. Press Compress and download the JPG once the size shows under 1 MB." },
    { q: "Will compressing to 1 MB reduce quality?", a: "Not noticeably. At 1 MB almost every photo keeps its full resolution and looks the same as the original." },
    { q: "Is 1 MB 1,000 KB or 1,024 KB?", a: "It depends on the website. To be safe, type 950 or 1,000 KB as the target." },
    { q: "Can I compress an iPhone photo?", a: "Yes. If your browser can't open the HEIC file, set the camera to Most Compatible or email the photo to yourself to get a JPG first." },
    { q: "Can I compress a PNG to under 1 MB?", a: "Yes. It's saved as a JPG, which is much smaller; transparent areas turn white." },
    { q: "Does it work on documents?", a: "Yes. Scans and photos of documents compress well and stay readable at 1 MB." },
    { q: "Is it free?", a: "Yes. Getting a photo under 1 MB costs nothing and leaves no mark on it; after two tries as a guest, a free account keeps it unlimited." },
    { q: "Is my photo uploaded anywhere?", a: "No. It's compressed in your browser." },
  ],
};

export default page;
