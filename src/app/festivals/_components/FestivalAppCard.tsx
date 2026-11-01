"use client";

import Link from "next/link";
import { useState } from "react";
import ExampleImage from "@/app/_components/ExampleImage";
import { isBeforeAfter } from "@/lib/app-creatives";
import { CREDIT_COST } from "@/lib/plans";
import type { FestivalAppCardData } from "@/lib/festival-summary";

/** One festival app: its single generated example, what it makes, and the way in. */
export default function FestivalAppCard({ a, eager = false }: { a: FestivalAppCardData; eager?: boolean }) {
  const [hasBeforeAfter, setHasBeforeAfter] = useState(false);
  return (
    <Link
      href={`/creative/${a.slug}`}
      className="jpt-lift"
      style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", textDecoration: "none", color: "var(--text)" }}
    >
      <div style={{ position: "relative", aspectRatio: a.ratio, background: "var(--surface-2)" }}>
        <ExampleImage
          sources={a.sources}
          alt={`Example made with ${a.name}`}
          slug={a.slug}
          name={a.name}
          emoji={a.emoji}
          gradient={a.gradient}
          sizes="(max-width: 640px) 100vw, 280px"
          eager={eager}
          onSourceLoad={(src) => setHasBeforeAfter(isBeforeAfter(src))}
          fitFor={(src) => (isBeforeAfter(src) ? "contain" : "cover")}
        />
      </div>
      <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        {/* Under the picture, not over it: the before/after carries its own labels. */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {hasBeforeAfter && <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: ".06em", color: "var(--accent-strong)", background: "var(--accent-soft)", border: "1px solid var(--accent-border)", borderRadius: 999, padding: "3px 8px" }}>BEFORE → AFTER</span>}
          <span style={{ fontSize: 11, fontWeight: 800, color: "var(--text-muted)", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 999, padding: "2px 8px" }}>
            {CREDIT_COST} credits
          </span>
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 900, margin: 0, lineHeight: 1.25 }}>
          <span aria-hidden>{a.emoji}</span> {a.name}
        </h3>
        <p style={{ fontSize: 13.5, color: "var(--text-muted)", margin: 0, lineHeight: 1.5, flex: 1 }}>{a.blurb}</p>
        <span style={{ fontSize: 13.5, fontWeight: 800, color: "var(--accent-strong)", marginTop: 4 }}>Make yours →</span>
      </div>
    </Link>
  );
}
