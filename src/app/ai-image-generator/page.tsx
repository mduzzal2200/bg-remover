import { seoJson, seoMeta } from "@/lib/seo/brand";
import { brandedTitle } from "@/lib/seo/title";
import type { Metadata } from "next";
import Link from "next/link";
import { TrialPill } from "@/app/_components/TrialOffer";
import PricingSection from "@/app/_components/PricingSection";
import GuidesBlock from "@/app/_components/GuidesBlock";
import AppArticle from "@/app/creative/[slug]/AppArticle";
import { toolPage } from "@/lib/tool-pages";
import { CREATE_PICKS } from "@/lib/show-features.server";
import { feedItemsByUid } from "@/lib/dashboard-feed.server";

/**
 * /ai-image-generator — the search page for "AI image generator" / "text to
 * image". The tool itself is Create Image in the dashboard (/app/create); this
 * page explains it and sends people there. Its words are in
 * lib/tool-pages/ai-image-generator.ts; the example pictures are prompts from
 * the community library (CC BY 4.0), credited to their authors and models.
 */

const BASE = "https://www.sjpt.io";
const URL = `${BASE}/ai-image-generator`;
const CREATE = "/app/create";
const TP = toolPage("ai-image-generator")!;

export const metadata: Metadata = seoMeta({
  title: { absolute: brandedTitle(TP.title) },
  description: TP.metaDescription,
  keywords: TP.keywords,
  alternates: { canonical: URL },
  openGraph: { title: TP.title, description: TP.metaDescription, url: URL, type: "website", siteName: "Pixel Shine" },
  twitter: { card: "summary_large_image", title: TP.title, description: TP.metaDescription },
  robots: { index: true, follow: true },
});

/** The library is read at build time; hourly is plenty for a handful of pictures. */
export const revalidate = 3600;

const RELATED = [
  { href: "/ai-editor", t: "AI photo editor", d: "Change a photo by describing the edit." },
  { href: "/prompts", t: "Prompt library", d: "Hundreds of prompts with the images they made." },
  { href: "/creative", t: "AI photo apps", d: "200+ one-tap looks for your selfie." },
  { href: "/group-photo", t: "AI group photo", d: "Separate photos into one group photo." },
];

export default async function AiImageGeneratorPage() {
  const examples = (await feedItemsByUid(CREATE_PICKS)).filter((e) => e.image);
  const appLd = {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    name: "AI Image Generator", applicationCategory: "MultimediaApplication", operatingSystem: "Web", url: URL,
    description: TP.metaDescription,
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: TP.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "AI Image Generator", item: URL },
    ],
  };
  const cta: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 22px", borderRadius: 14, background: "var(--grad-strong)", color: "#fff", fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 10px 30px rgba(255,106,26,.3)" };
  const h2: React.CSSProperties = { fontSize: "clamp(1.4rem,3vw,1.75rem)", fontWeight: 900, letterSpacing: "-0.02em", textAlign: "center", margin: "0 0 10px", textWrap: "balance" };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(breadcrumbLd) }} />

      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg,var(--surface-2) 0%,var(--bg) 70%)", padding: "56px 16px 44px", textAlign: "center" }}>
        <div aria-hidden style={{ position: "absolute", width: 720, height: 720, right: -220, top: -280, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,122,47,.16) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-strong)", background: "var(--accent-soft)", border: "1px solid var(--accent-border)", borderRadius: 999, padding: "6px 12px" }}>
            Text to image · 29 models
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem,5.4vw,3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.035em", margin: "16px 0 14px", textWrap: "balance" }}>
            AI <span style={{ background: "var(--grad-strong)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Image</span> Generator
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, margin: "0 auto 24px", maxWidth: 640 }}>{TP.subtitle}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 14 }}>
            <Link href={CREATE} className="jpt-sheen" style={cta}>✨ {TP.ctaText}</Link>
            <Link href="/prompts" style={{ display: "inline-flex", alignItems: "center", padding: "13px 18px", borderRadius: 14, border: "1px solid var(--border-strong)", color: "var(--text)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Browse prompts
            </Link>
          </div>
          <TrialPill source="ai-image-generator" />
        </div>
      </section>

      {examples.length > 0 && (
        <section style={{ padding: "48px 16px", background: "var(--surface-2)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <h2 style={h2}>What do AI images look like?</h2>
            <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.65, maxWidth: 680, margin: "0 auto 26px", textAlign: "center" }}>
              Prompts from the community prompt library, each with the image it made. Tap one to open its full prompt and use it yourself.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))", gap: 14 }}>
              {examples.map((e) => (
                <Link key={e.uid} href={e.href} style={{ display: "block", textDecoration: "none", color: "inherit", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.image} alt={`AI image: ${e.title}`} loading="lazy" decoding="async" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", background: "var(--surface-3)" }} />
                  <span style={{ display: "block", padding: "10px 12px 12px" }}>
                    <strong style={{ display: "block", fontSize: 13.5, lineHeight: 1.35, marginBottom: 4 }}>{e.title}</strong>
                    <span style={{ fontSize: 12, color: "var(--text-faint)" }}>{e.model}{e.author ? ` · by ${e.author}` : ""}</span>
                  </span>
                </Link>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--text-faint)", textAlign: "center", margin: "16px 0 0" }}>
              Images and prompts from the YouMind OpenLab prompt library, shared under CC BY 4.0, credited to their authors.
            </p>
          </div>
        </section>
      )}

      <AppArticle sections={TP.sections} />

      <section style={{ padding: "8px 16px 56px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <Link href={CREATE} className="jpt-sheen" style={cta}>✨ {TP.ctaText}</Link>
        </div>
      </section>

      <PricingSection toolName="AI Image Generator" />

      <section style={{ padding: "56px 16px", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={h2}>AI image generator questions</h2>
          <div style={{ display: "grid", gap: 10, marginTop: 22 }} className="jpt-faq">
            {TP.faq.map((f) => (
              <details key={f.q} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 18px" }}>
                <summary style={{ fontSize: 15.5, fontWeight: 700, cursor: "pointer" }}>{f.q}</summary>
                <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, margin: "10px 0 0" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 16px 64px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 16px" }}>More ways to make pictures</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 12 }}>
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="jpt-hover" style={{ display: "block", padding: 16, borderRadius: 14, background: "var(--surface)", border: "1px solid var(--border)", textDecoration: "none", color: "var(--text)" }}>
                <strong style={{ display: "block", fontSize: 15, marginBottom: 4 }}>{r.t}</strong>
                <span style={{ fontSize: 13.5, color: "var(--text-muted)" }}>{r.d}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GuidesBlock path="/ai-image-generator" />
    </main>
  );
}
