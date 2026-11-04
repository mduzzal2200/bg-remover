import type { FacetExtras } from "./types";

export const VIDEO_EXTRAS: Record<string, FacetExtras> = {
  "cinematic-scene-showcase": {
    audiences: [
      { t: "Video editors", d: "Spectacular openers and transitions for longer edits." },
      { t: "Brands", d: "Atmospheric clips for launch videos and websites." },
      { t: "Creators", d: "Eye-catching shorts that show off AI video." },
      { t: "Presenters", d: "Moving backgrounds for talks and keynotes." },
    ],
    template: "A [camera move] [shot size] of [setting] at [time], [main motion]. [Light and atmosphere]. The camera [ending]. Cinematic, [ratio], [colour].",
    variations: [
      { t: "Swap the drone rise for an orbit", d: "Circles the subject for a heroic reveal." },
      { t: "Night version", d: "Stars, moonlight and glowing windows instead of sunrise." },
      { t: "Vertical 9:16", d: "The same showcase as a Reel or Short." },
      { t: "Add a subject", d: "A rider on horseback crossing the valley gives scale and story." },
    ],
    faq: [
      { q: "Can I extend a clip?", a: "Some models can continue a clip from its last frame; otherwise generate a second shot and edit them together." },
      { q: "What frame rate do these clips use?", a: "It depends on the model; most produce smooth 24 or 30 frames per second footage." },
    ],
  },
  "short-film": {
    audiences: [
      { t: "Aspiring filmmakers", d: "Proof-of-concept scenes before a real shoot." },
      { t: "Writers", d: "Short visual pitches for a story idea." },
      { t: "Social storytellers", d: "Micro-stories for TikTok, Reels and Shorts." },
      { t: "Teachers", d: "Short scenes for media and storytelling lessons." },
    ],
    template: "A [number]-shot short film. Character: [fixed description]. Shot 1: [framing], [action]. Shot 2: [framing], [action]. Shot 3: [framing], [ending]. [Light], [sound or music].",
    variations: [
      { t: "Change the genre", d: "The same three beats as a thriller: cold light and a tense score." },
      { t: "Silent film", d: "Black and white, title cards and piano music." },
      { t: "One continuous shot", d: "The camera follows him through all three beats without cuts." },
      { t: "Add a second character", d: "Introduce the grandchild in the final shot." },
    ],
    faq: [
      { q: "How do I add music?", a: "Ask for it if the model makes audio, or add licensed music in your editor." },
      { q: "Can I enter AI films in competitions?", a: "Many festivals now have AI categories; read each one's rules first." },
      { q: "How should I end a short film?", a: "On a clear emotional beat, a reaction or a reveal, rather than mid-action." },
    ],
  },
  "cinematic-realistic": {
    audiences: [
      { t: "Content creators", d: "B-roll that's hard or expensive to film." },
      { t: "Small businesses", d: "Realistic scene clips for adverts and websites." },
      { t: "Educators", d: "Illustrative footage for lessons." },
      { t: "Pitch makers", d: "Mood reels for film and ad pitches." },
    ],
    template: "[Camera support] [lens] shot of [subject] [physical action] in [real setting]. [Practical light], [atmosphere], [depth of field], [grain], realistic motion and [ambient sound].",
    variations: [
      { t: "Locked-off tripod", d: "A calmer, observational feel." },
      { t: "Daylight exterior", d: "Swap the kitchen for a busy outdoor market." },
      { t: "Slow motion", d: "Steam and flames become graceful at half speed." },
      { t: "Documentary interview framing", d: "A seated subject, off-centre, soft window light." },
    ],
    faq: [
      { q: "Can I mix AI clips with real footage?", a: "Yes; match the colour grade and grain so they cut together smoothly." },
      { q: "Should I label AI footage?", a: "Many platforms ask you to disclose realistic AI video; follow their rules." },
      { q: "What lens should I describe?", a: "A 35 mm or 50 mm look feels natural; telephoto compresses backgrounds, wide lenses exaggerate space." },
      { q: "How do I make light look real?", a: "Name a source in the scene, such as a window, a lamp or streetlights, and say where it falls." },
      { q: "Can I match a real camera's look?", a: "Describe its qualities, such as grain, colour and depth of field, rather than the brand." },
    ],
  },
  "fantasy-magical": {
    audiences: [
      { t: "Authors", d: "Book trailers and teasers for fantasy novels." },
      { t: "Game makers", d: "Spell and creature concepts in motion." },
      { t: "Party planners", d: "Magical clips for themed events and invitations." },
      { t: "Creators", d: "Enchanting shorts that stop the scroll." },
    ],
    template: "In [fantasy setting], [character] [action]; [magic effect: how it starts, grows and ends]. [Camera move], [light sources], [atmosphere], [ratio].",
    variations: [
      { t: "Swap the bird for a dragon", d: "Bigger spectacle; keep it small and close to the camera." },
      { t: "Winter forest", d: "Snowflakes freezing in mid-air around a spell." },
      { t: "Potion brewing", d: "Glowing liquid swirling in a cauldron." },
      { t: "Portal opening", d: "A ring of light expanding to reveal another world." },
    ],
    faq: [
      { q: "Can I make a book trailer?", a: "Yes: generate a few short magical shots and add the title in an editor." },
      { q: "How long should a magic effect last?", a: "Three to six seconds is enough for a clear start, peak and finish." },
      { q: "What colours suit magic effects?", a: "Warm gold for gentle magic, cool blue and violet for mysterious spells, green for nature magic." },
    ],
  },
  "cyberpunk-sci-fi": {
    audiences: [
      { t: "Electronic musicians", d: "Visualisers and loops for tracks." },
      { t: "Game studios", d: "Atmosphere tests for sci-fi worlds." },
      { t: "Streamers", d: "Animated backgrounds and intros." },
      { t: "Writers", d: "Teasers for sci-fi stories." },
    ],
    template: "[Camera move] [angle] of [subject] moving through [sci-fi setting] at [time], [moving traffic or crowds]. [Dynamic light], [atmosphere], [memorable detail], [ratio].",
    variations: [
      { t: "Space dock", d: "A cargo ship docking slowly at an orbital station." },
      { t: "Rooftop view", d: "A slow pan across the skyline as flying cars pass." },
      { t: "Hologram close-up", d: "A character's face lit by a flickering holographic screen." },
      { t: "Synthwave sunset", d: "A retro grid road toward a huge pink sun." },
    ],
    faq: [
      { q: "Can I make a looping visualiser?", a: "Choose steady motion like a slow pan or drifting traffic, then trim and loop it in an editor." },
      { q: "How do I keep the city consistent?", a: "Start from a still image of the city if the model accepts images." },
      { q: "How do I make a sci-fi character clip?", a: "Describe one character with a signature piece of tech, a simple action and a neon-lit background." },
      { q: "Can I make a sci-fi trailer?", a: "Generate a few short shots in one palette and edit them with titles and music." },
    ],
  },
  "vintage-retro-film": {
    audiences: [
      { t: "Music video makers", d: "Nostalgic footage for songs." },
      { t: "Wedding videographers", d: "Super 8-style moments mixed into modern films." },
      { t: "Brands", d: "Throwback ads with an authentic period feel." },
      { t: "Families", d: "Imagined home movies for anniversaries and reunions." },
    ],
    template: "[Format] footage from the [decade]: [scene and action] with [period details]. [Colour], [grain and flicker], [light leaks or tracking lines], [camera behaviour]. [Ratio].",
    variations: [
      { t: "1980s VHS", d: "Camcorder zooms, tracking lines and a blinking REC look." },
      { t: "1920s silent film", d: "Black and white, sped-up motion and intertitles." },
      { t: "1970s documentary", d: "16 mm, natural light and a slow zoom." },
      { t: "1990s skate video", d: "Fisheye lens and handheld chase." },
    ],
    faq: [
      { q: "What's Super 8?", a: "A home-movie film format from the 1960s, with warm colours, heavy grain and a nearly square frame." },
      { q: "Can I add old-fashioned sound?", a: "Ask for projector clicks or tape hiss if your model makes audio." },
      { q: "Can I make a fake old home video of my family?", a: "Yes, as a playful keepsake; start from a family photo if your model accepts images, and label it as made with AI." },
      { q: "What music suits retro footage?", a: "Period-style music added in an editor, at low volume, sells the look." },
    ],
  },
  "surreal-dreamlike": {
    audiences: [
      { t: "Artists", d: "Short art pieces and exhibition loops." },
      { t: "Musicians", d: "Dreamy visuals for ambient and indie tracks." },
      { t: "Wellness apps", d: "Calm, otherworldly relaxation clips." },
      { t: "Creators", d: "Strange, shareable shorts." },
    ],
    template: "A [camera] shot of [ordinary setting] in [light]. Slowly, [one impossible change], [how far it goes]; [small details]. [Mood], [palette], [ratio].",
    variations: [
      { t: "Clouds indoors", d: "Soft clouds drift through a living room." },
      { t: "Floating objects", d: "Teacups and books rise gently into the air." },
      { t: "Endless staircase", d: "A slow climb up stairs that loop forever." },
      { t: "Sky ocean", d: "Whales swimming slowly through a sunset sky." },
    ],
    faq: [
      { q: "Can I make a surreal music video?", a: "Yes: generate several short surreal shots in one palette and cut them to the beat." },
      { q: "Why does my scene become chaotic?", a: "Too many changes; keep one impossible event and a calm camera." },
      { q: "Can surreal clips look realistic?", a: "Yes, and they're often more striking that way: realistic light and textures with one impossible change." },
      { q: "What colours suit dreamlike videos?", a: "Soft pastels, hazy light and gentle contrast; harsh colours break the spell." },
      { q: "Can I make a surreal clip from my photo?", a: "If your model accepts a starting image, use the photo as the calm first frame and describe the change." },
    ],
  },
  "person-character": {
    audiences: [
      { t: "Marketers", d: "Reaction and lifestyle clips for ads." },
      { t: "Storytellers", d: "Character moments for short films." },
      { t: "Families", d: "Gently animated portraits, with everyone's permission." },
      { t: "Educators", d: "Presenter-style clips for lessons." },
    ],
    template: "[Framing] of [character description] [location and light]. [Simple action], then [expression change]. [Camera move], [depth of field], natural skin texture.",
    variations: [
      { t: "Walking toward camera", d: "A confident mid-shot walk down a sunny street." },
      { t: "Over-the-shoulder", d: "Watching what they're looking at." },
      { t: "Slow motion laugh", d: "Hair moving, eyes creasing, pure joy." },
      { t: "Profile turn", d: "Starts in profile and turns to face the camera." },
    ],
    faq: [
      { q: "Can I animate an old family photo?", a: "Some models can bring a portrait gently to life; keep motion subtle and respectful." },
      { q: "How long should a character clip be?", a: "Three to eight seconds keeps the face consistent." },
      { q: "What's the easiest action to animate?", a: "A head turn, a smile or a slow walk toward the camera." },
      { q: "Can I make a character look at the camera?", a: "Yes; say when they look up or turn, so it happens as a moment in the clip." },
    ],
  },
  "sports-action": {
    audiences: [
      { t: "Sports brands", d: "Concept ads and social teasers." },
      { t: "Coaches", d: "Illustrative clips of techniques (with real footage for coaching)." },
      { t: "Fans", d: "Hype edits and celebrations." },
      { t: "Gamers", d: "Trailer-style action moments." },
    ],
    template: "[Speed] [angle] shot of [athlete] [one move] at [venue] at [time]. [Physical details], [camera movement], [speed ramp].",
    variations: [
      { t: "Surfing", d: "A surfer carving a bottom turn, spray arcing in slow motion." },
      { t: "Basketball", d: "A dunk from under the rim at night under arena lights." },
      { t: "Running", d: "A sprinter's start, tracked from the side." },
      { t: "Snowboarding", d: "A jump against blue sky, powder trailing." },
    ],
    faq: [
      { q: "What's a speed ramp?", a: "A change from real speed to slow motion and back within one shot." },
      { q: "Can I show a team sport?", a: "Small groups work; big crowds of players often get messy." },
      { q: "Can I make a highlight reel?", a: "Generate several single-move clips and cut them together with music in an editor." },
      { q: "How do I show power in a move?", a: "Low angles, slow motion and physical detail like spray, dust or sweat." },
      { q: "What frame size suits sports clips?", a: "16:9 for YouTube and highlight reels; 9:16 if the clip is for Reels, Shorts or TikTok." },
    ],
  },
  "nature-landscape": {
    audiences: [
      { t: "Meditation and sleep apps", d: "Calm, looping nature scenes." },
      { t: "Travel creators", d: "Atmospheric openers and transitions." },
      { t: "Presenters", d: "Quiet moving backgrounds behind text." },
      { t: "Documentary makers", d: "Mood shots and scene-setters." },
    ],
    template: "A [timelapse or real-time] of [natural motion] over [location] at [time and weather], [moving light]. [Camera move], [colour], [ambient sound].",
    variations: [
      { t: "Aurora", d: "Green ribbons of light dancing over a snowy lake." },
      { t: "Waterfall", d: "A slow push toward a waterfall in a rainforest." },
      { t: "Desert dunes", d: "Wind lifting sand off dune crests at sunset." },
      { t: "Underwater", d: "Sunbeams through a kelp forest." },
    ],
    faq: [
      { q: "Can I make a long relaxing video?", a: "Generate several clips and loop or join them; most models make short clips at a time." },
      { q: "Do I need sound?", a: "Natural sound adds a lot; add it in the model or later in an editor." },
      { q: "Can I make a nature video for meditation?", a: "Yes: choose slow, gentle motion like waves or drifting mist, and join several clips into a longer loop." },
      { q: "What time of day looks best?", a: "Golden hour and blue hour give soft, colourful light; harsh noon light looks flat." },
      { q: "Can I add music?", a: "Add calm, licensed music in your editor if the model's own sound isn't what you want." },
    ],
  },
  product: {
    audiences: [
      { t: "E-commerce brands", d: "Short product loops for listings and ads." },
      { t: "Startups", d: "Launch teasers before a professional shoot." },
      { t: "Social media managers", d: "Scroll-stopping product reels." },
      { t: "Designers", d: "Concept animations of new products." },
    ],
    template: "A [style] product video: [product with material and colour] [hero motion] on [set], [moving light], [small detail motion]. [Background], [pace], [ratio].",
    variations: [
      { t: "Splash", d: "The product drops into water in slow motion." },
      { t: "Unboxing", d: "Lid lifts and soft light spills out." },
      { t: "Ingredients swirl", d: "Fruit and leaves orbit a skincare jar." },
      { t: "Lifestyle", d: "A hand picks up the product on a sunny kitchen counter." },
    ],
    faq: [
      { q: "Can AI product videos replace a shoot?", a: "For concepts and simple loops, often; for accurate details and labels, real footage is safer." },
      { q: "How do I keep colours accurate?", a: "Start from a true-colour product photo and check the clip against the real item." },
      { q: "What's a good first product video?", a: "A slow rotation on a plinth with one sweeping light is simple, reliable and looks premium." },
      { q: "Can I show the product being used?", a: "Yes, but keep hands simple and slow; close-up hand actions are hard for video models." },
      { q: "Should the background move?", a: "Keep it mostly still so the product stays the focus; small motion like mist or water is enough." },
    ],
  },
  "architecture-interior": {
    audiences: [
      { t: "Interior designers", d: "Animated concept boards for clients." },
      { t: "Architects", d: "Mood clips of a design's atmosphere." },
      { t: "Hotels and cafés", d: "Inviting ambience clips for social media." },
      { t: "Homeowners", d: "Visualising a renovation idea in motion." },
    ],
    template: "A smooth [gimbal/drone] [walkthrough/orbit] of a [style] [space], [camera path]. [Light and time], [living details], straight vertical lines, [mood], [ratio].",
    variations: [
      { t: "Dusk exterior", d: "A slow drone orbit as the windows light up." },
      { t: "Sunlight timelapse", d: "Sun patches moving across the floor through the day." },
      { t: "Café ambience", d: "Steam, soft chatter and a barista in the background." },
      { t: "Bedroom morning", d: "Curtains drifting and soft light on linen." },
    ],
    faq: [
      { q: "Can I use AI walkthroughs for client presentations?", a: "Yes, labelled as concepts, alongside proper drawings and plans." },
      { q: "Why do doorways bend?", a: "Passing through openings is hard for video models; keep the camera within one room." },
      { q: "Can I show a room changing style?", a: "Yes: describe a slow transformation from one style to another while the camera stays still." },
      { q: "What's the ideal clip length?", a: "Six to ten seconds of slow movement is enough to feel the space." },
    ],
  },
  "animal-creature": {
    audiences: [
      { t: "Pet lovers", d: "Cute, gentle clips of pets doing everyday things." },
      { t: "Nature channels", d: "Documentary-style mood shots." },
      { t: "Children's creators", d: "Friendly animal scenes for stories." },
      { t: "Fantasy fans", d: "Creatures brought to life." },
    ],
    template: "[Camera style] shot of [species with markings] [natural behaviour] in [habitat] at [time and weather]. [Small detail], [light], [camera move], [sound].",
    variations: [
      { t: "Sleepy cat", d: "A cat stretching and yawning in a sunbeam." },
      { t: "Underwater", d: "A sea turtle gliding over a reef." },
      { t: "Birds in flight", d: "A heron taking off from misty water in slow motion." },
      { t: "Fantasy", d: "A small dragon curled on a pile of books, breathing slowly." },
    ],
    faq: [
      { q: "Can I make my pet talk?", a: "Some models can, but realistic pets look best doing natural things." },
      { q: "What's the most reliable animal action?", a: "Slow, natural movement such as walking, turning, stretching or blinking." },
      { q: "How do I make a cute pet video?", a: "Describe a small, natural action, like a puppy tilting its head, in warm light with the camera at its eye level." },
      { q: "Can animals interact with people?", a: "Simple moments work, such as a dog resting its head on a lap; complex play often goes wrong." },
      { q: "What about underwater animals?", a: "Slow gliding motion and sunbeams through water are very reliable." },
    ],
  },
  vehicle: {
    audiences: [
      { t: "Car enthusiasts", d: "Dream-car clips and edits." },
      { t: "Travel creators", d: "Road-trip openers and transitions." },
      { t: "Music videos", d: "Night-drive scenes for tracks." },
      { t: "Concept designers", d: "Future vehicles in motion." },
    ],
    template: "[Camera type] shot following a [era and type of vehicle] in [colour] along [route] at [time]. The camera [movement and change]. [Light], [atmosphere], [sound], [ratio].",
    variations: [
      { t: "Night tunnel", d: "Lights strobing across the bodywork." },
      { t: "Ship at sea", d: "A sailing ship cutting through waves at dawn." },
      { t: "Motorbike POV", d: "A rider's view down a winding mountain road." },
      { t: "Aircraft", d: "A small plane climbing through golden clouds." },
    ],
    faq: [
      { q: "How do I make a night drive look good?", a: "Wet roads, city lights reflecting on the car and a slow, steady camera." },
      { q: "Can I make an electric concept car?", a: "Yes; describe its shape, lights and materials like a design brief." },
      { q: "Can I make a video of my own car?", a: "If your video model accepts a starting image, use a clear photo of your car and describe a gentle move, such as a slow drive-by." },
      { q: "What's the best angle for a moving car?", a: "A low three-quarter angle from the front or side shows both speed and the car's shape." },
      { q: "How long should a driving clip be?", a: "Five to eight seconds of one continuous move is usually enough for a social post or an intro." },
    ],
  },
};
