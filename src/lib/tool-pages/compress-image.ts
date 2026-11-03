import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Compress Image — Reduce Photo Size to KB Online, Free",
  h1: "Free Image Compressor",
  metaDescription: "Make a photo smaller in KB without it looking worse. Pick a quality or type a target like 100 KB. Runs in your browser, free, no watermark.",
  subtitle: "Shrink a photo's file size for forms, email and websites. Drag the quality slider, or type a target such as 50 KB and let the compressor hit it for you.",
  keywords: "compress image, reduce image size, image compressor, compress jpeg, compress photo, reduce photo size in kb, compress image to 100kb, make image smaller",
  alt: { hero: "A large photo file shown next to the same photo compressed to a much smaller file with no visible loss" },
  sections: [
    {
      heading: "How do you compress an image?",
      items: [
        { t: "1. Drop your photo here", d: "Drop in a JPG, PNG or WebP. The editor opens straight to the compressor." },
        { t: "2. Choose how small", d: "**By quality** gives you a slider from smaller file to higher quality. **Target size** lets you type the limit you've been given, anywhere from 5 KB to 5,000 KB, or tap 20, 50, 100, 200 or 500 KB." },
        { t: "3. Compress and download", d: "Press Compress. The editor shows the new size, so you know it fits before you download the smaller JPG." },
      ],
    },
    {
      heading: "What happens when a photo is compressed?",
      paragraphs: [
        "A photo straight from a phone is usually 2 to 6 MB, because the camera saves it with very little compression to keep every option open. Most of that data is detail your eye can't see on a screen. Compression throws away the least visible part: tiny colour variations and fine texture in areas like skies and walls.",
        "The compressor saves your image as a JPG at the quality you choose. In **Target size** mode it does the trial and error for you: it tries a quality, checks the size, and narrows in on the highest quality that still fits under your limit. If even low quality is too big (a 12-megapixel photo squeezed into 20 KB, say), it also reduces the image's width and height in steps until it fits. That's why a very small target gives you a smaller picture, not a ruined one.",
      ],
      table: {
        head: ["Target", "Typical use", "What to expect"],
        rows: [
          ["20–50 KB", "Exam and job application photos, signatures, ID uploads", "Fine for a face or a signature; the image is also made smaller in pixels"],
          ["100 KB", "Government portals, forms, profile pictures", "Looks good on screen at normal size"],
          ["200–500 KB", "Email, websites, blog images, marketplaces", "Hard to tell apart from the original"],
          ["1 MB and up", "Prints and high-quality sharing", "Effectively full quality"],
        ],
      },
      after: [
        "For a size-by-size guide, see [compress to 20 KB](/compress/compress-image-to-20kb), [50 KB](/compress/compress-image-to-50kb), [100 KB](/compress/compress-image-to-100kb), [200 KB](/compress/compress-image-to-200kb) and [500 KB](/compress/compress-image-to-500kb).",
      ],
    },
    {
      heading: "Who needs to compress photos?",
      items: [
        { t: "Students and job applicants", d: "Online application forms often reject anything over a set size, such as 50 KB for a photo or 20 KB for a signature, with an unhelpful error. Type the limit into Target size and the file will fit first time." },
        { t: "Online sellers", d: "Store pages with heavy images load slowly, and shoppers on mobile data leave. Compressing product photos to a few hundred KB keeps them sharp on screen and makes the page noticeably faster." },
        { t: "Website and blog owners", d: "Images are usually the heaviest part of a web page, and page speed affects both visitors and search rankings. Compress before you upload, or convert to WebP with the [image converter](/convert-image) for an even smaller file." },
        { t: "Anyone sending email or chat", d: "Ten phone photos can blow past an email attachment limit. Compressed to around 300 KB each, they send instantly and still look right." },
      ],
    },
    {
      heading: "Is the image compressor free?",
      paragraphs: [
        "Yes. All the squeezing happens on your own device, so there's nothing to pay for and no cap on how many photos you shrink. Two compressions work without signing up; a free account removes even that limit. No watermark is added, and the file you started with stays untouched.",
      ],
    },
    {
      heading: "Compress, resize or convert: which one do you need?",
      paragraphs: [
        "They all make files smaller, in different ways, and knowing which one you need saves time.",
      ],
      list: [
        "**Compress** keeps the same width and height and lowers the file size. Use it when you've been given a KB or MB limit.",
        "**[Resize](/resize-image)** changes the width and height in pixels. Use it when you've been given dimensions, such as 600×600, or the photo is far bigger than it will ever be shown.",
        "**[Convert](/convert-image)** changes the format. PNG to JPG is a big saving for photos; JPG to WebP saves a bit more for websites.",
      ],
      after: [
        "Often the best result comes from doing two: resize a 4,000-pixel photo down to the 1,200 pixels your website actually shows, then compress it. The file ends up a fraction of the size with no visible loss.",
      ],
    },
    {
      heading: "How do you keep quality when compressing?",
      list: [
        "**Start from the original**, not a copy that has already been compressed by WhatsApp or email. Compressing twice adds blockiness.",
        "**Don't go lower than you need.** If the limit is 200 KB, target 190 KB, not 50.",
        "**Crop away what you don't need first.** Fewer pixels means more quality per KB for the part that matters.",
        "**Check faces and text at 100%.** Fine lettering and skin show compression first.",
        "**Keep the original** somewhere safe in case you need a bigger version later.",
      ],
    },
    {
      heading: "What should you know before compressing?",
      list: [
        "The result is always a **JPG**. Transparent areas in a PNG become white, so don't compress a logo you need transparent; [convert it to WebP](/convert-image) instead, which keeps transparency.",
        "Very small targets also make the image smaller in pixels. A 20 KB passport photo won't be a 4,000-pixel image, and it doesn't need to be.",
        "Compression can't fix a photo that's blurry or dark. If it needs to be clearer, use the [image upscaler](/upscale) or the Adjust tool first.",
        "One photo at a time here. To compress a folder of images, the batch editor processes many in one go.",
      ],
    },
    {
      heading: "Is it private?",
      paragraphs: [
        "Your photo is compressed by your own browser, not on our servers. Signed-in users also get a copy of the result in My Creations, handy if you need it again on another device; delete it there whenever you like.",
      ],
    },
  ],
  faq: [
    { q: "How do I reduce the size of a photo in KB?", a: "Open the compressor, choose Target size, type the KB limit you need (or tap 20, 50, 100, 200 or 500), and press Compress. Download the JPG once the size shown fits." },
    { q: "Is the image compressor free?", a: "Yes, completely. It works on your device, adds no watermark and has no daily cap: two goes as a guest, unlimited with a free account." },
    { q: "Will compressing reduce quality?", a: "A little, but usually not visibly. Photos compressed to a few hundred KB look the same on screen. Very small targets like 20 KB are fine for a face or signature, and the image is also made smaller in pixels to fit." },
    { q: "Can I compress a PNG?", a: "Yes, but the result is a JPG, so transparent areas become white. To keep transparency, convert the PNG to WebP instead, which is usually much smaller too." },
    { q: "How do I compress an image to 20 KB or 50 KB?", a: "Choose Target size and tap 20 KB or 50 KB. The compressor lowers the quality and, if needed, the dimensions until the file fits." },
    { q: "Does it work on my phone?", a: "Yes. It works in any modern browser on iPhone, Android, Windows and Mac." },
    { q: "Is my photo uploaded?", a: "No. The photo is shrunk on your device. When you're signed in, a copy of the result goes to My Creations so you can grab it again later." },
    { q: "What's the difference between compressing and resizing?", a: "Compressing lowers the file size and keeps the same width and height. Resizing changes the width and height in pixels. You can do both in the same editor." },
  ],
};

export default page;
