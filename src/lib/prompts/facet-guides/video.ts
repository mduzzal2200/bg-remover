import type { FacetGuide } from "./types";

/** Video categories. Video prompts are copied into the model's own app; PixelShine doesn't generate video. */
export const VIDEO_FACETS: Record<string, FacetGuide> = {
  "cinematic-scene-showcase": {
    intro: [
      "Showcase prompts are built to show off what a video model can do: a few seconds of sweeping camera movement, rich light and a single spectacular moment. They're the clips people post to say \"look what AI video can do now\", and the same techniques make strong openers for your own projects.",
      "The difference from an image prompt is time. You're describing what moves, how the camera moves, and how the shot changes from the first second to the last.",
    ],
    ingredients: [
      { t: "Opening frame", d: "Where the shot starts: \"wide shot of a misty valley at dawn\"." },
      { t: "Main motion", d: "What happens: a hot-air balloon rises, waves crash, a crowd parts." },
      { t: "Camera move", d: "Slow push-in, aerial reveal, orbit, tracking shot, crane up." },
      { t: "Light and atmosphere", d: "Golden hour, volumetric fog, rain, sparks, dust in sunbeams." },
      { t: "Ending", d: "Where the camera lands, so the clip feels finished." },
    ],
    example: {
      prompt: "A slow aerial drone shot rising over a misty pine forest at dawn, revealing a turquoise mountain lake and snowy peaks as the sun breaks through. Golden light spreads across the water, mist drifts between the trees, a lone canoe glides across the lake. The camera keeps rising and ends on a wide view of the whole valley. Cinematic, 16:9, natural colour.",
      notes: [
        { t: "\"Slow aerial drone shot rising\"", d: "One clear camera move for the whole clip." },
        { t: "\"Revealing… as the sun breaks through\"", d: "A change over time is what makes video interesting." },
        { t: "\"A lone canoe glides\"", d: "Small motion gives scale and life." },
        { t: "\"Ends on a wide view\"", d: "A planned last frame." },
      ],
    },
    models: "In this library, the Seedance 2.0 prompts tend to spell out a clip second by second, which suits showcase shots with a planned camera move, while the Grok Imagine prompts are shorter and more playful. PixelShine doesn't generate video, so copy the prompt into the model's own app, and keep a showcase to one shot of about five to ten seconds.",
    mistakes: [
      "Several camera moves in one short clip.",
      "No motion at all: an image prompt pasted into a video model.",
      "Too many events for a few seconds.",
      "No ending, so the clip just stops.",
    ],
    faq: [
      { q: "How long should a showcase clip be?", a: "Five to ten seconds of one continuous shot is the sweet spot for most models." },
      { q: "Can I generate videos on PixelShine?", a: "Not yet. Copy the prompt into a video model's own app or website." },
      { q: "What camera moves work best?", a: "Slow, simple moves: push-in, pull-back, aerial rise, orbit and tracking shots." },
      { q: "Can I start from an image?", a: "Many video models accept a starting image; create it first, then describe the motion." },
    ],
  },
  "short-film": {
    intro: [
      "Short-film prompts tell a tiny story: a beginning, a turn and an ending, sometimes across several shots. Models that support multiple shots in one generation can cut between angles; with others, you generate one shot at a time and edit them together.",
      "Write like a screenwriter: shot by shot, in the present tense, with the same character description every time so the person stays recognisable.",
    ],
    ingredients: [
      { t: "Character card", d: "A fixed description of who's in the film." },
      { t: "Shot list", d: "\"Shot 1… Shot 2… Shot 3\", each with framing and action." },
      { t: "Emotion arc", d: "From curious to surprised, from tense to relieved." },
      { t: "Setting and time", d: "One location keeps continuity simpler." },
      { t: "Sound", d: "Dialogue lines, ambient sound or music, if the model generates audio." },
    ],
    example: {
      prompt: "A three-shot short film. Character: an elderly man in a grey cardigan and round glasses. Shot 1: medium shot, he sits alone at a kitchen table, rain on the window, and sighs. Shot 2: close-up, a small envelope slides under the door; he looks up. Shot 3: he opens a child's drawing of the two of them, and slowly smiles. Warm, soft light, quiet piano.",
      notes: [
        { t: "\"Character: …\"", d: "One fixed description keeps him the same in every shot." },
        { t: "\"Shot 1… Shot 3\"", d: "A clear structure the model can follow." },
        { t: "\"Sighs… looks up… smiles\"", d: "An emotional arc in three beats." },
        { t: "\"Quiet piano\"", d: "Sound direction for models that generate audio." },
      ],
    },
    models: "The Seedance 2.0 prompts collected here are written as timelines and shot lists, the closest format to a short film, so they're a good model to study. Whichever video model you use, generate each shot with the same character card, ideally with a reference image, then edit the shots together.",
    mistakes: [
      "A whole plot in one prompt; keep it to a few beats.",
      "Changing the character's description between shots.",
      "Long dialogue that lip-syncs badly.",
      "Too many locations for a short clip.",
    ],
    faq: [
      { q: "Can AI make a whole short film?", a: "It can make the shots; you still plan the story and edit the shots together." },
      { q: "How do I keep the same actor in every shot?", a: "Use the same character description, and a reference image if the model accepts one." },
      { q: "Can characters speak?", a: "Some models generate dialogue; keep lines short and clear." },
      { q: "How many shots per prompt?", a: "Two to four is the most reliable in one generation." },
    ],
  },
  "cinematic-realistic": {
    intro: [
      "Cinematic-realistic is the default look most people want from video models: footage that could pass for a real film shot on a cinema camera. Realism comes from physics as much as looks: believable motion, weight, cloth and hair that move naturally, and light that behaves like real light.",
      "Describe the lens and camera support too (handheld, Steadicam, locked-off tripod), because the way a camera moves is a big part of what reads as real.",
    ],
    ingredients: [
      { t: "Subject and action", d: "Natural, physical movement with a clear purpose." },
      { t: "Camera support", d: "Handheld, gimbal, dolly, tripod, drone." },
      { t: "Lens", d: "Wide for space, 50 mm natural, telephoto for compression." },
      { t: "Light", d: "Practical lamps, window light, overcast daylight, streetlights." },
      { t: "Texture", d: "Film grain, shallow focus, natural colour grade." },
    ],
    example: {
      prompt: "Handheld 35 mm shot following a young chef from behind as she carries a steaming pot through a busy restaurant kitchen, weaving past cooks, flames flaring on the stove. Warm tungsten light, steam catching the light, shallow depth of field, subtle film grain, realistic motion and sound of clattering pans.",
      notes: [
        { t: "\"Handheld 35 mm… following\"", d: "Camera support and lens define the feel." },
        { t: "\"Weaving past cooks\"", d: "Physical movement through a real space." },
        { t: "\"Steam catching the light\"", d: "Small physical effects sell realism." },
        { t: "\"Clattering pans\"", d: "Ambient sound for models that generate audio." },
      ],
    },
    models: "Most realistic clips in this collection were written for Seedance 2.0, and they describe camera support, lens and sound in detail; borrow that structure for any model. Check hands, faces and walking motion closely in the result, since that's where realism breaks first.",
    mistakes: [
      "Fast, complex choreography that breaks physics.",
      "Glossy, overlit scenes that look like a game.",
      "Missing camera information.",
      "Close-ups of hands doing intricate tasks.",
    ],
    faq: [
      { q: "How do I make AI video look real?", a: "Use natural light, simple physical actions, a described camera and subtle film grain." },
      { q: "Which details give it away?", a: "Hands, walking gait, text on signs and objects that change shape." },
      { q: "Can I use real places?", a: "You can describe them; exact landmarks may not be accurate." },
      { q: "Is the footage usable commercially?", a: "Check the terms of the video model you use." },
    ],
  },
  "fantasy-magical": {
    intro: [
      "Fantasy video prompts turn on the magic itself: how a spell glows, how a creature moves, how light pours from a portal. Motion is where fantasy comes alive, so describe the effect in time: it starts small, grows, then bursts or fades.",
      "Ground the magic in a believable world, with real textures, weather and physics around it, and the fantastic parts feel more convincing.",
    ],
    ingredients: [
      { t: "World", d: "Enchanted forest, floating islands, ancient library, snowy kingdom." },
      { t: "Magic effect", d: "What it looks like and how it moves over time." },
      { t: "Character or creature", d: "Described clearly, with how it moves." },
      { t: "Camera", d: "Slow push-in for wonder, orbit for spectacle." },
      { t: "Palette and light", d: "Glowing teal and gold, moonlight, firelight." },
    ],
    example: {
      prompt: "In an ancient stone library at night, a young woman opens a heavy leather book; golden particles rise from the pages, swirl into the shape of a small glowing bird, and fly up between the shelves. Slow push-in on her astonished face, warm candlelight mixed with the bird's golden glow, dust floating in the air, 16:9.",
      notes: [
        { t: "\"Golden particles rise… swirl… fly\"", d: "Magic described as a process over time." },
        { t: "\"Ancient stone library\"", d: "A grounded, textured world." },
        { t: "\"Slow push-in on her astonished face\"", d: "The camera underlines the emotion." },
        { t: "\"Candlelight mixed with the bird's glow\"", d: "Two light sources make the effect feel real." },
      ],
    },
    models: "Fantasy prompts appear for both video models in this library: Seedance 2.0 entries tend to describe the effect step by step, while Grok Imagine entries go for playful spectacle. If your model accepts a starting image, create a fantasy still first so the world's look is fixed before the motion.",
    mistakes: [
      "Effects with no timing, so everything glows at once.",
      "Creatures with unclear anatomy, which morph as they move.",
      "Too many magical elements in one short shot.",
      "Flat light that makes the magic look pasted on.",
    ],
    faq: [
      { q: "How do I describe a magic effect?", a: "Say what it looks like, where it starts, how it grows and how it ends." },
      { q: "Can I make a fantasy creature move realistically?", a: "Base it on a real animal's movement and keep the anatomy simple." },
      { q: "What camera move suits fantasy?", a: "A slow push-in for wonder, or an orbit to show off a big effect." },
      { q: "Can I start from an AI image?", a: "Yes, if the video model accepts a starting image; it keeps the look consistent." },
    ],
  },
  "cyberpunk-sci-fi": {
    intro: [
      "Sci-fi video is about worlds in motion: flying traffic between towers, holograms flickering, rain running down neon glass. A strong prompt picks one place and one moving focal point, then layers atmosphere around it.",
      "Light carries the genre, and in video it can move too: passing headlights, flickering signs, scanning lasers. Describe how the light changes during the shot.",
    ],
    ingredients: [
      { t: "Setting", d: "Megacity street, space station corridor, desert outpost, orbital view." },
      { t: "Moving focal point", d: "A flying car, a courier on a bike, a drone, a ship docking." },
      { t: "Atmosphere", d: "Rain, steam, haze, sparks, holographic adverts." },
      { t: "Dynamic light", d: "Neon flicker, passing headlights, a scanning beam." },
      { t: "Camera", d: "Tracking alongside, low angle looking up, slow aerial pass." },
    ],
    example: {
      prompt: "Low-angle tracking shot following a courier on a glowing electric motorbike through a rain-soaked neon city at night, weaving between hovering traffic. Magenta and cyan signs flicker overhead, reflections stream across wet asphalt, a giant hologram of a koi fish swims between skyscrapers. Light haze, fast but smooth camera, 16:9.",
      notes: [
        { t: "\"Low-angle tracking shot following\"", d: "Energy and scale in one camera choice." },
        { t: "\"Weaving between hovering traffic\"", d: "A moving world, not a still backdrop." },
        { t: "\"Signs flicker… reflections stream\"", d: "Light that changes over time." },
        { t: "\"Hologram of a koi fish\"", d: "One memorable detail." },
      ],
    },
    models: "Sci-fi clips in this collection come from both video models; the most useful ones describe the camera path and how the light changes. Keep sign text out of the prompt, or ask for unreadable glyphs, whichever model you use.",
    mistakes: [
      "Static cityscapes with nothing moving.",
      "Too fast a camera, which smears the details.",
      "Readable text on signs that comes out as gibberish.",
      "Overloading every surface with neon.",
    ],
    faq: [
      { q: "What makes sci-fi video feel alive?", a: "Moving traffic, changing light and weather, plus one focal subject." },
      { q: "How fast should the camera move?", a: "Smooth and steady; very fast moves blur details in AI video." },
      { q: "Can I make a sci-fi intro for my channel?", a: "Yes; see the channel intro ideas and keep text for the edit." },
      { q: "Can I start from a sci-fi image?", a: "Yes, if your video model accepts images; it locks the look." },
    ],
  },
  "vintage-retro-film": {
    intro: [
      "Vintage video prompts imitate old footage: Super 8 home movies, 1970s 16 mm documentaries, VHS camcorder tapes, black-and-white newsreels. The format brings its own frame rate feel, colour, grain, gate weave and camera behaviour.",
      "Name the format and decade together, then describe the imperfections that make it authentic.",
    ],
    ingredients: [
      { t: "Format and era", d: "1960s Super 8, 1980s VHS camcorder, 1940s newsreel." },
      { t: "Content of the time", d: "Clothes, cars and places that fit the era." },
      { t: "Imperfections", d: "Grain, flicker, scratches, light leaks, tracking lines." },
      { t: "Camera behaviour", d: "Shaky handheld, quick zooms, auto-focus hunting." },
      { t: "Colour", d: "Faded warm tones, washed-out blues, black and white." },
    ],
    example: {
      prompt: "Super 8 home movie footage from the 1960s: a family having a picnic by a lake, children running toward the camera with a red kite, a father waving. Warm faded colours, heavy grain, slight flicker and gate weave, a light leak flaring at the edge, shaky handheld camera with a quick zoom in on the kite. 4:3 frame.",
      notes: [
        { t: "\"Super 8… 1960s\"", d: "Format plus decade." },
        { t: "\"Children running toward the camera\"", d: "Typical home-movie action." },
        { t: "\"Flicker and gate weave\"", d: "Real film-projection imperfections." },
        { t: "\"4:3 frame\"", d: "The right shape for the era." },
      ],
    },
    models: "Retro prompts work in any video model, because describing the format's imperfections matters more than the model. Keep clips short and simple, as old footage usually was.",
    mistakes: [
      "Modern widescreen framing for old formats.",
      "Modern objects like phones in the scene.",
      "Overdone scratches that hide the action.",
      "Smooth gimbal movement where shaky handheld fits.",
    ],
    faq: [
      { q: "What ratio was old film?", a: "Home movies and early TV were 4:3, close to square." },
      { q: "How do I get a VHS look?", a: "Ask for tracking lines, colour bleed, soft focus and a date stamp style overlay." },
      { q: "Can I make old-style footage of my family?", a: "Start from a family photo if the model accepts images, then add vintage motion." },
      { q: "What's gate weave?", a: "The slight side-to-side wobble of old film moving through a projector." },
    ],
  },
  "surreal-dreamlike": {
    intro: [
      "Surreal video plays with impossible physics: rooms that fill with clouds, staircases that loop, oceans in the sky. Video is the perfect medium for it, because the transformation itself, slow and seamless, is the point.",
      "The trick is to keep everything else calm and realistic, so the one impossible thing feels uncanny rather than chaotic.",
    ],
    ingredients: [
      { t: "Ordinary setting", d: "A bedroom, a train carriage, a quiet street." },
      { t: "One impossible change", d: "Gravity reverses, the floor becomes water, time slows." },
      { t: "Transformation over time", d: "How it starts and how far it goes." },
      { t: "Calm camera", d: "Slow drift or locked-off shot." },
      { t: "Soft palette", d: "Pastels, haze, gentle light." },
    ],
    example: {
      prompt: "A locked-off shot of a quiet pastel bedroom in soft morning light. Slowly, the floor turns into calm, clear ocean water, rising gently until the bed floats; small fish swim past the furniture while sheer curtains drift. Everything stays peaceful and silent, dreamy haze, 16:9.",
      notes: [
        { t: "\"Locked-off shot\"", d: "A still camera lets the impossible change take centre stage." },
        { t: "\"Slowly, the floor turns into… water\"", d: "One transformation, unfolding over time." },
        { t: "\"Small fish swim past the furniture\"", d: "Detail that makes the dream specific." },
        { t: "\"Peaceful and silent\"", d: "Calm mood makes it uncanny, not chaotic." },
      ],
    },
    models: "The surreal prompts in this library come from both video models and share one habit: a calm camera and a single slow transformation. Copy that structure into whichever model you use.",
    mistakes: [
      "Several impossible things at once.",
      "Fast cuts and camera moves that hide the transformation.",
      "Harsh, saturated colour that breaks the dreamy mood.",
      "No clear starting point, so nothing seems to change.",
    ],
    faq: [
      { q: "What makes a video surreal rather than random?", a: "One impossible change in an otherwise ordinary, calm scene." },
      { q: "How long should the transformation take?", a: "Most of the clip; slow changes feel more dreamlike." },
      { q: "What camera suits surreal clips?", a: "A locked-off shot or a very slow drift." },
      { q: "Can I loop a surreal clip?", a: "Ask for the last frame to match the first, then trim it in an editor." },
    ],
  },
  "person-character": {
    intro: [
      "Most video prompts have a person at their centre, and people are where AI video is judged most harshly: faces must stay the same from frame to frame, hands and walking must look natural, and expressions should change believably.",
      "Simple, readable actions work best: turning to look at the camera, laughing, walking toward us, reacting to something off screen.",
    ],
    ingredients: [
      { t: "Character", d: "Age, look, clothing, written the same way every time." },
      { t: "One clear action", d: "Turns, smiles, walks, reaches, reacts." },
      { t: "Expression change", d: "From neutral to delighted, from focused to surprised." },
      { t: "Framing", d: "Close-up for emotion, medium shot for gesture, wide for movement." },
      { t: "Setting and light", d: "Simple background, soft directional light." },
    ],
    example: {
      prompt: "Medium close-up of a woman in her thirties with curly dark hair and a mustard-yellow jumper, sitting by a café window in soft afternoon light. She looks down at her phone, reads a message, then looks up and breaks into a wide, delighted smile. Gentle push-in, shallow depth of field, natural skin texture.",
      notes: [
        { t: "\"Curly dark hair… mustard-yellow jumper\"", d: "A repeatable character description." },
        { t: "\"Looks down… then looks up and smiles\"", d: "A simple action with an emotional turn." },
        { t: "\"Gentle push-in\"", d: "The camera supports the moment." },
        { t: "\"Natural skin texture\"", d: "Avoids plastic-looking faces." },
      ],
    },
    models: "Character prompts here mostly describe one simple action and an expression change, which is what keeps a face stable in any model. To animate a real person, use a photo of yourself or someone who has given permission, and a model that accepts a starting image.",
    mistakes: [
      "Complex hand actions close to the camera.",
      "Long walks across the frame that strain consistency.",
      "Changing outfits or hair between clips.",
      "Animating photos of people without their permission.",
    ],
    faq: [
      { q: "Can I animate my own photo?", a: "Yes, with video models that accept a starting image; keep the motion gentle." },
      { q: "How do I keep a character consistent?", a: "Use the same description each time and a reference image where possible." },
      { q: "Why do hands look strange?", a: "Hands are hard for video models; keep them still or out of close-up." },
      { q: "Can I make someone talk?", a: "Some models generate speech; keep it to a short line." },
    ],
  },
  "sports-action": {
    intro: [
      "Action prompts are the toughest test for video models, because fast bodies, balls and boards have to obey physics. The best results come from one clear athletic move, filmed the way sports broadcasters or action-cam users would: slow motion, tracking cameras and dramatic angles.",
      "Slow motion is a friend here: it gives the model more frames to get the movement right and looks spectacular.",
    ],
    ingredients: [
      { t: "Sport and move", d: "A skateboard kickflip, a basketball dunk, a surfer's bottom turn." },
      { t: "Speed", d: "Real time or slow motion, and when it switches." },
      { t: "Camera", d: "Low-angle tracking, overhead drone, action-cam POV." },
      { t: "Environment", d: "Stadium lights, sunset skate park, big wave." },
      { t: "Details", d: "Spray, chalk dust, sweat, crowd reaction." },
    ],
    example: {
      prompt: "Slow-motion low-angle shot of a skateboarder launching off a concrete ledge at a sunset skate park, the board flipping once beneath his feet before he lands cleanly and rolls away. Golden backlight, dust kicking up on landing, camera tracking alongside, then returning to real speed as he rolls out of frame.",
      notes: [
        { t: "\"Slow-motion low-angle\"", d: "Drama and more frames for the physics." },
        { t: "\"The board flipping once\"", d: "One clear move, not a whole routine." },
        { t: "\"Dust kicking up on landing\"", d: "A physical detail that sells the impact." },
        { t: "\"Returning to real speed\"", d: "A speed ramp, the classic action edit." },
      ],
    },
    models: "Action prompts in this collection lean on slow motion, tracking cameras and a single move. Expect to run any action prompt a few times, in any model; limbs and boards occasionally bend.",
    mistakes: [
      "A whole routine of tricks in five seconds.",
      "Real-time speed for very fast moves, which turns into blur.",
      "Balls and equipment with no physical description.",
      "Crowds and teammates all moving at once.",
    ],
    faq: [
      { q: "Why does fast action look wrong?", a: "Rapid motion is hard to render; use slow motion and one simple move." },
      { q: "What camera suits sport?", a: "Low-angle tracking, overhead drone or a point-of-view action camera." },
      { q: "Can I show a real athlete?", a: "Avoid real people without permission; describe an athlete instead." },
      { q: "Can I add a speed ramp?", a: "Yes: say when the clip goes slow and when it returns to normal speed." },
    ],
  },
  "nature-landscape": {
    intro: [
      "Nature clips are some of the most beautiful things video models make: rolling clouds, waterfalls, waves, aurora and drifting mist. Because nature moves slowly and predictably, these prompts are also among the most reliable.",
      "Think like a nature documentary: one location, one natural motion, and a slow, majestic camera move.",
    ],
    ingredients: [
      { t: "Location", d: "Fjord, rainforest canopy, desert dunes, alpine meadow." },
      { t: "Natural motion", d: "Clouds racing, waves rolling, grass swaying, snow falling." },
      { t: "Time and weather", d: "Sunrise, storm clearing, night sky, fog." },
      { t: "Camera", d: "Slow aerial glide, timelapse, gentle pan." },
      { t: "Sound", d: "Wind, water, birdsong, for models that make audio." },
    ],
    example: {
      prompt: "A timelapse of storm clouds clearing over a wide green valley with a winding river, shafts of sunlight sweeping across the fields as the shadows race away. Camera slowly glides forward at low altitude. Rich natural colour, crisp detail, sound of wind and distant birdsong.",
      notes: [
        { t: "\"Timelapse of storm clouds clearing\"", d: "Natural motion compressed into seconds." },
        { t: "\"Shafts of sunlight sweeping\"", d: "Moving light makes landscapes come alive." },
        { t: "\"Slowly glides forward at low altitude\"", d: "A calm, documentary camera." },
        { t: "\"Wind and distant birdsong\"", d: "Ambient sound adds immersion." },
      ],
    },
    models: "Nature clips are among the most reliable in any video model, and the prompts here describe the motion and camera simply. They make good backgrounds for presentations and websites; generate a few and keep the smoothest.",
    mistakes: [
      "Too many weather events at once.",
      "Fast camera moves that make nature feel frantic.",
      "Mismatched details, like snow falling on a summer meadow.",
      "Oversaturated colour.",
    ],
    faq: [
      { q: "Can I make a timelapse?", a: "Yes. Ask for a timelapse and describe what changes: clouds, light, stars." },
      { q: "What are nature clips good for?", a: "Website headers, presentation backgrounds, meditation videos and B-roll." },
      { q: "Can I loop a nature clip?", a: "Choose gentle motion like waves or grass, and trim it in an editor so the ends match." },
      { q: "How long should it be?", a: "Five to ten seconds per clip; join several for longer scenes." },
    ],
  },
  product: {
    intro: [
      "Product video prompts create the slick clips seen in ads: a bottle rotating on a plinth, a sneaker splashing through water, a phone rising out of mist. They work because they're short, controlled and focused on one object and one movement.",
      "If the product is real, start from a clean product photo so the shape and label stay accurate, then describe the motion around it.",
    ],
    ingredients: [
      { t: "Product", d: "Exact object, material and colour, or a reference image." },
      { t: "Hero motion", d: "Rotation, splash, reveal from shadow, levitation." },
      { t: "Set", d: "Plinth, studio backdrop, water surface, natural scene." },
      { t: "Lighting", d: "Rim light, moving highlight sweep, soft studio light." },
      { t: "Pacing", d: "Slow and premium, or punchy and fast." },
    ],
    example: {
      prompt: "A premium product video: a frosted glass perfume bottle with a gold cap slowly rotates on a black stone plinth, a soft beam of light sweeping across it to reveal the glass texture, droplets of water sliding down the side. Dark studio background, gentle mist at the base, slow and elegant, 9:16 vertical.",
      notes: [
        { t: "\"Slowly rotates on a black stone plinth\"", d: "The classic product hero motion." },
        { t: "\"Beam of light sweeping\"", d: "Moving light shows off materials." },
        { t: "\"Droplets of water sliding\"", d: "Tiny motion adds freshness and realism." },
        { t: "\"9:16 vertical\"", d: "Ready for Reels, TikTok and Shorts ads." },
      ],
    },
    models: "Product prompts in this library focus on one hero motion and moving light. If your model accepts a reference image, start from a clean product photo, and check labels and logos frame by frame, since small text often warps as the product turns.",
    mistakes: [
      "Fast spins that warp the product.",
      "Busy sets that compete with it.",
      "Rotating products with detailed labels, which distort.",
      "Describing the product loosely so it changes design mid-clip.",
    ],
    faq: [
      { q: "Can I animate my own product?", a: "Yes, with a video model that takes a product photo as the starting image." },
      { q: "What ratio for ads?", a: "9:16 for stories, Reels and TikTok; 1:1 or 4:5 for feeds; 16:9 for YouTube." },
      { q: "Why does the label warp?", a: "Text is hard to keep stable in motion; use a slow rotation or keep the label facing the camera." },
      { q: "How long should a product clip be?", a: "Five to eight seconds is plenty for a hero shot." },
    ],
  },
  "architecture-interior": {
    intro: [
      "Architecture and interior videos are walkthroughs and reveals: gliding through a living room, rising up a staircase, drifting past a building's façade at dusk. Smooth, slow camera movement is everything, because rooms should feel calm and spacious.",
      "Designers and estate agents use clips like these for concepts and mood; for a real property, real footage is still the honest choice.",
    ],
    ingredients: [
      { t: "Space and style", d: "Minimalist loft, coastal villa, Scandinavian kitchen." },
      { t: "Camera path", d: "Glide from doorway to window, slow orbit, rising crane." },
      { t: "Light change", d: "Sun moving across the floor, lamps turning on at dusk." },
      { t: "Living details", d: "Curtains moving, steam from a cup, leaves outside." },
      { t: "Straight lines", d: "Ask for stable verticals and no warping." },
    ],
    example: {
      prompt: "A smooth gimbal walkthrough of a bright Scandinavian kitchen, starting at the doorway and gliding slowly toward a large window with a garden view. Morning sun on pale wood worktops, steam rising from a coffee cup, white curtains moving slightly in the breeze. Straight vertical lines, calm and airy, 16:9.",
      notes: [
        { t: "\"Smooth gimbal walkthrough\"", d: "The right camera support for interiors." },
        { t: "\"From the doorway… toward a large window\"", d: "A clear camera path with a destination." },
        { t: "\"Steam… curtains moving\"", d: "Small living details stop it feeling like a render." },
        { t: "\"Straight vertical lines\"", d: "Prevents the warping rooms common in AI video." },
      ],
    },
    models: "The interior prompts collected here keep the camera slow and moving in one direction. Turning corners or passing through doorways is where geometry tends to bend, in any model.",
    mistakes: [
      "Fast or winding camera paths that warp the room.",
      "Empty, static rooms with no living details.",
      "Presenting AI walkthroughs as real property footage.",
      "Tilted verticals.",
    ],
    faq: [
      { q: "Can I use AI walkthroughs for property listings?", a: "Use them only as clearly labelled concepts; buyers need real footage of a real property." },
      { q: "What camera move suits interiors?", a: "A slow, straight glide or a gentle orbit." },
      { q: "Can I animate a photo of my room?", a: "Yes, with a model that accepts a starting image; keep the motion gentle." },
      { q: "How do I avoid warping?", a: "Slow movement, one direction and an instruction to keep lines straight." },
    ],
  },
  "animal-creature": {
    intro: [
      "Animal video prompts can be wildlife documentary, pet comedy or fantasy creatures. Real animals look best doing natural things (a cat stretching, a bird taking off, a whale breaching), because models have learned those movements from countless real clips.",
      "For pets, describe the breed and markings carefully, or start from a photo of the actual animal.",
    ],
    ingredients: [
      { t: "Animal", d: "Species or breed, colour and markings." },
      { t: "Natural behaviour", d: "Stretching, pouncing, grazing, flying, playing." },
      { t: "Habitat", d: "Savannah, living-room sofa, coral reef, snowy forest." },
      { t: "Camera", d: "Telephoto tracking, eye-level close-up, underwater." },
      { t: "Sound", d: "Natural calls, paws on snow, waves." },
    ],
    example: {
      prompt: "Telephoto documentary shot of a snow leopard walking slowly along a rocky ridge in falling snow, pausing to look back over its shoulder toward the camera, breath visible in the cold air. Soft overcast light, shallow depth of field, gentle tracking camera, sound of wind.",
      notes: [
        { t: "\"Telephoto documentary shot\"", d: "The language of wildlife film." },
        { t: "\"Walking slowly… pausing to look back\"", d: "Natural behaviour with a moment of connection." },
        { t: "\"Breath visible in the cold air\"", d: "A small detail that sells the scene." },
        { t: "\"Gentle tracking camera\"", d: "Steady and respectful, like real wildlife footage." },
      ],
    },
    models: "Animal prompts here favour slow, natural behaviour, which renders most convincingly. Fast running and several animals interacting are harder in any model; keep to one animal and one action.",
    mistakes: [
      "Fast chases that break the animal's anatomy.",
      "Several animals interacting in close-up.",
      "Human behaviour in a realistic wildlife shot.",
      "Vague breeds when you want a specific pet.",
    ],
    faq: [
      { q: "Can I animate a photo of my pet?", a: "Yes, with a model that accepts a starting image; gentle actions like blinking or turning work best." },
      { q: "Why do legs look odd?", a: "Running legs are hard to render; slow walks and still poses are more reliable." },
      { q: "Can I make fantasy creatures move?", a: "Yes; base their movement on a real animal to keep it believable." },
      { q: "What makes it feel like a documentary?", a: "Telephoto framing, natural light, steady tracking and real behaviour." },
    ],
  },
  vehicle: {
    intro: [
      "Vehicle video prompts give you car-advert energy: a sports car carving through mountain bends, a motorbike at night, a ship cutting through waves, a jet climbing through clouds. The motion and the camera chasing it are the whole story.",
      "Describe type, era and colour rather than brands, and keep the road or route simple so the vehicle stays stable.",
    ],
    ingredients: [
      { t: "Vehicle", d: "Type, era, colour and finish." },
      { t: "Route", d: "Coastal road, desert highway, city tunnel, open sea." },
      { t: "Camera", d: "Drone chase, low tracking, static roadside pass-by." },
      { t: "Light", d: "Golden hour, wet night streets, tunnel lights strobing." },
      { t: "Sound", d: "Engine note, tyres on wet road, waves." },
    ],
    example: {
      prompt: "Drone chase shot following a deep green vintage sports car along a winding coastal cliff road at golden hour, the sea glittering below. The camera stays behind and slightly above, then swings out to the side as the car takes a long curve. Warm low sun, long shadows, sound of the engine echoing off the cliffs, 16:9.",
      notes: [
        { t: "\"Drone chase… behind and slightly above\"", d: "A stable, classic camera position." },
        { t: "\"Swings out to the side\"", d: "One camera change, timed to the curve." },
        { t: "\"Deep green vintage sports car\"", d: "Type, era and colour instead of a brand." },
        { t: "\"Engine echoing off the cliffs\"", d: "Sound that adds place." },
      ],
    },
    models: "Vehicle prompts in this collection usually describe a chase camera and a simple route. Check wheels and reflections in every clip; they're the parts that most often flicker or deform.",
    mistakes: [
      "Brand and model names, which are unreliable.",
      "Too many turns and cuts in a short clip.",
      "Wheels that don't rotate with the speed.",
      "Busy traffic around the hero vehicle.",
    ],
    faq: [
      { q: "Can I make a car advert?", a: "You can make advert-style clips; use your own footage for real products and check the model's terms." },
      { q: "What camera suits vehicles?", a: "Drone chase, low tracking from the side, or a static roadside pass-by." },
      { q: "Why do wheels look wrong?", a: "Spinning wheels are hard to render; slower speeds and side angles help." },
      { q: "Can I add engine sound?", a: "If the model generates audio, describe the sound you want." },
    ],
  },
};
