import type { FacetGuide } from "./types";

export const IMAGE_SUBJECTS: Record<string, FacetGuide> = {
  "portrait-selfie": {
    intro: [
      "This is the biggest category in the library, because turning a selfie into something special is what most people want from an image model. The secret is in two halves of the prompt: the part that protects your identity, and the part that describes the new look.",
      "The source photo matters as much as the words. A sharp, front-facing selfie in soft light gives the model everything it needs; a dark, tilted or filtered one makes it guess.",
    ],
    ingredients: [
      { t: "Identity lock", d: "\"Keep my face, features, skin tone and hairstyle exactly as in the photo.\"" },
      { t: "Framing and pose", d: "Close-up, waist-up or full length; facing the camera or a natural three-quarter turn." },
      { t: "Outfit and styling", d: "What you're wearing in the new image." },
      { t: "Setting", d: "Where you are, and how blurred the background is." },
      { t: "Light and finish", d: "Golden hour, studio softbox, film grain, editorial colour." },
    ],
    example: {
      prompt: "Using my selfie, create a waist-up editorial portrait. Keep my face, skin tone, hairstyle and expression exactly as in the photo. I'm wearing a camel wool coat over a black turtleneck, standing on a quiet city street in autumn, leaves softly blurred behind me. Warm late-afternoon side light, 85 mm look, natural skin texture, subtle film grain.",
      notes: [
        { t: "\"Keep my face… exactly\"", d: "The identity lock comes first and is explicit." },
        { t: "\"Waist-up editorial portrait\"", d: "Framing and genre together." },
        { t: "\"Camel wool coat… black turtleneck\"", d: "A specific outfit, not \"stylish clothes\"." },
        { t: "\"Natural skin texture\"", d: "Keeps you looking real, not airbrushed." },
      ],
    },
    models: "Nano Banana Pro and GPT Image 2 are the strongest at keeping a real person's likeness from a photo; \"Generate this\" opens Create Image with your choice of model. If a face drifts, try again or switch models before rewriting the prompt.",
    mistakes: [
      "A low-quality, tilted or heavily filtered source selfie.",
      "Forgetting the identity lock, so the model beautifies you into a stranger.",
      "Asking for a dramatically different age, build or ethnicity, which breaks likeness.",
      "Hands near the face in the source photo, which can confuse the result.",
    ],
    faq: [
      { q: "Which selfie works best?", a: "A sharp, front-facing photo in soft daylight, with no sunglasses or beauty filter." },
      { q: "Will the result look like me?", a: "With a clear photo and an identity lock in the prompt, usually yes; run it again if a detail drifts." },
      { q: "Can I use these prompts in ChatGPT or Gemini?", a: "Yes. They're plain text; paste them with your photo into any image model." },
      { q: "Is my selfie stored?", a: "On PixelShine, uploads and results are saved to your account's My Creations, where you can delete them." },
    ],
  },
  character: {
    intro: [
      "Character prompts invent someone new: a hero for a story, a mascot, a fantasy adventurer or a cute creature. The best ones read like a character sheet, with silhouette, colours, costume and personality, so you can recreate the same character again later.",
      "Decide early whether you want a single illustration or a reference sheet with several views; sheets are far more useful if the character will appear again.",
    ],
    ingredients: [
      { t: "Role and personality", d: "Who they are and one personality trait that shows in the pose." },
      { t: "Silhouette", d: "Body shape, proportions, signature accessory." },
      { t: "Colours and costume", d: "Three or four colours and the key pieces of clothing." },
      { t: "Style", d: "3D animated, anime, painterly fantasy, flat mascot." },
      { t: "Presentation", d: "Full-body on plain background, or a sheet with front, side and back views." },
    ],
    example: {
      prompt: "A character reference sheet for a young inventor named Pip: small and wiry, oversized brass goggles pushed up on curly red hair, a patched green work apron full of tools, rolled-up sleeves, mischievous grin. Front, side and back views standing in a row, plus three small facial expressions. Clean 3D animated style, plain light grey background.",
      notes: [
        { t: "\"Character reference sheet\"", d: "Several views make the character reusable." },
        { t: "\"Oversized brass goggles\"", d: "A signature accessory makes them recognisable." },
        { t: "\"Mischievous grin\"", d: "Personality, shown not told." },
        { t: "\"Plain light grey background\"", d: "Keeps the focus on the design." },
      ],
    },
    models: "Nano Banana Pro is particularly good at keeping a character consistent across views and later images. GPT Image 2 follows detailed costume descriptions closely. Save the sheet and use it as a reference image for every new scene with the character.",
    mistakes: [
      "Vague descriptions (\"a cool hero\") that change every time.",
      "Too many accessories, so the silhouette gets muddled.",
      "No plain background, making the character hard to reuse.",
      "Reusing a famous character's design instead of inventing your own.",
    ],
    faq: [
      { q: "How do I keep my character consistent?", a: "Make a reference sheet first, then include it as a reference image and repeat the description." },
      { q: "Can I base a character on myself?", a: "Yes, with a prompt that takes your photo, such as a 3D or cartoon version of you." },
      { q: "What style is best for a mascot?", a: "Simple shapes and bold colours that still read when the mascot is small." },
      { q: "Can I use AI characters commercially?", a: "Check the terms of the model you use and avoid copying existing characters." },
    ],
  },
  "group-couple": {
    intro: [
      "Group and couple images are the hardest portraits for AI, because every face needs to stay itself, nobody can be duplicated or blended, and the poses need to look natural together. Prompts that describe each person and their position clearly get much better results.",
      "When you're using real photos, a single photo with everyone already in it is the most reliable starting point. PixelShine's Group Photo tool can also combine separate photos of individuals into one group picture.",
    ],
    ingredients: [
      { t: "Count", d: "\"Two people\", \"a family of five\": say the exact number." },
      { t: "Who's who", d: "A short description or position for each person." },
      { t: "Arrangement", d: "Side by side, seated front and standing back, walking hand in hand." },
      { t: "Relationship cues", d: "Shared laughter, arms around shoulders, looking at each other." },
      { t: "Identity lock", d: "Keep every face from the photo, with nobody added or removed." },
    ],
    example: {
      prompt: "Using our photo, create a portrait of the two of us walking hand in hand along a beach at sunset, laughing and looking at each other. Keep both of our faces, hairstyles and heights exactly as in the photo; no other people. Light linen clothes in white and sand tones, warm backlight, gentle sea breeze in the hair, 35 mm candid look.",
      notes: [
        { t: "\"The two of us… no other people\"", d: "A fixed count prevents extra strangers." },
        { t: "\"Keep both of our faces… heights\"", d: "Locks identity and relative size." },
        { t: "\"Looking at each other\"", d: "A relationship cue makes it feel real." },
        { t: "\"35 mm candid look\"", d: "Natural, unposed framing." },
      ],
    },
    models: "Nano Banana Pro and GPT Image 2 are best at keeping several real faces distinct. Faces stay most accurate in groups of up to about six; check every person in larger groups before sharing.",
    mistakes: [
      "No exact number, so people are added or lost.",
      "Using separate photos with very different lighting without saying how to match them.",
      "Faces too small in big groups to keep their likeness.",
      "Prompting for touching poses the source photos can't support, such as an embrace from two passport photos.",
    ],
    faq: [
      { q: "Can I make a group photo from separate photos?", a: "Yes. PixelShine's Group Photo tool combines up to 14 single photos into one picture." },
      { q: "How many people can be in one image?", a: "Faces are most accurate up to about six; larger groups work but need checking." },
      { q: "Can I add someone who missed the photo?", a: "Yes, with the Group Photo tool: upload the group photo and a photo of the missing person." },
      { q: "Why does one face look wrong?", a: "Small or turned faces lose detail; use clearer photos and run it again." },
    ],
  },
  product: {
    intro: [
      "Product prompts describe objects so precisely that the model can't swap them for something generic. Material, finish and scale matter as much as shape: brushed aluminium, frosted glass, matte ceramic and soft leather each catch light differently.",
      "Decide the angle and lighting setup the way a product photographer would, because that's what makes an object look premium or cheap.",
    ],
    ingredients: [
      { t: "Exact object", d: "Shape, size, material, colour and finish." },
      { t: "Angle", d: "Front, three-quarter, top-down flat-lay or a close detail." },
      { t: "Lighting setup", d: "Softbox from the side, rim light, a hard sunbeam, or gradient backlight." },
      { t: "Surface and backdrop", d: "Seamless paper, marble, wood, coloured acrylic." },
      { t: "Scale cues", d: "A hand, a prop or a known object nearby." },
    ],
    example: {
      prompt: "A studio product photo of a matte black ceramic coffee mug with a thin gold rim, three-quarter view, on a seamless warm grey backdrop. One large softbox from the left, a white bounce card on the right, a soft reflection on the glossy surface below. Crisp focus on the rim, true-to-life colour.",
      notes: [
        { t: "\"Matte black ceramic… thin gold rim\"", d: "Material and detail stop a generic mug." },
        { t: "\"Softbox from the left, bounce card on the right\"", d: "A real lighting setup gives realistic highlights." },
        { t: "\"Soft reflection below\"", d: "A premium studio cue." },
        { t: "\"True-to-life colour\"", d: "Important for anything you'll sell." },
      ],
    },
    models: "For invented products and concepts, all models here work well. For your own real product, use a photo prompt with Nano Banana Pro or GPT Image 2 and ask to keep the shape and label exactly.",
    mistakes: [
      "Generic nouns with no material or finish.",
      "No lighting setup, so the object looks flat.",
      "Reflections and logos that don't match the real product.",
      "Busy props stealing attention from the object.",
    ],
    faq: [
      { q: "How do I make an object look premium?", a: "Use controlled studio light, a clean backdrop and a precise description of materials." },
      { q: "Can I use my own product photo?", a: "Yes; choose a prompt that takes your photo and say what must stay the same." },
      { q: "What's a flat-lay?", a: "A photo taken from directly above with items arranged on a surface." },
      { q: "How do I show scale?", a: "Include a hand or a familiar object beside the product." },
    ],
  },
  "food-drink": {
    intro: [
      "Food prompts live or die on appetite appeal: steam, gloss, crumbs, condensation, a drip of sauce. Describe the dish like a menu writer, then the scene like a food stylist: plate, surface, props and light.",
      "Natural side light from a window is the classic food-photography setup; it brings out texture without harsh shine.",
    ],
    ingredients: [
      { t: "The dish", d: "Exact food, how it's cooked and served." },
      { t: "Freshness cues", d: "Steam, glistening sauce, melting butter, condensation." },
      { t: "Styling", d: "Plate, cutlery, napkin, scattered ingredients." },
      { t: "Angle", d: "Overhead for bowls and spreads, 45 degrees for burgers and drinks." },
      { t: "Light", d: "Soft window light from the side, often with a little backlight." },
    ],
    example: {
      prompt: "A 45-degree food photo of a stack of three fluffy buttermilk pancakes with a melting pat of butter, fresh blueberries and maple syrup dripping down the side, on a speckled blue ceramic plate on a worn wooden table. Soft window light from behind and to the left, a light dusting of icing sugar, shallow depth of field, warm morning tones.",
      notes: [
        { t: "\"Melting pat of butter… syrup dripping\"", d: "Motion and freshness make it mouth-watering." },
        { t: "\"Speckled blue ceramic plate\"", d: "Styling details add character and colour contrast." },
        { t: "\"Window light from behind and to the left\"", d: "Backlight makes syrup and berries glow." },
        { t: "\"45-degree\"", d: "The right angle for stacked food." },
      ],
    },
    models: "Seedream 4.5 and Nano Banana Pro produce rich, realistic food textures. If you're showing a real menu item, use your own photo so the dish isn't misrepresented.",
    mistakes: [
      "Overhead angles for tall food like burgers.",
      "Harsh flash-like light that makes food look greasy.",
      "Impossible portions or extra ingredients the real dish doesn't have.",
      "No freshness cues, so the food looks cold.",
    ],
    faq: [
      { q: "Can I use AI food photos on a menu?", a: "They should represent the real dish; for real menu items, start from your own photo." },
      { q: "What angle is best?", a: "Overhead for pizzas, bowls and spreads; 45 degrees for burgers, cakes and drinks." },
      { q: "How do I make drinks look cold?", a: "Ask for condensation droplets, ice and cool backlight." },
      { q: "What background suits food?", a: "Natural wood, stone or linen in tones that contrast with the food." },
    ],
  },
  "fashion-item": {
    intro: [
      "Fashion prompts cover clothes, shoes, bags and accessories, either on a model or styled on their own. Fabric and fit are the details that make them convincing: the drape of silk, the weight of denim, the stitching on leather.",
      "For lookbooks and outfit ideas, describe the whole look head to toe, then the setting and pose that suit it.",
    ],
    ingredients: [
      { t: "The garment", d: "Cut, fabric, colour, pattern and fit." },
      { t: "Styling", d: "What it's paired with: shoes, bag, jewellery." },
      { t: "Presentation", d: "On a model, on a hanger, folded flat-lay, or a ghost-mannequin shot." },
      { t: "Setting", d: "Studio backdrop, street, runway, natural landscape." },
      { t: "Editorial light", d: "Hard flash, soft overcast, golden hour." },
    ],
    example: {
      prompt: "A full-length fashion editorial photo of a model in a wide-leg cream linen suit with a loose double-breasted jacket, a white tank top and tan leather sandals, standing on stone steps in a sunny Mediterranean town. Natural creases in the linen, hard midday sun with crisp shadows, editorial colour, 50 mm lens.",
      notes: [
        { t: "\"Wide-leg… double-breasted\"", d: "Cut and silhouette, the heart of fashion." },
        { t: "\"Natural creases in the linen\"", d: "Fabric behaviour sells realism." },
        { t: "\"Stone steps… Mediterranean town\"", d: "A setting that matches the look." },
        { t: "\"Hard midday sun\"", d: "A deliberate editorial light choice." },
      ],
    },
    models: "All models here handle fashion well; for trying a look on yourself, use a photo prompt with Nano Banana Pro or GPT Image 2, or PixelShine's outfit changer app, which does it in one tap.",
    mistakes: [
      "\"Stylish outfit\" with no cut, fabric or colour.",
      "Mismatched setting and style, such as a ball gown in a gym.",
      "Logos of real brands, which may be altered or refused.",
      "Unrealistic fabric that looks plastic.",
    ],
    faq: [
      { q: "Can I try an outfit on my own photo?", a: "Yes, with a prompt that uses your photo or the one-tap outfit changer." },
      { q: "What is a ghost-mannequin shot?", a: "Clothing photographed as if worn by an invisible body, common in online shops." },
      { q: "How do I show fabric texture?", a: "Name the fabric and how it behaves: creases, sheen, weave, drape." },
      { q: "Can I design new clothes?", a: "Yes, as concepts; describe cut, fabric and details like a design brief." },
    ],
  },
  "animal-creature": {
    intro: [
      "Animal prompts range from realistic wildlife and pet portraits to invented fantasy creatures. For real animals, the details that matter are breed, fur or feather texture, eyes and natural behaviour. For creatures, describe anatomy clearly enough that the model can build something believable.",
      "Eyes are the focal point: ask for sharp focus on them, with a catchlight, for portraits that feel alive.",
    ],
    ingredients: [
      { t: "Species or breed", d: "Be exact: \"a red fox\", \"a golden retriever puppy\", \"a snowy owl\"." },
      { t: "Behaviour", d: "Pouncing, yawning, mid-flight, curled asleep." },
      { t: "Habitat", d: "Natural setting or a stylised scene." },
      { t: "Texture and eyes", d: "Fur, feathers or scales, and sharp eyes with a catchlight." },
      { t: "Style", d: "Wildlife photography, storybook illustration, fantasy art." },
    ],
    example: {
      prompt: "A wildlife photograph of a red fox mid-pounce into deep fresh snow, front paws stretched forward, tail streaming behind, in a quiet birch forest at dawn. Fast shutter freezing flying snow crystals, sharp focus on the eyes, soft pink morning light, long telephoto lens with a creamy blurred background.",
      notes: [
        { t: "\"Mid-pounce… paws stretched\"", d: "Real behaviour makes a wildlife shot." },
        { t: "\"Freezing flying snow crystals\"", d: "Motion detail adds drama." },
        { t: "\"Sharp focus on the eyes\"", d: "The rule of all animal portraits." },
        { t: "\"Long telephoto lens\"", d: "The look of real wildlife photography." },
      ],
    },
    models: "Seedream 4.5 and Nano Banana Pro produce excellent fur and feather detail. For a portrait of your own pet, use a photo prompt so markings and colours stay true, or PixelShine's pet portrait app for one-tap styles.",
    mistakes: [
      "Generic \"a dog\" when breed and colour matter.",
      "Unnatural anatomy, such as extra legs; check limbs and paws.",
      "Human poses for wild animals in realistic shots.",
      "Soft focus on the eyes.",
    ],
    faq: [
      { q: "Can I make a portrait of my pet?", a: "Yes, with a prompt that uses your pet's photo, or the one-tap pet portrait app." },
      { q: "How do I make a fantasy creature believable?", a: "Base it on real anatomy, describe how it moves, and keep textures consistent." },
      { q: "Why do paws or legs look wrong?", a: "Limbs are hard for models; regenerate or fix them with the AI photo editor." },
      { q: "What makes wildlife photos realistic?", a: "Natural behaviour, a real habitat, telephoto blur and sharp eyes." },
    ],
  },
  vehicle: {
    intro: [
      "Vehicle prompts cover cars, motorbikes, bicycles, boats, aircraft and futuristic concepts. Automotive photography has its own language: low angles, light trails, reflections that trace the body lines, and settings that suit the vehicle's character.",
      "Describe the vehicle's type, era and colour rather than relying on a brand name, which models may get wrong or refuse.",
    ],
    ingredients: [
      { t: "Type and era", d: "1960s convertible, modern electric SUV, vintage motorbike, sailing yacht." },
      { t: "Colour and finish", d: "Gloss, matte, metallic, weathered." },
      { t: "Angle", d: "Low front three-quarter, side profile, rolling shot." },
      { t: "Setting", d: "Coastal road, city at night, desert, studio." },
      { t: "Motion and light", d: "Panning blur, light trails, wet reflections, golden hour." },
    ],
    example: {
      prompt: "A low front three-quarter photo of a 1960s-style silver convertible sports car on a winding coastal road at golden hour, the sea behind. Long reflections of the sunset along the curved body, slight motion blur on the road and wheels, crisp focus on the headlights, warm cinematic colour.",
      notes: [
        { t: "\"Low front three-quarter\"", d: "The classic heroic car angle." },
        { t: "\"1960s-style silver convertible\"", d: "Era and type without a brand." },
        { t: "\"Reflections… along the curved body\"", d: "Shows shape and finish." },
        { t: "\"Motion blur on the road and wheels\"", d: "Makes it feel like it's moving." },
      ],
    },
    models: "Seedream 4.5 handles glossy reflections and dramatic automotive light beautifully. GPT Image 2 is good at precise design details for concept vehicles. Check wheels and mirrors, which are common trouble spots.",
    mistakes: [
      "Relying on brand and model names.",
      "Front-on, eye-level angles that flatten the shape.",
      "Wheels that don't match or sit oddly.",
      "Static road and wheels in a \"driving\" shot.",
    ],
    faq: [
      { q: "Can I generate a specific car model?", a: "Results are unreliable; describe the type, era and shape instead." },
      { q: "How do I show speed?", a: "Ask for motion blur on the background and wheels, with the body sharp." },
      { q: "What's the best time of day?", a: "Golden hour or blue hour, when reflections are soft and colourful." },
      { q: "Can I design a concept vehicle?", a: "Yes; describe silhouette, materials and purpose like a design brief." },
    ],
  },
  "architecture-interior": {
    intro: [
      "Architecture and interior prompts are about space and light. Good ones name the style of architecture, the materials, the camera position and the time of day, because the same room looks completely different at noon and at dusk.",
      "Interior designers use them for mood boards and concept ideas; for real rooms, starting from a photo of your space keeps the walls, windows and proportions true.",
    ],
    ingredients: [
      { t: "Style", d: "Japandi, mid-century modern, brutalist, Mediterranean, Scandinavian." },
      { t: "Space", d: "Room type, size and layout." },
      { t: "Materials", d: "Oak floors, lime plaster, terrazzo, linen, brass." },
      { t: "Light", d: "Morning sun through tall windows, lamp-lit evening, overcast daylight." },
      { t: "Camera", d: "Wide-angle at eye level with vertical lines kept straight." },
    ],
    example: {
      prompt: "An interior photo of a small Japandi living room: low oak sofa with oatmeal linen cushions, a paper floor lamp, a single large potted olive tree, lime-washed walls and pale oak floor. Morning sunlight through a tall window casting soft shadows across the floor. Wide-angle at eye level, straight vertical lines, calm and uncluttered.",
      notes: [
        { t: "\"Japandi\"", d: "One style word sets furniture, colours and mood." },
        { t: "\"Lime-washed walls… pale oak\"", d: "Materials make it feel real." },
        { t: "\"Morning sunlight… soft shadows\"", d: "Light defines the atmosphere." },
        { t: "\"Straight vertical lines\"", d: "The architectural photographer's rule." },
      ],
    },
    models: "GPT Image 2 and Seedream 4.5 render convincing spaces and materials. For redesigning your own room, use a photo prompt and say which parts must stay (walls, windows, floor) and which can change.",
    mistakes: [
      "Tilted verticals that make rooms look like they're falling.",
      "Mixing too many styles in one room.",
      "Impossible layouts, such as windows that lead nowhere.",
      "No light direction, so the room looks rendered.",
    ],
    faq: [
      { q: "Can I redesign my own room?", a: "Yes. Use a photo of the room and say what stays and what changes." },
      { q: "What's Japandi?", a: "A blend of Japanese and Scandinavian design: natural materials, calm colours, little clutter." },
      { q: "How do I get realistic architecture?", a: "Name real materials, keep verticals straight and describe natural light." },
      { q: "Are the results buildable?", a: "They're visual concepts, not plans; an architect or designer turns them into real drawings." },
    ],
  },
  "landscape-nature": {
    intro: [
      "Landscape prompts benefit from thinking in layers: something in the foreground, the main subject in the middle, and depth behind. Add weather and time of day, and a flat scene becomes a moment you'd want to stand in.",
      "Nature is also where light does the most work: mist, low sun, storm light and the blue hour change everything.",
    ],
    ingredients: [
      { t: "Foreground", d: "Wildflowers, rocks, a stream, a path leading in." },
      { t: "Main subject", d: "A mountain, a waterfall, a lone tree, a coastline." },
      { t: "Weather", d: "Mist, clearing storm, snow, still air." },
      { t: "Time of day", d: "Sunrise, golden hour, blue hour, moonlit night." },
      { t: "Lens", d: "Wide-angle for grand views, telephoto to compress layers of hills." },
    ],
    example: {
      prompt: "A wide-angle landscape photo of a mountain lake at sunrise: smooth grey rocks and purple wildflowers in the foreground, still water reflecting snow-capped peaks, a thin layer of mist drifting over the surface. Soft pink and gold light on the summits, deep blue shadows in the valley, crisp detail from front to back.",
      notes: [
        { t: "\"Rocks and wildflowers in the foreground\"", d: "A foreground layer adds depth." },
        { t: "\"Still water reflecting\"", d: "Doubles the subject and adds calm." },
        { t: "\"Mist drifting over the surface\"", d: "Weather gives atmosphere." },
        { t: "\"Crisp detail from front to back\"", d: "The deep focus of landscape photography." },
      ],
    },
    models: "Seedream 4.5 is especially good at grand, high-resolution landscapes; Nano Banana Pro and GPT Image 2 are strong when the scene includes people or specific objects. Generate wide for desktop wallpapers or tall for phones.",
    mistakes: [
      "No foreground, so the scene feels flat.",
      "Midday light that washes out colour and depth.",
      "Oversaturated colours that look fake.",
      "Too many dramatic elements at once: aurora, rainbow and lightning together.",
    ],
    faq: [
      { q: "How do I make landscapes look real?", a: "Use believable weather and light, natural colour and a clear foreground." },
      { q: "What ratio suits landscapes?", a: "3:2 or 16:9 for wide views; 9:16 for phone wallpapers." },
      { q: "Can I add myself to a landscape?", a: "Yes, with a photo prompt; keep yourself small in the scene for realism." },
      { q: "Can I print these large?", a: "Generate at the biggest size and upscale for print." },
    ],
  },
  "cityscape-street": {
    intro: [
      "City and street prompts capture urban life: skylines, alleyways, markets, trams, cafés and crowds. The most convincing ones include small human details, such as someone crossing, a delivery bike, washing hung between windows, because real streets are full of life.",
      "Decide the mood through time and weather: a rainy evening in Tokyo, a hazy summer morning in Lisbon, a snowy night in New York.",
    ],
    ingredients: [
      { t: "City character", d: "A type of city or a real place, plus its architecture." },
      { t: "Street life", d: "People, vehicles, shopfronts, signs." },
      { t: "Time and weather", d: "Rain, fog, snow, bright noon, neon night." },
      { t: "Viewpoint", d: "Street level, rooftop, high aerial, through a café window." },
      { t: "Style", d: "Street photography, cinematic, illustrated travel poster." },
    ],
    example: {
      prompt: "A street photograph in a hilly old European city on a hazy summer morning: a yellow tram climbing a narrow cobbled street between pastel buildings with iron balconies and laundry hanging above, a woman with shopping bags stepping onto the pavement. Soft golden light, 35 mm lens at street level, candid feel.",
      notes: [
        { t: "\"Yellow tram climbing\"", d: "One iconic moving element anchors the scene." },
        { t: "\"Laundry hanging above\"", d: "Lived-in details make it real." },
        { t: "\"A woman with shopping bags\"", d: "A human moment, not a posed figure." },
        { t: "\"35 mm… candid\"", d: "The classic street-photography look." },
      ],
    },
    models: "Seedream 4.5 is strong at dense, atmospheric cityscapes, and Nano Banana Pro and GPT Image 2 handle people and readable signs better. Keep shop signs short or ask for blurred, unreadable text.",
    mistakes: [
      "Empty streets that look like a 3D model.",
      "Generic \"a big city\" with no character.",
      "Long sign text that comes out as gibberish.",
      "Warped buildings from extreme wide angles.",
    ],
    faq: [
      { q: "Can I generate a real city?", a: "Yes, by name, but details may not be accurate; describe the look you want too." },
      { q: "How do I make a street scene feel alive?", a: "Add people doing ordinary things, vehicles and small details like laundry or café tables." },
      { q: "What about signs in other languages?", a: "Short words usually work; long text often doesn't." },
      { q: "What lens suits street photography?", a: "35 mm or 50 mm at eye level, for a natural, documentary feel." },
    ],
  },
  "diagram-chart": {
    intro: [
      "Diagram and chart prompts ask image models to draw structure: flowcharts, mind maps, timelines, labelled anatomy and simple charts. Image models are improving fast at this, but they draw rather than calculate, so they're best for explaining ideas, not for presenting exact data.",
      "For real numbers, make the chart in a spreadsheet and use AI for the illustrated version or the surrounding visual.",
    ],
    ingredients: [
      { t: "Diagram type", d: "Flowchart, mind map, timeline, cycle, labelled cutaway." },
      { t: "Nodes and labels", d: "Each box or label written out in order, briefly." },
      { t: "Connections", d: "Arrows, branches or a loop, and their direction." },
      { t: "Visual style", d: "Whiteboard sketch, flat corporate, hand-drawn notebook, blueprint." },
      { t: "Legibility", d: "Plain background, high contrast, large text." },
    ],
    example: {
      prompt: "A clean flowchart on a white background in flat corporate style: five rounded boxes connected by arrows from top to bottom, labelled \"Idea\", \"Sketch\", \"Prototype\", \"Test\", \"Launch\". A curved arrow loops from \"Test\" back to \"Sketch\". Navy boxes with white text, one accent colour for the loop arrow, large legible font.",
      notes: [
        { t: "\"Five rounded boxes\"", d: "A fixed count matches the labels." },
        { t: "\"Labelled… in order\"", d: "One word per node renders reliably." },
        { t: "\"Curved arrow loops back\"", d: "Describes the logic, not just the boxes." },
        { t: "\"Large legible font\"", d: "Diagrams must read at a glance." },
      ],
    },
    models: "GPT Image 2 is the most reliable for structured diagrams with correct labels, with Nano Banana Pro close behind. Always check arrows and spelling; for data charts with real numbers, use a spreadsheet tool.",
    mistakes: [
      "Expecting accurate bar heights or pie slices from real data.",
      "Long labels that come out misspelled.",
      "Unclear arrow directions.",
      "Decorative backgrounds that hurt legibility.",
    ],
    faq: [
      { q: "Can AI make an accurate chart from my data?", a: "Not reliably; image models draw rather than compute. Use a spreadsheet for the chart itself." },
      { q: "What diagrams work best?", a: "Flowcharts, mind maps, timelines and simple labelled illustrations." },
      { q: "How do I keep labels correct?", a: "Keep them to one or two words and proofread the result." },
      { q: "Can I edit a diagram afterwards?", a: "Yes. Fix a word with the AI photo editor or redraw the final version in a design tool." },
    ],
  },
  "text-typography": {
    intro: [
      "Typography prompts put words at the centre of the image: quotes, signs, logo concepts, lettering art and 3D text. Modern models can spell short phrases well, especially when the text is in quotes and the style is described like a designer would.",
      "Treat the words as the subject. Say the exact text, the letter style, the material if it's 3D, and how it sits in the scene.",
    ],
    ingredients: [
      { t: "Exact words", d: "In quotes, ideally under about eight words." },
      { t: "Letterform", d: "Bold condensed sans, elegant serif, brush script, neon tube, chrome 3D." },
      { t: "Material and effect", d: "Made of flowers, carved in stone, embroidered, glowing." },
      { t: "Layout", d: "Centred, stacked on two lines, curved around an object." },
      { t: "Background", d: "Plain and contrasting, so the letters stand out." },
    ],
    example: {
      prompt: "The word \"BLOOM\" in large chunky 3D letters made entirely of fresh pink and white peonies and green leaves, centred on a soft sage-green background. Letters standing upright with a gentle shadow beneath, soft studio light, crisp petal detail, every letter clearly readable.",
      notes: [
        { t: "\"BLOOM\"", d: "One short, capitalised word gives the cleanest result." },
        { t: "\"Made entirely of peonies\"", d: "The material is the creative idea." },
        { t: "\"Centred on soft sage-green\"", d: "Contrast keeps it legible." },
        { t: "\"Every letter clearly readable\"", d: "Reminds the model that legibility matters." },
      ],
    },
    models: "GPT Image 2 and Nano Banana Pro are the strongest in this library for accurate lettering. Seedream 4.5 also renders short text well. Check spelling letter by letter, and keep text short.",
    mistakes: [
      "Long sentences, which almost always contain errors.",
      "Busy backgrounds behind thin letters.",
      "Not quoting the text, so the model paraphrases it.",
      "Complex scripts and diacritics without checking them.",
    ],
    faq: [
      { q: "Can AI spell correctly?", a: "Short phrases, usually yes; longer text often has mistakes. Always proofread." },
      { q: "Can I make a logo?", a: "You can make logo concepts; a designer should redraw the final logo as a vector." },
      { q: "How do I get 3D letters?", a: "Describe the material and lighting: chrome, balloon, neon, stone, with a shadow." },
      { q: "What about non-English text?", a: "Short words often work; check accents and characters carefully." },
    ],
  },
  "abstract-background": {
    intro: [
      "Abstract and background prompts create images with no literal subject: gradients, textures, flowing shapes, light and pattern. They're the workhorses of design, used for wallpapers, slide backgrounds, website heroes and social posts with text on top.",
      "Because there's no subject, the prompt should be precise about colour, shape language, texture and how much calm space you need for text.",
    ],
    ingredients: [
      { t: "Shape language", d: "Flowing liquid curves, geometric grids, soft blobs, glass shards, paper layers." },
      { t: "Palette", d: "Two to four colours, and how they blend." },
      { t: "Texture and material", d: "Grain, frosted glass, silk, iridescent foil, paper." },
      { t: "Light", d: "Soft glow, studio highlights, light leaks." },
      { t: "Calm area", d: "Where text will go, kept smooth and low-contrast." },
    ],
    example: {
      prompt: "An abstract 16:9 background of soft, flowing silk-like waves in deep indigo, violet and a touch of warm peach, with subtle light highlights along the folds and fine film grain. Smooth, darker calm area on the left third for text, no hard edges, no objects, elegant and premium.",
      notes: [
        { t: "\"Silk-like waves\"", d: "A material gives abstract shapes believable light." },
        { t: "\"Indigo, violet… warm peach\"", d: "A cool palette with one warm accent." },
        { t: "\"Calm area on the left third\"", d: "Plans space for a headline." },
        { t: "\"No hard edges, no objects\"", d: "Keeps it a background, not a scene." },
      ],
    },
    models: "Every model here makes beautiful abstracts. Seedream 4.5 produces very high-resolution textures, useful for large screens and print. Generate at the exact ratio you need, such as 16:9 for slides or 9:16 for phone wallpapers.",
    mistakes: [
      "No calm space, so text on top becomes unreadable.",
      "Too many colours that clash.",
      "Accidental objects or faces appearing in the pattern.",
      "Low resolution for big displays.",
    ],
    faq: [
      { q: "What are abstract backgrounds used for?", a: "Wallpapers, slides, website banners and social posts with text over them." },
      { q: "How do I leave room for text?", a: "Ask for a smooth, low-contrast area in a specific part of the frame." },
      { q: "What resolution do I need?", a: "At least the size of the screen or slide; upscale for 4K or print." },
      { q: "Can I match my brand colours?", a: "Yes; name the colours, or give their hex codes alongside colour names." },
    ],
  },
};
