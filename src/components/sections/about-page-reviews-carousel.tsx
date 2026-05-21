"use client";

import { useId } from "react";
import { GoogleReviewsCarouselStrip } from "@/components/shared/google-reviews-carousel-strip";
import type { ReviewsPageTestimonial } from "@/types/reviews-page";

interface AboutPageReviewsCarouselProps {
  testimonials: readonly ReviewsPageTestimonial[];
  googleBusinessProfileUrl: string;
  showStudioName: boolean;
}

function AboutPageReviewsCarousel({
  testimonials,
  googleBusinessProfileUrl,
  showStudioName,
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
        sectionLabelId="about-reviews-preview-heading"
        describedById={`${carouselId}-scroll-hint`}
        testimonials={testimonials}
        googleBusinessProfileUrl={googleBusinessProfileUrl}
        showStudioName={showStudioName}
        edgeFade="surface"
      />
    </div>
  );
}

export { AboutPageReviewsCarousel };
