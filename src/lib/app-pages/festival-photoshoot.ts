import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Festival Photoshoot: Diwali, Holi, Navratri & Eid Photos",
  h1: "AI Festival Photoshoot Maker",
  metaDescription: "Turn a selfie into a festive portrait for Diwali, Holi, Navratri, Eid, Onam, Pongal or Christmas: traditional dress, decorations and warm light.",
  tagline: "Upload a selfie and get a festive portrait for the occasion you choose: a silk lehenga or kurta, gold jewellery, glowing diyas and marigolds for Diwali, or the colours, dress and decor of Holi, Navratri, Eid and more.",
  keywords: "ai festival photoshoot, diwali photo ai, navratri photoshoot ai, eid photo editor, holi photo ai, festival portrait from selfie, festive photo maker",

  howToHeading: "How to make a festival photo with AI",
  howTo: [
    { t: "Upload a clear selfie", d: "Your face well lit and facing the camera. Everyday clothes are fine; the festive outfit is added." },
    { t: "Pick the festival and lighting", d: "Auto gives the Diwali portrait in our example. Choose Holi, Navratri, Eid, Christmas, Onam or Pongal for their own dress and decor." },
    { t: "Generate and send your wishes", d: "Your portrait is ready in under a minute. Make one for each festival from the same selfie." },
  ],
  exampleCaption: "A selfie in a plain white T-shirt becomes a Diwali portrait: a magenta-pink silk lehenga with gold embroidery and a matching dupatta, gold jhumkas, stacked bangles, a small bindi and jasmine in her hair, chin resting on her hand, with rows of lit diyas, marigold garlands and fairy lights glowing behind.",

  sections: [
    {
      heading: "What does the festival photoshoot do?",
      paragraphs: [
        "It dresses you for a festival and photographs you in the middle of the celebration. With the default Diwali look, women wear a magenta-pink silk lehenga with gold embroidery and a matching dupatta, gold jhumka earrings, stacked gold bangles, a small bindi and jasmine flowers in the hair; men wear an embroidered silk kurta with a Nehru jacket. You're seated from the waist up, chin resting on one hand, in a home decorated with rows of lit diyas, marigold garlands and warm fairy lights.",
        "Choose another festival and the outfit, setting and decorations change to match. Your face and identity stay exactly the same, and the picture is built to look like a real photograph, with natural skin, real light and believable fabric.",
      ],
    },
    {
      heading: "Which festivals can you choose?",
      table: {
        head: ["Festival", "What the photo includes"],
        rows: [
          ["Diwali (Auto)", "Diyas and warm lamplight, rangoli, festive traditional dress and marigolds"],
          ["Holi", "Clouds of coloured powder, white clothes splashed with colour, bright daylight"],
          ["Navratri", "Mirrored chaniya choli or kediyu, garba lighting and a decorated venue"],
          ["Eid", "Elegant traditional dress, crescent and lantern decorations, warm evening light"],
          ["Christmas", "A decorated tree, warm string lights and festive knitwear"],
          ["Onam", "Kasavu white-and-gold dress, a pookalam flower carpet and bright natural light"],
          ["Pongal", "Traditional South Indian dress, sugarcane and kolam decoration in warm daylight"],
        ],
      },
      after: ["Looking for another celebration? The [festivals hub](/festivals) has 40 festivals from around the world, each with its own portrait, family or couple photo, greeting card and background apps."],
    },
    {
      heading: "Who makes festival portraits?",
      items: [
        { t: "Everyone too busy to dress up on the day", d: "Festivals are when you most want a good photo and least have time to set one up. Make a polished portrait before or after the day." },
        { t: "Families living apart", d: "Share a festive picture with relatives in another city or country, even if you're celebrating quietly this year." },
        { t: "Creators and small businesses", d: "Shops, salons, tutors and creators post festival greetings every season. A festive portrait of yourself feels personal." },
        { t: "Office and community groups", d: "Make a festive portrait of each team member for a greetings post or a celebration slide." },
        { t: "Anyone trying a new look", d: "Never worn a lehenga or a Nehru jacket? See how a festive outfit suits you before buying one." },
      ],
    },
    {
      heading: "Lighting for festive photos",
      paragraphs: [
        "Leave **Lighting** on Auto for the warm, celebratory glow of each festival. Golden hour adds low, warm sun, lovely for Pongal and Onam daytime portraits. Moody gives a darker, richer evening feel that suits Diwali lamps and Eid lanterns. Bright & airy keeps things light and fresh, good for Holi. Studio gives clean, even portrait light, closest to a professional studio session.",
      ],
    },
    {
      heading: "Tips for the best festive portrait",
      list: [
        "**A clear, well-lit selfie.** Daylight on your face gives the most realistic styling.",
        "**Front-facing beats profile.** It keeps your likeness strongest under the jewellery and dupatta.",
        "**Hair loose or simply tied.** The app styles it with flowers or a festive touch; very elaborate hairstyles can clash.",
        "**Run it two or three times.** Outfits and decorations change each time, and one will feel just right.",
        "**Use one selfie for every festival.** Build a whole year of greetings from the same photo.",
      ],
    },
    {
      heading: "Sending festival greetings",
      paragraphs: [
        "A festive portrait makes a warm greeting on WhatsApp status, Instagram stories and family chats. To add \"Happy Diwali\" or \"Eid Mubarak\" in your own words, open the result in the [free photo editor](/editor) and use the text tool. For a ready-made card with the greeting lettered in, each festival on the [festivals hub](/festivals) also has a greeting card app.",
        "Planning to print? Run the portrait through the [image upscaler](/upscale) at 2× before ordering a card or a frame, so the jewellery and embroidery stay crisp.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Centre on religious figures.** The portrait is built around festive dress, lights and decorations; it isn't designed to show deities, holy figures or scripture.",
        "**Show your real home.** The decorated room is invented, so it won't look like your own living room.",
        "**Copy a specific outfit.** It designs a festive look. For one exact lehenga or kurta, describe it in the [outfit changer](/creative/outfit-generator).",
        "**Write greetings.** Add your message afterwards with a text tool or use a festival greeting card app.",
      ],
    },
    {
      heading: "More festive and traditional looks",
      paragraphs: [
        "For a crisp saree portrait in the style of the Gemini saree trend, try the [AI saree photoshoot](/creative/saree-photoshoot). For a nostalgic film look, the [retro Bollywood photo editor](/creative/retro-bollywood) puts you in a 90s movie still. And at the end of the year, the [Christmas photo maker](/creative/christmas-photo) gives you a cosy tree-and-fireplace portrait.",
      ],
    },
    {
      heading: "What do people wear for each festival?",
      items: [
        { t: "Diwali", d: "Silk lehengas, sarees and anarkalis in rich jewel colours with gold jewellery; kurtas and Nehru jackets for men." },
        { t: "Holi", d: "White cotton, so the colours show, and comfortable clothes you don't mind ruining." },
        { t: "Navratri", d: "Chaniya choli with mirror work for women, kediyu and dhoti for men, made for dancing garba." },
        { t: "Eid", d: "Elegant new clothes: sharara, salwar kameez or abaya for women, kurta or thobe for men, often in soft or bright colours." },
        { t: "Onam", d: "The Kerala kasavu: off-white cotton with a gold border, as a saree or a mundu." },
        { t: "Pongal", d: "Silk sarees and pavadai for women, a veshti and shirt for men, in bright traditional colours." },
      ],
      after: ["The app follows these traditions in general terms, so the outfit fits the occasion. For one exact outfit, describe it in the [outfit changer](/creative/outfit-generator)."],
    },
    {
      heading: "Make a whole year of festival greetings",
      paragraphs: [
        "Because your face stays the same and only the festival changes, one good selfie can give you a portrait for every celebration of the year: Pongal and Makar Sankranti in January, Holi in spring, Eid, Onam in late summer, Navratri and Diwali in autumn and Christmas in December. Save them in My Creations and they're ready to send the moment each festival comes round.",
        "For an exact date each year, check a calendar: many of these festivals follow the lunar calendar, so they move from year to year. The [festivals hub](/festivals) shows what's coming up this month.",
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `One festive portrait takes ${COST}; if the image doesn't come through, you keep your credits. Packs start at ${PACK_FROM} and last until you spend them, handy when festivals come round through the year. A trial in your country, if there is one, shows above the upload.`,
        "We use fal.ai's image models to dress you for the festival, and your selfie goes to them alone. It's never sold or used to train AI. Each portrait stays in My Creations until you choose to delete it.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a Diwali photo with AI?", a: "Upload a clear selfie, keep Festival on Auto (Diwali) and press Generate. You get a festive portrait with traditional dress, diyas and marigolds in under a minute." },
    { q: "Which festivals are available?", a: "Diwali, Holi, Navratri, Eid, Christmas, Onam and Pongal. The festivals hub has 40 more festivals with their own apps." },
    { q: "Will my face stay the same?", a: "Yes. The festive dress, jewellery and decorations change, while your features, skin tone and smile stay yours." },
    { q: "What do men wear?", a: "For Diwali, an embroidered silk kurta with a Nehru jacket. Other festivals use their own traditional menswear." },
    { q: "Can I add a greeting like Happy Diwali?", a: "Yes. Type your wishes onto the picture in the free photo editor, or open the festival on the festivals hub and use its greeting card app." },
    { q: "Does it work for family photos?", a: "This app is designed for one person. Each festival on the festivals hub has a family or couple photo app." },
    { q: "How much does it cost?", a: `${COST} for each festival portrait, charged only on success. Packs from ${PACK_FROM}.` },
    { q: "Is it respectful of religious traditions?", a: "It's built around festive dress, lights and decorations rather than religious figures or symbols. If a result doesn't feel right, run it again or tell us." },
    { q: "Can I make photos for a festival that isn't listed?", a: "Yes. The festivals hub has 40 festivals from around the world, each with its own portrait, family or couple, card and background apps." },
    { q: "Is there a watermark?", a: "No. Festival portraits download clean and full size, ready for greetings." },
  ],
};

export default page;
