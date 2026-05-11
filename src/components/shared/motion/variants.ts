import type { Variants } from "framer-motion";
import { composedEase } from "@/components/shared/motion/easing";
import { motionDistance, motionDurations } from "@/components/shared/motion/motion-tokens";

/** Transitions live on `<motion>` in `Reveal` so `delay` can merge without dropping duration/ease. */
const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: motionDistance.revealY,
  },
  visible: {
    opacity: 1,
    y: 0,
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
  },
};

/** Section entrances: more travel + slower ease so scroll reveals read clearly after hero. */
const revealFirmVariants: Variants = {
  hidden: {
    opacity: 0,
    y: motionDistance.revealYFirm,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const subtleHoverTransition = {
  duration: motionDurations.fast,
  ease: composedEase,
} as const;

export { revealFirmVariants, revealSoftVariants, revealVariants, subtleHoverTransition };
