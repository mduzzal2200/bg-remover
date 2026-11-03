import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Prom Photo Maker: Glam Prom Portrait From a Selfie",
  h1: "AI Prom Photo Maker",
  metaDescription: "Turn an everyday selfie into a glam prom-night portrait: formal gown or tux, ballroom chandeliers and sparkle bokeh. Your face stays the same.",
  tagline: "Upload an everyday selfie and get back a glam prom-night portrait: a sequinned gown or a sharp tuxedo, a chandelier-lit ballroom and warm sparkle, with your face unchanged.",
  keywords: "ai prom photo maker, prom photoshoot ai, prom picture generator, prom dress photo ai, ai formal portrait, prom night photo filter, homecoming photo ai",

  howToHeading: "How to make a prom photo with AI",
  howTo: [
    { t: "Upload a clear selfie", d: "Any everyday photo with your face well lit works, even one taken in your bedroom in a sweatshirt. The outfit and the room are what the app replaces." },
    { t: "Choose setting and lighting, or leave Auto", d: "Auto gives the ballroom with chandeliers and candles. Pick Garden, City street or Beach for an outdoor prom look, and Golden hour or Moody to change the light." },
    { t: "Generate, compare and keep the best", d: "Each run takes under a minute. Run it two or three times; the gown, the pose and the sparkle change a little every time." },
  ],
  exampleCaption: "A casual selfie in a grey sweatshirt, taken in a bedroom, becomes a knee-up prom portrait: a burgundy sequinned corset gown with a thigh slit, a sparkly clutch, an elegant updo and a ballroom of chandeliers and blurred guests behind.",

  sections: [
    {
      heading: "What does the AI prom photo maker do?",
      paragraphs: [
        "It keeps your face and builds a whole prom night around it. You upload a normal photo, and the app dresses you in formalwear, does your hair, poses you from the knees up and places you in a grand ballroom: crystal chandeliers, candles, flowers and softly blurred guests in warm, romantic light with sparkle bokeh.",
        "The default look is the one in our example: a burgundy sequinned corset gown with a thigh slit, a sparkly clutch and an updo. If the person in the photo is a man, or you'd simply prefer it, the same prompt allows a sharp black tuxedo instead. The result is meant to read as a real photograph taken on the night, not a painting or a filter over your selfie.",
        "Nothing about your face is redrawn on purpose. Eyes, nose, smile, skin tone and hairline are kept, so the picture still looks like you to anyone who knows you.",
      ],
    },
    {
      heading: "Why make a prom photo instead of waiting for the real ones?",
      paragraphs: [
        "Prom photos are notoriously hit and miss. The professional photographer has a queue of hundreds of students and a few seconds for each. Friends' phone photos are taken in dim halls with harsh flash. By the time the official prints arrive, the moment you wanted to post has passed.",
        "An AI prom photo fixes the parts you can't control. You get flattering light, a clean background and a framed, magazine-style composition on your schedule. It also helps when there was no prom at all: a small school without one, an illness on the night, a move abroad, or graduating somewhere the tradition doesn't exist. And for many people it's simply a chance to see what a ballgown or a tux would look like before buying one.",
      ],
    },
    {
      heading: "Who uses an AI prom picture?",
      items: [
        { t: "Students before prom", d: "Try a look before committing to a dress or suit. A burgundy sequin gown, a tux, an outdoor garden prom: see which suits you, then show it to whoever is helping you shop." },
        { t: "Students after prom", d: "If the official photo came out with closed eyes or awkward lighting, make a polished portrait for your profile picture and keep the candid shots for the photo dump." },
        { t: "Couples and friend groups", d: "Make one portrait each from separate selfies and post them as a matching set. Keep the same Setting and Lighting so they look like they were taken on the same night." },
        { t: "Parents and grandparents", d: "A framed prom-style portrait makes a sweet gift for a teenager who missed out, or a fun surprise for an adult who never had a prom." },
        { t: "Adults recreating a missed prom", d: "Plenty of people search for this years later. Upload a recent selfie and get the prom night you skipped, without a school hall in sight." },
      ],
    },
    {
      heading: "Which setting and lighting should you choose?",
      paragraphs: ["The app has two settings. Leave both on Auto for the ballroom look in our example, or mix them to change the mood."],
      table: {
        head: ["Setting", "What you get", "Good with"],
        rows: [
          ["Auto", "A grand ballroom with chandeliers, candles, flowers and guests behind you", "Auto or Studio lighting"],
          ["Studio", "A clean magazine-style backdrop in a soft tone that flatters the gown", "Studio lighting"],
          ["Garden", "Lush greenery and flowers softly blurred behind you", "Golden hour or Soft daylight"],
          ["City street", "Elegant architecture or a quiet boulevard, like a fashion street shoot", "Moody or Golden hour"],
          ["Indoors", "A styled hotel-lounge interior with soft lamp light", "Moody"],
          ["Beach", "Calm water and open sky in warm low light", "Golden hour"],
        ],
      },
      after: [
        "**Lighting** changes the feel more than you'd expect. Golden hour adds warm, low sun and a gentle rim of light around your hair. Moody keeps one soft source and deep shadow, which suits dark gowns and tuxedos. Bright & airy is lighter and softer, close to a pastel spring formal.",
      ],
    },
    {
      heading: "Which selfie gives the best prom portrait?",
      list: [
        "**A face you'd actually use.** The app keeps your expression, so pick a photo where you like your smile.",
        "**Front-facing, eyes visible.** Sunglasses, heavy filters or a hand over the face make the likeness weaker.",
        "**Even light on your face.** Window light is ideal. Strong coloured light from a screen or a party bulb carries into the result.",
        "**Head and shoulders at least.** The app builds the gown and the body pose, but it needs a clear view of your face and hairline to start from.",
        "**One person per photo.** For a couple's prom picture, make one each, or try the [couple photoshoot](/creative/couple-photoshoot) with a photo of you both.",
      ],
    },
    {
      heading: "What the prom photo maker can't do",
      list: [
        "**Copy a specific dress.** It designs a prom outfit in the style described. To wear a particular gown you've seen, describe it in the [outfit changer](/creative/outfit-generator) instead.",
        "**Show your real venue.** The ballroom is invented. It won't recreate your school hall or a particular hotel.",
        "**Add your date.** Each run uses the people in your photo. It doesn't add a partner who isn't there.",
        "**Guarantee the same pose twice.** Every generation is a fresh attempt, which is why you can run it again for a different shot.",
      ],
    },
    {
      heading: "What can you do with your prom portrait?",
      items: [
        { t: "A countdown post", d: "Share the portrait a week before the dance with the date in the caption. It builds excitement without giving away the real outfit." },
        { t: "Invitations and promposals", d: "Put the picture on an invite for an after-party, or on a card asking someone to the dance. Add the words in the [free photo editor](/editor)." },
        { t: "A yearbook or memory page", d: "Schools and parents making a senior memory book can use a portrait for anyone missing from the official shoot." },
        { t: "A framed print", d: "Run it through the [image upscaler](/upscale) first, then print it at 5 × 7 or 8 × 10 inches for a frame on the shelf." },
      ],
    },
    {
      heading: "How much does it cost?",
      paragraphs: [
        `Each prom portrait uses ${COST}, and you're only charged when an image is actually made. Credits come in one-time packs from ${PACK_FROM} that never expire, or with a monthly plan. When a free trial is running in your country, the box above the upload says so and your first portrait is free.`,
      ],
    },
    {
      heading: "Where does your selfie go?",
      paragraphs: [
        "To make the portrait, your photo is sent to fal.ai, the image-model service we use, and nowhere else. It isn't used to train AI models and isn't sold. The selfie and the finished prom photo appear in My Creations, where you can download them again or delete them whenever you like.",
      ],
    },
  ],

  faq: [
    { q: "How do I make an AI prom photo?", a: "Upload a clear selfie, leave Setting and Lighting on Auto for the ballroom look, and press Generate. You get a knee-up prom portrait in under a minute." },
    { q: "Is the AI prom photo maker free?", a: `Creating an account is free. Each portrait uses ${COST}; packs start at ${PACK_FROM}. If a free trial is running where you are, the box above the upload shows it and your first result costs nothing.` },
    { q: "Will it still look like me?", a: "Yes. The app changes your outfit, hair styling, pose and background, and keeps your face, skin tone and expression the same." },
    { q: "Can I get a tuxedo instead of a gown?", a: "Yes. The prompt includes a sharp black tuxedo as the alternative, and men's photos usually get it. If you get a gown and want the suit, run it again or describe the suit in the outfit changer." },
    { q: "Can I pick the dress colour?", a: "Not in this app; it uses a burgundy sequinned gown by default. For a specific colour or style, use the AI outfit changer and describe the dress you want." },
    { q: "Does it work for homecoming or a formal?", a: "Yes. The look suits any formal dance. Choose Garden or City street if your event isn't in a ballroom." },
    { q: "Can my date and I have matching photos?", a: "Make one portrait each with the same Setting and Lighting so they match. For both of you in one picture, use the couple photoshoot app." },
    { q: "What photo should I upload?", a: "A front-facing photo with your face clearly lit and no sunglasses. A plain background helps, but it isn't required." },
    { q: "Is there a watermark?", a: "No. Your prom photo downloads at full size without a watermark." },
  ],
};

export default page;
