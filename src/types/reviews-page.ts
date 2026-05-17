import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

export interface ReviewsPageIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface ReviewsPageTrustStat {
  label: string;
  value: string;
}

export interface ReviewsPageGoogleStudioLink {
  region: Exclude<RegionSlug, "global">;
  studioName: string;
  googleBusinessProfileUrl: string;
}

/** Cached Google review row for the reviews page grid. */
export interface ReviewsPageTestimonial extends HomepageTestimonial {
  studioRegion: Exclude<RegionSlug, "global">;
  studioName: string;
}

export interface ReviewsPageContent {
  intro: ReviewsPageIntro;
  trustStats: ReviewsPageTrustStat[];
  testimonials: readonly ReviewsPageTestimonial[];
  googleBusinessProfileUrl: string;
  studioLinks: ReviewsPageGoogleStudioLink[];
}
