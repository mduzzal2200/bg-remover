import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Age Progression: See Yourself Older or Younger in a Photo",
  h1: "AI Age Progression Photo",
  metaDescription: "Pick any age from 1 to 100 and see yourself at it, in the same photo: same clothes, pose and background, only you older or younger. Just for fun.",
  tagline: "Upload a selfie, drag the slider to any age from 1 to 100, and see yourself at that age in the very same photo: same clothes, same pose, same place, only the years change.",
  keywords: "ai age progression, aging filter, see yourself older, old age filter, age progression photo, make me look older, de-age photo ai",

  howToHeading: "How to see yourself older or younger",
  howTo: [
    { t: "Upload a clear selfie", d: "Face the camera in even light. The app keeps everything in the photo except your age, so pick one you like." },
    { t: "Set the age", d: "Drag \"Age them to\" anywhere from 1 to 100. It starts at 65. Choose an age below your own and it de-ages you instead." },
    { t: "Generate and compare", d: "In under a minute you'll see yourself at that age. Try a few ages for a timeline." },
  ],
  exampleCaption: "A selfie of a woman in her thirties with dark curly hair, in a white knit sweater in a sunny garden, aged to about 65: the same pose, sweater and garden, with silver-grey curls, soft lines around her eyes and mouth, and the same warm smile.",

  sections: [
    {
      heading: "What does the age progression app do?",
      paragraphs: [
        "It shows you at another age **in the same photo**. Your clothes, your pose, the framing, the background and the light all stay as they are. Only you change, with the details of the age you chose: skin texture and wrinkles, hair colour and thickness, and the gentle changes to face shape that come with the years.",
        "Your identity stays clearly recognisable, which is what makes the result so striking: it's unmistakably you, just decades on. And because it works both ways, you can also see yourself younger. For a child's age, the app stages a new childhood photo instead, since a toddler can't wear your grown-up clothes.",
      ],
    },
    {
      heading: "How does AI make someone look older?",
      paragraphs: [
        "As people age, a few changes happen to almost everyone. Skin becomes thinner and less elastic, so fine lines appear around the eyes and mouth and later deepen into wrinkles. Hair greys and often thins. Fat in the face shifts, so cheeks can soften and the jawline loosens a little. Eyebrows and eyelids can lower. The AI applies these changes in a way that fits your face and the age you choose.",
        "It's important to say what it **can't** do: it doesn't know your genes, health or lifestyle, which affect how each person really ages. Two people of 70 can look very different. The result is an illustrative, entertaining guess, not a medical or scientific forecast.",
      ],
    },
    {
      heading: "Who uses an aging filter?",
      items: [
        { t: "The curious", d: "Most people just want to know: will I go grey? Will I look like my mum or my dad? It's a fun few minutes." },
        { t: "Friends and family", d: "Age the whole group to 80 and compare. It's a guaranteed laugh at a reunion, a birthday or a family chat." },
        { t: "Couples", d: "See yourselves growing old together, a sweet picture for an anniversary card." },
        { t: "Writers and creators", d: "Picture a character at different ages, or show a \"now and in 40 years\" story in a video." },
        { t: "Milestone birthdays", d: "Turning 40, 50 or 60? Post the \"me at 90\" version for laughs." },
      ],
    },
    {
      heading: "Choosing an age",
      table: {
        head: ["Age you pick", "What to expect"],
        rows: [
          ["1 to 12", "A new photo of you as a child, staged to suit that age"],
          ["Below your age", "A younger you in the same photo: smoother skin, fuller hair"],
          ["40 to 55", "Subtle changes: fine lines, the first grey hairs"],
          ["60 to 75", "Clear signs of age: grey or silver hair, deeper lines, as in our example"],
          ["80 to 100", "A very old you, white hair, softer features, still recognisably you"],
        ],
      },
      after: ["Start at 65 (the default) to see the effect clearly, then try 45 and 85 to build a timeline."],
    },
    {
      heading: "Tips for a convincing result",
      list: [
        "**Use a front-facing photo in even light.** Harsh shadows can look like extra wrinkles.",
        "**Skip beauty filters.** Smoothing filters hide your skin texture, and the result looks less natural.",
        "**Pick a photo you like.** Everything except your age is kept, including your pose and outfit.",
        "**Neutral or smiling expressions both work.** A smile shows the laughter lines that come with age.",
        "**Try several ages from one photo.** It's the best way to see a believable progression.",
      ],
    },
    {
      heading: "Make an aging timeline",
      paragraphs: [
        "Run the same selfie at 30, 50, 70 and 90, then put them side by side. Because the clothes, pose and background stay the same, the only thing that changes from frame to frame is you, which makes a strikingly smooth sequence. It works well as a carousel post or a short video where each frame fades into the next.",
        "For a group, do the same for each person at the same age and post the line-up. Comparing who ages most gracefully is half the fun.",
      ],
    },
    {
      heading: "Using it responsibly",
      list: [
        "**Use your own photo, or one you have permission to use.** Ageing someone else without asking can upset them.",
        "**It's not a missing-person or forensic tool.** Real age-progression for investigations is done by trained specialists with much more information.",
        "**It's not medical advice.** It can't predict health, skin conditions or hair loss.",
        "**Be kind.** Ageing photos are fun among friends, less so when used to mock someone.",
      ],
    },
    {
      heading: "Related apps",
      paragraphs: [
        "Want to see a future child rather than a future you? The [AI baby predictor](/creative/ai-baby-predictor) imagines a baby from a couple's photo. For a glamorous throwback instead of a look ahead, try [Old Hollywood glamour](/creative/old-hollywood-glamour) or the [90s yearbook photo](/creative/90s-yearbook-photo). To restore a real old photo of a grandparent, use [restore old photos](/creative/restore-old-photos).",
      ],
    },
    {
      heading: "What usually changes with each decade?",
      items: [
        { t: "In your 40s", d: "Fine lines around the eyes and on the forehead, the first grey hairs, a slightly softer jawline." },
        { t: "In your 50s", d: "More grey, deeper lines around the mouth, thinner lips and eyebrows, skin a little less firm." },
        { t: "In your 60s", d: "Grey or silver hair for many people, clear wrinkles, softer cheeks and a more defined neck." },
        { t: "In your 70s and beyond", d: "White or thinning hair, deeper folds, thinner skin and features that soften further, while the eyes and smile stay recognisably yours." },
      ],
      after: ["Everyone ages differently, so treat these as typical changes the app draws on, not what will happen to you."],
    },
    {
      heading: "Ideas for your age photos",
      items: [
        { t: "Then, now and later", d: "Post a real childhood photo, a recent selfie and your age-progressed photo side by side." },
        { t: "A couple's future", d: "Age both of you to 80 with the same photo setup, and post them together for an anniversary." },
        { t: "A milestone birthday joke", d: "Turning 30? Post \"me at 30, as predicted by my 90-year-old self\" with the aged picture." },
        { t: "A family comparison", d: "Age the siblings to 70 and let the family vote on who ages most like Grandma." },
      ],
    },
    {
      heading: "Cost and privacy",
      paragraphs: [
        `Each age photo uses ${COST}, and you're only charged when it's made. Credit packs start at ${PACK_FROM} and never expire. If your country has a free trial, the box above the upload says so.`,
        "Your selfie is sent to fal.ai, the provider that runs our image models, only to create the aged version. It's not used for training AI or sold. Your photos stay in My Creations, where you can delete them at any time.",
      ],
    },
  ],

  faq: [
    { q: "How do I see what I'll look like when I'm older?", a: "Upload a clear selfie, drag Age them to the age you want and press Generate. You'll see yourself at that age in the same photo in under a minute." },
    { q: "Can it make me look younger?", a: "Yes. Choose an age below your own and it de-ages you. For a child's age it stages a new childhood photo." },
    { q: "What ages can I choose?", a: "Any age from 1 to 100. The slider starts at 65." },
    { q: "Does it change my clothes or background?", a: "No. Your clothes, pose, background and light stay the same; only your age changes. Child ages are the exception." },
    { q: "Is it accurate?", a: "It's an illustrative, for-fun guess. It can't know your genes, health or lifestyle, which affect real ageing." },
    { q: "Can I age a group photo?", a: "It works best with one person. For a group comparison, age each person's own photo to the same age." },
    { q: "How much does it cost?", a: `${COST} per photo, charged only when it's made. Packs start at ${PACK_FROM}; a free trial, where running, covers the first.` },
    { q: "Does it work on my phone?", a: "Yes. This page works in any phone browser: tap the upload box, pick a selfie from your camera roll and drag the age slider with your thumb." },
    { q: "Why doesn't it look exactly like my parents at that age?", a: "The app works from your face alone. It can't see your family resemblance or your genes, so it makes a general, believable older version of you." },
    { q: "Can I make myself look like a child?", a: "Yes. Pick an age from 1 to 12 and the app stages a new childhood photo of you, rather than shrinking you in your current clothes." },
    { q: "Is there a watermark?", a: "No. Your photo downloads at full size with no watermark." },
  ],
};

export default page;
