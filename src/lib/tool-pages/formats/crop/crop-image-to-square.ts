import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Crop Image to Square (1:1) Online — Free Square Crop",
  h1: "Crop Image to Square (1:1)",
  metaDescription: "Turn any photo into a perfect square in one tap, for Instagram grids, product thumbnails, profile pictures and album covers. Free, no watermark.",
  subtitle: "Turn a tall or wide photo into a perfect square in one tap, for Instagram grids, product thumbnails, profile pictures, album art and app icons.",
  keywords: "crop image to square, square crop, crop photo square, 1:1 crop, make picture square, square image maker, crop to 1:1 online",
  sections: [
    {
      heading: "How do you crop a photo into a square?",
      items: [
        { t: "1. Drop your photo here", d: "It opens in the crop tool with Square (1:1) already chosen." },
        { t: "2. Press Crop", d: "The largest possible square is cut from the centre of your photo. A 4,000 × 3,000 photo becomes 3,000 × 3,000." },
        { t: "3. Download the PNG", d: "Or keep going in the same editor: [resize](/resize-image) to 1,080 × 1,080 for Instagram, or [compress](/compress-image) it for a marketplace." },
      ],
    },
    {
      heading: "Where do square images work best?",
      table: {
        head: ["Use", "Typical size", "Why square"],
        rows: [
          ["Instagram grid and feed", "1,080 × 1,080", "The profile grid shows square tiles; squares look tidy in it"],
          ["Marketplace product images", "1,000 × 1,000 or more", "Search results and category pages show square thumbnails"],
          ["Album and podcast covers", "3,000 × 3,000", "Music and podcast apps expect square artwork"],
          ["App and website icons", "512 × 512 and up", "Icons are square before any rounding"],
          ["Profile pictures", "400 × 400 and up", "Most apps crop to a square or a circle anyway"],
        ],
      },
    },
    {
      heading: "Who uses a square crop?",
      items: [
        { t: "Online sellers", d: "A catalogue where every thumbnail is square, with the product centred, looks organised and makes products easy to compare. Crop each photo to 1:1 after putting it on white with the [product photo background remover](/remove-bg/product-photos)." },
        { t: "Instagram users and creators", d: "Squares are the classic post shape and look consistent on your profile grid. If you want posts to take more of the feed, try [4:5 portrait](/crop/instagram-post-size) instead." },
        { t: "Musicians and podcasters", d: "Cover art must be square. Crop your photo here, then add the title in a design app." },
        { t: "Anyone making a profile picture", d: "Start from a square so the platform's own round or square crop doesn't cut your face. For a ready-made round version, see [circle crop](/crop/circle-crop-image)." },
      ],
    },
    {
      heading: "How do you keep the right part of the photo?",
      paragraphs: [
        "The square is taken from the middle. From a landscape photo it keeps the centre and trims the left and right; from a portrait photo it trims the top and bottom. That works when your subject is roughly central. If they're off to one side, do a rough crop in your phone's Photos app first so they're in the middle, then use the exact square here.",
      ],
      list: [
        "**Group photos:** a square from a wide group shot may lose people at the edges. Choose a different photo or step back when you take it.",
        "**Tall portraits:** a square from a full-length photo may cut feet or the top of the head; frame from the chest up.",
        "**Products:** leave equal space on all sides when you shoot, and the square will centre the item naturally.",
      ],
    },
    {
      heading: "Does a square crop lose quality?",
      paragraphs: [
        "No. It removes the edges and keeps every remaining pixel exactly as it was. The download is a PNG, which is lossless, so it may be a larger file than your original JPG; compress it afterwards if the destination has a size limit.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. Cropping happens on your device, with no cost and no watermark. Two crops work without an account, then a free account removes the limit.",
      ],
    },
    {
      heading: "When shouldn't you crop to a square?",
      paragraphs: [
        "When the shape of the photo is the point. A wide landscape, a tall full-length portrait or a group lined up in a row all lose something important in a square. In those cases, post the photo in its own shape (Instagram allows portrait 4:5 and landscape posts too), or use a square only for the thumbnail and link to the full photo.",
        "For product catalogues, the reverse is true: an odd-shaped photo looks out of place among square ones. If a product is very tall or very wide, shoot it with extra space around it so the square crop still contains the whole item, or place the cutout on a square white canvas after removing the background.",
      ],
    },
  ],
  faq: [
    { q: "How do I crop a picture into a square?", a: "Drop it on this page, keep Square (1:1) selected, and press Crop. Download the square PNG." },
    { q: "What size is a square Instagram post?", a: "1,080 × 1,080 pixels. Crop to square here, then resize to 1,080 × 1,080 if you want the exact size." },
    { q: "Can I choose which part of the photo becomes the square?", a: "The square is taken from the centre. Move your subject to the middle with a rough crop in your phone's photo app first if needed." },
    { q: "Does cropping to square reduce quality?", a: "No. Only the edges are removed, and the result is saved as a lossless PNG." },
    { q: "Why is my square file bigger than the original?", a: "PNG keeps quality perfectly but compresses photos less than JPG. Compress it afterwards for uploads." },
    { q: "Can I make a square without cutting anything off?", a: "Not by cropping. To fit a whole wide photo in a square, you'd add borders in a design app, or extend the background with the AI photo editor." },
    { q: "Is it free?", a: "Yes. Square crops are free and unmarked; you can make two without signing up, and unlimited with a free account." },
    { q: "Can I square many photos at once?", a: "The batch editor can apply the 1:1 crop to up to 100 images." },
  ],
};

export default page;
