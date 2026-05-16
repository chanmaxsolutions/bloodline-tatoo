import type { TattooStyleSlug } from "@/types/tattoo-style";

export interface TattooStyleDetailProofImage {
  src: string;
  alt: string;
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
  /** Approach band headline (single line). */
  approachHeadline: string;
  /** Approach band intro; target ~4–5 lines at desktop measure. */
  approachIntro: string;
  philosophyBullets: ApproachPointerTriplet;
  idealForBullets: ApproachPointerTriplet;
  sessionBullets: ApproachPointerTriplet;
  /** Overrides catalog-only hero when more than one proof frame is needed. */
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
  approachHeadline: string;
  approachIntro: string;
  philosophyBullets: ApproachPointerTriplet;
  idealForBullets: ApproachPointerTriplet;
  sessionBullets: ApproachPointerTriplet;
  proofImages: readonly TattooStyleDetailProofImage[];
  relatedSlugs: readonly TattooStyleSlug[];
  faqItems: readonly TattooStyleFaqItem[];
}
