import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Instagram Story Size — Crop Photos to 9:16 (1080×1920)",
  h1: "Crop Image to Instagram Story Size (9:16)",
  metaDescription: "Crop any photo to the 9:16 shape of Instagram Stories, Reels covers, TikTok and phone wallpapers. Fill the whole screen with no zooming. Free.",
  subtitle: "Stories, Reels, TikTok and phone wallpapers are all 9:16, the full height of a phone screen. Crop your photo to that shape so it fills the screen exactly, without Instagram zooming in on its own.",
  keywords: "instagram story size, 9:16 crop, crop image to 9:16, instagram story dimensions, 1080x1920, reels cover size, tiktok image size, phone wallpaper size",
  sections: [
    {
      heading: "How do you crop a photo to Instagram Story size?",
      items: [
        { t: "1. Pick a tall photo if you can", d: "An upright phone photo is already close to 9:16 and loses very little. A landscape photo keeps only a narrow slice." },
        { t: "2. Drop it here and crop", d: "Story (9:16) is preselected. The tallest 9:16 area is cut from the centre." },
        { t: "3. Resize to 1080 × 1920 if you like", d: "Use [resize](/resize-image) for the exact size, then download and post it to your Story." },
      ],
    },
    {
      heading: "What size is an Instagram Story?",
      paragraphs: [
        "Stories are **1080 × 1920 pixels**, a 9:16 rectangle that fills an ordinary phone screen. Reels and TikTok videos use the same shape, and so do Facebook Stories, YouTube Shorts and WhatsApp Status, so one crop works across all of them.",
      ],
      table: {
        head: ["Where", "Shape", "Size"],
        rows: [
          ["Instagram and Facebook Stories", "9:16", "1080 × 1920"],
          ["Reels cover image", "9:16 (shown cropped to 4:5 in the grid)", "1080 × 1920"],
          ["TikTok, YouTube Shorts, WhatsApp Status", "9:16", "1080 × 1920"],
          ["Phone wallpaper", "about 9:16 to 9:19.5", "Your screen's size"],
        ],
      },
    },
    {
      heading: "What are Story safe zones?",
      paragraphs: [
        "The top and bottom of a Story are covered by your profile picture, name, the progress bars and the reply box. Keep faces, text and stickers away from roughly the top and bottom 250 pixels (about 14% of the height) so nothing important is hidden. When you crop, check the middle of the photo holds the subject.",
        "Reels covers have another twist: the full 9:16 cover shows in the Reels tab, but your profile grid shows a 4:5 crop from its middle. Keep the main subject central so both look right; see [4:5 Instagram post size](/crop/instagram-post-size).",
      ],
    },
    {
      heading: "Who crops to 9:16?",
      items: [
        { t: "Instagram and TikTok creators", d: "Post photos as Stories or slideshow TikToks without the app zooming in unpredictably. Crop first, then add text in the app." },
        { t: "Brands and small businesses", d: "Turn product and event photos into full-screen Story posts. Add a link sticker in the safe middle area." },
        { t: "Anyone making a phone wallpaper", d: "A 9:16 crop of a favourite photo fills your lock screen. Upscale it first with the [4K upscaler](/upscale/4k) if it's small." },
      ],
    },
    {
      heading: "Tips for full-screen Stories",
      list: [
        "**Shoot vertically** when you know it's for Stories; you keep the whole picture.",
        "**Keep the subject central.** The crop is centred, and so are the safe zones.",
        "**Use high-resolution photos**; Stories fill the screen, so softness shows.",
        "**Add text in the middle third**, never at the very top or bottom.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. Your browser makes the 9:16 crop, without a fee or a watermark; guests get two crops and a free account makes it unlimited. The result is a lossless PNG. For a square post instead, see [crop to square](/crop/crop-image-to-square).",
      ],
    },
    {
      heading: "What if you don't want to crop the photo at all?",
      paragraphs: [
        "If a landscape photo would lose too much as a 9:16 crop, post it inside the Story instead. Instagram lets you add a photo to a Story and pinch it smaller, with a colour background filling the rest of the screen; it picks a colour from the photo, and you can change it with the colour tool. That keeps the whole picture visible, at the cost of not filling the screen.",
        "For a polished look, make a 9:16 background in the AI image generator or pick a solid colour, and place the full photo on it in a design app. Either way, keep the important parts away from the top and bottom safe zones.",
      ],
    },
  ],
  faq: [
    { q: "What size is an Instagram Story?", a: "1080 × 1920 pixels, in a 9:16 shape. Reels, TikTok and YouTube Shorts use the same shape." },
    { q: "How do I crop a photo to 9:16?", a: "Drop it on this page; Story (9:16) is preselected. Press Crop and download." },
    { q: "Why does Instagram zoom into my Story photo?", a: "Because the photo isn't 9:16, so Instagram fills the screen by zooming. Crop it to 9:16 first and it fits exactly." },
    { q: "Where should I put text on a Story?", a: "In the middle. Keep about the top and bottom 250 pixels clear of text and faces, since buttons cover those areas." },
    { q: "Can I use a landscape photo?", a: "Yes, but a 9:16 crop from a wide photo keeps only a narrow slice of the middle. A tall photo works better." },
    { q: "What size is a Reels cover?", a: "1080 × 1920 (9:16). Your profile grid shows a 4:5 crop from its middle, so keep the subject central." },
    { q: "Is it free?", a: "Yes. The 9:16 crop is free and clean; after two crops as a guest, a free account keeps it unlimited." },
    { q: "Does it reduce quality?", a: "No. Cropping only removes edges, and the result is a lossless PNG." },
  ],
};

export default page;
