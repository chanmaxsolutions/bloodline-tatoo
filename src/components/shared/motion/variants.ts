import type { Variants } from "framer-motion";
import { cinematicEase, composedEase } from "@/components/shared/motion/easing";
import { motionDistance, motionDurations } from "@/components/shared/motion/motion-tokens";

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: motionDistance.revealY,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.slow,
      ease: cinematicEase,
    },
  },
};

const revealSoftVariants: Variants = {
  hidden: {
    opacity: 0,
    y: motionDistance.revealYSoft,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.medium,
      ease: composedEase,
    },
  },
};

const subtleHoverTransition = {
  duration: motionDurations.fast,
  ease: composedEase,
} as const;

export { revealSoftVariants, revealVariants, subtleHoverTransition };
