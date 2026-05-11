import type { GoogleReview } from "@/types/review";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";

function hashString(input: string): string {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (Math.imul(31, h) + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(36);
}

function timePartsFromDateString(dateStr: string): { timeLabel: string; dateIso?: string } {
  const ms = Date.parse(dateStr);
  if (Number.isNaN(ms)) {
    return { timeLabel: dateStr };
  }
  const dateIso = new Date(ms).toISOString();
  const timeLabel = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(ms);
  return { timeLabel, dateIso };
}

/**
 * Maps a validated {@link GoogleReview} into the homepage carousel model.
 * Use after parsing with {@link googleReviewRecordSchema} or trusted internal data.
 */
export function googleReviewToHomepageTestimonial(
  review: GoogleReview,
  options?: { index?: number },
): HomepageTestimonial {
  const index = options?.index ?? 0;
  const id =
    review.id ??
    `google-${review.region}-${hashString(`${review.author}|${review.date}|${review.text.slice(0, 48)}|${index}`)}`;
  const { timeLabel, dateIso } = timePartsFromDateString(review.date);

  return {
    id,
    author: review.author,
    rating: review.rating,
    text: review.text,
    timeLabel,
    dateIso,
    profilePhotoUrl: review.profilePhoto,
    reviewUrl: review.reviewUrl,
    source: "google",
  };
}

export function mapGoogleReviewsToHomepageTestimonials(
  reviews: GoogleReview[],
): HomepageTestimonial[] {
  return reviews.map((review, index) => googleReviewToHomepageTestimonial(review, { index }));
}
