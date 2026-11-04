import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "SVG to PNG Converter — Turn Vector SVG Into a PNG Image",
  h1: "Convert SVG to PNG",
  metaDescription: "Convert an SVG logo, icon or illustration into a PNG with a transparent background, for apps, slides and uploads that don't take SVG. Free.",
  subtitle: "Turn an SVG logo, icon or illustration into a regular PNG with a transparent background, for social profiles, slides, documents and upload forms that don't accept SVG.",
  keywords: "svg to png, convert svg to png, svg to png converter, svg to png transparent, vector to png, export svg as png",
  sections: [
    {
      heading: "How do you convert SVG to PNG?",
      items: [
        { t: "1. Drop the SVG on this page", d: "Use the upload box above; it hands the SVG to the converter with PNG selected." },
        { t: "2. Convert", d: "Your browser draws the vector at the size written in the SVG and saves it as a PNG. Transparent areas stay transparent." },
        { t: "3. Check the size and download", d: "If the PNG is smaller than you need, see the tip on size below." },
      ],
    },
    {
      heading: "What's the difference between SVG and PNG?",
      table: {
        head: ["", "SVG", "PNG"],
        rows: [
          ["Made of", "Shapes and paths (vector)", "Pixels (raster)"],
          ["Scaling", "Sharp at any size", "Sharp at its own size, soft if enlarged a lot"],
          ["Transparency", "Yes", "Yes"],
          ["Accepted by", "Browsers, design tools", "Almost everything"],
          ["Best for", "Logos and icons on websites", "Social media, documents, slides, forms"],
        ],
      },
      after: [
        "Keep the SVG as your master. Export PNGs at the sizes you need for places that can't take vectors.",
      ],
    },
    {
      heading: "How big will the PNG be?",
      paragraphs: [
        "An SVG has no fixed pixel size, so the browser draws it at the width and height written inside the file. Many icons are written at 24 or 512 pixels; many logos at a few hundred. If your PNG comes out smaller than you want, you have two options: open the SVG in a design app and export it larger, or [upscale the PNG](/upscale) in Normal mode, which keeps flat graphics clean. Some SVGs have no size written in at all and come out small; the same fixes apply.",
      ],
    },
    {
      heading: "Who converts SVG to PNG?",
      items: [
        { t: "Small businesses", d: "Your designer sent the logo as SVG, but social profiles, marketplaces and email signatures want a PNG." },
        { t: "Presenters and students", d: "Some slide and document apps handle SVG poorly; a PNG always works." },
        { t: "Developers", d: "Generate PNG fallbacks and app icons from SVG sources." },
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. The SVG is rendered on your own device, so it isn't uploaded, and the conversion costs nothing and adds no watermark. Guests get two conversions; a free account gives unlimited. For the opposite direction (pixels to vector) you need tracing software; this tool doesn't do that.",
      ],
    },
    {
      heading: "What size PNG do you need from an SVG?",
      after: [
        "Export from the SVG at the largest size you'll need, then make smaller copies with the resize tool. Shrinking a big PNG looks better than enlarging a small one.",
      ],
      table: {
        head: ["Where the PNG goes", "Suggested size"],
        rows: [
          ["Website favicon", "32 × 32 and 48 × 48 pixels"],
          ["Social media profile picture", "400 to 1,000 pixels square"],
          ["App or store icon", "512 or 1,024 pixels square"],
          ["Slides and documents", "1,000 to 2,000 pixels wide"],
          ["Small printed item", "About 300 pixels per inch of print size"],
        ],
      },
    },
    {
      heading: "Keeping colours and transparency right",
      paragraphs: [
        "The PNG keeps the SVG's transparent areas, so a logo stays see-through. If your logo looks invisible after converting, it's probably white artwork on a transparent background: it's still there, just shown on white. Place it on a dark background to check. Gradients, shadows and effects in the SVG are drawn exactly as your browser renders them.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert SVG to PNG?", a: "Drop the SVG in the upload box on this page; it opens with PNG selected. Press Convert and download the PNG." },
    { q: "Does the PNG keep a transparent background?", a: "Yes. Transparent areas in the SVG stay transparent." },
    { q: "Why is my PNG so small?", a: "The SVG is drawn at the size written inside it. Export it larger from a design app, or upscale the PNG in Normal mode." },
    { q: "Can I convert PNG to SVG here?", a: "No. Turning pixels into vector shapes needs tracing software." },
    { q: "Why does the editor's own upload button reject SVG?", a: "Its file picker takes JPG, PNG and WebP. The upload box on this page passes the SVG straight to the converter." },
    { q: "Will text in the SVG look right?", a: "Usually. If the SVG uses a font that isn't on your device, a similar font may be used; convert text to outlines in a design app to be safe." },
    { q: "Is it free?", a: "Yes. SVG to PNG is free with no watermark; two conversions work as a guest and a free account covers more." },
    { q: "Is my file uploaded?", a: "No. The vector is drawn into a PNG by your browser on your own device." },
    { q: "Can I convert an SVG to JPG instead?", a: "Convert to PNG first, then use PNG to JPG. The transparent background becomes white in the JPG." },
    { q: "Does it work with icons from icon libraries?", a: "Yes. Download the icon as SVG, drop it here and convert; small icons may need exporting larger first." },
  ],
};

export default page;
