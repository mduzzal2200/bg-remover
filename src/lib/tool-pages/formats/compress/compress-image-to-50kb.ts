import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Compress Image to 50KB — Reduce Photo Size Under 50 KB",
  h1: "Compress Image to 50KB",
  metaDescription: "Shrink a photo to 50 KB or less for application forms, ID uploads and profile photos while keeping the face clear. Free, in your browser.",
  subtitle: "50 KB is the photo limit on a lot of application forms, ID uploads and older websites. Drop your picture here and get a clear JPG that fits under 50 KB on the first try.",
  keywords: "compress image to 50kb, reduce image size to 50kb, photo under 50kb, compress jpeg to 50kb, 50kb photo for form, resize image to 50kb",
  sections: [
    {
      heading: "How do you compress a photo to 50 KB?",
      items: [
        { t: "1. Start with a cropped photo", d: "Head and shoulders for an ID or application photo, the product for a listing. Smaller area, better quality at 50 KB." },
        { t: "2. Drop it here", d: "The compressor opens with the target set to 50 KB." },
        { t: "3. Compress, check and download", d: "The size is shown before you download. Most portraits fit at good quality; very large photos are also reduced a little in pixels." },
      ],
    },
    {
      heading: "What does 50 KB buy you?",
      paragraphs: [
        "Enough for a face to look sharp on screen. A 50 KB JPG is typically a portrait around 400 to 600 pixels wide at decent quality, which is bigger than almost any form or profile actually displays. It's tight for a whole landscape or a group photo, where there's more detail competing for the same space.",
      ],
      table: {
        head: ["Photo type", "How it fares at 50 KB"],
        rows: [
          ["Single face, plain background", "Looks good; often stays fairly large"],
          ["Face with a busy background", "Fine, but made smaller; a plain wall helps"],
          ["Product on white", "Very good; white compresses well"],
          ["Group photo or landscape", "Recognisable but soft; try [100 KB](/compress/compress-image-to-100kb) if allowed"],
        ],
      },
    },
    {
      heading: "Where is 50 KB asked for?",
      items: [
        { t: "Job, exam and admission applications", d: "Photo limits of 20–50 KB or up to 50 KB are common on recruitment and university portals. Read the notice for the minimum too: some reject files that are too small." },
        { t: "ID cards and membership systems", d: "Gyms, libraries, clubs and employee systems often store small photos to keep their databases light." },
        { t: "Profile pictures on older sites", d: "Forums, intranets and alumni portals sometimes cap avatar uploads at 50 KB." },
        { t: "Email signatures", d: "A logo or headshot in an email signature should be small so emails stay light; 50 KB is generous." },
      ],
    },
    {
      heading: "How do you get the best quality at 50 KB?",
      list: [
        "**A plain background matters most.** Walls compress to almost nothing; patterns and leaves eat up the budget.",
        "**Crop before compressing.** A tightly framed face keeps more detail than the same face in a wide shot.",
        "**Good light, sharp focus.** Noise from a dark room is detail the compressor has to keep.",
        "**Resize to the form's pixel size first**, if it gives one, with [resize image](/resize-image).",
        "**Aim a fraction under**: 48 KB rather than exactly 50 gives a little margin for forms that count differently.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes, and there's nothing stamped on your photo. Compression runs in your browser rather than on a server; two tries work without an account and a free account removes the limit. The result is a JPG, so any transparent area becomes white. If you're signed in, a copy goes to My Creations for later.",
        "Need smaller for a signature? See [compress to 20 KB](/compress/compress-image-to-20kb). Have more room? [200 KB](/compress/compress-image-to-200kb) keeps nearly full quality.",
      ],
    },
    {
      heading: "How do you check a file's size before uploading?",
      items: [
        { t: "On Windows", d: "Right-click the file and choose Properties; Size shows the exact number of bytes. 50 KB is 51,200 bytes by the usual measure." },
        { t: "On a Mac", d: "Select the file and press Command-I, or look at the Size column in Finder's list view." },
        { t: "On a phone", d: "In the Files app (iPhone) or Files by Google and similar apps (Android), the details view shows the size. The compressor also shows the size before you download." },
      ],
    },
  ],
  faq: [
    { q: "How do I reduce a photo to 50 KB?", a: "Drop the photo here; the compressor opens with the target at 50 KB. Press Compress and download the JPG once the size shows 50 KB or less." },
    { q: "Will my photo look blurry at 50 KB?", a: "A single face on a plain background looks sharp at 50 KB. Busy backgrounds and group photos lose more, so crop tight if you can." },
    { q: "What pixel size is a 50 KB photo?", a: "Typically a portrait around 400 to 600 pixels wide, depending on how much detail is in it." },
    { q: "Can I compress a PNG to 50 KB?", a: "Yes. It's saved as a JPG, so transparent areas become white, which suits forms." },
    { q: "My form needs between 20 and 50 KB. What should I target?", a: "Target around 45 KB. You stay under the maximum and well above the minimum." },
    { q: "Does it work on my phone?", a: "Yes, in Safari, Chrome or any modern mobile browser." },
    { q: "Is it free?", a: "Yes. Two compressions as a guest, unlimited with a free account, and no watermark." },
    { q: "Can I compress several photos to 50 KB?", a: "One at a time here. The batch editor can compress up to 100 images with one quality setting." },
  ],
};

export default page;
