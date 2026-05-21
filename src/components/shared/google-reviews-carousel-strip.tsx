"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { GoogleReviewCard } from "@/components/shared/google-review-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { reviewStudioName } from "@/lib/reviews-cache";
import { cn } from "@/lib/utils";
import type { HomepageTestimonial } from "@/types/homepage-testimonial";

/** Interval between gentle auto-scroll steps (one card width). */
const GOOGLE_REVIEWS_CAROUSEL_AUTO_SCROLL_MS = 3000;

/**
 * Symmetric inset so `snap-center` cards sit in the middle of the viewport with a sliver of
 * neighbors visible (must stay in sync with carousel card mobile width).
 */
const MOBILE_CAROUSEL_CENTER_PAD = "max(1rem, calc(50% - min(17.5rem, calc(100vw - 2rem)) / 2))";

type GoogleReviewsCarouselEdgeFade = "surface" | "band-charcoal";

const carouselEdgeFadeStartClassName: Record<GoogleReviewsCarouselEdgeFade, string> = {
  surface: "from-surface",
  "band-charcoal": "from-[var(--band-charcoal)]",
};

interface GoogleReviewsCarouselStripProps {
  sectionLabelId: string;
  describedById?: string;
  testimonials: readonly HomepageTestimonial[];
  googleBusinessProfileUrl: string;
  showStudioName?: boolean;
  /** Softens hard card crops at the scrollport edges. */
  edgeFade?: GoogleReviewsCarouselEdgeFade;
}

/**
 * Horizontal reviews strip: native scroll + touch pan, mouse/pen drag on pointer devices,
 * and gentle timed auto-scroll (paused on hover; off when `prefers-reduced-motion`).
 */
function GoogleReviewsCarouselStrip({
  sectionLabelId,
  describedById,
  testimonials,
  googleBusinessProfileUrl,
  showStudioName = false,
  edgeFade,
}: GoogleReviewsCarouselStripProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pointerDragRef = useRef<{
    pointerId: number;
    startClientX: number;
    startScrollLeft: number;
  } | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [useCompactPadding, setUseCompactPadding] = useState(false);
  const [stepPx, setStepPx] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const count = testimonials.length;

  const testimonialIdsKey = useMemo(() => testimonials.map((t) => t.id).join("|"), [testimonials]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767.98px)");
    function apply() {
      setUseCompactPadding(mq.matches);
    }
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useLayoutEffect(() => {
    function measureStepPx(el: HTMLDivElement): number {
      if (el.children.length < 2) return 0;
      const first = el.children[0] as HTMLElement;
      const second = el.children[1] as HTMLElement;
      const step = second.offsetLeft - first.offsetLeft;
      return step > 0 ? step : 0;
    }

    function centerSecondCard(el: HTMLDivElement): void {
      if (count < 2) return;
      const second = el.children[1] as HTMLElement | undefined;
      if (!second) return;
      if (el.clientWidth < 1) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (maxScroll < 2) return;

      const er = el.getBoundingClientRect();
      const sr = second.getBoundingClientRect();
      const delta = sr.left + sr.width / 2 - (er.left + er.width / 2);
      const next = el.scrollLeft + delta;
      el.scrollLeft = Math.max(0, Math.min(maxScroll, Math.round(next)));
    }

    function syncLayout(): void {
      const el = scrollerRef.current;
      if (!el) return;
      centerSecondCard(el);
      setStepPx(measureStepPx(el));
    }

    syncLayout();
    requestAnimationFrame(() => {
      syncLayout();
    });

    const deferredId = window.setTimeout(syncLayout, 400);

    if (typeof ResizeObserver === "undefined") {
      return () => {
        window.clearTimeout(deferredId);
      };
    }
    const ro = new ResizeObserver(() => {
      syncLayout();
    });
    const el = scrollerRef.current;
    if (el) {
      ro.observe(el);
      for (let i = 0; i < Math.min(6, el.children.length); i += 1) {
        const child = el.children[i];
        if (child instanceof HTMLElement) ro.observe(child);
      }
    }
    return () => {
      window.clearTimeout(deferredId);
      ro.disconnect();
    };
  }, [count, testimonialIdsKey, useCompactPadding]);

  const onStripPointerEnter = useCallback(() => {
    if (leaveTimerRef.current != null) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setAutoplayPaused(true);
  }, []);

  const onStripPointerLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      setAutoplayPaused(false);
      leaveTimerRef.current = null;
    }, 160);
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current != null) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  const reduceMotion = prefersReducedMotion === true;
  const autoplayOn = count >= 2 && stepPx > 0 && !reduceMotion && !autoplayPaused;

  useEffect(() => {
    if (!autoplayOn) return;

    const id = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el || document.hidden) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (maxScroll < 4) return;
      const step = stepPx;
      const atEnd = el.scrollLeft >= maxScroll - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "auto" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, GOOGLE_REVIEWS_CAROUSEL_AUTO_SCROLL_MS);

    return () => window.clearInterval(id);
  }, [autoplayOn, stepPx, testimonialIdsKey]);

  const onScrollerPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    if (e.button !== 0) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest("a, button, input, textarea, select")) return;
    const el = scrollerRef.current;
    if (!el) return;
    pointerDragRef.current = {
      pointerId: e.pointerId,
      startClientX: e.clientX,
      startScrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
  }, []);

  const onScrollerPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const d = pointerDragRef.current;
    if (!d || d.pointerId !== e.pointerId) return;
    e.preventDefault();
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = d.startScrollLeft - (e.clientX - d.startClientX);
  }, []);

  const onScrollerPointerUpOrCancel = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const d = pointerDragRef.current;
    if (!d || d.pointerId !== e.pointerId) return;
    pointerDragRef.current = null;
    const el = scrollerRef.current;
    if (el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* capture already released */
      }
    }
  }, []);

  const onScrollerLostPointerCapture = useCallback(() => {
    pointerDragRef.current = null;
  }, []);

  if (count === 0) return null;

  const padInline = useCompactPadding ? MOBILE_CAROUSEL_CENTER_PAD : "1.5rem";

  const edgeFadeStart = edgeFade ? carouselEdgeFadeStartClassName[edgeFade] : null;

  return (
    <div
      className="relative w-full min-w-0 md:py-1"
      onPointerEnter={onStripPointerEnter}
      onPointerLeave={onStripPointerLeave}
    >
      {edgeFadeStart ? (
        <>
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-14 md:w-20",
              "bg-linear-to-r to-transparent",
              edgeFadeStart,
            )}
          />
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-14 md:w-20",
              "bg-linear-to-l to-transparent",
              edgeFadeStart,
            )}
          />
        </>
      ) : null}
      <div
        ref={scrollerRef}
        aria-labelledby={sectionLabelId}
        {...(describedById ? { "aria-describedby": describedById } : {})}
        onPointerDown={onScrollerPointerDown}
        onPointerMove={onScrollerPointerMove}
        onPointerUp={onScrollerPointerUpOrCancel}
        onPointerCancel={onScrollerPointerUpOrCancel}
        onLostPointerCapture={onScrollerLostPointerCapture}
        style={{
          paddingInline: padInline,
          scrollPaddingInline: padInline,
        }}
        className={cn(
          "flex snap-x snap-proximity gap-5 overflow-x-auto overscroll-x-contain pb-5",
          "touch-pan-x [-webkit-overflow-scrolling:touch] cursor-grab active:cursor-grabbing",
          "scroll-smooth motion-reduce:scroll-auto",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {testimonials.map((item) => (
          <GoogleReviewCard
            key={item.id}
            item={item}
            variant="carousel"
            googleBusinessProfileUrl={googleBusinessProfileUrl}
            studioName={showStudioName ? reviewStudioName(item) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export { GoogleReviewsCarouselStrip, GOOGLE_REVIEWS_CAROUSEL_AUTO_SCROLL_MS };
