import type { ToolPage } from "../../types";

const page: ToolPage = {
  title: "Instagram Profile Picture Crop — Fit Your Photo in the Circle",
  h1: "Instagram Profile Picture Crop",
  metaDescription: "Crop a photo so it fits Instagram's round profile picture, with your face centred and nothing cut off. Round PNG with transparent corners. Free.",
  subtitle: "Instagram shows your profile picture as a small circle, and a careless crop cuts off hair, chins or half a logo. Make a round version here first, with your face centred, so you know exactly what people will see.",
  keywords: "instagram profile picture crop, instagram dp size, instagram profile picture size, crop photo for instagram profile, round profile picture, instagram pfp circle",
  sections: [
    {
      heading: "How do you crop a photo for your Instagram profile picture?",
      items: [
        { t: "1. Pick a photo where your face is in the middle", d: "The circle is cut from the centre, so a centred face works best." },
        { t: "2. Drop it here and press Crop", d: "The Circle shape is preselected. You get a round PNG with transparent corners, which shows you the exact area Instagram will display." },
        { t: "3. Upload it to Instagram", d: "Go to your profile, tap Edit profile, then Change profile picture, and choose the new image. Because it's already round and centred, Instagram's own circle lines up with it." },
      ],
    },
    {
      heading: "What size is an Instagram profile picture?",
      paragraphs: [
        "Instagram displays profile pictures very small, about 110 pixels across on a phone, and stores them around 320 × 320. Uploading something larger (1,000 pixels or so) is fine; Instagram shrinks it and it stays crisp. What matters more than size is framing: in a circle that small, only a face or a bold logo reads clearly.",
      ],
      table: {
        head: ["Do", "Avoid"],
        rows: [
          ["Face filling most of the circle", "A full-length photo where you're a tiny figure"],
          ["Plain or blurred background", "Busy scenery competing with your face"],
          ["Good, even light on your face", "Strong backlight that turns you into a silhouette"],
          ["A logo with space around it", "Text near the edge, which the circle cuts off"],
        ],
      },
    },
    {
      heading: "Who needs a better Instagram profile picture?",
      items: [
        { t: "Creators and influencers", d: "Your profile picture appears next to every post, comment and Story. A clear, centred face makes you recognisable in a busy feed." },
        { t: "Small businesses", d: "Use your logo, centred, with breathing room so the circle doesn't clip it. A logo with a transparent background, from [make a logo transparent](/remove-bg/logo), on a brand-colour square works well." },
        { t: "Anyone switching accounts or styles", d: "Use the same round photo on Instagram, Threads and WhatsApp so people recognise you everywhere." },
      ],
    },
    {
      heading: "How do you make your profile picture stand out?",
      list: [
        "**Get close.** Crop from the shoulders up so your face fills the circle.",
        "**Use a colour that pops**, like a plain coloured wall behind you, to stand out in a list of followers.",
        "**Sharpen it if it's soft.** A blurry face looks even blurrier at small size; the [profile picture upscaler](/upscale/profile-picture) fixes that first.",
        "**Smile and look at the camera**; eye contact reads even at thumbnail size.",
        "**Keep it current** so people who meet you recognise you.",
      ],
    },
    {
      heading: "Why does Instagram show a white or black corner?",
      paragraphs: [
        "Sometimes a round PNG with transparent corners is shown on a white or dark background inside Instagram's square preview before it's cropped to a circle. It doesn't matter: Instagram shows only the circle on your profile. If you prefer, crop to [square](/crop/crop-image-to-square) instead and let Instagram make the circle.",
      ],
    },
    {
      heading: "Is it free?",
      paragraphs: [
        "Yes. The circle is cut out on your own device, free and without a watermark. You can do it twice without an account; a free account keeps it unlimited. For round crops of logos and stickers rather than faces, see [circle crop](/crop/circle-crop-image).",
      ],
    },
    {
      heading: "Should you use a logo or a face?",
      paragraphs: [
        "Use a face for a personal account, creator or freelancer; people follow people. Use a logo for a brand or shop, but make sure it's readable at thumbnail size: a simple symbol or the first letter usually works better than a long name squeezed into a circle. Some small businesses use the owner's face for a more personal feel; it's a choice about how you want customers to see you.",
      ],
    },
  ],
  faq: [
    { q: "What size should an Instagram profile picture be?", a: "Upload a square or round image of at least 320 × 320 pixels; around 1,000 pixels is a safe choice. Instagram shows it at about 110 pixels on phones." },
    { q: "How do I stop Instagram cutting off my profile picture?", a: "Make it round and centred before uploading: crop to a circle here so you see exactly what will show." },
    { q: "Will the corners be transparent?", a: "Yes. You get a round PNG with transparent corners." },
    { q: "Why is my Instagram profile picture blurry?", a: "Usually because the original was small or compressed. Upscale it first, then crop to a circle." },
    { q: "Can I use this for WhatsApp and Threads too?", a: "Yes. They also show profile pictures in a circle, so the same image works." },
    { q: "Can I move the circle?", a: "The circle is centred on the photo. If your face is off-centre, crop the photo roughly in your phone's editor first." },
    { q: "Is it free?", a: "Yes, with no watermark. Two crops without an account, unlimited with a free one." },
    { q: "Does it lower the quality?", a: "No. Cropping only removes the area outside the circle." },
  ],
};

export default page;
