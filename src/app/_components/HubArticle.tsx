import AppArticle from "@/app/creative/[slug]/AppArticle";
import { seoJson } from "@/lib/seo/brand";
import type { HubPage } from "@/lib/hub-pages/types";

/**
 * The written guide under a hub page (/tools, /guides, /pricing, a topic hub):
 * question-led sections, then a FAQ whose answers are in the HTML and in the
 * page's FAQPage data from the same list.
 */
export default function HubArticle({ page, faqHeading = "Frequently asked questions" }: { page: HubPage; faqHeading?: string }) {
  const faqLd = page.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1") },
        })),
      }
    : null;
  return (
    <>
      {page.sections.length > 0 && <AppArticle sections={page.sections} />}
      {page.faq.length > 0 && (
        <section style={{ padding: "8px 24px 72px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.45rem,2.6vw,1.9rem)", fontWeight: 900, color: "var(--text)", margin: "0 0 18px", letterSpacing: "-0.02em" }}>{faqHeading}</h2>
            {page.faq.map((f) => (
              <details key={f.q} open style={{ borderTop: "1px solid var(--border)", padding: "14px 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 800, color: "var(--text)", fontSize: 16 }}>{f.q}</summary>
                <p style={{ margin: "8px 0 0", fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.75 }}>{f.a.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")}</p>
              </details>
            ))}
          </div>
          {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoJson(faqLd) }} />}
        </section>
      )}
    </>
  );
}
