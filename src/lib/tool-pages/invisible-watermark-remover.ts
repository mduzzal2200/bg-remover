import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Remove Metadata From Photos — EXIF, GPS and C2PA Remover",
  h1: "Invisible Watermark & Metadata Remover",
  metaDescription: "See and strip hidden data from photos, PDFs and Office files: GPS location, camera details, C2PA, AI prompts, authors. Free, in your browser.",
  subtitle: "See what your files carry behind the scenes (GPS location, camera details, AI prompts, Content Credentials, author names) and download a clean copy. Plus hidden characters in text. Nothing is uploaded.",
  keywords: "remove metadata from photo, exif remover, remove gps from photo, metadata remover, c2pa remover, remove exif data, invisible watermark remover, zero width character remover, remove metadata from pdf",
  sections: [
    {
      heading: "How do you remove metadata from a photo?",
      items: [
        { t: "1. Drop in your files or paste text", d: "Photos (JPG, PNG, WebP, GIF, SVG), PDFs, Word, Excel and PowerPoint files, and MP3, WAV and FLAC audio. Several at once is fine. For text, switch to the Text tab and paste it." },
        { t: "2. Read the report", d: "Each file shows what was found inside it: GPS coordinates, the camera and its serial number, dates, editing software, AI prompts, Content Credentials, author and company names." },
        { t: "3. Download the clean copies", d: "Each cleaned file is checked again automatically to confirm the data is gone. Download them one at a time, or all together as a ZIP." },
      ],
    },
    {
      heading: "What hidden information is in your photos?",
      paragraphs: [
        "Every photo from a phone or camera carries a block of data you can't see: **EXIF**. It usually includes the date and time to the second, the phone or camera model, sometimes its serial number, the lens and settings, and very often the **GPS location** where it was taken, accurate enough to identify a house.",
        "Edited and AI-made images can carry more: **XMP** and **IPTC** records with names and copyright notes, **C2PA Content Credentials** that record which app or AI made or edited the image, and in PNGs from some AI tools, the full **prompt** that generated it. Documents carry the author's name, the company, and the software and dates of every save.",
      ],
      table: {
        head: ["Hidden data", "Where it hides", "Why you might remove it"],
        rows: [
          ["GPS location", "Photos from phones", "It can reveal where you live, work or your children's school"],
          ["Camera model and serial number", "Photos", "Links photos back to one device"],
          ["Dates and times", "Photos, documents", "Shows exactly when something was made or edited"],
          ["C2PA Content Credentials", "Images edited or made by some apps and AI tools", "Records the tools and edits used on the image"],
          ["AI prompts", "PNGs from some image generators", "Shares your prompt with anyone who downloads the image"],
          ["Author and company", "PDF, Word, Excel, PowerPoint", "Shows who wrote it and where they work"],
          ["Zero-width characters", "Copied text", "Can fingerprint text or hide a message inside it"],
        ],
      },
    },
    {
      heading: "Who needs to remove metadata?",
      items: [
        { t: "Anyone selling or posting photos online", d: "A photo of something you're selling, taken at home, can carry your home's location. Most big social networks strip GPS when you post, but marketplaces, forums, email and file-sharing often pass the original file on untouched." },
        { t: "Journalists, activists and sources", d: "Before sharing a document or photo, remove the author names, device details and locations that could identify where it came from." },
        { t: "Freelancers and businesses", d: "Send clients a PDF or a report without your internal file names, editing history or a colleague's name in the author field." },
        { t: "People who use AI image tools", d: "Strip the prompt and generator details from an image before you share it, when you'd rather keep your prompt to yourself." },
        { t: "Anyone checking copied text", d: "Paste text into the Text tab to see zero-width spaces, direction controls and hidden Unicode tags highlighted, then copy a clean version." },
      ],
    },
    {
      heading: "Does removing metadata change the picture?",
      paragraphs: [
        "No. The tool never decodes or re-compresses the image. It copies the image data byte for byte and leaves out only the metadata blocks, so the pixels are identical to the original and the quality is exactly the same.",
        "One small piece is kept on purpose: the **orientation flag** that tells apps which way up a phone photo should be shown. Remove it and photos can appear sideways, so it stays and everything else goes.",
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "It's free, with no sign-up and no limit. And it's private by design: all the reading and cleaning happens in your browser. Your files never leave your device, which is the whole point when you're removing your location.",
      ],
    },
    {
      heading: "What can't it remove?",
      list: [
        "**Visible watermarks**, logos or text on a photo. Those are part of the picture; the [watermark remover](/watermark-remover) handles them for photos you own.",
        "**Pixel-level AI watermarks** such as Google's SynthID. They're woven into the image itself (or into the word choices of AI text), not stored as metadata. No tool can reliably remove them without changing the content, and this one doesn't try.",
        "**What the picture shows.** A street sign or a house number in the photo still gives away the location. [Blur them](/blur-image) as well.",
        "**Copies already shared.** It cleans the file you give it; files you sent before still carry their data.",
      ],
    },
    {
      heading: "Is it legal to remove metadata?",
      paragraphs: [
        "Removing metadata from your own files for privacy before you share them is normal and widely done. Don't use it to strip credit or copyright information from other people's work, or to misrepresent where a piece of content came from or whether it was made with AI. Platform rules and copyright law may apply.",
      ],
    },
  ],
  faq: [
    { q: "What does this tool remove?", a: "From files: EXIF (camera, serial number, dates), GPS location, XMP and IPTC records, C2PA Content Credentials, AI generation prompts saved in PNGs, comments, thumbnails, document author and company names, and audio tags. From text: zero-width characters, direction controls and hidden Unicode tags." },
    { q: "How do I remove the location from a photo?", a: "Drop the photo into the tool. The report shows the GPS coordinates it found; download the cleaned copy and the location is gone." },
    { q: "Are my files uploaded anywhere?", a: "No. Cleaning happens entirely in your browser, and your files never leave your device." },
    { q: "Does it reduce image quality?", a: "No. The image data is copied byte for byte without re-compressing; only the metadata is left out, so the pixels are identical." },
    { q: "Will my photo still be the right way up?", a: "Yes. The tool keeps the one orientation flag phone photos rely on and removes everything else." },
    { q: "Does it remove visible watermarks?", a: "No, it's for hidden data. To remove a visible watermark or logo from a photo you own, use the Watermark Remover." },
    { q: "Can it remove SynthID or other AI watermarks in the pixels?", a: "No. Those are part of the image or text itself, not metadata, and can't be reliably removed without changing the content." },
    { q: "Which files does it support?", a: "JPG, PNG, WebP, GIF and SVG images; PDF; Word, Excel and PowerPoint files; MP3, WAV and FLAC audio; and text files, or pasted text." },
    { q: "Is it free?", a: "Yes, with no sign-up, no limit and no watermark." },
  ],
};

export default page;
