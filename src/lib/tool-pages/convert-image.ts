import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Image Converter — JPG, PNG and WebP Online, Free",
  h1: "Free Image Converter",
  metaDescription: "Convert images between JPG, PNG and WebP in your browser. Keep transparency, shrink photos for the web, or get the format a site asks for.",
  subtitle: "Turn a photo into the format you need: JPG for photos that every app accepts, PNG for sharp graphics and transparency, WebP for small, fast web images.",
  keywords: "image converter, convert image, jpg to png, png to jpg, webp to jpg, webp to png, jpg to webp, convert image format online",
  alt: { hero: "A bicycle photo shown as a flat print and converted to a cut-out image on a transparent checkerboard" },
  sections: [
    {
      heading: "How do you convert an image to another format?",
      items: [
        { t: "1. Drop your image here", d: "JPG, PNG and WebP open straight away. Most other images your browser can display, such as GIF, BMP and AVIF, also open when you drop them on this page." },
        { t: "2. Choose JPG, PNG or WebP", d: "The editor reminds you which formats keep transparency, so you don't lose a logo's see-through background by accident." },
        { t: "3. Convert and download", d: "The file downloads with the right extension. Your original stays as it was." },
      ],
    },
    {
      heading: "JPG, PNG or WebP: which format should you use?",
      table: {
        head: ["Format", "Best for", "Transparency", "File size"],
        rows: [
          ["**JPG**", "Photos, and anywhere that only accepts JPG (many forms and older apps)", "No; transparent areas become white", "Small"],
          ["**PNG**", "Logos, screenshots, text, graphics with sharp edges, anything that must stay transparent", "Yes", "Large for photos, small for flat graphics"],
          ["**WebP**", "Images on websites and online stores", "Yes", "Smallest of the three"],
        ],
      },
      paragraphs: [
        "The short version: **photos to JPG, graphics to PNG, websites to WebP.** A PNG photo is often five to ten times bigger than the same photo as a JPG with no visible difference, which is the most common reason a file is \"too large\" for an upload. Going the other way, a logo saved as JPG gets fuzzy edges and a white box you can't remove, so keep logos as PNG.",
      ],
    },
    {
      heading: "Who converts images, and why?",
      items: [
        { t: "Anyone filling in a form that rejects the file", d: "Job portals, exam sites and government services often accept only JPG. Convert PNG or WebP to JPG and the upload goes through. If there's also a size limit, [compress it](/compress-image) next." },
        { t: "People saving images from the web", d: "Many websites now serve WebP, which some older apps and editors won't open. Convert it to [WebP to JPG](/convert/webp-to-jpg) or [WebP to PNG](/convert/webp-to-png) and it works everywhere." },
        { t: "Website owners and online sellers", d: "WebP images are usually noticeably smaller than JPG at the same quality, so pages load faster. Convert product photos with [JPG to WebP](/convert/jpg-to-webp) before uploading them to your site." },
        { t: "Designers and marketers", d: "Need a transparent version of a graphic for a slide or a video overlay? [JPG to PNG](/convert/jpg-to-png) changes the format, and the [background remover](/remove-bg) removes the background itself." },
        { t: "Students and office workers", d: "Screenshots for documents and slides stay sharpest as PNG. Converting them to JPG makes them smaller to share but can blur fine text, so keep the PNG for anything you'll read closely." },
      ],
    },
    {
      heading: "Does converting change the quality?",
      paragraphs: [
        "It depends on the direction. Converting **to PNG** is lossless: nothing is thrown away, though a photo saved as PNG gets much bigger. Converting **to JPG or WebP** compresses the image. The converter saves at high quality (92%), so photos look the same, but very fine text and sharp graphic edges can soften slightly.",
        "Converting can't add quality that isn't there. A small, blurry JPG converted to PNG is still small and blurry, just in a bigger file. For that, use the [image upscaler](/upscale).",
      ],
    },
    {
      heading: "What about transparency?",
      paragraphs: [
        "PNG and WebP can store transparent areas; JPG can't. So when you convert a transparent PNG to JPG, the transparent parts are filled with white. That's usually what you want for a form or a document, and it's the safest choice because white looks right on almost any page.",
        "Converting a JPG to PNG doesn't make anything transparent by itself, because there's no transparency in a JPG to keep. To cut the subject out, use the [background remover](/remove-bg) first, then save as PNG or WebP.",
      ],
    },
    {
      heading: "Is the image converter free?",
      paragraphs: [
        "Yes. Your browser does the converting, which is why there's no fee, no file limit and no watermark. Convert two images as a guest, then make a free account for unlimited conversions.",
      ],
    },
    {
      heading: "Tips for converting images",
      list: [
        "**Convert from the best copy you have.** Converting a JPG that's already been through WhatsApp compresses it a second time.",
        "**Don't convert back and forth.** Each trip to JPG or WebP loses a little; keep an original.",
        "**For the web, try WebP before shrinking the image.** The size saving often makes resizing unnecessary.",
        "**Check what the destination accepts.** If a site says \"JPG or PNG\", don't send WebP even though it's smaller.",
      ],
    },
    {
      heading: "What can't it convert?",
      list: [
        "**HEIC** photos from iPhones can't be opened in most browsers. On the iPhone, choose **Settings → Camera → Formats → Most Compatible** to take photos as JPG, or share the photo by email or AirDrop, which often converts it automatically.",
        "**SVG output.** It converts *from* SVG in [SVG to PNG](/convert/svg-to-png), but it doesn't turn photos into vector graphics.",
        "**Animated GIFs** keep only their first frame.",
        "**PDF.** To turn an image into a PDF, use [image to PDF](/image-to-pdf).",
      ],
    },
    {
      heading: "Is it private?",
      paragraphs: [
        "Files are converted on your device rather than uploaded for processing. Signed in? The converted copy also lands in My Creations, where you can delete it.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert an image to JPG?", a: "Drop the image on this page, choose JPG and press Convert. Transparent areas are filled with white, and the file downloads as a .jpg." },
    { q: "How do I convert JPG to PNG?", a: "Drop the JPG here, choose PNG and convert. PNG is lossless, so the file will be bigger. To make the background transparent, remove it with the background remover first." },
    { q: "Which format is smallest?", a: "WebP is usually the smallest at the same quality, then JPG. PNG is the largest for photos but compact for flat graphics." },
    { q: "Does converting lose quality?", a: "Converting to PNG is lossless. Converting to JPG or WebP saves at high quality, so photos look the same, but fine text can soften slightly." },
    { q: "Will my transparent PNG stay transparent?", a: "Yes if you convert it to WebP. JPG has no transparency, so converting to JPG fills transparent areas with white." },
    { q: "Can I convert HEIC iPhone photos?", a: "Not in most browsers, which can't open HEIC. Set the iPhone camera to Most Compatible to shoot JPG, or share the photo by email to convert it." },
    { q: "Is the image converter free?", a: "Yes, free and watermark-free. Two conversions work without an account; a free account lifts the limit." },
    { q: "Can I convert several images at once?", a: "The batch editor converts up to 100 images to the same output format in one go." },
  ],
};

export default page;
