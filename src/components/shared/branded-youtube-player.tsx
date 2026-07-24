"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { buildYoutubeNoCookieEmbedUrl, buildYoutubeThumbnailUrl } from "@/lib/youtube-embed";
import { cn } from "@/lib/utils";

interface BrandedYoutubePlayerProps {
  youtubeVideoId: string;
  embedTitle: string;
  /** Local still preferred; falls back to YouTube maxres thumb when omitted. */
  posterSrc?: string;
  posterAlt?: string;
  /**
   * `framed` — self-contained aspect-video shell (About page).
   * `fill` — absolute inset poster for a parent-sized media frame (homepage splits).
   */
  variant?: "framed" | "fill";
  /**
   * `inline` — replace poster with iframe in place (About).
   * `modal` — keep poster; open branded dialog with iframe (homepage splits).
   */
  playbackMode?: "inline" | "modal";
  className?: string;
  imageSizes?: string;
  imageQuality?: number;
}

function BrandedYoutubePlayer({
  youtubeVideoId,
  embedTitle,
  posterSrc,
  posterAlt = "",
  variant = "framed",
  playbackMode = "inline",
  className,
  imageSizes = "(min-width: 1024px) 896px, 92vw",
  imageQuality = 80,
}: BrandedYoutubePlayerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailSrc = posterSrc ?? buildYoutubeThumbnailUrl(youtubeVideoId);
  const isFill = variant === "fill";
  const isModal = playbackMode === "modal";

  const shellClassName = cn(
    isFill
      ? "absolute inset-0 h-full w-full overflow-hidden bg-surface"
      : "relative aspect-video w-full overflow-hidden rounded-md border border-border/50 bg-surface ring-1 ring-inset ring-white/5",
    className,
  );

  const posterButton = (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${embedTitle}`}
      className={cn(
        shellClassName,
        "group cursor-pointer text-left outline-none",
        !isFill && "focus-visible:ring-2 focus-visible:ring-ring/60",
        isFill && "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60",
      )}
    >
      <Image
        src={thumbnailSrc}
        alt={posterAlt}
        fill
        sizes={imageSizes}
        quality={imageQuality}
        className={cn(
          "object-cover object-center shadow-none drop-shadow-none",
          !prefersReducedMotion && "scale-[1.06]",
        )}
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-background/80 via-background/45 to-background/25"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          aria-hidden
          className={cn(
            "flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg",
            "transition-transform motion-fast",
            !prefersReducedMotion && "group-hover:scale-110",
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-8 translate-x-0.5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5.14v13.72L19 12 8 5.14z" />
          </svg>
        </span>
      </div>
    </button>
  );

  const iframe = (
    <iframe
      src={buildYoutubeNoCookieEmbedUrl(youtubeVideoId, { autoplay: true })}
      title={embedTitle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  );

  if (isModal) {
    return (
      <>
        {posterButton}
        <Dialog open={isPlaying} onOpenChange={setIsPlaying} modal="trap-focus">
          <DialogContent
            showCloseButton
            closeButtonPlacement="viewport"
            className={cn(
              "max-w-[min(96vw,56rem)] gap-0 overflow-hidden border-border/50 bg-surface-strong p-0",
              "sm:rounded-lg",
            )}
          >
            <DialogTitle className="sr-only">{embedTitle}</DialogTitle>
            <DialogDescription className="sr-only">
              YouTube video player for {embedTitle}
            </DialogDescription>
            <div className="relative aspect-video w-full bg-background">{iframe}</div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  if (isPlaying) {
    return <div className={shellClassName}>{iframe}</div>;
  }

  return posterButton;
}

export { BrandedYoutubePlayer };
export type { BrandedYoutubePlayerProps };
