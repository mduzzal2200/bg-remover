import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "BMP to JPG Converter — Shrink Huge BMP Files to JPG",
  h1: "Convert BMP to JPG",
  metaDescription: "Convert old, oversized BMP images to JPG, usually a tiny fraction of the size, so you can email, upload and share them. Free, in your browser.",
  subtitle: "BMP files from old scanners, Paint and older software are enormous because they aren't compressed at all. Convert them to JPG and they shrink to a small fraction of the size, ready to email or upload.",
  keywords: "bmp to jpg, convert bmp to jpg, bmp to jpeg, bmp to jpg converter, bitmap to jpg, reduce bmp size",
  sections: [
    {
      heading: "How do you convert BMP to JPG?",
      items: [
        { t: "1. Drop the BMP on this page", d: "Use the upload box above; it opens the converter with JPG selected." },
        { t: "2. Convert", d: "The image is saved as a high-quality JPG." },
        { t: "3. Download the much smaller file", d: "A 10 MB BMP often becomes a few hundred KB." },
      ],
    },
    {
      heading: "Why are BMP files so big?",
      paragraphs: [
        "BMP (bitmap) stores every pixel as raw colour values with no compression. A 3,000 × 2,000 image is 6 million pixels × 3 bytes = about 18 MB, whatever is in the picture. JPG compresses the same image by recognising patterns your eye won't miss, typically making it 20 to 50 times smaller. That's why BMPs from old scanners, Windows Paint and some industrial or medical software are so awkward to email.",
      ],
      table: {
        head: ["Image (3,000 × 2,000)", "Approximate size"],
        rows: [
          ["BMP", "About 18 MB"],
          ["PNG", "Several MB (lossless)"],
          ["JPG at high quality", "A few hundred KB to ~1.5 MB"],
        ],
      },
      after: ["Exact sizes depend on the content; busy photos compress less than plain diagrams."],
    },
    {
      heading: "BMP to JPG or BMP to PNG?",
      paragraphs: [
        "JPG is right for photos and scans of photos. For screenshots, diagrams, line drawings and anything with sharp text, PNG keeps edges perfectly crisp and still shrinks the file a lot compared with BMP. Use the [image converter](/convert-image) and choose PNG for those.",
      ],
    },
    {
      heading: "Who still has BMP files?",
      items: [
        { t: "People digging through old archives", d: "Scans and drawings saved by older Windows software, ready to be shared or put into a family album." },
        { t: "Office workers", d: "Some scanners, label printers and specialist programs still export BMP by default." },
        { t: "Students and teachers", d: "Old coursework and diagrams that need to go into documents or online submissions." },
      ],
    },
    {
      heading: "Is it free and private?",
      paragraphs: [
        "Yes. The BMP is opened and converted by your browser, never uploaded, with no fee or watermark. Two conversions as a guest, unlimited with a free account. Then [compress](/compress-image) if a form needs it even smaller.",
      ],
    },
    {
      heading: "How do you stop getting BMP files in the first place?",
      paragraphs: [
        "Most of the time BMPs come from a default setting nobody changed. In scanner software, look in the save or output settings for the file type and switch it to JPEG for photos or PDF for documents. In Windows Fax and Scan, the file type is chosen in the scan dialog. If you save from Paint, choose JPEG or PNG in Save as type instead of the default.",
        "Specialist programs (label printers, older lab and medical equipment, CAD viewers) sometimes only export BMP. In that case, convert as a last step before sharing: the BMP stays as an untouched master, and the JPG is the copy you email or upload.",
      ],
    },
    {
      heading: "Will a BMP photo look different as a JPG?",
      paragraphs: [
        "Photos and scanned pictures will look the same at normal viewing size; the JPG is saved at high quality. Diagrams, screenshots and drawings with large flat areas and sharp lines are where JPG can show faint fuzz next to edges, because JPG is designed for photographs. For those, choose PNG in the converter: still a fraction of the BMP's size, with edges kept perfectly.",
      ],
    },
  ],
  faq: [
    { q: "How do I convert BMP to JPG?", a: "Drop the BMP in the upload box on this page; it opens the converter with JPG selected. Press Convert and download." },
    { q: "How much smaller will the JPG be?", a: "Usually dramatically smaller, often 20 to 50 times, depending on the image." },
    { q: "Does converting BMP to JPG lose quality?", a: "Slightly, but it's saved at high quality, so photos look the same. Use PNG for diagrams and text if you need perfect edges." },
    { q: "Why does the editor's own upload reject BMP?", a: "Its file picker takes JPG, PNG and WebP. The upload box on this page passes BMP straight to the converter." },
    { q: "What is a BMP file?", a: "An uncompressed bitmap image format from older Windows software and scanners. It's widely readable but very large." },
    { q: "Can I convert BMP to PNG instead?", a: "Yes, with the image converter: choose PNG as the output." },
    { q: "Is it free?", a: "Yes. Shrinking a BMP to JPG costs nothing and leaves no mark; after two files, sign up free to keep converting." },
    { q: "Is my file uploaded?", a: "No. Even large BMPs are opened and converted locally, without being sent anywhere." },
    { q: "Can I convert a BMP with transparency?", a: "BMP files rarely carry transparency. If yours does, converting to JPG fills it with white; choose PNG in the image converter to keep it." },
    { q: "Is BMP the same as a bitmap image?", a: "Yes. BMP is short for bitmap, the Windows image format that stores pixels without compression." },
  ],
};

export default page;
