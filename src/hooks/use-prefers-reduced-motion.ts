"use client";

import { useEffect, useState } from "react";

/**
 * `true` when the user prefers reduced motion (`prefers-reduced-motion: reduce`).
 * `null` until mounted (SSR / first paint) — treat like “unknown / not reduced” for layout math.
 */
function usePrefersReducedMotion(): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    function sync(): void {
      setMatches(mediaQuery.matches);
    }

    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return matches;
}

export { usePrefersReducedMotion };
