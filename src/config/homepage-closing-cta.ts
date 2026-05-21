import type { PageClosingCtaContent } from "@/types/page-closing-cta";
import type { RegionSlug } from "@/types/region";

function homepageClosingForRegion(region: RegionSlug, regionName: string): PageClosingCtaContent {
  if (region === "global") {
    return {
      heading: "READY TO BOOK YOUR NEXT SESSION?",
      description:
        "You've seen the standard, the work, and what clients report. Choose your studio and message us on WhatsApp—we align on placement, scale, and timing before ink.",
    };
  }

  return {
    heading: `READY TO BOOK YOUR NEXT ${regionName.toUpperCase()} SESSION?`,
    description: `You've seen how we run the room, the styles we hold, and what clients report. Message Bloodline ${regionName} on WhatsApp—we confirm scope and timing before the session is locked in.`,
  };
}

export { homepageClosingForRegion };
