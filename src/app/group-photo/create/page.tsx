import { seoMeta } from "@/lib/seo/brand";
import { CREDIT_COST } from "@/lib/plans";
import type { Metadata } from "next";
import Link from "next/link";
import GroupPhotoTool from "../GroupPhotoTool";
import { MAX_GROUP_PHOTOS, MIN_GROUP_PHOTOS, BEST_GROUP_SIZE } from "@/lib/group-photo";

/**
 * Where "Make your group photo" leads: the tool on its own, without the
 * article around it. Anyone can open it; adding photos needs no account,
 * and Generate asks for one (the photos are kept through sign-in). The
 * article at /group-photo is the page for search, so this one isn't indexed.
 */
export const metadata: Metadata = seoMeta({
  title: "Make Your Group Photo",
  description: `Upload up to ${MAX_GROUP_PHOTOS} separate photos and get one group photo. ${CREDIT_COST} credits per photo.`,
  alternates: { canonical: "https://www.sjpt.io/group-photo" },
  robots: { index: false, follow: true },
});

const TIPS = [
  "One clear, front-facing photo per person.",
  `Faces stay closest in groups of up to about ${BEST_GROUP_SIZE}.`,
  "Count everyone in the result; Regenerate if someone is missing.",
];

export default function GroupPhotoCreatePage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font)", padding: "24px 16px 64px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--text-faint)", marginBottom: 10 }}>
          <Link href="/group-photo" style={{ color: "var(--text-muted)", textDecoration: "none" }}>AI Group Photo Maker</Link>
          <span aria-hidden> › </span>
          <span>Make your group photo</span>
        </nav>
        <h1 style={{ fontSize: "clamp(1.6rem,3.4vw,2.2rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 6px" }}>Make your group photo</h1>
        <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 18px", lineHeight: 1.55 }}>
          Add {MIN_GROUP_PHOTOS} to {MAX_GROUP_PHOTOS} photos, one person in each. Pick a background and framing, or leave them on Auto, and press Generate. {CREDIT_COST} credits per group photo.
        </p>
        <GroupPhotoTool />
        <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: 13, color: "var(--text-muted)" }}>
          {TIPS.map((t) => <li key={t}>✓ {t}</li>)}
          <li><Link href="/group-photo#examples" style={{ color: "var(--accent-strong)", fontWeight: 700 }}>See examples</Link></li>
        </ul>
      </div>
    </main>
  );
}
