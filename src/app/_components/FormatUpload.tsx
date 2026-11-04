"use client";

import { useRef, useState } from "react";
import { savePendingContext } from "@/lib/pending-image";

/**
 * The upload box on the crop / convert / compress size pages. It hands the
 * photo to the editor the same way the tool pages do (IndexedDB, then
 * /editor?tool=…), which keeps the original file — full size and in its own
 * format — so a GIF, BMP, SVG or AVIF opens in the converter even though the
 * editor's own file picker only takes JPG, PNG and WebP.
 */
export default function FormatUpload({ tool, href, label, hint }: { tool: string; href: string; label: string; hint: string }) {
  const input = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const [busy, setBusy] = useState(false);

  const open = async (file: File | undefined) => {
    if (!file || busy) return;
    if (!file.type.startsWith("image/") && !/\.(svg|avif|heic|bmp|gif)$/i.test(file.name)) return;
    setBusy(true);
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result as string);
      r.onerror = reject;
      r.readAsDataURL(file);
    }).catch(() => "");
    if (!dataUrl) { setBusy(false); return; }
    await savePendingContext({ image: dataUrl, tool });
    window.location.href = href;
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); void open(e.dataTransfer.files?.[0]); }}
      onClick={() => input.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); input.current?.click(); } }}
      style={{
        maxWidth: 560, margin: "0 auto", cursor: "pointer", borderRadius: 20, padding: "28px 24px",
        border: `2px dashed ${over ? "var(--accent)" : "var(--border-strong, var(--border))"}`,
        background: over ? "var(--accent-soft)" : "var(--surface-2)", transition: "border-color .15s, background .15s",
      }}
    >
      <input ref={input} type="file" accept="image/*,.svg,.avif,.bmp,.gif" style={{ display: "none" }} onChange={(e) => { void open(e.target.files?.[0]); e.target.value = ""; }} />
      <div style={{ fontSize: 26, marginBottom: 8 }} aria-hidden>📤</div>
      <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>{busy ? "Opening…" : label}</div>
      <div style={{ fontSize: 13, color: "var(--text-faint)" }}>{hint}</div>
    </div>
  );
}
