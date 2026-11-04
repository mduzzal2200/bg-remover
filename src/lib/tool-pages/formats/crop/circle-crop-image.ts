import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Circle Crop Image Online — Round PNG With Transparent Corners",
  h1: "Circle Crop Image Online",
  metaDescription: "Cut any image into a perfect circle with transparent corners: round avatars, logos, stickers, team photos and badges. Free PNG, no watermark.",
  subtitle: "Cut any image into a perfect circle with transparent corners: round avatars for team pages, logo badges, stickers, product dots and speaker photos. Drops onto any background with no white square.",
  keywords: "circle crop image, crop image into circle, round image maker, circle png, crop photo round, round avatar maker, circular crop online",
  sections: [
    {
      heading: "How do you crop an image into a circle?",
      items: [
        { t: "1. Drop the image here", d: "Circle is preselected. Faces, logos and products all work." },
        { t: "2. Press Crop", d: "The largest circle that fits is cut from the centre, and everything outside it becomes transparent." },
        { t: "3. Download the round PNG", d: "Place it on a website, a slide, a poster or a sticker sheet: no white corners, whatever the background." },
      ],
    },
    {
      heading: "Why a transparent PNG matters",
      paragraphs: [
        "Most \"round\" images online are really squares with the corners painted white, so they show a white box on any coloured background. A circle crop here makes the corners genuinely empty (transparent), which only PNG and WebP can store. Keep it as PNG; converting to JPG would paint the corners white again.",
      ],
      table: {
        head: ["Where it goes", "Square photo", "Circle PNG"],
        rows: [
          ["Team page with coloured cards", "Square corners poke out", "Clean round faces"],
          ["Slide or poster", "Looks pasted on", "Looks designed"],
          ["Sticker or badge print", "Needs manual trimming", "Ready-cut shape"],
          ["Dark-mode website", "White corners glow", "Corners disappear"],
        ],
      },
    },
    {
      heading: "What can you make with round images?",
      items: [
        { t: "Team and speaker pages", d: "Round headshots in a row look tidy and friendly. Use the same photo style for everyone; [corporate headshots](/ai-headshot/corporate) helps with that." },
        { t: "Logo badges and icons", d: "Turn a square logo into a round badge for a website footer, an app splash or a social avatar." },
        { t: "Stickers and labels", d: "Round PNGs print cleanly on circle sticker sheets and product labels." },
        { t: "Testimonials and reviews", d: "Small round customer photos next to quotes make a website feel human." },
        { t: "Profile pictures everywhere", d: "Most apps show avatars as circles; this shows you the exact result first. For Instagram specifically, see [Instagram profile picture crop](/crop/instagram-profile-picture)." },
      ],
    },
    {
      heading: "How do you get a well-centred circle?",
      list: [
        "**Centre the subject first.** The circle comes from the middle of the image; do a rough crop in your photo app if your subject sits to one side.",
        "**Leave space around logos**, because text near the edge of a square gets clipped by the circle.",
        "**For faces, frame from the shoulders up** so the face fills the circle.",
        "**Start with a square image** if you want the full width kept: the circle's diameter equals the shorter side.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. The circle is cut in your browser, costs nothing and leaves no watermark. Guests can crop twice; a free account keeps going without limits. Need it as a smaller file? [Convert to WebP](/convert/png-to-webp), which keeps the transparent corners.",
      ],
    },
    {
      heading: "How do you put a round photo on a coloured background?",
      paragraphs: [
        "Because the corners are transparent, the round PNG sits directly on whatever is behind it. In Google Slides, PowerPoint, Keynote, Canva or a website builder, add a shape or set the page colour, then place the circle on top. Add a thin white or brand-coloured ring around it with the app's border option for a badge look.",
        "Want the circle on a colour baked into the file? Place it on a square of colour in any design app and export as JPG or PNG. If the person in the photo has a busy background, remove it first with the background remover, then crop to a circle, for a clean round cut-out on any colour.",
      ],
    },
    {
      heading: "Circle crop for print",
      paragraphs: [
        "Printing round stickers or badges? Crop each design to a circle, then check the print shop's template: most ask for a little bleed around the edge. Start from a large image so the circle prints sharply at its final size.",
      ],
    },
  ],
  faq: [
    { q: "How do I crop an image into a circle?", a: "Drop it on this page with Circle selected and press Crop. Download the round PNG with transparent corners." },
    { q: "Are the corners really transparent?", a: "Yes. Everything outside the circle is empty, so the image sits on any background with no white square." },
    { q: "Why do my corners turn white?", a: "Because the image was saved or converted to JPG, which can't store transparency. Keep it as PNG or WebP." },
    { q: "Can I make a round logo?", a: "Yes. Leave some space around the logo so the circle doesn't clip any text." },
    { q: "How big is the circle?", a: "Its diameter equals the shorter side of your image, taken from the centre." },
    { q: "Can I make an oval instead?", a: "No, the crop is a perfect circle. For other shapes, use a design app." },
    { q: "Is it free?", a: "Yes. Round crops are free and watermark-free; two work without an account and a free one makes it unlimited." },
    { q: "Does it reduce quality?", a: "No. Inside the circle every pixel is untouched; only the corners outside it are cleared to transparent." },
  ],
};

export default page;
