import type { GlobalHeroTrustProofChip } from "@/types/global-hero-trust-proof";

function isNavigableExternalHref(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://");
}

/**
 * House-level proof shown in the hero on every regional domain.
 * Update counts here when marketing refreshes verified figures.
 */
function buildGlobalHeroTrustProofChips(
  googleBusinessProfileUrl: string,
): GlobalHeroTrustProofChip[] {
  const googleHref = isNavigableExternalHref(googleBusinessProfileUrl)
    ? googleBusinessProfileUrl
    : undefined;

  return [
    {
      id: "google",
      brand: "google",
      accent: "4.9",
      rest: "★",
      suffix: " · 2,500+ on Google",
      href: googleHref,
      linkAriaLabel: "View Bloodline on Google Maps",
    },
    {
      id: "social-combined",
      brand: "instagram",
      accent: "358K+",
      rest: "",
      suffix: " on Instagram",
    },
    {
      id: "youtube",
      brand: "youtube",
      accent: "41K",
      rest: "",
      suffix: " on YouTube",
    },
    {
      id: "facebook-regional",
      brand: "facebook",
      accent: "175K+",
      rest: "",
      suffix: " on Facebook",
    },
  ];
}

export { buildGlobalHeroTrustProofChips };
