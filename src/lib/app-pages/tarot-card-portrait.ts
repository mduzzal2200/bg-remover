import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Tarot Card Portrait: Turn Your Photo Into a Tarot Card",
  h1: "AI Tarot Card Portrait Maker",
  metaDescription: "Turn a selfie into an illustrated tarot card: The Sun, with a golden halo, sunflowers, a red-and-gold robe and an ornate gold border. Still clearly you.",
  tagline: "Upload a portrait and get it back as a painted tarot card: you as The Sun, under a golden halo with sunflowers, framed in an ornate gold border with the card's name on a banner.",
  keywords: "ai tarot card portrait, photo to tarot card, custom tarot card from photo, tarot card filter, personalised tarot card, the sun tarot card art, tarot card generator",

  howToHeading: "How to turn your photo into a tarot card",
  howTo: [
    { t: "Upload a clear portrait", d: "A front-facing photo where your face is well lit. Outdoor daylight works beautifully, because the card is all about light." },
    { t: "Set the framing and strength", d: "Leave both on Auto for the full card in our example. Head & shoulders makes your face larger on the card; Strong pushes the painted style further." },
    { t: "Generate and download", d: "You get a finished card in under a minute: the illustration, the gold border and the title banner, ready to post or print." },
  ],
  exampleCaption: "A sunny selfie by the sea becomes The Sun tarot card: the same woman painted beneath a radiant golden halo and sun crown, in a red-and-gold robe, with tall sunflowers beside her, an ornate gold border and \"THE SUN\" on the banner at the bottom.",

  sections: [
    {
      heading: "What does the tarot card portrait maker make?",
      paragraphs: [
        "It designs a complete tarot card around your face. The card is The Sun, the card of joy, warmth and success: you stand radiant beneath a large golden sun halo with a sun crown, wearing a flowing red-and-gold robe, with tall sunflowers at your side. The colours are rich jewel tones and the light is dramatic and painterly, like a card from a well-made illustrated deck.",
        "Around the illustration sits the card itself: an ornate gold border and a banner along the bottom with the title \"THE SUN\". The whole thing is drawn, not photographed, but your face is kept recognisable inside the artwork, so friends know it's you at a glance.",
      ],
    },
    {
      heading: "Why The Sun card?",
      paragraphs: [
        "In tarot, The Sun is one of the happiest cards in the deck. It stands for optimism, vitality, clarity and things going well. That makes it a card people are glad to be pictured as, which matters when the result is going on a profile, a gift or a wall. A darker card, like Death or The Tower, would be a strange thing to give a friend.",
        "The Sun also has the most striking imagery for a portrait: a huge golden halo behind the head, warm colour everywhere and flowers framing the figure. It flatters faces, reads well at small sizes and looks good printed. If you know tarot, you'll recognise the classic symbols; if you don't, it simply looks like a beautiful illustrated card.",
      ],
    },
    {
      heading: "Who makes a personalised tarot card?",
      items: [
        { t: "Tarot readers and spiritual creators", d: "A card with your own face makes a memorable profile picture, a booking-page header or a thumbnail for readings. It says what you do before anyone reads your bio." },
        { t: "Friends giving a thoughtful gift", d: "Make a card for a friend's birthday, a new job or a fresh start. The Sun's meaning, joy and success, gives the gift a message without a word written." },
        { t: "Artists and illustrators", d: "Use it as a reference or a mood piece for your own deck design: how a halo, a border and a palette sit around a real face." },
        { t: "Anyone who loves the aesthetic", d: "Gold borders, celestial symbols and jewel colours are a look of their own on social feeds. This puts you in it without an illustration commission." },
        { t: "Wedding and party planners", d: "A tarot-themed party, a mystical hen night or a Halloween gathering can use cards of the guests as place cards or a photo-booth wall." },
      ],
    },
    {
      heading: "What do the Framing and Strength settings change?",
      paragraphs: ["Both settings start on Auto, which gives the balanced card in our example."],
      table: {
        head: ["Setting", "Choice", "Effect on the card"],
        rows: [
          ["Framing", "Head & shoulders", "Your face fills more of the card; the sunflowers and robe are cropped closer"],
          ["Framing", "Half body", "You're shown from the waist up, the most classic tarot composition"],
          ["Framing", "Full body", "The whole figure stands in the card, with more of the halo and flowers around you"],
          ["Strength", "Subtle", "The painted style is lighter; more of your photo's look comes through"],
          ["Strength", "Strong", "The fullest illustration, with more painterly texture, while your face stays recognisable"],
        ],
      },
      after: ["Head & shoulders is the best choice for a profile picture, where the card is shown small. Full body suits a print you'll frame."],
    },
    {
      heading: "Which photos make the best tarot cards?",
      list: [
        "**Face the camera.** Tarot cards are symmetrical, and a front-facing face sits naturally in the centre under the halo.",
        "**Good, warm light.** Daylight or a sunny photo matches the card's golden palette and gives the painting a strong likeness to work from.",
        "**Hair visible.** The sun crown sits on your head, so a hat or a hood will be replaced or look odd.",
        "**A calm expression or a soft smile.** The Sun is joyful but serene; a big laugh can look strange under a halo.",
        "**One person only.** The card holds one figure. A group photo gives one person the card and loses the rest.",
      ],
    },
    {
      heading: "Can you print it or use it as a real card?",
      paragraphs: [
        "Yes, with one step first. The download is sized for screens, so for printing, open it in the [image upscaler](/upscale) and enlarge it 2× or 4×. That gives you enough pixels for a sharp print at postcard size or larger, and a crisp gold border.",
        "The card comes out in a tall 3:4 shape by default, whatever shape your photo is, because that's the shape of a card. Real tarot cards are a little slimmer, roughly 2.75 × 4.75 inches, so for a deck-sized print choose 9:16 instead, or trim the 3:4 print slightly at the sides. For a poster, keep 3:4 and print as large as you like after upscaling.",
        "Many people frame it, print it on thick card stock as a keepsake, or slip it into a birthday card. Photo printing services and local print shops handle it like any other photo; ask for a matte or silk finish so the gold border doesn't glare.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Make other cards.** This app always makes The Sun. Other cards, like The Moon or The Star, aren't options here.",
        "**Write your name.** The banner reads \"THE SUN\". To add a name or a message, use the text tool in the [free photo editor](/editor) afterwards.",
        "**Make a full deck.** Each run makes one card from one photo.",
        "**Predict anything.** It's a portrait in a tarot style, not a reading.",
        "**Spell every letter perfectly every time.** AI lettering occasionally slips; check the banner, and run it again if a letter looks wrong.",
      ],
    },
    {
      heading: "More mystical and painted looks",
      paragraphs: [
        "If you like the painted, gilded feel of the card, the [Renaissance portrait maker](/creative/renaissance-portrait) turns a photo into an oil painting with dramatic light and period dress. For an illustrated cover instead of a card, try the [comic book cover maker](/creative/comic-book-cover). And the [pet portrait maker](/creative/pet-portrait) gives your dog or cat the royal-painting treatment.",
      ],
    },
    {
      heading: "What it costs, and what happens to your photo",
      paragraphs: [
        `A tarot card uses ${COST}, charged only when the card is made. One-time credit packs start at ${PACK_FROM} and don't expire; monthly plans are there if you make lots. When there's a free trial in your country, you'll see it above the upload.`,
        "Your photo goes to fal.ai, our image-model provider, only to paint the card. We don't use it to train AI and we don't sell it. Your card and your original are kept in My Creations until you delete them.",
      ],
    },
  ],

  faq: [
    { q: "How do I turn my photo into a tarot card?", a: "Upload a clear, front-facing portrait, leave Framing and Strength on Auto and press Generate. You get The Sun card with your face in under a minute." },
    { q: "Which tarot card does it make?", a: "The Sun: a golden halo and sun crown, a red-and-gold robe, sunflowers and an ornate gold border with \"THE SUN\" on the banner." },
    { q: "Can I choose a different card?", a: "Not in this app. It's built around The Sun card, one of the most positive in the deck." },
    { q: "Will the card look like me?", a: "Yes. It's an illustration, so your face is painted, but your features are kept recognisable. Front-facing photos give the strongest likeness." },
    { q: "Can I add my name to the card?", a: "Add it afterwards with the text tool in the free photo editor. The app itself writes only the card title." },
    { q: "How much does it cost?", a: `${COST} per card, only when it's made. Packs start at ${PACK_FROM}, and a free trial, where available, shows above the upload.` },
    { q: "Can I print it?", a: "Yes. Upscale it 2× or 4× first, then print. It comes out in a tall 3:4 card shape; pick 9:16 for a slimmer, deck-sized card." },
    { q: "What does The Sun mean in tarot?", a: "Joy, warmth, success and optimism. It's one of the most positive cards in the deck, which is why it makes such a good portrait or gift." },
    { q: "Does it work on pets?", a: "This app is designed for people. For a painted portrait of a pet, use the AI pet portrait maker." },
    { q: "Can I make cards for my friends?", a: "Yes, with their permission. Each card is built from one person's photo, so make one for each friend." },
    { q: "Is there a watermark?", a: "No. The card downloads clean and full size." },
  ],
};

export default page;
