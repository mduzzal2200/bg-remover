"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface ShowcasePerson { label: string; src: string | null; hue: number; skin: string; hair: string; long: boolean }
export interface ShowcaseExample {
  id: string;
  title: string;
  caption: string;
  scene: string;
  ratio: string;
  people: ShowcasePerson[];
  /** The group photo, or null to draw the illustrated stand-in. */
  result: string | null;
}

type Phase = "in" | "hold" | "merge" | "result";
/** Where each separate photo sits before they merge: an ellipse around the middle, gently tilted. */
function slot(i: number, n: number) {
  const a = (-90 + 180 / n + (i * 360) / n) * (Math.PI / 180);
  const rx = n > 5 ? 35 : 31, ry = n > 5 ? 27 : 25;
  return { x: 50 + rx * Math.cos(a), y: 53 + ry * Math.sin(a), r: (i % 2 ? 1 : -1) * (4 + ((i * 3) % 6)) };
}
const CENTER_Y = 53;

/**
 * The animated before → after at the top of /group-photo: the separate photos
 * arrive one by one, fly together, and the group photo develops in their
 * place. Then the next example. Pauses on hover; with reduced motion it
 * simply shows the photos and the result side by side.
 */
export default function GroupShowcase({ examples }: { examples: ShowcaseExample[] }) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("in");
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ex = examples[idx];
  const n = ex.people.length;

  useEffect(() => {
    try { setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch {}
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const next: Record<Phase, [Phase, number]> = {
      in: ["hold", n * 160 + 700],
      hold: ["merge", 1300],
      merge: ["result", 950],
      result: ["in", 4200],
    };
    const [to, ms] = next[phase];
    timer.current = setTimeout(() => {
      if (phase === "result") { setIdx((i) => (i + 1) % examples.length); setPhase("in"); }
      else setPhase(to);
    }, ms);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [phase, paused, reduced, n, examples.length]);

  const pick = (i: number) => { setIdx(i); setPhase(reduced ? "result" : "in"); };
  const before = phase === "in" || phase === "hold";
  const showResult = reduced || phase === "result";

  return (
    <div style={{ width: "100%", maxWidth: 620, margin: "0 auto", display: "grid", gap: 12 }}>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="img"
        aria-label={`${ex.title} example: ${n} separate photos (${ex.people.map((p) => p.label).join(", ")}) turned into one group photo`}
        style={{ position: "relative", width: "100%", aspectRatio: "5 / 4", borderRadius: 24, overflow: "hidden", border: "1px solid var(--border)", background: "radial-gradient(120% 90% at 50% 40%, var(--surface-2) 0%, var(--bg-elevated) 70%)", boxShadow: "var(--shadow-lg)" }}
      >
        {/* faint grid, like a lightbox table */}
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.35, maskImage: "radial-gradient(circle at 50% 45%, #000 0%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle at 50% 45%, #000 0%, transparent 75%)" }} />

        {/* the phase label */}
        <span style={{ position: "absolute", top: 14, left: 14, zIndex: 5, display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 800, letterSpacing: ".04em", textTransform: "uppercase", padding: "6px 11px", borderRadius: 999, color: showResult ? "#fff" : "var(--text)", background: showResult ? "var(--grad-strong)" : "rgba(10,10,14,.62)", border: showResult ? "none" : "1px solid var(--border)", backdropFilter: "blur(6px)", transition: "background .4s ease" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: showResult ? "#fff" : "var(--accent)" }} />
          {showResult ? "After · 1 group photo" : phase === "merge" ? "Putting everyone together…" : `Before · ${n} separate photos`}
        </span>

        {/* the separate photos */}
        {!reduced && ex.people.map((p, i) => {
          const s = slot(i, n);
          const cw = n > 5 ? 19 : n > 4 ? 21 : 23;
          // To the middle of the stage, in the card's own units (the stage is 5:4, a card 4:5).
          const dx = ((50 - s.x) * 100) / cw;
          const dy = ((CENTER_Y - s.y) * 100) / (cw * 1.5625);
          const merging = phase === "merge" || phase === "result";
          return (
            <div
              key={`${ex.id}-${i}`}
              style={{
                position: "absolute", left: `${s.x}%`, top: `${s.y}%`, width: `${cw}%`, aspectRatio: "4 / 5", zIndex: 3,
                transform: merging
                  ? `translate(-50%,-50%) translate(${dx}%, ${dy}%) scale(.25) rotate(0deg)`
                  : `translate(-50%,-50%) rotate(${s.r}deg)`,
                opacity: merging ? 0 : 1,
                animation: phase === "in" ? `gpCardIn .55s cubic-bezier(.2,.9,.3,1.2) ${i * 160}ms both` : undefined,
                transition: "transform .9s cubic-bezier(.6,0,.3,1), opacity .8s ease",
                transitionDelay: merging ? `${i * 40}ms` : "0ms",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%", padding: "6% 6% 18%", background: "#F7F5F0", borderRadius: 10, boxShadow: "0 14px 34px rgba(0,0,0,.45)" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 4, overflow: "hidden", background: "#ddd" }}>
                  {p.src
                    ? <Image src={p.src} alt={`${p.label}'s photo`} fill sizes="150px" style={{ objectFit: "cover" }} />
                    : <Avatar person={p} />}
                </div>
                <span style={{ position: "absolute", left: 0, right: 0, bottom: "3%", textAlign: "center", fontSize: "clamp(9px, 1.6vw, 12px)", fontWeight: 800, color: "#2a2a2a", fontFamily: "var(--font)" }}>{p.label}</span>
              </div>
            </div>
          );
        })}

        {/* the merge flash */}
        {!reduced && (
          <div aria-hidden style={{ position: "absolute", left: "50%", top: `${CENTER_Y}%`, width: "38%", aspectRatio: "1 / 1", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,140,60,.75) 0%, rgba(255,92,112,.35) 35%, transparent 70%)", opacity: phase === "merge" ? 1 : 0, scale: phase === "merge" ? "1.25" : ".6", transition: "opacity .45s ease, scale .9s ease", zIndex: 2 }} />
        )}

        {/* the group photo */}
        <div
          style={{
            position: "absolute", left: "50%", top: reduced ? "50%" : "46%", width: "86%", aspectRatio: ex.ratio.replace(":", " / "), maxHeight: "74%", zIndex: 4,
            transform: `translate(-50%,-50%) scale(${showResult ? 1 : 0.86})`,
            opacity: showResult ? 1 : 0,
            filter: showResult ? "none" : "blur(14px)",
            transition: "transform .9s cubic-bezier(.2,.9,.3,1), opacity .7s ease, filter .9s ease",
            borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.08)",
          }}
        >
          {ex.result
            ? <Image src={ex.result} alt={`${ex.title} group photo made from ${n} separate photos`} fill sizes="(max-width: 700px) 90vw, 560px" style={{ objectFit: "cover" }} priority={idx === 0} />
            : <GroupIllustration scene={ex.scene} people={ex.people} />}
          {!ex.result && <span style={{ position: "absolute", right: 8, bottom: 8, fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.85)", background: "rgba(0,0,0,.35)", borderRadius: 6, padding: "2px 6px" }}>Illustration</span>}
        </div>

        {/* who went in */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 14, zIndex: 5, display: "flex", justifyContent: "center", alignItems: "center", gap: 6, opacity: showResult ? 1 : 0, transform: showResult ? "none" : "translateY(8px)", transition: "opacity .5s ease .35s, transform .5s ease .35s" }}>
          {ex.people.map((p, i) => (
            <span key={i} title={p.label} style={{ position: "relative", width: 30, height: 30, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--bg-elevated)", boxShadow: "0 0 0 1.5px var(--accent)", background: "#ddd", marginLeft: i ? -8 : 0 }}>
              {p.src ? <Image src={p.src} alt="" fill sizes="30px" style={{ objectFit: "cover" }} /> : <Avatar person={p} />}
            </span>
          ))}
          <span style={{ marginLeft: 8, fontSize: 12, fontWeight: 800, color: "var(--text)", background: "rgba(10,10,14,.62)", border: "1px solid var(--border)", borderRadius: 999, padding: "4px 10px" }}>{n} photos in · 1 out</span>
        </div>
      </div>

      {/* example picker */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }} role="tablist" aria-label="Examples">
        {examples.map((e, i) => (
          <button
            key={e.id}
            role="tab"
            aria-selected={i === idx}
            onClick={() => pick(i)}
            style={{ position: "relative", overflow: "hidden", padding: "8px 14px", borderRadius: 999, border: `1px solid ${i === idx ? "var(--accent-border)" : "var(--border)"}`, background: i === idx ? "var(--accent-soft)" : "var(--surface)", color: i === idx ? "var(--accent-strong)" : "var(--text-muted)", fontWeight: 800, fontSize: 13, fontFamily: "inherit", cursor: "pointer" }}
          >
            {e.title} · {e.people.length} photos
            {i === idx && !reduced && !paused && (
              <span key={`${idx}-${phase === "in" ? "a" : "b"}`} aria-hidden style={{ position: "absolute", left: 0, bottom: 0, height: 2, background: "var(--accent)", animation: `gpProgress ${(n * 160 + 700 + 1300 + 950 + 4200) / 1000}s linear both`, animationPlayState: "running" }} />
            )}
          </button>
        ))}
      </div>
      <p style={{ margin: 0, textAlign: "center", fontSize: 13.5, color: "var(--text-muted)" }}>{ex.caption}</p>

      <style>{`
        @keyframes gpCardIn { from { opacity: 0; transform: translate(-50%,-50%) translateY(40px) scale(.7) rotate(-14deg); } }
        @keyframes gpProgress { from { width: 0; } to { width: 100%; } }
      `}</style>
    </div>
  );
}

/** A simple drawn portrait, standing in for a photo that hasn't been made yet. */
export function Avatar({ person: p }: { person: ShowcasePerson }) {
  const id = `av${p.hue}${p.label.replace(/\W/g, "")}`;
  return (
    <svg viewBox="0 0 80 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden style={{ display: "block" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={`hsl(${p.hue} 30% 84%)`} /><stop offset="1" stopColor={`hsl(${p.hue} 25% 70%)`} /></linearGradient>
      </defs>
      <rect width="80" height="100" fill={`url(#${id})`} />
      {p.long && <path d="M23 44 C20 20 60 20 57 44 L58 70 L22 70 Z" fill={p.hair} />}
      <path d="M8 100 C10 74 24 66 40 66 C56 66 70 74 72 100 Z" fill={`hsl(${p.hue} 55% 42%)`} />
      <rect x="34" y="54" width="12" height="14" rx="5" fill={p.skin} />
      <ellipse cx="40" cy="42" rx="15" ry="18" fill={p.skin} />
      <path d={p.long ? "M24 40 C23 20 57 20 56 40 C50 30 32 28 24 40 Z" : "M25 38 C24 22 56 22 55 38 C50 31 31 30 25 38 Z"} fill={p.hair} />
      <circle cx="34" cy="43" r="1.6" fill="#2a2a2a" /><circle cx="46" cy="43" r="1.6" fill="#2a2a2a" />
      <path d="M35 51 Q40 55 45 51" stroke="#8a4b3a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const SCENES: Record<string, { sky: [string, string]; ground: string; extra?: React.ReactNode }> = {
  park: { sky: ["#9FD3F7", "#E9F6FF"], ground: "#6DB86A", extra: <><circle cx="40" cy="88" r="26" fill="#4E9A55" /><circle cx="262" cy="84" r="30" fill="#4E9A55" /><rect x="37" y="100" width="6" height="30" fill="#6B4A2E" /><rect x="259" y="100" width="6" height="30" fill="#6B4A2E" /></> },
  beach: { sky: ["#F7A26B", "#FCD9B0"], ground: "#EFD5A2", extra: <><circle cx="230" cy="70" r="18" fill="#FFE3A3" opacity=".9" /><rect x="0" y="112" width="300" height="18" fill="#3A7BD5" opacity=".85" /></> },
  office: { sky: ["#E9E4DC", "#F5F2EC"], ground: "#B9AE9F", extra: <><rect x="24" y="30" width="70" height="60" rx="3" fill="#CFE6F5" stroke="#d8d2c8" strokeWidth="3" /><rect x="206" y="30" width="70" height="60" rx="3" fill="#CFE6F5" stroke="#d8d2c8" strokeWidth="3" /><rect x="140" y="70" width="12" height="40" rx="3" fill="#5E8C5A" /></> },
};

/** The group photo drawn as an illustration: the same people, together in the example's scene. */
function GroupIllustration({ scene, people }: { scene: string; people: ShowcasePerson[] }) {
  const s = SCENES[scene] ?? SCENES.park;
  const n = people.length;
  // One row, shoulders overlapping a little, as a real group stands; two rows only past six.
  const back = n > 6 ? people.slice(0, Math.ceil(n / 2)) : [];
  const front = n > 6 ? people.slice(Math.ceil(n / 2)) : people;
  const scale = n <= 4 ? 1.25 : n === 5 ? 1.1 : n === 6 ? 0.98 : 0.9;
  const row = (list: ShowcasePerson[], y: number, scale: number) => {
    const gap = 300 / (list.length + 1);
    return list.map((p, i) => (
      <g key={`${y}-${i}`} transform={`translate(${gap * (i + 1)} ${y + (i % 2 ? 3 : -2)}) scale(${scale})`}>
        {p.long && <path d="M-15 2 C-17 -18 17 -18 15 2 L15 26 L-15 26 Z" fill={p.hair} />}
        <path d="M-26 70 C-24 30 -14 22 0 22 C14 22 24 30 26 70 Z" fill={`hsl(${p.hue} 55% 45%)`} />
        <ellipse cx="0" cy="4" rx="13" ry="15" fill={p.skin} />
        <path d={p.long ? "M-14 1 C-15 -17 15 -17 14 1 C9 -7 -9 -8 -14 1 Z" : "M-13 -1 C-14 -15 14 -15 13 -1 C9 -7 -9 -8 -13 -1 Z"} fill={p.hair} />
        <circle cx="-5" cy="4" r="1.4" fill="#2a2a2a" /><circle cx="5" cy="4" r="1.4" fill="#2a2a2a" />
        <path d="M-5 11 Q0 15 5 11" stroke="#8a4b3a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </g>
    ));
  };
  return (
    <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden style={{ display: "block" }}>
      <defs><linearGradient id={`sky-${scene}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={s.sky[0]} /><stop offset="1" stopColor={s.sky[1]} /></linearGradient></defs>
      <rect width="300" height="200" fill={`url(#sky-${scene})`} />
      {s.extra}
      <rect x="0" y="128" width="300" height="72" fill={s.ground} />
      {row(back, 92, scale * 0.9)}
      {row(front, back.length ? 126 : 114, scale)}
    </svg>
  );
}

/** One example laid out flat: the separate photos, an arrow, the group photo. */
export function ExampleCard({ ex }: { ex: ShowcaseExample }) {
  const n = ex.people.length;
  return (
    <figure style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 18, alignItems: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 18 }}>
      <div style={{ display: "grid", gap: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-faint)" }}>Before · {n} separate photos</span>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${n > 4 ? 3 : 2}, 1fr)`, gap: 8 }}>
          {ex.people.map((p, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 10, overflow: "hidden", border: "1px solid var(--border)", background: "#ddd" }}>
              {p.src ? <Image src={p.src} alt={`${p.label}'s separate photo`} fill sizes="140px" style={{ objectFit: "cover" }} /> : <Avatar person={p} />}
              <span style={{ position: "absolute", left: 5, bottom: 5, fontSize: 10.5, fontWeight: 800, color: "#fff", background: "rgba(8,8,10,.7)", borderRadius: 6, padding: "2px 6px" }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent-strong)" }}>After · 1 group photo</span>
        <div style={{ position: "relative", aspectRatio: ex.ratio.replace(":", " / "), borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border)" }}>
          {ex.result
            ? <Image src={ex.result} alt={`${ex.title} group photo made from ${n} separate photos: ${ex.people.map((p) => p.label).join(", ")}`} fill sizes="(max-width: 700px) 92vw, 520px" style={{ objectFit: "cover" }} />
            : <GroupIllustration scene={ex.scene} people={ex.people} />}
          {!ex.result && <span style={{ position: "absolute", right: 8, bottom: 8, fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.85)", background: "rgba(0,0,0,.35)", borderRadius: 6, padding: "2px 6px" }}>Illustration</span>}
        </div>
        <figcaption style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.55 }}><strong style={{ color: "var(--text)" }}>{ex.title}.</strong> {ex.caption}</figcaption>
      </div>
    </figure>
  );
}
