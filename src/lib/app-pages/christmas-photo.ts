import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Christmas Photo Maker: Cosy Holiday Portrait From Selfie",
  h1: "AI Christmas Photo Maker",
  metaDescription: "Turn a selfie into a cosy Christmas portrait: green velvet, a decorated tree, a fireplace with stockings and golden bokeh. For cards and posts.",
  tagline: "Upload a selfie and get a warm Christmas portrait: deep green velvet or a cosy knit, a twinkling tree, a fireplace hung with red stockings, wrapped gifts and soft golden bokeh.",
  keywords: "ai christmas photo, christmas photo maker, christmas portrait from selfie, holiday photo ai, christmas card photo, festive photo editor, christmas photoshoot ai",

  howToHeading: "How to make a Christmas photo with AI",
  howTo: [
    { t: "Upload a clear selfie", d: "Any everyday photo where your face is bright and clear. A hoodie on the sofa is fine; the velvet and the decorations come from the app." },
    { t: "Pick a scene, or keep Auto", d: "Auto gives the tree-and-fireplace portrait in our example. By the tree, By the fire, At the table, Outside in the snow and Studio are the others." },
    { t: "Generate and send", d: "Your Christmas portrait is ready in under a minute, ready for a card or a post." },
  ],
  exampleCaption: "A selfie in a grey sweatshirt becomes a cosy Christmas portrait: a deep green velvet top, chin resting on her hand with a joyful smile, beside a decorated tree with string lights, a fireplace hung with red stockings, wrapped gifts and a tartan blanket, in soft golden bokeh.",

  sections: [
    {
      heading: "What does the Christmas photo maker create?",
      paragraphs: [
        "It turns any selfie into the kind of warm, festive portrait that goes on a holiday card. You're framed from the waist up in a deep green velvet top or dress, or for men a cosy knit sweater in deep green or red, resting your chin on one hand with a joyful smile. Around you: a decorated Christmas tree with soft string lights, a fireplace hung with red stockings, wrapped gifts and a tartan blanket, with gentle golden bokeh.",
        "Your face and identity stay exactly the same. The picture is built to look like a real photograph from a cosy living room on Christmas Eve, not a sticker of a hat on your head.",
      ],
    },
    {
      heading: "Why make your Christmas photo with AI?",
      paragraphs: [
        "December is busy. Getting everyone dressed, finding a nicely decorated corner and catching the light before it's dark at four in the afternoon rarely happens before the cards need to go out. Professional holiday mini-sessions book up early and cost money.",
        "An AI Christmas portrait gives you a polished, warm picture in a minute, on your schedule. It's also a lovely option for people spending the holidays apart, far from home, or simply without a tree this year.",
      ],
    },
    {
      heading: "Choosing the scene",
      table: {
        head: ["Scene", "What you'll get"],
        rows: [
          ["Auto", "The tree, fireplace, stockings and gifts together, as in our example"],
          ["By the tree", "Beside a decorated tree with warm string lights and wrapped gifts"],
          ["By the fire", "By a lit fireplace with stockings and warm, low light"],
          ["At the table", "At a laid festive table with candles and the meal dressed"],
          ["Outside in the snow", "Outdoors in fresh snow with soft, overcast winter light"],
          ["Studio", "A simple festive studio backdrop with clean lighting, like a portrait session"],
        ],
      },
      after: ["For a matching family set, use the same scene for everyone. For Christmas Day dinner posts, At the table fits best."],
    },
    {
      heading: "Who makes AI Christmas photos?",
      items: [
        { t: "Families sending cards", d: "Make one portrait per family member with the same scene and put them together on a card, without a single group photo stand-off." },
        { t: "People far from home", d: "Students abroad, people working over the holidays and anyone celebrating alone can still send a festive picture home." },
        { t: "Couples", d: "Make a portrait each in matching scenes for a joint card, or a first-Christmas-together post." },
        { t: "Small businesses", d: "Shop owners, coaches and freelancers can post a warm seasonal greeting with their own face on it." },
        { t: "Office teams", d: "A festive portrait of each colleague makes a cheerful end-of-year slide or newsletter." },
      ],
    },
    {
      heading: "Tips for a card-worthy portrait",
      list: [
        "**Good light on your face.** Daylight from a window gives the most natural result in a warm, lamp-lit scene.",
        "**Indoor photos blend best.** The festive scene is cosy and indoors by default; an indoor selfie fits most naturally.",
        "**A real smile.** The app keeps your expression, and a warm smile suits a holiday card.",
        "**Hair down or loosely tied.** It looks natural with velvet and soft light.",
        "**Make a few.** Decorations, outfit and pose change each run; pick your favourite for the card.",
      ],
    },
    {
      heading: "Turning your portrait into a card",
      paragraphs: [
        "Write \"Merry Christmas\" or \"Happy Holidays from the Smiths\" across the picture in the [free photo editor](/editor). Ordering prints? A 2× pass through the [image upscaler](/upscale) keeps the fairy lights sharp at the standard 5 × 7 inch card size. Folded cards suit an upright 4:5 or 3:4 shape; a social post looks best square.",
        "Prefer a card with the greeting already lettered in? The [Christmas festival page](/festivals/christmas) has a greeting card app, plus a family photo and a festive background app.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Put several people in one portrait.** Each portrait is one person; make one each, or use the Christmas family photo app on the [festivals page](/festivals/christmas).",
        "**Show your real home.** The room and tree are invented.",
        "**Write your message.** Add text afterwards with a text tool.",
        "**Choose the outfit colour.** Women usually get deep green velvet, men a green or red knit. For another outfit, use the [outfit changer](/creative/outfit-generator).",
      ],
    },
    {
      heading: "More seasonal portraits",
      paragraphs: [
        "In November, the [Thanksgiving photo maker](/creative/thanksgiving-photoshoot) gives you a cosy autumn table. For other celebrations, the [festival photoshoot](/creative/festival-photoshoot) covers Diwali, Holi, Navratri, Eid, Onam and Pongal, and the [festivals hub](/festivals) has 40 festivals from around the world.",
      ],
    },
    {
      heading: "What makes a Christmas photo cosy rather than cheesy?",
      paragraphs: [
        "The best holiday portraits feel warm, not staged. Warm light is the biggest part of it: string lights, a fire and candles give skin a golden glow and turn the background into soft bokeh, those blurry circles of light. Rich textures help too, velvet, knitwear and tartan, and so does restraint: a few beautiful decorations look better than every bauble in the house.",
        "The app follows those rules. It keeps the light warm and low, the decorations classic, and the background softly out of focus, so the attention stays on you. That's why the result reads as a lovely photo rather than a novelty filter.",
      ],
    },
    {
      heading: "Shapes for Christmas cards and posts",
      table: {
        head: ["Use", "Shape to choose"],
        rows: [
          ["Folded card (5 × 7 inches)", "4:5 or 3:4, upright"],
          ["Postcard (6 × 4 inches)", "3:2, landscape"],
          ["Instagram or Facebook post", "4:5"],
          ["Stories and WhatsApp status", "9:16"],
          ["Profile picture for December", "1:1"],
        ],
      },
      after: ["Pick the shape before you generate, so nothing important is cropped later."],
    },
    {
      heading: "Ideas beyond the Christmas card",
      items: [
        { t: "A December profile picture", d: "Swap your profile photo for the festive portrait for the month. Choose a 1:1 shape so your face fills the circle." },
        { t: "An advent of portraits", d: "Make a portrait of a different family member each day in December and post them as a countdown." },
        { t: "Gift tags and labels", d: "Print tiny versions of each person's portrait as tags on their presents, so nobody needs to read the label." },
        { t: "A thank-you after the holidays", d: "Send a portrait with a short thank-you note to the people who hosted you." },
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `A Christmas portrait costs ${COST}, and you pay nothing for a run that doesn't produce one. Packs from ${PACK_FROM} hold their credits through the season and beyond, which makes portraits for the whole family easy. Any trial in your country appears in the box above the upload.`,
        "We send the selfie to fal.ai's image models just long enough to make the portrait. It isn't kept for AI training and it's never sold. Portraits wait in My Creations for you to download or remove.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a Christmas photo with AI?", a: "Upload a clear selfie, keep Scene on Auto and press Generate. You get a cosy tree-and-fireplace portrait in under a minute." },
    { q: "Can I choose the scene?", a: "Yes. By the tree, By the fire, At the table, Outside in the snow or Studio." },
    { q: "Will my face stay the same?", a: "Yes. The tree, the fire and the festive outfit are added around you; your face isn't redrawn." },
    { q: "Can I make a family Christmas photo?", a: "Make one portrait per person with the same scene, or use the family photo app on the Christmas festival page for everyone in one picture." },
    { q: "Can I add a greeting?", a: "Yes. Type it in the free photo editor after downloading, or pick the Christmas greeting card app, which letters \"Merry Christmas\" onto the picture for you." },
    { q: "What will I wear?", a: "Women usually get a deep green velvet top or dress; men a cosy knit sweater in deep green or red." },
    { q: "How much does it cost?", a: `${COST} per Christmas portrait, only for ones that are made. A ${PACK_FROM} pack is enough for a small family.` },
    { q: "Can I print it as a card?", a: "Yes. Upscale it 2× first, then print at 5 × 7 inches." },
    { q: "When should I make my card photo?", a: "Early December, if you're printing. That leaves time to make a few versions, add your message and get the cards printed and posted." },
    { q: "Is there a watermark?", a: "No. Each holiday portrait downloads unmarked, so it's ready for the card." },
  ],
};

export default page;
