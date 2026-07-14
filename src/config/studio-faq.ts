import type { RegionSlug } from "@/types/region";

export interface StudioFaqItem {
  id: string;
  question: string;
  answer: string;
}

function studioFaqForRegion(region: RegionSlug, regionName: string): readonly StudioFaqItem[] {
  const studioLabel = region === "global" ? "Bloodline" : `Bloodline ${regionName}`;
  const place =
    region === "global" ? "our Bangkok, Bali, and Phuket studios" : `our ${regionName} studio`;

  return [
    {
      id: "studio-booking",
      question: `How do I book a tattoo at ${studioLabel}?`,
      answer: `Message us on WhatsApp through the Contact page. Share placement, approximate size, and references. We confirm whether the project fits a single session or a paced series, then lock timing before you travel to ${place}.`,
    },
    {
      id: "studio-appointment-only",
      question: "Is Bloodline appointment-only?",
      answer:
        "Yes. Bloodline runs appointment-only across every studio. That keeps sterile prep disciplined, consultation clear, and session pacing measured—no walk-in rush.",
    },
    {
      id: "studio-hygiene",
      question: "How does Bloodline handle hygiene and sterile practice?",
      answer:
        "Every studio follows consultation-first process and sterile field habits: staged prep, single-use disposables where required, and a calm room built for focus. Ask in consultation if you want the full session checklist before you book.",
    },
    {
      id: "studio-travel",
      question: "Can I get tattooed while travelling through Asia?",
      answer:
        "Yes. Many clients book while travelling. We align on scope, session length, and healing window before you arrive, so the work fits your itinerary without rushed decisions on the day.",
    },
    {
      id: "studio-styles",
      question: "What tattoo styles does Bloodline offer?",
      answer:
        "Core directions include realism, portrait, Japanese, colour, mandala, Chicano, bamboo / Sak Yant (where offered), and healed-work proof. Open any style page for placement logic, session planning, and common questions.",
    },
    {
      id: "studio-pricing",
      question: "How does pricing work?",
      answer:
        "Pricing depends on size, placement, detail, and session time. We do not publish a walk-in menu. Share references on WhatsApp and we respond with honest scope and timing before anything is committed.",
    },
    {
      id: "studio-studios",
      question:
        region === "global"
          ? "Which Bloodline studio should I book?"
          : `Is Bloodline ${regionName} the same standard as other Bloodline studios?`,
      answer:
        region === "global"
          ? "Choose the city that fits your travel. Bangkok, Bali, and Phuket run on one house standard: consultation first, sterile practice, and custom work held to the same craft discipline."
          : `Yes. Bloodline ${regionName} runs on the same consultation-first standard as the wider house across Bangkok, Bali, and Phuket. The city changes. The baseline does not.`,
    },
  ];
}

export { studioFaqForRegion };
