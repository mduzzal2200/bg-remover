import { seoMeta } from "@/lib/seo/brand";
import type { Metadata } from "next";
import { FESTIVALS, MONTH_NAMES, upcomingFestivals } from "@/lib/festivals";
import { FESTIVAL_SUMMARIES, summarize } from "@/lib/festival-summary";
import { CREDIT_COST } from "@/lib/plans";
import FestivalBrowser from "@/app/festivals/_components/FestivalBrowser";
import FestivalCard from "@/app/festivals/_components/FestivalCard";

export const metadata: Metadata = seoMeta({ title: "Festivals", robots: { index: false, follow: false } });
export const revalidate = 86400;

/** The dashboard's Festivals tab: the same festivals and search as /festivals, framed like the other tools. */
export default function DashboardFestivalsPage() {
  const month = new Date().getMonth() + 1;
  const upcoming = upcomingFestivals(month, 4).map(summarize);
  return (
    <div style={{ padding: "22px 24px 60px" }}>
      <div style={{ maxWidth: 1600 }}>
        <div className="jpt-a-up" style={{ marginBottom: 22 }}>
          <h1 style={{ fontSize: "clamp(1.5rem,2.6vw,1.9rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: 0 }}>Festivals</h1>
          <p style={{ margin: "5px 0 0", fontSize: 14, color: "var(--text-muted)" }}>
            {FESTIVALS.length} festivals, each with one-tap portraits, family photos, cards and backgrounds. {CREDIT_COST} credits per image.
          </p>
        </div>
        {upcoming.length > 0 && (
          <section aria-labelledby="dash-coming-up" style={{ marginBottom: 34 }}>
            <h2 id="dash-coming-up" style={{ fontSize: 17, fontWeight: 900, margin: "0 0 12px" }}>Coming up in {MONTH_NAMES[month - 1]} and {MONTH_NAMES[month % 12]}</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))", gap: 14 }}>
              {upcoming.map((f, i) => <li key={f.slug} style={{ minWidth: 0 }}><FestivalCard f={f} href={`/app/festivals/${f.slug}`} eager={i < 4} /></li>)}
            </ul>
          </section>
        )}
        <section aria-label="All festivals">
          <FestivalBrowser festivals={FESTIVAL_SUMMARIES} hrefBase="/app/festivals" />
        </section>
      </div>
    </div>
  );
}
