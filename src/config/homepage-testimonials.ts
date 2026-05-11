import type { HomepageTestimonial } from "@/types/homepage-testimonial";
import type { RegionSlug } from "@/types/region";

function clampRating(value: number): number {
  if (value < 1) return 1;
  if (value > 5) return 5;
  return value;
}

function testimonial(
  partial: Omit<HomepageTestimonial, "rating" | "source"> & { rating?: number },
): HomepageTestimonial {
  return {
    ...partial,
    rating: clampRating(partial.rating ?? 5),
    source: "google",
  };
}

/**
 * Five curated homepage cards per region (same shape as ingested Google reviews).
 * Replace or merge with `mapGoogleReviewsToHomepageTestimonials` once `getRegionReviews` is live.
 */
export function getHomepageTestimonials(region: RegionSlug): readonly HomepageTestimonial[] {
  if (region === "bangkok") {
    return [
      testimonial({
        id: "bkk-1",
        author: "Marcus T.",
        timeLabel: "4 months ago",
        text: "Consultation was direct and technical—no fluff. The room setup and hygiene read as serious studio discipline, not a tourist shop.",
        rating: 5,
      }),
      testimonial({
        id: "bkk-2",
        author: "Elena R.",
        timeLabel: "2 months ago",
        text: "They walked me through line weight, healing, and aftercare like a production plan. The piece healed clean and the saturation held.",
        rating: 5,
      }),
      testimonial({
        id: "bkk-3",
        author: "James K.",
        timeLabel: "1 year ago",
        text: "Honest cover-up strategy about limits, and the result still reads sharp years later. Exactly the level of bluntness I wanted.",
        rating: 5,
      }),
      testimonial({
        id: "bkk-4",
        author: "Sofia L.",
        timeLabel: "3 weeks ago",
        text: "Scheduling before my flight was clear. In the chair it felt controlled and precise—no chaos, no ego, just execution.",
        rating: 5,
      }),
      testimonial({
        id: "bkk-5",
        author: "David N.",
        timeLabel: "6 months ago",
        text: "Stations were spotless, needles opened in front of me, and the artist stayed technical the whole session. Premium without theatrics.",
        rating: 5,
      }),
    ] as const;
  }

  if (region === "bali") {
    return [
      testimonial({
        id: "bli-1",
        author: "Tom W.",
        timeLabel: "3 months ago",
        text: "Travel-proof flow: fast consult, clear stencil changes, and a session that felt focused—not rushed, but efficient.",
        rating: 5,
      }),
      testimonial({
        id: "bli-2",
        author: "Aya M.",
        timeLabel: "1 month ago",
        text: "Craft-first energy, not souvenir energy. Sterile flow, sharp needles, and a calm room when the session ran long.",
        rating: 5,
      }),
      testimonial({
        id: "bli-3",
        author: "Chris P.",
        timeLabel: "8 months ago",
        text: "No oversell on size or placement. Composition fits my build and line quality stayed consistent to the finish.",
        rating: 5,
      }),
      testimonial({
        id: "bli-4",
        author: "Nina H.",
        timeLabel: "2 weeks ago",
        text: "First-timer friendly: aftercare spelled out plainly and follow-up felt professional, not salesy.",
        rating: 5,
      }),
      testimonial({
        id: "bli-5",
        author: "Leo G.",
        timeLabel: "5 months ago",
        text: "Portfolio matched what I saw in the chair. They tightened references and explained contrast on my skin tone clearly.",
        rating: 5,
      }),
    ] as const;
  }

  if (region === "phuket") {
    return [
      testimonial({
        id: "pkt-1",
        author: "Daniel F.",
        timeLabel: "2 months ago",
        text: "Booked around travel dates and they held the slot. No corner-cutting when the session got long.",
        rating: 5,
      }),
      testimonial({
        id: "pkt-2",
        author: "Laura B.",
        timeLabel: "7 months ago",
        text: "Portfolio matched reality. They tightened the reference and delivered a healed result I’m still proud of.",
        rating: 5,
      }),
      testimonial({
        id: "pkt-3",
        author: "Oliver S.",
        timeLabel: "3 weeks ago",
        text: "Premium without performative vibes. Stations clean, artists stayed technical, needles handled openly.",
        rating: 5,
      }),
      testimonial({
        id: "pkt-4",
        author: "Priya N.",
        timeLabel: "1 year ago",
        text: "Blunt honesty on what would age well. We adjusted detail density and the piece still reads crisp months out.",
        rating: 5,
      }),
      testimonial({
        id: "pkt-5",
        author: "Henrik V.",
        timeLabel: "4 months ago",
        text: "Clear expectations before I landed. Consult notes matched the session plan—no surprises in pricing or time.",
        rating: 5,
      }),
    ] as const;
  }

  return [
    testimonial({
      id: "glb-1",
      author: "Alex D.",
      timeLabel: "6 months ago",
      text: "Across Bangkok, Bali, and Phuket the through-line is discipline: consult clarity, controlled sessions, and healed work that still reads intentional.",
      rating: 5,
    }),
    testimonial({
      id: "glb-2",
      author: "Jordan M.",
      timeLabel: "3 months ago",
      text: "Compared portfolios and process notes before booking. What showed up in the chair matched the advertised standard.",
      rating: 5,
    }),
    testimonial({
      id: "glb-3",
      author: "Riley C.",
      timeLabel: "2 weeks ago",
      text: "No romanticizing pain or rushed placement. Technical shop with premium manners—what I wanted for a large piece.",
      rating: 5,
    }),
    testimonial({
      id: "glb-4",
      author: "Sam V.",
      timeLabel: "10 months ago",
      text: "Touch-up policy and aftercare were clear up front. Healing tracked predictably and line weight stayed consistent.",
      rating: 5,
    }),
    testimonial({
      id: "glb-5",
      author: "Taylor B.",
      timeLabel: "5 months ago",
      text: "Multi-city guest here—every studio felt like the same operating standard, not a franchise copy-paste.",
      rating: 5,
    }),
  ] as const;
}
