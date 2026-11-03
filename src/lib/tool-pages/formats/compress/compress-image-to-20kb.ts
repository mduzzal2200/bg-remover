import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Compress Image to 20KB — Photo and Signature Under 20 KB",
  h1: "Compress Image to 20KB",
  metaDescription: "Get a photo or signature under 20 KB for exam, job and government forms. Type 20 and the compressor finds the best quality that fits. Free.",
  subtitle: "Online forms that cap a photo or signature at 20 KB reject a phone picture straight away. Drop yours here and the compressor brings it under 20 KB at the best quality that still fits.",
  keywords: "compress image to 20kb, reduce photo size to 20kb, signature 20kb, image under 20kb, compress jpg to 20kb, resize photo to 20kb for form",
  sections: [
    {
      heading: "How do you get an image under 20 KB?",
      items: [
        { t: "1. Crop to just what the form needs", d: "For a signature, crop tight around the ink. For a photo, crop to your head and shoulders. Every pixel you cut away is space the compressor can spend on what's left." },
        { t: "2. Drop it here", d: "It opens in the compressor with Target size already set to 20 KB." },
        { t: "3. Compress and check the size", d: "Press Compress. The editor shows the final size; if it reads 20 KB or less, download the JPG and upload it to the form." },
      ],
    },
    {
      heading: "Why is 20 KB so hard to hit?",
      paragraphs: [
        "A phone photo is usually 2,000 to 5,000 KB, so 20 KB means throwing away about 99% of the file. Quality alone can't get there without the picture falling apart, so the compressor does two things: it lowers the JPG quality step by step until it fits, and if it still doesn't, it also makes the image smaller in pixels. A face doesn't need 4,000 pixels to be recognisable; a few hundred is plenty at the size a form displays it.",
        "The result is a small, clean picture rather than a big, blocky one, which is exactly what a reviewer looking at an application on screen needs.",
      ],
      table: {
        head: ["What you're uploading", "Rough size that fits in 20 KB"],
        rows: [
          ["Signature on white", "Around 300–600 px wide; easy, because it's mostly white"],
          ["Passport-style face photo", "Around 200–350 px wide at good quality"],
          ["Thumb impression or small stamp", "Around 200–300 px"],
          ["Scanned document page", "Usually too detailed; ask if the form accepts a larger file or a PDF"],
        ],
      },
      after: ["These are typical, not exact: a busy background takes more space than a plain one."],
    },
    {
      heading: "Who needs images under 20 KB?",
      items: [
        { t: "Exam and recruitment applicants", d: "Many exam and government job portals ask for a scanned signature in the 10–20 KB range alongside a photo of 20–50 KB, often with fixed pixel sizes too. Check the notification for both numbers before you start." },
        { t: "Scholarship and admission forms", d: "Older application systems keep strict, tiny limits. A 20 KB photo uploads instantly even on a slow connection." },
        { t: "Bank and KYC uploads", d: "Some forms ask for a signature specimen at a small file size so it can be stored with your account." },
      ],
    },
    {
      heading: "How do you keep a 20 KB signature crisp?",
      list: [
        "**Sign with a dark pen on plain white paper**, then photograph it in daylight. White space compresses to almost nothing, leaving room for sharp strokes.",
        "**Crop off every bit of empty paper** before compressing.",
        "**Raise the contrast** with Adjust in the editor if the ink looks grey.",
        "**Don't compress twice.** Start from the original photo each time you try a different target.",
      ],
    },
    {
      heading: "What if the form also gives pixel dimensions?",
      paragraphs: [
        "Then resize first and compress second. If the notice says \"photo 200 × 230 pixels, 20 to 50 KB\", set exactly 200 × 230 in [resize image](/resize-image) (turn the lock off), then come back here and compress to 20 KB or your chosen size within the range. Doing it in that order means the compressor only works on quality, so the picture stays as sharp as possible.",
      ],
    },
    {
      heading: "Is it free, and what happens to the photo?",
      paragraphs: [
        "It's free and adds no watermark. The squeezing happens on your device; as a guest you get two compressions, and a free account makes it unlimited. If you're signed in, the result is kept in My Creations, where you can delete it. The download is a JPG, so a transparent background turns white, which is what forms expect anyway. Need a different size? Try [50 KB](/compress/compress-image-to-50kb) or [100 KB](/compress/compress-image-to-100kb).",
      ],
    },
  ],
  faq: [
    { q: "How do I compress a photo to 20 KB?", a: "Crop it to what the form needs, drop it on this page, and press Compress with the target at 20 KB. Download the JPG once the size shows 20 KB or less." },
    { q: "Will a 20 KB photo look bad?", a: "Not at the size forms show it. The compressor makes the image smaller in pixels as well as lowering quality, so it stays clean instead of blocky." },
    { q: "How do I get my signature under 20 KB?", a: "Sign in dark ink on white paper, crop tight around the signature, raise the contrast if it's grey, and compress to 20 KB. Signatures compress very well because they're mostly white." },
    { q: "The form wants exact pixel sizes too. What do I do?", a: "Resize to the exact width and height first with the resize tool, then compress to the KB limit here." },
    { q: "Can I get between 10 and 20 KB?", a: "Yes. Type any target from 5 KB upwards, for example 15, and the compressor aims for the highest quality under it." },
    { q: "Is it free?", a: "Yes, with no watermark. Guests get two compressions and a free account makes it unlimited." },
    { q: "Why does the form still say my file is too big?", a: "Some forms count 1 KB as 1,000 bytes rather than 1,024. Aim a little lower, such as 19 KB, to be safe." },
    { q: "Will my photo be uploaded somewhere?", a: "No, it's compressed on your device. A copy is kept in My Creations only if you're signed in." },
  ],
};

export default page;
