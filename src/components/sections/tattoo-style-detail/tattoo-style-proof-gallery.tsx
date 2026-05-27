"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

const proofGridClassName = "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5";

const proofTileClassName =
  "relative aspect-3/4 overflow-hidden rounded-md border border-border/50 bg-surface-elevated";

const proofTileButtonClassName = cn(
  "group relative block h-full w-full cursor-zoom-in overflow-hidden",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const proofTileImageClassName =
  "object-cover object-center motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-visible:scale-[1.02]";

const proofLightboxFigureClassName =
  "relative mx-auto w-full min-h-[min(52vh,420px)] max-h-[min(85dvh,880px)] aspect-3/4 sm:aspect-4/3 lg:aspect-video";

interface TattooStyleProofGalleryProps {
  images: readonly TattooStyleDetailProofImage[];
  galleryLabel: string;
}

function TattooStyleProofGallery({ images, galleryLabel }: TattooStyleProofGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex !== null ? images[activeIndex] : undefined;

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open) {
      setActiveIndex(null);
    }
  }, []);

  return (
    <>
      <ul className={proofGridClassName} aria-label={galleryLabel}>
        {images.map((image, index) => (
          <li
            key={`${image.src}-${index}`}
            className={sectionRevealStaggerClass(index, proofTileClassName)}
          >
            <button
              type="button"
              className={proofTileButtonClassName}
              aria-label={`View full size: ${image.alt}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 320px, (min-width: 640px) 360px, 48vw"
                quality={88}
                className={proofTileImageClassName}
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={activeIndex !== null} onOpenChange={handleOpenChange} modal="trap-focus">
        <DialogContent
          showCloseButton
          closeButtonPlacement="viewport"
          className={cn(
            "max-w-[min(96vw,72rem)] gap-3 border-border/50 bg-surface-strong p-3 sm:p-4",
            "max-sm:max-h-[92dvh]",
          )}
          aria-describedby={activeImage ? "tattoo-style-proof-lightbox-caption" : undefined}
        >
          <DialogTitle className="sr-only">
            {activeImage ? activeImage.alt : "Tattoo work preview"}
          </DialogTitle>
          {activeImage ? (
            <>
              <figure className={proofLightboxFigureClassName}>
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(min-width: 1280px) 1200px, 96vw"
                  quality={92}
                  priority
                  className="object-contain object-center"
                />
              </figure>
              <DialogDescription
                id="tattoo-style-proof-lightbox-caption"
                className="text-center font-sans text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {activeImage.alt}
              </DialogDescription>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export { TattooStyleProofGallery };
