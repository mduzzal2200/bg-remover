import { seoMeta } from "@/lib/seo/brand";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FESTIVALS, getFestival } from "@/lib/festivals";
import { festivalAppCards } from "@/lib/festival-summary";
import { CREDIT_COST } from "@/lib/plans";
import FestivalAppCard from "@/app/festivals/_components/FestivalAppCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return FESTIVALS.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const f = getFestival(params.slug);
  return seoMeta({ title: f ? `${f.name} · Festivals` : "Festivals", robots: { index: false, follow: false } });
}

/** One festival inside the dashboard: its apps first, the date note, and the way back. */
export default function DashboardFestivalPage({ params }: { params: { slug: string } }) {
  const f = getFestival(params.slug);
  if (!f) notFound();
  const apps = festivalAppCards(f);
  return (
    <div style={{ padding: "22px 24px 60px" }}>
      <div style={{ maxWidth: 1600 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 14 }}>
          <Link href="/app/festivals" style={{ color: "var(--text-muted)", textDecoration: "none" }}>← All festivals</Link>
        </nav>
        <div className="jpt-a-up" style={{ marginBottom: 22, maxWidth: 820 }}>
          <h1 style={{ fontSize: "clamp(1.5rem,2.6vw,1.9rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: 0 }}>
            <span aria-hidden>{f.emoji}</span> {f.name}
          </h1>
          <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.55 }}>{f.short}</p>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--text-faint)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--text-muted)" }}>When:</strong> {f.dateNote}
          </p>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: 16 }}>
          {apps.map((a, i) => <li key={a.slug} style={{ minWidth: 0 }}><FestivalAppCard a={a} eager={i < 4} /></li>)}
        </ul>
        <p style={{ fontSize: 13, color: "var(--text-faint)", marginTop: 18 }}>
          {CREDIT_COST} credits per image · full resolution · no watermark. <Link href={`/festivals/${f.slug}`} style={{ color: "var(--accent-strong)", fontWeight: 700 }}>About {f.name} →</Link>
        </p>
      </div>
    </div>
  );
}
