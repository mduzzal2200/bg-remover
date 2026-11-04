import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";

const page: ToolPage = {
  title: "Make a Logo Transparent — Remove Logo Background Online",
  h1: "Make a Logo Transparent",
  metaDescription: "Remove the white or coloured box behind a logo and get a transparent PNG that sits cleanly on slides, websites, videos and merchandise.",
  subtitle: "Got your logo as a JPG with a white box around it? Remove the box and get a transparent PNG that sits cleanly on any colour: slides, websites, videos, invoices and merchandise mock-ups.",
  keywords: "make logo transparent, remove background from logo, transparent logo png, logo background remover, remove white background from logo, transparent png maker",
  sections: [
    {
      heading: "How do you make a logo background transparent?",
      items: [
        { t: "1. Find the biggest copy of the logo you have", d: "The original file from your designer, a large export, or the logo from your website. Bigger and sharper means cleaner edges." },
        { t: "2. Remove the background", d: `Drop it on this page and press Remove background (${COST}). The white or coloured box is replaced with transparency; the logo's own colours stay exactly as they are.` },
        { t: "3. Check it on dark and light", d: "Look at the result on a dark slide and a light page. If it looks right on both, download the PNG and use it everywhere." },
      ],
    },
    {
      heading: "Why does a logo need a transparent background?",
      paragraphs: [
        "A logo saved as a JPG always has a background, usually white, because JPG has no way to store \"nothing\". Placed on anything other than white, you see a box: on a coloured website header, a dark slide, a photo, a video or a T-shirt mock-up. A transparent PNG stores the empty space as empty, so only the logo shows, at whatever colour sits behind it.",
      ],
      table: {
        head: ["Where the logo goes", "JPG with a white box", "Transparent PNG"],
        rows: [
          ["Dark website header", "A white rectangle around it", "Just the logo"],
          ["Slides and presentations", "Box clashes with the slide colour", "Sits on any template"],
          ["Video and thumbnails", "Covers part of the frame", "Overlays cleanly"],
          ["Watermark on photos", "Hides part of the photo", "Only the mark shows"],
        ],
      },
    },
    {
      heading: "Who needs a transparent logo?",
      items: [
        { t: "Small business owners", d: "Your logo goes on the website, invoices, social profile, menus and packaging. One transparent PNG works for all of them, instead of asking a designer for each." },
        { t: "Event organisers and schools", d: "Sponsor and partner logos arrive as random JPGs. Making them all transparent lets you lay them out neatly on a poster or a slide." },
        { t: "Creators", d: "Put your channel logo on thumbnails, end screens and video corners without a box around it." },
        { t: "Freelancers and agencies", d: "Clients often send a logo pasted from somewhere. Clean it up before it goes into a proposal, a mock-up or a pitch deck." },
      ],
    },
    {
      heading: "Tips for a clean transparent logo",
      list: [
        "**Start big.** A logo 500 pixels wide or more cuts out much more cleanly than a 100-pixel icon. If a small copy is all you have, [upscale it](/upscale) first in Normal mode, which keeps graphics faithful.",
        "**Flat logos are easiest.** Solid shapes and text on a plain background separate almost perfectly.",
        "**Watch enclosed spaces**, like the inside of an O or an A. Check they're transparent too, not left filled with the old background.",
        "**Gradients and soft shadows** around a logo can be partly kept or partly removed; check the result and try again if needed.",
        "**Keep the PNG.** Converting it to JPG later brings the white box back.",
      ],
    },
    {
      heading: "Is this the same as a vector logo?",
      paragraphs: [
        "No, and it's worth knowing the difference. A transparent PNG is still made of pixels, so it's sharp at the size you made it and gets soft if you blow it up much larger, for a banner or a sign. A vector logo (SVG, AI or EPS) is made of shapes and stays sharp at any size. For print and signage, ask whoever designed the logo for the vector file. For screens, slides and most online uses, a large transparent PNG is all you need.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        `Removing the background uses an AI model: ${COST} per logo, only when it works. Packs start at ${PACK_FROM} and never expire. Resizing, cropping or [converting to WebP](/convert-image) (which keeps transparency and is smaller) are free in the same editor. No watermark is added.`,
        "To use the transparent logo as a watermark on photos, add it in a design app; the [add watermark](/watermark-image) tool adds text marks. For signatures, see [signature background remover](/remove-bg/signature).",
      ],
    },
  ],
  faq: [
    { q: "How do I make a logo transparent?", a: "Drop the logo on this page, press Remove background, and download the PNG. The white or coloured box becomes transparent and only the logo is left." },
    { q: "Why does my logo have a white box around it?", a: "Because it's saved as a JPG, which can't store transparency. Making it a transparent PNG removes the box." },
    { q: "Will the logo's colours change?", a: "No. The tool keeps your original pixels and only removes the background." },
    { q: "Can it handle text and thin lines?", a: "Yes, especially on a plain background. Start from the largest copy of the logo you have for the cleanest edges." },
    { q: "Can I get an SVG?", a: "No. You get a transparent PNG made of pixels. For a scalable vector file, ask the logo's designer." },
    { q: "How much does it cost?", a: `${COST} per logo, charged only when it works, with no watermark.` },
    { q: "My logo is tiny. Will it work?", a: "Upscale it first in Normal mode, which enlarges graphics without inventing detail, then remove the background." },
    { q: "Will it stay transparent if I convert it?", a: "Converting to WebP keeps the transparency and makes the file smaller. Converting to JPG fills the background with white again." },
  ],
};

export default page;
