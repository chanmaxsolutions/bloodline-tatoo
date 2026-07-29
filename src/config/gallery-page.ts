import { GALLERY_CATEGORY_LABELS } from "@/config/gallery-catalog";
import type { PageClosingCtaContent } from "@/types/page-closing-cta";
import type { GalleryCategorySlug, GalleryPageIntro } from "@/types/gallery";
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
    description: "This is what comes out of Bloodline Tattoo Bali.",
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

function galleryCategoryLabel(category: GalleryCategorySlug): string {
  return GALLERY_CATEGORY_LABELS[category];
}

function galleryPageIntroForRegionAndCategory(
  region: RegionSlug,
  regionName: string,
  category: GalleryCategorySlug | null,
): GalleryPageIntro {
  const base = galleryPageIntroByRegion[region];

  if (!category) {
    return base;
  }

  const label = galleryCategoryLabel(category);
  const categoryHeading = label.toUpperCase();

  if (region === "global") {
    return {
      eyebrow: "Portfolio",
      heading: `${categoryHeading} PORTFOLIO`,
      description: `Curated ${label.toLowerCase()} tattoo work from Bloodline studios in Bangkok, Bali, and Phuket. Explore proof on skin before you book.`,
    };
  }

  return {
    eyebrow: label,
    heading: `${regionName.toUpperCase()} ${categoryHeading} PORTFOLIO`,
    description: `Selected ${label.toLowerCase()} tattoo work from Bloodline ${regionName}. Explore proof on skin, then message us with placement and references.`,
  };
}

function portfolioMetadataForRegionAndCategory(
  region: RegionSlug,
  regionName: string,
  siteName: string,
  category: GalleryCategorySlug | null,
): { title: string; description: string; canonicalPath: string } {
  if (!category) {
    const title =
      region === "global"
        ? `Tattoo Portfolio | ${siteName}`
        : `Tattoo Portfolio in ${regionName} | ${siteName}`;

    const description =
      region === "global"
        ? "Curated tattoo portfolio from Bloodline studios in Bangkok, Bali, and Phuket. Explore healed work and session frames before you book."
        : `Curated tattoo portfolio and healed work from Bloodline ${regionName}. Explore proof on skin and book with confidence.`;

    return { title, description, canonicalPath: "/portfolio" };
  }

  const label = galleryCategoryLabel(category);

  const title =
    region === "global"
      ? `${label} Tattoo Portfolio | ${siteName}`
      : `${label} Tattoos in ${regionName} | ${siteName}`;

  const description =
    region === "global"
      ? `Explore ${label.toLowerCase()} tattoo proof from Bloodline studios in Bangkok, Bali, and Phuket before you book.`
      : `Explore ${label.toLowerCase()} tattoo proof from Bloodline ${regionName}. Filtered portfolio work on skin before you message us.`;

  return {
    title,
    description,
    canonicalPath: `/portfolio?category=${category}`,
  };
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

export {
  galleryPageClosingForRegion,
  galleryPageIntroForRegion,
  galleryPageIntroForRegionAndCategory,
  portfolioMetadataForRegionAndCategory,
};
