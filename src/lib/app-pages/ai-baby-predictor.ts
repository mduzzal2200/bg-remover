import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Baby Predictor: See What Your Baby Might Look Like",
  h1: "AI Baby Predictor",
  metaDescription: "Upload a photo of you and your partner and see a playful guess at your future baby, from newborn to young child. Just for fun, not a prediction.",
  tagline: "Upload a photo of the two of you and meet a playful guess at your future baby: a smiling little one who blends both your features, at the age you choose.",
  keywords: "ai baby predictor, what will my baby look like, baby face generator, future baby generator, ai baby generator couple, baby predictor from photos, see your future baby",

  howToHeading: "How to see what your baby might look like",
  howTo: [
    { t: "Upload one photo of you both", d: "A clear photo with both faces visible, side by side and well lit. A selfie together works perfectly." },
    { t: "Choose the age", d: "About 1 year is the default. Newborn, 6 months, Toddler (about two) and Young child (about five) are the other choices." },
    { t: "Generate, then try again", d: "Each run blends your features a little differently, so make a few and compare. It takes under a minute each." },
  ],
  exampleCaption: "A smiling couple photographed together at an outdoor café becomes a playful guess at their baby: a happy one-year-old with a blend of both their features, sitting up in a cream knit cardigan, in the same café setting softly blurred behind.",

  sections: [
    {
      heading: "What does the AI baby predictor do?",
      paragraphs: [
        "It looks at the faces of the two people in your photo and imagines a baby who blends their features: the shape of the eyes, the nose and mouth, skin tone, hair colour and texture. The baby is shown at the age you pick, sitting up with a big happy smile in a cream knit cardigan, photographed in the same setting as your photo, softly blurred behind, in warm natural light.",
        "The result looks like a real photo of a real baby, which is exactly why people love sharing it. But it's a playful, for-fun picture. It isn't a scientific prediction and it can't tell you what a real child will look like.",
      ],
    },
    {
      heading: "Can AI really predict what your baby will look like?",
      paragraphs: [
        "No, and it's worth being honest about that. A child's appearance depends on genes from both parents mixed in ways nobody can see from a photo. Brothers and sisters with the same parents can look completely different from each other. Features also change a lot as children grow: many babies are born with blue or grey eyes that darken, and hair can change colour and texture over the first years.",
        "What the AI does is make a believable baby who shares visible features with both of you, the way a friend might say \"they'll have your eyes and his curls\". That's a lovely thing to look at and laugh about. Treat it like a sweet what-if, not a forecast, and you'll enjoy it for what it is.",
      ],
    },
    {
      heading: "Who uses a baby face generator?",
      items: [
        { t: "Couples dreaming about the future", d: "It's one of the most shared couple trends: a fun thing to try together on a lazy evening, and a picture to laugh about with friends." },
        { t: "Parents-to-be", d: "Expecting? Make a few guesses before the birth, then compare them with the real baby later. It makes a fun keepsake for the baby book." },
        { t: "Friends planning a baby shower", d: "A \"guess the baby\" game with AI pictures of the parents' future child is an easy, cheerful activity. Ask the couple first." },
        { t: "Newlyweds and anniversaries", d: "Some couples print a picture for an anniversary card or a light-hearted wedding speech. Always check both partners are happy for it to be shared." },
        { t: "Curious friends", d: "Plenty of people try it just for fun with a best friend or a celebrity crush, which is fine as long as it's your own photo and everyone's in on the joke." },
      ],
    },
    {
      heading: "Choosing the baby's age",
      table: {
        head: ["Stage", "Roughly", "What you'll see"],
        rows: [
          ["Newborn", "First weeks", "A tiny baby with soft, newborn features; family resemblance is hardest to see at this age"],
          ["6 months", "Six months", "Chubby cheeks, bright eyes and early expressions"],
          ["About 1 year", "One year (default)", "Sitting up and smiling, the age in our example, with features easier to recognise"],
          ["Toddler", "About two", "More hair, a bigger smile and a stronger likeness to each parent"],
          ["Young child", "About five", "A little person whose face shows the blend most clearly"],
        ],
      },
      after: ["If you want to see a resemblance, Toddler and Young child show features most clearly. For a sweet baby picture, About 1 year is the favourite."],
    },
    {
      heading: "Which photo gives the best result?",
      list: [
        "**Both faces in one photo.** The app uses everyone it can see. Two people, side by side, cheek to cheek or shoulder to shoulder, is ideal.",
        "**Faces toward the camera.** Front-facing faces give the clearest features to blend. Profiles and big angles make it guess.",
        "**Good, even light.** Daylight on both faces, no strong shadow across one of you.",
        "**No sunglasses or masks.** Eyes are the most important feature to blend.",
        "**Natural photos over filtered ones.** Beauty filters change your features, and the baby inherits the filter, not you.",
        "**The setting carries over.** The baby appears in a blurred version of your photo's background, so a nice spot makes a nicer picture.",
      ],
    },
    {
      heading: "Using it kindly and safely",
      paragraphs: [
        "Because the result looks so real, a few simple rules keep it fun. Only use photos of people who've agreed to it, and don't make a baby from a photo of someone and a stranger or an ex. Don't present the picture as a real child, and don't use it to tease anyone about having or not having children. For couples going through fertility treatment or loss, this kind of picture can be painful, so think before sharing it in a group.",
        "The baby it makes is imaginary, so please don't use it to deceive anyone, and keep it between people who are happy to be part of the joke.",
      ],
    },
    {
      heading: "What it can't do",
      list: [
        "**Predict genetics.** It can't tell you eye colour, hair, height or anything else a real child will have.",
        "**Use two separate photos.** It needs both of you in one photo. Take a quick selfie together, or combine two photos first with the [group photo maker](/group-photo).",
        "**Make twins or siblings in one picture.** Each run makes one baby. Run it again for a \"second child\".",
        "**Give the same baby twice.** Each run blends features afresh, which is part of the fun.",
      ],
    },
    {
      heading: "Ideas for your baby pictures",
      items: [
        { t: "A side-by-side reveal", d: "Post your couple photo next to the baby guess and let friends vote on whose features won." },
        { t: "A growing-up series", d: "Run the same photo at Newborn, 1 year, Toddler and Young child for a playful \"growing up\" sequence." },
        { t: "A baby shower game", d: "Print a few versions and let guests pick the one they think the real baby will look like. Reveal the real photo later." },
      ],
      after: ["Already have a baby? The [AI baby photoshoot](/creative/baby-photoshoot) turns your real baby's photo into a studio-style portrait."],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `Each baby picture uses ${COST}, and you're only charged when it's made. Credit packs start at ${PACK_FROM} and never expire. If there's a free trial in your country, the box above the upload shows it and your first picture is free.`,
        "Your couple photo goes to fal.ai, our image-model provider, only to create the picture. It's not used to train AI models and not sold. Both your photo and the baby picture stay in My Creations, where either of you can delete them at any time from your account.",
      ],
    },
  ],

  faq: [
    { q: "How does the AI baby predictor work?", a: "Upload one photo of you and your partner, choose an age and press Generate. The AI imagines a baby who blends visible features from both of you." },
    { q: "Is it accurate?", a: "No. It's a playful guess, not a prediction. Real children inherit features in ways no photo can show." },
    { q: "Do I need two separate photos?", a: "No, you need one photo with both of you in it. If you only have separate photos, combine them first with the group photo maker." },
    { q: "What ages can I choose?", a: "Newborn, 6 months, About 1 year (the default), Toddler (about two) and Young child (about five)." },
    { q: "Can I choose a boy or a girl?", a: "Not directly. Run it a few times; the app decides each time, and you'll usually see both." },
    { q: "Why does each run look different?", a: "Each generation blends your features afresh, the way siblings look different from each other. Save the ones you like." },
    { q: "How much does it cost?", a: `${COST} per picture, charged only when it's made. Packs start at ${PACK_FROM}; where a free trial runs, your first is free.` },
    { q: "Is my photo private?", a: "It's sent only to our image-model provider to make the picture, never sold or used for training, and you can delete it from My Creations." },
    { q: "Can we try it with an old photo of us?", a: "Yes, as long as both faces are clear. A recent photo usually gives a fairer mix of your features today." },
    { q: "Can I make a baby that looks more like one of us?", a: "Not directly. Run it a few times; each result leans a little differently, and some will look more like one of you." },
    { q: "Is it okay to share the picture?", a: "If both of you are happy to, yes. Just make it clear it's a for-fun AI picture, not a real child." },
    { q: "Is there a watermark?", a: "No. The picture downloads at full size without a watermark." },
  ],
};

export default page;
