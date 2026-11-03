import type { ToolPage } from "../../types";
import { COST, PACK_FROM } from "@/lib/app-pages/facts";
import { creativeFigure } from "../creative";

const page: ToolPage = {
  title: "Profile Picture Upscaler — Make a Blurry Profile Photo Sharp",
  h1: "Profile Picture Upscaler",
  metaDescription: "Fix a small or blurry profile picture for LinkedIn, Instagram, WhatsApp or YouTube. Upscale it sharp, then crop it square or round.",
  subtitle: "Make a small or blurry profile photo sharp again for LinkedIn, Instagram, WhatsApp, YouTube or a work directory. Upscale it, then crop it square or into a circle.",
  keywords: "profile picture upscaler, upscale profile picture, blurry profile picture fix, enhance profile photo, high quality profile picture, sharpen dp, profile photo enhancer",
  sections: [
    {
      heading: "How do you fix a blurry profile picture?",
      figure: creativeFigure("image-upscaler", "Image Upscaler", "A slightly soft portrait of a woman in a straw hat next to a sharper version with clearer hair and skin detail", "A soft portrait upscaled with clearer hair, skin and fabric."),
      items: [
        { t: "1. Pick the best photo you have", d: "The original from your camera roll, not a copy saved from a chat or a social site, which is usually compressed." },
        { t: "2. Upscale with Pro AI", d: `Drop it here and choose **Pro AI** (${COST}) at 2×. It rebuilds eyes, hair and skin detail, which is exactly what makes a small face look sharp.` },
        { t: "3. Crop it square or round", d: "Use the [crop tool](/crop-image): Square for most platforms, or Circle for a round PNG with transparent corners. Then download." },
      ],
    },
    {
      heading: "Why do profile pictures look blurry?",
      paragraphs: [
        "Three usual reasons. The photo was **cropped from a bigger picture**, so the face is only a small part of it. It was **saved from a chat or social app**, which compresses images heavily. Or the platform **shows it larger than it is**, for example a 200-pixel image on a LinkedIn profile viewed on a big screen. Each platform also recompresses what you upload, so starting sharp matters.",
      ],
      table: {
        head: ["Platform", "A safe size to upload"],
        rows: [
          ["LinkedIn", "At least 400 × 400 pixels"],
          ["YouTube", "800 × 800 pixels"],
          ["Instagram, WhatsApp, X", "Around 1,000 × 1,000 for a crisp result everywhere"],
          ["Work tools (Slack, Teams, Zoom)", "500 × 500 or more"],
        ],
      },
      after: ["Platforms change their recommendations from time to time; when in doubt, a sharp square of about 1,000 pixels works almost everywhere."],
    },
    {
      heading: "Who needs a sharper profile picture?",
      items: [
        { t: "Job seekers", d: "Recruiters see your LinkedIn photo first. A sharp, well-lit face looks more professional than a blurry crop of a party photo. For a full studio-style portrait, see [LinkedIn headshot](/ai-headshot/linkedin)." },
        { t: "Creators", d: "Your channel icon appears on every video and comment. Upscale it so it's crisp on TVs and big monitors, not just phones." },
        { t: "Small businesses", d: "A shop's logo or owner photo on WhatsApp Business, Google Business Profile and Instagram should look clean wherever customers see it." },
        { t: "Teams", d: "Directory and chat photos taken from old group shots can be upscaled so everyone's picture looks equally sharp." },
      ],
    },
    {
      heading: "Does upscaling change your face?",
      paragraphs: [
        "Normal mode never changes anything; it only enlarges and sharpens. Pro AI aims to keep your likeness and usually does, but it redraws fine detail, so look closely at your eyes, teeth and hairline. If something looks slightly different, run it again; each run is a fresh attempt. Don't use it to change how you look for profiles where people need to recognise you.",
      ],
    },
    {
      heading: "Tips for a great profile photo",
      list: [
        "**Face fills most of the frame**, with a little space above your head.",
        "**Soft light from the front**, like a window, flatters everyone.",
        "**Plain background.** If yours is busy, the [background remover](/remove-bg) or [AI photo editor](/ai-editor) can replace it.",
        "**Look at the camera** and keep it recent.",
        "**Use the same photo everywhere** so people recognise you across platforms.",
      ],
    },
    {
      heading: "Is fixing a profile picture free?",
      paragraphs: [
        `Cropping and a Normal 2× enlargement are free. The Pro AI pass, the one that makes a small face look genuinely sharp, is ${COST} for one photo, and you're only charged if it succeeds. One pack from ${PACK_FROM} is enough to fix your picture on every platform you use.`,
      ],
    },
  ],
  faq: [
    { q: "How do I make my profile picture clearer?", a: "Upscale the original photo with Pro AI at 2×, then crop it square or into a circle. Upload the result to your profile." },
    { q: "What size should a profile picture be?", a: "A sharp square of around 1,000 × 1,000 pixels works almost everywhere. LinkedIn asks for at least 400 × 400 and YouTube recommends 800 × 800." },
    { q: "Why does my profile picture look blurry?", a: "Usually because it was cropped from a bigger photo, saved from a chat app, or is shown larger than it is. Start from the original and upscale it." },
    { q: "Will it change my face?", a: "Normal never does. Pro AI aims to keep your likeness but redraws fine detail, so check the result and run it again if needed." },
    { q: "Can I make it round?", a: "Yes. Use the crop tool's Circle shape for a round PNG with transparent corners." },
    { q: "How much does it cost?", a: `Pro AI costs ${COST} per photo. Normal 2× upscaling and cropping are free.` },
    { q: "Can I change the background too?", a: "Yes. Remove it with the background remover, or describe a new one in the AI photo editor." },
    { q: "Is there a watermark?", a: "No. Your new profile picture downloads clean, ready to upload." },
  ],
};

export default page;
