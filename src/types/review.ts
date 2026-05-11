import type { RegionSlug } from "@/types/region";

export interface GoogleReview {
  /** Stable id when returned from Places / cached JSON (for keys and dedupe). */
  id?: string;
  author: string;
  rating: number;
  text: string;
  /** ISO 8601 or API date string; mapper derives display `timeLabel` when possible. */
  date: string;
  region: Exclude<RegionSlug, "global">;
  profilePhoto?: string;
  reviewUrl?: string;
  source: "google";
}
