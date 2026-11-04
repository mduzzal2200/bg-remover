import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "GIF to PNG Converter — Save a GIF as a Still PNG",
  h1: "Convert GIF to PNG",
  metaDescription: "Turn a GIF into a PNG still image, with transparency kept. Handy for old graphics, icons and grabbing a frame from an animation. Free.",
  subtitle: "Turn a GIF into a PNG still: for old logos and icons saved as GIF, or to grab the first frame of an animation as a clean image with its transparency kept.",
  keywords: "gif to png, convert gif to png, gif to png converter, gif frame to png, gif to image, save gif as png",
  sections: [
    {
      heading: "How do you convert a GIF to PNG?",
      items: [
        { t: "1. Drop the GIF on this page", d: "Use the upload box above; it hands the GIF straight to the converter with PNG selected." },
        { t: "2. Convert", d: "The image is redrawn and saved as a PNG. Transparent areas stay transparent." },
        { t: "3. Download the PNG", d: "A still image you can edit, resize and use anywhere." },
      ],
    },
    {
      heading: "What happens to an animated GIF?",
      paragraphs: [
        "The converter keeps the **first frame** of the animation, as a still PNG. That's useful when you want a thumbnail or a clean image of a sticker or logo animation. It won't convert the whole animation or every frame; for that you'd need a video or GIF editing app.",
      ],
    },
    {
      heading: "Why convert GIF to PNG?",
      table: {
        head: ["", "GIF", "PNG"],
        rows: [
          ["Colours", "Up to 256", "Millions"],
          ["Transparency", "On or off per pixel (hard edges)", "Smooth, partial transparency"],
          ["Animation", "Yes", "No (still image)"],
          ["Editing support", "Limited in many apps", "Supported everywhere"],
        ],
      },
      after: [
        "Old websites and email signatures are full of logos and icons saved as GIF in the 1990s and 2000s. Converting them to PNG makes them easy to edit, resize and drop into modern designs. A PNG won't add colours the GIF never had, but it stops the image being stuck in an old format.",
      ],
    },
    {
      heading: "Who converts GIF to PNG?",
      items: [
        { t: "Designers refreshing old brand assets", d: "Turn legacy GIF logos into PNGs, then [upscale them](/upscale) in Normal mode if they're tiny." },
        { t: "Creators making thumbnails", d: "Grab the first frame of a GIF as a still image for a cover or preview." },
        { t: "Anyone whose app won't accept GIF", d: "Some upload forms and editors take PNG or JPG only." },
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. The GIF is converted in your browser, with no upload, no cost and no watermark. As a guest you can convert two files; a free account keeps it unlimited. Want a smaller photo-style file instead? Convert the PNG to WebP or JPG afterwards via the [image converter](/convert-image).",
      ],
    },
    {
      heading: "Where do GIF files still come from?",
      list: [
        "**Old websites and email signatures**, where logos and buttons were saved as GIF to keep them small in the dial-up days.",
        "**Clip art and icon packs** from older software and CDs.",
        "**Reaction GIFs and stickers** saved from chat apps and GIF libraries; converting gives you a still you can edit or print.",
        "**Exports from older systems**, such as some ticketing, labelling and charting tools that still write GIF.",
      ],
      after: [
        "Need a particular moment from an animation rather than the first frame? Play it, pause on the frame you want and take a screenshot, then crop it with the crop tool. It's not as clean as a direct export, but it works on any device.",
      ],
    },
    {
      heading: "Will a GIF logo look sharper as a PNG?",
      paragraphs: [
        "Not by itself. GIFs are limited to 256 colours and on-or-off transparency, so smooth curves often have jagged or speckled edges, and those are copied exactly into the PNG. To get a cleaner logo, convert to PNG, then try the image upscaler in Normal mode to enlarge it smoothly, or ask whoever owns the logo for an original PNG or vector version.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert a GIF to PNG?", a: "Drop the GIF in the upload box on this page; it opens in the converter with PNG selected. Press Convert and download." },
    { q: "What happens to an animated GIF?", a: "Only the first frame is converted, as a still PNG." },
    { q: "Does the PNG keep transparency?", a: "Yes. Transparent areas in the GIF stay transparent." },
    { q: "Will the PNG look better than the GIF?", a: "It looks the same. PNG can hold more colours, but it can't add colours the GIF didn't have." },
    { q: "Why does the editor's own upload button reject GIFs?", a: "The editor's file picker takes JPG, PNG and WebP. Use the upload box on this page, which passes the GIF straight to the converter." },
    { q: "Can I get every frame?", a: "No, only the first one. Use a GIF or video editor to export all frames." },
    { q: "Is it free?", a: "Yes. Converting a GIF to PNG is free with no watermark; you'll be asked for a free account only after two conversions." },
    { q: "Is my file uploaded?", a: "No. The GIF is decoded and saved as a PNG by your own browser." },
    { q: "Can I convert PNG back to GIF?", a: "No, the converter outputs JPG, PNG and WebP. PNG is the better choice for still images anyway, and WebP also supports transparency." },
    { q: "Does converting change the size in pixels?", a: "No. The PNG has the same width and height as the GIF." },
  ],
};

export default page;
