import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "PNG to WebP Converter — Smaller Images, Transparency Kept",
  h1: "Convert PNG to WebP",
  metaDescription: "Convert PNG images to WebP for faster websites. Much smaller files that keep their transparent background. Free, in your browser.",
  subtitle: "Make heavy PNGs light for the web without losing the transparent background. WebP keeps logos, icons and cutouts see-through, at a fraction of the file size.",
  keywords: "png to webp, convert png to webp, png to webp converter, webp transparent, compress png webp, png to webp online",
  sections: [
    {
      heading: "How do you convert PNG to WebP?",
      items: [
        { t: "1. Drop the PNG here", d: "The converter opens with WebP as the output." },
        { t: "2. Convert", d: "The image is saved as WebP at high quality. Transparent areas stay transparent." },
        { t: "3. Download and use it on your site", d: "Upload the .webp to your website, store or CMS in place of the PNG." },
      ],
    },
    {
      heading: "Why is WebP better than PNG for websites?",
      paragraphs: [
        "PNG is lossless, which makes files large, especially for photos and cutouts with soft edges. WebP was designed for the web: it compresses far more efficiently and still supports transparency, which JPG can't. For a website, that means faster pages with exactly the same look. All current browsers (Chrome, Safari, Firefox, Edge) display WebP.",
      ],
      table: {
        head: ["", "PNG", "WebP", "JPG"],
        rows: [
          ["Transparency", "Yes", "Yes", "No"],
          ["File size for photos", "Large", "Small", "Small"],
          ["Browser support", "All", "All modern", "All"],
          ["Good for", "Editing, masters", "Websites, apps", "Email, forms"],
        ],
      },
    },
    {
      heading: "Who converts PNG to WebP?",
      items: [
        { t: "Website and store owners", d: "Product cutouts from the [background remover](/remove-bg) come out as PNG. Converting them to WebP keeps the clean edges and loads much faster." },
        { t: "Developers and designers", d: "Icons, illustrations and UI images exported as PNG can usually be swapped for WebP with no visual change." },
        { t: "Bloggers", d: "Screenshots and diagrams in posts become lighter, which helps page speed scores." },
      ],
    },
    {
      heading: "When should you keep PNG?",
      list: [
        "**Email and forms**, which may not accept WebP. Use JPG there: [PNG to JPG](/convert/png-to-jpg).",
        "**Your editable master**: keep the PNG and publish the WebP.",
        "**Pixel-perfect screenshots** with tiny text, if every edge must stay crisp.",
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes: converted on your device, with no upload, no cost and no watermark. Two conversions as a guest, then a free account for unlimited use. Need to go back? [WebP to PNG](/convert/webp-to-png).",
      ],
    },
    {
      heading: "How do you use WebP images on your website?",
      paragraphs: [
        "On most website builders you simply upload the .webp file where you'd upload a PNG. WordPress has accepted WebP uploads for years, and most hosted shop and site builders do too. Some platforms already convert your uploads to WebP behind the scenes when they serve them; if yours does, uploading the original PNG is fine, and converting yourself gains little. Check your platform's help pages to know which situation you're in.",
        "If you write your own HTML and want a fallback for very old browsers, use a picture element: a WebP source first, then a regular img with the PNG. Browsers that understand WebP take it; the rest fall back automatically.",
        "Keep file names descriptive (\"red-ceramic-mug.webp\") and always fill in the image's alt text. Converting makes the page faster; good names and alt text help it get found.",
      ],
    },
    {
      heading: "PNG to WebP or PNG to JPG?",
      table: {
        head: ["Your PNG is…", "Convert to", "Why"],
        rows: [
          ["A logo, icon or cutout with transparency", "WebP", "Stays transparent, much smaller"],
          ["A photo for your website", "WebP", "Smallest at the same look"],
          ["A photo for email or a form", "JPG", "Accepted everywhere"],
          ["A screenshot with small text", "Keep PNG, or WebP", "Text stays crisp"],
        ],
      },
    },
  ],
  faq: [
    { q: "How do I convert PNG to WebP?", a: "Drop the PNG on this page, keep WebP selected and press Convert. Download the .webp file." },
    { q: "Does WebP keep transparency?", a: "Yes. Transparent areas in your PNG stay transparent in the WebP." },
    { q: "How much smaller is WebP than PNG?", a: "For photos and cutouts, usually much smaller. Flat graphics with few colours save less." },
    { q: "Do all browsers support WebP?", a: "Every current major browser does: Chrome, Edge, Firefox and Safari all display WebP, including transparent ones." },
    { q: "Can I use WebP for email or forms?", a: "Often not. Use JPG for email and forms, and WebP for your website." },
    { q: "Does converting lose quality?", a: "It's saved at high quality (92%), so it looks the same in normal use." },
    { q: "Is it free?", a: "Yes. Turning PNGs into WebP is free with nothing added to the image; guests get two files, a free account removes that cap." },
    { q: "Is my image uploaded?", a: "No. The conversion runs in your browser." },
    { q: "Can I convert a whole folder of PNGs?", a: "Yes, with the batch editor, which converts up to 100 images to WebP in one go." },
    { q: "Will the WebP keep the same dimensions?", a: "Yes. Only the file format and size change; width and height stay identical." },
  ],
};

export default page;
