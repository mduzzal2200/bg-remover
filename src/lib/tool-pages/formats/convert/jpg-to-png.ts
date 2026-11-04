import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "JPG to PNG Converter — Convert JPG to PNG Online, Free",
  h1: "Convert JPG to PNG",
  metaDescription: "Convert a JPG to a lossless PNG for editing, graphics and uploads that need PNG. Want a transparent background too? Here's how. Free.",
  subtitle: "Turn a JPG into a lossless PNG: the format design tools, some upload forms and anything you'll edit again prefer. Need a transparent background as well? That takes one extra step, explained below.",
  keywords: "jpg to png, convert jpg to png, jpeg to png, jpg to png converter, change jpg to png, jpg to png transparent",
  sections: [
    {
      heading: "How do you convert a JPG to PNG?",
      items: [
        { t: "1. Drop the JPG here", d: "The converter opens with PNG as the output." },
        { t: "2. Convert", d: "The image is saved as a PNG with no further compression, so it won't lose any more quality, however often you edit and re-save it." },
        { t: "3. Download", d: "Expect the PNG to be bigger than the JPG: lossless storage takes more space." },
      ],
    },
    {
      heading: "Will converting to PNG make the background transparent?",
      paragraphs: [
        "No, and this is the most common surprise. A JPG has no transparency, so a white background in a JPG becomes a white background in the PNG. Converting only changes the file format. To get a transparent background, the background has to be removed: use the [background remover](/remove-bg) (or [make a logo transparent](/remove-bg/logo) for logos), which gives you a transparent PNG directly.",
      ],
    },
    {
      heading: "Why convert JPG to PNG at all?",
      list: [
        "**To stop quality loss from repeated edits.** Every time a JPG is saved it's compressed again. Converting to PNG once means further edits don't degrade it.",
        "**Because the destination asks for PNG.** Some design tools, print services and app stores require PNG files.",
        "**For graphics, diagrams and screenshots** you'll add text or arrows to, where crisp edges matter.",
        "**To use it as a base for transparency** after removing a background.",
      ],
      table: {
        head: ["You want", "Do this"],
        rows: [
          ["A lossless copy to edit", "Convert JPG to PNG here"],
          ["A transparent background", "[Background remover](/remove-bg)"],
          ["A smaller file for the web", "[JPG to WebP](/convert/jpg-to-webp)"],
          ["Sharper image", "[Image upscaler](/upscale); converting won't add detail"],
        ],
      },
    },
    {
      heading: "Does converting improve quality?",
      paragraphs: [
        "No. Any blockiness or blur already in the JPG is copied faithfully into the PNG. Converting stops further loss; it can't undo past compression. If the image needs to look better, upscale or restore it first, then save as PNG.",
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. Your browser does the conversion, so it's free with no watermark, and nothing is uploaded to do it. Guests can convert twice; free accounts are unlimited. Going back the other way? [PNG to JPG](/convert/png-to-jpg).",
      ],
    },
    {
      heading: "Why does my PNG look worse than expected?",
      items: [
        { t: "Grey speckles around text and edges", d: "Those are JPG compression artefacts that were already in the file. On a white page you didn't notice them; in a PNG placed on a dark slide they show. Start from a higher-quality original if you can." },
        { t: "A white box behind the logo", d: "The JPG's background was white, and converting keeps it. Remove the background first with the background remover." },
        { t: "A much bigger file", d: "Expected: PNG is lossless. If size matters more than editing, keep the JPG, or use WebP for the web." },
        { t: "Slightly different colours", d: "Some JPGs carry a colour profile that apps read differently. The pixels are the same; view both in the same app to compare fairly." },
      ],
    },
    {
      heading: "Do print shops and app stores want PNG?",
      paragraphs: [
        "Often. App stores ask for icons and screenshots as PNG, and some print services prefer PNG or TIFF for designs with text, because there's no further compression to soften letters. Convert the highest-quality JPG you have, then check the destination's size requirements; converting doesn't add pixels, so a small JPG stays small as a PNG.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert JPG to PNG?", a: "Drop the JPG on this page, keep PNG selected and press Convert. Download the PNG." },
    { q: "Will the PNG have a transparent background?", a: "No. Converting doesn't remove anything. Use the background remover to make the background transparent." },
    { q: "Why is the PNG bigger than the JPG?", a: "PNG stores the image without lossy compression, so it takes more space." },
    { q: "Does converting to PNG improve quality?", a: "No. It keeps the quality the JPG already has and stops any further loss when you edit." },
    { q: "Is JPEG to PNG the same thing?", a: "Yes. JPG and JPEG are the same format." },
    { q: "When should I use PNG instead of JPG?", a: "For graphics, screenshots, logos, images you'll edit again, and anything that needs transparency." },
    { q: "Is it free?", a: "Yes, converting JPG to PNG is free and adds nothing to the image; after two files as a guest, a free account keeps it going." },
    { q: "Is my image uploaded?", a: "No. Your browser reads the JPG and writes the PNG on your own device." },
    { q: "Can I convert a PNG back to JPG later?", a: "Yes, any time, with PNG to JPG. Keep the PNG as your master and make JPG copies for sharing." },
    { q: "Does the PNG keep the same dimensions?", a: "Yes. The width and height stay exactly as they were in the JPG." },
  ],
};

export default page;
