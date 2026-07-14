import type { GoogleBusinessProofMetrics } from "@/types/google-business-proof";
import type { RegionSlug } from "@/types/region";

/** Per-studio GMB totals — keep aligned with live Google Business Profile listings. */
const googleBusinessProofByStudio: Record<
  Exclude<RegionSlug, "global">,
  GoogleBusinessProofMetrics
> = {
  bangkok: { rating: 5.0, reviewCount: 584, approximateCount: true },
  bali: { rating: 5.0, reviewCount: 519, approximateCount: true },
  phuket: { rating: 5.0, reviewCount: 1548, approximateCount: true },
};

export { googleBusinessProofByStudio };
