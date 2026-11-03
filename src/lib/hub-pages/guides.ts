import type { HubPage } from "./types";

/** The guide under the topic cards on /guides. */
const page: HubPage = {
  sections: [
    {
      heading: "Where should you start?",
      paragraphs: ["If you came with a specific job, these guides answer the most common ones directly:"],
      items: [
        { t: "\"My photo is too big to upload\"", d: "Read [how to reduce image size in KB](/blog/how-to-reduce-image-size-in-kb) or, for a specific limit, [compress an image to 100 KB](/blog/how-to-compress-an-image-to-100kb)." },
        { t: "\"I need a profile picture or headshot\"", d: "Start with [how to make a profile picture](/blog/how-to-make-a-profile-picture), then the [headshots and portraits](/guides/headshots-portraits) topic." },
        { t: "\"My photo is small or blurry\"", d: "See [how to enlarge a photo without losing quality](/blog/how-to-enlarge-a-photo-without-losing-quality) and the [upscale and enhance](/guides/upscale-enhance) topic." },
        { t: "\"I can't open this file\"", d: "[Image file formats explained](/blog/image-file-formats-explained) covers JPG, PNG, WebP, HEIC and more, with how to convert each." },
        { t: "\"I need a clean background\"", d: "The [background removal](/guides/background-removal) topic covers transparent PNGs, white backgrounds and new scenes." },
        { t: "\"I want to fix an old family photo\"", d: "The [restore old photos](/guides/restore-old-photos) topic explains scanning, repairing and enlarging prints." },
      ],
    },
    {
      heading: "How these guides are written",
      paragraphs: [
        "Each guide answers one real question in plain English, starting with the answer and then the detail. We explain the why as well as the how, for example why photos turn up sideways online or why a PNG is ten times bigger than a JPG, because understanding the reason makes the fix stick.",
        "We're also honest about limits. If a free tool can't do something, the guide says so and points to what can, including built-in features on your phone or computer and other companies' tools. Where an AI tool costs credits, the guide says how much, and where rules matter, such as passport photo requirements or copyright, we point you to the official source.",
      ],
    },
    {
      heading: "Free tools that go with the guides",
      paragraphs: [
        "Most guides use free tools that run in your browser, so you can follow along without installing anything or uploading your photos: [compress](/compress-image), [resize](/resize-image), [crop](/crop-image), [convert](/convert-image), [rotate](/rotate-image), [blur](/blur-image), [add a watermark](/watermark-image) and [remove a watermark](/watermark-remover). Guides about AI effects, background removal and Pro upscaling use the AI tools, which cost credits per result. The full list is on the [tools page](/tools).",
      ],
    },
    {
      heading: "What each topic covers",
      list: [
        "**Upscale and enhance:** making small or soft photos bigger and sharper, from thumbnails to prints.",
        "**Background removal:** transparent cut-outs, white backgrounds for shops, and new scenes behind people.",
        "**Headshots and portraits:** LinkedIn photos, profile pictures and ID-style portraits.",
        "**Restore old photos:** scanning prints, repairing damage and enlarging them to frame.",
        "**Resize and compress:** exact pixel sizes and getting under KB limits for forms and email.",
        "**TikTok and social:** downloading your videos cleanly, memes and the right shapes for every feed.",
        "**Convert and PDF:** JPG, PNG, WebP and HEIC explained, and turning photos into documents.",
        "**Editing basics:** rotating, blurring private details, watermarks and QR codes.",
        "**AI photo effects:** choosing a style and the photo that suits it.",
      ],
    },
    {
      heading: "Guides for creators, sellers and job seekers",
      items: [
        { t: "Creators", d: "Thumbnail and banner sizes, social image sizes, memes, AI photo styles and making old footage stills look sharp." },
        { t: "Online sellers", d: "Product photo backgrounds, compressing catalogues, image formats for faster shops and watermarking your photos." },
        { t: "Job seekers and students", d: "Profile pictures, headshots, passport and ID photo sizes, and getting documents and photos under form limits." },
        { t: "Families", d: "Restoring and enlarging old photos, converting iPhone pictures, and making festive and holiday portraits." },
      ],
    },
  ],
  faq: [
    { q: "Are the guides free to read?", a: "Yes. Every guide is free, and most use free tools you can try in your browser straight away." },
    { q: "Do I need an account to follow a guide?", a: "Not for the free tools' first two edits. AI tools need a free account and credits." },
    { q: "How are the guides organised?", a: "By what you're trying to do: upscaling, backgrounds, headshots, restoring, resizing and compressing, social media, converting and PDFs, editing basics and AI effects." },
    { q: "How often are guides updated?", a: "Whenever a tool or a platform rule changes, for example a new image size on a social network." },
  ],
};

export default page;
