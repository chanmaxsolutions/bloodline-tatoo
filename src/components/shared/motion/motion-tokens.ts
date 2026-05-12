const motionDurations = {
  fast: 0.24,
  medium: 0.38,
  slow: 0.56,
  cinematicSlow: 0.72,
} as const;

const motionViewport = {
  once: true,
  amount: 0.22,
} as const;

const motionDistance = {
  revealY: 14,
  revealYSoft: 10,
  revealYFirm: 26,
} as const;

/** Horizontal marquee drift speed (px/s); used with delta-time RAF for consistent motion. */
const marqueeSpeedPxPerSec = {
  default: 86,
  defaultReverseFactor: 0.92,
  reduced: 24,
  reducedReverseFactor: 0.94,
} as const;

export { marqueeSpeedPxPerSec, motionDistance, motionDurations, motionViewport };
