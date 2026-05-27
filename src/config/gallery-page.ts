import type { PageClosingCtaContent } from "@/types/page-closing-cta";
import type { GalleryPageIntro } from "@/types/gallery";
import type { RegionSlug } from "@/types/region";

const galleryPageIntroByRegion: Record<RegionSlug, GalleryPageIntro> = {
  global: {
    eyebrow: "Portfolio",
    heading: "CRAFT ON SKIN",
    description:
      "Curated healed work and session frames from Bloodline studios in Bangkok, Bali, and Phuket — proof on skin before you commit travel.",
  },
  bangkok: {
    eyebrow: "Portfolio",
    heading: "BANGKOK PORTFOLIO",
    description:
      "Selected realism, Japanese, and blackwork from Bloodline Bangkok. Open any frame full size, then move to a style page for process and booking detail.",
  },
  bali: {
    eyebrow: "Portfolio",
    heading: "BALI PORTFOLIO",
    description:
      "Fine line, colour, and healed documentation from Bloodline Bali. Built for travelers who want proof, not a souvenir flash sheet.",
  },
  phuket: {
    eyebrow: "Portfolio",
    heading: "PHUKET PORTFOLIO",
    description:
      "Placement-aware work from Bloodline Phuket — from bold sleeves to settled fine line. Filter by lane, then message us with references.",
  },
};

function galleryPageIntroForRegion(region: RegionSlug): GalleryPageIntro {
  return galleryPageIntroByRegion[region];
}

function galleryPageClosingForRegion(
  region: RegionSlug,
  regionName: string,
): PageClosingCtaContent {
  if (region === "global") {
    return {
      heading: "READY TO BOOK YOUR NEXT APPOINTMENT?",
      description:
        "Send placement, scale, and references on WhatsApp. We confirm style lane and timing across Bangkok, Bali, or Phuket before you commit travel.",
    };
  }

  return {
    heading: `READY TO BOOK YOUR NEXT APPOINTMENT IN ${regionName.toUpperCase()}?`,
    description: `Message Bloodline ${regionName} on WhatsApp with placement, size, and references. We confirm feasibility and dates before the session is locked.`,
  };
}

export { galleryPageClosingForRegion, galleryPageIntroForRegion };
