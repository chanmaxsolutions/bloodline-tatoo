"use client";

import { useId } from "react";
import { SectionReveal } from "@/components/motion";
import { GoogleReviewsCarouselStrip } from "@/components/shared/google-reviews-carousel-strip";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";

interface HomepageTestimonialsCarouselSectionProps {
  testimonials: readonly HomepageTestimonial[];
  /** Region’s Google Business / Maps listing (“View more” when copy is clamped). */
  googleBusinessProfileUrl: string;
}

function HomepageTestimonialsCarouselSection({
  testimonials,
  googleBusinessProfileUrl,
}: HomepageTestimonialsCarouselSectionProps) {
  const regionId = useId();
  const count = testimonials.length;

  if (count === 0) return null;

  return (
    <section
      id="homepage-testimonials"
      aria-labelledby={`${regionId}-label`}
      className={cn(
        "w-full min-w-0 max-w-none overflow-x-hidden bg-band-charcoal text-foreground",
        "py-8 md:py-10",
      )}
    >
      <h2 id={`${regionId}-label`} className="sr-only">
        Google reviews from clients
      </h2>
      <p id={`${regionId}-reviews-scroll-hint`} className="sr-only">
        Drag, swipe, or wait for the row to advance automatically. Pauses while you hover over the
        reviews.
      </p>
      <SectionReveal className="w-full min-w-0">
        <div className={sectionRevealItemClass("none")}>
          <GoogleReviewsCarouselStrip
            sectionLabelId={`${regionId}-label`}
            describedById={`${regionId}-reviews-scroll-hint`}
            testimonials={testimonials}
            googleBusinessProfileUrl={googleBusinessProfileUrl}
            edgeFade="band-charcoal"
          />
        </div>
      </SectionReveal>
    </section>
  );
}

export { HomepageTestimonialsCarouselSection };
