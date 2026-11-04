import { seoJson, seoMeta } from "@/lib/seo/brand";
import { brandedTitle } from "@/lib/seo/title";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CREDIT_COST } from "@/lib/plans";
import { FESTIVALS, REGIONS, festivalAppSlug, getFestival } from "@/lib/festivals";
import { festivalAppCards, summarize } from "@/lib/festival-summary";
import { festivalIndexable, NOINDEX } from "@/lib/seo/index-policy";
import { previewUrl } from "@/lib/creative-apps";
import { festivalOgImage } from "@/lib/festival-creatives";
import FestivalAppCard from "../_components/FestivalAppCard";
import FestivalCard from "../_components/FestivalCard";
import FestivalFaq from "../_components/FestivalFaq";
import { festivalGuide } from "@/lib/festival-guides";
import { inline } from "@/app/creative/[slug]/AppArticle";

export const dynamicParams = false;

const BASE = "https://www.sjpt.io";

export function generateStaticParams() {
  return FESTIVALS.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const f = getFestival(params.slug);
  if (!f) return {};
  const url = `${BASE}/festivals/${f.slug}`;
  const title = `${f.name} AI Photos — Portraits, Family Photos & Cards`;
  const portrait = festivalAppSlug(f, f.apps[0]);
  // The festival's portrait before/after as a 1200×630 share image.
  const og = festivalOgImage(f.slug, portrait) ?? previewUrl(portrait);
  return seoMeta({
    title: { absolute: brandedTitle(`${title} | Pixel Shine`) },
    description: f.short,
    keywords: [`${f.name.toLowerCase()} photo`, `${f.name.toLowerCase()} ai photo`, `${f.name.toLowerCase()} photo editor`, `${f.name.toLowerCase()} greeting card with photo`, ...f.aliases.slice(0, 3).map((a) => `${a.toLowerCase()} photo`)].join(", "),
    alternates: { canonical: url },
    ...(festivalIndexable(f) ? {} : { robots: NOINDEX }),
    openGraph: { title, description: f.short, url, type: "website", images: [og] },
    twitter: { card: "summary_large_image", title, description: f.short, images: [og] },
  });
}

export default function FestivalPage({ params }: { params: { slug: string } }) {
  const f = getFestival(params.slug);
  if (!f) notFound();

  const url = `${BASE}/festivals/${f.slug}`;
  const apps = festivalAppCards(f);
  const regionLabels = f.regions.map((r) => REGIONS.find((x) => x.id === r)?.label ?? r);
  const others = FESTIVALS
    .filter((x) => x.slug !== f.slug)
    .sort((a, b) => Number(b.regions.some((r) => f.regions.includes(r))) - Number(a.regions.some((r) => f.regions.includes(r))))
    .slice(0, 6)
    .map(summarize);

  const guide = festivalGuide(f.slug)!;
  const faqs = [
    { q: `When is ${f.name}?`, a: f.dateNote },
    { q: `What can I make for ${f.name}?`, a: `Four ${f.name} pictures: ${apps.map((a) => a.name).join(", ")}.` },
    ...guide.faq,
  ];

  const collectionLd = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: `${f.name} AI Photos`, url, description: f.short,
    about: { "@type": "Thing", name: f.name, alternateName: f.aliases },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: apps.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name, url: `${BASE}/creative/${a.slug}` })),
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Festivals", item: `${BASE}/festivals` },
      { "@type": "ListItem", position: 3, name: f.name, item: url },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
  };

  const h2: React.CSSProperties = { fontSize: "clamp(1.35rem,3vw,1.75rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 8px", textWrap: "balance" };
  const grid: React.CSSProperties = { listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: 16 };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(collectionLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />

      <section style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${f.gradient[0]} 18%, var(--surface)) 0%, var(--surface) 70%)`, padding: "40px 16px 44px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 20, color: "var(--text-faint)" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <span aria-hidden style={{ margin: "0 8px" }}>›</span>
            <Link href="/festivals" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Festivals</Link>
            <span aria-hidden style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "var(--accent-strong)" }}>{f.name}</span>
          </nav>
          <div style={{ maxWidth: 760 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent-strong)", background: "var(--accent-soft)", border: "1px solid var(--accent-border)", borderRadius: 999, padding: "5px 12px" }}>
              <span aria-hidden>{f.emoji}</span> {regionLabels.join(" · ")}
            </span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "14px 0 12px", textWrap: "balance" }}>
              {f.name} AI Photos
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 14px" }}>{f.short}</p>
            <p style={{ fontSize: 14, color: "var(--text-faint)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "var(--text-muted)" }}>When:</strong> {f.dateNote}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="apps" style={{ padding: "40px 16px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 id="apps" style={h2}>Make your {f.name} photo</h2>
          <p style={{ fontSize: 14.5, color: "var(--text-muted)", margin: "0 0 22px" }}>Tap one, upload a photo, and it&apos;s ready in about a minute. {CREDIT_COST} credits each, full resolution, no watermark.</p>
          <ul style={grid}>
            {apps.map((a, i) => <li key={a.slug} style={{ minWidth: 0 }}><FestivalAppCard a={a} eager={i < 2} /></li>)}
          </ul>
        </div>
      </section>

      <section style={{ padding: "44px 16px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={h2}>About {f.name}</h2>
          {f.about.map((p) => <p key={p.slice(0, 24)} style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, margin: "14px 0 0" }}>{p}</p>)}
          {f.countries.length > 0 && (
            <p style={{ fontSize: 14, color: "var(--text-faint)", lineHeight: 1.6, margin: "18px 0 0" }}>
              <strong style={{ color: "var(--text-muted)" }}>Celebrated in:</strong> {f.countries.join(", ")}{f.regions.includes("worldwide") ? ", and by communities around the world" : ""}.
            </p>
          )}
        </div>
      </section>

      <section style={{ padding: "44px 16px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 40 }}>
          {([
            [`The story behind ${f.name}`, guide.story],
            [`How ${f.name} is celebrated`, guide.celebrate],
            [`What to wear in ${f.name} photos`, guide.wear],
          ] as const).map(([title, paras]) => (
            <div key={title}>
              <h2 style={h2}>{title}</h2>
              {paras.map((p) => <p key={p.slice(0, 24)} style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, margin: "14px 0 0" }}>{inline(p)}</p>)}
            </div>
          ))}
          <div>
            <h2 style={h2}>{f.name} photo ideas</h2>
            <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "grid", gap: 12 }}>
              {guide.ideas.map((x) => (
                <li key={x.t} style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  <strong style={{ color: "var(--text)" }}>{x.t}.</strong> {inline(x.d)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "44px 16px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={h2}>How to get the best {f.name} photo</h2>
          <ul style={{ margin: "16px 0 0", paddingLeft: 20, display: "grid", gap: 10 }}>
            {guide.tips.map((t) => <li key={t.slice(0, 24)} style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.65 }}>{inline(t)}</li>)}
          </ul>
        </div>
      </section>

      <section style={{ padding: "44px 16px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 style={{ ...h2, marginBottom: 20 }}>{f.name} photo questions</h2>
          <FestivalFaq faqs={faqs} />
        </div>
      </section>

      <section aria-labelledby="more-festivals" style={{ padding: "44px 16px 64px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
            <h2 id="more-festivals" style={{ ...h2, margin: 0 }}>More festivals</h2>
            <Link href="/festivals" style={{ fontSize: 14, fontWeight: 800, color: "var(--accent-strong)", textDecoration: "none" }}>All {FESTIVALS.length} festivals →</Link>
          </div>
          <ul style={{ ...grid, gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 170px), 1fr))" }}>
            {others.map((o) => <li key={o.slug} style={{ minWidth: 0 }}><FestivalCard f={o} href={`/festivals/${o.slug}`} /></li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
