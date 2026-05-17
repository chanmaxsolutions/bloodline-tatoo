"use client";

import { useMemo, useState } from "react";
import { GoogleReviewCard } from "@/components/shared/google-review-card";
import { Button } from "@/components/ui/button";
import type { ReviewsPageTestimonial } from "@/types/reviews-page";

const REVIEWS_PAGE_BATCH_SIZE = 12;

interface ReviewsPageGridProps {
  testimonials: readonly ReviewsPageTestimonial[];
  googleBusinessProfileUrl: string;
  showStudioName: boolean;
}

function ReviewsPageGrid({
  testimonials,
  googleBusinessProfileUrl,
  showStudioName,
}: ReviewsPageGridProps) {
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PAGE_BATCH_SIZE);
  const visible = useMemo(() => testimonials.slice(0, visibleCount), [testimonials, visibleCount]);
  const hasMore = visibleCount < testimonials.length;

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <ul
        className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6"
        aria-label="Google reviews"
      >
        {visible.map((item) => (
          <li key={item.id} className="mb-5 w-full break-inside-avoid lg:mb-6">
            <GoogleReviewCard
              item={item}
              variant="page"
              googleBusinessProfileUrl={googleBusinessProfileUrl}
              studioName={showStudioName ? item.studioName : undefined}
              className="w-full"
            />
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => {
              setVisibleCount((count) =>
                Math.min(count + REVIEWS_PAGE_BATCH_SIZE, testimonials.length),
              );
            }}
          >
            Show more reviews
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export { ReviewsPageGrid, REVIEWS_PAGE_BATCH_SIZE };
