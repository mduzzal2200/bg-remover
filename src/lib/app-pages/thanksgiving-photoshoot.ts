import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Thanksgiving Photo: Cosy Fall Portrait at the Table",
  h1: "AI Thanksgiving Photo Maker",
  metaDescription: "Turn a selfie into a cosy Thanksgiving portrait: a rust knit sweater, a warm mug, a harvest table with pie, pumpkins and candles, and golden fall light.",
  tagline: "Upload a selfie and sit down at a warm Thanksgiving table: a chunky rust-orange knit, a mug held in both hands, roast turkey, pumpkin pie, little pumpkins, candles and autumn leaves in golden light.",
  keywords: "ai thanksgiving photo, thanksgiving photo maker, thanksgiving portrait ai, fall photoshoot ai, friendsgiving photo, autumn portrait from selfie, thanksgiving card photo",

  howToHeading: "How to make a Thanksgiving photo with AI",
  howTo: [
    { t: "Upload a clear selfie", d: "Look straight at the lens near a window. Whatever you're wearing is swapped for autumn knitwear, and the table is set for you." },
    { t: "Keep Scene on Auto for the harvest table", d: "Auto gives the dinner-table portrait in our example. By the fire, At the table and Studio suit Thanksgiving too." },
    { t: "Generate and share", d: "Your autumn portrait is ready in under a minute, for a card, a group chat or a profile picture." },
  ],
  exampleCaption: "A selfie in a cream sweater becomes a cosy Thanksgiving portrait: a rust-orange chunky knit, a warm mug held in both hands and a smile, at a rustic table with pumpkin pie, small pumpkins and lit candles, with autumn leaves, warm lights and a \"Give Thanks\" sign behind.",

  sections: [
    {
      heading: "What does the Thanksgiving photo maker create?",
      paragraphs: [
        "It puts you at the heart of a Thanksgiving gathering. The portrait shows you from the waist up, wrapped in a rust-orange chunky knit sweater, holding a warm mug in both hands with a warm smile, seated at a rustic dinner table set with a roast turkey, pumpkin pie, small pumpkins and lit candles, with autumn leaves and warm lights behind you.",
        "The light is soft and golden and the mood is a family gathering. You still look exactly like yourself, and the image is designed to pass for like a real photograph, not an illustration.",
      ],
    },
    {
      heading: "Why make your Thanksgiving photo in advance?",
      paragraphs: [
        "Thanksgiving is all about the gathering, which is exactly why nobody gets a good photo of themselves. The cook is in the kitchen, guests are arriving, the light is fading by mid-afternoon and the group photo always has someone mid-blink.",
        "An AI portrait gives you the warm, polished picture without any of that. Make it before the day for a card or an invitation, or after the day for a post. It's also a lovely option for anyone celebrating far from family or hosting a Friendsgiving where the table won't look quite this styled.",
      ],
    },
    {
      heading: "Which scene suits Thanksgiving?",
      table: {
        head: ["Scene", "What you'll get", "For Thanksgiving?"],
        rows: [
          ["Auto", "The harvest dinner table, as in our example", "The best choice"],
          ["At the table", "A laid festive table with candles and the meal", "Great"],
          ["By the fire", "A lit fireplace and warm, low light", "Great for a cosy evening feel"],
          ["Studio", "A simple seasonal backdrop with clean light", "Good for a portrait-style card"],
          ["By the tree", "A decorated tree with string lights and gifts", "More Christmas than Thanksgiving"],
          ["Outside in the snow", "Fresh snow and overcast winter light", "More winter than autumn"],
        ],
      },
      after: ["The scene choices are shared with our Christmas app, so two of them lean wintry. Stick to Auto, At the table or By the fire for an autumn look."],
    },
    {
      heading: "Who makes Thanksgiving portraits?",
      items: [
        { t: "Hosts", d: "Put your portrait on the invitation or the \"save the date\" for dinner. It sets the cosy tone before anyone arrives." },
        { t: "Families sending fall cards", d: "Make a portrait of each family member with the same scene for a matching set of autumn cards." },
        { t: "Friendsgiving groups", d: "Post a portrait each in the group chat, or use them as place cards at the table." },
        { t: "People away from home", d: "Students, travellers and anyone working over the holiday can still share a warm Thanksgiving picture." },
        { t: "Small businesses", d: "Cafés, bakeries and shops can post a seasonal thank-you to customers with the owner's own face." },
      ],
    },
    {
      heading: "Tips for a warm autumn portrait",
      list: [
        "**Warm or neutral light.** A photo taken near a window or under warm lamps blends best with the golden scene.",
        "**Front-facing and smiling.** A warm smile fits the mood, and the app keeps your expression.",
        "**Shoulders visible.** The sweater and the mug are built around you; a tight face crop leaves less to work with.",
        "**Simple backgrounds.** The table and the leaves replace your background more naturally when it's plain.",
        "**Run it a couple of times.** The sweater, table and props change slightly each time.",
      ],
    },
    {
      heading: "Turning it into a card or invite",
      paragraphs: [
        "Add \"Happy Thanksgiving\", \"Grateful for you\" or your dinner details with the text tool in the [free photo editor](/editor). For printing, enlarge it 2× in the [image upscaler](/upscale) and print at 5 × 7 inches.",
        "Want the greeting lettered for you, or the whole family at the table in one picture? The [Thanksgiving festival page](/festivals/thanksgiving) has a greeting card app, a family photo app and a harvest-table background app.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Put the whole family in one portrait.** This app makes one person; use the family photo app on the [Thanksgiving page](/festivals/thanksgiving) for a group.",
        "**Show your own dining room.** The table and room are invented.",
        "**Change the sweater colour.** The default is rust orange. For a different outfit, use the [outfit changer](/creative/outfit-generator).",
        "**Write your message.** Add text afterwards in the editor.",
      ],
    },
    {
      heading: "More seasonal portraits",
      paragraphs: [
        "When December comes, the [Christmas photo maker](/creative/christmas-photo) gives you a tree-and-fireplace portrait. For an elegant autumn look without the table, try the [old money aesthetic](/creative/old-money-aesthetic) with a camel coat in a château garden. And the [festivals hub](/festivals) has photo apps for 40 celebrations around the world.",
      ],
    },
    {
      heading: "What makes a Thanksgiving photo feel cosy?",
      paragraphs: [
        "Autumn photos look warm because of three things working together. **Colour**: rust, burnt orange, mustard, deep red and cream, the colours of fallen leaves and pumpkins. **Texture**: chunky knits, wood grain, linen napkins and the rough skin of a gourd all catch soft light beautifully. **Light**: low, golden light from candles, lamps or an afternoon window, with gentle shadows rather than flat brightness.",
        "The app builds the portrait from exactly these ingredients, which is why a plain selfie in a cream sweater can turn into a picture that feels like a slow evening with people you love. If you want to push the mood further, run it a couple of times and keep the version with the most candlelight.",
      ],
    },
    {
      heading: "A plan for a Friendsgiving or family set",
      items: [
        { t: "1. Collect selfies", d: "Ask everyone to send a clear, front-facing selfie taken near a window. It doesn't matter what they're wearing." },
        { t: "2. Use the same scene for all", d: "Keep Scene on Auto or At the table for everyone, so the portraits match like a set taken on the same evening." },
        { t: "3. Make them the same shape", d: "Pick 4:5 for every portrait so they line up in a carousel or a collage." },
        { t: "4. Share or print", d: "Post them together, or print small copies as place cards with each person's name added in the editor." },
      ],
    },
    {
      heading: "Ideas for your Thanksgiving portrait",
      items: [
        { t: "A gratitude post", d: "Share the portrait with three things you're thankful for this year in the caption." },
        { t: "An invitation", d: "Put the host's portrait on the dinner invite with the time, the address and what to bring." },
        { t: "Place cards", d: "Print small portraits of each guest and set them at their seats." },
        { t: "A seasonal profile picture", d: "Use the portrait as your profile photo for November, cropped square." },
      ],
    },
    {
      heading: "Price and privacy",
      paragraphs: [
        `Every autumn portrait uses ${COST}; a failed attempt is free. Credits are sold in packs from ${PACK_FROM} that don't expire, so leftovers carry over to Christmas. Look above the upload to see whether your country has a trial right now.`,
        "fal.ai, the service that runs our image models, receives your selfie only to create the harvest-table picture. Nothing is used to train AI or sold on. Delete the selfie and the portrait from My Creations whenever you like.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a Thanksgiving photo with AI?", a: "Add a selfie, leave Scene on Auto and tap Generate. A warm harvest-table portrait in under a minute." },
    { q: "What will I wear?", a: "A rust-orange chunky knit sweater, holding a warm mug, by default." },
    { q: "Will my face stay the same?", a: "Yes. Only the sweater, the dinner table and the autumn light are new; your features are left as they are." },
    { q: "Which scene should I pick?", a: "Auto, At the table or By the fire. By the tree and Outside in the snow look more like Christmas or winter." },
    { q: "Can I make a family Thanksgiving photo?", a: "This app makes one person. Use the family photo app on the Thanksgiving festival page for everyone together." },
    { q: "Does it work for Friendsgiving?", a: "Yes. Make a portrait for each friend with the same scene for a matching set." },
    { q: "How much does it cost?", a: `${COST} each, charged once the portrait arrives. The smallest pack is ${PACK_FROM}.` },
    { q: "Can I add text?", a: "Yes. Add \"Happy Thanksgiving\" or your dinner details in the free photo editor, or use the Thanksgiving greeting card app on the festival page." },
    { q: "Can I use it after Thanksgiving?", a: "Yes. It works any time of year, and the autumn look suits fall posts, harvest festivals and cosy-season profile pictures too." },
    { q: "Is there a watermark?", a: "No. The Thanksgiving portrait is yours at full size, with nothing printed over it." },
  ],
};

export default page;
