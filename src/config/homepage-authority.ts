import { homepageAuthorityVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";
import type { RegionSlug } from "@/types/region";

const authorityCta = {
  ctaLabel: "Inside the studio",
  ctaHref: "/about",
} as const;

const authorityCraftAltByRegion: Record<RegionSlug, string> = {
  global: "Close detail of tattoo work in a controlled Bloodline studio session",
  bangkok:
    "Black and grey realism sleeve with Greek god, winged angel, cathedral architecture, and eye detail at Bloodline Tattoo Bangkok",
  bali: "Black and grey realism portrait sleeve with roses and classical columns on a woman at Bloodline Tattoo Bali",
  phuket:
    "Black and grey realism angel back tattoo with sword, roses, and classical columns at Bloodline Tattoo Phuket",
};

const authorityStudioAltByRegion: Record<RegionSlug, string> = {
  global:
    "Bloodline studio atmosphere and controlled lighting for premium tattoo sessions across Asia",
  bangkok:
    "Black and grey realism back tattoo with Greek god portrait, winged angel, temple, and lightning at Bloodline Tattoo Bangkok",
  bali: "Black and grey realism Spartan warrior and Parthenon full back tattoo in a moody studio at Bloodline Tattoo Bali",
  phuket:
    "Black and grey realism angel full back tattoo with cathedral columns in a cinematic studio at Bloodline Tattoo Phuket",
};

const authorityBySlug: Record<RegionSlug, Omit<RegionHomepageAuthorityConfig, "proofPanels">> = {
  global: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE HOUSE STANDARD ACROSS ASIA",
    description:
      "Bloodline runs across Bangkok, Bali and Phuket as one studio house. Consultation first, sterile discipline and measured execution in every room.",
    ...authorityCta,
  },
  bangkok: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BANGKOK STUDIO STANDARD",
    description:
      "Bloodline Bangkok runs on structured consultation, sterile practice and premium work built for permanence. Every session is paced with care, not rushed for volume.",
    ...authorityCta,
  },
  bali: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BLOODLINE STANDARD",
    description:
      "Bloodline Bali runs on clear consultation, sterile habits and careful execution. We work with the understanding that what goes on your skin stays there for life.",
    ...authorityCta,
  },
  phuket: {
    eyebrow: "THE BLOODLINE FAMILY",
    heading: "SETTING THE STANDARD FOR TATTOOING IN PHUKET",
    description:
      "Bloodline Tattoo Phuket is built on family, passion, and a commitment to world-class tattooing. Our team of experienced Phuket tattoo artists specialise in their own individual styles, allowing us to match every client with the right artist for their custom tattoo. From your first consultation to the final session, you become part of the Bloodline family with a team that genuinely cares about your experience, your tattoo, and creating work you’ll be proud to wear for life.",
    ...authorityCta,
  },
};

/** Phuket-only caption overlays on the two authority video cards. */
const phuketAuthorityVideoCaptions = [
  {
    tag: "Sterile practice",
    line: "Strict hygiene and sterile procedures maintained from the moment you arrive until your tattoo session is complete.",
    overlay: "accent",
  },
  {
    tag: "Large-scale custom work",
    line: "Specialising in large custom tattoos, carefully designed and executed with precision from concept to completion.",
    overlay: "light",
  },
] as const;

/**
 * Video proof panels for every regional homepage.
 * Phuket uses regional clips + restored title/line overlays. Other sites use Bali clips
 * until per-region videos land. Regional posters + alt text stay site-specific.
 */
function authorityProofPanelsForRegion(
  slug: RegionSlug,
): RegionHomepageAuthorityConfig["proofPanels"] {
  const craftCaption = slug === "phuket" ? phuketAuthorityVideoCaptions[0] : null;
  const studioCaption = slug === "phuket" ? phuketAuthorityVideoCaptions[1] : null;

  return [
    {
      kind: "video",
      videoSrc: homepageAuthorityVideoSrc(slug, "craft"),
      posterSrc: homepageMediaPaths.authorityCraft(slug),
      alt: authorityCraftAltByRegion[slug],
      ...(craftCaption ?? {}),
    },
    {
      kind: "video",
      videoSrc: homepageAuthorityVideoSrc(slug, "studio"),
      posterSrc: homepageMediaPaths.authorityStudio(slug),
      alt: authorityStudioAltByRegion[slug],
      ...(studioCaption ?? {}),
    },
  ];
}

function homepageAuthorityForRegion(slug: RegionSlug): RegionHomepageAuthorityConfig {
  return {
    ...authorityBySlug[slug],
    proofPanels: authorityProofPanelsForRegion(slug),
    /** Phuket: both craft + studio videos on mobile; other regions keep studio-only. */
    showBothProofPanelsOnMobile: slug === "phuket",
  };
}

export { homepageAuthorityForRegion };
