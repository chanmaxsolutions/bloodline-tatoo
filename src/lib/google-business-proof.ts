import { googleBusinessProofByStudio } from "@/config/google-business-proof";
import { getRegionConfig } from "@/lib/region";
import type {
  GoogleBusinessProofMetrics,
  GoogleBusinessProofPresentation,
} from "@/types/google-business-proof";
import type { GlobalHeroTrustProofChip } from "@/types/global-hero-trust-proof";
import type { RegionSlug } from "@/types/region";

const STUDIO_REGIONS: Exclude<RegionSlug, "global">[] = ["bangkok", "bali", "phuket"];

function formatGoogleReviewCount(count: number, approximateCount = false): string {
  const formatted = count.toLocaleString("en-US");
  return approximateCount ? `${formatted}+` : formatted;
}

function buildGoogleBusinessProofChip(
  metrics: GoogleBusinessProofMetrics,
): GlobalHeroTrustProofChip {
  const ratingLabel = metrics.rating.toFixed(1);

  return {
    id: "google",
    brand: "google",
    accent: ratingLabel,
    rest: "★",
    suffix: ` · ${formatGoogleReviewCount(metrics.reviewCount, metrics.approximateCount)}`,
    suffixLabel: " Reviews on Google",
  };
}

function aggregateGlobalGoogleBusinessProof(): GoogleBusinessProofMetrics {
  let reviewCount = 0;
  let weightedRating = 0;

  for (const studioRegion of STUDIO_REGIONS) {
    const metrics = googleBusinessProofByStudio[studioRegion];
    reviewCount += metrics.reviewCount;
    weightedRating += metrics.rating * metrics.reviewCount;
  }

  return {
    rating: reviewCount > 0 ? weightedRating / reviewCount : 5.0,
    reviewCount,
    approximateCount: true,
  };
}

function getGoogleBusinessProofMetrics(region: RegionSlug): GoogleBusinessProofMetrics {
  if (region === "global") {
    return aggregateGlobalGoogleBusinessProof();
  }

  return googleBusinessProofByStudio[region];
}

interface GoogleBusinessTrustStat {
  label: string;
  value: string;
}

/**
 * Honest trust stats for homepage / about / reviews bands.
 * Global sums studio GMB reviews; regional surfaces that studio only.
 */
function resolveGoogleBusinessTrustStats(region: RegionSlug): {
  rating: GoogleBusinessTrustStat;
  reviewCount: GoogleBusinessTrustStat;
} {
  const metrics = getGoogleBusinessProofMetrics(region);

  return {
    rating: {
      label: "Google rating",
      value: metrics.rating.toFixed(1),
    },
    reviewCount: {
      label: region === "global" ? "Google reviews across studios" : "Five-star Google reviews",
      value: formatGoogleReviewCount(metrics.reviewCount, metrics.approximateCount),
    },
  };
}

function resolveHomepageTrustProofItems(region: RegionSlug): readonly GoogleBusinessTrustStat[] {
  const { rating, reviewCount } = resolveGoogleBusinessTrustStats(region);

  return [
    { label: "Google Rating", value: rating.value },
    { label: "Customers served per year", value: "5000+" },
    { label: reviewCount.label, value: reviewCount.value },
  ];
}

function resolveGoogleBusinessProofPresentation(
  region: RegionSlug,
): GoogleBusinessProofPresentation {
  if (region === "global") {
    return {
      href: "/reviews",
      chip: buildGoogleBusinessProofChip(aggregateGlobalGoogleBusinessProof()),
      isExternalLink: false,
    };
  }

  const regionConfig = getRegionConfig(region);
  const metrics = googleBusinessProofByStudio[region];

  return {
    href: regionConfig.googleBusinessProfileUrl,
    chip: buildGoogleBusinessProofChip(metrics),
    isExternalLink: true,
  };
}

export {
  aggregateGlobalGoogleBusinessProof,
  buildGoogleBusinessProofChip,
  formatGoogleReviewCount,
  getGoogleBusinessProofMetrics,
  resolveGoogleBusinessProofPresentation,
  resolveGoogleBusinessTrustStats,
  resolveHomepageTrustProofItems,
  STUDIO_REGIONS,
};
