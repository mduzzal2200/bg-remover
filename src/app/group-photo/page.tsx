import { seoJson, seoMeta } from "@/lib/seo/brand";
import { brandedTitle } from "@/lib/seo/title";
import { CREDIT_COST } from "@/lib/plans";
import type { Metadata } from "next";
import Link from "next/link";
import { TrialPill } from "@/app/_components/TrialOffer";
import GroupShowcase, { ExampleCard, type ShowcaseExample } from "./GroupShowcase";
import Icon, { type IconName } from "@/app/app/_components/Icon";
import { GROUP_SCENES, GROUP_POSES, GROUP_OUTFITS, GROUP_FRAMINGS, MAX_GROUP_PHOTOS, MIN_GROUP_PHOTOS, BEST_GROUP_SIZE } from "@/lib/group-photo";
import { ILLUSTRATED_EXAMPLES } from "@/lib/group-photo-examples";
import { loadGroupCreatives } from "@/lib/group-photo-creatives.server";

const BASE = "https://www.sjpt.io";
const URL = `${BASE}/group-photo`;
const OG_IMAGE = `${BASE}/group-photo/og.jpg`;

export const metadata: Metadata = seoMeta({
  title: { absolute: brandedTitle("AI Group Photo Maker From Individual Photos | Pixel Shine") },
  description: `Create a group photo from individual photos with AI. Upload up to ${MAX_GROUP_PHOTOS} separate photos, one person in each, and get one natural group photo. No watermark.`,
  keywords: "ai group photo maker, ai group photo generator, group photo maker, create group photo from individual photos, add person to group photo, family photo from individual photos, team photo maker",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Group Photo Maker — One Group Photo From Separate Photos | Pixel Shine",
    description: `Upload up to ${MAX_GROUP_PHOTOS} photos, one person in each, and AI puts everyone together in one natural group photo.`,
    url: URL,
    type: "website",
    siteName: "Pixel Shine",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "AI Group Photo Maker: up to 14 photos into one group photo" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
  robots: { index: true, follow: true },
});

/** Re-read hourly, so examples added to the "Group Photo" bucket appear without a deploy. */
export const revalidate = 3600;

/** A drawn person's colours, only seen when there is no photo. */
const NO_LOOK = { hue: 30, skin: "#C98E64", hair: "#2B1D14", long: false };

/** The owner's own examples from the bucket; the drawn ones only if it can't be read. */
async function showcaseExamples(): Promise<ShowcaseExample[]> {
  const real = await loadGroupCreatives();
  if (real.length) {
    return real.map((c) => ({
      id: c.id,
      title: c.title,
      caption: c.caption,
      scene: "park",
      ratio: c.ratio ?? "3 / 2",
      people: c.singles.map((p) => ({ label: p.label, src: p.src, ...NO_LOOK })),
      result: c.result,
    }));
  }
  return ILLUSTRATED_EXAMPLES.map((ex) => ({
    id: ex.id,
    title: ex.title,
    caption: ex.caption,
    scene: ex.scene,
    ratio: "3 / 2",
    people: ex.people.map((p) => ({ ...p, src: null })),
    result: null,
  }));
}

/** The tool itself lives on its own page, so this one stays an article. */
const CREATE = "/group-photo/create";

const ctaStyle: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 22px", borderRadius: 14, background: "var(--grad-strong)", color: "#fff", fontWeight: 800, fontSize: 15.5, textDecoration: "none", boxShadow: "var(--glow)" };

/** "Grandma, Dad, Mum and Daughter", or "the 4 people" when the photos only have numbers. */
function names(ex: ShowcaseExample): string {
  const l = ex.people.map((p) => p.label);
  if (l.some((x) => /^Photo \d+$/.test(x))) return `the ${l.length} people`;
  return l.length > 1 ? `${l.slice(0, -1).join(", ")} and ${l[l.length - 1]}` : l[0];
}

/** The words above each example: what it is, and what it's for. */
function exampleInfo(ex: ShowcaseExample): { h: string; p: string[] } {
  const n = ex.people.length;
  const who = names(ex);
  const Who = who.charAt(0).toUpperCase() + who.slice(1);
  switch (ex.id) {
    case "family":
      return {
        h: "AI family photo from separate photos",
        p: [
          `Getting the whole family into one picture is hard when everyone lives somewhere else. ${Who} each sent an ordinary photo taken at home, and the AI combined them into one family photo: everyone together, in the same light, each face kept as it was.`,
          "It's the simplest way to make a family photo from individual photos, for a birthday, an anniversary or a frame on the wall. Add a grandparent who couldn't travel or a child who was away, and the whole family is in the picture.",
        ],
      };
    case "friends":
      return {
        h: "Friends group photo from individual photos",
        p: [
          `${Who} live in different places, so there was never a photo of all of them together. ${n} everyday selfies went in, and one natural group photo of the friends came out, as if they had all met up on the same evening.`,
          "Use it for a reunion invite, a birthday post or a throwback to the old group. Pick a background such as Beach, Park or Celebration, or leave it on Auto.",
        ],
      };
    case "team":
      return {
        h: "AI team photo from individual headshots",
        p: [
          `Remote teams rarely stand in one room. ${Who} each sent an everyday photo from wherever they work, and the AI turned them into one team photo, dressed to match, in a bright office.`,
          "Put it on your About page, in a LinkedIn post or on a welcome slide for new starters. Choose Office as the background and Matching smart outfits for a polished, consistent look.",
        ],
      };
    default:
      return {
        h: `${ex.title} group photo from ${n} separate photos`,
        p: [`${Who} were photographed separately. The AI put them together in one group photo, with the same light on everyone and each face kept as it was.`],
      };
  }
}

const FEATURES: { icon: IconName; t: string; d: string }[] = [
  { icon: "group", t: `Up to ${MAX_GROUP_PHOTOS} people`, d: "One photo each, from anywhere, taken any time." },
  { icon: "sparkle", t: "Every face kept", d: "Each person looks like their own photo, never blended." },
  { icon: "image", t: "One scene, one light", d: "Everyone lit the same way, so nobody looks pasted in." },
  { icon: "wand", t: "Full or half portrait", d: "Head to toe or waist up, with 8 backgrounds." },
  { icon: "download", t: "Full size, no watermark", d: `${CREDIT_COST} credits a photo, saved to My Creations.` },
];

const STEPS = [
  { n: "1", t: `Add ${MIN_GROUP_PHOTOS} to ${MAX_GROUP_PHOTOS} photos`, d: "One person in each, face clearly visible. Choose several at once, drop them in or paste them. Each photo gets a number, and you can remove any of them." },
  { n: "2", t: "Pick a background, framing, pose and outfits", d: "Auto, or studio, park, beach, party, wedding, office or living room; a full or half group portrait. Everyone keeps their own clothes, or you dress the group to match. Add details in your own words if you like." },
  { n: "3", t: "Generate and download", d: "About a minute later everyone is in one photo, in the same light, at full resolution with no watermark. Not quite right? Press Regenerate for a new take." },
];

const USES = [
  { t: "A family photo when someone lives far away", d: "Grandparents in one city, a cousin abroad, a sibling who couldn't travel. Add a photo of each and get the family picture you never managed to take together." },
  { t: "Friends and reunions", d: "The old group from school or university, scattered across time zones. One photo each, a scene you all like, and the reunion picture exists before the reunion does." },
  { t: "Team and company photos", d: "Remote teams rarely stand in one room. Use everyone's photo, pick Office and Matching smart outfits, and you have a team photo for the About page or a farewell card." },
  { t: "Add someone who missed the photo", d: "Upload the group photo and a photo of the person who wasn't there. Everyone in every photo is included, so they join the group instead of being pasted on the edge." },
  { t: "Weddings, birthdays and celebrations", d: "Bring both families into one wedding picture, or put the whole birthday crowd around one table, with the Wedding or Celebration background." },
  { t: "Couples and best friends", d: "Two photos are enough. Taken years or miles apart, they come back as one photo of the two of you together." },
];

const TIPS = [
  { t: "Use one clear photo per person.", d: "Face toward the camera, evenly lit, not too small in the frame. A crop from a busy group shot gives the AI less of that face to keep." },
  { t: "Skip sunglasses, hats and heavy filters.", d: "Anything that hides or changes the face makes it harder to keep. Plain, natural photos come out most like each person." },
  { t: "Smaller groups keep faces closest.", d: `Up to about ${BEST_GROUP_SIZE} people, faces stay closest to each person. Bigger groups work too, up to ${MAX_GROUP_PHOTOS}, but check every face before you share.` },
  { t: "Count the people in the result.", d: "Everyone should be there exactly once. If someone is missing or doubled, press Regenerate: each run is a new picture." },
  { t: "Say what you want in Add details.", d: "“Everyone in white”, “a birthday cake in front”, “standing on a beach at sunset”. The details shape the photo without dropping anyone." },
];

const FAQS = [
  { q: "How do I make a group photo from individual photos?", a: `Upload ${MIN_GROUP_PHOTOS} to ${MAX_GROUP_PHOTOS} photos, one person in each, pick a background, framing, pose and outfits (or leave them on Auto), and press Generate. The AI puts everyone into one photo with the same light and camera, so it looks like a real group photo rather than a collage.` },
  { q: "How many photos can I upload?", a: `Up to ${MAX_GROUP_PHOTOS}, and at least ${MIN_GROUP_PHOTOS}. If you pick more, the first ${MAX_GROUP_PHOTOS} are kept and the page tells you how many were left out.` },
  { q: "How many people look best?", a: `Faces stay closest to each person in groups of up to about ${BEST_GROUP_SIZE}. The image models keep a likeness most reliably for a handful of people at a time, so in a group of 10 or more, check each face before you share the result.` },
  { q: "Will everyone still look like themselves?", a: "The AI is told to keep each person's face, features, skin tone, hair, glasses and build exactly as in their own photo, and never to blend or swap faces. It usually does. It's a generated picture, so look at each face, and regenerate if one has drifted." },
  { q: "Can I add a person to an existing group photo?", a: "Yes. Upload the group photo and a photo of the person you want to add. Everyone in every photo is included, and they're arranged together in one scene. Expect a new picture of the group, not an edit of your original." },
  { q: "Can I make a family photo from separate photos?", a: "Yes, that's what it's for. Add a photo of each family member, choose a background such as Living room or Park, and the AI puts the whole family together. Children and adults keep their own heights, so the picture looks natural." },
  { q: "How much does it cost?", a: `Each group photo uses ${CREDIT_COST} credits, the same as any AI image here, however many photos you add. Adding photos and changing options is free, and a generation that fails isn't charged. Credits come with a monthly plan or a one-time pack, and pack credits never expire.` },
  { q: "Are my photos private?", a: "Your photos are sent to our AI partner to make the picture and saved to your account, so you can find the result in My Creations. They aren't used to train AI models and aren't sold. See our privacy policy for details." },
  { q: "Do I need an account?", a: "Yes, because each group photo uses credits. You can add your photos first; when you press Generate you sign in with Google or email, and your photos and choices are still there when you come back." },
];

const RELATED = [
  { href: "/object-remover", t: "Object remover", d: "Take people and things out of a photo." },
  { href: "/ai-headshot", t: "AI headshot generator", d: "Studio headshots from a selfie." },
  { href: "/ai-editor", t: "AI image editor", d: "Describe a change in words and AI makes it." },
  { href: "/creative", t: "All AI photo apps", d: "200+ one-tap looks for your photos." },
];

export default async function GroupPhotoPage() {
  const examples = await showcaseExamples();
  const appLd = {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    name: "AI Group Photo Maker", applicationCategory: "MultimediaApplication", operatingSystem: "Web", url: URL,
    description: `Create one group photo from up to ${MAX_GROUP_PHOTOS} individual photos. AI puts everyone together in the same scene and light, keeping each person's face.`,
    image: OG_IMAGE,
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "AI Group Photo Maker", item: URL },
    ],
  };
  const h2: React.CSSProperties = { fontSize: "clamp(1.4rem,3vw,1.75rem)", fontWeight: 900, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 12px", textWrap: "balance" };
  const intro: React.CSSProperties = { fontSize: 16, color: "var(--text-muted)", lineHeight: 1.65, maxWidth: 680, margin: "0 auto 30px", textAlign: "center" };
  const body: React.CSSProperties = { fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 };
  const card: React.CSSProperties = { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 };
  const link: React.CSSProperties = { color: "var(--accent-strong)", fontWeight: 700 };
  const chip: React.CSSProperties = { fontSize: 14, fontWeight: 700, padding: "8px 14px", borderRadius: 999, background: "var(--bg)", border: "1px solid var(--border)" };
  const optionGroups = [
    { t: "Backgrounds", items: GROUP_SCENES.filter((c) => c.id !== "auto").map((c) => c.label), d: "Auto is selected to start with: a bright setting that suits the people and the occasion." },
    { t: "Framing", items: GROUP_FRAMINGS.filter((c) => c.id !== "auto").map((c) => c.label), d: "Full shows everyone head to toe; half shows everyone from the waist up, with bigger faces. Auto picks for you." },
    { t: "Poses", items: GROUP_POSES.filter((c) => c.id !== "auto").map((c) => c.label), d: "Auto arranges one row for a small group and two or three for a bigger one." },
    { t: "Outfits", items: GROUP_OUTFITS.map((c) => c.label), d: "Or describe the clothes yourself in Add details." },
  ];

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(breadcrumbLd) }} />

      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg,var(--surface-2) 0%,var(--bg) 70%)", padding: "48px 16px 40px" }}>
        <div aria-hidden style={{ position: "absolute", width: 720, height: 720, right: -200, top: -260, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,122,47,.16) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: 40, alignItems: "center" }}>
          <div style={{ minWidth: 0 }}>
            <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-strong)", background: "var(--accent-soft)", border: "1px solid var(--accent-border)", borderRadius: 999, padding: "5px 12px" }}>
              New · AI tool · {CREDIT_COST} credits per group photo
            </span>
            <h1 style={{ fontSize: "clamp(2.2rem,5.4vw,3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.035em", margin: "16px 0 14px", textWrap: "balance" }}>
              AI <span style={{ background: "var(--grad-strong)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Group Photo</span> Maker
            </h1>
            <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 18px", maxWidth: 560 }}>
              Make a group photo from individual photos. Upload up to {MAX_GROUP_PHOTOS} separate photos, one person in each, and AI puts everyone together in one natural group photo: same scene, same light, every face kept.
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 24px", padding: 0, display: "grid", gap: 8 }}>
              {["Family far away, friends in other cities, a remote team", "Pick the background, full or half portrait, the pose and outfits", "Signed out? Add your photos first, they wait for you"].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15, color: "var(--text)" }}>
                  <span aria-hidden style={{ flex: "0 0 auto", width: 20, height: 20, marginTop: 1, borderRadius: "50%", background: "var(--accent-soft)", color: "var(--accent-strong)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900 }}>✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginBottom: 14 }}>
              <Link href={CREATE} className="jpt-sheen" style={ctaStyle}>
                <Icon name="group" size={18} /> Make your group photo
              </Link>
              <a href="#examples" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 18px", borderRadius: 14, border: "1px solid var(--border-strong)", color: "var(--text)", fontWeight: 700, fontSize: 15, textDecoration: "none", background: "var(--surface)" }}>
                See examples
              </a>
            </div>
            <TrialPill align="start" source="group-photo" />
          </div>
          <div style={{ minWidth: 0 }}>
            <GroupShowcase examples={examples} />
          </div>
        </div>
      </section>

      <section style={{ padding: "8px 16px 8px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: 12 }}>
          {FEATURES.map((f) => (
            <div key={f.t} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 16, borderRadius: 16, background: "var(--surface)", border: "1px solid var(--border)" }}>
              <span style={{ flex: "0 0 auto", width: 38, height: 38, borderRadius: 11, background: "var(--accent-soft)", color: "var(--accent-strong)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name={f.icon} size={19} /></span>
              <span style={{ minWidth: 0 }}>
                <strong style={{ display: "block", fontSize: 14.5, marginBottom: 2 }}>{f.t}</strong>
                <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{f.d}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="examples" style={{ padding: "56px 16px", background: "var(--surface-2)", scrollMarginTop: 70 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={h2}>Before and after: separate photos, one group photo</h2>
          <p style={intro}>
            {examples.every((e) => e.result)
              ? "Each example shows the separate photos on one side and the one group photo made from them on the other."
              : "Drawn to show the idea: each set of separate photos becomes one group photo."}
          </p>
          <div style={{ display: "grid", gap: 44 }}>
            {examples.map((ex) => {
              const info = exampleInfo(ex);
              return (
                <article key={ex.id} style={{ display: "grid", gap: 16 }}>
                  <div style={{ maxWidth: 820 }}>
                    <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-strong)", marginBottom: 6 }}>{ex.title} · {ex.people.length} photos → 1 group photo</span>
                    <h3 style={{ fontSize: "clamp(1.25rem,2.6vw,1.6rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 10px", textWrap: "balance" }}>{info.h}</h3>
                    {info.p.map((t) => <p key={t} style={{ ...body, marginBottom: 10 }}>{t}</p>)}
                  </div>
                  <ExampleCard ex={ex} />
                </article>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
            <Link href={CREATE} className="jpt-sheen" style={ctaStyle}>
              <Icon name="group" size={18} /> Make your group photo
            </Link>
          </div>
        </div>
      </section>

      <section id="how" style={{ padding: "56px 16px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={h2}>How do you make a group photo from individual photos?</h2>
          <p style={intro}>Three steps. You don&apos;t need the people in the same place, the same light or even the same year.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={card}>
                <span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: "50%", alignItems: "center", justifyContent: "center", background: "var(--accent-soft)", color: "var(--accent-strong)", fontWeight: 900 }}>{s.n}</span>
                <h3 style={{ fontSize: 17, fontWeight: 800, margin: "12px 0 6px" }}>{s.t}</h3>
                <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 16px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={h2}>What can you make with an AI group photo maker?</h2>
          <p style={intro}>Any picture where the people couldn&apos;t all be in the same place at once.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 16 }}>
            {USES.map((u) => (
              <div key={u.t} style={{ ...card, background: "var(--bg)", display: "grid", gap: 8, alignContent: "start" }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{u.t}</h3>
                <p style={{ ...body, fontSize: 14.5 }}>{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 16px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={h2}>Backgrounds, framing, poses and outfits</h2>
          <p style={intro}>Pick where the group stands, how they&apos;re arranged and what they wear. Everyone faces the camera most of the time, in one light, so nobody looks pasted in.</p>
          <div style={{ display: "grid", gap: 16 }}>
            {optionGroups.map((g) => (
              <div key={g.t} style={{ ...card, display: "grid", gap: 10 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{g.t}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.items.map((it) => <span key={it} style={chip}>{it}</span>)}
                </div>
                <p style={{ ...body, fontSize: 14 }}>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 16px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={h2}>Tips for a better group photo</h2>
          <p style={intro}>Most results that miss come down to one of these.</p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
            {TIPS.map((t, i) => (
              <li key={t.t} style={{ ...card, background: "var(--bg)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ flex: "0 0 auto", width: 28, height: 28, borderRadius: 9, background: "var(--accent-soft)", color: "var(--accent-strong)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13.5 }}>{i + 1}</span>
                <span style={{ minWidth: 0 }}>
                  <strong style={{ display: "block", fontSize: 15.5, marginBottom: 3 }}>{t.t}</strong>
                  <span style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{t.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ padding: "56px 16px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "grid", gap: 14 }}>
          <h2 style={h2}>What can&apos;t it do?</h2>
          <p style={body}>
            It makes a new picture; it doesn&apos;t record a real moment. The scene, the light and the arrangement are generated, and small details such as hands, jewellery or patterns can come out slightly wrong. Don&apos;t present it as a photo of an event that didn&apos;t happen.
          </p>
          <p style={body}>
            Faces stay closest to each person in groups of up to about {BEST_GROUP_SIZE}. With {MAX_GROUP_PHOTOS} people the faces get smaller and are harder to keep, so check each one. It never adds people who aren&apos;t in your photos, and a photo with a face that is small, blurred or hidden gives it less to work from.
          </p>
          <h2 style={{ ...h2, marginTop: 18 }}>How much does it cost?</h2>
          <p style={body}>
            Each group photo uses {CREDIT_COST} credits, whether you add 2 photos or {MAX_GROUP_PHOTOS}. Adding photos and changing options cost nothing, and a generation that fails isn&apos;t charged. Credits come with a <Link href="/pricing" style={link}>monthly plan or a one-time pack</Link>; pack credits never expire. The result has no watermark and is saved in My Creations.
          </p>
        </div>
      </section>

      <section style={{ padding: "56px 16px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={h2}>Questions people ask</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            {FAQS.map((f) => (
              <details key={f.q} className="jpt-faq">
                <summary className="jpt-faq-q">
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", lineHeight: 1.4, margin: 0 }}>{f.q}</h3>
                  <span className="jpt-faq-icon" aria-hidden />
                </summary>
                <div style={{ padding: "0 24px 20px", color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 16px 64px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ ...h2, fontSize: 20 }}>More photo tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(210px, 100%), 1fr))", gap: 12, marginTop: 18 }}>
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="jpt-lift" style={{ ...card, padding: 16, textDecoration: "none", color: "var(--text)", display: "grid", gap: 4 }}>
                <strong style={{ fontSize: 15 }}>{r.t} →</strong>
                <span style={{ fontSize: 13.5, color: "var(--text-muted)" }}>{r.d}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
