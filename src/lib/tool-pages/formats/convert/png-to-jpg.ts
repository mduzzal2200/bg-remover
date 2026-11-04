import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "PNG to JPG Converter — Convert PNG to JPG Online, Free",
  h1: "Convert PNG to JPG",
  metaDescription: "Turn PNG screenshots and photos into much smaller JPG files that every form, email and app accepts. Transparency becomes white. Free.",
  subtitle: "Turn a heavy PNG into a JPG that's a fraction of the size and accepted everywhere: forms, email, marketplaces, older apps. Transparent areas become clean white.",
  keywords: "png to jpg, convert png to jpg, png to jpeg, change png to jpg, png to jpg converter online, png to jpg free",
  sections: [
    {
      heading: "How do you convert a PNG to JPG?",
      items: [
        { t: "1. Drop the PNG here", d: "It opens in the converter with JPG already chosen as the output." },
        { t: "2. Press Convert", d: "Any transparent area is filled with white, and the image is saved as a high-quality (92%) JPG." },
        { t: "3. Download", d: "The new file has a .jpg extension and is usually far smaller than the PNG." },
      ],
    },
    {
      heading: "Why convert PNG to JPG?",
      paragraphs: [
        "PNG is lossless: it stores every pixel exactly, which is great for sharp graphics but makes photos huge. A screenshot of a photo or a camera image saved as PNG can easily be 5 to 10 times bigger than the same picture as a JPG, with no difference you can see. That's the usual reason an upload says \"file too large\" or \"format not supported\": many forms and older systems only take JPG.",
      ],
      table: {
        head: ["", "PNG", "JPG"],
        rows: [
          ["Compression", "Lossless", "Lossy (adjustable)"],
          ["Photos", "Very large files", "Small files, same look"],
          ["Transparency", "Yes", "No (filled with white here)"],
          ["Sharp text and lines", "Perfect", "Slight softening at edges"],
          ["Accepted by forms", "Often", "Almost always"],
        ],
      },
    },
    {
      heading: "When should you keep the PNG instead?",
      list: [
        "**Logos and icons with transparency.** JPG fills the background white. Use [PNG to WebP](/convert/png-to-webp) if you need it smaller and still transparent.",
        "**Screenshots full of small text**, like code or spreadsheets: PNG keeps letters crisp.",
        "**Images you'll edit again.** Keep a PNG master and export JPG copies for sharing.",
      ],
    },
    {
      heading: "Who converts PNG to JPG?",
      items: [
        { t: "People filling in online forms", d: "Application portals that accept only JPG or JPEG. Convert, then [compress to the KB limit](/compress-image) if there is one." },
        { t: "Anyone emailing screenshots", d: "Phone screenshots are PNGs. Converting a handful to JPG makes an email much lighter." },
        { t: "Bloggers and sellers", d: "Product photos exported as PNG from a design app are better as JPG (or WebP) on a website." },
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Free and watermark-free. The conversion runs on your device: no file is uploaded to convert it. Two conversions work without an account; a free account removes the limit. Going the other way? See [JPG to PNG](/convert/jpg-to-png).",
      ],
    },
    {
      heading: "Can you convert PNG to JPG without any website?",
      paragraphs: [
        "Yes, if you're at a computer, and it's worth knowing. On **Windows**, open the PNG in Paint, choose File, then Save as, then JPEG picture. On a **Mac**, open it in Preview, choose File, then Export, and pick JPEG from the Format menu; a quality slider appears. Both fill transparency with white, just like this converter.",
        "On a **phone** it's less obvious. iPhone and Android screenshots are PNGs, and the built-in gallery apps don't have a \"save as JPG\" button. Some apps convert silently when you share (email and some messengers do), but you can't control the quality. Dropping the screenshot here is the quickest way to get a proper JPG on your phone, especially when an upload form refuses PNG.",
        "Whichever way you convert, keep the original PNG if it's a screenshot with small text; you may want the crisp version later.",
      ],
    },
    {
      heading: "Will converting fix a \"file too large\" error?",
      paragraphs: [
        "Usually, for photos. If it doesn't, the image is simply big in pixels: a modern phone screenshot is over 1,000 pixels wide and tall. After converting, open the compressor and set a Target size, or resize it to the width the site actually needs.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert PNG to JPG?", a: "Drop the PNG on this page, keep JPG selected and press Convert. Download the JPG." },
    { q: "What happens to transparent areas?", a: "They're filled with white, because JPG can't store transparency." },
    { q: "Will the JPG be smaller?", a: "For photos and screenshots of photos, much smaller, often by five times or more. Flat graphics may change less." },
    { q: "Does converting to JPG lose quality?", a: "Very slightly. It's saved at 92% quality, so photos look the same; very fine text may soften a little." },
    { q: "Is JPG the same as JPEG?", a: "Yes. They're two names for the same format." },
    { q: "Can I keep transparency and make the file smaller?", a: "Yes, convert PNG to WebP instead. WebP keeps transparency and is usually much smaller than PNG." },
    { q: "Is it free?", a: "Yes. PNG to JPG costs nothing, adds no watermark, and needs an account only after your first two files." },
    { q: "Can I convert many PNGs at once?", a: "The batch editor can convert up to 100 images to JPG in one go." },
    { q: "Will the JPG be the same size in pixels?", a: "Yes. Only the format and file size change; the width and height stay the same." },
    { q: "Can I choose the JPG quality?", a: "The converter saves at 92% for a good balance. For a specific file size, use the compressor's Target size afterwards." },
  ],
};

export default page;
