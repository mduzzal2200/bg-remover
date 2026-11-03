import { seoMeta } from "@/lib/seo/brand";
import type { Metadata } from "next";
import GroupPhotoTool from "@/app/group-photo/GroupPhotoTool";
import { CREDIT_COST } from "@/lib/plans";
import { MAX_GROUP_PHOTOS } from "@/lib/group-photo";

export const metadata: Metadata = seoMeta({ title: "Group Photo", robots: { index: false, follow: false } });

/** Group Photo in the dashboard: the same tool as /group-photo, framed like Create and Recreate. */
export default function GroupPhotoPage() {
  return (
    <div style={{ padding: "22px 24px 60px" }}>
      <div style={{ maxWidth: 1600 }}>
        <div className="jpt-a-up" style={{ marginBottom: 18 }}>
          <h1 style={{ fontSize: "clamp(1.5rem,2.6vw,1.9rem)", fontWeight: 900, letterSpacing: "-0.03em", margin: 0 }}>Group Photo</h1>
          <p style={{ margin: "5px 0 0", fontSize: 14, color: "var(--text-muted)" }}>Upload up to {MAX_GROUP_PHOTOS} photos of single people and get one natural group photo with everyone in it. {CREDIT_COST} credits per photo.</p>
        </div>
        <GroupPhotoTool />
      </div>
    </div>
  );
}
