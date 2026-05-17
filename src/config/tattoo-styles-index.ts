import type { RegionSlug } from "@/types/region";

export interface TattooStylesIndexIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

const tattooStylesIndexByRegion: Record<RegionSlug, TattooStylesIndexIntro> = {
  global: {
    eyebrow: "Tattoo styles",
    heading: "STYLES ACROSS BLOODLINE",
    description:
      "Every lane below is offered at one or more Bloodline studios in Asia. Open a style for approach, placement, and how we execute it.",
  },
  bangkok: {
    eyebrow: "Tattoo styles",
    heading: "STYLES AT BLOODLINE BANGKOK",
    description:
      "Each lane below is available at our Bangkok studio. Open a style for process, placement, and disciplined execution.",
  },
  bali: {
    eyebrow: "Tattoo styles",
    heading: "STYLES AT BLOODLINE BALI",
    description:
      "Each lane below is available at our Bali studio. Open a style for process, placement, and execution held to studio standard.",
  },
  phuket: {
    eyebrow: "Tattoo styles",
    heading: "STYLES AT BLOODLINE PHUKET",
    description:
      "Each lane below is available at our Phuket studio. Open a style for approach, placement, and work held to Phuket standard.",
  },
};

function tattooStylesIndexIntroForRegion(region: RegionSlug): TattooStylesIndexIntro {
  return tattooStylesIndexByRegion[region];
}

export { tattooStylesIndexIntroForRegion };
