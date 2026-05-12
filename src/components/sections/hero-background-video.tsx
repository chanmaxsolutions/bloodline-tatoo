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
 * and must not swap to still). Prefer `preload="auto"` so cellular devices buffer enough to start.
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
      preload="auto"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export { HeroBackgroundVideo };
