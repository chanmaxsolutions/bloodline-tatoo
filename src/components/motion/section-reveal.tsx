"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Scroll-triggered reveal wrapper. Children use `sectionRevealItemClass` / `sectionRevealStaggerClass`.
 * Faster fade-up than homepage hero; respects `prefers-reduced-motion`.
 */
function isSectionInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  return rect.top < viewportHeight && rect.bottom > 0;
}

function SectionReveal({ children, className }: SectionRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) {
      return;
    }

    if (isSectionInViewport(element)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        // Any edge entering the viewport should reveal — a high threshold hides tall
        // sections (e.g. tattoo-style grids) until the user scrolls far past them.
        threshold: 0,
        rootMargin: "0px 0px 8% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn("section-reveal", isVisible && "section-reveal--visible", className)}
    >
      {children}
    </div>
  );
}

export { SectionReveal };
