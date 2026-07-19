import type { RegionSlug } from "@/types/region";

/** Request header set by middleware when a preview region override is active. */
export const PREVIEW_REGION_HEADER = "x-bloodline-preview-region" as const;

/** Cookie so Preview navigations keep the chosen region without `?region=` on every URL. */
export const PREVIEW_REGION_COOKIE = "bloodline-preview-region" as const;

const REGION_SLUGS = [
  "global",
  "bangkok",
  "bali",
  "phuket",
] as const satisfies readonly RegionSlug[];

function isRegionSlug(value: string): value is RegionSlug {
  return (REGION_SLUGS as readonly string[]).includes(value);
}

/**
 * Preview-only region switching (`?region=bali`).
 *
 * Allowed:
 * - Vercel Preview deployments (`VERCEL_ENV=preview`)
 * - Local `next dev` (`NODE_ENV=development`)
 *
 * Never allowed on VPS production or Vercel Production.
 */
function isPreviewRegionOverrideAllowed(): boolean {
  if (process.env.VERCEL_ENV === "preview") return true;
  if (process.env.NODE_ENV === "development") return true;
  return false;
}

function parseRegionSlug(value: string | null | undefined): RegionSlug | null {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  return isRegionSlug(normalized) ? normalized : null;
}

export { isPreviewRegionOverrideAllowed, isRegionSlug, parseRegionSlug, REGION_SLUGS };
