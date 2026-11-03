import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Superhero Photo: Put Yourself in a Hero Costume and Cape",
  h1: "AI Superhero Costume Maker",
  metaDescription: "Turn your photo into a superhero: an original costume in the colours you pick, a flowing cape, a heroic pose and a sunset city skyline. Still your face.",
  tagline: "Upload a photo and become the hero of your own film: an original costume in red and gold or the colours you choose, a flowing cape and a confident pose high above a city at sunset.",
  keywords: "ai superhero photo, superhero costume maker, turn yourself into a superhero, superhero photo editor, superhero avatar, hero costume ai, superhero portrait from photo",

  howToHeading: "How to turn yourself into a superhero",
  howTo: [
    { t: "Upload a clear photo", d: "Face the camera with your face well lit. A photo that shows your shoulders gives the costume a better start." },
    { t: "Pick costume colours and framing", d: "Red & gold is the default. Blue & red, Black stealth, Green and White & silver are the others. Full body shows the whole cape and pose." },
    { t: "Generate your hero shot", d: "In under a minute you're standing over the city. Run it again for a new pose or a different costume design." },
  ],
  exampleCaption: "A woman's selfie on a city street becomes a superhero portrait: an original deep-red costume with gold panelling and a flowing red cape, a confident pose, and a city skyline glowing in the golden sunset behind her.",

  sections: [
    {
      heading: "What does the superhero costume maker do?",
      paragraphs: [
        "It turns you into an original superhero, photographed like a still from a big action film. You're dressed in a sleek, form-fitting costume, deep red with gold panelling by default, with a flowing cape, standing in a heroic, confident pose above a city skyline at golden sunset, with dramatic comic-movie lighting.",
        "Two things are fixed on purpose. Your **face and identity stay exactly the same**, so everyone knows who the hero is. And the costume is **original**: it isn't any existing character's suit, logo or emblem. You get the drama of a superhero film poster without dressing up as someone else's hero.",
        "The result is built to look like a real photograph, with natural skin, real light on fabric and armour, and believable depth in the city behind you, not a drawing.",
      ],
    },
    {
      heading: "Why an original costume and not a famous hero?",
      paragraphs: [
        "Famous superheroes belong to the studios and publishers that created them, and their costumes and symbols are protected. An original suit means your picture is yours to post, print and use without borrowing anyone's character. It also makes the picture more personal: it's you as a new hero, not you pretending to be someone else.",
        "If you'd like a comic-book look instead of a photograph, the [comic book cover maker](/creative/comic-book-cover) illustrates you as an original hero on a cover, with ink lines and halftone colour.",
      ],
    },
    {
      heading: "Who makes a superhero photo?",
      items: [
        { t: "Kids and their parents", d: "A superhero portrait of a child is a favourite for birthday invitations, bedroom posters and \"my hero\" cards. Use a recent, smiling photo." },
        { t: "Party planners", d: "Superhero-themed birthdays, office parties and fundraisers can make a hero photo of every guest for name cards or a photo wall." },
        { t: "Gamers and streamers", d: "A heroic portrait makes a striking profile picture or a channel banner. Black stealth suits a darker look." },
        { t: "Teams and workplaces", d: "Celebrate a \"hero of the month\", a nurse, a teacher or a volunteer with a light-hearted portrait for a newsletter or a thank-you card." },
        { t: "Fans and cosplayers", d: "Picture an original character before building a real costume, and try colour schemes on yourself first." },
      ],
    },
    {
      heading: "Costume colours and framing",
      table: {
        head: ["Costume colours", "The look"],
        rows: [
          ["Red & gold", "Deep red with metallic gold detailing, the default and the most classic hero look"],
          ["Blue & red", "Bold, bright and patriotic-feeling, a timeless comic colour pair"],
          ["Black stealth", "Matte black with minimal accents, for a darker, night-time hero"],
          ["Green", "Deep green with darker panels, a nature or energy hero"],
          ["White & silver", "Cool, clean and futuristic with a metallic sheen"],
        ],
      },
      after: [
        "**Framing** decides how much of the hero you see. Head & shoulders is best for profile pictures. Half body shows the costume details and the cape over your shoulders. Full body gives the full heroic stance with the cape flowing, the best choice for a poster. Auto lets the app decide.",
      ],
    },
    {
      heading: "Tips for a powerful hero shot",
      list: [
        "**Use a confident photo.** A straight posture and a calm, determined or smiling face make the most convincing hero.",
        "**Show your shoulders or more.** The costume and cape are built around your body, so a tight face crop leaves less to work with.",
        "**Light your face well.** Daylight from the front helps the face match the sunset light of the scene.",
        "**Take off hats and sunglasses.** They clash with the costume and hide your face.",
        "**Simple backgrounds help.** A plain original lets the city backdrop look natural.",
        "**Try a couple of runs.** The pose, cape and costume details change each time.",
      ],
    },
    {
      heading: "Ideas for your superhero photo",
      items: [
        { t: "Birthday invitations", d: "\"Join the hero for their 7th birthday!\" Put the photo on an invite made in a design app and add the details there." },
        { t: "A hero-of-the-week poster", d: "Print a portrait for a classroom or office wall to celebrate someone who went the extra mile." },
        { t: "A film-poster post", d: "Use Full body framing and a tall 3:4 shape, then add a film title and \"coming soon\" in the editor." },
        { t: "A thank-you card", d: "A superhero portrait of a doctor, nurse, carer or teacher makes a memorable way to say thanks." },
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Dress you as an existing character.** No famous suits, logos or symbols; the costume is always original.",
        "**Give you superpowers on camera.** There are no laser eyes or lightning by default; it's a heroic portrait, not an action scene.",
        "**Keep your own clothes.** The costume replaces them completely.",
        "**Show a real city.** The skyline is invented.",
      ],
    },
    {
      heading: "More heroic and adventurous looks",
      paragraphs: [
        "For an illustrated version, the [comic book cover maker](/creative/comic-book-cover) puts you on the front of your own comic. To head into space instead, the [astronaut photo maker](/creative/astronaut-photoshoot) puts you on a spacewalk. And the [cyberpunk avatar](/creative/cyberpunk-avatar) app gives you a neon sci-fi city at night.",
      ],
    },
    {
      heading: "Inventing your hero",
      items: [
        { t: "Pick a hero name", d: "Puns on your name or job work well: \"Captain Code\", \"The Midnight Baker\", \"Doctor Calm\". Add it to the picture with the free [watermark tool](/watermark-image) or a design app." },
        { t: "Choose colours with meaning", d: "Red & gold feels bold and classic, Blue & red trustworthy, Black stealth mysterious, Green full of energy, White & silver futuristic." },
        { t: "Give them a power", d: "Write it in the caption: the power to find lost keys, to make toddlers nap, to fix any printer." },
        { t: "Write an origin story", d: "A two-line origin in the post (\"Bitten by a radioactive spreadsheet…\") makes it twice as fun to share." },
      ],
    },
    {
      heading: "Which photo makes the most powerful hero?",
      paragraphs: [
        "Heroic portraits are about posture. A photo where you're standing tall, shoulders back and chin level gives the app the strongest start for a confident pose. A slouched selfie taken from below can still work, but the result may look less commanding.",
        "Light matters too. The scene is lit by a golden sunset, so a photo taken in warm daylight blends best. If your photo is lit from a phone screen or a coloured bulb, the face may look a little out of place against the sky; run it again or try another photo. And keep it to one person: each portrait is built around a single hero.",
      ],
    },
    {
      heading: "Price and privacy",
      paragraphs: [
        `Each superhero photo uses ${COST}, and you're only charged if it's made. Credit packs start at ${PACK_FROM} and never expire. Where a free trial is running, the box above the upload says so.`,
        "We send your photo to fal.ai, the service that runs our image models, to create your hero portrait, and to nobody else. It's never used to train AI or sold. Your results are saved in My Creations until you delete them.",
      ],
    },
  ],

  faq: [
    { q: "How do I turn myself into a superhero?", a: "Upload a clear photo, choose costume colours or keep Red & gold, and press Generate. You get a heroic portrait above a city skyline in under a minute." },
    { q: "Can I be a famous superhero?", a: "No. The app always designs an original costume, not any existing character's suit or logo." },
    { q: "Can I choose the costume colour?", a: "Yes. Pick Red & gold, Blue & red, Black stealth, Green or White & silver." },
    { q: "Will my face stay the same?", a: "Yes. Your face and identity are kept exactly; the costume, pose and background change." },
    { q: "Does it work for kids?", a: "Yes. It's a favourite for children's birthday invitations and posters. Use a recent, clear photo." },
    { q: "Is it a cartoon?", a: "No. It's made to look like a real photograph, like a still from an action film. For a comic look, use the comic book cover maker." },
    { q: "How much does it cost?", a: `${COST} per photo, only when it's made. Packs start at ${PACK_FROM}; a free trial, where available, covers the first.` },
    { q: "How do I get the whole cape in the picture?", a: "Choose Full body framing. It shows the full costume and the cape flowing behind you." },
    { q: "Can I add a hero name to the picture?", a: "Yes. Add your hero name as a line of text with the free watermark tool, or design a poster in a design app. For a cover with the title lettered in, use the comic book cover maker." },
    { q: "Is there a watermark?", a: "No. Your hero photo downloads at full size with no watermark." },
  ],
};

export default page;
