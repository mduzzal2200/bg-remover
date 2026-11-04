import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Compress Image to 500KB — High Quality, Much Smaller File",
  h1: "Compress Image to 500KB",
  metaDescription: "Bring a photo under 500 KB while keeping it close to full quality, for portfolios, uploads, hero images and sharing. Free, in your browser.",
  subtitle: "500 KB is the size for when quality matters but the original is too heavy: portfolio images, website banners, high-quality uploads. Most photos keep their full size and look untouched.",
  keywords: "compress image to 500kb, reduce image size to 500kb, compress photo under 500kb, image compressor 500kb, compress jpg to 500kb, high quality compress",
  sections: [
    {
      heading: "How do you compress an image to 500 KB?",
      items: [
        { t: "1. Drop the full-quality original here", d: "The compressor opens with the target at 500 KB." },
        { t: "2. Compress", d: "Most photos reach 500 KB with only a small quality reduction and no change to their width and height." },
        { t: "3. Compare and download", d: "Zoom in on the preview; at this size it's hard to find a difference. Download the JPG." },
      ],
    },
    {
      heading: "What can you do with a 500 KB photo?",
      paragraphs: [
        "Quite a lot. A 500 KB JPG can be a full-resolution phone photo (around 3,000 to 4,000 pixels wide) at good quality, or a smaller image at excellent quality. It's big enough to view full-screen, crop later, or print at small sizes, while being five to ten times lighter than the original.",
      ],
      table: {
        head: ["Use", "Why 500 KB works"],
        rows: [
          ["Portfolio and photography sites", "Images stay sharp full-screen without making the gallery crawl"],
          ["Website banners and hero images", "Large and crisp, still reasonably quick (WebP is lighter still)"],
          ["Uploads with a 500 KB or 1 MB cap", "Fits comfortably with room to spare"],
          ["Sharing originals with family", "Full detail for saving, without huge attachments"],
        ],
      },
    },
    {
      heading: "Who needs 500 KB images?",
      items: [
        { t: "Photographers and designers", d: "Show work at its best online without uploading 10 MB files. Compress the web copy, keep the master." },
        { t: "Applicants uploading documents", d: "Certificates, mark sheets and ID scans often have a 500 KB limit. A scan at 500 KB keeps small print readable." },
        { t: "Real estate and travel listings", d: "Wide room and landscape photos need more detail than portraits; 500 KB keeps them sharp." },
        { t: "Anyone running out of storage", d: "Compressing a folder of phone photos to around 500 KB each saves most of the space with no visible loss." },
      ],
    },
    {
      heading: "Compressing scanned documents to 500 KB",
      list: [
        "**Scan or photograph flat**, in even light, filling the frame with the page.",
        "**Crop to the page edges** and [rotate](/rotate-image) it upright.",
        "**Boost contrast** with Adjust so text is dark and the paper is white.",
        "**Compress to 500 KB**; at this size small print stays readable.",
        "If the form wants a PDF, run the result through [image to PDF](/image-to-pdf).",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. There's no fee, no watermark, and your original file is left alone. The work happens in your browser; you can compress twice as a guest and as often as you like with a free account. If you're signed in, the result also appears in My Creations. Need it smaller? Go to [200 KB](/compress/compress-image-to-200kb) for web pages, or [1 MB](/compress/compress-image-to-1mb) if you have more room.",
      ],
    },
    {
      heading: "How much space can you save on your phone?",
      paragraphs: [
        "A lot. A phone that takes 4 MB photos fills about 1 GB for every 250 pictures. The same photos at around 500 KB take about an eighth of that space, and look the same on a phone screen. If you're keeping photos to look at rather than to print or edit heavily, compressed copies can free up gigabytes.",
        "Do it carefully: keep the originals backed up somewhere (a cloud backup or a computer) before deleting anything, and keep full-size versions of the photos you might print or edit. Compress the copies you keep on the phone or share with family.",
      ],
    },
    {
      heading: "Quality setting or target size?",
      paragraphs: [
        "Both work. Target size is easiest when you've been given a limit, like 500 KB. If you just want \"smaller but still great\", the By quality mode with the slider around high quality gives you a similar result and shows the size it lands on, so you can stop wherever you're happy.",
      ],
    },
  ],
  faq: [
    { q: "How do I compress a photo to 500 KB?", a: "Drop it on this page; the target is set to 500 KB. Press Compress and download the JPG." },
    { q: "Will a 500 KB photo lose quality?", a: "Very little. Most photos keep their full width and height and look the same as the original." },
    { q: "Is 500 KB good enough to print?", a: "For small prints like 6×4 inches, yes. For large prints, keep the original file." },
    { q: "How do I get a scanned document under 500 KB?", a: "Crop to the page, rotate it upright, raise the contrast, then compress to 500 KB. Small print usually stays readable." },
    { q: "Can I compress a PNG to 500 KB?", a: "Yes. It's saved as a JPG, so any transparent background becomes white." },
    { q: "Is it free?", a: "Yes. Compressing to 500 KB is free and leaves the photo unmarked; a free account is needed only after two goes." },
    { q: "Does compression change the image size in pixels?", a: "Rarely at 500 KB. Only extremely large or detailed images are made smaller to fit." },
    { q: "Is my photo uploaded?", a: "No. Compression happens in your browser." },
  ],
};

export default page;
