"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  src: string;
  poster?: string;
  /** Shown when autoplay is blocked (e.g. Low Power Mode) or the file fails — avoids native paused-video UI. */
  stillSrc: string;
  stillAlt: string;
  className: string;
}

/**
 * Hero background clip: mobile Safari often ignores `autoplay` unless the muted **property**
 * is set in JS and `play()` is called after media is ready. When playback cannot start, we swap
 * to a still image so users never see the system play affordance on a dark rectangle.
 *
 * @see https://developer.apple.com/documentation/webkit/delivering-video-content-for-safari
 */
function HeroBackgroundVideo({
  src,
  poster,
  stillSrc,
  stillAlt,
  className,
}: HeroBackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [useStillOnly, setUseStillOnly] = useState(false);

  useEffect(() => {
    if (useStillOnly) return;

    const el = ref.current;
    if (!el) return;

    const markStill = () => setUseStillOnly(true);

    const syncMutedAndPlay = () => {
      el.muted = true;
      el.defaultMuted = true;
      el.setAttribute("muted", "");
      el.playsInline = true;
      el.setAttribute("playsinline", "");
      el.setAttribute("webkit-playsinline", "true");
      void el
        .play()
        .then(() => {
          requestAnimationFrame(() => {
            if (ref.current !== el) return;
            if (el.paused) markStill();
          });
        })
        .catch(markStill);
    };

    const onVideoError = () => markStill();

    syncMutedAndPlay();

    el.addEventListener("loadeddata", syncMutedAndPlay);
    el.addEventListener("error", onVideoError);

    function onDocumentVisible() {
      if (document.visibilityState !== "visible") return;
      syncMutedAndPlay();
    }
    document.addEventListener("visibilitychange", onDocumentVisible);

    return () => {
      el.removeEventListener("loadeddata", syncMutedAndPlay);
      el.removeEventListener("error", onVideoError);
      document.removeEventListener("visibilitychange", onDocumentVisible);
    };
  }, [src, useStillOnly]);

  if (useStillOnly) {
    return (
      <div className={className}>
        <Image
          src={stillSrc}
          alt={stillAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export { HeroBackgroundVideo };
