import Link from "next/link";
import ExampleImage from "@/app/_components/ExampleImage";
import { CREDIT_COST } from "@/lib/plans";
import type { FestivalAppCardData } from "@/lib/festival-summary";

/** One festival app: its single generated example, what it makes, and the way in. */
export default function FestivalAppCard({ a, eager = false }: { a: FestivalAppCardData; eager?: boolean }) {
  return (
    <Link
      href={`/creative/${a.slug}`}
      className="jpt-lift"
      style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", textDecoration: "none", color: "var(--text)" }}
    >
      <div style={{ position: "relative", aspectRatio: "4 / 5", background: "var(--surface-2)" }}>
        <ExampleImage
          sources={a.sources}
          alt={`Example made with ${a.name}`}
          slug={a.slug}
          name={a.name}
          emoji={a.emoji}
          gradient={a.gradient}
          sizes="(max-width: 640px) 100vw, 280px"
          eager={eager}
        />
        <span style={{ position: "absolute", top: 10, right: 10, fontSize: 11, fontWeight: 800, color: "#fff", background: "rgba(8,8,10,.62)", backdropFilter: "blur(6px)", borderRadius: 999, padding: "4px 9px" }}>
          {CREDIT_COST} credits
        </span>
      </div>
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <h3 style={{ fontSize: 16, fontWeight: 900, margin: 0, lineHeight: 1.25 }}>
          <span aria-hidden>{a.emoji}</span> {a.name}
        </h3>
        <p style={{ fontSize: 13.5, color: "var(--text-muted)", margin: 0, lineHeight: 1.5, flex: 1 }}>{a.blurb}</p>
        <span style={{ fontSize: 13.5, fontWeight: 800, color: "var(--accent-strong)", marginTop: 4 }}>Make yours →</span>
      </div>
    </Link>
  );
}
