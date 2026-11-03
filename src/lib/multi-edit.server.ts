import { gptCascade, resolveModel, ProviderUnavailableError } from "@/lib/ai-image";
import { falConfigured, falEditImages, FalError, type FalModel } from "@/lib/fal";
import { maxImagesFor } from "@/lib/app-presets";

/**
 * One generation from several input images (a reference plus the user's own
 * photo, or up to 14 people for one group photo). The chosen model goes
 * first, then the GPT cascade, then Nano Banana, so an unavailable endpoint
 * moves on instead of failing the request. A model that can't take this many
 * images is skipped rather than handed a request it would cut short. An
 * exhausted provider balance stops the loop, since every rung bills the same
 * account.
 */
export async function editWithImages(srcs: string[], prompt: string, preferred?: string, aspectRatio?: string): Promise<{ dataUrl: string; engine: FalModel }> {
  if (!falConfigured()) throw new Error("FAL_KEY is not configured.");
  const all = Array.from(new Set<FalModel>([resolveModel(preferred), ...gptCascade(), "nano-banana"]));
  const order = srcs.length > 2 ? all.filter((m) => maxImagesFor(m) >= srcs.length) : all;
  if (!order.length) throw new Error(`No image model takes ${srcs.length} photos at once.`);
  const errors: string[] = [];
  for (const model of order) {
    try {
      return { dataUrl: await falEditImages(srcs, prompt, model, 240_000, aspectRatio), engine: model };
    } catch (e) {
      if (e instanceof FalError && e.billingBlocked) throw new ProviderUnavailableError(e.message);
      errors.push(`${model}: ${e instanceof Error ? e.message : String(e)}`);
      console.error(`[multi-edit] ${model} failed`, e);
    }
  }
  throw new Error(errors.join(" | ") || "No image model could take this request.");
}
