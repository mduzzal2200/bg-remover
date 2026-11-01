"use client";

import Link from "next/link";
import { useState } from "react";
import ExampleImage from "@/app/_components/ExampleImage";
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
        onSourceLoad={(src) => setHasBeforeAfter(src.includes("-main.webp"))}
      />
      {hasBeforeAfter && <span style={{ position: "absolute", right: 10, top: 10, fontSize: 10, fontWeight: 900, letterSpacing: ".06em", color: "#fff", background: "rgba(8,8,10,.72)", border: "1px solid rgba(255,255,255,.25)", borderRadius: 999, padding: "5px 8px", backdropFilter: "blur(6px)" }}>BEFORE → AFTER</span>}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 42%, rgba(8,8,10,.9) 100%)", pointerEvents: "none" }} />
      <span style={{ position: "absolute", top: 10, left: 10, fontSize: 11, fontWeight: 800, color: "#fff", background: "rgba(8,8,10,.62)", backdropFilter: "blur(6px)", borderRadius: 999, padding: "4px 9px", letterSpacing: ".02em" }}>
        {f.when}
      </span>
      <div style={{ position: "absolute", left: 14, right: 14, bottom: 12, color: "#fff" }}>
        <div style={{ fontSize: 16, fontWeight: 900, lineHeight: 1.2, textShadow: "0 1px 8px rgba(0,0,0,.5)" }}>
          <span aria-hidden>{f.emoji}</span> {f.name}
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.8)", marginTop: 4, lineHeight: 1.4 }}>{f.appCount} one-tap apps</div>
      </div>
    </Link>
  );
}
