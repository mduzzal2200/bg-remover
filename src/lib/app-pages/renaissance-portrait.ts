import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Renaissance Portrait: Turn a Photo Into an Oil Painting",
  h1: "AI Renaissance Portrait Maker",
  metaDescription: "Turn a selfie into a Renaissance oil painting: velvet and pearls, dramatic chiaroscuro light, a red drape and visible brushwork. Still recognisably you.",
  tagline: "Upload a selfie and get a classic oil-painted portrait in return: deep green velvet and pearls or a doublet with a lace collar, dramatic Old Master light and brushwork you can see.",
  keywords: "ai renaissance portrait, photo to oil painting, renaissance painting of yourself, classical portrait ai, old master portrait from photo, renaissance filter, historical portrait ai",

  howToHeading: "How to turn your photo into a Renaissance painting",
  howTo: [
    { t: "Upload a front-facing selfie", d: "A clear, well-lit face gives the painter the strongest likeness to work from. Your clothes and background are replaced." },
    { t: "Pick framing and strength", d: "Auto gives the seated, three-quarter portrait in our example. Head & shoulders makes a closer bust; Strong leans further into painted texture." },
    { t: "Generate and download", d: "You get a finished oil-painting portrait in under a minute. Upscale it if you plan to print and frame it." },
  ],
  exampleCaption: "A casual blonde selfie in a sweater becomes an Old Master portrait: a deep green velvet gown with gold embroidery, a pearl necklace and pearls in braided hair, seated in a three-quarter pose beside a red drape and a vase of flowers, with dramatic light and visible brushwork.",

  sections: [
    {
      heading: "What does the Renaissance portrait maker paint?",
      paragraphs: [
        "It repaints you as the subject of a classic European oil portrait. The default look for a woman is a deep green velvet gown embroidered with gold, a pearl necklace and pearls woven into braided hair. For a man, it's a velvet doublet with a lace collar. You're seated in a three-quarter pose, turned slightly to one side, beside a heavy red drape and a vase of flowers, against a dark background.",
        "The painting style follows the Old Masters: **chiaroscuro**, the dramatic contrast of light and shadow that makes faces glow out of darkness, rich, deep colour and visible brushwork texture. Your face is kept recognisable beneath the paint, so the portrait looks like you sat for a painter four centuries ago.",
      ],
    },
    {
      heading: "What makes a portrait look \"Renaissance\"?",
      paragraphs: [
        "Strictly, the Renaissance ran from roughly the 14th to the 17th century, and portraits changed a lot over that time. What most people picture when they search for a Renaissance portrait is a mix of later Renaissance and Baroque painting: a dark, plain background, one strong light falling from the side, sumptuous fabrics like velvet and silk, jewellery that catches the light, and a calm, dignified pose.",
        "Those painters cared about status. Velvet, pearls and lace showed wealth; flowers and drapes added richness; the three-quarter pose looked natural but composed. The app uses the same visual language, which is why even an everyday selfie ends up looking important. It's a style, not a reconstruction of a particular painter or year.",
      ],
    },
    {
      heading: "Who commissions an AI oil portrait?",
      items: [
        { t: "Gift givers", d: "A painted portrait of a parent, partner or best friend makes a memorable birthday or anniversary present, especially framed. It's a fraction of the cost of a commissioned painting." },
        { t: "Couples", d: "Make one portrait each with the same settings and hang them as a pair, the way married couples were often painted in matching frames." },
        { t: "History and art lovers", d: "See yourself painted in the style of the portraits you admire in museums, then share it with the inevitable caption about your noble ancestry." },
        { t: "Teachers and students", d: "A portrait of yourself in period dress makes art history and history lessons memorable, and starts a conversation about how portraits worked." },
        { t: "Themed events", d: "Costume parties, murder-mystery dinners and period weddings can use painted portraits of the guests for invitations or place cards." },
      ],
    },
    {
      heading: "Framing and Strength settings",
      table: {
        head: ["Setting", "Choice", "The painting you get"],
        rows: [
          ["Framing", "Auto", "A seated three-quarter portrait with the drape and flowers, as in our example"],
          ["Framing", "Head & shoulders", "A close bust portrait, focused on your face, pearls and collar"],
          ["Framing", "Half body", "A waist-up portrait that shows more of the gown or doublet and your hands"],
          ["Framing", "Full body", "A standing full-length portrait, the grandest format"],
          ["Strength", "Subtle", "A lighter painted finish; your photo's features show through more"],
          ["Strength", "Strong", "Heavier brushwork and a deeper, fully painted look"],
        ],
      },
    },
    {
      heading: "Getting a portrait that looks like you",
      list: [
        "**Face the camera, or turn just slightly.** A three-quarter pose is built from your face, so a clear, mostly front-facing photo works best.",
        "**Soft light on your face.** Old Master portraits are lit from one side; even light in your photo lets the app add that drama cleanly.",
        "**No sunglasses or hats.** They don't belong in the painting and get in the way of your likeness.",
        "**A calm expression.** Portraits of the era are composed and serene. A small smile works; a wide grin looks out of place.",
        "**Simple backgrounds help.** The app paints a dark backdrop, and a plain original blends into it more naturally.",
        "**Run it more than once.** Each painting is different; one will capture you best.",
      ],
    },
    {
      heading: "Printing and framing your painting",
      paragraphs: [
        "A painted portrait deserves a wall. Before printing, enlarge it 2× or 4× in the [image upscaler](/upscale) so the brushwork and pearls stay sharp. For a classic look, choose a tall shape such as 3:4 or 4:5 before generating, which matches traditional portrait canvases.",
        "Canvas prints suit the style best because the texture echoes real oil paint. A dark wood or gilded frame finishes the effect. Many print services can mount the image on stretched canvas; ask for a matte finish so the dark background doesn't reflect the room.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Paint in a named artist's exact style.** It paints in a general Renaissance and Old Master manner, not a copy of a specific painter's work.",
        "**Keep your own clothes.** Period clothing replaces what you're wearing; that's the point of the look.",
        "**Make a real painting.** It's a digital image in an oil-painting style. For a physical canvas, have it printed.",
        "**Guarantee historical accuracy.** The costume is a flattering period look, not a reconstruction of a specific decade.",
      ],
    },
    {
      heading: "Pair it with these painted looks",
      paragraphs: [
        "The [pet portrait maker](/creative/pet-portrait) gives your dog or cat the same royal treatment, crown and robe included, so the whole household can hang side by side. For a glamorous 20th-century look instead, try [Old Hollywood glamour](/creative/old-hollywood-glamour). For quiet luxury in a photographic style, the [old money aesthetic](/creative/old-money-aesthetic) app is the modern cousin of this portrait.",
      ],
    },
    {
      heading: "What do the clothes, pearls and flowers mean?",
      paragraphs: [
        "In the portraits this style draws on, nothing was there by accident. **Velvet** was one of the most expensive fabrics you could buy, and deep greens and reds needed costly dyes, so a velvet gown or doublet said the sitter was wealthy. **Pearls** stood for purity and status, and were often worn in the hair as well as at the neck. **Lace collars** took weeks of handwork and were a fashion statement of their own.",
        "**Flowers** in a vase often carried a meaning too: roses for love, lilies for purity, and a mix of blooms to show the abundance of the sitter's household. The heavy **red drape** framed the figure and added warmth against the dark background. The app uses this vocabulary so your portrait reads as grand and deliberate, the way the originals were meant to.",
      ],
    },
    {
      heading: "How does an AI portrait compare with a commissioned painting?",
      table: {
        head: ["", "AI Renaissance portrait", "Commissioned oil painting"],
        rows: [
          ["Time", "Under a minute", "Weeks to months"],
          ["Cost", `${COST} per portrait`, "Hundreds to thousands"],
          ["Sittings", "One selfie", "Several sittings or detailed photos"],
          ["Result", "A digital image you can print on canvas", "A one-of-a-kind physical painting"],
          ["Changes", "Run it again for a new version", "Limited once the paint is down"],
        ],
      },
      after: ["An AI portrait is a fun, affordable way to get the look. A painter gives you a unique object made by hand, and that's worth commissioning for a special occasion."],
    },
    {
      heading: "Cost and your photo",
      paragraphs: [
        `A portrait uses ${COST}, taken only when the painting is made. Credit packs from ${PACK_FROM} never expire, and monthly plans suit regular use. Where a free trial is running, it shows above the upload.`,
        "Your selfie is sent to fal.ai, the model provider that paints the portrait, and isn't shared with anyone else, used for AI training or sold. The painting and your original stay in My Creations until you choose to delete them.",
      ],
    },
  ],

  faq: [
    { q: "How do I turn my photo into a Renaissance painting?", a: "Upload a clear, front-facing selfie, keep Framing and Strength on Auto and press Generate. You get an Old Master-style oil portrait in under a minute." },
    { q: "What will I be wearing?", a: "Women usually get a deep green velvet gown with gold embroidery and pearls; men get a velvet doublet with a lace collar." },
    { q: "Will it still look like me?", a: "Yes. Your face is painted, but your features are kept recognisable. A clear, front-facing photo gives the best likeness." },
    { q: "Can I get a full-length portrait?", a: "Yes. Choose Full body framing for a standing, full-length painting." },
    { q: "Can I paint my pet in the same style?", a: "Use the AI pet portrait maker with the Royal portrait style for a matching painting of your pet." },
    { q: "Is it good enough to print?", a: "Yes. Upscale it 2× or 4× first, then print on canvas or photo paper. A tall 3:4 or 4:5 shape suits a portrait frame." },
    { q: "How much does it cost?", a: `${COST} per portrait, only when it's made. Packs start at ${PACK_FROM}; where a free trial runs, your first one is free.` },
    { q: "Is it a real oil painting?", a: "No. It's a digital picture painted in an oil-portrait style. Order a canvas print for a physical version." },
    { q: "Can I choose the colour of the gown?", a: "Not directly; the app paints a deep green velvet gown by default. For a different colour, run it again or describe the outfit you want in the AI outfit changer first." },
    { q: "Is there a watermark?", a: "No. The portrait downloads at full size, without a watermark." },
  ],
};

export default page;
