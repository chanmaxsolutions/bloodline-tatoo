import type { TattooStyleSlug } from "@/types/tattoo-style";

export interface TattooStyleDetailProofImage {
  src: string;
  alt: string;
  /** Lower values surface first in portfolio (defaults to proof-pool array index). */
  sortOrder?: number;
  /** ISO-8601; defaults to JPEG file mtime when omitted. */
  uploadedAt?: string;
}

/** Exactly three concise pointers for approach band cards and columns. */
export type ApproachPointerTriplet = readonly [string, string, string];

export interface TattooStyleFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TattooStyleDetailContent {
  slug: TattooStyleSlug;
  /** SEO meta; falls back to lead when omitted. */
  metaDescription?: string;
  lead: string;
  /** Two editorial paragraphs between hero and approach spec. */
  overview: readonly [string, string];
  /** Approach band headline (single line). */
  approachHeadline: string;
  /** Approach band intro; target ~4–5 lines at desktop measure. */
  approachIntro: string;
  philosophyBullets: ApproachPointerTriplet;
  idealForBullets: ApproachPointerTriplet;
  sessionBullets: ApproachPointerTriplet;
  /** Page header cover; defaults to `/images/tattoo-styles/{slug}/hero.webp`. */
  heroImage?: TattooStyleDetailProofImage;
  /** Approach statement background; defaults to `/images/tattoo-styles/{slug}/approach.webp`. */
  approachImage?: TattooStyleDetailProofImage;
  proofEyebrow: string;
  proofHeading: string;
  proofDescription: string;
  /**
   * Full proof library for this style (portfolio + random gallery).
   * When set, the detail grid shows 8 random picks per request.
   */
  proofPool?: readonly TattooStyleDetailProofImage[];
  /** Legacy fixed set; used when `proofPool` is empty. */
  proofImages?: readonly TattooStyleDetailProofImage[];
}

export interface ResolvedTattooStyleDetailPage {
  slug: TattooStyleSlug;
  title: string;
  shortDescription: string;
  heroImageSrc: string;
  heroImageAlt: string;
  metaDescription: string;
  lead: string;
  overview: readonly [string, string];
  approachHeadline: string;
  approachIntro: string;
  philosophyBullets: ApproachPointerTriplet;
  idealForBullets: ApproachPointerTriplet;
  sessionBullets: ApproachPointerTriplet;
  approachImageSrc: string;
  approachImageAlt: string;
  proofEyebrow: string;
  proofHeading: string;
  proofDescription: string;
  proofImages: readonly TattooStyleDetailProofImage[];
  proofPortfolioHref: string;
  relatedSlugs: readonly TattooStyleSlug[];
  faqItems: readonly TattooStyleFaqItem[];
}
