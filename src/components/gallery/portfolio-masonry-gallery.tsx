"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  portfolioMasonryContainerClassName,
  portfolioMasonryImageClassName,
  portfolioMasonryItemClassName,
  portfolioMasonryTileClassName,
} from "@/lib/portfolio-masonry-tile";
import {
  PORTFOLIO_MASONRY_INITIAL_VISIBLE_COUNT,
  PORTFOLIO_MASONRY_VISIBLE_COUNT_STEP,
} from "@/lib/portfolio-masonry-layout";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/gallery";

const portfolioTileButtonClassName = cn(
  "group block w-full cursor-zoom-in",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

interface PortfolioMasonryGalleryProps {
  items: readonly GalleryItem[];
  galleryLabel: string;
}

function PortfolioMasonryGallery({ items, galleryLabel }: PortfolioMasonryGalleryProps) {
  const itemsKey = useMemo(() => items.map((item) => item.id).join("|"), [items]);

  return <PortfolioMasonryGalleryInner key={itemsKey} items={items} galleryLabel={galleryLabel} />;
}

function PortfolioMasonryGalleryInner({ items, galleryLabel }: PortfolioMasonryGalleryProps) {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PORTFOLIO_MASONRY_INITIAL_VISIBLE_COUNT);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);

  const hasMore = visibleCount < items.length;
  const activeItem = activeItemId ? items.find((item) => item.id === activeItemId) : undefined;

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open) {
      setActiveItemId(null);
    }
  }, []);

  const handleShowMore = useCallback(() => {
    setVisibleCount((count) =>
      Math.min(count + PORTFOLIO_MASONRY_VISIBLE_COUNT_STEP, items.length),
    );
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className={portfolioMasonryContainerClassName} role="list" aria-label={galleryLabel}>
        {visibleItems.map((item, index) => (
          <div key={item.id} className={portfolioMasonryItemClassName} role="listitem">
            <button
              type="button"
              className={cn(portfolioTileButtonClassName, portfolioMasonryTileClassName)}
              aria-label={`View full size: ${item.alt}`}
              onClick={() => setActiveItemId(item.id)}
            >
              <Image
                src={item.imageSrc}
                alt={item.alt}
                width={item.imageWidth}
                height={item.imageHeight}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                quality={88}
                className={cn(
                  portfolioMasonryImageClassName,
                  "motion-safe:transition-transform motion-safe:duration-300",
                  "motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-visible:scale-[1.02]",
                )}
                style={{ width: "100%", height: "auto" }}
                priority={index < 4}
              />
            </button>
          </div>
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center">
          <Button type="button" variant="outline" size="lg" onClick={handleShowMore}>
            Show more work
          </Button>
        </div>
      ) : null}

      <Dialog open={activeItemId !== null} onOpenChange={handleOpenChange} modal="trap-focus">
        <DialogContent
          showCloseButton
          closeButtonPlacement="viewport"
          className={cn(
            "max-w-[min(96vw,72rem)] gap-3 border-border/50 bg-surface-strong p-3 sm:p-4",
            "max-sm:max-h-[92dvh]",
          )}
          aria-describedby={activeItem ? "portfolio-lightbox-caption" : undefined}
        >
          <DialogTitle className="sr-only">
            {activeItem ? activeItem.title : "Portfolio preview"}
          </DialogTitle>
          {activeItem ? (
            <>
              <figure className="relative mx-auto w-full max-h-[min(85dvh,880px)]">
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.alt}
                  width={activeItem.imageWidth}
                  height={activeItem.imageHeight}
                  sizes="(min-width: 1280px) 1200px, 96vw"
                  quality={92}
                  priority
                  className="mx-auto h-auto max-h-[min(85dvh,880px)] w-auto max-w-full object-contain"
                />
              </figure>
              <DialogDescription
                id="portfolio-lightbox-caption"
                className="text-center font-sans text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {activeItem.alt}
              </DialogDescription>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export {
  PortfolioMasonryGallery,
  PORTFOLIO_MASONRY_INITIAL_VISIBLE_COUNT,
  PORTFOLIO_MASONRY_VISIBLE_COUNT_STEP,
};
