"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/app/app/_components/Icon";
import { Dropdown, GenerateButton, PreviewPanel, SessionStrip, ErrorNote, toSendable, acceptImageFile, labelStyle, type StudioResult } from "@/app/app/_components/studio";
import SignInModal from "@/app/_components/SignInModal";
import { ASPECT_RATIOS, MULTI_PHOTO_MODELS, maxImagesFor, type AspectRatio } from "@/lib/app-presets";
import { GROUP_SCENES, GROUP_POSES, GROUP_OUTFITS, GROUP_DEFAULTS, MAX_GROUP_PHOTOS, MIN_GROUP_PHOTOS, BEST_GROUP_SIZE, ratioForCount } from "@/lib/group-photo";
import { CREDIT_COST } from "@/lib/plans";
import { publishCredits } from "@/lib/credits";
import { openPricing } from "@/lib/pricing-modal";
import { parseJsonResponse } from "@/lib/upload-prep";
import { userMessage } from "@/lib/user-message";
import { trackEvent } from "@/lib/analytics";
import { savePendingContext, loadPendingContext, clearPendingContext } from "@/lib/pending-image";

const TOOL = "group-photo";
const MAX_DETAILS = 500;
/** Request bodies over ~4.5 MB never reach the server; photos that failed to upload travel inline. */
const MAX_INLINE_BYTES = 4_000_000;
const STAGES = ["Reading every face…", "Arranging the group…", "Matching the light across everyone…", "Adding the finishing touches…"];
const RATIO_LABEL: Record<AspectRatio, string> = {
  "1:1": "1:1 · Square", "4:5": "4:5 · Portrait", "3:4": "3:4 · Portrait", "16:9": "16:9 · Wide", "9:16": "9:16 · Story", "3:2": "3:2 · Photo",
};
const choices = (list: { id: string; label: string }[]) => list.map((c) => ({ value: c.id, label: c.label }));

/**
 * Group Photo: up to 14 photos of single people, one group photo back.
 * Shared by the public /group-photo page and the dashboard's /app/group-photo.
 * Signed-out visitors can add their photos first; when Generate asks them to
 * sign in, the photos and settings are kept (IndexedDB) and come back here.
 */
export default function GroupPhotoTool() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [scene, setScene] = useState<string>(GROUP_DEFAULTS.scene);
  const [pose, setPose] = useState<string>(GROUP_DEFAULTS.pose);
  const [outfit, setOutfit] = useState<string>(GROUP_DEFAULTS.outfit);
  const [details, setDetails] = useState("");
  const [ratio, setRatio] = useState<AspectRatio>(ratioForCount(MIN_GROUP_PHOTOS));
  const [model, setModel] = useState<string>(MULTI_PHOTO_MODELS[0].id);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [results, setResults] = useState<StudioResult[]>([]);
  const [current, setCurrent] = useState<StudioResult | null>(null);
  const [signIn, setSignIn] = useState(false);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const ratioChosen = useRef(false);
  /** Uploaded copies of each photo, so a retry or a sign-in doesn't upload again. */
  const uploaded = useRef(new Map<string, string>());

  // Photos that went through sign-in come back here.
  useEffect(() => {
    void loadPendingContext().then((ctx) => {
      if (ctx?.tool !== TOOL || !ctx.images?.length) return;
      void clearPendingContext();
      setPhotos(ctx.images.slice(0, MAX_GROUP_PHOTOS));
      const o = ctx.options ?? {};
      if (o.scene) setScene(o.scene);
      if (o.pose) setPose(o.pose);
      if (o.outfit) setOutfit(o.outfit);
      if (o.details) setDetails(o.details.slice(0, MAX_DETAILS));
      if (o.model && MULTI_PHOTO_MODELS.some((m) => m.id === o.model)) setModel(o.model);
      if (o.ratio && (ASPECT_RATIOS as readonly string[]).includes(o.ratio)) { ratioChosen.current = true; setRatio(o.ratio as AspectRatio); }
      setNotice("Your photos are back. Press Generate to make your group photo.");
    });
  }, []);

  // Every sign-in path (this tool's, the navbar's) keeps the photos and settings.
  useEffect(() => {
    const w = window as unknown as { __jptPersistContext?: () => Promise<void> };
    if (!photos.length) return;
    w.__jptPersistContext = () => savePendingContext({
      tool: TOOL,
      images: photos.map((p) => uploaded.current.get(p) ?? p),
      options: { scene, pose, outfit, details, model, ratio: ratioChosen.current ? ratio : "" },
    });
    return () => { delete w.__jptPersistContext; };
  }, [photos, scene, pose, outfit, details, model, ratio]);

  // The shape follows the group's size until the person picks one.
  useEffect(() => {
    if (!ratioChosen.current) setRatio(ratioForCount(Math.max(photos.length, MIN_GROUP_PHOTOS)));
  }, [photos.length]);

  // Only the models that take this many photos.
  const models = MULTI_PHOTO_MODELS.filter((m) => maxImagesFor(m.id) >= photos.length);
  useEffect(() => {
    if (!models.some((m) => m.id === model)) setModel(models[0]?.id ?? MULTI_PHOTO_MODELS[0].id);
  }, [models, model]);

  const addFiles = async (files: File[]) => {
    setErr(null);
    setNotice(null);
    const picked = files.filter((f) => f.type.startsWith("image/"));
    if (!picked.length) { if (files.length) setErr("Use JPG, PNG or WebP photos."); return; }
    const room = MAX_GROUP_PHOTOS - photos.length;
    if (room <= 0) { setErr(`You can add up to ${MAX_GROUP_PHOTOS} photos.`); return; }
    const added: string[] = [];
    for (const f of picked.slice(0, room)) {
      try { added.push(await acceptImageFile(f)); } catch (e) { setErr((e as Error).message); }
    }
    if (added.length) setPhotos((prev) => [...prev, ...added].slice(0, MAX_GROUP_PHOTOS));
    if (picked.length > room) setErr(`Up to ${MAX_GROUP_PHOTOS} photos — ${picked.length - room} weren't added.`);
  };

  // Paste photos anywhere on the page, except into the text box.
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const files = Array.from(e.clipboardData?.files ?? []).filter((f) => f.type.startsWith("image/"));
      if (!files.length) return;
      e.preventDefault();
      void addFiles(files);
    };
    document.addEventListener("paste", onPaste);
    return () => document.removeEventListener("paste", onPaste);
  });

  const removeAt = (i: number) => { setErr(null); setPhotos((prev) => prev.filter((_, j) => j !== i)); };

  const generate = async () => {
    if (busy) return;
    if (photos.length < MIN_GROUP_PHOTOS) { setErr(`Add at least ${MIN_GROUP_PHOTOS} photos — one person in each.`); return; }
    setBusy(true);
    setErr(null);
    setNotice(null);
    trackEvent("group_photo_run", { photos: photos.length, scene, model });
    let images: string[];
    try {
      images = await Promise.all(photos.map(async (p) => {
        if (p.startsWith("http")) return p;
        const cached = uploaded.current.get(p);
        if (cached) return cached;
        const s = await toSendable(p);
        if (s.imageUrl) { uploaded.current.set(p, s.imageUrl); return s.imageUrl; }
        return s.dataUrl!;
      }));
    } catch {
      setBusy(false);
      setErr("A photo couldn't be prepared. Remove it and add it again.");
      return;
    }
    if (images.filter((s) => s.startsWith("data:")).reduce((n, s) => n + s.length, 0) > MAX_INLINE_BYTES) {
      setBusy(false);
      setErr("Some photos couldn't be uploaded. Check your connection and try again.");
      return;
    }
    try {
      const res = await fetch("/api/group-photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images, scene, pose, outfit, details: details.trim(), model, aspectRatio: ratio }),
      });
      type Body = { dataUrl?: string; resultUrl?: string; error?: string; credits?: number; upgradeRequired?: boolean };
      let data: Body = {};
      try { data = await parseJsonResponse<Body>(res); } catch (e) { data = { error: (e as Error).message }; }
      if (typeof data.credits === "number") publishCredits(data.credits);
      if (res.status === 401) { setSignIn(true); return; }
      if (res.status === 402 || res.status === 403 || data.upgradeRequired) { openPricing("Group Photo"); return; }
      const out = data.dataUrl || data.resultUrl;
      if (!res.ok || !out) { setErr(userMessage(data.error, "That didn't work. Please try again.")); return; }
      const r: StudioResult = { id: `${Date.now()}`, src: out, prompt: `Group photo of ${photos.length} people` };
      setResults((prev) => [r, ...prev].slice(0, 12));
      setCurrent(r);
    } catch {
      setErr("Could not reach the server. Check your connection and try again.");
    } finally {
      setBusy(false);
    }
  };

  const full = photos.length >= MAX_GROUP_PHOTOS;

  const controls = (
    <>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
          <span style={{ ...labelStyle, margin: 0 }}>Photos · {photos.length} / {MAX_GROUP_PHOTOS}</span>
          {photos.length > 0 && (
            <button onClick={() => { setPhotos([]); setErr(null); }} style={{ border: "none", background: "transparent", color: "var(--text-muted)", fontSize: 12, fontWeight: 700, fontFamily: "inherit", cursor: "pointer", padding: 0 }}>Clear all</button>
          )}
        </div>
        <div
          role="button"
          tabIndex={0}
          aria-label={`Add photos, up to ${MAX_GROUP_PHOTOS}`}
          data-testid="group-drop"
          onClick={() => { if (!full) fileRef.current?.click(); }}
          onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && !full) { e.preventDefault(); fileRef.current?.click(); } }}
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => { e.preventDefault(); setDrag(false); void addFiles(Array.from(e.dataTransfer.files ?? [])); }}
          style={{ borderRadius: 14, border: `1.5px dashed ${drag ? "var(--accent)" : "var(--accent-border, var(--border-strong))"}`, background: drag ? "var(--accent-soft)" : "var(--surface)", padding: photos.length ? 10 : "22px 14px", cursor: full ? "default" : "pointer", textAlign: "center" }}
        >
          {photos.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "var(--text-faint)" }}>
              <span style={{ width: 44, height: 44, borderRadius: 13, background: "var(--accent-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}><Icon name="group" size={22} /></span>
              <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>Add photos · up to {MAX_GROUP_PHOTOS}</span>
              <span style={{ fontSize: 12 }}>One person per photo · choose several at once, drop or paste · JPG, PNG or WebP</span>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(62px, 1fr))", gap: 8 }}>
              {photos.map((src, i) => (
                <div key={`${i}-${src.slice(-24)}`} className="jpt-a-pop" style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: 10, overflow: "hidden", border: "1px solid var(--border-strong)", background: "var(--surface-2)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Photo ${i + 1}`} referrerPolicy="no-referrer" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", left: 3, bottom: 3, fontSize: 10, fontWeight: 800, color: "#fff", background: "rgba(8,8,10,.75)", borderRadius: 5, padding: "1px 5px" }}>{i + 1}</span>
                  <button onClick={(e) => { e.stopPropagation(); removeAt(i); }} aria-label={`Remove photo ${i + 1}`} style={{ position: "absolute", top: 3, right: 3, width: 20, height: 20, borderRadius: "50%", border: "none", background: "rgba(8,8,10,.75)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}>
                    <Icon name="close" size={11} />
                  </button>
                </div>
              ))}
              {!full && (
                <span aria-hidden style={{ aspectRatio: "1 / 1", borderRadius: 10, border: "1.5px dashed var(--accent)", background: "var(--accent-soft)", color: "var(--accent)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1, fontSize: 10.5, fontWeight: 800 }}>
                  <Icon name="upload" size={14} />
                  Add
                </span>
              )}
            </div>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" multiple hidden onChange={(e) => { void addFiles(Array.from(e.target.files ?? [])); e.target.value = ""; }} />
        <p style={{ margin: "8px 0 0", fontSize: 11.5, lineHeight: 1.5, color: photos.length > BEST_GROUP_SIZE ? "var(--accent-strong)" : "var(--text-faint)" }}>
          {photos.length > BEST_GROUP_SIZE
            ? `Faces stay closest to each person in groups of up to about ${BEST_GROUP_SIZE}. Bigger groups work too — check every face before you share.`
            : "Tip: one clear, front-facing photo per person works best."}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Dropdown label="Scene" value={scene} onChange={setScene} options={choices(GROUP_SCENES)} />
        <Dropdown label="Pose" value={pose} onChange={setPose} options={choices(GROUP_POSES)} />
      </div>
      <Dropdown label="Outfits" value={outfit} onChange={setOutfit} options={choices(GROUP_OUTFITS)} />

      <div>
        <label htmlFor="group-details" style={labelStyle}>Add details (optional)</label>
        <textarea
          id="group-details"
          value={details}
          onChange={(e) => setDetails(e.target.value.slice(0, MAX_DETAILS))}
          rows={2}
          placeholder="e.g. everyone in white, a birthday cake in front"
          className="jpt-fieldbox"
          style={{ width: "100%", resize: "vertical", padding: "10px 12px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)", fontSize: 14, lineHeight: 1.5, fontFamily: "inherit", outline: "none" }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Dropdown label="Aspect ratio" value={ratio} onChange={(v) => { ratioChosen.current = true; setRatio(v); }} options={ASPECT_RATIOS.map((r) => ({ value: r, label: RATIO_LABEL[r] }))} />
        <Dropdown label="Model" value={model} onChange={setModel} options={models.map((m) => ({ value: m.id as string, label: m.label, hint: m.hint }))} />
      </div>

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
        {notice && <div className="jpt-a-pop" style={{ padding: "10px 12px", borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent)", fontSize: 13, fontWeight: 700 }}>{notice}</div>}
        <ErrorNote text={err} />
        <GenerateButton onClick={generate} disabled={photos.length < MIN_GROUP_PHOTOS} busy={busy} label="Generate group photo" />
        <div style={{ fontSize: 12, color: "var(--text-faint)", textAlign: "center" }}>
          {photos.length < MIN_GROUP_PHOTOS ? `Add at least ${MIN_GROUP_PHOTOS} photos to start · ` : ""}{CREDIT_COST} credits per group photo · no watermark
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="jpt-create-grid">
        <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 20, padding: 18, display: "flex", flexDirection: "column", gap: 16, minWidth: 0, textAlign: "left" }}>
          {controls}
        </div>
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
          <PreviewPanel
            busy={busy}
            result={current}
            stages={STAGES}
            ghost={photos[0]}
            emptyTitle="Your group photo will appear here"
            emptySub={`Add ${MIN_GROUP_PHOTOS} to ${MAX_GROUP_PHOTOS} photos, one person in each, then press Generate.`}
            onRegenerate={photos.length >= MIN_GROUP_PHOTOS ? generate : undefined}
          />
          <SessionStrip results={results} current={current} onPick={setCurrent} />
        </div>
      </div>
      {signIn && <SignInModal nextPath={typeof window !== "undefined" ? window.location.pathname : undefined} onClose={() => setSignIn(false)} />}
    </>
  );
}
