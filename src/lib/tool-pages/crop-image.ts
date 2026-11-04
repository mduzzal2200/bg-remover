import type { ToolPage } from "./types";

const page: ToolPage = {
  title: "Crop Image Online — Square, 4:5, 9:16, 16:9 and Circle",
  h1: "Free Crop Image Tool",
  metaDescription: "Crop a photo to the exact shape Instagram, Stories, YouTube or a profile picture needs, in one tap. Square, 4:5, 9:16, 16:9, 3:2 and circle.",
  subtitle: "Crop a photo to the shape a platform wants in one tap: square for a post, 4:5 for portrait, 9:16 for Stories and Reels, 16:9 for YouTube, 3:2 for prints, or a circle for a profile picture.",
  keywords: "crop image, crop photo, crop image online, crop picture, crop to square, crop image for instagram, circle crop, aspect ratio crop",
  alt: { hero: "A wide photo of a person with empty space around them, cropped tight to a square with the person centred" },
  sections: [
    {
      heading: "How do you crop a photo to the right size?",
      items: [
        { t: "1. Drop your photo here", d: "Pick any JPG, PNG or WebP. You land in the editor with the crop shapes on screen." },
        { t: "2. Pick the shape", d: "Six ready-made shapes: **Square** (1:1), **Portrait** (4:5), **Story** (9:16), **Wide** (16:9), **Classic** (3:2) and **Circle**. Each shows what it's for, so you don't need to remember the numbers." },
        { t: "3. Crop and download", d: "Press Crop. The photo is cut to that shape from the centre, keeping as much of the picture as the shape allows. Download it, or keep going with resize or compress in the same window." },
      ],
    },
    {
      heading: "Which shape does each platform want?",
      table: {
        head: ["Shape", "Ratio", "Use it for"],
        rows: [
          ["Square", "1:1", "Instagram and Facebook feed posts, marketplace thumbnails, album covers"],
          ["Portrait", "4:5", "Instagram portrait posts, which take up more of the feed than squares"],
          ["Story", "9:16", "Instagram and Facebook Stories, Reels, TikTok, YouTube Shorts, phone wallpapers"],
          ["Wide", "16:9", "YouTube thumbnails, presentation slides, website banners, TV screens"],
          ["Classic", "3:2", "Standard photo prints such as 6×4 inches, and most camera photos"],
          ["Circle", "round", "Profile pictures for WhatsApp, LinkedIn, Discord, Zoom and team pages"],
        ],
      },
      after: [
        "A ratio is a shape, not a size. 1:1 is any square, whether it's 500 or 3,000 pixels wide. If a platform also gives you exact pixels, crop to the shape here, then use [resize image](/resize-image) to set the pixels.",
      ],
    },
    {
      heading: "Who crops photos, and why?",
      items: [
        { t: "Creators and social media managers", d: "A photo that doesn't match the platform's shape gets cropped by the app, often through someone's head. Cropping it yourself means you decide what stays in. Guides for each: [Instagram post size](/crop/instagram-post-size), [Instagram Story size](/crop/instagram-story-size) and [YouTube thumbnail crop](/crop/youtube-thumbnail-crop)." },
        { t: "Anyone updating a profile picture", d: "Most apps show your photo in a circle. The Circle crop gives you a round PNG with transparent corners, so it looks right everywhere, even where the app doesn't crop it for you. See [circle crop](/crop/circle-crop-image) and [Instagram profile picture](/crop/instagram-profile-picture)." },
        { t: "Online sellers", d: "Marketplace grids look best when every product image is the same shape, usually square. Crop each photo to 1:1 so listings line up neatly. [Crop to square](/crop/crop-image-to-square) has the details." },
        { t: "People printing photos", d: "Phone photos are usually 4:3, while a 6×4 print is 3:2. Crop to Classic first and the print shop won't trim off the edges you wanted." },
        { t: "Presenters and teachers", d: "Slides are 16:9. A photo cropped to Wide fills the slide without black bars or awkward stretching." },
      ],
    },
    {
      heading: "Does cropping lower the quality?",
      paragraphs: [
        "No. Cropping only removes the edges; every pixel that's left is exactly as sharp as it was. What changes is the number of pixels: a square cropped from a 4,000×3,000 photo is 3,000×3,000. That's still far more than any social network shows.",
        "The cropped image is saved as a **PNG**, which is lossless. That keeps quality perfect but can make the file larger than the original JPG. If you need it smaller for an upload, run it through [compress image](/compress-image) afterwards.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes, and it stays free because your own device does the cutting. There's no limit on photos and nothing stamped on them. Two crops work as a guest; after that, a free sign-up keeps you going.",
      ],
    },
    {
      heading: "How do you get a good crop?",
      list: [
        "**Put the subject in the middle** before you crop, because the crop is centred. If the person is at the side of the frame, a square crop may cut them off.",
        "**Leave room** above heads and around products. A crop that's too tight looks cramped once the platform adds its own buttons and text on top.",
        "**For Stories, think vertical.** A wide landscape photo cropped to 9:16 keeps only a narrow strip from the middle. Choose a photo that's already tall when you can.",
        "**For a circle, centre the face** and leave space around it, because the corners are cut away.",
        "**Crop first, then resize, then compress.** That order gives the best quality at the smallest size.",
      ],
    },
    {
      heading: "What can't the crop tool do?",
      list: [
        "Choose the crop position by dragging. The crop is always centred. If the subject is off to one side, crop the photo roughly in your phone's photo app first, then use the exact shape here.",
        "Add space to a photo that's the wrong shape. Cropping only removes. To extend a photo to a wider shape, use the [AI photo editor](/ai-editor): pick the new size, ask it to \"extend the background\", and it fills in the edges.",
        "Crop many photos at once here. The [batch editor](/batch-editor) applies one crop ratio to up to 100 images.",
      ],
    },
    {
      heading: "Is it private?",
      paragraphs: [
        "Cropping is done locally by your browser. If you have an account, the cropped image is stored in My Creations too, and it's yours to delete.",
      ],
    },
  ],
  faq: [
    { q: "How do I crop a picture to a square?", a: "Open the crop tool, choose Square (1:1) and press Crop. The photo is cut to a square from the centre. Download it as a PNG." },
    { q: "What shape is an Instagram post?", a: "Square (1:1) or portrait (4:5) for the feed, and 9:16 for Stories and Reels. Portrait posts take up more of the screen." },
    { q: "How do I crop a photo into a circle?", a: "Choose Circle and press Crop. You get a round PNG with transparent corners, ready for a profile picture." },
    { q: "Does cropping reduce quality?", a: "No. Cropping only removes the edges; the rest keeps every pixel. The result is saved as a lossless PNG." },
    { q: "Can I choose where to crop?", a: "The crop is centred. If your subject is off to one side, move it to the middle with a rough crop in your phone's photo app first." },
    { q: "Is the crop tool free?", a: "Yes. Crop as many photos as you like with no watermark. Guests get two crops before a free sign-up." },
    { q: "What's the right size for a YouTube thumbnail?", a: "16:9, usually 1280×720 pixels. Crop to Wide here, then resize to 1280×720 if you need the exact pixels." },
    { q: "Why is my cropped file bigger than the original?", a: "Crops are saved as PNG, which keeps quality perfectly but compresses photos less than JPG. Compress it afterwards if you need a smaller file." },
  ],
};

export default page;
