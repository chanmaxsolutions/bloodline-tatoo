import type { RegionSlug } from "@/types/region";

interface ReviewsPreviewCopy {
  eyebrow: string;
  heading: string;
  description: string;
}

function reviewsPreviewCopy(region: RegionSlug, regionName: string): ReviewsPreviewCopy {
  if (region === "global") {
    return {
      eyebrow: "Client proof",
      heading: "WHAT CLIENTS REPORT",
      description:
        "A sample from live Google reviews across our studios. Open any review on Google for the full thread.",
    };
  }

  return {
    eyebrow: "Client proof",
    heading: `GOOGLE REVIEWS IN ${regionName.toUpperCase()}`,
    description:
      "A curated selection from our live Google Business Profile. Open any review on Google to read the full thread.",
  };
}

export { reviewsPreviewCopy };
export type { ReviewsPreviewCopy };
