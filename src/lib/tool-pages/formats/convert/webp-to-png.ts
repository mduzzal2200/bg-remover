import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "WebP to PNG Converter — Open WebP Images Anywhere",
  h1: "Convert WebP to PNG",
  metaDescription: "Saved an image that turned out to be WebP? Convert it to PNG so any app can open and edit it, with transparency kept. Free, private.",
  subtitle: "Saved an image from a website and it turned out to be a .webp that your app won't open? Convert it to PNG: it opens everywhere, keeps any transparency, and is ready to edit.",
  keywords: "webp to png, convert webp to png, webp to png converter, open webp file, webp to png transparent, save webp as png",
  sections: [
    {
      heading: "How do you convert WebP to PNG?",
      items: [
        { t: "1. Drop the .webp file here", d: "It opens in the converter with PNG chosen." },
        { t: "2. Convert", d: "The image is saved as a lossless PNG, with transparent areas kept." },
        { t: "3. Download and open it anywhere", d: "PNG opens in every image viewer, document and design app." },
      ],
    },
    {
      heading: "Why do images download as WebP?",
      paragraphs: [
        "Many websites now serve images as WebP because it's smaller and makes pages faster. When you right-click and save, you get the WebP. Browsers show it fine, but some older programs, office apps, print services and upload forms don't recognise it. Converting to PNG gives you a universal file without changing how the image looks.",
      ],
    },
    {
      heading: "PNG or JPG: which should you convert WebP to?",
      table: {
        head: ["Choose", "When"],
        rows: [
          ["**PNG** (this page)", "The image has transparency, or you'll edit it, or it's a graphic, logo or screenshot"],
          ["[JPG](/convert/webp-to-jpg)", "It's a photo and you want a small file for email or a form"],
        ],
      },
    },
    {
      heading: "Who needs WebP to PNG?",
      items: [
        { t: "Designers and students", d: "Bring web graphics into tools that expect PNG, for presentations, mock-ups and assignments." },
        { t: "Anyone printing", d: "Print shops and photo kiosks often don't accept WebP. A PNG goes through." },
        { t: "People editing stickers and logos", d: "Transparent WebP stickers and icons stay transparent as PNG, ready to layer." },
      ],
      after: [
        "Please only download and convert images you're allowed to use. Many images on websites are someone else's copyright.",
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. The file is converted in your browser, never uploaded, with no charge and no watermark. Two conversions as a guest, unlimited with a free account. The PNG will usually be bigger than the WebP; that's normal for a lossless format.",
      ],
    },
    {
      heading: "What can you do when a site only gives you WebP?",
      list: [
        "**Convert after saving.** The simplest route: save the image, drop it here, download a PNG.",
        "**Look for a download button.** Stock photo sites, press pages and brand kits often offer JPG or PNG downloads even when the page shows WebP.",
        "**Ask for the original.** If it's a logo or a product photo you're allowed to use, the owner can usually send a PNG or the vector file.",
        "**Avoid screenshots.** Taking a screenshot instead of saving gives you a PNG at your screen's resolution, often smaller and softer than the real image.",
        "**Check the rights.** Being able to save an image doesn't mean you can reuse it. Converting doesn't change who owns it.",
      ],
    },
    {
      heading: "How do you convert WebP to PNG on a computer?",
      paragraphs: [
        "Drag the .webp file from your Downloads folder onto the upload box above, convert, and download the PNG; it lands back in Downloads. Recent versions of the built-in image apps on Windows and Mac can often open WebP and save it as PNG too, depending on your system and updates. Use whichever is quicker; this page works the same in any browser, on any computer, without installing anything.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert WebP to PNG?", a: "Drop the .webp file on this page, keep PNG selected and press Convert. Download the PNG." },
    { q: "Does WebP to PNG keep transparency?", a: "Yes. Transparent areas stay transparent in the PNG." },
    { q: "Why is the PNG larger than the WebP?", a: "PNG is lossless and WebP is designed to be small, so the same image takes more space as PNG." },
    { q: "Why won't my computer open WebP files?", a: "Some older apps don't support WebP. Converting to PNG or JPG makes it open everywhere." },
    { q: "Should I choose PNG or JPG?", a: "PNG for transparency, graphics and editing; JPG for photos you want small." },
    { q: "Does it lose quality?", a: "No. PNG is lossless, so the picture looks exactly like the WebP." },
    { q: "Is it free?", a: "Yes. WebP to PNG costs nothing; the first two conversions need no account, and a free one makes the rest unlimited." },
    { q: "Can it convert animated WebP?", a: "No. Only the first frame is converted, as a still image." },
    { q: "Will the PNG be the same size in pixels?", a: "Yes. Width and height are kept exactly; only the format changes." },
    { q: "Can I turn the PNG into a JPG later?", a: "Yes, with PNG to JPG, when you need a smaller file for email or a form." },
  ],
};

export default page;
