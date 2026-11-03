/**
 * festivals.ts — the festivals behind /festivals and their one-tap apps.
 *
 * Pure data and small helpers, with no imports from the rest of the app, so
 * staging.ts, app-options.ts and image-jobs.ts can all read it without a
 * circular import. The apps themselves are built from this in
 * festival-apps.ts and join CREATIVE_APPS, so they reuse the app page, the
 * workspace, the generation route and the example-image jobs.
 *
 * Dates: most of these follow a lunar or religious calendar, so `dateNote`
 * says when they usually fall rather than naming a day we can't stand behind.
 * `months` are the usual months, for "Coming up".
 *
 * Every festival's `style.avoid` carries what its pictures must not do. The
 * shared respect line in festival-apps.ts covers deities, scripture and head
 * coverings for all of them.
 */

export type Region =
  | "south-asia" | "east-asia" | "southeast-asia" | "middle-east"
  | "europe" | "americas" | "africa" | "worldwide";

export type FestivalKind = "portrait" | "couple" | "family" | "friends" | "card" | "scene";

export interface FestivalStyle {
  /** What the person wears, written to suit anyone. */
  attire: string;
  /** Where the picture is set. */
  setting: string;
  decor: string;
  palette: string;
  light: string;
  /** The card greeting: Latin script only, short, checked by hand. */
  greeting: string;
  /** What this festival's pictures must never show. */
  avoid?: string;
}

export interface FestivalAppSpec {
  kind: FestivalKind;
  name: string;
  emoji: string;
  /** One line, for cards and the app's intro. */
  blurb: string;
  /** Extra direction for this one app's prompt. */
  detail?: string;
  /** Use this existing app in this slot instead of building a new one. */
  use?: string;
}

export interface Festival {
  slug: string;
  name: string;
  /** Other names people search for, e.g. Deepavali, Chinese New Year. */
  aliases: string[];
  emoji: string;
  regions: Region[];
  countries: string[];
  /** The months it usually falls in, 1–12. */
  months: number[];
  /** When it falls, honestly: "usually", and why the date moves. */
  dateNote: string;
  tradition: "religious" | "cultural" | "seasonal" | "national";
  /** ≤155 characters: the card line and the meta description. */
  short: string;
  /** Unique copy for the festival's page. */
  about: string[];
  gradient: [string, string];
  style: FestivalStyle;
  apps: [FestivalAppSpec, FestivalAppSpec, FestivalAppSpec, FestivalAppSpec];
  /** Existing apps that suit this festival too. */
  related?: string[];
}

export const REGIONS: { id: Region; label: string }[] = [
  { id: "south-asia", label: "South Asia" },
  { id: "east-asia", label: "East Asia" },
  { id: "southeast-asia", label: "Southeast Asia" },
  { id: "middle-east", label: "Middle East & Central Asia" },
  { id: "europe", label: "Europe" },
  { id: "americas", label: "Americas" },
  { id: "africa", label: "Africa" },
  { id: "worldwide", label: "Worldwide" },
];

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/* Shared app line-ups. Each festival's four apps are one of these, with names
   written for that festival. */
const portrait = (name: string, blurb: string, emoji = "📸", detail?: string): FestivalAppSpec =>
  ({ kind: "portrait", name, emoji, blurb, detail });
const couple = (name: string, blurb: string, emoji = "💞", detail?: string): FestivalAppSpec =>
  ({ kind: "couple", name, emoji, blurb, detail });
const family = (name: string, blurb: string, emoji = "👨‍👩‍👧", detail?: string): FestivalAppSpec =>
  ({ kind: "family", name, emoji, blurb, detail });
const friends = (name: string, blurb: string, emoji = "🧑‍🤝‍🧑", detail?: string): FestivalAppSpec =>
  ({ kind: "friends", name, emoji, blurb, detail });
const card = (name: string, blurb: string, emoji = "💌", detail?: string): FestivalAppSpec =>
  ({ kind: "card", name, emoji, blurb, detail });
const scene = (name: string, blurb: string, emoji = "🌄", detail?: string): FestivalAppSpec =>
  ({ kind: "scene", name, emoji, blurb, detail });

const NO_DEITIES = "No idols, statues or pictures of deities anywhere in the image; suggest the festival through flowers, lights, food and clothing instead.";
const ISLAMIC = "No Kaaba, no mosque interiors used as a backdrop for people, no Arabic script or calligraphy, and never add a hijab, kufi or any other head covering the person isn't already wearing.";

export const FESTIVALS: Festival[] = [
  /* ── South Asia ─────────────────────────────────────────────────────── */
  {
    slug: "diwali",
    name: "Diwali",
    aliases: ["Deepavali", "Deepawali", "Festival of Lights", "Divali"],
    emoji: "🪔",
    regions: ["south-asia", "worldwide"],
    countries: ["India", "Nepal", "Sri Lanka", "Singapore", "Malaysia", "Mauritius", "Fiji", "United Kingdom", "United States"],
    months: [10, 11],
    dateNote: "Usually October or November. The date follows the Hindu lunar calendar, on the new moon of the month of Kartik, so it moves each year.",
    tradition: "religious",
    short: "Diwali photos made from one selfie: a festive portrait, a family photo, a greeting card and a diya-lit background.",
    about: [
      "Diwali, also called Deepavali, is the festival of lights. Over five days, families clean and decorate their homes, light rows of small clay lamps called diyas, draw rangoli patterns at the door, share sweets and visit relatives. It is celebrated by Hindus, Sikhs and Jains, and today it is a public holiday in India, Nepal, Singapore, Malaysia, Mauritius and Fiji, with big celebrations wherever families have settled.",
      "It is also the year's biggest photo day. People dress up in new clothes, often silk sarees, lehengas and kurtas in rich jewel colours, and take pictures in front of the lamps and marigold garlands before the evening puja and fireworks.",
      "These apps give you that picture without the photoshoot. Upload a selfie and get a warm, lamp-lit Diwali portrait, a family photo with everyone kept in the frame, a greeting card with \"Happy Diwali\" lettered on it, or the same photo of you placed in front of glowing diyas and marigolds. Each one costs 2 credits and downloads at full resolution.",
    ],
    gradient: ["#F59E0B", "#B91C1C"],
    style: {
      attire: "festive Indian clothes in rich silk: a saree or lehenga with gold borders and simple jewellery for women, a silk kurta with a Nehru jacket for men",
      setting: "on a home balcony or courtyard at dusk on Diwali night",
      decor: "rows of lit clay diyas, marigold garlands, a rangoli pattern on the floor and warm string lights",
      palette: "marigold, deep red, magenta and gold",
      light: "warm, glowing lamp light with soft golden bokeh",
      greeting: "Happy Diwali",
      avoid: NO_DEITIES + " No firecracker explosions near the people.",
    },
    apps: [
      portrait("Diwali Portrait", "A warm, lamp-lit Diwali portrait in festive silk.", "🪔"),
      family("Diwali Family Photo", "Everyone in your photo, dressed up among the diyas.", "👨‍👩‍👧"),
      card("Diwali Greeting Card", "Your photo on a Diwali card that says \"Happy Diwali\".", "💌"),
      scene("Diwali Background", "Keep your photo, put glowing diyas and marigolds behind you.", "✨"),
    ],
    related: ["festival-photoshoot", "saree-photoshoot"],
  },
  {
    slug: "holi",
    name: "Holi",
    aliases: ["Festival of Colours", "Festival of Colors", "Phagwah", "Rangwali Holi", "Dhulandi"],
    emoji: "🎨",
    regions: ["south-asia", "worldwide"],
    countries: ["India", "Nepal", "Mauritius", "Suriname", "Guyana", "Trinidad and Tobago", "United Kingdom", "United States"],
    months: [3],
    dateNote: "Usually in March (sometimes late February), on the full moon of the Hindu month of Phalguna. A bonfire, Holika Dahan, is lit the night before.",
    tradition: "religious",
    short: "Holi photos from one selfie: a colour-splashed portrait, a friends photo, a Happy Holi card and a cloud of colour behind you.",
    about: [
      "Holi is the festival of colours and the start of spring. On the main day, friends, neighbours and strangers chase each other through the streets throwing clouds of coloured powder called gulal and spraying coloured water, while music plays and sweets such as gujiya are handed round. The night before, people gather round a bonfire for Holika Dahan, which marks good winning over evil.",
      "It is the most photographed festival in India for an obvious reason: the colour. White clothes turn pink, yellow and green within minutes, and everyone ends the day laughing and covered in powder.",
      "These apps give you the Holi picture without the clean-up. Get a portrait with bright powder in the air and on your clothes, a group photo with all your friends kept in, a \"Happy Holi\" card, or your own photo set against a cloud of colour. Faces stay recognisable: the colour goes on clothes, hair and the air, not over your features. Each costs 2 credits.",
    ],
    gradient: ["#EC4899", "#F59E0B"],
    style: {
      attire: "white kurtas or white cotton clothes splashed with bright Holi colours, with a little powder in the hair",
      setting: "outdoors in a sunny courtyard or street during Holi celebrations",
      decor: "clouds of pink, yellow, green and blue gulal powder in the air and colour on the ground",
      palette: "hot pink, turquoise, sunflower yellow, green and white",
      light: "bright, cheerful daylight",
      greeting: "Happy Holi",
      avoid: NO_DEITIES + " Keep colour off the eyes and keep every face clearly recognisable.",
    },
    apps: [
      portrait("Holi Portrait", "A colour-splashed Holi portrait, faces kept clear.", "🎨"),
      friends("Holi Friends Photo", "Your whole group, laughing in a cloud of colour.", "🧑‍🤝‍🧑"),
      card("Holi Greeting Card", "Your photo on a bright card that says \"Happy Holi\".", "💌"),
      scene("Holi Colour Background", "Keep your photo, add an explosion of Holi colour behind you.", "🌈"),
    ],
    related: ["festival-photoshoot"],
  },
  {
    slug: "navratri",
    name: "Navratri",
    aliases: ["Navaratri", "Garba", "Dandiya", "Sharad Navratri", "Garba Night"],
    emoji: "💃",
    regions: ["south-asia", "worldwide"],
    countries: ["India", "Nepal", "United Kingdom", "United States", "Canada"],
    months: [9, 10],
    dateNote: "Nine nights, usually in late September or October (Sharad Navratri). The dates follow the Hindu lunar calendar; the tenth day is Dussehra.",
    tradition: "religious",
    short: "Navratri and Garba photos from a selfie: a chaniya choli portrait, a dandiya couple photo, a greeting card and a Garba-night background.",
    about: [
      "Navratri means \"nine nights\". Across India, and above all in Gujarat, people spend those nights dancing Garba in great circles and Dandiya Raas with pairs of painted sticks, until well after midnight. Each night is linked with a colour, and many people dress to match. The festival ends on the tenth day with Dussehra.",
      "Garba outfits are part of the joy: mirror-work chaniya cholis with swirling skirts, bright bandhani dupattas and oxidised silver jewellery, and kediyu tops or embroidered kurtas for men. Dance grounds are lit with strings of lights and lanterns.",
      "These apps turn one ordinary photo into that Garba-night look. Get a portrait in a mirror-work outfit, a dandiya couple photo (or a solo one if you're alone in the picture), a \"Happy Navratri\" greeting card, or your own photo in front of a lit Garba ground. Each one costs 2 credits and keeps your face as it is.",
    ],
    gradient: ["#F97316", "#DB2777"],
    style: {
      attire: "Garba outfits: a mirror-work chaniya choli with a swirling skirt and a bandhani dupatta for women, an embroidered kediyu or kurta for men, with oxidised silver jewellery",
      setting: "at a Garba night on an open dance ground",
      decor: "strings of fairy lights, hanging lanterns, decorated dandiya sticks and dancers softly blurred in the background",
      palette: "red, orange, parrot green, royal blue and mirror silver",
      light: "warm festive night lighting with colourful bokeh",
      greeting: "Happy Navratri",
      avoid: NO_DEITIES,
    },
    apps: [
      portrait("Navratri Garba Portrait", "A mirror-work Garba portrait from one selfie.", "💃"),
      couple("Dandiya Couple Photo", "The two of you with dandiya sticks on a Garba night.", "🥢"),
      card("Navratri Greeting Card", "Your photo on a card that says \"Happy Navratri\".", "💌"),
      scene("Garba Night Background", "Keep your photo, put a lit Garba ground behind you.", "✨"),
    ],
    related: ["festival-photoshoot"],
  },
  {
    slug: "durga-puja",
    name: "Durga Puja",
    aliases: ["Durgotsav", "Pujo", "Sharadotsav", "Durga Pooja"],
    emoji: "🌺",
    regions: ["south-asia"],
    countries: ["India", "Bangladesh", "Nepal"],
    months: [9, 10],
    dateNote: "Usually late September or October, over five main days that end on Vijaya Dashami. The dates follow the Hindu lunar calendar.",
    tradition: "religious",
    short: "Durga Puja photos from one selfie: a red-and-white saree portrait, a family pandal photo, a greeting card and a pandal-lit background.",
    about: [
      "Durga Puja is the great autumn festival of Bengal. In Kolkata, across West Bengal, Assam, Tripura and in Bangladesh, neighbourhoods build huge, artful temporary halls called pandals, and for five days people go pandal-hopping late into the night, eat street food and meet friends in new clothes. On the last day, married women play sindoor khela.",
      "The classic look is a white saree with a red border, the laal paar sari, with a big red bindi and gold jewellery, and a crisp dhoti and panjabi for men. Pandal lights, dhak drums and the smoke of dhunuchi dances fill the evenings.",
      "These apps give you that picture from a selfie: a red-and-white saree portrait, a family photo in front of a glowing pandal with everyone kept in, a \"Happy Durga Puja\" card, or your own photo with festival lights behind you. Each costs 2 credits.",
    ],
    gradient: ["#DC2626", "#F59E0B"],
    style: {
      attire: "Bengali festive clothes: a white saree with a wide red border and gold jewellery for women, a white dhoti with a silk panjabi for men",
      setting: "outside a richly decorated, glowing pandal on a festival evening",
      decor: "intricate pandal lights, marigolds, hanging lanterns and a softly blurred evening crowd",
      palette: "white, vermilion red, gold and warm amber",
      light: "warm evening light from festival lamps",
      greeting: "Happy Durga Puja",
      avoid: NO_DEITIES + " Show the pandal as lit architecture, never the idol inside it.",
    },
    apps: [
      portrait("Durga Puja Portrait", "A red-and-white saree portrait in festival light.", "🌺"),
      family("Durga Puja Family Photo", "Everyone in your photo, pandal-hopping together.", "👨‍👩‍👧"),
      card("Durga Puja Greeting Card", "Your photo on a card that says \"Happy Durga Puja\".", "💌"),
      scene("Pandal Lights Background", "Keep your photo, put glowing pandal lights behind you.", "✨"),
    ],
    related: ["saree-photoshoot", "festival-photoshoot"],
  },
  {
    slug: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    aliases: ["Vinayaka Chaturthi", "Ganeshotsav", "Ganpati Festival", "Vinayagar Chathurthi"],
    emoji: "🌼",
    regions: ["south-asia"],
    countries: ["India", "Nepal", "Mauritius"],
    months: [8, 9],
    dateNote: "Usually late August or September, starting on the fourth day of the Hindu month of Bhadrapada, and lasting up to ten days.",
    tradition: "religious",
    short: "Ganesh Chaturthi photos from one selfie: a festive portrait, a family photo, a greeting card and a marigold-and-lights background.",
    about: [
      "Ganesh Chaturthi celebrates the birthday of Ganesha, and it is at its biggest in Maharashtra, with Mumbai and Pune at the centre, as well as Goa, Karnataka, Telangana and Andhra Pradesh. Families welcome the festival home, neighbourhoods set up beautifully lit mandals, and the days are full of music, prayers, visits and plates of modak, the sweet dumpling made for the occasion.",
      "People dress in their festive best: Paithani and nauvari sarees in deep pinks and greens, and kurtas with saffron or silk stoles. Homes are decorated with marigolds, mango leaves and lights.",
      "These apps give you the festive photo without staging it. Get a portrait in Maharashtrian festive clothes, a family photo with everyone kept in the frame, a \"Happy Ganesh Chaturthi\" card, or your own photo with marigolds and lights behind you. We keep the pictures to flowers, lights and festive food. Each costs 2 credits.",
    ],
    gradient: ["#F97316", "#16A34A"],
    style: {
      attire: "Maharashtrian festive clothes: a Paithani or nauvari silk saree with gold jewellery for women, a silk kurta with a saffron stole for men",
      setting: "in a decorated home or a festive street mandal",
      decor: "marigold garlands, mango-leaf torans, flower decorations, plates of modak and warm string lights",
      palette: "saffron, marigold yellow, deep pink and leaf green",
      light: "warm festive light with soft bokeh",
      greeting: "Happy Ganesh Chaturthi",
      avoid: NO_DEITIES,
    },
    apps: [
      portrait("Ganesh Chaturthi Portrait", "A festive Paithani or kurta portrait from one selfie.", "🌼"),
      family("Ganesh Chaturthi Family Photo", "Everyone in your photo, dressed for the festival.", "👨‍👩‍👧"),
      card("Ganesh Chaturthi Greeting Card", "Your photo on a card that says \"Happy Ganesh Chaturthi\".", "💌"),
      scene("Ganeshotsav Background", "Keep your photo, add marigolds and festival lights behind you.", "✨"),
    ],
    related: ["festival-photoshoot", "saree-photoshoot"],
  },
  {
    slug: "onam",
    name: "Onam",
    aliases: ["Thiruvonam", "Kerala harvest festival", "Onam Sadya"],
    emoji: "🌸",
    regions: ["south-asia"],
    countries: ["India", "United Arab Emirates", "United Kingdom", "United States"],
    months: [8, 9],
    dateNote: "Usually late August or September, in the Malayalam month of Chingam; the main day, Thiruvonam, moves with the calendar.",
    tradition: "cultural",
    short: "Onam photos from one selfie: a kasavu saree or mundu portrait, a family sadya photo, a greeting card and a pookalam background.",
    about: [
      "Onam is Kerala's harvest festival, celebrated by Malayalis of every faith and by large communities in the Gulf, the UK and the US. It welcomes home the legendary King Mahabali, and for ten days homes are decorated with pookalam, carpets of flower petals laid in patterns at the door. The main day, Thiruvonam, is built around the sadya, a feast of more than twenty dishes served on a banana leaf.",
      "The Onam look is famous: the off-white kasavu saree with a gold border, or the set mundu, for women, and the kasavu mundu with a shirt for men. Snake-boat races, the Thiruvathira dance and swings hung from trees fill the rest of the days.",
      "These apps give you the classic Onam picture from one selfie: a kasavu portrait, a family photo at the sadya with everyone kept in, a \"Happy Onam\" card, or your own photo behind a bright pookalam. Each costs 2 credits.",
    ],
    gradient: ["#EAB308", "#15803D"],
    style: {
      attire: "Kerala festive clothes: an off-white kasavu saree or set mundu with a gold border, jasmine in the hair and gold jewellery for women, an off-white kasavu mundu with a cream shirt for men",
      setting: "in a traditional Kerala home courtyard with coconut palms beyond",
      decor: "a large circular pookalam of flower petals on the floor, brass nilavilakku lamps and banana leaves",
      palette: "off-white, gold, marigold orange and fresh green",
      light: "soft warm daylight",
      greeting: "Happy Onam",
    },
    apps: [
      portrait("Onam Kasavu Portrait", "A kasavu saree or mundu portrait from one selfie.", "🌸"),
      family("Onam Sadya Family Photo", "Everyone in your photo at the Onam feast.", "🍌"),
      card("Onam Greeting Card", "Your photo on a card that says \"Happy Onam\".", "💌"),
      scene("Pookalam Background", "Keep your photo, add a flower pookalam and brass lamps.", "🌼"),
    ],
    related: ["saree-photoshoot", "festival-photoshoot"],
  },
  {
    slug: "pongal",
    name: "Pongal & Makar Sankranti",
    aliases: ["Pongal", "Thai Pongal", "Makar Sankranti", "Sankranti", "Uttarayan", "Kite festival"],
    emoji: "🌾",
    regions: ["south-asia"],
    countries: ["India", "Sri Lanka", "Malaysia", "Singapore"],
    months: [1],
    dateNote: "Around 14 January each year. Pongal and Makar Sankranti follow the sun rather than the moon, so the date barely moves.",
    tradition: "cultural",
    short: "Pongal and Sankranti photos from one selfie: a harvest portrait, a family photo, a greeting card and a kolam-and-sugarcane background.",
    about: [
      "Pongal is the Tamil harvest festival, held over four days in mid-January in Tamil Nadu, Sri Lanka and Tamil communities around the world. Its centre is the moment the new rice, cooked with milk and jaggery in a clay pot, boils over, and everyone shouts \"Pongalo Pongal!\". Homes are decorated with kolam patterns drawn in rice flour and with stalks of sugarcane.",
      "The same day is Makar Sankranti across much of India, Uttarayan in Gujarat with skies full of kites, and Lohri the night before in Punjab. Everywhere it is a day for new clothes, sweets and thanks for the harvest.",
      "These apps give you that picture from a selfie: a silk saree or veshti portrait, a family photo with everyone kept in, a \"Happy Pongal\" card, or your own photo in front of kolam, sugarcane and the boiling pot. Each costs 2 credits.",
    ],
    gradient: ["#CA8A04", "#C2410C"],
    style: {
      attire: "South Indian festive clothes: a silk saree with a contrast border and jasmine in the hair for women, a white veshti with a silk shirt for men",
      setting: "in the courtyard of a village home on harvest morning",
      decor: "a white rice-flour kolam on the ground, sugarcane stalks, turmeric plants and a clay pot boiling over on a wood fire",
      palette: "turmeric yellow, sugarcane green, terracotta and white",
      light: "fresh, golden morning sunlight",
      greeting: "Happy Pongal",
    },
    apps: [
      portrait("Pongal Portrait", "A silk saree or veshti harvest portrait from one selfie.", "🌾"),
      family("Pongal Family Photo", "Everyone in your photo at the Pongal pot.", "👨‍👩‍👧"),
      card("Pongal Greeting Card", "Your photo on a card that says \"Happy Pongal\".", "💌"),
      scene("Kolam & Sugarcane Background", "Keep your photo, add kolam, sugarcane and the Pongal pot.", "🎋"),
    ],
    related: ["festival-photoshoot", "saree-photoshoot"],
  },
  {
    slug: "raksha-bandhan",
    name: "Raksha Bandhan",
    aliases: ["Rakhi", "Rakshabandhan", "Rakhi Purnima"],
    emoji: "🧵",
    regions: ["south-asia"],
    countries: ["India", "Nepal", "Mauritius"],
    months: [8],
    dateNote: "Usually August, on the full moon of the Hindu month of Shravana.",
    tradition: "cultural",
    short: "Raksha Bandhan photos from one photo: a festive portrait, a brother-and-sister photo, a Rakhi card and a festive background.",
    about: [
      "Raksha Bandhan, or Rakhi, celebrates the bond between brothers and sisters. A sister ties a rakhi, a decorated thread, around her brother's wrist, puts a tilak on his forehead and feeds him a sweet; he promises to look out for her and gives her a gift. Today cousins, sisters, brothers and close friends all exchange rakhis, and families who live apart post them across the world.",
      "It is a happy, colourful day for photos: new clothes, plates of rakhis, sweets and lamps, and a lot of teasing between siblings.",
      "These apps make that picture from a photo you already have. Get a festive portrait, a sibling photo with everyone in your picture kept in (upload one photo of you together), a \"Happy Raksha Bandhan\" card, or your own photo in front of a festive Rakhi setting. Each costs 2 credits.",
    ],
    gradient: ["#DB2777", "#F59E0B"],
    style: {
      attire: "festive Indian clothes in bright colours: a kurta set or a light lehenga for women, a kurta with a jacket for men",
      setting: "in a bright, decorated living room",
      decor: "a plate with colourful rakhis, a small lamp, sweets and marigold garlands",
      palette: "pink, saffron, gold and turquoise",
      light: "soft warm daylight",
      greeting: "Happy Raksha Bandhan",
      avoid: NO_DEITIES,
    },
    apps: [
      portrait("Raksha Bandhan Portrait", "A festive Rakhi portrait from one selfie.", "🧵"),
      family("Rakhi Sibling Photo", "You and your siblings, tying the rakhi together.", "👫",
        "If there are two or more people, show them as siblings celebrating Rakhi, one tying a colourful rakhi thread around the other's wrist, both smiling."),
      card("Rakhi Greeting Card", "Your photo on a card that says \"Happy Raksha Bandhan\".", "💌"),
      scene("Rakhi Festive Background", "Keep your photo, add rakhis, sweets and marigolds behind you.", "✨"),
    ],
    related: ["festival-photoshoot"],
  },
  {
    slug: "karva-chauth",
    name: "Karva Chauth",
    aliases: ["Karwa Chauth", "Karva Chauth fast"],
    emoji: "🌙",
    regions: ["south-asia"],
    countries: ["India", "Pakistan", "Nepal"],
    months: [10, 11],
    dateNote: "Usually October or early November, four days after the full moon of the Hindu month of Kartik (Purnimanta calendar).",
    tradition: "religious",
    short: "Karva Chauth photos from one photo: a bridal-red portrait, a couple photo under the moon, a greeting card and a moonlit background.",
    about: [
      "Karva Chauth is a one-day fast kept mainly by married women in North India, from sunrise until the moon rises. Women dress like brides in red and gold, put on mehndi and bangles, gather in the afternoon for the story and the puja, and break the fast at moonrise after looking at the moon, and then their husband, through a sieve.",
      "It has become one of the most photographed evenings of the year, especially for couples: the red outfits, the decorated thali with its lamp and sieve, and the moment under the moon.",
      "These apps make that picture from a photo you have. Get a portrait in bridal red, a couple photo under the moon (or a solo one if you're alone in the picture), a \"Happy Karva Chauth\" card, or your own photo with a moonlit sky and lamps behind you. Each costs 2 credits.",
    ],
    gradient: ["#B91C1C", "#7C2D12"],
    style: {
      attire: "bridal festive clothes: a red or maroon saree or lehenga with gold embroidery, bangles and mehndi for women, a cream or maroon kurta with a jacket for men",
      setting: "on a rooftop terrace at moonrise",
      decor: "a full moon low in the sky, a decorated thali with a small lamp, a sieve and marigolds",
      palette: "bridal red, maroon, gold and moonlit blue",
      light: "soft moonlight mixed with the warm glow of a small lamp",
      greeting: "Happy Karva Chauth",
      avoid: NO_DEITIES,
    },
    apps: [
      portrait("Karva Chauth Portrait", "A bridal-red Karva Chauth portrait from one selfie.", "🌙"),
      couple("Karva Chauth Couple Photo", "The two of you under the moon with the thali.", "💑"),
      card("Karva Chauth Greeting Card", "Your photo on a card that says \"Happy Karva Chauth\".", "💌"),
      scene("Moonrise Background", "Keep your photo, add a rising moon and lamps behind you.", "🌕"),
    ],
    related: ["festival-photoshoot", "saree-photoshoot"],
  },
  {
    slug: "baisakhi",
    name: "Baisakhi",
    aliases: ["Vaisakhi", "Visakhi", "Punjabi New Year", "Khalsa Sajna Diwas"],
    emoji: "🌾",
    regions: ["south-asia", "worldwide"],
    countries: ["India", "Pakistan", "United Kingdom", "Canada", "United States"],
    months: [4],
    dateNote: "13 or 14 April each year: it follows the solar calendar, so the date hardly moves.",
    tradition: "cultural",
    short: "Baisakhi photos from one selfie: a Punjabi festive portrait, a bhangra friends photo, a greeting card and a golden wheat-field background.",
    about: [
      "Baisakhi, or Vaisakhi, is the spring harvest festival of Punjab and the Punjabi New Year. Farmers celebrate the wheat harvest, fairs fill the villages, and the day ends with bhangra and giddha danced to the dhol. For Sikhs it also marks the founding of the Khalsa in 1699, and processions and gatherings are held in Punjab and in Punjabi communities in the UK, Canada and the US.",
      "The festive look is bright and bold: phulkari dupattas and colourful salwar kameez, kurta pajama with a waistcoat, and fields of golden wheat behind.",
      "These apps make that picture from a selfie: a Punjabi festive portrait, a friends photo with everyone kept in, a \"Happy Baisakhi\" card, or your own photo in front of golden wheat at harvest. We never add a turban or any religious article; if you wear one in your photo, it stays as it is. Each costs 2 credits.",
    ],
    gradient: ["#EAB308", "#EA580C"],
    style: {
      attire: "bright Punjabi festive clothes: a colourful salwar kameez with a phulkari dupatta for women, a kurta pajama with an embroidered waistcoat for men",
      setting: "at the edge of a golden wheat field at harvest time",
      decor: "ripe wheat, a festive fair softly blurred behind, colourful dupattas and a dhol",
      palette: "golden wheat, mustard yellow, orange and bright pink",
      light: "warm late-afternoon sunshine",
      greeting: "Happy Baisakhi",
      avoid: "Never add a turban, patka or any religious article the person isn't already wearing, and no religious script.",
    },
    apps: [
      portrait("Baisakhi Portrait", "A bright Punjabi festive portrait from one selfie.", "🌾"),
      friends("Baisakhi Bhangra Photo", "Your whole group, dancing bhangra at the harvest.", "🥁"),
      card("Baisakhi Greeting Card", "Your photo on a card that says \"Happy Baisakhi\".", "💌"),
      scene("Wheat Field Background", "Keep your photo, put golden harvest wheat behind you.", "🌻"),
    ],
  },

  /* ── Islamic, Persian ────────────────────────────────────────────────── */
  {
    slug: "eid-al-fitr",
    name: "Eid al-Fitr",
    aliases: ["Eid ul-Fitr", "Eid", "Ramzan Eid", "Meethi Eid", "Hari Raya Aidilfitri", "Lebaran", "Ramazan Bayramı"],
    emoji: "🌙",
    regions: ["middle-east", "south-asia", "southeast-asia", "africa", "worldwide"],
    countries: ["Saudi Arabia", "United Arab Emirates", "Egypt", "Turkey", "Pakistan", "India", "Bangladesh", "Indonesia", "Malaysia", "Nigeria", "United Kingdom"],
    months: [3],
    dateNote: "It ends Ramadan and follows the Islamic lunar calendar, so it moves about 11 days earlier each year. In 2026 and 2027 it falls in March; the exact day depends on the new moon.",
    tradition: "religious",
    short: "Eid al-Fitr photos from one selfie: an Eid portrait, a family photo, an Eid Mubarak card and a lantern-lit background.",
    about: [
      "Eid al-Fitr marks the end of Ramadan, the month of fasting. It begins with special morning prayers and goes on for one to three days of visiting family and friends, giving gifts and money to children, and eating: sheer khurma in South Asia, ketupat in Indonesia and Malaysia, maamoul in the Arab world. Before the prayers, families give zakat al-fitr, a charity so that everyone can celebrate.",
      "It is a day for new clothes and family photos: elegant abayas, kaftans, anarkalis and shalwar kameez, and crisp kurtas and thobes, in soft pastels or rich jewel tones, with homes decorated with lanterns and fairy lights.",
      "These apps make that picture from one selfie: an Eid portrait in elegant festive clothes, a family photo with everyone kept in the frame, an \"Eid Mubarak\" card, or your own photo in front of glowing lanterns. Each costs 2 credits.",
    ],
    gradient: ["#0F766E", "#B45309"],
    style: {
      attire: "elegant Eid clothes: a flowing embroidered kaftan, abaya, anarkali or shalwar kameez for women, a crisp kurta or thobe for men, in soft pastel or deep jewel tones",
      setting: "in an elegant home decorated for Eid in the evening",
      decor: "glowing brass lanterns, fairy lights, a crescent-moon decoration, dates and sweets on a table",
      palette: "emerald, gold, ivory and soft lilac",
      light: "warm lantern light with soft golden bokeh",
      greeting: "Eid Mubarak",
      avoid: ISLAMIC,
    },
    apps: [
      portrait("Eid Portrait", "An elegant Eid portrait in festive clothes from one selfie.", "🌙"),
      family("Eid Family Photo", "Everyone in your photo, dressed up for Eid.", "👨‍👩‍👧"),
      card("Eid Mubarak Card", "Your photo on a card that says \"Eid Mubarak\".", "💌"),
      scene("Eid Lantern Background", "Keep your photo, add glowing lanterns and a crescent moon.", "🏮"),
    ],
    related: ["festival-photoshoot"],
  },
  {
    slug: "eid-al-adha",
    name: "Eid al-Adha",
    aliases: ["Bakrid", "Bakra Eid", "Eid ul-Adha", "Eid al-Kabir", "Hari Raya Haji", "Kurban Bayramı", "Feast of Sacrifice"],
    emoji: "🕌",
    regions: ["middle-east", "south-asia", "southeast-asia", "africa", "worldwide"],
    countries: ["Saudi Arabia", "United Arab Emirates", "Egypt", "Turkey", "Pakistan", "India", "Bangladesh", "Indonesia", "Morocco", "Nigeria"],
    months: [5],
    dateNote: "It follows the Islamic lunar calendar and moves about 11 days earlier each year. In 2026 and 2027 it falls in May, during the Hajj pilgrimage season.",
    tradition: "religious",
    short: "Eid al-Adha photos from one selfie: a festive portrait, a family photo, an Eid Mubarak card and a lantern-lit background.",
    about: [
      "Eid al-Adha is the larger of the two Eids. It comes at the end of the Hajj pilgrimage to Mecca and remembers the prophet Ibrahim's devotion. Families gather for morning prayers, visit relatives, share festive meals and give a large share of food to neighbours and to people in need. In many countries it is a public holiday of three or four days.",
      "Like Eid al-Fitr, it is a day for the best clothes of the year and for family photos at home: rich fabrics, embroidery, gold and soft lantern light.",
      "These apps give you that picture from a selfie: a festive Eid portrait, a family photo with everyone kept in, an \"Eid Mubarak\" card, or your own photo in front of glowing lanterns. Our pictures keep to people, homes and lights. Each costs 2 credits.",
    ],
    gradient: ["#065F46", "#CA8A04"],
    style: {
      attire: "elegant Eid clothes: an embroidered kaftan, abaya or shalwar kameez for women, a crisp kurta or thobe with a light shawl for men, in rich jewel tones",
      setting: "in a warm, elegantly decorated home on Eid",
      decor: "brass lanterns, fairy lights, a crescent-moon decoration and a festive table of sweets",
      palette: "deep green, gold, ivory and burgundy",
      light: "warm lantern light with soft bokeh",
      greeting: "Eid Mubarak",
      avoid: ISLAMIC + " No animals, livestock, meat or anything that suggests sacrifice.",
    },
    apps: [
      portrait("Eid al-Adha Portrait", "A festive Eid portrait in rich clothes from one selfie.", "🕌"),
      family("Eid al-Adha Family Photo", "Everyone in your photo, together for Eid.", "👨‍👩‍👧"),
      card("Eid al-Adha Mubarak Card", "Your photo on a card that says \"Eid Mubarak\".", "💌"),
      scene("Eid al-Adha Lantern Background", "Keep your photo, add lanterns and a crescent moon.", "🏮"),
    ],
  },
  {
    slug: "ramadan",
    name: "Ramadan",
    aliases: ["Ramzan", "Ramazan", "Iftar", "Ramadan Kareem", "Ramadan Mubarak"],
    emoji: "🏮",
    regions: ["middle-east", "south-asia", "southeast-asia", "africa", "worldwide"],
    countries: ["Saudi Arabia", "United Arab Emirates", "Egypt", "Turkey", "Pakistan", "India", "Indonesia", "Malaysia", "Morocco", "United Kingdom"],
    months: [2, 3],
    dateNote: "A month of fasting that follows the Islamic lunar calendar, moving about 11 days earlier each year. In 2026 and 2027 it runs from February into March.",
    tradition: "religious",
    short: "Ramadan photos from one selfie: a lantern-lit portrait, an iftar family photo, a Ramadan Kareem card and a fanous background.",
    about: [
      "Ramadan is the ninth month of the Islamic calendar, when Muslims fast from dawn until sunset. Each evening the fast is broken at iftar, often with a date and water first, and then a shared meal with family, friends and neighbours. Nights are for prayer, visits and late suhoor meals before dawn, and the month ends with Eid al-Fitr.",
      "Streets and homes glow through the month: the fanous lanterns of Egypt, strings of crescent-and-star lights, and long iftar tables set for many people at once.",
      "These apps make that picture from one selfie: a calm, lantern-lit Ramadan portrait, an iftar family photo with everyone kept in, a \"Ramadan Kareem\" card, or your own photo in front of glowing fanous lanterns. Each costs 2 credits.",
    ],
    gradient: ["#1E3A8A", "#B45309"],
    style: {
      attire: "elegant modest clothes: a flowing kaftan or abaya for women, a kurta or thobe for men, in deep blue, ivory or gold",
      setting: "at a home iftar table in the evening",
      decor: "glowing fanous lanterns, crescent-and-star string lights, dates, water and a table set for iftar",
      palette: "midnight blue, gold, ivory and warm amber",
      light: "warm lantern light at dusk",
      greeting: "Ramadan Kareem",
      avoid: ISLAMIC + " Show iftar as people sitting down to eat together after sunset.",
    },
    apps: [
      portrait("Ramadan Portrait", "A calm, lantern-lit Ramadan portrait from one selfie.", "🏮"),
      family("Iftar Family Photo", "Everyone in your photo around the iftar table.", "🍽️"),
      card("Ramadan Kareem Card", "Your photo on a card that says \"Ramadan Kareem\".", "💌"),
      scene("Fanous Lantern Background", "Keep your photo, add glowing Ramadan lanterns behind you.", "✨"),
    ],
  },
  {
    slug: "nowruz",
    name: "Nowruz",
    aliases: ["Norooz", "Navruz", "Nevruz", "Persian New Year", "Iranian New Year"],
    emoji: "🌷",
    regions: ["middle-east", "worldwide"],
    countries: ["Iran", "Afghanistan", "Tajikistan", "Uzbekistan", "Kazakhstan", "Azerbaijan", "Kyrgyzstan", "Turkmenistan", "Iraq"],
    months: [3],
    dateNote: "At the spring equinox, 20 or 21 March, at the exact moment the season changes.",
    tradition: "cultural",
    short: "Nowruz photos from one selfie: a spring portrait, a family Haft-sin photo, a Happy Nowruz card and a blossom background.",
    about: [
      "Nowruz, \"new day\", is the Persian New Year, celebrated for more than 3,000 years at the spring equinox. Around 300 million people mark it across Iran, Afghanistan, Central Asia, the Caucasus and among Kurdish communities. Families spring-clean their homes, jump over small bonfires on the last Wednesday of the year, and visit one another for nearly two weeks.",
      "At the heart of every Iranian home is the Haft-sin table, with seven things whose names begin with \"s\": sprouted wheat, apples, garlic, vinegar, sumac, a sweet pudding and dried oleaster, alongside goldfish, a mirror, painted eggs and hyacinths.",
      "These apps make that picture from one selfie: a fresh spring portrait, a family photo at the Haft-sin table with everyone kept in, a \"Happy Nowruz\" card, or your own photo in front of spring blossom and the Haft-sin. Each costs 2 credits.",
    ],
    gradient: ["#16A34A", "#DB2777"],
    style: {
      attire: "smart new spring clothes in fresh colours, elegant and modern, with a light embroidered touch",
      setting: "in a bright home beside a Haft-sin table in spring",
      decor: "a Haft-sin table with sprouted wheat, red apples, hyacinths, painted eggs, a mirror, candles and a small bowl of goldfish",
      palette: "spring green, blossom pink, sky blue and white",
      light: "fresh, bright spring daylight",
      greeting: "Happy Nowruz",
      avoid: "No script or calligraphy anywhere in the image.",
    },
    apps: [
      portrait("Nowruz Portrait", "A fresh spring portrait for the new year from one selfie.", "🌷"),
      family("Haft-sin Family Photo", "Everyone in your photo at the Nowruz table.", "👨‍👩‍👧"),
      card("Nowruz Greeting Card", "Your photo on a card that says \"Happy Nowruz\".", "💌"),
      scene("Spring Blossom Background", "Keep your photo, add the Haft-sin and spring blossom.", "🌸"),
    ],
  },

  /* ── Jewish ──────────────────────────────────────────────────────────── */
  {
    slug: "hanukkah",
    name: "Hanukkah",
    aliases: ["Chanukah", "Hanukah", "Festival of Lights", "Chanukkah"],
    emoji: "🕎",
    regions: ["middle-east", "americas", "europe", "worldwide"],
    countries: ["Israel", "United States", "Canada", "United Kingdom", "France", "Argentina"],
    months: [11, 12],
    dateNote: "Eight nights in late November or December, starting on the 25th of the Hebrew month of Kislev.",
    tradition: "religious",
    short: "Hanukkah photos from one selfie: a candle-lit portrait, a family menorah photo, a Happy Hanukkah card and a festive background.",
    about: [
      "Hanukkah remembers the rededication of the Temple in Jerusalem in the 2nd century BCE and the story of a small jar of oil that burned for eight days. Each night for eight nights, families light one more candle on the hanukkiah, the nine-branched menorah, place it in a window, and say blessings together.",
      "It is a warm, home-centred festival: latkes and sufganiyot fried in oil, games of dreidel for chocolate coins, gifts for children, and blue-and-white decorations.",
      "These apps make that picture from one selfie: a cosy, candle-lit portrait, a family photo by the menorah with everyone kept in, a \"Happy Hanukkah\" card, or your own photo with a glowing menorah and festive lights behind you. Each costs 2 credits.",
    ],
    gradient: ["#1D4ED8", "#CBD5E1"],
    style: {
      attire: "smart, cosy winter clothes in blue, white or silver",
      setting: "in a warm living room by a window on a winter evening",
      decor: "a lit nine-branched hanukkiah (menorah) in the window, a spinning dreidel, gold-wrapped chocolate coins and a plate of latkes",
      palette: "royal blue, white, silver and warm candle gold",
      light: "warm candlelight against a blue winter evening",
      greeting: "Happy Hanukkah",
      avoid: "No Hebrew lettering or scripture anywhere, and never add a kippah, tallit or any religious item the person isn't already wearing.",
    },
    apps: [
      portrait("Hanukkah Portrait", "A cosy, candle-lit Hanukkah portrait from one selfie.", "🕎"),
      family("Hanukkah Family Photo", "Everyone in your photo, lighting the menorah.", "👨‍👩‍👧"),
      card("Hanukkah Greeting Card", "Your photo on a card that says \"Happy Hanukkah\".", "💌"),
      scene("Menorah Background", "Keep your photo, add a glowing menorah and winter lights.", "✨"),
    ],
  },
  {
    slug: "rosh-hashanah",
    name: "Rosh Hashanah",
    aliases: ["Jewish New Year", "Rosh Hashana", "Shana Tova"],
    emoji: "🍎",
    regions: ["middle-east", "americas", "europe", "worldwide"],
    countries: ["Israel", "United States", "Canada", "United Kingdom", "France"],
    months: [9, 10],
    dateNote: "Usually September or early October, on the first two days of the Hebrew month of Tishrei.",
    tradition: "religious",
    short: "Rosh Hashanah photos from one selfie: a festive portrait, a family holiday-table photo, a Shana Tova card and an autumn background.",
    about: [
      "Rosh Hashanah is the Jewish New Year, the start of the ten Days of Awe that lead to Yom Kippur. Families gather for festive meals, hear the shofar, a ram's horn, blown in synagogue, and wish each other \"Shana Tova\", a good year.",
      "The table carries the symbols of a sweet new year: apple slices dipped in honey, a round challah, pomegranates for plenty, and dates. Many people also walk to running water for tashlich, casting away the past year's mistakes.",
      "These apps make that picture from one selfie: a smart festive portrait, a family photo at the holiday table with everyone kept in, a \"Shana Tova\" card, or your own photo in front of apples, honey and pomegranates in autumn light. Each costs 2 credits.",
    ],
    gradient: ["#B91C1C", "#CA8A04"],
    style: {
      attire: "smart festive clothes in white, cream or deep autumn tones",
      setting: "at a holiday dinner table at home in early autumn",
      decor: "red apples, a jar of honey, a round challah, pomegranates and candles on a white tablecloth",
      palette: "apple red, honey gold, pomegranate crimson and white",
      light: "warm evening light with soft candle glow",
      greeting: "Shana Tova",
      avoid: "No Hebrew lettering or scripture anywhere, and never add a kippah, tallit or any religious item the person isn't already wearing.",
    },
    apps: [
      portrait("Rosh Hashanah Portrait", "A smart, festive New Year portrait from one selfie.", "🍎"),
      family("Rosh Hashanah Family Photo", "Everyone in your photo at the holiday table.", "👨‍👩‍👧"),
      card("Shana Tova Card", "Your photo on a card that says \"Shana Tova\".", "💌"),
      scene("Apples & Honey Background", "Keep your photo, add apples, honey and pomegranates.", "🍯"),
    ],
  },

  /* ── East Asia ───────────────────────────────────────────────────────── */
  {
    slug: "lunar-new-year",
    name: "Lunar New Year",
    aliases: ["Chinese New Year", "Spring Festival", "Chunjie", "Tết", "Tet", "Seollal", "Losar"],
    emoji: "🧧",
    regions: ["east-asia", "southeast-asia", "worldwide"],
    countries: ["China", "Taiwan", "Hong Kong", "Singapore", "Malaysia", "Vietnam", "South Korea", "Indonesia", "United States"],
    months: [1, 2],
    dateNote: "Late January to mid-February, on the second new moon after the winter solstice. Celebrations run for up to fifteen days, ending with the Lantern Festival.",
    tradition: "cultural",
    short: "Lunar New Year photos from one selfie: a red-and-gold portrait, a family reunion photo, a greeting card and a lantern background.",
    about: [
      "Lunar New Year, called Spring Festival in China, Tết in Vietnam and Seollal in Korea, is the most important holiday of the year for well over a billion people. Families travel huge distances to be home for the reunion dinner on New Year's Eve, then spend the following days visiting relatives, handing out red envelopes of lucky money, and watching lion and dragon dances.",
      "Red and gold are everywhere, for luck: red lanterns, paper cuttings, couplets by the door and new clothes, often a qipao or a tang-style jacket in China, an áo dài in Vietnam and a hanbok in Korea.",
      "These apps make that picture from one selfie: a red-and-gold New Year portrait, a family reunion photo with everyone kept in, a \"Happy Lunar New Year\" card, or your own photo in front of rows of red lanterns. Each costs 2 credits.",
    ],
    gradient: ["#DC2626", "#CA8A04"],
    style: {
      attire: "festive red-and-gold New Year clothes: an elegant silk qipao-style dress or tang-style jacket with frog buttons, modern and tasteful",
      setting: "on a street or courtyard decorated for the New Year",
      decor: "rows of red paper lanterns, plum blossom, gold coins and red envelopes",
      palette: "lucky red, gold and blossom pink",
      light: "warm lantern light with soft bokeh",
      greeting: "Happy Lunar New Year",
      avoid: "No Chinese characters or any other script anywhere, and no costume stereotypes.",
    },
    apps: [
      portrait("Lunar New Year Portrait", "A red-and-gold New Year portrait from one selfie.", "🧧"),
      family("Lunar New Year Family Photo", "Everyone in your photo at the reunion.", "👨‍👩‍👧"),
      card("Lunar New Year Card", "Your photo on a card that says \"Happy Lunar New Year\".", "💌"),
      scene("Red Lantern Background", "Keep your photo, put rows of red lanterns behind you.", "🏮"),
    ],
  },
  {
    slug: "mid-autumn",
    name: "Mid-Autumn Festival",
    aliases: ["Moon Festival", "Mooncake Festival", "Zhongqiu", "Tết Trung Thu", "Lantern Festival"],
    emoji: "🥮",
    regions: ["east-asia", "southeast-asia"],
    countries: ["China", "Taiwan", "Hong Kong", "Vietnam", "Singapore", "Malaysia"],
    months: [9, 10],
    dateNote: "September or early October, on the 15th day of the 8th lunar month, when the moon is fullest.",
    tradition: "cultural",
    short: "Mid-Autumn photos from one selfie: a moonlit portrait, a couple photo under the full moon, a greeting card and a lantern background.",
    about: [
      "The Mid-Autumn Festival celebrates the harvest and the brightest full moon of the year. Families gather to admire the moon, share round mooncakes filled with lotus paste or red bean, and drink tea, while children carry glowing lanterns shaped like rabbits, stars and fish. In Vietnam it is also a children's festival, Tết Trung Thu, with lion dances in the streets.",
      "The round moon and the round mooncakes stand for reunion, which is why it is such a family and couples' occasion, and why so many photos are taken by lantern light under the moon.",
      "These apps make that picture from one selfie: a moonlit portrait with lanterns, a couple photo under the full moon (or a solo one if you're alone in the picture), a \"Happy Mid-Autumn Festival\" card, or your own photo in front of glowing lanterns and a huge moon. Each costs 2 credits.",
    ],
    gradient: ["#B45309", "#1E3A8A"],
    style: {
      attire: "elegant autumn clothes, optionally with a modern silk hanfu-inspired or qipao-inspired touch",
      setting: "in a garden or by a lake at night under a huge full moon",
      decor: "glowing paper lanterns shaped like rabbits and moons, osmanthus flowers and a plate of mooncakes",
      palette: "moon gold, lantern orange and night blue",
      light: "soft silver moonlight mixed with warm lantern glow",
      greeting: "Happy Mid-Autumn Festival",
      avoid: "No Chinese characters or any other script anywhere.",
    },
    apps: [
      portrait("Mid-Autumn Portrait", "A moonlit lantern portrait from one selfie.", "🥮"),
      couple("Mid-Autumn Couple Photo", "The two of you under the full moon with lanterns.", "🌕"),
      card("Mid-Autumn Greeting Card", "Your photo on a card that says \"Happy Mid-Autumn Festival\".", "💌"),
      scene("Full Moon Lantern Background", "Keep your photo, add a full moon and glowing lanterns.", "🏮"),
    ],
  },
  {
    slug: "dragon-boat",
    name: "Dragon Boat Festival",
    aliases: ["Duanwu", "Tuen Ng", "Double Fifth Festival", "Dragon Boat"],
    emoji: "🐉",
    regions: ["east-asia", "southeast-asia"],
    countries: ["China", "Taiwan", "Hong Kong", "Macau", "Singapore", "Malaysia"],
    months: [5, 6],
    dateNote: "Late May or June, on the 5th day of the 5th lunar month.",
    tradition: "cultural",
    short: "Dragon Boat Festival photos from one selfie: a summer portrait, a friends race-day photo, a greeting card and a dragon-boat background.",
    about: [
      "The Dragon Boat Festival, Duanwu, is more than 2,000 years old and remembers the poet Qu Yuan. Its best-known sight is the races: long, narrow boats with carved dragon heads, paddled by crews of twenty to the beat of a drum. Races are held on rivers and harbours in China, Hong Kong, Taiwan and Singapore, and now in cities from Toronto to Sydney.",
      "Families eat zongzi, sticky-rice dumplings wrapped in bamboo leaves, hang mugwort by the door and tie colourful silk threads on children's wrists for good health.",
      "These apps make that picture from one selfie: a bright summer portrait by the water, a race-day photo with all your friends kept in, a \"Happy Dragon Boat Festival\" card, or your own photo with racing dragon boats behind you. Each costs 2 credits.",
    ],
    gradient: ["#0E7490", "#DC2626"],
    style: {
      attire: "bright, comfortable summer clothes, team T-shirts or light linen, with a coloured silk thread bracelet",
      setting: "on a riverbank or harbour on race day",
      decor: "colourful dragon boats with carved dragon heads racing on the water, drums, flags and bamboo-wrapped zongzi",
      palette: "river teal, dragon red, gold and fresh green",
      light: "bright summer daylight",
      greeting: "Happy Dragon Boat Festival",
      avoid: "No Chinese characters or any other script anywhere.",
    },
    apps: [
      portrait("Dragon Boat Festival Portrait", "A bright race-day portrait by the water.", "🐉"),
      friends("Dragon Boat Team Photo", "Your whole crew on race day at the river.", "🚣"),
      card("Dragon Boat Festival Card", "Your photo on a card that says \"Happy Dragon Boat Festival\".", "💌"),
      scene("Dragon Boat Race Background", "Keep your photo, put racing dragon boats behind you.", "🌊"),
    ],
  },
  {
    slug: "hanami",
    name: "Hanami (Cherry Blossom)",
    aliases: ["Cherry Blossom Festival", "Sakura", "Hanami", "Cherry blossom season"],
    emoji: "🌸",
    regions: ["east-asia", "worldwide"],
    countries: ["Japan", "South Korea", "United States", "Canada"],
    months: [3, 4],
    dateNote: "Late March to early April in Tokyo and Kyoto. The blossom opens earlier in the south and later in the north, and lasts about a week.",
    tradition: "seasonal",
    short: "Cherry blossom photos from one selfie: a sakura portrait, a couple photo under the trees, a greeting card and a blossom background.",
    about: [
      "Hanami means \"flower viewing\", and every spring Japan follows the cherry-blossom forecast as closely as the weather. When the sakura open, friends, families and colleagues lay picnic sheets under the trees in parks such as Ueno in Tokyo and Maruyama in Kyoto, eat, drink and talk until well after dark, when the trees are lit up for yozakura, night blossom viewing.",
      "The blossom lasts only about a week, which is part of its meaning, and it is one of the most photographed sights in the world. Cherry-blossom festivals are also held in Korea, Washington DC and Vancouver.",
      "These apps make that picture from one selfie: a soft sakura portrait, a couple photo under the trees (or a solo one if you're alone in the picture), a \"Happy Hanami\" card, or your own photo in front of a canopy of pink blossom. Each costs 2 credits.",
    ],
    gradient: ["#F9A8D4", "#BE185D"],
    style: {
      attire: "light spring clothes in soft colours, or an elegant kimono or yukata if it suits them",
      setting: "under a canopy of cherry trees in full bloom in a Japanese park",
      decor: "pink sakura blossom overhead, petals drifting in the air, paper lanterns and a picnic sheet",
      palette: "blossom pink, white, soft sky blue and spring green",
      light: "soft, bright spring daylight filtered through blossom",
      greeting: "Happy Hanami",
      avoid: "No Japanese characters or any other script anywhere.",
    },
    apps: [
      portrait("Cherry Blossom Portrait", "A soft sakura portrait under the blossom.", "🌸"),
      couple("Cherry Blossom Couple Photo", "The two of you under cherry trees in full bloom.", "💑"),
      card("Hanami Greeting Card", "Your photo on a blossom card that says \"Happy Hanami\".", "💌"),
      scene("Sakura Background", "Keep your photo, put pink cherry blossom behind you.", "🌸"),
    ],
  },
  {
    slug: "chuseok",
    name: "Chuseok",
    aliases: ["Korean Thanksgiving", "Hangawi", "Chuseok holiday"],
    emoji: "🌕",
    regions: ["east-asia"],
    countries: ["South Korea", "North Korea"],
    months: [9, 10],
    dateNote: "September or early October, on the 15th day of the 8th lunar month, with a holiday of about three days.",
    tradition: "cultural",
    short: "Chuseok photos from one selfie: a hanbok portrait, a family photo, a Happy Chuseok card and a full-moon autumn background.",
    about: [
      "Chuseok, also called Hangawi, is Korea's great harvest festival. Over a holiday of about three days, millions travel to their family homes, honour their ancestors, visit family graves to tidy them, and share the year's first rice, fruit and songpyeon, half-moon rice cakes that families shape together the night before.",
      "Many people wear hanbok for the day, and the evening is for admiring the full moon, playing folk games and the circle dance ganggangsullae.",
      "These apps make that picture from one selfie: an elegant hanbok portrait, a family photo with everyone kept in, a \"Happy Chuseok\" card, or your own photo under a full moon and autumn trees. Each costs 2 credits.",
    ],
    gradient: ["#B45309", "#7C3AED"],
    style: {
      attire: "an elegant modern hanbok in soft autumn colours: a full skirt and short jacket for women, trousers and a jacket for men",
      setting: "in the courtyard of a traditional hanok house in autumn",
      decor: "persimmon trees, a full moon, songpyeon rice cakes and fruit on a low table",
      palette: "persimmon orange, plum, gold and soft jade",
      light: "warm golden autumn light turning to moonlight",
      greeting: "Happy Chuseok",
      avoid: "No Korean characters or any other script anywhere.",
    },
    apps: [
      portrait("Chuseok Hanbok Portrait", "An elegant hanbok portrait from one selfie.", "🌕"),
      family("Chuseok Family Photo", "Everyone in your photo, home for the harvest.", "👨‍👩‍👧"),
      card("Chuseok Greeting Card", "Your photo on a card that says \"Happy Chuseok\".", "💌"),
      scene("Hanok Moon Background", "Keep your photo, add a hanok courtyard and full moon.", "🏯"),
    ],
  },

  /* ── Southeast Asia ──────────────────────────────────────────────────── */
  {
    slug: "songkran",
    name: "Songkran",
    aliases: ["Thai New Year", "Water Festival", "Pi Mai", "Thingyan"],
    emoji: "💦",
    regions: ["southeast-asia"],
    countries: ["Thailand", "Laos", "Myanmar", "Cambodia"],
    months: [4],
    dateNote: "13 to 15 April, the traditional Thai New Year, in the hottest part of the year.",
    tradition: "cultural",
    short: "Songkran photos from one selfie: a water-festival portrait, a friends water-fight photo, a greeting card and a splash background.",
    about: [
      "Songkran is the Thai New Year, and it is the world's biggest water fight. For three days in April, the hottest time of the year, streets in Bangkok, Chiang Mai and every town fill with people armed with water guns, buckets and hoses, soaking everyone who passes. Neighbouring countries celebrate their own new year in the same week: Pi Mai in Laos and Thingyan in Myanmar.",
      "Behind the fun is a gentler tradition: pouring scented water over the hands of elders to ask for their blessing, and cleaning homes for the new year. People wear bright floral shirts and are soaked from morning to night.",
      "These apps make that picture from one selfie: a splash-soaked Songkran portrait, a water-fight photo with all your friends kept in, a \"Happy Songkran\" card, or your own photo with water splashing behind you. Each costs 2 credits.",
    ],
    gradient: ["#0EA5E9", "#F59E0B"],
    style: {
      attire: "bright floral summer shirts and light, casual clothes, a little wet from the water fight",
      setting: "on a lively street during the Songkran water festival",
      decor: "sparkling arcs of water from water guns and buckets, flower garlands and a festive crowd blurred behind",
      palette: "sky blue, tropical orange, flower pink and bright green",
      light: "bright, hot midday sunshine with water droplets catching the light",
      greeting: "Happy Songkran",
      avoid: "No Thai or any other script anywhere, and no monks or religious images.",
    },
    apps: [
      portrait("Songkran Portrait", "A splash-soaked water-festival portrait.", "💦"),
      friends("Songkran Water Fight Photo", "Your whole group in the middle of a water fight.", "🔫"),
      card("Songkran Greeting Card", "Your photo on a card that says \"Happy Songkran\".", "💌"),
      scene("Water Splash Background", "Keep your photo, add splashing water and festival colour.", "🌊"),
    ],
  },
  {
    slug: "loy-krathong",
    name: "Loy Krathong",
    aliases: ["Festival of Lights Thailand", "Yi Peng", "Krathong", "Lantern festival Chiang Mai"],
    emoji: "🪷",
    regions: ["southeast-asia"],
    countries: ["Thailand", "Laos", "Myanmar"],
    months: [11],
    dateNote: "Usually November, on the full moon of the 12th month of the Thai lunar calendar.",
    tradition: "cultural",
    short: "Loy Krathong photos from one selfie: a candle-lit portrait, a couple floating a krathong, a greeting card and a lantern-river background.",
    about: [
      "On the night of the November full moon, people across Thailand go down to rivers, canals and lakes to float a krathong: a small raft made of banana trunk and leaves, decorated with flowers, a candle and incense. Letting it drift away is a way of thanking the water and letting go of the year's troubles, and many couples float one together.",
      "In Chiang Mai the same nights bring Yi Peng, when thousands of paper lanterns rise into the sky at once, making it one of the most beautiful sights in Southeast Asia.",
      "These apps make that picture from one selfie: a candle-lit portrait by the water, a couple photo floating a krathong together (or a solo one if you're alone in the picture), a \"Happy Loy Krathong\" card, or your own photo with glowing lanterns over a river. Each costs 2 credits.",
    ],
    gradient: ["#7C3AED", "#F59E0B"],
    style: {
      attire: "elegant Thai-inspired festive clothes, such as a silk wrap skirt and fitted top for women and a silk shirt for men, or simple smart evening clothes",
      setting: "on a riverbank on the night of the full moon",
      decor: "flower krathongs with candles floating on dark water, and paper lanterns rising into the night sky",
      palette: "candle gold, lotus pink, night indigo and leaf green",
      light: "warm candlelight and lantern glow against a dark night",
      greeting: "Happy Loy Krathong",
      avoid: "No Thai or any other script anywhere, and no Buddha images or monks.",
    },
    apps: [
      portrait("Loy Krathong Portrait", "A candle-lit portrait by the water at night.", "🪷"),
      couple("Loy Krathong Couple Photo", "The two of you floating a krathong together.", "💑"),
      card("Loy Krathong Greeting Card", "Your photo on a card that says \"Happy Loy Krathong\".", "💌"),
      scene("Floating Lantern Background", "Keep your photo, add floating krathongs and sky lanterns.", "🏮"),
    ],
  },
  {
    slug: "vesak",
    name: "Vesak",
    aliases: ["Wesak", "Buddha Purnima", "Buddha Day", "Buddha Jayanti", "Visakha Bucha"],
    emoji: "🪷",
    regions: ["south-asia", "southeast-asia", "east-asia"],
    countries: ["Sri Lanka", "Thailand", "Myanmar", "Singapore", "Malaysia", "Nepal", "India", "Indonesia", "Vietnam"],
    months: [5],
    dateNote: "Usually May, on the full moon of the month of Vesakha. Some countries mark it in late April or early June.",
    tradition: "religious",
    short: "Vesak photos from one selfie: a calm portrait in white, a family lantern photo, a Happy Vesak card and a lantern-lit background.",
    about: [
      "Vesak is the most important day of the Buddhist year, remembering the birth, enlightenment and passing of the Buddha. It is a quiet, generous festival: people visit temples, wear white, keep the precepts, and share free food and drink with anyone who passes at roadside stalls called dansal in Sri Lanka.",
      "Evenings are lit with lanterns. In Sri Lanka, streets fill with Vesak kudu, intricate paper lanterns, and huge illuminated panels called pandols; in other countries, candlelit processions and floating lanterns mark the night.",
      "These apps make that picture from one selfie: a calm portrait in white with lanterns, a family photo with everyone kept in, a \"Happy Vesak\" card, or your own photo in front of glowing paper lanterns. Out of respect, our pictures never show Buddha images. Each costs 2 credits.",
    ],
    gradient: ["#EAB308", "#F8FAFC"],
    style: {
      attire: "simple, clean white clothes, calm and modest",
      setting: "on a quiet street or garden on Vesak night",
      decor: "rows of handmade paper lanterns, lotus flowers and small oil lamps",
      palette: "white, lotus pink, saffron and soft gold",
      light: "gentle warm lantern light at night",
      greeting: "Happy Vesak",
      avoid: "Never show a Buddha image, statue or picture, monks, temple interiors or any script.",
    },
    apps: [
      portrait("Vesak Portrait", "A calm, lantern-lit portrait in white from one selfie.", "🪷"),
      family("Vesak Family Photo", "Everyone in your photo among the Vesak lanterns.", "👨‍👩‍👧"),
      card("Vesak Greeting Card", "Your photo on a card that says \"Happy Vesak\".", "💌"),
      scene("Vesak Lantern Background", "Keep your photo, add glowing paper lanterns behind you.", "🏮"),
    ],
  },

  /* ── Europe ──────────────────────────────────────────────────────────── */
  {
    slug: "christmas",
    name: "Christmas",
    aliases: ["Xmas", "Christmas Eve", "Navidad", "Noël", "Weihnachten"],
    emoji: "🎄",
    regions: ["worldwide", "europe", "americas"],
    countries: ["United States", "United Kingdom", "Germany", "Philippines", "Brazil", "Mexico", "India", "Australia", "Nigeria"],
    months: [12],
    dateNote: "25 December. Many Orthodox churches celebrate on 7 January.",
    tradition: "religious",
    short: "Christmas photos from one selfie: a festive portrait, a family Christmas photo, a Merry Christmas card and a tree-and-lights background.",
    about: [
      "Christmas is celebrated by around two billion people, both as a Christian festival marking the birth of Jesus and as a family holiday far beyond the church. Homes are decorated with trees, lights and wreaths, families exchange gifts and sit down to a big meal, and cities fill with markets, carols and lights through December.",
      "It is also the year's biggest season for family photos and cards: matching jumpers by the tree, pyjamas on Christmas morning, and snow and fairy lights outside.",
      "These apps make that picture from one selfie: a cosy festive portrait, a family Christmas photo with everyone kept in, a \"Merry Christmas\" card, or your own photo in front of a lit tree and a fireplace. Each costs 2 credits, and the Christmas Photo app below adds more settings to choose from.",
    ],
    gradient: ["#15803D", "#B91C1C"],
    style: {
      attire: "cosy, smart Christmas clothes: knitted jumpers or velvet and tartan in red, green or cream",
      setting: "in a warm living room on Christmas Eve",
      decor: "a decorated Christmas tree with warm lights, wrapped gifts, a garland over a fireplace and candles",
      palette: "pine green, berry red, gold and cream",
      light: "warm fairy-light and firelight glow with soft bokeh",
      greeting: "Merry Christmas",
    },
    apps: [
      { kind: "portrait", name: "Christmas Photo", emoji: "🎄", blurb: "A festive Christmas portrait from one selfie.", use: "christmas-photo" },
      family("Christmas Family Photo", "Everyone in your photo by the Christmas tree.", "👨‍👩‍👧"),
      card("Christmas Greeting Card", "Your photo on a card that says \"Merry Christmas\".", "💌"),
      scene("Christmas Tree Background", "Keep your photo, add a lit tree, gifts and a fireplace.", "✨"),
    ],
    related: ["christmas-photo"],
  },
  {
    slug: "new-years-eve",
    name: "New Year's Eve",
    aliases: ["New Year", "NYE", "Hogmanay", "Silvester", "Réveillon"],
    emoji: "🎆",
    regions: ["worldwide"],
    countries: ["United States", "United Kingdom", "Australia", "Brazil", "Germany", "France", "India", "Japan", "Philippines"],
    months: [12, 1],
    dateNote: "31 December, counting down to midnight and 1 January.",
    tradition: "seasonal",
    short: "New Year's Eve photos from one selfie: a party portrait, a couple photo at midnight, a Happy New Year card and a fireworks background.",
    about: [
      "New Year's Eve is the one night celebrated almost everywhere at once, as midnight sweeps round the world from the Pacific to Hawaii. Sydney Harbour, London's Thames, Times Square and Copacabana Beach all draw crowds of hundreds of thousands for the countdown and the fireworks, while most people celebrate at a party or a dinner with friends and family.",
      "Every place has its own customs: twelve grapes at midnight in Spain, white clothes on the beach in Brazil, first-footing in Scotland. Almost everyone dresses up and clinks a glass at midnight.",
      "These apps make that picture from one selfie: a sparkling party portrait, a couple photo at midnight (or a solo one if you're alone in the picture), a \"Happy New Year\" card, or your own photo in front of fireworks over a city. Each costs 2 credits.",
    ],
    gradient: ["#1E1B4B", "#CA8A04"],
    style: {
      attire: "glamorous party clothes: a sequinned or satin dress for women, a sharp dark suit or velvet blazer for men",
      setting: "on a rooftop overlooking a city skyline at midnight",
      decor: "fireworks bursting over the skyline, confetti, sparklers and gold balloons",
      palette: "midnight navy, champagne gold, silver and black",
      light: "glittering fireworks light with sparkling bokeh",
      greeting: "Happy New Year",
      avoid: "Do not show any particular year number.",
    },
    apps: [
      portrait("New Year's Eve Portrait", "A sparkling party portrait from one selfie.", "🎆"),
      couple("New Year Couple Photo", "The two of you at midnight with fireworks.", "🥂"),
      card("Happy New Year Card", "Your photo on a card that says \"Happy New Year\".", "💌"),
      scene("Fireworks Background", "Keep your photo, put fireworks over a city skyline behind you.", "🎇"),
    ],
  },
  {
    slug: "easter",
    name: "Easter",
    aliases: ["Easter Sunday", "Pascha", "Ostern", "Pâques"],
    emoji: "🐣",
    regions: ["worldwide", "europe", "americas"],
    countries: ["United States", "United Kingdom", "Germany", "Italy", "Poland", "Brazil", "Philippines", "Australia"],
    months: [3, 4, 5],
    dateNote: "A Sunday in March or April, after the first full moon of spring. Orthodox Easter often falls a week or more later.",
    tradition: "religious",
    short: "Easter photos from one selfie: a spring portrait, a family egg-hunt photo, a Happy Easter card and a pastel spring background.",
    about: [
      "Easter is the most important Christian festival, celebrating the resurrection of Jesus, and it is also a spring holiday enjoyed far beyond the church. Families go to services, share a big lunch, and children hunt for chocolate eggs hidden around the house and garden.",
      "Each country has its own customs: painted eggs in Poland and Ukraine, the Easter tree in Germany, chocolate bunnies, hot cross buns in Britain and the Easter Monday egg-roll in Washington. Pastel colours, spring flowers and baskets of eggs set the scene.",
      "These apps make that picture from one selfie: a fresh spring portrait, a family egg-hunt photo with everyone kept in, a \"Happy Easter\" card, or your own photo in a pastel garden of tulips and painted eggs. Each costs 2 credits.",
    ],
    gradient: ["#A78BFA", "#F9A8D4"],
    style: {
      attire: "fresh spring clothes in pastel colours, smart but relaxed",
      setting: "in a sunny spring garden",
      decor: "tulips and daffodils, a basket of painted eggs, eggs hidden in the grass and blossom on the trees",
      palette: "lilac, baby pink, mint, butter yellow and sky blue",
      light: "soft, bright spring sunshine",
      greeting: "Happy Easter",
      avoid: "No crucifixes or religious figures added.",
    },
    apps: [
      portrait("Easter Portrait", "A fresh pastel spring portrait from one selfie.", "🐣"),
      family("Easter Egg Hunt Family Photo", "Everyone in your photo on an Easter egg hunt.", "🧺"),
      card("Easter Greeting Card", "Your photo on a card that says \"Happy Easter\".", "💌"),
      scene("Easter Garden Background", "Keep your photo, add tulips and painted eggs behind you.", "🌷"),
    ],
  },
  {
    slug: "oktoberfest",
    name: "Oktoberfest",
    aliases: ["Wiesn", "Octoberfest", "Munich beer festival"],
    emoji: "🥨",
    regions: ["europe", "worldwide"],
    countries: ["Germany", "United States", "Brazil", "Canada", "Australia"],
    months: [9, 10],
    dateNote: "Mid-to-late September until the first Sunday of October, in Munich. Many other cities hold their own in October.",
    tradition: "cultural",
    short: "Oktoberfest photos from one selfie: a dirndl or lederhosen portrait, a friends beer-tent photo, a Prost card and a Bavarian background.",
    about: [
      "Oktoberfest is held every year in Munich, on the meadow called the Theresienwiese, or simply the Wiesn, and draws around six million visitors over sixteen to eighteen days. It began with a royal wedding in 1810 and is now the world's biggest folk festival, copied in cities from Cincinnati to Blumenau in Brazil.",
      "Most visitors dress the part, in a dirndl with an apron or leather lederhosen with a checked shirt, and spend the day in huge, decorated beer tents with brass bands, pretzels, roast chicken and long wooden tables.",
      "These apps make that picture from one selfie: a dirndl or lederhosen portrait, a beer-tent photo with all your friends kept in, a \"Prost!\" card, or your own photo in front of blue-and-white Bavarian bunting. Each costs 2 credits.",
    ],
    gradient: ["#1D4ED8", "#CA8A04"],
    style: {
      attire: "traditional Bavarian clothes: a dirndl with a blouse and apron for women, leather lederhosen with a checked shirt for men",
      setting: "inside a lively, decorated Oktoberfest beer tent",
      decor: "blue-and-white Bavarian bunting, long wooden tables, giant pretzels and brass-band musicians blurred behind",
      palette: "Bavarian blue, white, pretzel brown and gold",
      light: "warm, cheerful tent lighting",
      greeting: "Prost!",
    },
    apps: [
      portrait("Oktoberfest Portrait", "A dirndl or lederhosen portrait from one selfie.", "🥨"),
      friends("Oktoberfest Friends Photo", "Your whole group at a beer-tent table.", "🍻"),
      card("Oktoberfest Card", "Your photo on a card that says \"Prost!\".", "💌"),
      scene("Bavarian Beer Tent Background", "Keep your photo, add Bavarian bunting and a beer tent.", "🎪"),
    ],
  },
  {
    slug: "venice-carnival",
    name: "Venice Carnival",
    aliases: ["Carnevale di Venezia", "Venetian Carnival", "Carnival of Venice", "Masquerade"],
    emoji: "🎭",
    regions: ["europe"],
    countries: ["Italy"],
    months: [1, 2, 3],
    dateNote: "About two weeks ending on Shrove Tuesday, usually in February (sometimes late January or early March).",
    tradition: "cultural",
    short: "Venice Carnival photos from one selfie: a masquerade portrait, a masked couple photo, a greeting card and a Venetian canal background.",
    about: [
      "The Carnival of Venice goes back to the Middle Ages, when masks let people of every class mix freely in the weeks before Lent. Revived in 1979, it now fills the city's squares, bridges and canals for about two weeks every winter with people in extraordinary costumes and handmade masks, from the simple white bauta to the elaborate gold-and-feather colombina.",
      "The best-known moments include the Flight of the Angel over St Mark's Square, the contest for the most beautiful mask, and private masked balls in candlelit palazzi.",
      "These apps make that picture from one selfie: a masquerade portrait with an ornate mask held in your hand so your face stays visible, a masked-ball couple photo (or a solo one), a \"Buon Carnevale\" card, or your own photo on a misty Venetian canal. Each costs 2 credits.",
    ],
    gradient: ["#7C2D12", "#CA8A04"],
    style: {
      attire: "an elegant Venetian masquerade costume in velvet, brocade and lace, holding an ornate gold-and-feather mask in the hand or wearing it pushed up on the head so the whole face stays visible",
      setting: "beside a canal in Venice with gondolas, or in a candlelit palazzo",
      decor: "gondolas, old stone bridges, ornate masks, feathers and candlelight",
      palette: "deep burgundy, gold, black lace and teal",
      light: "soft, misty winter light or warm candlelight",
      greeting: "Buon Carnevale",
      avoid: "The mask must never cover the face: hold it in the hand or wear it raised on the head.",
    },
    apps: [
      portrait("Venice Carnival Portrait", "A masquerade portrait, mask in hand, from one selfie.", "🎭"),
      couple("Masquerade Couple Photo", "The two of you at a Venetian masked ball.", "💃"),
      card("Venice Carnival Card", "Your photo on a card that says \"Buon Carnevale\".", "💌"),
      scene("Venetian Canal Background", "Keep your photo, add a misty Venetian canal and gondolas.", "🛶"),
    ],
  },
  {
    slug: "st-patricks-day",
    name: "St Patrick's Day",
    aliases: ["Saint Patrick's Day", "St Paddy's Day", "Paddy's Day", "Lá Fhéile Pádraig"],
    emoji: "☘️",
    regions: ["europe", "americas", "worldwide"],
    countries: ["Ireland", "Northern Ireland", "United States", "Canada", "United Kingdom", "Australia"],
    months: [3],
    dateNote: "17 March every year.",
    tradition: "cultural",
    short: "St Patrick's Day photos from one selfie: a green festive portrait, a friends parade photo, a greeting card and a shamrock background.",
    about: [
      "St Patrick's Day, on 17 March, celebrates the patron saint of Ireland and has become a worldwide celebration of Irish culture. Dublin holds a five-day festival with a huge parade, Chicago dyes its river green, and New York's parade on Fifth Avenue is one of the oldest in the world. Landmarks from Sydney Opera House to Niagara Falls are lit green for the night.",
      "People wear green, a sprig of shamrock or a green scarf, listen to traditional Irish music in packed pubs, and watch Irish dancing in the streets.",
      "These apps make that picture from one selfie: a portrait in festive green, a parade photo with all your friends kept in, a \"Happy St Patrick's Day\" card, or your own photo with shamrocks and green city lights behind you. Each costs 2 credits.",
    ],
    gradient: ["#15803D", "#CA8A04"],
    style: {
      attire: "smart casual clothes with plenty of green: a green knit, scarf or jacket and a sprig of shamrock",
      setting: "on a lively street during a St Patrick's Day parade",
      decor: "green, white and orange bunting, shamrocks, a parade softly blurred behind and old pub fronts",
      palette: "emerald green, white, gold and orange",
      light: "bright spring daylight",
      greeting: "Happy St Patrick's Day",
      avoid: "No leprechaun costumes or drunken stereotypes.",
    },
    apps: [
      portrait("St Patrick's Day Portrait", "A festive portrait in green from one selfie.", "☘️"),
      friends("St Patrick's Day Friends Photo", "Your whole group at the parade.", "🎉"),
      card("St Patrick's Day Card", "Your photo on a card that says \"Happy St Patrick's Day\".", "💌"),
      scene("Shamrock Background", "Keep your photo, add shamrocks and green festival lights.", "🍀"),
    ],
  },
  {
    slug: "midsummer",
    name: "Midsummer",
    aliases: ["Midsommar", "Juhannus", "Jāņi", "Sankthans", "Summer solstice"],
    emoji: "🌼",
    regions: ["europe"],
    countries: ["Sweden", "Finland", "Norway", "Denmark", "Latvia", "Estonia"],
    months: [6],
    dateNote: "Around the summer solstice: in Sweden the Friday between 19 and 25 June; in other countries on or near 23–24 June.",
    tradition: "seasonal",
    short: "Midsummer photos from one selfie: a flower-crown portrait, a couple photo in the meadow, a greeting card and a summer meadow background.",
    about: [
      "Midsummer is the great summer festival of the Nordic and Baltic countries, held around the solstice, when the sun barely sets. In Sweden, families head to the countryside to dance around a maypole decorated with leaves and flowers, eat herring and new potatoes with strawberries for dessert, and sing until late. In Finland and Latvia, bonfires burn by the lakes all night.",
      "Flower crowns are part of the day: picked from the meadow and woven in the afternoon. Legend says that if you put seven kinds of flower under your pillow, you'll dream of your future love.",
      "These apps make that picture from one selfie: a portrait with a crown of wildflowers, a couple photo in a summer meadow (or a solo one if you're alone in the picture), a \"Glad Midsommar\" card, or your own photo with a maypole and long golden evening light. Each costs 2 credits.",
    ],
    gradient: ["#65A30D", "#FACC15"],
    style: {
      attire: "light summer clothes in white and pastel, with a crown of fresh wildflowers",
      setting: "in a Scandinavian meadow on a long midsummer evening",
      decor: "a leaf-and-flower maypole, wildflowers, a lake and red wooden cottages in the distance",
      palette: "meadow green, buttercup yellow, cornflower blue and white",
      light: "long golden evening sunlight that never quite sets",
      greeting: "Glad Midsommar",
    },
    apps: [
      portrait("Midsummer Flower Crown Portrait", "A wildflower-crown portrait from one selfie.", "🌼"),
      couple("Midsummer Couple Photo", "The two of you in a summer meadow at golden hour.", "💑"),
      card("Midsummer Greeting Card", "Your photo on a card that says \"Glad Midsommar\".", "💌"),
      scene("Midsummer Meadow Background", "Keep your photo, add a maypole and a summer meadow.", "🌾"),
    ],
  },

  /* ── Americas ────────────────────────────────────────────────────────── */
  {
    slug: "halloween",
    name: "Halloween",
    aliases: ["All Hallows' Eve", "Hallowe'en", "Trick or treat"],
    emoji: "🎃",
    regions: ["americas", "europe", "worldwide"],
    countries: ["United States", "Canada", "Ireland", "United Kingdom", "Mexico", "Australia"],
    months: [10],
    dateNote: "31 October every year.",
    tradition: "cultural",
    short: "Halloween photos from one selfie: a spooky costume portrait, a family costume photo, a Happy Halloween card and a pumpkin background.",
    about: [
      "Halloween grew out of the Celtic festival of Samhain in Ireland and Scotland and travelled with emigrants to North America, where it became the costume-and-candy night it is today. Children go trick-or-treating door to door, houses are decorated with carved jack-o'-lanterns, cobwebs and skeletons, and adults throw costume parties.",
      "It is now celebrated far beyond the US and Canada, and it is one of the year's biggest nights for photos: group costumes, family themes and moody, candle-lit portraits.",
      "These apps make that picture from one selfie: a stylish spooky costume portrait (your face stays recognisable), a family costume photo with everyone kept in, a \"Happy Halloween\" card, or your own photo with glowing pumpkins and a misty night behind you. Each costs 2 credits.",
    ],
    gradient: ["#EA580C", "#1F2937"],
    style: {
      attire: "a stylish, tasteful Halloween costume such as a witch, a vampire in a velvet cloak or a black-and-orange outfit, without changing the face",
      setting: "on a porch on a misty Halloween night",
      decor: "carved jack-o'-lanterns glowing, autumn leaves, cobwebs, candles and a full moon",
      palette: "pumpkin orange, black, deep purple and candle gold",
      light: "moody, warm pumpkin glow against a dark night",
      greeting: "Happy Halloween",
      avoid: "No gore, no blood, nothing frightening for children, and no costumes that mock a culture.",
    },
    apps: [
      portrait("Halloween Costume Portrait", "A stylish spooky costume portrait from one selfie.", "🎃"),
      family("Halloween Family Costume Photo", "Everyone in your photo in matching costumes.", "👻"),
      card("Halloween Greeting Card", "Your photo on a card that says \"Happy Halloween\".", "💌"),
      scene("Pumpkin Night Background", "Keep your photo, add glowing pumpkins and a misty night.", "🌕"),
    ],
    related: ["ai-vampire"],
  },
  {
    slug: "thanksgiving",
    name: "Thanksgiving",
    aliases: ["Thanksgiving Day", "Turkey Day", "Friendsgiving"],
    emoji: "🦃",
    regions: ["americas"],
    countries: ["United States", "Canada"],
    months: [10, 11],
    dateNote: "The fourth Thursday of November in the US; the second Monday of October in Canada.",
    tradition: "national",
    short: "Thanksgiving photos from one selfie: an autumn portrait, a family dinner photo, a Happy Thanksgiving card and a harvest-table background.",
    about: [
      "Thanksgiving is the biggest family holiday of the year in the United States, and a major one in Canada a month and a half earlier. Families travel home to share a long dinner of roast turkey, stuffing, cranberry sauce, mashed potatoes and pumpkin pie, give thanks for the year, and watch the parade or the football. Many people also celebrate Friendsgiving with friends.",
      "The look is warm and autumnal: knitwear, plaid and a long table set with candles, gourds and autumn leaves, with golden late-afternoon light through the windows.",
      "These apps make that picture from one selfie: a family dinner photo with everyone kept in, a \"Happy Thanksgiving\" card, or your own photo in front of a harvest table, plus the Thanksgiving Photoshoot app for a cosy autumn portrait. Each costs 2 credits.",
    ],
    gradient: ["#B45309", "#7C2D12"],
    style: {
      attire: "warm autumn clothes: knitwear, plaid shirts and suede in rust, mustard and brown",
      setting: "at a long dinner table in a warm home on Thanksgiving",
      decor: "a roast turkey, pumpkin pie, candles, gourds, autumn leaves and a table runner",
      palette: "rust, mustard, burgundy and warm brown",
      light: "golden late-afternoon light and candle glow",
      greeting: "Happy Thanksgiving",
      avoid: "No Native American costume, headdress or imagery.",
    },
    apps: [
      { kind: "portrait", name: "Thanksgiving Photoshoot", emoji: "🍁", blurb: "A cosy autumn portrait from one selfie.", use: "thanksgiving-photoshoot" },
      family("Thanksgiving Family Photo", "Everyone in your photo around the dinner table.", "🦃"),
      card("Thanksgiving Greeting Card", "Your photo on a card that says \"Happy Thanksgiving\".", "💌"),
      scene("Harvest Table Background", "Keep your photo, add a harvest table and autumn leaves.", "🍂"),
    ],
    related: ["thanksgiving-photoshoot"],
  },
  {
    slug: "day-of-the-dead",
    name: "Day of the Dead",
    aliases: ["Día de Muertos", "Dia de los Muertos", "Día de los Muertos", "Dia de Muertos"],
    emoji: "💀",
    regions: ["americas"],
    countries: ["Mexico", "United States", "Guatemala"],
    months: [10, 11],
    dateNote: "1 and 2 November, with preparations from late October.",
    tradition: "cultural",
    short: "Day of the Dead photos from one selfie: a marigold portrait, a family ofrenda photo, a greeting card and a candle-lit ofrenda background.",
    about: [
      "Día de Muertos is Mexico's festival of remembrance, recognised by UNESCO as part of humanity's cultural heritage. On 1 and 2 November, families welcome back the souls of loved ones who have died, with an ofrenda, a home altar decorated with their photos, candles, sugar skulls, pan de muerto, their favourite food and drink, and masses of orange cempasúchil marigolds whose scent is said to guide them home.",
      "Families visit and decorate graves, share food and stories, and towns hold parades with La Catrina, the elegant skeleton lady. It is a celebration of life and memory, not a spooky night like Halloween.",
      "These apps make that picture from one selfie: a portrait with marigolds and candlelight, a family photo by the ofrenda with everyone kept in, a \"Feliz Día de Muertos\" card, or your own photo with papel picado and marigolds behind you. Faces are kept natural, without skull face paint. Each costs 2 credits.",
    ],
    gradient: ["#EA580C", "#7E22CE"],
    style: {
      attire: "elegant Mexican-inspired festive clothes, such as an embroidered dress or blouse with a crown of marigolds for women and a smart shirt and jacket for men",
      setting: "beside a home ofrenda on the night of 1 November",
      decor: "an ofrenda covered with orange cempasúchil marigolds, candles, sugar skulls, pan de muerto and colourful papel picado banners",
      palette: "marigold orange, magenta, purple and candle gold",
      light: "warm, glowing candlelight",
      greeting: "Feliz Día de Muertos",
      avoid: "Keep the face natural, with no skull or catrina face paint. Respectful and celebratory, never spooky and never mixed with Halloween imagery.",
    },
    apps: [
      portrait("Day of the Dead Portrait", "A marigold-crowned, candle-lit portrait from one selfie.", "🌼"),
      family("Day of the Dead Family Photo", "Everyone in your photo by the ofrenda.", "👨‍👩‍👧"),
      card("Día de Muertos Card", "Your photo on a card that says \"Feliz Día de Muertos\".", "💌"),
      scene("Ofrenda Background", "Keep your photo, add marigolds, candles and papel picado.", "🕯️"),
    ],
  },
  {
    slug: "rio-carnival",
    name: "Rio Carnival",
    aliases: ["Carnaval", "Brazilian Carnival", "Carnival", "Samba carnival"],
    emoji: "🪅",
    regions: ["americas"],
    countries: ["Brazil", "Trinidad and Tobago", "Colombia"],
    months: [2, 3],
    dateNote: "The five days before Ash Wednesday, usually in February and sometimes early March.",
    tradition: "cultural",
    short: "Rio Carnival photos from one selfie: a sequins-and-feathers portrait, a friends samba photo, a greeting card and a parade background.",
    about: [
      "Rio de Janeiro's Carnival is the biggest party on earth. For five days before Lent, millions of people dance through the city at hundreds of street parties called blocos, and the top samba schools parade through the Sambadrome with drummers, dancers in feathers and sequins, and floats several storeys high, after a year of preparation.",
      "Brazil celebrates everywhere: frevo in Recife and Olinda, axé music on trucks in Salvador. Glitter, colour and samba are the uniform.",
      "These apps make that picture from one selfie: a dazzling sequins-and-feathers portrait, a street-party photo with all your friends kept in, a \"Feliz Carnaval\" card, or your own photo with the Sambadrome parade behind you. Outfits are kept glamorous and tasteful. Each costs 2 credits.",
    ],
    gradient: ["#16A34A", "#FACC15"],
    style: {
      attire: "a dazzling but tasteful carnival outfit: sequins, glitter and a feathered headpiece, fully covered and elegant",
      setting: "at the Rio Carnival parade at night",
      decor: "giant colourful floats, feathers, confetti, samba drummers and festival lights",
      palette: "Brazil green and yellow, electric blue, fuchsia and gold",
      light: "bright, colourful parade lights with glitter sparkle",
      greeting: "Feliz Carnaval",
      avoid: "Keep the outfit fully covered and elegant, never revealing.",
    },
    apps: [
      portrait("Rio Carnival Portrait", "A sequins-and-feathers carnival portrait from one selfie.", "🪅"),
      friends("Carnival Friends Photo", "Your whole group at a samba street party.", "🥁"),
      card("Carnival Greeting Card", "Your photo on a card that says \"Feliz Carnaval\".", "💌"),
      scene("Samba Parade Background", "Keep your photo, put the carnival parade behind you.", "🎉"),
    ],
  },
  {
    slug: "mardi-gras",
    name: "Mardi Gras",
    aliases: ["Fat Tuesday", "Carnival New Orleans", "Shrove Tuesday"],
    emoji: "⚜️",
    regions: ["americas"],
    countries: ["United States"],
    months: [2, 3],
    dateNote: "Shrove Tuesday, the day before Ash Wednesday: usually February, sometimes early March. Parades run for about two weeks before.",
    tradition: "cultural",
    short: "Mardi Gras photos from one selfie: a purple-green-and-gold portrait, a friends parade photo, a greeting card and a New Orleans background.",
    about: [
      "Mardi Gras, French for \"Fat Tuesday\", is the last day of feasting before Lent, and nowhere celebrates it like New Orleans. For about two weeks, social clubs called krewes roll huge floats through the streets, throwing strings of beads, doubloons and decorated coconuts to the crowds, with brass bands and marching groups in between.",
      "The colours are purple for justice, green for faith and gold for power, worn on everything from masks to feather boas, and everyone eats king cake, which hides a small plastic baby inside.",
      "These apps make that picture from one selfie: a portrait in purple, green and gold with beads (any mask held in your hand), a parade photo with all your friends kept in, a \"Happy Mardi Gras\" card, or your own photo on a New Orleans balcony street with a parade below. Each costs 2 credits.",
    ],
    gradient: ["#6D28D9", "#CA8A04"],
    style: {
      attire: "a festive purple, green and gold outfit with strings of colourful beads and a feather boa, any mask held in the hand so the face stays visible",
      setting: "on a French Quarter street in New Orleans during a parade",
      decor: "iron-lace balconies hung with purple, green and gold banners, beads in the air and a float passing",
      palette: "Mardi Gras purple, green and gold",
      light: "lively evening parade lights",
      greeting: "Happy Mardi Gras",
      avoid: "Any mask stays in the hand, never over the face, and outfits stay fully covered.",
    },
    apps: [
      portrait("Mardi Gras Portrait", "A purple-green-and-gold portrait with beads.", "⚜️"),
      friends("Mardi Gras Friends Photo", "Your whole group catching beads at the parade.", "🎊"),
      card("Mardi Gras Greeting Card", "Your photo on a card that says \"Happy Mardi Gras\".", "💌"),
      scene("New Orleans Parade Background", "Keep your photo, add a French Quarter parade behind you.", "🎺"),
    ],
  },
  {
    slug: "fourth-of-july",
    name: "Fourth of July",
    aliases: ["Independence Day", "July 4th", "4th of July", "Independence Day USA"],
    emoji: "🎇",
    regions: ["americas"],
    countries: ["United States"],
    months: [7],
    dateNote: "4 July every year.",
    tradition: "national",
    short: "Fourth of July photos from one selfie: a red-white-and-blue portrait, a family BBQ photo, a greeting card and a fireworks background.",
    about: [
      "The Fourth of July marks the adoption of the Declaration of Independence in 1776, and it is America's great summer holiday. Towns hold parades in the morning, families and friends gather for backyard barbecues and picnics, and the day ends with fireworks over every city, the biggest over New York's East River and the National Mall in Washington.",
      "Red, white and blue is everywhere: flags on porches, bunting on railings, and striped T-shirts at the cookout.",
      "These apps make that picture from one selfie: a red-white-and-blue summer portrait, a family barbecue photo with everyone kept in, a \"Happy Fourth of July\" card, or your own photo with fireworks over the water. Each costs 2 credits.",
    ],
    gradient: ["#1D4ED8", "#DC2626"],
    style: {
      attire: "casual summer clothes in red, white and blue: denim, striped tees and summer dresses",
      setting: "in a backyard or by a lake on a summer evening",
      decor: "star-spangled bunting, a picnic table with a barbecue, sparklers and fireworks starting in the sky",
      palette: "flag red, white, navy blue and sunset gold",
      light: "warm golden-hour light fading into fireworks",
      greeting: "Happy Fourth of July",
    },
    apps: [
      portrait("Fourth of July Portrait", "A red-white-and-blue summer portrait from one selfie.", "🎇"),
      family("Fourth of July Family Photo", "Everyone in your photo at the backyard barbecue.", "🍔"),
      card("Fourth of July Card", "Your photo on a card that says \"Happy Fourth of July\".", "💌"),
      scene("Fireworks Over the Water Background", "Keep your photo, add fireworks over a lake.", "🎆"),
    ],
  },
  {
    slug: "valentines-day",
    name: "Valentine's Day",
    aliases: ["Valentines", "Valentine's", "Saint Valentine's Day", "14 February"],
    emoji: "❤️",
    regions: ["worldwide"],
    countries: ["United States", "United Kingdom", "India", "Philippines", "Brazil", "France", "Japan", "South Korea"],
    months: [2],
    dateNote: "14 February every year.",
    tradition: "seasonal",
    short: "Valentine's Day photos from one selfie: a romantic portrait, a couple photo, a Happy Valentine's Day card and a roses-and-candles background.",
    about: [
      "Valentine's Day, on 14 February, has been linked with romantic love since the Middle Ages, and today it is celebrated around the world with cards, flowers, chocolates and dinners for two. In Japan and Korea women give chocolate on the day and men return the favour a month later; in Finland and Estonia it is a day for friends as well as couples.",
      "It is one of the year's busiest days for couple photos: dressed up for dinner, roses and candles on the table, red and pink everywhere.",
      "These apps make that picture from one selfie: a romantic portrait, a couple photo with the two of you kept just as you are (or a solo one if you're alone in the picture), a \"Happy Valentine's Day\" card, or your own photo with roses, candles and hearts of light behind you. Each costs 2 credits.",
    ],
    gradient: ["#E11D48", "#9D174D"],
    style: {
      attire: "elegant date-night clothes: a red or blush satin dress for women, a dark suit or a smart shirt for men",
      setting: "at a candlelit restaurant table or a rose-filled room",
      decor: "red and blush roses, candles, rose petals and soft heart-shaped bokeh lights",
      palette: "rose red, blush pink, gold and cream",
      light: "warm, romantic candlelight",
      greeting: "Happy Valentine's Day",
    },
    apps: [
      portrait("Valentine's Day Portrait", "A romantic, candle-lit portrait from one selfie.", "❤️"),
      couple("Valentine's Couple Photo", "The two of you on a romantic date night.", "💑"),
      card("Valentine's Day Card", "Your photo on a card that says \"Happy Valentine's Day\".", "💌"),
      scene("Roses & Candles Background", "Keep your photo, add roses, candles and heart lights.", "🌹"),
    ],
    related: ["anniversary-photo-editor"],
  },

  /* ── Africa ──────────────────────────────────────────────────────────── */
  {
    slug: "kwanzaa",
    name: "Kwanzaa",
    aliases: ["Kwanza", "Kwanzaa week"],
    emoji: "🕯️",
    regions: ["americas", "africa"],
    countries: ["United States", "Canada", "Jamaica", "United Kingdom"],
    months: [12, 1],
    dateNote: "26 December to 1 January every year.",
    tradition: "cultural",
    short: "Kwanzaa photos from one selfie: a kente-inspired portrait, a family kinara photo, a Happy Kwanzaa card and a candle-lit background.",
    about: [
      "Kwanzaa is a week-long celebration of African-American and Pan-African culture, created in 1966 by Maulana Karenga. Each of its seven days, from 26 December to 1 January, is devoted to one of seven principles, the Nguzo Saba, such as unity, self-determination and creativity, and each evening the family lights one more candle on the kinara.",
      "The kinara holds seven candles, three red, one black and three green, set on a mat with fruits and vegetables and a unity cup, and the week ends with a feast, the karamu, on 31 December.",
      "These apps make that picture from one selfie: a portrait in elegant kente-inspired colours, a family photo by the kinara with everyone kept in, a \"Happy Kwanzaa\" card, or your own photo with the lit kinara and harvest table behind you. Each costs 2 credits.",
    ],
    gradient: ["#B91C1C", "#15803D"],
    style: {
      attire: "elegant festive clothes with a kente-inspired pattern in red, black, green and gold, worn in a modern, stylish way",
      setting: "in a warm family living room during Kwanzaa",
      decor: "a lit kinara with three red, one black and three green candles, a woven mat, fruit, corn and a unity cup",
      palette: "red, black, green and gold",
      light: "warm candlelight and soft room light",
      greeting: "Happy Kwanzaa",
      avoid: "No generic 'tribal' costume or face paint.",
    },
    apps: [
      portrait("Kwanzaa Portrait", "An elegant kente-inspired portrait from one selfie.", "🕯️"),
      family("Kwanzaa Family Photo", "Everyone in your photo, lighting the kinara.", "👨‍👩‍👧"),
      card("Kwanzaa Greeting Card", "Your photo on a card that says \"Happy Kwanzaa\".", "💌"),
      scene("Kinara Background", "Keep your photo, add the lit kinara and harvest table.", "✨"),
    ],
  },
  {
    slug: "ethiopian-new-year",
    name: "Ethiopian New Year",
    aliases: ["Enkutatash", "Ethiopian New Year", "Meskerem 1", "Eritrean New Year"],
    emoji: "🌼",
    regions: ["africa"],
    countries: ["Ethiopia", "Eritrea"],
    months: [9],
    dateNote: "11 September (12 September in the year before a Gregorian leap year).",
    tradition: "cultural",
    short: "Ethiopian New Year photos from one selfie: a habesha kemis portrait, a family photo, a greeting card and a yellow-daisy background.",
    about: [
      "Enkutatash is the Ethiopian New Year, on the first day of the month of Meskerem, around 11 September. It falls at the end of the long rainy season, when the highlands turn green and are covered in small yellow daisies called Adey Abeba, the flower of the new year. Ethiopia follows its own calendar, which runs about seven to eight years behind the Gregorian one.",
      "Families gather for a big meal of injera and doro wat, girls go from house to house singing and handing out drawings and flowers, and everyone dresses in white: the habesha kemis, a white cotton dress with a woven tibeb border, and the gabi and netela shawls.",
      "These apps make that picture from one selfie: a habesha kemis portrait, a family photo with everyone kept in, a \"Happy Ethiopian New Year\" card, or your own photo in a field of yellow Adey Abeba daisies. Each costs 2 credits.",
    ],
    gradient: ["#16A34A", "#EAB308"],
    style: {
      attire: "traditional Ethiopian festive clothes: a white habesha kemis with a colourful woven tibeb border and a netela shawl for women, a white cotton outfit with a gabi shawl for men",
      setting: "in green highland countryside after the rains",
      decor: "fields of yellow Adey Abeba daisies, green hills and a coffee ceremony set nearby",
      palette: "white, daisy yellow, fresh green and woven border colours",
      light: "bright, fresh September sunshine",
      greeting: "Happy Ethiopian New Year",
      avoid: "No Ge'ez or any other script anywhere, and no generic 'tribal' costume.",
    },
    apps: [
      portrait("Habesha Kemis Portrait", "A white habesha kemis portrait from one selfie.", "🌼"),
      family("Ethiopian New Year Family Photo", "Everyone in your photo, dressed in white for Enkutatash.", "👨‍👩‍👧"),
      card("Ethiopian New Year Card", "Your photo on a card that says \"Happy Ethiopian New Year\".", "💌"),
      scene("Adey Abeba Daisy Background", "Keep your photo, add a field of yellow daisies.", "🌻"),
    ],
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const SLUG_SUFFIX: Record<FestivalKind, string> = {
  portrait: "portrait",
  couple: "couple-photo",
  family: "family-photo",
  friends: "friends-photo",
  card: "greeting-card",
  scene: "background",
};

/** The app slug for one of a festival's slots, or the existing app it reuses. */
export function festivalAppSlug(f: Festival, spec: FestivalAppSpec): string {
  return spec.use ?? `${f.slug}-${SLUG_SUFFIX[spec.kind]}`;
}

const BY_SLUG = new Map(FESTIVALS.map((f) => [f.slug, f]));
export const getFestival = (slug: string) => BY_SLUG.get(slug);

/** Festival apps built here (not the existing apps a slot reuses), by app slug. */
const APP_INDEX = new Map<string, { festival: Festival; spec: FestivalAppSpec }>();
for (const f of FESTIVALS) {
  for (const spec of f.apps) if (!spec.use) APP_INDEX.set(festivalAppSlug(f, spec), { festival: f, spec });
}

/** The festival and slot a built festival app belongs to, if it is one. */
export function festivalOfApp(slug: string): { festival: Festival; spec: FestivalAppSpec } | undefined {
  return APP_INDEX.get(slug);
}

/** The festival an app (built or reused) belongs to, for breadcrumbs and related apps. */
export function festivalForAnyApp(slug: string): Festival | undefined {
  const own = APP_INDEX.get(slug);
  if (own) return own.festival;
  return FESTIVALS.find((f) => f.apps.some((s) => s.use === slug));
}

export function festivalKindOf(slug: string): FestivalKind | undefined {
  return APP_INDEX.get(slug)?.spec.kind;
}

/** Lower case, accents and punctuation removed: "Día", "Tết" and "St. Patrick's" all match plainly. */
export function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Everything a festival can be found by, normalised once. */
export function searchText(f: Festival): string {
  const regionLabels = f.regions.map((r) => REGIONS.find((x) => x.id === r)?.label ?? r);
  return normalize([f.name, ...f.aliases, ...f.countries, ...regionLabels, ...f.months.map((m) => MONTH_NAMES[m - 1]), f.tradition].join(" "));
}

/** Every word typed must appear somewhere in what the festival is known by. */
export function matchesQuery(haystack: string, query: string): boolean {
  const words = normalize(query).split(" ").filter(Boolean);
  return words.every((w) => haystack.includes(w));
}

/** Festivals in this month and the next, in calendar order, wrapping December into January. */
export function upcomingFestivals(month: number, n = 8): Festival[] {
  const next = (month % 12) + 1;
  const score = (f: Festival) => (f.months.includes(month) ? 0 : f.months.includes(next) ? 1 : 2);
  return FESTIVALS
    .filter((f) => score(f) < 2)
    .sort((a, b) => score(a) - score(b))
    .slice(0, n);
}

/** "October – November", for cards. */
export function monthsLabel(f: Festival): string {
  const ms = f.months.map((m) => MONTH_NAMES[m - 1]);
  return ms.length > 2 ? `${ms[0]} – ${ms[ms.length - 1]}` : ms.join(" – ");
}

export function wordCount(f: Festival): number {
  return f.about.join(" ").split(/\s+/).filter(Boolean).length;
}
