"use client";

import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";

interface FooterBackgroundVideoProps {
  videoSrc: string;
  poster: string;
  stillAlt: string;
}

/** Full-bleed footer clip — same regional asset as homepage hero. */
function FooterBackgroundVideo({ videoSrc, poster, stillAlt }: FooterBackgroundVideoProps) {
  return (
    <HeroBackgroundVideo
      key={videoSrc}
      src={videoSrc}
      poster={poster}
      stillSrc={poster}
      stillAlt={stillAlt}
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  );
}

export { FooterBackgroundVideo };
