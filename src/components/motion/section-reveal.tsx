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
function SectionReveal({ children, className }: SectionRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) {
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
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
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
