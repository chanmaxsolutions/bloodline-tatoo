"use client";

import { useId } from "react";
import {
  GoogleReviewsCarouselStrip,
  type GoogleReviewsCarouselEdgeFade,
} from "@/components/shared/google-reviews-carousel-strip";
import type { ReviewsPageTestimonial } from "@/types/reviews-page";

interface AboutPageReviewsCarouselProps {
  sectionLabelId: string;
  testimonials: readonly ReviewsPageTestimonial[];
  googleBusinessProfileUrl: string;
  showStudioName: boolean;
  edgeFade?: GoogleReviewsCarouselEdgeFade;
}

function AboutPageReviewsCarousel({
  sectionLabelId,
  testimonials,
  googleBusinessProfileUrl,
  showStudioName,
  edgeFade = "surface",
}: AboutPageReviewsCarouselProps) {
  const carouselId = useId();

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <p id={`${carouselId}-scroll-hint`} className="sr-only">
        Drag, swipe, or wait for the row to advance automatically. Pauses while you hover over the
        reviews.
      </p>
      <GoogleReviewsCarouselStrip
        sectionLabelId={sectionLabelId}
        describedById={`${carouselId}-scroll-hint`}
        testimonials={testimonials}
        googleBusinessProfileUrl={googleBusinessProfileUrl}
        showStudioName={showStudioName}
        edgeFade={edgeFade}
      />
    </div>
  );
}

export { AboutPageReviewsCarousel };
