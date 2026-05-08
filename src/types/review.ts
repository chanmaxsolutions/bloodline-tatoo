import type { RegionSlug } from "@/types/region";

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  date: string;
  region: Exclude<RegionSlug, "global">;
  profilePhoto?: string;
  reviewUrl?: string;
  source: "google";
}
