import { getTattooStyleBySlug } from "@/config/tattoo-style-catalog";
import { tattooStyleFaqBySlug } from "@/config/tattoo-style-detail-faq";
import { tattooStyleSlugsForRegion } from "@/config/region-tattoo-style-availability";
import { studioFaqForRegion, type StudioFaqItem } from "@/config/studio-faq";
import type { RegionSlug } from "@/types/region";
import type { TattooStyleFaqItem } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";

export interface FaqPageIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface FaqPageStyleGroup {
  slug: TattooStyleSlug;
  title: string;
  href: string;
  items: readonly TattooStyleFaqItem[];
}

export interface FaqPageContent {
  intro: FaqPageIntro;
  studioFaqs: readonly StudioFaqItem[];
  styleGroups: readonly FaqPageStyleGroup[];
  /** Flat list for FAQPage JSON-LD (studio + style questions on this page). */
  schemaFaqs: readonly { question: string; answer: string }[];
  closing: {
    heading: string;
    description: string;
  };
}

function faqPageIntroForRegion(region: RegionSlug, regionName: string): FaqPageIntro {
  if (region === "global") {
    return {
      eyebrow: "Straight answers",
      heading: "FREQUENTLY ASKED QUESTIONS",
      description:
        "Booking, sterile practice, travel timing, and style questions across Bloodline studios in Bangkok, Bali, and Phuket. Open a style group for detail on sessions, healing, and placement.",
    };
  }

  return {
    eyebrow: "Straight answers",
    heading: `${regionName.toUpperCase()} FAQ`,
    description: `Booking, sterile practice, travel timing, and style questions for Bloodline ${regionName}. Open a style group for detail on sessions, healing, and placement.`,
  };
}

function faqPageClosingForRegion(region: RegionSlug, regionName: string) {
  if (region === "global") {
    return {
      heading: "STILL HAVE A QUESTION?",
      description:
        "Message the studio on WhatsApp. We align on placement, scale, and timing before anything is committed.",
    };
  }

  return {
    heading: `STILL HAVE A ${regionName.toUpperCase()} QUESTION?`,
    description: `Message Bloodline ${regionName} on WhatsApp. We align on placement, scale, and timing before the session is locked in.`,
  };
}

function getFaqPageContent(region: RegionSlug, regionName: string): FaqPageContent {
  const studioFaqs = studioFaqForRegion(region, regionName);
  const styleGroups = tattooStyleSlugsForRegion(region).map((slug) => {
    const catalog = getTattooStyleBySlug(slug);

    return {
      slug,
      title: catalog.title,
      href: `/tattoo-styles/${slug}`,
      items: tattooStyleFaqBySlug[slug],
    };
  });

  const schemaFaqs = [
    ...studioFaqs.map(({ question, answer }) => ({ question, answer })),
    ...styleGroups.flatMap((group) =>
      group.items.map(({ question, answer }) => ({ question, answer })),
    ),
  ];

  return {
    intro: faqPageIntroForRegion(region, regionName),
    studioFaqs,
    styleGroups,
    schemaFaqs,
    closing: faqPageClosingForRegion(region, regionName),
  };
}

export { getFaqPageContent };
