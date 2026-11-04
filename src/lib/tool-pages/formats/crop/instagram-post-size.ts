import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Instagram Post Size — Crop Photos to 4:5 Portrait (1080×1350)",
  h1: "Crop Image to Instagram Post Size (4:5)",
  metaDescription: "Crop photos to Instagram's 4:5 portrait shape (1080×1350), the post size that takes up the most space in the feed. Free, no watermark.",
  subtitle: "4:5 portrait is the tallest shape Instagram allows in the feed, so your post takes up more of the screen than a square or a landscape photo. Crop to it in one tap.",
  keywords: "instagram post size, 4:5 crop, instagram portrait size, 1080x1350, crop image for instagram, instagram feed size, crop photo 4:5",
  sections: [
    {
      heading: "How do you crop a photo to Instagram's 4:5 size?",
      items: [
        { t: "1. Drop your photo here", d: "Portrait (4:5) is preselected." },
        { t: "2. Crop", d: "The largest 4:5 area is taken from the centre. Upright phone photos lose only a little from the top and bottom." },
        { t: "3. Resize to 1080 × 1350 and post", d: "Set 1080 width in [resize](/resize-image) for the exact size Instagram uses, then upload." },
      ],
    },
    {
      heading: "Which Instagram post size should you use?",
      table: {
        head: ["Shape", "Size", "In the feed"],
        rows: [
          ["Portrait 4:5", "1080 × 1350", "Tallest allowed: takes the most screen space"],
          ["Square 1:1", "1080 × 1080", "Classic look, matches the grid"],
          ["Landscape 1.91:1", "1080 × 566", "Smallest on screen; easy to scroll past"],
        ],
      },
      after: [
        "Because 4:5 fills more of a phone screen, it tends to hold attention longer as people scroll. It's the default choice for portraits, fashion, food and product posts. For a uniform grid, [square](/crop/crop-image-to-square) is still the safest.",
      ],
    },
    {
      heading: "Who should post in 4:5?",
      items: [
        { t: "Photographers and portrait creators", d: "People are taller than they are wide. 4:5 keeps more of the person and less empty sky or floor." },
        { t: "Fashion, beauty and fitness accounts", d: "Full outfits and before-and-afters fit naturally in a tall frame." },
        { t: "Food and product brands", d: "A tall frame lets a plate or a product fill the screen; pair it with a clean background for impact." },
        { t: "Carousel posts", d: "Every image in a carousel uses the first image's shape. Crop all of them to 4:5 so nothing gets cut unexpectedly." },
      ],
    },
    {
      heading: "How does the profile grid show 4:5 posts?",
      paragraphs: [
        "The profile grid shows tiles in its own shape, cropping the middle of each post, so the very top and bottom of a 4:5 photo may not appear there. Keep faces and key details in the centre of the frame. The full 4:5 image always shows when someone opens the post or sees it in the feed.",
      ],
    },
    {
      heading: "Tips for 4:5 posts",
      list: [
        "**Shoot upright** and leave a little space above heads.",
        "**Crop all carousel images the same way** before uploading.",
        "**Use sharp, well-lit photos**; Instagram compresses uploads, so start with good quality.",
        "**Mind text near the edges** if you add captions in the image; the grid may crop them.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. Cropping to 4:5 is done locally in your browser, free and with no watermark. After two crops as a guest, a free account keeps it unlimited. The download is a PNG at full quality. For Stories and Reels, use [9:16 Story size](/crop/instagram-story-size).",
      ],
    },
    {
      heading: "Why does my post look soft after uploading?",
      paragraphs: [
        "Instagram recompresses every upload. Photos that are much larger than 1080 pixels wide, or that are already heavily compressed, tend to come out softer. Cropping to 4:5 and resizing to exactly 1080 × 1350 before uploading gives Instagram less to change, which usually keeps your post crisper.",
        "Other things that help: upload over a good Wi-Fi connection (the app may lower quality on a weak connection), make sure the \"upload at highest quality\" option is on in Instagram's data settings if your app shows it, and start from the original photo rather than a screenshot.",
      ],
    },
    {
      heading: "Can you change a post's shape after publishing?",
      paragraphs: [
        "No. Instagram doesn't let you change a published post's crop. If a post went up as a square and you wanted 4:5, you'd need to delete and repost it, losing its likes and comments, so it's worth cropping before you publish.",
      ],
    },
  ],
  faq: [
    { q: "What size is an Instagram portrait post?", a: "1080 × 1350 pixels, a 4:5 shape. It's the tallest size Instagram allows in the feed." },
    { q: "How do I crop to 4:5?", a: "Drop the photo here; Portrait (4:5) is preselected. Press Crop, then resize to 1080 wide for the exact size." },
    { q: "Is 4:5 better than square?", a: "4:5 takes more space in the feed, which helps posts stand out. Square keeps a uniform grid." },
    { q: "Why are the top and bottom cut off in my grid?", a: "The profile grid shows a crop from the middle of each post. Keep the subject central; the full image shows when the post is opened." },
    { q: "Do all carousel images need the same shape?", a: "Yes. Instagram uses the first image's shape for the whole carousel, so crop them all to 4:5." },
    { q: "Does it reduce quality?", a: "No. A 4:5 crop only trims the top and bottom or the sides; what remains is saved losslessly as PNG." },
    { q: "Is it free?", a: "Yes. Cropping to 4:5 costs nothing and adds no watermark; two as a guest, then unlimited with a free account." },
    { q: "Can I crop many photos to 4:5 at once?", a: "Yes, the batch editor applies one crop ratio to up to 100 images." },
  ],
};

export default page;
