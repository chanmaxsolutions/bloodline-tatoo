import type { PageClosingCtaContent } from "@/types/page-closing-cta";
import type { RegionSlug } from "@/types/region";

function homepageClosingForRegion(region: RegionSlug, regionName: string): PageClosingCtaContent {
  if (region === "global") {
    return {
      heading: "READY TO BOOK YOUR NEXT SESSION?",
      description:
        "You have seen the standard, the work and what clients report. Choose your studio and message us on WhatsApp. We align on placement, scale and timing before anything is committed.",
    };
  }

  if (region === "phuket") {
    return {
      heading: "READY TO JOIN THE BLOODLINE FAMILY?",
      description:
        "Bloodline Phuket is an appointment-only custom tattoo studio, built around quality, trust and family. We take every tattoo seriously, matching you with an artist who specialises in your chosen style and taking the time to plan your work properly. Message our team to start your journey and secure your appointment with the Bloodline family.",
    };
  }

  return {
    heading: `READY TO BOOK YOUR NEXT ${regionName.toUpperCase()} SESSION?`,
    description: `You have seen how we run the room, the styles we hold and what clients report. Message Bloodline ${regionName} on WhatsApp. We confirm scope and timing before the session is locked in.`,
  };
}

export { homepageClosingForRegion };
