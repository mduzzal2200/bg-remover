import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "AVIF to JPG Converter — Open AVIF Photos Anywhere",
  h1: "Convert AVIF to JPG",
  metaDescription: "Convert AVIF images to JPG so they open in every app, form, email and printer. Keep the photo, lose the compatibility problems. Free.",
  subtitle: "AVIF is a newer, very efficient image format, but plenty of apps, forms and printers can't open it yet. Convert it to JPG and it works everywhere.",
  keywords: "avif to jpg, convert avif to jpg, avif to jpeg, avif to jpg converter, open avif file, avif image converter",
  sections: [
    {
      heading: "How do you convert AVIF to JPG?",
      items: [
        { t: "1. Drop the AVIF on this page", d: "Use the upload box above. Your browser opens the AVIF (current Chrome, Edge, Firefox and Safari can) and passes it to the converter with JPG selected." },
        { t: "2. Convert", d: "The image is saved as a high-quality JPG; any transparent areas become white." },
        { t: "3. Download", d: "Use it in email, forms, galleries and editors that don't know AVIF." },
      ],
    },
    {
      heading: "What is AVIF?",
      paragraphs: [
        "AVIF is an image format based on the AV1 video codec. It compresses photos very efficiently, often smaller than WebP and JPG at the same quality, and supports transparency and HDR. That's why some websites and phones have started using it. The catch is support outside browsers: many photo apps, office programs, upload forms, print kiosks and older devices still can't open AVIF files.",
      ],
      table: {
        head: ["", "AVIF", "JPG"],
        rows: [
          ["File size", "Very small", "Small"],
          ["Transparency", "Yes", "No"],
          ["Opens in old apps and forms", "Often not", "Yes"],
          ["Best for", "Websites", "Sharing, uploads, printing"],
        ],
      },
    },
    {
      heading: "AVIF to JPG or AVIF to PNG?",
      paragraphs: [
        "JPG for photos you'll share, upload or print. [AVIF to PNG](/convert/avif-to-png) if the image has a transparent background or you'll edit it further, since PNG is lossless and keeps transparency.",
      ],
    },
    {
      heading: "Who converts AVIF to JPG?",
      items: [
        { t: "Anyone saving images from websites", d: "Some sites serve AVIF; the saved file may not open in your usual app. Convert it, and only reuse images you're allowed to." },
        { t: "People sending photos to others", d: "A JPG opens on any phone or computer; an AVIF may not." },
        { t: "Office and document work", d: "Insert images into documents and slides in a format every version accepts." },
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. The AVIF is converted locally in your browser, with no upload, no fee and no watermark. As a guest you can convert two images, and a free account makes it unlimited. If your browser can't open AVIF at all, update it; all current major browsers support it.",
      ],
    },
    {
      heading: "Why did a photo download as AVIF?",
      paragraphs: [
        "Many websites use image services that send each browser the smallest format it can display. A browser that supports AVIF gets an AVIF; an older one gets WebP or JPG. So the same photo can download as AVIF on your laptop and as JPG on another device, even from the same link. Some phones can also save their own photos in AVIF or other modern formats, depending on the camera settings.",
        "File extensions can also be misleading: a file named .jpg can contain AVIF data if it was renamed. If an app says a \"JPG\" is damaged or unsupported, it may really be AVIF or WebP inside. Converting it here produces a genuine JPG that every app accepts.",
      ],
    },
    {
      heading: "Tips for converting AVIF photos",
      list: [
        "**Convert once and keep the AVIF.** It's the smaller, higher-quality original; the JPG is your shareable copy.",
        "**Check skies and shadows** after converting. If you see faint banding, the original may have been HDR; a PNG copy keeps more of the gradient.",
        "**Rename files clearly** (\"beach-sunset.jpg\") before sending, so people know what they're opening.",
        "**For a form with a size limit**, convert first, then use the compressor's Target size.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert AVIF to JPG?", a: "Drop the AVIF in the upload box on this page; it opens the converter with JPG selected. Press Convert and download." },
    { q: "Why can't I open AVIF files?", a: "Many apps and older devices don't support AVIF yet. Browsers do, which is why this converter can read it." },
    { q: "Does converting AVIF to JPG lose quality?", a: "Slightly, but it's saved at high quality, so photos look the same." },
    { q: "What happens to transparency?", a: "It becomes white in a JPG. Convert AVIF to PNG to keep it." },
    { q: "Why does the editor's own upload button reject AVIF?", a: "It takes JPG, PNG and WebP. The upload box on this page passes AVIF straight to the converter." },
    { q: "Is AVIF better than WebP?", a: "It's often smaller at the same quality, but less widely supported outside browsers." },
    { q: "Is it free?", a: "Yes. Converting AVIF photos to JPG is free and watermark-free; two files without an account, the rest with a free one." },
    { q: "Is my file uploaded?", a: "No. Your browser decodes the AVIF and saves the JPG on your device." },
    { q: "Can Photoshop or Windows Photos open AVIF?", a: "Support varies by version and installed extensions. If an app on your computer can't open an AVIF, convert it here and open the JPG instead; nothing needs installing." },
    { q: "Will the converted JPG be the same size in pixels?", a: "Yes. The width and height stay exactly the same; only the format and the file size change." },
  ],
};

export default page;
