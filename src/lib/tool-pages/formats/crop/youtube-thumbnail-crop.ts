import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "YouTube Thumbnail Crop — Crop Images to 16:9 (1280×720)",
  h1: "Crop Image for a YouTube Thumbnail (16:9)",
  metaDescription: "Crop any photo to the 16:9 shape YouTube thumbnails use, then size it to 1280×720 under 2 MB. No black bars, no stretching. Free.",
  subtitle: "YouTube thumbnails are 16:9. Crop your photo to that exact shape so it fills the frame with no black bars or stretching, then size it to 1280 × 720 for upload.",
  keywords: "youtube thumbnail crop, crop image to 16:9, youtube thumbnail size, 1280x720 crop, crop photo for youtube, 16:9 image crop, thumbnail maker",
  sections: [
    {
      heading: "How do you crop a photo for a YouTube thumbnail?",
      items: [
        { t: "1. Drop your photo here", d: "A frame from your video, a photo of you, or a product shot. The crop tool opens with Wide (16:9) selected." },
        { t: "2. Crop to 16:9", d: "The widest 16:9 area is cut from the centre. From a phone photo taken upright, that's a horizontal strip through the middle, so choose a landscape photo when you can." },
        { t: "3. Resize to 1280 × 720", d: "Open [resize](/resize-image), type 1280 width (the height follows), and download. Then add your title text in your favourite design app." },
      ],
    },
    {
      heading: "What are YouTube's thumbnail requirements?",
      table: {
        head: ["Requirement", "Value"],
        rows: [
          ["Resolution", "1280 × 720 pixels (16:9)"],
          ["Minimum width", "640 pixels"],
          ["File size", "Under 2 MB"],
          ["Formats", "JPG, PNG or GIF (still)"],
        ],
      },
      after: [
        "These come from YouTube's own help pages; check them occasionally, as they can change. If your file is over 2 MB, [compress it](/compress/compress-image-to-1mb) without changing the size.",
      ],
    },
    {
      heading: "Who crops images to 16:9?",
      items: [
        { t: "YouTubers", d: "A custom thumbnail made from a sharp photo gets more clicks than a random frame from the video. Crop it to 16:9 so YouTube doesn't letterbox it." },
        { t: "Podcasters and streamers", d: "Episode art for video platforms, stream \"starting soon\" screens and replay thumbnails all use 16:9." },
        { t: "Presenters", d: "Slides are 16:9 too. A photo cropped to Wide fills a slide edge to edge." },
        { t: "Website owners", d: "Blog headers and link previews are often close to 16:9, so a cropped image looks right when shared." },
      ],
    },
    {
      heading: "What makes a thumbnail that gets clicks?",
      list: [
        "**A face with a clear expression**, large in the frame. Faces are what people notice first in a grid.",
        "**One idea, three or four words of text**, big enough to read on a phone.",
        "**High contrast**: bright subject, simpler background. The [background remover](/remove-bg) helps you put yourself on a bold colour.",
        "**Leave the bottom-right corner clear**, because YouTube shows the video length there.",
        "**Make it sharp.** Video frames are often soft; run them through the [image upscaler](/upscale) first.",
      ],
    },
    {
      heading: "Why not just stretch the image to 16:9?",
      paragraphs: [
        "Stretching changes the shape of everything in it: faces get wider, circles become ovals, and viewers notice instantly. Cropping keeps proportions true by removing part of the picture instead. If cropping would cut off something important, use the [AI photo editor](/ai-editor) with the 16:9 size and ask it to extend the background, which adds believable scenery at the sides.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. The 16:9 crop and the resize are done in your browser at no cost, with nothing added to the image. As a guest you get two edits; signing up for free removes the limit. The crop is saved as a lossless PNG.",
      ],
    },
    {
      heading: "A quick checklist before you upload a thumbnail",
      list: [
        "**16:9 and 1280 × 720**, under 2 MB.",
        "**Readable on a phone**: shrink it to the size of your thumb and check the text still reads.",
        "**One clear subject**, with a face if the video features a person.",
        "**Nothing important in the bottom-right corner**, where the duration sits.",
        "**Matches the video.** A thumbnail that promises something the video doesn't deliver hurts watch time.",
      ],
    },
    {
      heading: "Thumbnails for Shorts",
      paragraphs: [
        "Shorts are vertical (9:16), and the thumbnail is usually picked from a frame of the video. For a vertical cover image elsewhere, use the [9:16 Story crop](/crop/instagram-story-size) instead of 16:9.",
      ],
    },
  ],
  faq: [
    { q: "What size is a YouTube thumbnail?", a: "1280 × 720 pixels, in a 16:9 shape, under 2 MB, as JPG, PNG or GIF. The minimum width is 640 pixels." },
    { q: "How do I crop a photo to 16:9?", a: "Drop it on this page; Wide (16:9) is preselected. Press Crop and the centre 16:9 area is kept." },
    { q: "How do I make it exactly 1280 × 720?", a: "After cropping to 16:9, open the resize tool and type 1280 as the width. The height becomes 720." },
    { q: "Can I use a vertical phone photo?", a: "Yes, but a 16:9 crop from a tall photo keeps only a narrow strip. A landscape photo or a video frame works better." },
    { q: "My thumbnail is over 2 MB. What do I do?", a: "Compress it. The compressor can bring it under 1 MB without changing its size." },
    { q: "Does cropping reduce quality?", a: "No. Cropping only removes the edges; the rest keeps its full quality." },
    { q: "Can I add text here?", a: "This tool crops and resizes. Add the title in a design app, or use the meme generator for simple top and bottom text." },
    { q: "Is it free?", a: "Yes. Cropping and sizing thumbnails is free with no watermark; the first two edits need no account." },
  ],
};

export default page;
