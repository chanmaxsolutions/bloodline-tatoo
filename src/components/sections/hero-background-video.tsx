"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  src: string;
  poster?: string;
  /** Shown when autoplay is blocked or the file fails — avoids native paused-video UI. */
  stillSrc: string;
  stillAlt: string;
  className: string;
  /**
   * High-priority poster fetch for above-the-fold heroes (homepage LCP).
   * Omit on footer and below-fold bands so they do not compete with LCP.
   */
  priorityPoster?: boolean;
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
}

function applyIosFriendlyVideoAttrs(el: HTMLVideoElement) {
  el.muted = true;
  el.defaultMuted = true;
  el.setAttribute("muted", "");
  el.playsInline = true;
  el.setAttribute("playsinline", "");
  el.setAttribute("webkit-playsinline", "true");
}

/**
 * Hero background clip: mobile Safari needs muted/playsinline set reliably and `play()` after
 * the element can decode frames. Avoid overlapping `play()` calls (they reject with AbortError
 * and must not swap to still). Poster `next/image` layer satisfies LCP; video uses `preload="metadata"`
 * so the MP4 does not race the poster on first paint.
 *
 * @see https://developer.apple.com/documentation/webkit/delivering-video-content-for-safari
 */
function HeroBackgroundVideo({
  src,
  poster,
  stillSrc,
  stillAlt,
  className,
  priorityPoster = false,
}: HeroBackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [useStillOnly, setUseStillOnly] = useState(false);
  const playGenerationRef = useRef(0);

  useEffect(() => {
    if (useStillOnly) return;

    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    const markStill = () => {
      if (cancelled) return;
      setUseStillOnly(true);
    };

    const tryPlay = () => {
      if (cancelled) return;
      applyIosFriendlyVideoAttrs(el);
      const gen = ++playGenerationRef.current;
      const playResult = el.play();
      if (playResult === undefined) return;

      void playResult.catch((error: unknown) => {
        if (cancelled || playGenerationRef.current !== gen) return;
        if (isAbortError(error)) return;
        markStill();
      });
    };

    const onVideoError = () => markStill();

    tryPlay();

    /** One retry after enough data is buffered (critical on iOS + `preload` heuristics). */
    const onCanPlayOnce = () => tryPlay();
    el.addEventListener("canplay", onCanPlayOnce, { once: true });
    /** If media is already cached, `canplay` may not fire again — retry on next tick. */
    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      queueMicrotask(() => tryPlay());
    }

    el.addEventListener("error", onVideoError);

    function onDocumentVisible() {
      if (document.visibilityState !== "visible") return;
      tryPlay();
    }
    document.addEventListener("visibilitychange", onDocumentVisible);

    return () => {
      cancelled = true;
      playGenerationRef.current += 1;
      el.removeEventListener("canplay", onCanPlayOnce);
      el.removeEventListener("error", onVideoError);
      document.removeEventListener("visibilitychange", onDocumentVisible);
    };
  }, [src, useStillOnly]);

  const posterImage = (
    <Image
      src={stillSrc}
      alt=""
      aria-hidden
      fill
      priority={priorityPoster}
      fetchPriority={priorityPoster ? "high" : undefined}
      loading={priorityPoster ? undefined : "lazy"}
      className="object-cover object-center"
      sizes="100vw"
    />
  );

  if (useStillOnly) {
    return <div className={className}>{posterImage}</div>;
  }

  return (
    <div className={className}>
      {posterImage}
      <video
        ref={ref}
        className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
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
    </div>
  );
}

export { HeroBackgroundVideo };
