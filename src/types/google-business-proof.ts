import type { GlobalHeroTrustProofChip } from "@/types/global-hero-trust-proof";

/** Verified Google Business Profile figures — update when GMB totals change. */
interface GoogleBusinessProofMetrics {
  rating: number;
  reviewCount: number;
  /** When true, display count with a trailing “+” (e.g. 2,500+). */
  approximateCount?: boolean;
}

interface GoogleBusinessProofPresentation {
  href: string;
  chip: GlobalHeroTrustProofChip;
  isExternalLink: boolean;
}

export type { GoogleBusinessProofMetrics, GoogleBusinessProofPresentation };
