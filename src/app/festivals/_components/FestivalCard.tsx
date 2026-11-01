"use client";

import Link from "next/link";
import { useState } from "react";
import ExampleImage from "@/app/_components/ExampleImage";
import { isBeforeAfter } from "@/lib/app-creatives";
import type { FestivalSummary } from "@/lib/festival-summary";

/**
 * One festival: its portrait app's example image, its name and when it falls.
 * Used on /festivals, on each festival's "other festivals" row and in the
 * dashboard, with `href` set by the caller.
 */
export default function FestivalCard({ f, href, eager = false }: { f: FestivalSummary; href: string; eager?: boolean }) {
  const [hasBeforeAfter, setHasBeforeAfter] = useState(false);
  return (
    <Link
      href={href}
      className="jpt-lift"
      aria-label={`${f.name}: ${f.when}`}
      style={{ position: "relative", display: "block", aspectRatio: "4 / 5", borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface-2)", textDecoration: "none" }}
    >
      <ExampleImage
        sources={f.sources}
        alt={`${f.name} AI photo example`}
        slug={f.imageSlug}
        name={f.name}
        emoji={f.emoji}
        gradient={f.gradient}
        note=""
        sizes="(max-width: 640px) 50vw, 260px"
        eager={eager}
        onSourceLoad={(src) => setHasBeforeAfter(isBeforeAfter(src))}
        fitFor={(src) => (isBeforeAfter(src) ? "contain" : "cover")}
        // Above centre: the date sits over the top, and the name and badge
        // get the space below without covering the photo.
        containPosition="50% 28%"
      />
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 42%, rgba(8,8,10,.9) 100%)", pointerEvents: "none" }} />
      <span style={{ position: "absolute", top: 10, left: 10, fontSize: 11, fontWeight: 800, color: "#fff", background: "rgba(8,8,10,.62)", backdropFilter: "blur(6px)", borderRadius: 999, padding: "4px 9px", letterSpacing: ".02em" }}>
        {f.when}
      </span>
      <div style={{ position: "absolute", left: 14, right: 14, bottom: 12, color: "#fff" }}>
        <div style={{ fontSize: 16, fontWeight: 900, lineHeight: 1.2, textShadow: "0 1px 8px rgba(0,0,0,.5)" }}>
          <span aria-hidden>{f.emoji}</span> {f.name}
        </div>
        {/* The badge sits down here, clear of the picture's own Before/After labels. */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginTop: 4 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.8)", lineHeight: 1.4 }}>{f.appCount} one-tap apps</span>
          {hasBeforeAfter && <span style={{ fontSize: 9.5, fontWeight: 900, letterSpacing: ".06em", color: "#fff", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.25)", borderRadius: 999, padding: "2px 7px" }}>BEFORE → AFTER</span>}
        </div>
      </div>
    </Link>
  );
}
