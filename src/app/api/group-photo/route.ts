import { NextRequest, NextResponse } from "next/server";
import { checkAuth, checkEntitlement, withCredits } from "@/lib/auth";
import { editWithImages } from "@/lib/multi-edit.server";
import { recordGeneration } from "@/lib/ledger";
import { storeImage } from "@/lib/store-image";
import { CREDIT_COST } from "@/lib/plans";
import { userMessage } from "@/lib/user-message";
import { ASPECT_RATIOS, MULTI_PHOTO_MODELS, maxImagesFor } from "@/lib/app-presets";
import { buildGroupPrompt, ratioForCount, GROUP_SCENES, MAX_GROUP_PHOTOS, MIN_GROUP_PHOTOS } from "@/lib/group-photo";

export const runtime = "nodejs";
export const maxDuration = 300;

const RATIOS = new Set<string>(ASPECT_RATIOS);
const MODEL_IDS = new Set<string>(MULTI_PHOTO_MODELS.map((m) => m.id));

/**
 * Group Photo: up to 14 photos of single people in, one group photo out.
 * Same price as any AI generation, charged only when a picture comes back.
 */
export async function POST(req: NextRequest) {
  const { session, error } = await checkAuth(req);
  if (error) return error;

  let body: { images?: unknown; scene?: unknown; pose?: unknown; outfit?: unknown; details?: unknown; model?: unknown; aspectRatio?: unknown };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Something went wrong sending your request. Please try again." }, { status: 400 }); }

  const isImage = (v: unknown): v is string => typeof v === "string" && (/^https:\/\//.test(v) || /^data:image\/(png|jpeg|webp);base64,/.test(v));
  const images = Array.isArray(body.images) ? body.images : [];
  if (images.length < MIN_GROUP_PHOTOS) return NextResponse.json({ error: `Add at least ${MIN_GROUP_PHOTOS} photos to make a group photo.` }, { status: 400 });
  if (images.length > MAX_GROUP_PHOTOS) return NextResponse.json({ error: `Add up to ${MAX_GROUP_PHOTOS} photos.` }, { status: 400 });
  if (!images.every(isImage)) return NextResponse.json({ error: "One of your photos couldn't be read. Remove it and add it again." }, { status: 400 });
  const photos = images as string[];

  // A model that can't take this many photos falls back to Nano Banana Pro.
  const picked = typeof body.model === "string" && MODEL_IDS.has(body.model) ? body.model : MULTI_PHOTO_MODELS[0].id;
  const model = maxImagesFor(picked) >= photos.length ? picked : MULTI_PHOTO_MODELS[0].id;
  const aspectRatio = typeof body.aspectRatio === "string" && RATIOS.has(body.aspectRatio) ? body.aspectRatio : ratioForCount(photos.length);
  const prompt = buildGroupPrompt(photos.length, { scene: body.scene, pose: body.pose, outfit: body.outfit, details: body.details });
  const sceneLabel = (GROUP_SCENES.find((s) => s.id === body.scene) ?? GROUP_SCENES[0]).label;
  const label = `Group photo · ${photos.length} people`;
  const preset = `${photos.length} photos · ${sceneLabel}`;

  const blocked = await checkEntitlement(session!, "ai", "group-photo");
  if (blocked) return blocked;

  const startedAt = Date.now();
  try {
    const { dataUrl, engine } = await editWithImages(photos, prompt, model, aspectRatio);
    const [resultUrl, sourceUrl] = await Promise.all([
      storeImage(dataUrl, "group-photo-result", session!.userId),
      photos[0].startsWith("http") ? Promise.resolve(photos[0]) : storeImage(photos[0], "group-photo-source", session!.userId),
    ]);
    await recordGeneration({
      userId: session!.userId,
      tool: "group-photo",
      label,
      sourceUrl,
      resultUrl,
      model: engine,
      prompt: typeof body.details === "string" ? body.details.slice(0, 500) : undefined,
      preset,
      aspectRatio,
      creditsSpent: CREDIT_COST,
      status: "succeeded",
      durationMs: Date.now() - startedAt,
    });
    return withCredits({ dataUrl, resultUrl }, session!, "ai", req, "group-photo");
  } catch (e) {
    await recordGeneration({
      userId: session!.userId,
      tool: "group-photo",
      label,
      model,
      preset,
      aspectRatio,
      creditsSpent: 0,
      status: "failed",
      error: e instanceof Error ? e.message : String(e),
      durationMs: Date.now() - startedAt,
    });
    console.error("[group-photo]", e);
    const providerStatus = e && typeof e === "object" && "status" in e ? Number((e as { status?: unknown }).status) : 0;
    return NextResponse.json({ error: userMessage(e) }, { status: providerStatus === 422 ? 422 : 500 });
  }
}
