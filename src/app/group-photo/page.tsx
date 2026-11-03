import { seoMeta } from "@/lib/seo/brand";
import { CREDIT_COST } from "@/lib/plans";
import type { Metadata } from "next";
import { TrialPill } from "@/app/_components/TrialOffer";
import GroupPhotoTool from "./GroupPhotoTool";
import { MAX_GROUP_PHOTOS, BEST_GROUP_SIZE } from "@/lib/group-photo";

/**
 * The public Group Photo page: somewhere a link or an ad can send people
 * straight to the tool. Not an article for search (the owner's call), so it
 * stays out of the index and the sitemap.
 */
export const metadata: Metadata = seoMeta({
  title: "AI Group Photo Maker — Make a Group Photo From Separate Photos",
  description: `Upload up to ${MAX_GROUP_PHOTOS} photos of single people and get one natural group photo with everyone in it. ${CREDIT_COST} credits per photo, no watermark.`,
  robots: { index: false, follow: true },
});

const STEPS = [
  { n: "1", t: `Add up to ${MAX_GROUP_PHOTOS} photos`, d: "One person in each, face clearly visible. Pick several at once, drop them in or paste them." },
  { n: "2", t: "Pick a scene", d: "Studio, park, beach, party, wedding, office or living room. Choose a pose and whether everyone keeps their own clothes." },
  { n: "3", t: "Generate and download", d: "About a minute later everyone is in one photo, in the same light, at full resolution with no watermark." },
];

const TIPS = [
  "Use a clear, well-lit photo of each person, looking at the camera. Sunglasses, hats and heavy filters make a face harder to keep.",
  `Faces stay closest to each person in groups of up to about ${BEST_GROUP_SIZE}. Bigger groups work too, but check every face before you share.`,
  "Count the people in the result. If someone is missing or doubled, press Regenerate: each run is a new picture.",
  "Want everyone to match? Pick Matching smart outfits or Coordinated colours, or type it in Add details.",
];

export default function GroupPhotoPublicPage() {
  const card: React.CSSProperties = { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 };
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font)" }}>
      <section style={{ background: "linear-gradient(160deg,var(--surface-2) 0%,var(--surface) 60%)", padding: "40px 16px 48px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-strong)", background: "var(--accent-soft)", border: "1px solid var(--accent-border)", borderRadius: 999, padding: "5px 12px" }}>
              AI tool · {CREDIT_COST} credits per group photo
            </span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.03em", margin: "16px 0 12px", textWrap: "balance" }}>
              AI Group Photo Maker
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 660, margin: "0 auto 14px" }}>
              Everyone couldn&apos;t make the photo? Upload up to {MAX_GROUP_PHOTOS} separate photos, one person in each, and get one natural group photo with all of them together.
            </p>
            <TrialPill source="group-photo" />
          </div>
          <div id="tool" style={{ scrollMarginTop: 80 }}>
            <GroupPhotoTool />
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 18px", textAlign: "center" }}>How it works</h2>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14 }}>
            {STEPS.map((s) => (
              <li key={s.n} style={card}>
                <span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: 10, alignItems: "center", justifyContent: "center", background: "var(--accent-soft)", color: "var(--accent-strong)", fontWeight: 900, marginBottom: 10 }}>{s.n}</span>
                <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 6px" }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ padding: "8px 16px 64px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", ...card }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, margin: "0 0 12px" }}>Tips for a better group photo</h2>
          <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 8, fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.6 }}>
            {TIPS.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
