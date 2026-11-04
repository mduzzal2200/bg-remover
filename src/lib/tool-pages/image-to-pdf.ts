import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Image to PDF — Convert JPG or PNG to PDF Online, Free",
  h1: "Image to PDF Converter",
  metaDescription: "Turn a photo, scan or screenshot into a PDF in your browser. The page fits the image exactly. JPG, PNG or WebP to PDF, free, no watermark.",
  subtitle: "Turn a photo of a document, a receipt, an ID or a screenshot into a clean PDF that forms, offices and printers accept. The page is sized to fit your image exactly.",
  keywords: "image to pdf, jpg to pdf, png to pdf, convert image to pdf, photo to pdf, picture to pdf, convert jpg to pdf online, scan to pdf",
  alt: { hero: "A phone photo of a document turned into a tidy single-page PDF" },
  sections: [
    {
      heading: "How do you convert a JPG to a PDF?",
      items: [
        { t: "1. Drop the image here", d: "A JPG, PNG or WebP of the page. The editor opens on the Image to PDF tool." },
        { t: "2. Fix it up first, if needed", d: "Rotate it the right way up, crop off the table around the paper, or brighten it with Adjust. All of these are in the same editor, and a clean image makes a clean PDF." },
        { t: "3. Download as PDF", d: "Press Download as PDF. A one-page PDF downloads straight away, with the page exactly the size of your image." },
      ],
    },
    {
      heading: "Why turn an image into a PDF?",
      paragraphs: [
        "A PDF looks the same on every phone, computer and printer, and it's the format offices, banks and online forms expect for documents. A JPG of the same thing works, but it can be rotated, cropped or shown at odd sizes by whatever opens it, and some upload forms simply won't accept images where they've asked for a document.",
      ],
    },
    {
      heading: "Who converts images to PDF?",
      items: [
        { t: "People filling in applications", d: "Visa, job, college and government forms often ask for documents \"in PDF format\": an ID card, a certificate, a payslip, a proof of address. Photograph it, straighten it here, and save it as a PDF." },
        { t: "Freelancers and small businesses", d: "Send a receipt, a signed page or a delivery note as a PDF so it looks official and can be filed with your accounts." },
        { t: "Students", d: "Turn photos of handwritten homework, notes or a diagram into PDFs for an online submission portal." },
        { t: "Anyone printing", d: "Some printers and print shops handle PDFs more predictably than images. A PDF of a poster or a photo prints at the right proportions." },
      ],
    },
    {
      heading: "How do you get a clean PDF from a phone photo?",
      list: [
        "**Shoot from directly above**, with the paper filling most of the frame, in even daylight. Avoid your own shadow falling across the page.",
        "**Put dark paper on a light table, or light paper on a dark one**, so the edges are easy to crop.",
        "**[Crop](/crop-image) away the background**, then **[rotate](/rotate-image)** if it's sideways.",
        "**Brighten it** with Adjust in the editor if the paper looks grey; a little more contrast makes text crisper.",
        "**Check the file size** if the form has a limit. If the PDF is too big, [compress the image](/compress-image) first and convert again.",
      ],
    },
    {
      heading: "What does the PDF look like?",
      paragraphs: [
        "One page, the same proportions as your image, with the image filling it. There are no margins, headers or watermarks added. Transparent areas in a PNG become white, which is how a printed page would look. The image inside is stored as a high-quality JPG, so the PDF stays a sensible size.",
      ],
      table: {
        head: ["You need", "Do this"],
        rows: [
          ["A one-page PDF of a photo or scan", "Use this tool"],
          ["A smaller PDF for an upload limit", "Compress the image first, then convert"],
          ["An image back out of a PDF", "Take a screenshot of the page, or open it in your phone's file viewer and share it as an image"],
          ["Text you can edit", "You need OCR software; this keeps the page as a picture"],
        ],
      },
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. Your browser assembles the PDF, so there's no charge, no page limit and nothing added to the page. Guests can make two PDFs; a free account keeps it going without limits.",
      ],
    },
    {
      heading: "What can't image to PDF do?",
      list: [
        "**Combine several images into one PDF.** It makes one page per image. For a multi-page document, convert each page, then join the PDFs with your computer's built-in tools (on a Mac, Preview; on Windows, Print to PDF from the Photos app with several selected).",
        "**Make the text searchable or editable.** The page is an image; selecting text needs OCR.",
        "**Set a paper size like A4 or Letter.** The page matches your image. Most printers will fit it to the paper automatically.",
        "**Edit an existing PDF.** It turns images into PDFs, not the other way round.",
      ],
    },
    {
      heading: "Is it private?",
      paragraphs: [
        "The PDF is created in your browser; your image isn't sent anywhere to be converted, which matters for IDs and bank documents. The PDF downloads to your device.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert a JPG to PDF?", a: "Drop the JPG on this page and press Download as PDF. A one-page PDF sized to your image downloads straight away." },
    { q: "Is the image to PDF converter free?", a: "Yes. There's no watermark and no cost. You can make two PDFs as a guest and as many as you like with a free account." },
    { q: "Can I convert a PNG to PDF?", a: "Yes, and WebP too. Transparent areas become white in the PDF." },
    { q: "Can I put several images in one PDF?", a: "Not in this tool; it makes one page per image. Convert each image, then combine the PDFs with Preview on a Mac or Print to PDF on Windows." },
    { q: "What page size is the PDF?", a: "The page is the same shape and size as your image, with no margins. Printers fit it to the paper when you print." },
    { q: "Is it safe for ID documents?", a: "The conversion happens in your browser, and the PDF downloads to your device; your image isn't sent to a server to be converted." },
    { q: "How do I make the PDF smaller?", a: "Compress or resize the image first, then convert it again. A smaller image makes a smaller PDF." },
    { q: "Can I edit the text in the PDF?", a: "No. The page is a picture of your image. Editable text needs OCR software." },
  ],
};

export default page;
