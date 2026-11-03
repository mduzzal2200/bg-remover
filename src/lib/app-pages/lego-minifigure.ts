import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Lego Minifigure Maker: Turn a Photo Into a Brick Figure",
  h1: "AI Lego Minifigure Maker",
  metaDescription: "Turn your photo into a glossy brick-toy minifigure in your real outfit's colours, boxed with tiny accessories and shot like a real product photo.",
  tagline: "Upload a photo and see yourself as a glossy plastic brick minifigure: cylinder head, blocky body, your outfit in bright plastic, standing in a printed toy box with tiny accessories.",
  keywords: "lego minifigure maker, ai lego figure, turn yourself into a lego, custom minifigure from photo, lego character maker, minifig generator, lego yourself ai",

  howToHeading: "How to turn yourself into a brick minifigure",
  howTo: [
    { t: "Upload a photo showing your outfit", d: "Waist-up or full body works better than a tight face crop: the minifigure wears your clothes, so the app needs to see them." },
    { t: "Choose how it's presented", d: "In its box is the shelf-ready toy look. On a display base, On a desk and In a scene show the figure out of its packaging." },
    { t: "Generate and download", d: "In under a minute you have a product photo of your minifigure. Run it again for different accessories." },
  ],
  exampleCaption: "A selfie of a woman with long brown hair in a cream sweater becomes a glossy brick-toy minifigure in a printed box: the same hair and sweater in plastic, with tiny accessories in the tray beside her, a laptop, a camera, a handbag and a pot plant.",

  sections: [
    {
      heading: "What does the minifigure maker create?",
      paragraphs: [
        "It turns you into a glossy plastic minifigure in the classic brick-toy style: a cylindrical head with a printed face, simplified blocky body proportions, clip hands and an outfit in bright primary plastic that matches the colours of your real clothes. Your hair becomes a moulded hairpiece in your colour and style.",
        "In the default presentation the figure stands in printed toy packaging, with a clear tray of small accessories beside it, and the whole thing is photographed with studio product lighting. It's built to look like a real photo of a physical plastic toy, sharp and shiny, not a flat drawing.",
        "We use \"Lego\" because it's what people search for. PixelShine isn't connected with the LEGO Group, and the box is a toy-style design, not official packaging.",
      ],
    },
    {
      heading: "Why minifigures are so recognisable",
      paragraphs: [
        "Brick-toy minifigures have barely changed shape in decades: a yellow or skin-toned cylinder head, a simple printed face, a trapezoid torso, square legs and C-shaped hands. That simplicity is the joke and the charm. Any person, from a chef to an astronaut, becomes the same little figure with a different printed outfit and hairpiece.",
        "That's why turning yourself into one works so well. People recognise you from just a few clues, your hair, your glasses, your favourite jumper, while the figure stays unmistakably a toy. The accessories add the personality: a camera for the photographer, a laptop for the office worker, a coffee cup for everyone.",
      ],
    },
    {
      heading: "Who makes a custom minifigure?",
      items: [
        { t: "Brick-toy fans", d: "See yourself as a minifigure before building a real custom one from parts, or just for the fun of joining the collection." },
        { t: "Gift makers", d: "A minifigure version of a friend, a partner or a colleague is a sweet, funny birthday or leaving-card picture." },
        { t: "Parents and kids", d: "Children love seeing themselves, their siblings and their parents as toys. Make a whole family set." },
        { t: "Teams and offices", d: "Turn every team member into a minifigure for an about-us page, a slide or a welcome post for new starters." },
        { t: "Teachers", d: "A class of minifigures makes a playful display, and the boxed version is fun for a \"what's my job?\" lesson." },
      ],
    },
    {
      heading: "Four ways to show your figure",
      table: {
        head: ["Presentation", "What you'll see"],
        rows: [
          ["In its box", "The figure in printed toy packaging with accessories, as in our example"],
          ["On a display base", "Your minifigure standing alone on a little round stand, photographed on plain studio paper"],
          ["On a desk", "Your minifigure next to a mug, a pen and a keyboard, so you can see how small it is"],
          ["In a scene", "Your minifigure inside a little built world, like a brick café, a street or an office"],
        ],
      },
      after: ["In its box is the trend look. On a desk makes people do a double take, because it looks like you really own a toy of yourself."],
    },
    {
      heading: "How to get a minifigure that looks like you",
      list: [
        "**Show your outfit and pose.** Waist-up or full-body photos give the figure your real clothes.",
        "**Bold, simple colours work best.** A red jumper or a blue jacket becomes clean plastic; fine patterns get simplified.",
        "**Keep signature items.** Glasses, a beard, a hat you always wear: these are what make a tiny printed face look like you.",
        "**Clear, even light.** It helps the app read your hair colour and clothes correctly.",
        "**Try a few runs.** Accessories change every time; one set will fit you best.",
      ],
    },
    {
      heading: "Minifigure, action figure, doll or vinyl?",
      paragraphs: [
        "PixelShine has four toy styles, and posting the same photo in all four is a popular way to join the trend:",
      ],
      table: {
        head: ["Toy", "Feels like", "App"],
        rows: [
          ["Brick minifigure", "Blocky, glossy, simple printed face", "This app"],
          ["Action figure", "A lifelike sculpted collectible with real proportions", "[AI action figure](/creative/3d-figurine)"],
          ["Fashion doll", "A glamorous doll in a bright pink retail box", "[Barbie box photo](/creative/barbie-box)"],
          ["Vinyl collectible", "A big round head with tiny black eyes", "[Funko Pop yourself](/creative/funko-pop-figure)"],
        ],
      },
    },
    {
      heading: "What it won't do",
      list: [
        "**Use official branding or sets.** The packaging is a toy-style design; no real logos or licensed themes are added on purpose.",
        "**Make a real figure.** It's a photo of a toy that doesn't exist. For a physical figure, use it as a guide when buying parts.",
        "**Copy fine patterns.** Checks, florals and printed slogans on your clothes become blocks of plastic colour.",
        "**Get every word on the packaging right.** Printed words on the box are decoration and can come out garbled; try again if one bothers you.",
      ],
    },
    {
      heading: "Ideas for your minifigure",
      items: [
        { t: "A team poster", d: "Make one figure per person with the same presentation and arrange them in a row: \"Collect the whole team\"." },
        { t: "A job announcement", d: "Starting a new job? Post your minifigure with the accessories of your new role." },
        { t: "A birthday invite", d: "Put the birthday child's minifigure on an invitation made in a design app, with the date and place." },
      ],
    },
    {
      heading: "Minifigure ideas for jobs and hobbies",
      items: [
        { t: "The office worker", d: "Wear a shirt or blazer and sit near your laptop. The figure often comes with a tiny computer and a coffee cup." },
        { t: "The chef or baker", d: "An apron in your photo becomes printed plastic, and kitchen tools may join the accessories." },
        { t: "The gamer", d: "Hold a controller or wear a headset for a figure that looks ready for a tournament." },
        { t: "The photographer", d: "Hold a camera and it usually turns into a little plastic one in the figure's hand or tray." },
        { t: "The gardener or outdoors type", d: "A sunhat, a plant or hiking gear in the photo gives the figure an outdoorsy kit." },
      ],
      after: ["The app chooses accessories from what it sees, so a prop in your hand is the best way to steer them."],
    },
    {
      heading: "Why does my minifigure look a bit different from me?",
      paragraphs: [
        "Brick minifigures can only carry a few clues: a hairpiece, a printed face, the colours of the outfit and maybe glasses or a beard. Everything else, your face shape, your height, the fit of your clothes, is the same for every figure. So the likeness comes from those few details being right, not from realistic features.",
        "If your figure doesn't feel like you, check those clues. Is the hair colour right? Are your glasses there? Is the outfit in your colours? A photo with clearer light and your hair and clothes fully visible usually fixes it. Running it again also gives a fresh face print and hairpiece.",
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `Each brick figure costs ${COST}, charged when the image is finished and not before. Packs start at ${PACK_FROM}; the credits don't expire. Trials vary by country, and if yours has one, the upload box says so.`,
        "fal.ai's image models build the figure from your photo, and they're the only ones who see it. We don't sell photos or use them for AI training. Remove any figure from My Creations at any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I turn myself into a Lego minifigure?", a: "Upload a waist-up or full-body photo, keep Presentation on In its box and press Generate. You get a boxed brick-toy figure of yourself in under a minute." },
    { q: "Will the minifigure look like me?", a: "Yes, in toy form. Your hair, outfit colours, glasses and facial hair are kept on the figure." },
    { q: "Can I show it without the box?", a: "Yes. Pick the display stand, the desk or a little brick-built scene under Presentation." },
    { q: "Is this an official LEGO product?", a: "No. It's a brick-toy style picture. PixelShine isn't connected with the LEGO Group." },
    { q: "Can I make my whole family?", a: "Yes. Make one figure per person from their own photo, using the same presentation for a matching set." },
    { q: "Why does my outfit look simpler?", a: "Minifigures have simple printed outfits, so patterns and logos are turned into clean plastic colours." },
    { q: "How much does it cost?", a: `${COST} for each minifigure picture, once it's made. The first pack is ${PACK_FROM}.` },
    { q: "What photo works best?", a: "A clear, waist-up or full-body photo with bold clothes and your face visible." },
    { q: "Can I make minifigures of my kids?", a: "Yes. Children love seeing themselves as toys. Use a clear, recent photo where their outfit is visible." },
    { q: "Is there a watermark?", a: "No. Your minifigure arrives at full size without any mark." },
  ],
};

export default page;
