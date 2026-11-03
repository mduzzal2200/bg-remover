import { seoJson, seoMeta } from "@/lib/seo/brand";
import { brandedTitle } from "@/lib/seo/title";
import { toolPage } from "@/lib/tool-pages";
import AppArticle from "@/app/creative/[slug]/AppArticle";
import GuidesBlock from "@/app/_components/GuidesBlock";
import type { Metadata } from "next";
import Link from "next/link";
import HiddenMarksTool from "./HiddenMarksTool";

const BASE = "https://www.sjpt.io";
const URL = `${BASE}/invisible-watermark-remover`;
const GRAD = "linear-gradient(120deg,var(--accent),var(--accent-2))";

/** The page's words: lib/tool-pages/invisible-watermark-remover.ts. */
const TP = toolPage("invisible-watermark-remover")!;

export const metadata: Metadata = seoMeta({
  title: { absolute: brandedTitle(TP.title) },
  description: TP.metaDescription,
  keywords: TP.keywords,
  alternates: { canonical: URL },
  openGraph: {
    title: TP.title,
    description: TP.metaDescription,
    url: URL,
    type: "website",
    siteName: "Pixel Shine",
  },
  twitter: {
    card: "summary_large_image",
    title: TP.title,
    description: TP.metaDescription,
  },
});

const FAQS = TP.faq;



const RELATED = [
  { icon: "🪄", title: "Watermark Remover", href: "/watermark-remover" },
  { icon: "🫥", title: "Blur Image", href: "/blur-image" },
  { icon: "🔀", title: "Convert Image", href: "/convert-image" },
  { icon: "🗜️", title: "Compress Image", href: "/compress-image" },
];

export default function Page() {
  const appLd = {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    name: "Invisible Watermark & Metadata Remover", applicationCategory: "UtilitiesApplication", operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, url: URL,
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />

      <div style={{ fontFamily: "var(--font)", color: "var(--text)", background: "var(--surface)" }}>
        {/* HERO + TOOL */}
        <section style={{ background: "linear-gradient(160deg,var(--surface-2) 0%,var(--surface) 55%,var(--success-soft) 100%)", padding: "56px 20px 48px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ display: "inline-block", background: "var(--accent-soft)", color: "var(--accent)", fontSize: 12.5, fontWeight: 800, borderRadius: 999, padding: "6px 14px", marginBottom: 16 }}>
                Free · Runs in your browser · Nothing uploaded
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, lineHeight: 1.14, letterSpacing: "-0.03em", color: "var(--text)", margin: "0 0 14px" }}>
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Invisible Watermark</span>{" "}
                &amp; Metadata Remover
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.12rem)", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 660, margin: "0 auto" }}>
                {TP.subtitle}
              </p>
            </div>
            <HiddenMarksTool />
          </div>
        </section>

        {/* The article: lib/tool-pages */}
        <AppArticle sections={TP.sections} />

        {/* FAQ */}
        <section style={{ padding: "48px 24px", background: "var(--surface-2)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "var(--text)", margin: "0 0 28px", letterSpacing: "-0.02em", textAlign: "center" }}>Frequently asked questions</h2>
            {FAQS.map((f) => (
              <details key={f.q} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 18px", marginBottom: 10 }}>
                <summary style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", cursor: "pointer" }}>{f.q}</summary>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: "10px 0 0" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED */}
        <section style={{ padding: "48px 24px 72px", background: "var(--surface)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", margin: "0 0 20px", letterSpacing: "-0.02em" }}>More free tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {RELATED.map((r) => (
                <Link key={r.href} href={r.href} className="jpt-hover" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 999, padding: "9px 16px", fontSize: 14, fontWeight: 600, color: "var(--text)", textDecoration: "none" }}>
                  <span>{r.icon}</span> {r.title}
                </Link>
              ))}
              <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-soft)", border: "1px solid var(--accent-border)", borderRadius: 999, padding: "9px 16px", fontSize: 14, fontWeight: 700, color: "var(--accent)", textDecoration: "none" }}>
                All tools →
              </Link>
            </div>
          </div>
        </section>
      </div>
      <GuidesBlock path="/invisible-watermark-remover" />
    </>
  );
}
