import type { HubPage } from "./types";

/** The short guide on /blog, below the list of posts. */
const page: HubPage = {
  sections: [
    {
      heading: "What you'll find on the PixelShine blog",
      paragraphs: [
        "Practical, plain-English guides to everyday image jobs: making photos smaller for forms and email, getting the right size for every social platform, converting between JPG, PNG, WebP and HEIC, removing and changing backgrounds, upscaling small or old photos, and getting the most from AI photo styles. Each guide starts with the answer, explains why, and shows the steps with free tools wherever possible.",
        "If you'd rather browse by subject, the [guides by topic](/guides) page groups every post into upscaling, backgrounds, headshots, restoring, resizing and compressing, social media, converting, editing basics and AI effects.",
      ],
    },
    {
      heading: "Most useful guides to start with",
      items: [
        { t: "Image formats", d: "[Image file formats explained](/blog/image-file-formats-explained) and [PNG vs JPG](/blog/png-vs-jpg-which-to-use) clear up the most common confusion." },
        { t: "Upload limits", d: "[How to reduce image size in KB](/blog/how-to-reduce-image-size-in-kb) covers every form limit from 20 KB to 5 MB." },
        { t: "Social sizes", d: "[Social media image sizes](/blog/best-image-sizes-for-social-media) lists posts, stories, covers and profile pictures for every platform." },
        { t: "Sharper photos", d: "[How to enlarge a photo without losing quality](/blog/how-to-enlarge-a-photo-without-losing-quality) explains AI upscaling and print sizes." },
        { t: "Watermarks", d: "[How to remove a watermark from a photo](/blog/how-to-remove-a-watermark-from-a-photo) and [is it legal?](/blog/is-it-legal-to-remove-a-watermark) cover the how and the rules." },
      ],
    },
    {
      heading: "Find a guide by the job in front of you",
      table: {
        head: ["If you need to…", "Read"],
        rows: [
          ["Send a photo that a form keeps rejecting", "[Compress an image to 100 KB](/blog/how-to-compress-an-image-to-100kb)"],
          ["Shrink a photo before attaching it to an email", "[Compress an image for email](/blog/how-to-compress-image-for-email)"],
          ["Open an iPhone photo on a Windows PC", "[Convert HEIC to JPG](/blog/how-to-convert-heic-to-jpg)"],
          ["Turn a scanned page into a document", "[Convert an image to PDF](/blog/how-to-convert-image-to-pdf)"],
          ["Make a round profile photo", "[Crop a photo into a circle](/blog/how-to-crop-a-photo-into-a-circle)"],
          ["Get passport photo dimensions right", "[Passport photo size guide](/blog/passport-photo-size-guide)"],
          ["Protect photos you post online", "[Add a watermark to photos](/blog/how-to-add-watermark-to-photos)"],
          ["Caption a picture for a group chat", "[Make a meme](/blog/how-to-make-a-meme)"],
        ],
      },
    },
    {
      heading: "How to get the most from a guide",
      list: [
        "**Read the first paragraph first.** Every guide puts the short answer at the top, so you can often stop there.",
        "**Use the headings.** Each guide opens with a list of its sections; jump straight to the one that matches your device or situation.",
        "**Try it as you read.** Most guides link to a free tool that opens in the same browser tab, with the right settings explained in the steps.",
        "**Check the FAQ.** The questions at the end come from what people actually ask, such as whether a method works on Android or what to do when an upload still fails.",
        "**Keep your original.** Whatever the guide, work on a copy, so you can start again if a setting isn't right.",
      ],
    },
    {
      heading: "Who writes these guides?",
      paragraphs: [
        "The guides are written by the team that builds PixelShine's tools, so the steps match how the tools actually behave. Where another product does a job better or for free, such as background removal built into your phone, we say so. Where rules come from elsewhere, such as passport photo sizes or copyright law, we summarise them and point you to the official source, because those rules change and differ by country.",
      ],
    },
  ],
  faq: [
    { q: "Are the tools in the guides free?", a: "The browser tools are free with no watermark. AI tools such as background removal and Pro upscaling cost credits per result." },
    { q: "Can I suggest a guide?", a: "Yes. Email support@sjpt.io with the question you'd like answered." },
    { q: "Do guides work for phones too?", a: "Yes. Most guides include phone steps, and every tool works in a phone browser." },
  ],
};

export default page;
