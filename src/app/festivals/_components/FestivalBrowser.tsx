"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import FestivalCard from "./FestivalCard";
import { matchesQuery, REGIONS, type Region } from "@/lib/festivals";
import type { FestivalSummary } from "@/lib/festival-summary";

/**
 * Search and region filter over every festival.
 *
 * The server renders the full grid, so all 40 festivals are in the HTML for
 * search engines and for anyone before this hydrates; the filters only hide
 * cards. The query and region live in the URL (?q=, ?region=) with
 * replaceState, as the dashboard's app gallery does, so a filtered view can
 * be shared and survives a reload without a navigation per keystroke.
 */
export default function FestivalBrowser({
  festivals,
  hrefBase,
}: {
  festivals: FestivalSummary[];
  /** "/festivals" on the website, "/app/festivals" in the dashboard. */
  hrefBase: string;
}) {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<Region | "all">("all");
  const [ready, setReady] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const countId = useId();

  // Read the filters from the URL once, after hydration.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const r = p.get("region");
    setQ(p.get("q") ?? "");
    if (r && REGIONS.some((x) => x.id === r)) setRegion(r as Region);
    setReady(true);
  }, []);

  // …and write them back as they change, without adding history entries.
  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams(window.location.search);
    if (q.trim()) p.set("q", q.trim()); else p.delete("q");
    if (region !== "all") p.set("region", region); else p.delete("region");
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [q, region, ready]);

  const counts = useMemo(() => {
    const m = new Map<Region, number>();
    for (const f of festivals) for (const r of f.regions) m.set(r, (m.get(r) ?? 0) + 1);
    return m;
  }, [festivals]);

  const shown = useMemo(
    () => festivals.filter((f) => (region === "all" || f.regions.includes(region)) && matchesQuery(f.haystack, q)),
    [festivals, region, q]
  );

  const filtered = q.trim() !== "" || region !== "all";
  const clear = () => { setQ(""); setRegion("all"); input.current?.focus(); };

  const chip = (on: boolean): React.CSSProperties => ({
    display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
    padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
    border: `1px solid ${on ? "var(--accent-border)" : "var(--border)"}`,
    background: on ? "var(--accent-soft)" : "var(--surface)",
    color: on ? "var(--accent-strong)" : "var(--text-muted)",
  });

  return (
    <div>
      <form role="search" onSubmit={(e) => { e.preventDefault(); input.current?.blur(); }} style={{ maxWidth: 640, margin: "0 auto 16px" }}>
        <label htmlFor={`${countId}-q`} style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Search festivals</label>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 14px", height: 52, borderRadius: 14, border: "1.5px solid var(--border-strong)", background: "var(--surface)" }}>
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input
            ref={input}
            id={`${countId}-q`}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Escape") setQ(""); }}
            placeholder="Search a festival, country or month — e.g. Diwali, Mexico, December"
            autoComplete="off"
            aria-describedby={countId}
            style={{ flex: 1, minWidth: 0, height: "100%", background: "transparent", border: "none", outline: "none", color: "var(--text)", fontSize: 15, fontFamily: "inherit" }}
          />
          {q && (
            <button type="button" onClick={() => { setQ(""); input.current?.focus(); }} aria-label="Clear search" style={{ display: "flex", background: "none", border: "none", color: "var(--text-faint)", cursor: "pointer", padding: 4, fontSize: 18, lineHeight: 1 }}>×</button>
          )}
        </div>
      </form>

      <div role="group" aria-label="Filter by region" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 14 }}>
        <button type="button" aria-pressed={region === "all"} onClick={() => setRegion("all")} style={chip(region === "all")}>
          All <span style={{ opacity: 0.7 }}>{festivals.length}</span>
        </button>
        {REGIONS.filter((r) => counts.get(r.id)).map((r) => (
          <button key={r.id} type="button" aria-pressed={region === r.id} onClick={() => setRegion(region === r.id ? "all" : r.id)} style={chip(region === r.id)}>
            {r.label} <span style={{ opacity: 0.7 }}>{counts.get(r.id)}</span>
          </button>
        ))}
      </div>

      <p id={countId} aria-live="polite" style={{ textAlign: "center", fontSize: 13, color: "var(--text-faint)", margin: "0 0 22px", minHeight: 18 }}>
        {filtered ? `${shown.length} ${shown.length === 1 ? "festival" : "festivals"} found` : `${festivals.length} festivals`}
        {filtered && shown.length > 0 && (
          <> · <button type="button" onClick={clear} style={{ background: "none", border: "none", padding: 0, color: "var(--accent-strong)", fontWeight: 700, cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>Clear filters</button></>
        )}
      </p>

      {shown.length > 0 ? (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 190px), 1fr))", gap: 16 }}>
          {shown.map((f, i) => (
            <li key={f.slug} style={{ minWidth: 0 }}>
              <FestivalCard f={f} href={`${hrefBase}/${f.slug}`} eager={i < 4} />
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", padding: "40px 16px", border: "1px dashed var(--border-strong)", borderRadius: 18, background: "var(--surface)" }}>
          <p style={{ fontSize: 16, fontWeight: 800, margin: "0 0 6px", color: "var(--text)" }}>No festival matches &ldquo;{q.trim() || REGIONS.find((r) => r.id === region)?.label}&rdquo;</p>
          <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "0 0 16px" }}>Try another name, a country or a month, or browse every festival.</p>
          <button type="button" onClick={clear} style={{ ...chip(true), padding: "10px 18px" }}>Show all festivals</button>
        </div>
      )}
    </div>
  );
}
