import type { GoogleBusinessProofMetrics } from "@/types/google-business-proof";
import type { RegionSlug } from "@/types/region";

/** Per-studio GMB totals — keep aligned with live Google Business Profile listings. */
const googleBusinessProofByStudio: Record<
  Exclude<RegionSlug, "global">,
  GoogleBusinessProofMetrics
> = {
  bangkok: { rating: 4.9, reviewCount: 850, approximateCount: true },
  bali: { rating: 4.9, reviewCount: 820, approximateCount: true },
  phuket: { rating: 4.9, reviewCount: 830, approximateCount: true },
};

export { googleBusinessProofByStudio };
