import { seoJson, seoMeta } from "@/lib/seo/brand";
import { brandedTitle } from "@/lib/seo/title";
import type { Metadata } from "next";
import Link from "next/link";
import { CREDIT_COST } from "@/lib/plans";
import { FESTIVALS, MONTH_NAMES, upcomingFestivals } from "@/lib/festivals";
import { FESTIVAL_SUMMARIES, summarize } from "@/lib/festival-summary";
import { TrialPill } from "@/app/_components/TrialOffer";
import FestivalBrowser from "./_components/FestivalBrowser";
import FestivalCard from "./_components/FestivalCard";
import FestivalFaq from "./_components/FestivalFaq";

// "Coming up" depends on today's month, so the page is rebuilt daily.
export const revalidate = 86400;

const BASE = "https://www.sjpt.io";
const URL = `${BASE}/festivals`;
const APP_COUNT = FESTIVALS.reduce((n, f) => n + f.apps.length, 0);

export const metadata: Metadata = seoMeta({
  title: { absolute: brandedTitle("AI Festival Photos — 40 Festivals Around the World | Pixel Shine") },
  description: `Diwali, Eid, Christmas, Lunar New Year, Holi and 35 more festivals. Pick one, upload a selfie and get a festive portrait, family photo or card.`,
  keywords: "festival photo editor, ai festival photos, diwali photo, eid photo, christmas photo, lunar new year photo, holi photo, festival greeting card with photo",
  alternates: { canonical: URL },
  openGraph: {
    title: "AI Festival Photos — 40 Festivals Around the World | Pixel Shine",
    description: "Pick a festival, upload a selfie, and get a festive portrait, family photo, greeting card or background in one tap.",
    url: URL,
    type: "website",
  },
});

const STEPS = [
  { t: "Pick a festival", d: "Search by name, country or month, or start with what's coming up." },
  { t: "Choose an app and upload a photo", d: "A portrait, a couple or family photo, a greeting card or a new background. One clear photo is all it needs." },
  { t: "Tap Generate and download", d: `About a minute later you have the picture at full resolution, with no watermark. Each image costs ${CREDIT_COST} credits.` },
];

const FAQS = [
  { q: "Which festivals are included?", a: `${FESTIVALS.length} of the world's best-known festivals and celebrations, from Diwali, Holi and Eid to Christmas, Hanukkah, Lunar New Year, Songkran, Day of the Dead, Oktoberfest and Kwanzaa. Each has its own page with four one-tap apps.` },
  { q: "How do the festival apps work?", a: "Each app already knows the look: the clothes, the setting, the decorations and the light of that festival. You upload one photo and tap Generate; there is no prompt to write. The app keeps your face and changes the rest." },
  { q: "How much does it cost?", a: `Each image costs ${CREDIT_COST} credits. Credits come with a monthly plan or a one-time pack, and pack credits never expire. Downloads are full resolution with no watermark.` },
  { q: "Can I make a family or group photo?", a: "Yes. Upload one photo with everyone in it. The family, couple and friends apps keep the same people: they won't add anyone or leave anyone out." },
  { q: "How do you handle religious festivals?", a: "With care. The pictures celebrate through clothes, food, lights and decorations. They never show deities, prophets or sacred figures, never add scripture or religious script, and never put a religious head covering or symbol on someone who isn't already wearing one." },
  { q: "Why is a festival I celebrate missing?", a: "We started with 40 and will add more. Write to support@sjpt.io with the festival you'd like to see and how you celebrate it." },
];

export default function FestivalsPage() {
  const month = new Date().getMonth() + 1;
  const upcoming = upcomingFestivals(month, 8).map(summarize);

  const collectionLd = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "AI Festival Photos", url: URL,
    description: `One-tap AI photo apps for ${FESTIVALS.length} festivals around the world.`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: FESTIVALS.map((f, i) => ({ "@type": "ListItem", position: i + 1, name: f.name, url: `${URL}/${f.slug}` })),
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Festivals", item: URL },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const h2: React.CSSProperties = { fontSize: "clamp(1.4rem,3vw,1.8rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 8px", textWrap: "balance" };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(collectionLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />

      <section style={{ background: "linear-gradient(160deg,var(--surface-2) 0%,var(--surface) 60%)", padding: "48px 16px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 18, color: "var(--text-faint)" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <span aria-hidden style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "var(--accent-strong)" }}>Festivals</span>
          </nav>
          <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-strong)", background: "var(--accent-soft)", border: "1px solid var(--accent-border)", borderRadius: 999, padding: "5px 12px" }}>
            {FESTIVALS.length} festivals · {APP_COUNT} one-tap apps
          </span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.03em", margin: "16px 0 12px", textWrap: "balance" }}>
            AI Festival Photos From Around the World
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 660, margin: "0 auto 14px" }}>
            Pick a festival, upload a selfie, and get a festive portrait, a couple or family photo, a greeting card or a new background in one tap. Every app already knows the clothes, the decorations and the light; your face stays yours.
          </p>
          <TrialPill source="festivals" />
        </div>
      </section>

      {upcoming.length > 0 && (
        <section aria-labelledby="coming-up" style={{ padding: "40px 16px 8px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <h2 id="coming-up" style={h2}>Coming up in {MONTH_NAMES[month - 1]} and {MONTH_NAMES[month % 12]}</h2>
            <p style={{ fontSize: 14.5, color: "var(--text-muted)", margin: "0 0 20px" }}>Festivals that usually fall this month or next. Dates move with each festival&apos;s calendar, so check the page for each one.</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 190px), 1fr))", gap: 16 }}>
              {upcoming.map((f, i) => (
                <li key={f.slug} style={{ minWidth: 0 }}><FestivalCard f={f} href={`/festivals/${f.slug}`} eager={i < 4} /></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="all-festivals" style={{ padding: "48px 16px 56px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 id="all-festivals" style={{ ...h2, textAlign: "center" }}>Find your festival</h2>
          <p style={{ fontSize: 14.5, color: "var(--text-muted)", margin: "0 auto 22px", textAlign: "center", maxWidth: 560 }}>Search by name, by another name it goes by, by country or by month.</p>
          <FestivalBrowser festivals={FESTIVAL_SUMMARIES} hrefBase="/festivals" />
        </div>
      </section>

      <section style={{ padding: "52px 16px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ ...h2, textAlign: "center", marginBottom: 24 }}>How to make a festival photo</h2>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 16 }}>
            {STEPS.map((s, i) => (
              <li key={s.t} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
                <span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: "50%", alignItems: "center", justifyContent: "center", background: "var(--accent-soft)", color: "var(--accent-strong)", fontWeight: 900 }}>{i + 1}</span>
                <h3 style={{ fontSize: 17, fontWeight: 800, margin: "12px 0 6px" }}>{s.t}</h3>
                <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ padding: "52px 16px 64px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ ...h2, textAlign: "center", marginBottom: 22 }}>Questions people ask</h2>
          <FestivalFaq faqs={FAQS} />
        </div>
      </section>
    </main>
  );
}
