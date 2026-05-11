/**
 * Normalized row for the homepage Google-style carousel.
 * Curated config and ingested {@link GoogleReview} both map into this shape.
 */
export interface HomepageTestimonial {
  id: string;
  author: string;
  rating: number;
  /** Review body (Google field `text`). */
  text: string;
  /** Short time line shown next to the author (relative copy or formatted date). */
  timeLabel: string;
  /** When set (ingested Google data), used for `<time datetime>` semantics. */
  dateIso?: string;
  /** Google profile image URL when available. */
  profilePhotoUrl?: string;
  /** Link to the review on Google (opens in a new tab). */
  reviewUrl?: string;
  source: "google";
}
