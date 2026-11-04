import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Claymation Filter: Turn Any Photo Into Clay Stop-Motion",
  h1: "AI Claymation Photo Maker",
  metaDescription: "Turn a photo into a handmade stop-motion clay scene: visible clay texture, fingerprint marks and miniature-set lighting. Everything in it modelled in clay.",
  tagline: "Upload a photo and get it back as a frame from a stop-motion film: you, your clothes and the room around you, all modelled in soft clay with fingerprint marks and miniature-set light.",
  keywords: "claymation filter, ai claymation, clay stop motion photo, photo to claymation, clay portrait ai, plasticine filter, stop motion style picture",

  howToHeading: "How to turn a photo into claymation",
  howTo: [
    { t: "Upload a photo with something going on", d: "A selfie works, but a photo of you doing something, cooking, painting, playing guitar, makes a far more charming clay scene." },
    { t: "Choose framing and strength", d: "Auto keeps your framing. Strong exaggerates the rounded clay features; Subtle keeps proportions closer to the photo." },
    { t: "Generate and look closely", d: "In under a minute you get the clay version. Zoom in: the fingerprints, the slightly uneven edges and the tiny props are the best part." },
  ],
  exampleCaption: "A woman shaping clay at a pottery wheel in a cosy studio becomes a stop-motion clay scene: her face, yellow cardigan, denim apron, the wheel, shelves of pots and the chalkboard reading \"Good Ideas Take Shape\" are all modelled in clay.",

  sections: [
    {
      heading: "What does the claymation filter do?",
      paragraphs: [
        "It rebuilds your photo as if it were a set from a stop-motion film. Not just your face: **everything** in the picture is modelled in clay. Your hair becomes soft sculpted strands, your clothes become thick folds of plasticine, and the room around you, shelves, plants, a chalkboard, a cup on the table, turns into a miniature handmade set.",
        "The look has the details that make real claymation charming: visible clay texture, soft fingerprint-like marks, slightly uneven edges, gently exaggerated rounded features and the matte, even lighting of a small film set. Your likeness is kept, so the clay character is clearly you, the way a good model-maker would sculpt you.",
      ],
    },
    {
      heading: "Why does clay look so charming?",
      paragraphs: [
        "Stop-motion animators move clay figures a tiny bit at a time and photograph each step. Because the figures are handmade, they're never perfect: you can see where a thumb pressed, where two pieces of clay meet, where a surface is a little lumpy. Those marks tell your eye that a person made this by hand, and that's why clay films feel warm in a way smooth computer animation doesn't.",
        "The sets matter too. Everything is built at miniature scale, so even a kitchen or a bedroom looks cosy and toy-like. Lighting is soft and controlled, because hot lights and shiny surfaces would make clay look greasy. This app adds all of that to your photo on purpose, which is what separates it from a generic cartoon filter.",
      ],
    },
    {
      heading: "Who uses a claymation photo?",
      items: [
        { t: "Makers and small businesses", d: "Potters, bakers, florists and crafters can turn a photo of themselves at work into a clay scene for their shop profile or a post. It suits anyone whose business is about handmade things." },
        { t: "Families", d: "A clay version of the family on the sofa, or a child with their favourite toy, is a lovely surprise and prints well as a card." },
        { t: "Pet owners", d: "Dogs and cats look wonderful in clay: the fur becomes sculpted tufts. Upload a photo of your pet on its own or with you." },
        { t: "Teachers and presenters", d: "A clay scene of yourself makes a friendly title slide or classroom display, and it's a fun way to introduce stop-motion to students." },
        { t: "Fans of animation", d: "If you love handmade animated films, this lets you see yourself as a character on one of those sets, without spending weeks sculpting." },
      ],
    },
    {
      heading: "Which settings should you use?",
      table: {
        head: ["Setting", "Choice", "What changes"],
        rows: [
          ["Framing", "Auto", "Keeps your photo's framing, so the whole scene is modelled"],
          ["Framing", "Head & shoulders", "A close clay portrait; less of the set is shown"],
          ["Framing", "Half body", "You from the waist up, with your hands and what you're holding"],
          ["Framing", "Full body", "Your whole figure, like a full puppet on its set"],
          ["Strength", "Subtle", "Clay texture over proportions close to your photo"],
          ["Strength", "Strong", "Rounder, chunkier clay features, the classic stop-motion puppet look"],
        ],
      },
      after: ["For a scene like the pottery studio in our example, keep Auto framing so the props and the room come along. For a profile picture, choose Head & shoulders."],
    },
    {
      heading: "Which photos make the best clay scenes?",
      list: [
        "**Photos with props and activity.** Cooking, gardening, painting, a guitar, a cup of coffee: objects become the little handmade details that make the scene.",
        "**Cosy, simple rooms.** A kitchen, a workshop or a living room turns into a convincing miniature set. A very cluttered room can become busy.",
        "**Clear, even light.** Soft daylight gives the cleanest clay surfaces. Strong coloured light makes the clay look tinted.",
        "**Faces you can see.** The likeness comes from your face, so keep it facing the camera and uncovered.",
        "**Groups and pets work.** Everyone in the photo becomes clay. Fewer people means each face gets more detail.",
      ],
    },
    {
      heading: "What can you make with it?",
      items: [
        { t: "A shop or studio banner", d: "A clay scene of you at your workbench sets the tone for a handmade brand. Upscale it in the [image upscaler](/upscale) for a sharp website banner." },
        { t: "Greeting cards", d: "Clay figures feel like a gift already. A clay version of the family works for birthdays, anniversaries and holiday cards." },
        { t: "A storyboard frame", d: "If you're planning a real stop-motion project, a clay version of a photo is a quick way to picture the set and the characters." },
        { t: "A reveal video", d: "Cut from your real photo to the clay scene. Viewers love spotting which objects turned into which bits of clay." },
      ],
    },
    {
      heading: "What it can't do",
      list: [
        "**Make a moving film.** It creates one still frame in a stop-motion style, not an animation.",
        "**Copy a particular studio's characters.** It sculpts you in a general claymation style, not as a character from an existing film.",
        "**Keep tiny writing perfectly.** Signs and labels become clay too; short words often survive, as in our example, but long text may not.",
        "**Give the same result twice.** Each run sculpts a fresh version, so make a few and keep your favourite.",
      ],
    },
    {
      heading: "Other handmade and cartoon looks",
      paragraphs: [
        "Prefer a smooth, polished 3D look? The [Pixar-style avatar maker](/creative/pixar-avatar) gives you big animated-film eyes and soft shading. To become a toy rather than a clay puppet, try the [Lego minifigure maker](/creative/lego-minifigure) or the [3D action figure](/creative/3d-figurine) app. And for a hand-painted feel, the [Ghibli-style](/creative/ghibli-style) app paints your photo like a frame from a classic animated film.",
      ],
    },
    {
      heading: "How is real claymation made, and what does the AI copy?",
      paragraphs: [
        "On a real stop-motion film, model-makers sculpt each character over a wire skeleton, then build the sets at a small scale: a kitchen might be the size of a shoebox. Animators move the puppets a fraction at a time and take one photo per movement, twenty-four photos for every second of film. A short scene can take a week.",
        "The AI doesn't animate anything, but it copies what those films look like in a single frame: the soft, slightly squashy shapes, surfaces that show thumb marks and tool lines, colours that are a little chalky rather than glossy, and miniature props with just enough detail. It also copies the lighting of a small set, which is gentle and even, so nothing looks shiny or harsh.",
      ],
    },
    {
      heading: "Claymation, 3D cartoon or toy figure?",
      table: {
        head: ["Look", "Feels like", "App"],
        rows: [
          ["Claymation", "Handmade, soft, fingerprints and all; the whole scene is clay", "This app"],
          ["3D animated film", "Smooth, polished, big expressive eyes", "[Pixar-style avatar](/creative/pixar-avatar)"],
          ["Plastic toy", "Glossy, blocky, in a box", "[Lego minifigure](/creative/lego-minifigure)"],
          ["Vinyl collectible", "Big head, small body, dot eyes", "[Funko Pop yourself](/creative/funko-pop-figure)"],
        ],
      },
    },
    {
      heading: "Price and privacy",
      paragraphs: [
        `Each clay scene uses ${COST}, and you're only charged if it's made. Credit packs start at ${PACK_FROM} and don't expire. When a free trial is on in your country, the box above the upload tells you.`,
        "Your photo goes to fal.ai, the company that runs our image models, so the clay version can be made. It isn't used for AI training and isn't sold. Both pictures are stored in My Creations, where you can delete them at any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I turn a photo into claymation?", a: "Upload a photo, leave Framing and Strength on Auto and press Generate. You get a stop-motion clay version of the whole scene in under a minute." },
    { q: "Does it turn the background into clay too?", a: "Yes. Everything in the photo, you, your clothes, the objects and the room, is modelled in clay, like a miniature film set." },
    { q: "Will the clay figure look like me?", a: "Yes. Your face, hair and expression are kept, sculpted in clay. Subtle strength stays closest to your real proportions." },
    { q: "Does it work on pets?", a: "Yes. Fur turns into sculpted clay tufts, and pets often make the most charming results." },
    { q: "Can I make a group photo into claymation?", a: "Yes. Everyone in the photo becomes clay. Smaller groups give each face more detail." },
    { q: "Is it an animation?", a: "No. It's one still image in a stop-motion style. You can use several to build a slideshow or a reveal video." },
    { q: "How much does it cost?", a: `${COST} per image, only when it's made. Packs start at ${PACK_FROM}; a free trial, where available, covers your first one.` },
    { q: "What photo works best?", a: "A clearly lit photo where your face is visible and you're doing something, with a few props around you." },
    { q: "Why do some objects look strange?", a: "Very small or busy objects can be simplified or merged when they're turned into clay. A tidier scene with a few clear props gives the neatest result." },
    { q: "Is there a watermark?", a: "No. Your clay scene downloads at full size without a watermark." },
  ],
};

export default page;
