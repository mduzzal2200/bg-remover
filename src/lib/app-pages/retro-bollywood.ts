import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "Retro Bollywood Photo Editor: 90s Film Look From a Selfie",
  h1: "Retro 90s Bollywood Photo Editor",
  metaDescription: "Turn a selfie into a 90s Bollywood film still: a red silk saree, gold jhumkas, a heritage palace, warm golden haze and soft film grain. Still you.",
  tagline: "Upload a selfie and step into a 90s Hindi film: a red silk saree with a gold border, jhumkas and bangles, a heritage palace with roses, and the warm haze and grain of old film.",
  keywords: "retro bollywood photo, 90s bollywood photo editor, vintage bollywood filter, bollywood ai photo, 90s saree photo trend, retro bollywood look, bollywood film still ai",

  howToHeading: "How to get the retro Bollywood look on your photo",
  howTo: [
    { t: "Upload a portrait", d: "A clear selfie with your face well lit. You can be in a T-shirt at home; the saree, jewellery and palace are added." },
    { t: "Set framing and strength", d: "Auto gives the close, chin-on-hand film still in our example. Half body shows more of the saree; Strong deepens the grain and colour grade." },
    { t: "Generate and pick your still", d: "Each run changes the pose and the light a little. Keep the frame that looks most like a movie poster." },
  ],
  exampleCaption: "A selfie in a white top in a bedroom becomes a 90s Bollywood film still: a red silk saree with a gold border, gold jhumkas, glass bangles and a small bindi, chin resting on one hand with a soft smile, in front of a heritage palace with carved arches and roses, in warm golden haze and soft grain.",

  sections: [
    {
      heading: "What does the retro Bollywood photo editor do?",
      paragraphs: [
        "It restyles your photo as a frame from a 1990s Hindi film. For women, the default look is a red silk saree with a gold border, gold jhumka earrings, glass bangles and a small bindi; for men, a 90s film hero's outfit. You're posed with your chin resting on one hand and a soft smile, in front of a heritage palace with carved arches and blooming roses.",
        "Then comes the part that makes it feel like a film: a warm golden haze, soft film grain and a nostalgic colour grade, the way cinema looked before digital cameras. Your face and identity stay the same; only the era changes around you.",
      ],
    },
    {
      heading: "What made 90s Bollywood films look the way they did?",
      paragraphs: [
        "Hindi films of the 1990s were shot on film stock, often in grand real locations: palaces, havelis, hill stations and gardens. Cinematographers loved warm, golden light and soft diffusion filters that gave faces a glow. Romantic songs were staged in beautiful places with flowing chiffon and silk, and the colour, once printed and projected, had a rich, slightly faded warmth that digital footage doesn't have.",
        "Costumes were part of the magic: bright sarees and lehengas, statement jhumkas and bangles for heroines, and for heroes, leather jackets, denim, crisp shirts or embroidered kurtas. The retro trend on social media borrows all of this, and this app recreates it on purpose: the palace, the jewellery, the haze and the grain.",
      ],
    },
    {
      heading: "Who uses the retro Bollywood filter?",
      items: [
        { t: "Fans of classic Hindi cinema", d: "See yourself as the star of a film you grew up watching, and post it with your favourite song lyric as the caption." },
        { t: "Festival and wedding posts", d: "Diwali, Navratri, Karva Chauth, sangeet nights and anniversaries all suit a filmy portrait in a red saree." },
        { t: "Couples", d: "Upload a photo of the two of you for a romantic film-still look, perfect for an anniversary or a save-the-date." },
        { t: "Creators and reels makers", d: "Retro Bollywood edits do well on reels and stories. Make a set of stills for a transition video." },
        { t: "Families abroad", d: "A filmy portrait is a fun way to share a bit of home with relatives, or to make a birthday card for a parent who loves old films." },
      ],
    },
    {
      heading: "Framing and Strength",
      table: {
        head: ["Setting", "Choice", "What changes"],
        rows: [
          ["Framing", "Auto", "A close, chin-on-hand film still, as in our example"],
          ["Framing", "Head & shoulders", "A tighter close-up on your face and jhumkas"],
          ["Framing", "Half body", "More of the saree drape and the palace behind"],
          ["Framing", "Full body", "The whole outfit, like a song-sequence wide shot"],
          ["Strength", "Subtle", "A light vintage grade over a look closer to your photo"],
          ["Strength", "Strong", "Heavier grain, warmer haze, a deeply nostalgic film look"],
        ],
      },
    },
    {
      heading: "Tips for a filmy portrait",
      list: [
        "**Close portraits look most cinematic.** A clear face filling a good part of the frame gives the strongest film-still feel.",
        "**Warm or neutral light in your photo.** It helps the golden grade land naturally. Cold blue light fights it.",
        "**Hair open or simply tied.** Loose hair suits the romantic look; the app keeps your hairstyle close.",
        "**A soft expression.** A gentle smile or a dreamy look suits 90s romance better than a big grin.",
        "**Group photos work too.** The vintage grade flatters everyone evenly, though close portraits are the most dramatic.",
      ],
    },
    {
      heading: "Saree trend, festival look or retro film?",
      paragraphs: [
        "PixelShine has a few Indian-style portrait apps, and they're different moods. This one is about **a 90s film still**: the grain, the haze and the palace. The [AI saree photoshoot](/creative/saree-photoshoot) is the modern trend, a crisp, editorial saree portrait in the style of the Gemini Nano Banana saree photos. The [festival photoshoot](/creative/festival-photoshoot) dresses you for Diwali, Navratri, Eid and other festivals with diyas and decorations.",
        "Try the same selfie in all three to see which one feels most like you.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Copy a real film or actor.** It recreates the era's look, not a scene from a specific film or a particular star.",
        "**Pick the saree colour.** The default is red with a gold border. For a different colour, use the [AI saree photoshoot](/creative/saree-photoshoot) or describe it in the [outfit changer](/creative/outfit-generator).",
        "**Keep your outfit.** The saree or the hero's outfit replaces what you're wearing.",
        "**Add song lyrics or titles.** Add text afterwards in a design app if you want a poster feel.",
      ],
    },
    {
      heading: "Ideas for your Bollywood stills",
      items: [
        { t: "A film-poster post", d: "Add a film title and \"Releasing this Friday\" in a retro font, and post it as your own movie." },
        { t: "Wedding and sangeet invites", d: "A couple's film still makes a playful save-the-date or a sangeet invitation." },
        { t: "An anniversary throwback", d: "Turn a recent photo of your parents into a 90s film still and caption it with the year they married." },
        { t: "A before-and-after reel", d: "Cut from your plain selfie to the film still on the beat of a 90s song." },
      ],
    },
    {
      heading: "Recreate a classic 90s song-sequence moment",
      items: [
        { t: "The palace romance", d: "Keep Auto framing for the heritage palace and roses, the look in our example." },
        { t: "The chiffon in the mountains", d: "Use a photo taken outdoors with open sky; the app keeps the warm haze, and the setting can lean scenic." },
        { t: "The hero's entrance", d: "Men can use Full body framing for a confident, wide film-hero shot." },
        { t: "The close-up glance", d: "Head & shoulders with a soft, sideways look makes the most dramatic poster frame." },
      ],
    },
    {
      heading: "Tips for posting a filmy edit",
      list: [
        "**Pair it with a song.** Retro Bollywood stills work best as reels or stories set to a 90s film song.",
        "**Use a tall shape.** 4:5 for a feed post or 9:16 for reels and stories, chosen before you generate.",
        "**Add a title card.** A film title and \"Releasing this Diwali\" in a retro font turns it into a poster.",
        "**Post the before too.** A plain selfie next to the film still is what makes people stop scrolling.",
      ],
    },
    {
      heading: "Price and your photo",
      paragraphs: [
        `A film still is ${COST}, paid only when the still is delivered. Packs begin at ${PACK_FROM} and the credits never lapse. A trial, if your country has one, is announced in the box above the upload.`,
        "To grade and restyle your portrait, the selfie goes to fal.ai's image models and nowhere further. It isn't sold and doesn't train any AI. Keep or delete your stills in My Creations.",
      ],
    },
  ],

  faq: [
    { q: "How do I get the 90s Bollywood look on my photo?", a: "Upload a clear selfie, keep Framing and Strength on Auto and press Generate. You get a retro film still with a saree, jewellery, a palace backdrop and film grain." },
    { q: "What will I wear?", a: "Women get a red silk saree with a gold border, gold jhumkas, glass bangles and a bindi. Men get a 90s film hero's outfit." },
    { q: "Will my face change?", a: "No. Your face and identity are kept; the outfit, setting and film look change." },
    { q: "Does it work for couples?", a: "Yes. Upload a photo of you both for a romantic film-still look. Close photos work best." },
    { q: "Can I choose the saree colour?", a: "Not in this app. Use the AI saree photoshoot or the outfit changer for a specific colour." },
    { q: "What does Strength do?", a: "Subtle gives a light vintage grade; Strong adds heavier grain, warmer haze and a stronger retro look." },
    { q: "How much does it cost?", a: `${COST} per film still, and only when one is made. Credit packs from ${PACK_FROM}.` },
    { q: "Is it from a real film?", a: "No. It recreates the style of 90s Hindi cinema, not a scene from any particular film." },
    { q: "Can I use it for a wedding or sangeet invite?", a: "Yes. A couple's film still makes a playful invitation. Add names and dates afterwards with the free watermark tool or an invitation design app." },
    { q: "Is there a watermark?", a: "No. The still downloads at full size with no logo, ready for a reel." },
  ],
};

export default page;
