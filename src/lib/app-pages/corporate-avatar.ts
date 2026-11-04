import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Corporate Avatar: Clean Work Profile Photo From a Selfie",
  h1: "AI Corporate Avatar Maker",
  metaDescription: "Turn a selfie into a clean, friendly work profile picture for Slack, Teams, Zoom and Outlook: tight framing, business-casual style and a calm background.",
  tagline: "Upload a selfie and get a clean, friendly profile picture built for work apps: framed tightly from the chest up, in a navy blazer over a light-blue shirt, against a calm slate-blue background.",
  keywords: "corporate avatar, professional profile picture, work profile picture ai, slack profile picture, teams profile photo, business avatar from selfie, corporate profile photo",

  howToHeading: "How to make a corporate avatar",
  howTo: [
    { t: "Upload a close, front-facing selfie", d: "Your face clear and well lit. A T-shirt at home is fine; the business-casual outfit is added." },
    { t: "Choose attire and background, or keep Auto", d: "Suit & tie, Blazer, no tie, Smart casual, Shirt & sweater or Keep my clothes. Background: solid colour, gradient, blurred scene or transparent." },
    { t: "Generate and upload everywhere", d: "Your avatar is ready in under a minute. Use the same one on Slack, Teams, email and LinkedIn." },
  ],
  exampleCaption: "A close selfie of a man in a grey T-shirt at home becomes a clean corporate avatar: the same face and friendly expression, framed tightly from the chest up, in a navy blazer over a light-blue open-collar shirt, on a soft slate-blue background.",

  sections: [
    {
      heading: "What does the corporate avatar maker do?",
      paragraphs: [
        "It makes a profile picture designed for the small circles of work apps. You're framed tightly from the chest up, the way profile icons are cropped, wearing a navy blazer over a light-blue open-collar shirt, against a soft, solid slate-blue background, with a friendly, approachable expression.",
        "It's built to look like a real photograph with natural skin and light, not a cartoon avatar. Your face and identity stay exactly the same, so colleagues recognise you instantly in a meeting list or a chat thread.",
      ],
    },
    {
      heading: "Corporate avatar or professional headshot?",
      paragraphs: [
        "Both give you a polished photo of yourself, but they're built for different sizes. A [professional headshot](/creative/professional-headshot) is a studio-style portrait with more room around you and a choice of backdrops, suited to a website, a speaker bio or a printed badge. A **corporate avatar** is cropped tighter and kept simpler, with a calm solid background, so it still reads clearly at 32 pixels in Slack or Teams.",
        "Many people use both: the headshot on LinkedIn and the company site, the avatar in chat and email.",
      ],
    },
    {
      heading: "Attire and background options",
      table: {
        head: ["Setting", "Choice", "Result"],
        rows: [
          ["Attire", "Auto", "A navy blazer over a light-blue open-collar shirt, as in our example"],
          ["Attire", "Suit & tie", "A well-fitted dark suit with a shirt and tie"],
          ["Attire", "Blazer, no tie", "A tailored blazer over an open-collar shirt"],
          ["Attire", "Smart casual", "A shirt or knitwear, no jacket"],
          ["Attire", "Shirt & sweater", "A collared shirt under a fine-knit sweater"],
          ["Attire", "Keep my clothes", "Your own clothes, with only light, background and framing changed"],
          ["Background", "Solid colour / Gradient", "A calm, plain backdrop that reads at tiny sizes"],
          ["Background", "Blurred scene", "A softly blurred office-style scene"],
          ["Background", "Transparent", "No background, to place on your own brand colour"],
        ],
      },
    },
    {
      heading: "Who uses a corporate avatar?",
      items: [
        { t: "Remote and hybrid teams", d: "When most of your colleagues know you from a chat window, a clear, friendly avatar does a lot of work." },
        { t: "New starters", d: "Upload a polished avatar on day one so your name in Teams or Slack has a face from the start." },
        { t: "HR and internal comms teams", d: "Ask everyone for a selfie and make matching avatars with the same background for a consistent directory." },
        { t: "Freelancers and contractors", d: "Look professional in clients' workspaces and email threads without booking a shoot." },
        { t: "Anyone without a decent work photo", d: "Replace the cropped holiday photo or the grey placeholder with something tidy." },
      ],
    },
    {
      heading: "Tips for a great work avatar",
      list: [
        "**Close and front-facing.** Avatars are cropped tight and shown small, so your face should fill the photo.",
        "**Even light.** A window in front of you matters more than background detail.",
        "**Relaxed, friendly expression.** People see your avatar every day; approachable beats stern.",
        "**Match your workplace.** Suit & tie for formal industries, Smart casual for start-ups.",
        "**Use one avatar everywhere.** Slack, Teams, Zoom, Google and Outlook all accept the same square image.",
      ],
    },
    {
      heading: "Sizes for work apps",
      paragraphs: [
        "Work apps all take a square image and shrink it to a small circle. A square of 500 × 500 pixels or more looks sharp everywhere. Make sure the download is square: crop it with the [crop tool](/crop-image)'s Square preset if needed. For email signatures, where your picture appears exactly as uploaded, the crop tool's Circle option gives a round PNG with transparent corners.",
      ],
    },
    {
      heading: "Making a team set that matches",
      paragraphs: [
        "For a consistent directory, agree on two settings, for example **Blazer, no tie** and a **solid colour** background, and have everyone run their own selfie with them. Because every avatar uses the same framing, outfit style and backdrop, the team looks like it was photographed on the same day, even if people work in different countries.",
        "Pair the avatars with a matching [LinkedIn banner](/creative/linkedin-banner) for leaders and customer-facing staff.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Add your company logo or uniform.** It uses general business clothing.",
        "**Make a cartoon.** It's a realistic photo. For a fun avatar, try the [Pixar-style avatar](/creative/pixar-avatar).",
        "**Change your face.** Your features are kept, so you're recognisable on video calls.",
        "**Replace a photo your employer must take.** Some companies require official ID-badge photos.",
      ],
    },
    {
      heading: "Why your work profile picture matters more than you think",
      paragraphs: [
        "In a distributed team, your profile picture appears hundreds of times a day: next to every message, in every meeting list, on every shared document and email. For colleagues you rarely see in person, it's the face they attach to your name. A blank initial or a blurry holiday crop makes you harder to recognise and, fairly or not, a little less approachable.",
        "A clear, friendly avatar fixes that. It also helps new colleagues match faces to names in their first weeks, and makes video-call lists easier to scan when cameras are off.",
      ],
    },
    {
      heading: "What makes an avatar readable at tiny sizes?",
      list: [
        "**A tight crop.** Chat apps show your picture at around 32 to 48 pixels. Your face needs to fill most of the circle.",
        "**A plain background.** Busy scenes turn into noise when shrunk; a solid colour keeps the outline of your face crisp.",
        "**Contrast.** A dark blazer on a lighter blue, or a light shirt on a darker tone, separates you from the background.",
        "**Soft, even light.** Shadows that look fine at full size turn into dark patches in a tiny circle.",
      ],
      after: ["The app's default look is built around exactly these four rules."],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `A corporate avatar uses ${COST}, only once it's created. Credit packs begin at ${PACK_FROM} and never expire, which is handy for making a set for a team over time. Look above the upload for any free trial in your country.`,
        "The selfie is processed by fal.ai's image models and goes no further; we don't sell photos or use them for AI training. Delete your selfie and avatar from My Creations whenever you like.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a corporate avatar?", a: "Upload a close, front-facing selfie, keep Attire and Background on Auto or choose your own, and press Generate. Your work avatar is ready in under a minute." },
    { q: "What's the difference from a professional headshot?", a: "The avatar is cropped tighter with a simpler background so it reads at tiny sizes in chat apps; a headshot is a fuller studio-style portrait." },
    { q: "Can I keep my own clothes?", a: "Yes. Choose Keep my clothes and only the light, background and framing change." },
    { q: "Can I get a transparent background?", a: "Yes. Choose Transparent, then place the avatar on your own brand colour." },
    { q: "Will it look like me?", a: "Yes. Your face and identity are kept exactly the same." },
    { q: "What size should a work profile picture be?", a: "A square of 500 × 500 pixels or more works on Slack, Teams, Zoom, Google and Outlook." },
    { q: "How much does it cost?", a: `${COST} per avatar, only when it's made. Packs start at ${PACK_FROM}.` },
    { q: "Can we make matching avatars for a team?", a: "Yes. Agree on the same attire and background and have everyone run their own selfie." },
    { q: "Can I use it on LinkedIn?", a: "Yes. It works as a LinkedIn profile picture; for a fuller studio-style portrait, the professional headshot app is an alternative." },
    { q: "Is there a watermark?", a: "No. The avatar downloads at full size without a mark." },
  ],
};

export default page;
