import type { AppPage } from "./types";
import { COST, PACK_FROM } from "./facts";

const page: AppPage = {
  title: "AI Pet Portrait: Royal Oil Painting of Your Dog or Cat",
  h1: "AI Pet Portrait Maker",
  metaDescription: "Turn your dog or cat into a royal oil portrait with a crown and ermine robe, or a studio photo, watercolour or cartoon. Keeps your pet's real face.",
  tagline: "Upload a photo of your pet and see them crowned: a regal oil painting with a jewelled crown, an ermine-trimmed royal robe and a palace behind, or a studio photo, watercolour or cartoon instead.",
  keywords: "ai pet portrait, royal pet portrait, dog portrait from photo, cat portrait ai, pet renaissance painting, custom pet portrait, pet portrait gift",

  howToHeading: "How to make a royal portrait of your pet",
  howTo: [
    { t: "Upload a clear photo of your pet", d: "Looking toward the camera, face in good light, sitting or lying still. Phone photos are perfect." },
    { t: "Pick a style and framing", d: "Royal portrait is the classic. Studio photo, Watercolour and Cartoon are the alternatives. Head & shoulders makes a grand bust." },
    { t: "Generate, then frame it", d: "Your portrait is ready in under a minute. Upscale it if you'd like to print and hang it." },
  ],
  exampleCaption: "A golden retriever sitting on a sunny lawn becomes a royal oil portrait: the same happy face and golden coat, wearing a jewelled crown and a red velvet robe trimmed with ermine, in front of a palace backdrop with dramatic classical light.",

  sections: [
    {
      heading: "What does the pet portrait maker do?",
      paragraphs: [
        "It paints your pet as royalty. In the default **Royal portrait** style, your dog, cat or other companion is dressed in a crown and an ornate royal robe, painted in rich oil-painting style with dramatic classical lighting and a palace backdrop, as if they'd sat for a court painter centuries ago.",
        "Most importantly, it keeps **your** pet: their face, markings, ear shape, eye colour and coat. That's what makes a pet portrait special. A generic dog in a crown is funny; your own dog in a crown is a gift people keep.",
      ],
    },
    {
      heading: "Four styles for your pet",
      table: {
        head: ["Style", "What you get", "Best for"],
        rows: [
          ["Royal portrait", "An oil painting in period dress, crown and robe, gilded setting", "The classic gift, and the most shared"],
          ["Studio photo", "A clean studio portrait, soft key light, sharp focus on the eyes", "A polished photo for the wall or a profile"],
          ["Watercolour", "Loose watercolour with soft bleeding edges and paper texture", "A gentle, artistic print or a memorial"],
          ["Cartoon", "A friendly cartoon with clean outlines and flat colour", "Stickers, mugs and fun avatars"],
          ["Auto", "The app picks; usually the royal portrait", "When you can't decide"],
        ],
      },
      after: ["**Framing** works as with people: Head & shoulders for a regal bust, Half body to show more of the robe, Full body for the whole pet on a throne-like setting."],
    },
    {
      heading: "Why royal pet portraits are so popular",
      paragraphs: [
        "Painted portraits of pets aren't new. Aristocrats commissioned paintings of their favourite dogs and horses for centuries, and the joke of dressing a pet in the robes of a duke or a queen came later. Today the \"Renaissance pet portrait\" is one of the most popular personalised gifts online, and commissioned versions can cost a lot and take weeks.",
        "The appeal is easy to see: pets already rule the house, so a portrait that makes it official is funny and affectionate at once. And because it's a portrait, it suits a wall in a way a meme doesn't.",
      ],
    },
    {
      heading: "Who makes pet portraits?",
      items: [
        { t: "Pet owners", d: "A portrait for the hallway, the desk or the lock screen. Many people make one for each pet." },
        { t: "Gift givers", d: "Birthdays, Christmas, a new puppy or a friend's adoption day: a framed royal portrait of their pet is a gift that always lands." },
        { t: "People remembering a pet", d: "A watercolour or royal portrait from a favourite photo can be a gentle way to remember a pet who has died." },
        { t: "Pet businesses", d: "Groomers, sitters, vets and pet shops can offer portraits of client pets, or use them on social posts with permission." },
        { t: "Families", d: "Pair your pet's portrait with a human one from the [Renaissance portrait maker](/creative/renaissance-portrait) and hang them side by side." },
      ],
    },
    {
      heading: "Which photo makes the best portrait?",
      list: [
        "**Your pet looking toward the camera.** A face you can see clearly gives the most accurate likeness. Hold a treat above the lens.",
        "**Good light on the face.** Daylight near a window or outdoors in shade. Dark fur needs more light than you'd think.",
        "**Calm, still photos.** Action shots are often blurry; a sitting or lying pet gives the cleanest result.",
        "**Eyes in focus.** Tap the eyes on your phone screen to focus before you take the photo.",
        "**One pet per photo.** Each portrait is designed for one animal. For two pets, make one each.",
      ],
    },
    {
      heading: "Printing and framing your pet's portrait",
      paragraphs: [
        "For a print, enlarge the portrait 2× or 4× in the [image upscaler](/upscale) so the fur and the crown stay sharp. Royal portraits look best on canvas or matte art paper in a gold or dark wood frame; watercolours suit a white mount and a simple frame.",
        "Choose a tall 4:5 or 3:4 shape before generating for a classic portrait frame. Many online printers can also put the image on mugs, cushions and phone cases.",
      ],
    },
    {
      heading: "What it won't do",
      list: [
        "**Change your pet's breed or markings.** It keeps your pet's real features; that's the point.",
        "**Combine two pets in one portrait.** Make one for each and frame them as a pair.",
        "**Make a real painting.** It's a digital image in a painted style; order a canvas print for a physical version.",
        "**Write your pet's name.** Add a name plate or title afterwards in the [free photo editor](/editor).",
      ],
    },
    {
      heading: "Ideas for your pet portrait",
      items: [
        { t: "A title plate", d: "Add \"Her Majesty Queen Biscuit, Ruler of the Sofa\" under the painting for a museum-style caption." },
        { t: "A gallery wall", d: "Make a royal portrait, a watercolour and a cartoon of the same pet and hang them together." },
        { t: "A birthday post", d: "Post the portrait on your pet's birthday or adoption day with the royal title of your choice." },
      ],
    },
    {
      heading: "How to take a great photo of your pet",
      items: [
        { t: "Get down to their eye level", d: "Crouch or lie on the floor. Photos taken from above make pets look small and hide their faces." },
        { t: "Use a treat or a squeaky toy", d: "Hold it just above the phone's lens. Your pet looks toward the camera with bright, alert eyes." },
        { t: "Find soft daylight", d: "Near a window or outside in the shade. Avoid direct midday sun and harsh flash, which causes glowing eyes." },
        { t: "Shoot in bursts", d: "Hold the shutter button for a burst and pick the sharpest frame. Pets rarely sit still for long." },
        { t: "Clean up the background", d: "A plain wall or lawn is easier to replace with a palace backdrop than a cluttered room." },
      ],
    },
    {
      heading: "A portrait to remember a pet",
      paragraphs: [
        "Many people make a portrait of a pet who has died. Any clear photo where you can see their face will work, even an older one. If the only photo you have is small or a little blurry, enlarge it first in the [image upscaler](/upscale), then make the portrait. The Watercolour style is often chosen for memorials because it's soft and gentle, while a Royal portrait celebrates the character they were.",
      ],
    },
    {
      heading: "Which style should you choose for your pet?",
      paragraphs: [
        "Choose **Royal portrait** for humour and grandeur: it's the one that makes guests laugh in the hallway. **Studio photo** is best when you simply want a beautiful, sharp photo of your pet with a clean backdrop, ideal for a calendar. **Watercolour** suits a calm living room, a nursery or a memorial. **Cartoon** is made for stickers, mugs and a fun avatar for your pet's own social account.",
      ],
    },
    {
      heading: "Price and privacy",
      paragraphs: [
        `Each pet portrait uses ${COST}, only when the portrait is made. Credit packs start at ${PACK_FROM} and never expire. If a free trial is running in your country, the box above the upload shows it.`,
        "Your pet's photo is sent to fal.ai, the company that runs our image models, to paint the portrait. It isn't used for training AI or sold. Your portraits stay in My Creations until you delete them.",
      ],
    },
  ],

  faq: [
    { q: "How do I make a royal portrait of my pet?", a: "Upload a clear photo of your pet, keep Style on Royal portrait or Auto, and press Generate. You get a crowned oil-painting portrait in under a minute." },
    { q: "Does it work for cats?", a: "Yes. Cats, dogs, rabbits and most pets with a clear face in the photo work well." },
    { q: "Will it look like my pet?", a: "Yes. Your pet's face, markings, ears, eye colour and coat are kept." },
    { q: "What styles are there?", a: "Royal portrait, Studio photo, Watercolour and Cartoon." },
    { q: "Can I put two pets in one portrait?", a: "The app is designed for one pet per portrait. Make one each and frame them as a pair." },
    { q: "Is it a good gift?", a: "Yes. Upscale it, print it on canvas and frame it. It's one of the most popular personalised gifts." },
    { q: "How much does it cost?", a: `${COST} per portrait, charged only when it's made. Packs start at ${PACK_FROM}; a free trial, where available, covers your first.` },
    { q: "Can I add my pet's name?", a: "Yes, afterwards, with the text tool in the free photo editor." },
    { q: "Can I use an old photo of my pet?", a: "Yes, as long as the face is clear. If it's small or blurry, enlarge it in the image upscaler first for a sharper portrait." },
    { q: "Is there a watermark?", a: "No. Your pet portrait downloads at full size without a watermark." },
  ],
};

export default page;
