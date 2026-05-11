"use client";

import type { ReactNode } from "react";
import { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cinematicEase, composedEase } from "@/components/shared/motion/easing";
import {
  revealFirmVariants,
  revealSoftVariants,
  revealVariants,
} from "@/components/shared/motion/variants";
import { motionDurations, motionViewport } from "@/components/shared/motion/motion-tokens";

type RevealElement = "div" | "p" | "h2";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Motion host: use `p` / `h2` so transforms/opacity attach to the semantic node (easier to verify in DevTools). */
  as?: RevealElement;
  id?: string;
  delay?: number;
  mode?: "default" | "soft" | "firm";
  once?: boolean;
  amount?: number;
  /** IntersectionObserver root margin — only `px` or `%` (not `vh`/`rem`). Expands in-view detection when scrolling. */
  viewportMargin?: string;
}

function Reveal({
  children,
  className,
  as = "div",
  id,
  delay = 0,
  mode = "default",
  once = motionViewport.once,
  amount = motionViewport.amount,
  viewportMargin,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants: Variants =
    mode === "soft" ? revealSoftVariants : mode === "firm" ? revealFirmVariants : revealVariants;

  const Motion = as === "p" ? motion.p : as === "h2" ? motion.h2 : motion.div;

  const transition = useMemo(() => {
    const base =
      mode === "soft"
        ? { duration: motionDurations.medium, ease: composedEase }
        : mode === "firm"
          ? { duration: motionDurations.cinematicSlow, ease: cinematicEase }
          : { duration: motionDurations.slow, ease: cinematicEase };

    const duration =
      prefersReducedMotion === true ? Math.min(0.04, base.duration * 0.08) : base.duration;

    return { ...base, duration, delay };
  }, [mode, delay, prefersReducedMotion]);

  return (
    <Motion
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
        ...(viewportMargin ? { margin: viewportMargin } : {}),
      }}
      variants={variants}
      transition={transition}
    >
      {children}
    </Motion>
  );
}

export { Reveal };
