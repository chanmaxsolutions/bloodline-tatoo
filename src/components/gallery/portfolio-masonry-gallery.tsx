"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  portfolioMasonryColumnsClassName,
  portfolioMasonryItemClassName,
  portfolioMasonryTileHeightClassName,
} from "@/lib/portfolio-masonry-tile";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/gallery";

const PORTFOLIO_PAGE_BATCH_SIZE = 12;

const portfolioTileShellClassName =
  "relative w-full overflow-hidden rounded-md border border-border/50 bg-surface-elevated";

const portfolioTileButtonClassName = cn(
  "group relative block w-full cursor-zoom-in overflow-hidden",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const portfolioTileImageClassName =
  "object-cover object-center motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-visible:scale-[1.02]";

const lightboxFigureClassName =
  "relative mx-auto w-full min-h-[min(52vh,420px)] max-h-[min(85dvh,880px)] aspect-3/4 sm:aspect-4/3 lg:aspect-video";

interface PortfolioMasonryGalleryProps {
  items: readonly GalleryItem[];
  galleryLabel: string;
}

function PortfolioMasonryGallery({ items, galleryLabel }: PortfolioMasonryGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(PORTFOLIO_PAGE_BATCH_SIZE);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const hasMore = visibleCount < items.length;
  const activeItem = activeItemId ? items.find((item) => item.id === activeItemId) : undefined;

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open) {
      setActiveItemId(null);
    }
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <ul className={portfolioMasonryColumnsClassName} aria-label={galleryLabel}>
        {visibleItems.map((item, index) => (
          <li
            key={item.id}
            className={sectionRevealStaggerClass(index, portfolioMasonryItemClassName)}
          >
            <button
              type="button"
              className={cn(
                portfolioTileButtonClassName,
                portfolioTileShellClassName,
                portfolioMasonryTileHeightClassName(item.layout),
              )}
              aria-label={`View full size: ${item.alt}`}
              onClick={() => setActiveItemId(item.id)}
            >
              <Image
                src={item.imageSrc}
                alt={item.alt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                quality={88}
                className={portfolioTileImageClassName}
                priority={index < 4}
              />
            </button>
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
              setVisibleCount((count) => Math.min(count + PORTFOLIO_PAGE_BATCH_SIZE, items.length));
            }}
          >
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
              <figure className={lightboxFigureClassName}>
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.alt}
                  fill
                  sizes="(min-width: 1280px) 1200px, 96vw"
                  quality={92}
                  priority
                  className="object-contain object-center"
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

export { PortfolioMasonryGallery, PORTFOLIO_PAGE_BATCH_SIZE };
