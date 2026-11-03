import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "AVIF to PNG Converter — Lossless PNG From AVIF Images",
  h1: "Convert AVIF to PNG",
  metaDescription: "Convert AVIF images to lossless PNG, keeping transparency, so you can edit them in any app or design tool. Free, private, in your browser.",
  subtitle: "Turn an AVIF image into a lossless PNG that every design tool, editor and document app understands, with transparent backgrounds kept intact.",
  keywords: "avif to png, convert avif to png, avif to png converter, avif transparent to png, open avif as png, avif image to png",
  sections: [
    {
      heading: "How do you convert AVIF to PNG?",
      items: [
        { t: "1. Drop the AVIF on this page", d: "The upload box hands it to the converter with PNG chosen." },
        { t: "2. Convert", d: "The image is saved as a lossless PNG; transparency is preserved." },
        { t: "3. Download and edit", d: "Open it in any image editor, slide app or design tool." },
      ],
    },
    {
      heading: "Why PNG rather than JPG?",
      list: [
        "**Transparency.** AVIF can store transparent backgrounds, like logos and cutouts; PNG keeps them, JPG doesn't.",
        "**Editing.** PNG is lossless, so you can edit and re-save without the quality dropping each time.",
        "**Graphics and text.** Sharp edges stay sharp in PNG.",
      ],
      after: [
        "For a photo you only want to share or upload, [AVIF to JPG](/convert/avif-to-jpg) gives a much smaller file.",
      ],
    },
    {
      heading: "What to expect from the file size",
      paragraphs: [
        "AVIF is one of the most efficient formats there is, and PNG is lossless, so the PNG will be much larger than the AVIF, sometimes many times larger. That's normal and the price of an edit-friendly, universally compatible file. When you're done editing, export a smaller copy for the web with [PNG to WebP](/convert/png-to-webp).",
      ],
      table: {
        head: ["Goal", "Format to end with"],
        rows: [
          ["Editing and design work", "PNG"],
          ["Website", "WebP (or keep AVIF)"],
          ["Email, forms, printing", "JPG"],
        ],
      },
    },
    {
      heading: "Who converts AVIF to PNG?",
      items: [
        { t: "Designers", d: "Bring AVIF assets into tools that don't read AVIF, with transparency intact." },
        { t: "Developers", d: "Produce PNG fallbacks for older systems from AVIF sources." },
        { t: "Anyone editing a saved image", d: "Open an AVIF from the web in a regular editor. Only reuse images you have rights to." },
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes: the conversion is local to your browser, so the file isn't uploaded, and it's free with no watermark. Guests convert twice; a free account removes the cap.",
      ],
    },
    {
      heading: "Will the colours look exactly the same?",
      paragraphs: [
        "Almost always. One thing to know: AVIF can hold HDR and wide-gamut colour, a brighter and richer range than standard images. The converter works in standard colour, so a true HDR AVIF is brought into the normal range: very bright highlights are compressed, and extremely saturated colours may look slightly calmer. For ordinary AVIF photos and graphics from websites, you won't see a difference.",
        "If colour accuracy matters, as in product photos or brand assets, compare the PNG with the original on the same screen before using it, and keep the AVIF as the master copy.",
      ],
    },
    {
      heading: "Who uses AVIF, and why it's appearing more",
      paragraphs: [
        "AVIF was built by a group of large technology companies to give the web a modern, royalty-free image format with excellent compression. Browsers added support over the last few years, and image services now hand AVIF to browsers that accept it, because a smaller file means a faster page. Some cameras and phones can also save in modern formats, depending on their settings.",
        "The result is that AVIF files turn up more often in downloads, design handoffs and shared folders, while plenty of desktop apps, office suites and older devices still expect PNG or JPG. Converting to PNG bridges that gap without losing quality, and the conversion takes seconds in the browser you already have.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert AVIF to PNG?", a: "Drop the AVIF in the upload box on this page; it opens with PNG selected. Press Convert and download." },
    { q: "Does AVIF to PNG keep transparency?", a: "Yes. Transparent areas stay transparent." },
    { q: "Why is the PNG so much bigger?", a: "AVIF is highly compressed and PNG is lossless, so the same image takes much more space as PNG." },
    { q: "Does it lose quality?", a: "No. PNG keeps the image exactly as the AVIF looks." },
    { q: "Why does the editor's own upload reject AVIF?", a: "Its file picker takes JPG, PNG and WebP. The upload box on this page passes AVIF straight to the converter." },
    { q: "Should I convert to PNG or JPG?", a: "PNG for transparency and editing; JPG for photos you want small for sharing." },
    { q: "Is it free?", a: "Yes. AVIF to PNG is free, adds nothing to the picture, and asks for a free account only after two conversions." },
    { q: "Is my file uploaded?", a: "No. Your browser converts it." },
    { q: "Can I convert a PNG back to AVIF here?", a: "No. The converter outputs JPG, PNG and WebP. WebP is a good, widely supported choice for small web images with transparency." },
    { q: "Does the PNG keep the same dimensions?", a: "Yes. Every pixel of width and height is kept; only the file format changes." },
  ],
};

export default page;
