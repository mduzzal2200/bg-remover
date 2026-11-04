import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "JPG to WebP Converter — Faster Website Images, Same Look",
  h1: "Convert JPG to WebP",
  metaDescription: "Convert JPG photos to WebP for a faster website and better page speed, with no visible change. Free, private, works in your browser.",
  subtitle: "Make your website's photos lighter without making them look worse. WebP usually saves a good share of the file size compared with JPG at the same visual quality.",
  keywords: "jpg to webp, convert jpg to webp, jpeg to webp, jpg to webp converter, optimize images webp, webp for website",
  sections: [
    {
      heading: "How do you convert JPG to WebP?",
      items: [
        { t: "1. Drop the JPG here", d: "The converter opens with WebP chosen." },
        { t: "2. Convert", d: "The photo is saved as WebP at high quality." },
        { t: "3. Replace the JPG on your site", d: "Upload the .webp in place of the original; your page gets lighter, the picture stays the same." },
      ],
    },
    {
      heading: "Why switch your website images to WebP?",
      paragraphs: [
        "Images are usually the heaviest part of a web page. WebP compresses photos more efficiently than JPG, so at the same visual quality the file is typically noticeably smaller, often around a quarter to a third less. Smaller images mean faster loading, especially on mobile data, and page speed affects both how long visitors stay and how search engines judge your site.",
      ],
      list: [
        "**Every modern browser shows WebP**: Chrome, Safari, Firefox and Edge.",
        "**Most website builders and CMSs accept WebP** uploads (WordPress, Shopify, Wix and others).",
        "**It also supports transparency**, so it can replace PNG cutouts too: see [PNG to WebP](/convert/png-to-webp).",
      ],
    },
    {
      heading: "Get the most out of WebP",
      table: {
        head: ["Step", "Why"],
        rows: [
          ["[Resize](/resize-image) to the display width", "A 4,000-pixel photo shown 1,200 wide wastes most of its bytes"],
          ["Convert to WebP here", "Saves a further share at the same look"],
          ["Check the result on your phone", "That's where most visitors see it"],
          ["Keep the original JPG", "For print, email and anything that doesn't take WebP"],
        ],
      },
    },
    {
      heading: "Who converts JPG to WebP?",
      items: [
        { t: "Website and blog owners", d: "Speed up posts and pages without retaking or redesigning anything." },
        { t: "Online stores", d: "Product galleries with many photos load faster, which matters when shoppers browse on phones." },
        { t: "Developers", d: "Prepare optimised assets for apps and sites, keeping JPG as a fallback where needed." },
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. Your browser performs the conversion; no file is uploaded, nothing is charged and nothing is stamped on the photo. Two conversions as a guest, unlimited with a free account. Don't use WebP for email or application forms; they may not accept it. [WebP to JPG](/convert/webp-to-jpg) converts back.",
      ],
    },
    {
      heading: "Notes for developers: WebP with a JPG fallback",
      paragraphs: [
        "If you control the HTML, serve WebP with a fallback in one element: a picture tag containing a source of type image/webp pointing at the .webp file, followed by an ordinary img tag pointing at the .jpg. Browsers that support WebP pick the source; anything older loads the JPG. Keep the width and height attributes on the img so the layout doesn't jump while loading.",
        "For responsive images, export two or three widths (for example 800, 1,200 and 1,600 pixels) and list them with srcset, so phones download a smaller file than desktops. Converting each width here keeps quality consistent across them.",
        "Measure before and after with your browser's network panel or a page-speed test. The improvement is largest on image-heavy pages such as galleries, shops and long blog posts.",
      ],
    },
    {
      heading: "Should every website image be WebP?",
      paragraphs: [
        "Most photos and illustrations, yes. Exceptions: images people will download and reuse (keep a JPG option), images sent by email (JPG), and tiny icons where SVG is better. Social networks and marketplaces convert what you upload, so there's no need to send them WebP. For your own pages, converting photos to WebP is one of the easiest speed wins available.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert JPG to WebP?", a: "Drop the JPG on this page, keep WebP selected and press Convert. Download the .webp file." },
    { q: "Is WebP smaller than JPG?", a: "Usually, at the same visual quality, often by around a quarter to a third." },
    { q: "Will WebP look worse?", a: "No. It's saved at high quality, so it looks the same in normal viewing." },
    { q: "Can every browser show WebP?", a: "Yes, all current versions of Chrome, Safari, Firefox and Edge." },
    { q: "Should I use WebP for email?", a: "No. Some email apps don't display it. Use JPG for email and forms." },
    { q: "Does WordPress accept WebP?", a: "Yes. WordPress and most other website builders accept WebP uploads." },
    { q: "Is it free?", a: "Yes. Converting JPG photos to WebP is free and watermark-free; a free account is needed only after the first two." },
    { q: "Can I convert many JPGs at once?", a: "The batch editor converts up to 100 images to WebP in one go." },
    { q: "What quality is the WebP saved at?", a: "High quality (92%), which looks the same as the JPG in normal viewing while usually being smaller." },
    { q: "Can I convert WebP back to JPG?", a: "Yes, with WebP to JPG, whenever you need a version for email or a form." },
  ],
};

export default page;
