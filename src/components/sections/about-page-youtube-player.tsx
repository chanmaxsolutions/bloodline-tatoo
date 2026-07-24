"use client";

import { BrandedYoutubePlayer } from "@/components/shared/branded-youtube-player";

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
  return (
    <BrandedYoutubePlayer
      youtubeVideoId={youtubeVideoId}
      embedTitle={embedTitle}
      variant="framed"
      className={className}
    />
  );
}

export { AboutPageYoutubePlayer };
