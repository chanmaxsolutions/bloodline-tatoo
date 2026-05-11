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

export { motionDistance, motionDurations, motionViewport };
