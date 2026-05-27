import type { BlogCategoryHubIntro, BlogCategorySlug, BlogPostRelatedLink } from "@/types/blog";
import type { RegionSlug } from "@/types/region";

interface BlogCategoryHubDefinition {
  relatedStyleLinks: readonly BlogPostRelatedLink[];
  introByRegion: Record<RegionSlug, BlogCategoryHubIntro>;
}

const blogCategoryHubDefinitions: Record<BlogCategorySlug, BlogCategoryHubDefinition> = {
  "tattoo-guides": {
    relatedStyleLinks: [
      { label: "Realism", href: "/tattoo-styles/realism" },
      { label: "Fine line", href: "/tattoo-styles/fine-line" },
      { label: "Japanese", href: "/tattoo-styles/japanese" },
    ],
    introByRegion: {
      global: {
        eyebrow: "Tattoo guides",
        heading: "TATTOO GUIDES",
        description:
          "Session planning, style direction, and decision-making for travelers booking premium work at Bloodline in Bangkok, Bali, and Phuket.",
        quickIntro:
          "These guides help you align placement, scale, and style before you travel. Read for clear direction — then message the studio that matches your route.",
      },
      bangkok: {
        eyebrow: "Tattoo guides",
        heading: "BANGKOK TATTOO GUIDES",
        description:
          "Planning, references, and session expectations for clients booking Bloodline Bangkok — built for travelers who want studio-grade execution.",
        quickIntro:
          "Use these guides to plan scale, style lane, and trip timing around a Bangkok session. We confirm feasibility on WhatsApp before you lock flights.",
      },
      bali: {
        eyebrow: "Tattoo guides",
        heading: "BALI TATTOO GUIDES",
        description:
          "Island timing, humidity, and style decisions for tattoos at Bloodline Bali — without generic travel-blog noise.",
        quickIntro:
          "Bali trips move fast. These guides help you schedule work around surf, sun, and healing so the piece you want is realistic for your dates.",
      },
      phuket: {
        eyebrow: "Tattoo guides",
        heading: "PHUKET TATTOO GUIDES",
        description:
          "Placement, sun exposure, and session prep for Bloodline Phuket. Guidance for travelers who want clarity before booking.",
        quickIntro:
          "Phuket itineraries are sun-heavy. These guides focus on placement and healing windows so your tattoo stays readable after the trip.",
      },
    },
  },
  "tattoo-styles": {
    relatedStyleLinks: [
      { label: "All styles", href: "/tattoo-styles" },
      { label: "Blackwork", href: "/tattoo-styles/blackwork" },
      { label: "Geometric", href: "/tattoo-styles/geometric" },
    ],
    introByRegion: {
      global: {
        eyebrow: "Style education",
        heading: "TATTOO STYLE GUIDES",
        description:
          "How realism, fine line, Japanese, and blackwork behave on skin — and how to choose a lane that fits your placement and trip.",
        quickIntro:
          "Style is not aesthetic preference alone — it affects healing, session count, and longevity. Start here before you collect references.",
      },
      bangkok: {
        eyebrow: "Style education",
        heading: "TATTOO STYLE GUIDES",
        description:
          "Style discipline and placement context for Bloodline Bangkok clients — realism, Japanese, fine line, and blackwork explained clearly.",
        quickIntro:
          "Match the style lane to your placement and Bangkok trip length. We redirect honestly when scale or timing is tight.",
      },
      bali: {
        eyebrow: "Style education",
        heading: "TATTOO STYLE GUIDES",
        description:
          "Style and healing context for Bali — fine line, blackwork, and large-scale work in humid island conditions.",
        quickIntro:
          "Humidity and travel friction change how styles heal. These guides explain what works on a typical Bali itinerary.",
      },
      phuket: {
        eyebrow: "Style education",
        heading: "TATTOO STYLE GUIDES",
        description:
          "Style selection for Phuket placements with sun and movement in mind — from fine line to saturated blackwork.",
        quickIntro:
          "Choose a style lane that survives Phuket sun and activity. We pressure-test ideas against your healing window.",
      },
    },
  },
  aftercare: {
    relatedStyleLinks: [
      { label: "Fine line", href: "/tattoo-styles/fine-line" },
      { label: "Realism", href: "/tattoo-styles/realism" },
      { label: "Blackwork", href: "/tattoo-styles/blackwork" },
    ],
    introByRegion: {
      global: {
        eyebrow: "Aftercare",
        heading: "TATTOO AFTERCARE GUIDES",
        description:
          "Healing timelines, humidity, sun, and long-term clarity for work done at Bloodline across Southeast Asia.",
        quickIntro:
          "Aftercare is part of the tattoo. These guides explain sealing windows, sun discipline, and when to message the studio for a review.",
      },
      bangkok: {
        eyebrow: "Aftercare",
        heading: "AFTERCARE IN BANGKOK",
        description:
          "Heat, urban friction, and recovery rhythm after sessions at Bloodline Bangkok.",
        quickIntro:
          "Bangkok humidity and daily movement demand a tighter aftercare rhythm. Follow these guides through sealing before sun and gym return.",
      },
      bali: {
        eyebrow: "Aftercare",
        heading: "AFTERCARE IN BALI",
        description: "Humidity, salt air, and fine-line recovery for Bloodline Bali clients.",
        quickIntro:
          "Island aftercare is about friction and moisture control. Plan pool and surf days after the skin seals — not during week one.",
      },
      phuket: {
        eyebrow: "Aftercare",
        heading: "AFTERCARE IN PHUKET",
        description: "Sun exposure and submersion timing for tattoos healed in Phuket conditions.",
        quickIntro:
          "Phuket trips tempt early swimming. These guides set realistic submersion timing so contrast stays sharp.",
      },
    },
  },
  "travel-tattoos": {
    relatedStyleLinks: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    introByRegion: {
      global: {
        eyebrow: "Travel & tattoo",
        heading: "TRAVEL & TATTOO GUIDES",
        description:
          "How to plan tattoos around flights, beaches, and multi-city trips when booking Bloodline in Thailand and Indonesia.",
        quickIntro:
          "Travel tattoos fail when healing is an afterthought. These guides map session timing backward from your itinerary.",
      },
      bangkok: {
        eyebrow: "Travel & tattoo",
        heading: "BANGKOK TRAVEL TATTOO GUIDES",
        description:
          "Trip planning and day-of expectations for tattoo sessions at Bloodline Bangkok.",
        quickIntro:
          "Land with time to consult, schedule around heat, and leave buffer before red-eye flights. Message us with dates early.",
      },
      bali: {
        eyebrow: "Travel & tattoo",
        heading: "BALI TRAVEL TATTOO GUIDES",
        description:
          "Scheduling Bloodline Bali around island travel, humidity, and open-water days.",
        quickIntro:
          "Book after heavy beach blocks when possible. Custom and cover-up work needs a consult buffer after you land.",
      },
      phuket: {
        eyebrow: "Travel & tattoo",
        heading: "PHUKET TRAVEL TATTOO GUIDES",
        description: "Short-stay and holiday timing for tattoos at Bloodline Phuket.",
        quickIntro:
          "Short stays need honest scale. We map what is feasible in one trip versus what needs a return session.",
      },
    },
  },
  preparation: {
    relatedStyleLinks: [
      { label: "Fine line", href: "/tattoo-styles/fine-line" },
      { label: "Blackwork", href: "/tattoo-styles/blackwork" },
    ],
    introByRegion: {
      global: {
        eyebrow: "Tattoo ideas",
        heading: "TATTOO IDEAS & PLACEMENT",
        description:
          "Placement, scale, and longevity decisions before you commit — curated for premium travel tattoos.",
        quickIntro:
          "The best idea is one that ages on your lifestyle and sun exposure. These guides focus on placement and scale, not trend chasing.",
      },
      bangkok: {
        eyebrow: "Tattoo ideas",
        heading: "PLACEMENT IDEAS FOR BANGKOK",
        description: "Placement and scale guidance for clients planning work at Bloodline Bangkok.",
        quickIntro:
          "Outer arm and thigh tolerate Bangkok heat and daily movement better than ribs or sternum for many travelers.",
      },
      bali: {
        eyebrow: "Tattoo ideas",
        heading: "PLACEMENT IDEAS FOR BALI",
        description: "Placement that survives Bali sun, surf, and packed itineraries.",
        quickIntro:
          "Match size to how many days you can protect the area from salt, sun, and backpack friction.",
      },
      phuket: {
        eyebrow: "Tattoo ideas",
        heading: "PLACEMENT IDEAS FOR PHUKET",
        description: "Placements that hold clarity for Phuket sun and beach-heavy trips.",
        quickIntro:
          "We bias toward outer arm, calf, and thigh when your trip is sun-forward. Sleeves need longer healing buffers.",
      },
    },
  },
  "studio-advice": {
    relatedStyleLinks: [
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
    introByRegion: {
      global: {
        eyebrow: "Studio advice",
        heading: "STUDIO ADVICE",
        description:
          "Consultation standards, booking flow, and how to prepare for cover-ups and custom work at Bloodline.",
        quickIntro:
          "Premium studios move faster when you arrive prepared. These guides explain what to send and what to expect before travel.",
      },
      bangkok: {
        eyebrow: "Studio advice",
        heading: "BANGKOK STUDIO ADVICE",
        description: "Booking, deposits, and consult prep for Bloodline Bangkok.",
        quickIntro:
          "Send healed photos, references, and travel dates on WhatsApp. We confirm artist lane and deposit expectations before you fly.",
      },
      bali: {
        eyebrow: "Studio advice",
        heading: "BALI STUDIO ADVICE",
        description: "Consultation and booking guidance for Bloodline Bali.",
        quickIntro:
          "Cover-ups and custom work need honest timelines. Message early so your island dates match the piece you want.",
      },
      phuket: {
        eyebrow: "Studio advice",
        heading: "PHUKET STUDIO ADVICE",
        description: "Session prep and booking flow for Bloodline Phuket.",
        quickIntro:
          "Short trips need tight planning. Share placement photos and references so we can say yes or no before you book flights.",
      },
    },
  },
};

function getBlogCategoryHubIntro(
  category: BlogCategorySlug,
  region: RegionSlug,
): BlogCategoryHubIntro {
  return blogCategoryHubDefinitions[category].introByRegion[region];
}

function getBlogCategoryRelatedStyleLinks(
  category: BlogCategorySlug,
): readonly BlogPostRelatedLink[] {
  return blogCategoryHubDefinitions[category].relatedStyleLinks;
}

export { blogCategoryHubDefinitions, getBlogCategoryHubIntro, getBlogCategoryRelatedStyleLinks };
