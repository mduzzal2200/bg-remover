import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Graduation Photo: Cap and Gown Portrait From a Selfie",
  h1: "AI Graduation Photo Maker",
  metaDescription: "Make a cap and gown graduation portrait from any selfie: choose the gown colour, hold a diploma, stand on a sunny campus. Your face stays the same.",
  tagline: "Upload a selfie and get a proud graduation portrait: an academic gown in the colour you choose, a mortarboard, a rolled diploma and a sunlit campus behind you.",
  keywords: "ai graduation photo, cap and gown photo, graduation photo maker, graduation picture ai, cap and gown portrait, graduation photoshoot, virtual graduation photo",

  howToHeading: "How to make a graduation photo with AI",
  howTo: [
    { t: "Upload a clear photo of yourself", d: "Front-facing and well lit. You can be sitting at home in everyday clothes; the gown, cap and campus are added." },
    { t: "Choose the gown colour and setting", d: "Pick Black, Navy, Red, Royal blue or Green to match your school, or leave Auto. Setting Auto gives the campus in our example." },
    { t: "Generate and download", d: "Your portrait is ready in under a minute. Run it again for a different pose or angle." },
  ],
  exampleCaption: "A woman in a green sweater and jeans sitting in her bedroom becomes a graduation portrait: a black academic gown with a red and gold stole, a mortarboard and a rolled diploma, standing on a sunny campus in front of a stone university building.",

  sections: [
    {
      heading: "What does the graduation photo maker do?",
      paragraphs: [
        "It turns any photo of you into a full graduation portrait. You're dressed in an academic gown and mortarboard, holding a rolled diploma, against a celebratory campus or ceremony backdrop in warm, proud light. The default look in our example adds a coloured stole over the gown and a stone university building behind.",
        "Your face is kept exactly as it is, and the photo is built to look like a real picture taken on graduation day, with natural skin, real shadows and believable fabric, not a cartoon or a sticker of a cap on your head.",
      ],
    },
    {
      heading: "Why make a graduation photo with AI?",
      paragraphs: [
        "Not everyone gets the photo they wanted. Ceremonies are cancelled, postponed or moved online. The official photographer has seconds per graduate and the prints arrive months later. Some people finish a course online or abroad with no ceremony at all. Others graduated years ago and never had a picture taken.",
        "An AI graduation photo gives you a portrait that marks the moment anyway. It's also useful when the real photo exists but isn't quite right: eyes closed, a crooked cap, or rain. And it's a quick way to make a congratulations post, a card or a framed picture before the official photos arrive.",
      ],
    },
    {
      heading: "Who makes AI graduation photos?",
      items: [
        { t: "Graduates without a ceremony photo", d: "Online degrees, cancelled or delayed ceremonies, or graduating while working: get the cap-and-gown photo anyway." },
        { t: "Graduates who want it now", d: "Post on the day with a polished portrait, then share the official photos when they arrive." },
        { t: "Parents and grandparents", d: "Make a framed portrait for the family wall, or a picture for a congratulations card or a party banner." },
        { t: "Teachers and schools", d: "Kindergarten, primary and high-school leavers love a cap-and-gown portrait for a memory book or a leaving display. Ask families' permission before using children's photos." },
        { t: "Adults who graduated long ago", d: "Many people never had a graduation photo. Upload a recent selfie and finally get one for the wall." },
      ],
    },
    {
      heading: "Gown colours and settings",
      paragraphs: ["Schools use different colours, so choose the one that matches yours, or leave Auto."],
      table: {
        head: ["Gown colour", "Common for"],
        rows: [
          ["Black", "Most universities and colleges; the classic look"],
          ["Navy", "Many universities and high schools"],
          ["Red", "Schools with red as their colour, and some doctoral gowns"],
          ["Royal blue", "High schools and colleges with blue as their colour"],
          ["Green", "Schools with green as their colour"],
        ],
      },
      after: [
        "**Setting** changes the background. Auto gives a sunny campus or ceremony scene. Studio gives a classic studio portrait backdrop like a yearbook photo. Garden, Outdoors and City street give natural, relaxed graduation shots. Indoors and Beach are there too, for something different.",
      ],
    },
    {
      heading: "Tips for a proud graduation portrait",
      list: [
        "**Use a front-facing photo.** It gives the most natural result under the cap.",
        "**Show your face and shoulders.** The gown is built around your shoulders, so a tight face crop leaves it guessing.",
        "**Smile.** It's a celebration, and the app keeps your expression.",
        "**Simple backgrounds blend better.** A plain wall in the original lets the campus look natural.",
        "**Hairstyle matters.** The cap sits on your head, so loose or low-tied hair looks most natural.",
        "**Run it twice.** The pose, the stole and the background change each time.",
      ],
    },
    {
      heading: "What can you do with your graduation photo?",
      items: [
        { t: "Announcements and cards", d: "Add your name, degree and year in a design app, or a single line with the free [watermark tool](/watermark-image), and send it to family or print it as a card." },
        { t: "A LinkedIn post", d: "Celebrate the milestone with a polished portrait and a few lines about what you studied and what's next." },
        { t: "A party banner or cake image", d: "Upscale it in the [image upscaler](/upscale) and use it for a banner, a photo cake or table cards at the party." },
        { t: "A framed print", d: "Choose a tall 4:5 or 3:4 shape, upscale it and print at 8 × 10 inches for a classic frame." },
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Show your real university's crest or building.** The campus is invented; no school logos are added on purpose.",
        "**Match your exact gown, hood or stole.** It creates a typical academic gown in the colour you pick, not your institution's official regalia.",
        "**Write your name or degree.** Add text afterwards with the free watermark tool or a design app.",
        "**Replace an official record.** It's a celebratory portrait, not a certificate or a proof of graduation.",
      ],
    },
    {
      heading: "Making photos for a whole class or family",
      paragraphs: [
        "To make a matching set, use the same gown colour and setting for everyone. Each person should have their own photo: the app makes one graduate per image. Then put the portraits together in a collage or slide.",
        "For a group portrait of graduates together, the [group photo maker](/group-photo) can combine separate photos into one picture, and you can describe caps and gowns in its details box.",
      ],
    },
    {
      heading: "More milestone photos",
      paragraphs: [
        "Need a polished photo for job applications after graduating? The [professional headshot](/creative/professional-headshot) app gives you a studio-style business portrait. For a nostalgic school look, try the [90s yearbook photo](/creative/90s-yearbook-photo). And for prom season, the [AI prom photo maker](/creative/prom-photoshoot) gives you a glam ballroom portrait.",
      ],
    },
    {
      heading: "Cap, gown, stole and tassel: what's what?",
      paragraphs: [
        "The **gown** is the long robe, usually black, but many schools use their own colours. The **mortarboard** is the flat, square cap, with a **tassel** that traditionally moves from right to left when the degree is conferred. A **stole** is a coloured sash worn around the neck, often showing honours, a society or a subject. A **hood** draped over the back shows the level of degree at many universities.",
        "The app always adds the gown and mortarboard, and often a coloured stole as in our example. Hoods and the exact colours of your institution vary too much to copy, so the result is a typical graduation look rather than your school's official regalia.",
      ],
    },
    {
      heading: "Graduation photo, headshot or yearbook?",
      paragraphs: [
        "A **graduation photo** celebrates the milestone: cap, gown, diploma and a proud smile. A [professional headshot](/creative/professional-headshot) is what you'll want next, for job applications and LinkedIn, with business clothes and a clean backdrop. A [90s yearbook photo](/creative/90s-yearbook-photo) is a fun throwback rather than a real record. Many graduates make all three from the same selfie: one to celebrate, one to get hired, one to laugh about.",
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `Each graduation portrait uses ${COST}, and you're only charged when it's made. Credit packs start at ${PACK_FROM} and never expire. If there's a free trial in your country, it shows above the upload.`,
        "Your photo is sent to fal.ai, the provider that runs our image models, to create the portrait. It isn't used to train AI and it isn't sold. Your portraits are saved in My Creations, where you can download or delete them at any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a graduation photo with AI?", a: "Upload a clear, front-facing photo, choose a gown colour or leave Auto, and press Generate. You get a cap-and-gown portrait in under a minute." },
    { q: "Can I choose my school's gown colour?", a: "Yes. Pick Black, Navy, Red, Royal blue or Green. Auto lets the app choose." },
    { q: "Will my face stay the same?", a: "Yes. Your face and identity are kept exactly; only your clothes, pose and background change." },
    { q: "Does it add my university's logo?", a: "No. The campus and regalia are generic, with no real school crests." },
    { q: "Can I add my name and degree?", a: "Yes, afterwards. Add a line such as your name and year with the free watermark tool, or use a design app for more text." },
    { q: "Does it work for kids' graduations?", a: "Yes. It's popular for kindergarten and school leavers. Use a recent, clear photo of the child." },
    { q: "How much does it cost?", a: `${COST} per portrait, charged only when it's made. Packs start at ${PACK_FROM}; a free trial, where running, covers your first.` },
    { q: "Can I print it?", a: "Yes. Upscale it 2× or 4× and print at 8 × 10 inches or larger." },
    { q: "Can I make a graduation photo for someone else?", a: "Yes, with their permission. It's a popular surprise for a graduate whose official photos haven't arrived yet." },
    { q: "Is there a watermark?", a: "No. Your graduation photo downloads at full size without a watermark." },
  ],
};

export default page;
