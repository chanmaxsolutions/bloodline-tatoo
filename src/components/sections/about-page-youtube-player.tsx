"use client";

import Image from "next/image";
import { useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { buildYoutubeNoCookieEmbedUrl, buildYoutubeThumbnailUrl } from "@/lib/youtube-embed";
import { cn } from "@/lib/utils";

interface AboutPageYoutubePlayerProps {
  youtubeVideoId: string;
  embedTitle: string;
  className?: string;
}

function AboutPageYoutubePlayer({
  youtubeVideoId,
  embedTitle,
  className,
}: AboutPageYoutubePlayerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailSrc = buildYoutubeThumbnailUrl(youtubeVideoId);

  if (isPlaying) {
    return (
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-md border border-border/50 bg-surface",
          "ring-1 ring-inset ring-white/5",
          className,
        )}
      >
        <iframe
          src={buildYoutubeNoCookieEmbedUrl(youtubeVideoId, { autoplay: true })}
          title={embedTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${embedTitle}`}
      className={cn(
        "group relative aspect-video w-full cursor-pointer overflow-hidden rounded-md border border-border/50 bg-surface text-left",
        "ring-1 ring-inset ring-white/5 outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
        className,
      )}
    >
      <Image
        src={thumbnailSrc}
        alt=""
        fill
        sizes="(min-width: 1024px) 896px, 92vw"
        quality={80}
        className={cn("object-cover object-center", !prefersReducedMotion && "scale-[1.06]")}
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
}

export { AboutPageYoutubePlayer };
