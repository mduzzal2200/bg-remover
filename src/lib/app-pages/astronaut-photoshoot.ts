import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Astronaut Photo: Put Yourself in a Space Suit in Orbit",
  h1: "AI Astronaut Photo Maker",
  metaDescription: "Put yourself in a realistic space suit on a spacewalk: helmet visor showing your face, Earth curving below and a sun flare. Your face stays the same.",
  tagline: "Upload a photo and see yourself on a spacewalk: a detailed white space suit, your face behind a clear helmet visor, a thumbs-up, and the Earth curving below you.",
  keywords: "ai astronaut photo, astronaut photo maker, space suit photo ai, put me in space, astronaut filter, spacewalk photo, astronaut portrait from photo",

  howToHeading: "How to make an astronaut photo of yourself",
  howTo: [
    { t: "Upload a clear photo", d: "Face the camera with your face well lit. Your clothes and background are replaced by the suit and space." },
    { t: "Choose framing, or keep Auto", d: "Auto gives the floating, waist-up spacewalk in our example. Head & shoulders shows more of your face in the visor; Full body shows the whole suit." },
    { t: "Generate and share", d: "Your space photo arrives in under a minute. Run it again for a different angle on the Earth and station." },
  ],
  exampleCaption: "A man in a black T-shirt sitting outdoors in a city becomes an astronaut on a spacewalk: a detailed white space suit, his face clear behind the helmet visor, a thumbs-up, the Earth curving below and a space station's solar panels catching the sun.",

  sections: [
    {
      heading: "What does the astronaut photo maker create?",
      paragraphs: [
        "It puts you into orbit. You're dressed in a detailed, realistic white space suit, with the helmet's clear visor showing your face. You float above the Earth, which curves blue and white below you, giving a confident thumbs-up, with a bright flare of sunlight and part of a space station's solar panels in the frame.",
        "Your face and identity are kept exactly the same. Everything around them, the suit, the helmet reflections, the light, the planet, is built to look like a photograph taken on a real spacewalk, which is what makes people do a double take.",
      ],
    },
    {
      heading: "Why does an astronaut photo work so well?",
      paragraphs: [
        "Almost everyone has wanted to be an astronaut at some point, and very few of us will ever go. A convincing space photo taps straight into that childhood dream, which is why it gets saved, shared and printed more than most novelty portraits.",
        "It also helps that spacewalk photos follow a pattern everyone recognises: the white suit, the reflective helmet, the black sky and the Earth's curve. The app follows that pattern closely, so even a casual selfie becomes an instantly readable image. Your face behind the visor is the twist that makes it personal.",
      ],
    },
    {
      heading: "Who makes astronaut photos?",
      items: [
        { t: "Parents of space-mad kids", d: "Turn your child into an astronaut for a bedroom poster, a space-themed birthday invitation or a thank-you card. It's one of the most popular uses of this app." },
        { t: "Teachers", d: "A class of astronaut portraits makes a brilliant display for a space topic or a science week. Ask parents' permission before using children's photos." },
        { t: "Space and science fans", d: "Celebrate a launch, a stargazing trip or a new telescope with a picture of yourself on a spacewalk." },
        { t: "Event and party hosts", d: "Space parties, retirement send-offs (\"off to new adventures\") and team milestones all suit an astronaut photo of the guest of honour." },
        { t: "Anyone after a fun profile picture", d: "An astronaut portrait is a cheerful talking point on social media, especially with Head & shoulders framing so your face fills the visor." },
      ],
    },
    {
      heading: "Framing and Strength",
      table: {
        head: ["Setting", "Choice", "What you'll see"],
        rows: [
          ["Framing", "Auto", "A floating waist-up spacewalk with the Earth below, as in our example"],
          ["Framing", "Head & shoulders", "A close-up of the helmet with your face filling the visor"],
          ["Framing", "Half body", "You from the waist up, suit details and thumbs-up clearly visible"],
          ["Framing", "Full body", "The whole suit and backpack floating in space"],
          ["Strength", "Subtle", "A lighter-touch result that stays closer to your original photo"],
          ["Strength", "Strong", "The full cinematic spacewalk effect"],
        ],
      },
      after: ["For a profile picture, use Head & shoulders. For a poster or a desktop wallpaper, choose Full body and a wide 16:9 shape."],
    },
    {
      heading: "Photo tips for a convincing astronaut",
      list: [
        "**Face the camera.** The helmet frames your face, so a front-facing photo looks most natural behind the visor.",
        "**Light your face evenly.** Sunlit space scenes are bright; a well-lit face blends in, a dark one looks pasted.",
        "**Avoid glasses if you can.** They sit awkwardly inside a helmet. If you always wear them, try with and without.",
        "**Hats and hoods come off.** The helmet replaces them, and hair under a cap can confuse the result.",
        "**For kids, use a recent, smiling photo.** A big grin behind the visor is what makes the poster.",
      ],
    },
    {
      heading: "Printing a space poster",
      paragraphs: [
        "Space photos look fantastic large. Before printing, enlarge the result 2× or 4× with the [image upscaler](/upscale), then print at A4, A3 or poster size. Choose a portrait shape such as 3:4 for a bedroom poster, or 16:9 for a wide, cinematic print.",
        "For a party, a printed astronaut portrait of the birthday child makes a great centrepiece, and a cropped version works as a sticker or a cake topper image.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Add real mission patches or agency logos on purpose.** The suit is a generic realistic space suit; any badge you see is decoration, not an official emblem.",
        "**Put you on the Moon or Mars.** The scene is a spacewalk in Earth orbit.",
        "**Keep your clothes.** The space suit replaces them completely.",
        "**Show the same view every time.** The angle of the Earth, the sun flare and the station change with each run.",
      ],
    },
    {
      heading: "More adventurous portraits",
      paragraphs: [
        "Want to save the world instead of orbit it? The [superhero costume maker](/creative/superhero-costume) gives you a cape and a city skyline. For a neon sci-fi look, the [cyberpunk avatar](/creative/cyberpunk-avatar) app lights you up in pink and cyan. And for a retro game version of yourself, try the [pixel art avatar maker](/creative/pixel-art-avatar).",
      ],
    },
    {
      heading: "What's on a real spacewalk, and what does the AI include?",
      paragraphs: [
        "Astronauts on a spacewalk wear a pressurised suit with a hard upper torso, a life-support backpack, thick gloves and a helmet with a gold-tinted sun visor that can be pulled down over a clear inner visor. They're tethered to the station and move hand over hand along rails. The Earth below fills a huge part of the view, and sunlight is intensely bright and white, with black shadows.",
        "The app recreates the parts that make a photo read instantly as a spacewalk: the bulky white suit with its seams and connectors, a clear visor so your face shows, the curve of the Earth with clouds and blue oceans, a hard sun flare and a glimpse of solar panels. It leaves the gold visor up, because a mirrored visor would hide the most important part of the picture: you.",
      ],
    },
    {
      heading: "Ideas for a space-themed party or project",
      items: [
        { t: "Mission badges for guests", d: "Make an astronaut photo of each child coming to the party, print them small and pin them on as \"crew\" badges." },
        { t: "A school space project", d: "Pair an astronaut portrait with facts about a real mission. It makes a poster stand out on the wall." },
        { t: "A countdown invite", d: "Put the photo on an invitation with \"Launching on Saturday at 3 pm\". Add the text in the [free photo editor](/editor)." },
        { t: "A thank-you card", d: "Send guests a card with the birthday child's astronaut photo and a \"Thanks for coming aboard\" message." },
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `An astronaut photo uses ${COST}, only when it's made. Credit packs start at ${PACK_FROM} and never expire. When a free trial is available in your country, the box above the upload says so.`,
        "We send your photo to fal.ai, the image-model service behind the app, to create the space scene. It isn't used for AI training and isn't sold to anyone. Your results stay in My Creations until you delete them.",
      ],
    },
  ],

  faq: [
    { q: "How do I make an astronaut photo of myself?", a: "Upload a clear, front-facing photo, keep Framing on Auto and press Generate. You get a realistic spacewalk photo with your face in the helmet in under a minute." },
    { q: "Will my face be visible?", a: "Yes. The helmet's clear visor shows your face, which is kept exactly the same." },
    { q: "Can I make one for my child?", a: "Yes. It's a favourite for kids' posters and space-themed party invitations. Use a recent, well-lit photo of their face." },
    { q: "Is it realistic?", a: "Yes. The suit, the Earth and the light are built to look like a real photograph of a spacewalk." },
    { q: "Can I be on the Moon instead?", a: "Not in this app. It always creates a spacewalk above the Earth." },
    { q: "What's the best photo to use?", a: "A front-facing photo with your face clearly lit, no hat and ideally no glasses." },
    { q: "How much does it cost?", a: `${COST} per photo, charged only when it's made. Packs start at ${PACK_FROM}; a free trial, where running, covers the first.` },
    { q: "Can I print it as a poster?", a: "Yes. Upscale it 2× or 4× first, then print at A3 or poster size." },
    { q: "Can I put my whole family in space?", a: "Each person works best in a photo of their own. Make one astronaut photo per family member with the same settings for a matching crew." },
    { q: "Can I keep my glasses on?", a: "You can, but glasses can look odd inside a helmet. Try with and without, and keep the version you prefer." },
    { q: "Does it work with a photo of a baby or toddler?", a: "It works best with a face that's clearly visible and facing the camera. For very young children, use a photo where they're sitting up and looking at you." },
    { q: "Is there a watermark?", a: "No. The astronaut photo downloads at full size with no watermark." },
  ],
};

export default page;
