"use client";

import Link from "next/link";
import { useState } from "react";
import ExampleImage from "@/app/_components/ExampleImage";
import { isMainImage } from "@/lib/app-creatives";
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
          onSourceLoad={(src) => setHasBeforeAfter(isMainImage(src))}
          fitFor={(src) => (isMainImage(src) ? "contain" : "cover")}
        />
        {hasBeforeAfter && <span style={{ position: "absolute", top: 10, left: 10, fontSize: 10, fontWeight: 900, letterSpacing: ".06em", color: "#fff", background: "rgba(8,8,10,.72)", border: "1px solid rgba(255,255,255,.25)", borderRadius: 999, padding: "5px 8px", backdropFilter: "blur(6px)" }}>BEFORE → AFTER</span>}
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
