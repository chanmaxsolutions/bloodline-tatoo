import { z } from "zod";
import type { BlogCategorySlug, BlogPost } from "@/types/blog";
import type { RegionSlug } from "@/types/region";

const regionSlugSchema = z.enum(["global", "bangkok", "bali", "phuket"]);

const blogCategorySlugSchema = z.enum([
  "tattoo-styles",
  "tattoo-guides",
  "aftercare",
  "travel-tattoos",
  "preparation",
  "studio-advice",
]);

const blogPostImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

const blogArticleBodyBlockSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("paragraph"),
    text: z.string().min(1),
  }),
  z.object({
    type: z.literal("heading"),
    text: z.string().min(1),
    level: z.union([z.literal(2), z.literal(3)]).optional(),
  }),
  z.object({
    type: z.literal("image"),
    image: blogPostImageSchema,
    caption: z.string().min(1).optional(),
  }),
]);

const blogPostRelatedLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const blogFaqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  category: blogCategorySlugSchema,
  publishedAt: z.string().min(1),
  readingTimeMinutes: z.number().int().positive(),
  featuredImage: blogPostImageSchema,
  regions: z.array(regionSlugSchema).min(1),
  featured: z.boolean().optional(),
  body: z.array(blogArticleBodyBlockSchema).min(1),
  quickAnswer: z.string().min(1).optional(),
  faq: z.array(blogFaqItemSchema).min(1).optional(),
  relatedStyles: z.array(blogPostRelatedLinkSchema).optional(),
  relatedServices: z.array(blogPostRelatedLinkSchema).optional(),
});

const blogCatalogRaw: BlogPost[] = [
  {
    slug: "choose-tattoo-style-before-you-travel",
    title: "How to Choose a Tattoo Style Before You Travel",
    description:
      "Align placement, scale, and style lane before you book flights — so your session at Bloodline starts with direction, not guesswork.",
    category: "tattoo-guides",
    publishedAt: "2025-11-12",
    readingTimeMinutes: 7,
    featuredImage: {
      src: "/images/tattoo-styles/realism.jpg",
      alt: "Realistic tattoo work at Bloodline studio",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Travel tattoos fail when style, placement, and healing timeline are treated as separate decisions. At Bloodline we start with the lane you want — realism, fine line, blackwork, Japanese — then pressure-test whether your trip dates support proper healing.",
      },
      {
        type: "image",
        image: {
          src: "/images/tattoo-styles/fine-line.jpg",
          alt: "Fine line tattoo session at Bloodline studio",
        },
        caption:
          "Fine line and single-needle work need placement and aftercare planned around your travel schedule.",
      },
      {
        type: "heading",
        level: 2,
        text: "Start with placement, not Pinterest boards",
      },
      {
        type: "paragraph",
        text: "Shoulder, forearm, and thigh heal differently in heat and humidity. Bring 2–3 reference images that share line weight and contrast — not ten unrelated saves. We map what is executable in one session versus what needs a planned series.",
      },
      {
        type: "image",
        image: {
          src: "/images/tattoo-styles/japanese.jpg",
          alt: "Japanese tattoo composition with strong flow on the arm",
        },
        caption:
          "Large-scale styles such as Japanese and blackwork are often planned as multi-session projects.",
      },
      {
        type: "heading",
        level: 2,
        text: "Match style to skin and lifestyle",
      },
      {
        type: "paragraph",
        text: "Fine line demands aftercare discipline on beach days. Large blackwork needs swelling room in your itinerary. Message us on WhatsApp with placement photos and travel dates; we respond with honest feasibility before you commit a flight.",
      },
    ],
    relatedStyles: [
      { label: "Realism", href: "/tattoo-styles/realism" },
      { label: "Fine line", href: "/tattoo-styles/fine-line" },
    ],
  },
  {
    slug: "realistic-tattoo-healing-timeline",
    title: "Realistic Tattoo Healing Timeline",
    description:
      "What to expect day by day after a realism or large-scale piece — and when swimming, sun, and gym are actually safe.",
    category: "aftercare",
    publishedAt: "2025-10-28",
    readingTimeMinutes: 6,
    featuredImage: {
      src: "/images/tattoo-styles/realism.jpg",
      alt: "Healed realistic tattoo detail",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Days 1–3 are plasma, swelling, and strict wash-and-pat-dry rhythm. Color packing and soft shading look intense — that is normal. Do not soak, sun, or gym through this window.",
      },
      {
        type: "heading",
        level: 2,
        text: "Week one: flaking, not picking",
      },
      {
        type: "paragraph",
        text: "Light flaking means the surface is sealing. Picking resets healing and pulls ink. In humid climates (Bali, Phuket, Bangkok) we recommend breathable clothing and AC sleep when possible.",
      },
      {
        type: "heading",
        level: 2,
        text: "Week two onward",
      },
      {
        type: "paragraph",
        text: "Short showers are fine; submersion waits until the skin is matte and closed — usually 14–21 days for larger work. SPF 50+ after that. If redness spreads or heat returns, message the studio — we would rather review early than fix a scar.",
      },
    ],
  },
  {
    slug: "bangkok-tattoo-session-what-to-expect",
    title: "Bangkok Tattoo Session: What to Expect",
    description:
      "Consultation flow, studio standards, and how to plan your Bangkok trip around a Bloodline session.",
    category: "travel-tattoos",
    publishedAt: "2025-09-15",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/hero-poster.jpg",
      alt: "Bloodline Bangkok studio atmosphere",
    },
    regions: ["global", "bangkok"],
    body: [
      {
        type: "paragraph",
        text: "Most Bangkok clients book through WhatsApp with references, placement, and approximate scale. We confirm artist lane, session length, and deposit expectations before you land.",
      },
      {
        type: "heading",
        level: 2,
        text: "Day-of flow",
      },
      {
        type: "paragraph",
        text: "Arrive fed, hydrated, and without alcohol in your system. Stencil approval is collaborative — we adjust for movement and aging, not only for the flat photo on a screen. Large pieces may split across two days; we plan that upfront.",
      },
      {
        type: "paragraph",
        text: "After the session you leave with written aftercare and direct studio contact. Bangkok heat means we bias toward morning sessions and indoor recovery for the first 48 hours when possible.",
      },
    ],
    relatedStyles: [{ label: "Japanese", href: "/tattoo-styles/japanese" }],
  },
  {
    slug: "planning-tattoo-on-bali-trip",
    title: "Planning a Tattoo on Your Bali Trip",
    description:
      "How to schedule Bloodline Bali around surf, sun, and island travel without compromising healing.",
    category: "travel-tattoos",
    publishedAt: "2025-08-22",
    readingTimeMinutes: 6,
    featuredImage: {
      src: "/images/tattoo-styles/fine-line.jpg",
      alt: "Fine line tattoo session in Bali",
    },
    regions: ["global", "bali"],
    body: [
      {
        type: "paragraph",
        text: "Book the session after the heaviest beach and pool days, not before. We recommend landing 24 hours early for consultation if your piece is custom or cover-up work.",
      },
      {
        type: "heading",
        level: 2,
        text: "Humidity and fine line",
      },
      {
        type: "paragraph",
        text: "Fine line and single-needle work need clean dry windows. If your itinerary is open-water heavy, tell us — we may suggest slightly bolder line weight or a different placement that survives the trip.",
      },
      {
        type: "paragraph",
        text: "Message Bloodline Bali with travel dates and reference direction. We will tell you honestly if the trip timeline is too tight for the piece you want.",
      },
    ],
  },
  {
    slug: "phuket-tattoo-placements-that-age-well",
    title: "Phuket Tattoo Placements That Age Well",
    description:
      "Sun, salt, and movement — which placements hold clarity for travelers getting work at Bloodline Phuket.",
    category: "preparation",
    publishedAt: "2025-07-10",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/images/tattoo-styles/blackwork.jpg",
      alt: "Blackwork tattoo placement on arm",
    },
    regions: ["global", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Outer upper arm, calf, and upper thigh tolerate sun exposure better than ribs, sternum, and tops of feet once you are back on the beach. We design with fade zones in mind, not only for the mirror on day one.",
      },
      {
        type: "heading",
        level: 2,
        text: "Scale versus trip length",
      },
      {
        type: "paragraph",
        text: "A palm-sized piece can heal within a short Phuket stay. Sleeves and back pieces need return visits or a longer buffer before flying. We would rather schedule a second session than rush closure.",
      },
    ],
    relatedStyles: [{ label: "Blackwork", href: "/tattoo-styles/blackwork" }],
  },
  {
    slug: "fine-line-aftercare-humid-climates",
    title: "Fine Line Aftercare in Humid Climates",
    description:
      "Thin lines and micro-detail need a different recovery rhythm in Bangkok, Bali, and Phuket heat.",
    category: "aftercare",
    publishedAt: "2025-06-18",
    readingTimeMinutes: 4,
    featuredImage: {
      src: "/images/tattoo-styles/fine-line.jpg",
      alt: "Fine line tattoo healing detail",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Humidity keeps skin soft longer. That means extra vigilance against fabric rub and sweat sitting on the film. Thin lotion layers beat heavy occlusive balms in our climate.",
      },
      {
        type: "paragraph",
        text: "Avoid steam rooms and direct sun for the full sealing window. If lines look blown out after healing, come back for a review — fine line touch-ups are normal when aftercare was perfect but placement was high-friction.",
      },
    ],
    relatedStyles: [{ label: "Fine line", href: "/tattoo-styles/fine-line" }],
  },
  {
    slug: "japanese-tattoo-studio-etiquette",
    title: "Japanese Tattoo Etiquette at a Premium Studio",
    description:
      "Respect, reference, and session structure for Japanese work at Bloodline — without myth or tourist shortcuts.",
    category: "tattoo-styles",
    publishedAt: "2025-05-30",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/images/tattoo-styles/japanese.jpg",
      alt: "Japanese tattoo composition at Bloodline",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Japanese work at Bloodline is discipline-first: flow with the body, readable contrast at distance, and motifs that belong together. Bring structural references, not random icon collage.",
      },
      {
        type: "heading",
        level: 2,
        text: "Consultation respect",
      },
      {
        type: "paragraph",
        text: "Large Japanese pieces are projects, not walk-ins. We discuss coverage, negative space, and session count honestly. Copying another artist’s custom back piece is off the table — we build your composition.",
      },
    ],
    relatedStyles: [{ label: "Japanese tattoos", href: "/tattoo-styles/japanese" }],
  },
  {
    slug: "cover-up-tattoo-consultation-checklist",
    title: "Cover-Up Tattoo Consultation Checklist",
    description:
      "Photos, history, and expectations to send before a cover-up consult at Bloodline.",
    category: "studio-advice",
    publishedAt: "2025-04-14",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/images/tattoo-styles/blackwork.jpg",
      alt: "Cover-up tattoo planning reference",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Send healed photos in natural light, size reference (coin or ruler), and age of the existing tattoo. Tell us if laser removal was attempted. Cover-ups are design problems — not color dumps.",
      },
      {
        type: "heading",
        level: 2,
        text: "What we need on WhatsApp",
      },
      {
        type: "paragraph",
        text: "Placement, desired new direction (darker floral, blackwork blast, realism scene), and travel dates. We may recommend laser sessions first when ink is saturated. Honest no is better than a grey blur you will want removed.",
      },
    ],
    relatedServices: [{ label: "Book a cover-up consult", href: "/contact" }],
  },
  {
    slug: "blackwork-healing-and-contrast",
    title: "Blackwork Healing and Contrast",
    description:
      "How solid black heals in tropical climates and when to schedule touch-ups for saturated blackwork at Bloodline.",
    category: "aftercare",
    publishedAt: "2025-03-28",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/images/tattoo-styles/blackwork.jpg",
      alt: "Healed blackwork tattoo with strong contrast",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Blackwork looks matte and flat while healing — that is normal. Contrast returns as the skin settles. Avoid sun and friction on large saturated areas for the full sealing window.",
      },
      {
        type: "paragraph",
        text: "If grey haze appears after healing, send photos. We may recommend a blast pass or a short touch-up session rather than living with washed black.",
      },
    ],
    relatedStyles: [{ label: "Blackwork", href: "/tattoo-styles/blackwork" }],
  },
  {
    slug: "realism-reference-board-guide",
    title: "Building a Realism Reference Board",
    description:
      "What to collect before your realism consult — lighting, scale, and subject clarity that help Bloodline artists plan faster.",
    category: "tattoo-guides",
    publishedAt: "2025-03-15",
    readingTimeMinutes: 6,
    featuredImage: {
      src: "/images/tattoo-styles/realism.jpg",
      alt: "Realism tattoo reference planning",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Bring references that share lighting direction and contrast range. Mixing a flash photo with a soft portrait forces compromise in the stencil phase.",
      },
      {
        type: "heading",
        level: 2,
        text: "Scale on the body",
      },
      {
        type: "paragraph",
        text: "Print or mark approximate size on your arm or leg in photos. We design for movement and aging — flat Pinterest crops are a starting point, not the blueprint.",
      },
    ],
    relatedStyles: [{ label: "Realism", href: "/tattoo-styles/realism" }],
  },
  {
    slug: "geometric-tattoo-flow-and-placement",
    title: "Geometric Tattoos: Flow and Placement",
    description:
      "How Bloodline maps geometric and ornamental work to muscle flow so lines stay crisp as you move.",
    category: "tattoo-styles",
    publishedAt: "2025-03-02",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/images/tattoo-styles/japanese.jpg",
      alt: "Geometric ornamental tattoo composition",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Geometric work fails when it ignores joint movement. We bias layouts along natural seams — shoulder cap, forearm twist, calf sweep — so panels do not shear when you flex.",
      },
      {
        type: "paragraph",
        text: "Symmetry requests are welcome, but anatomy wins. Expect honest adjustments in consult before we lock line weight and negative space.",
      },
    ],
    relatedStyles: [{ label: "Mandala", href: "/tattoo-styles/mandala" }],
  },
  {
    slug: "first-tattoo-studio-etiquette",
    title: "First Tattoo: Studio Etiquette",
    description:
      "What to wear, eat, and expect on your first visit to Bloodline — calm, professional, and consultation-first.",
    category: "studio-advice",
    publishedAt: "2025-02-20",
    readingTimeMinutes: 4,
    featuredImage: {
      src: "/hero-poster.jpg",
      alt: "Bloodline studio environment",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Eat a real meal, hydrate, and arrive on time. Wear clothing that opens the placement without shifting the area during stencil approval.",
      },
      {
        type: "paragraph",
        text: "Questions are encouraged — this is collaborative, not performative. Phones for reference are fine; distraction during lining is not.",
      },
    ],
  },
  {
    slug: "bangkok-vs-bali-which-studio",
    title: "Bangkok vs Bali: Which Bloodline Studio Fits Your Trip",
    description:
      "Compare session rhythm, climate, and travel style when choosing between Bloodline Bangkok and Bloodline Bali.",
    category: "travel-tattoos",
    publishedAt: "2025-02-08",
    readingTimeMinutes: 6,
    featuredImage: {
      src: "/images/tattoo-styles/fine-line.jpg",
      alt: "Tattoo session in a premium studio",
    },
    regions: ["global", "bangkok", "bali"],
    body: [
      {
        type: "paragraph",
        text: "Bangkok suits dense city itineraries and multi-day custom projects. Bali suits slower island pacing but demands stricter sun discipline afterward.",
      },
      {
        type: "paragraph",
        text: "Message both studios if you are unsure — we route you to the team and calendar that matches healing time, not only geography.",
      },
    ],
  },
  {
    slug: "phuket-short-stay-session-planning",
    title: "Phuket Short-Stay Session Planning",
    description:
      "Maximizing a 5–7 day Phuket window for a single premium piece without compromising heal time.",
    category: "travel-tattoos",
    publishedAt: "2025-01-25",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/images/tattoo-styles/blackwork.jpg",
      alt: "Tattoo planning for Phuket travelers",
    },
    regions: ["global", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Book consult before arrival when possible. We scope size to heal before your flight — not everything belongs in one marathon session.",
      },
      {
        type: "paragraph",
        text: "Pool and boat days wait until the skin is sealed. We will tell you no if the calendar is unrealistic; a healed small piece beats a blown large one.",
      },
    ],
  },
  {
    slug: "spf-and-healed-tattoo-longevity",
    title: "SPF and Healed Tattoo Longevity",
    description:
      "Daily sun protection habits that keep color and line crisp years after your Bloodline session.",
    category: "aftercare",
    publishedAt: "2025-01-12",
    readingTimeMinutes: 4,
    featuredImage: {
      src: "/images/tattoo-styles/realism.jpg",
      alt: "Healed tattoo in daylight",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "SPF 50+ on exposed work is non-negotiable in Southeast Asia. Reapply through the day when outdoors — shirts and shade are part of aftercare forever, not only week one.",
      },
      {
        type: "paragraph",
        text: "Moisturizer supports skin health but does not replace UV blocking. Faded work is often sun damage, not artist error.",
      },
    ],
  },
  {
    slug: "fine-line-vs-micro-realism",
    title: "Fine Line vs Micro Realism",
    description:
      "Choose the right lane for delicate work — line weight, longevity, and healing trade-offs at Bloodline.",
    category: "tattoo-guides",
    publishedAt: "2024-12-20",
    readingTimeMinutes: 5,
    featuredImage: {
      src: "/images/tattoo-styles/fine-line.jpg",
      alt: "Fine line tattoo detail",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Fine line favors open skin and low friction. Micro realism adds soft shading but needs more heal discipline. We recommend placement and size based on your travel and sun exposure.",
      },
      {
        type: "paragraph",
        text: "Ultra-micro detail on fingers or ribs is often a bad fit for humid trips — we will redirect rather than promise ink that cannot hold.",
      },
    ],
    relatedStyles: [{ label: "Fine line", href: "/tattoo-styles/fine-line" }],
  },
  {
    slug: "whatsapp-booking-deposits-explained",
    title: "WhatsApp Booking and Deposits Explained",
    description:
      "How Bloodline confirms your session, holds your date, and what to send in your first message.",
    category: "studio-advice",
    publishedAt: "2024-12-05",
    readingTimeMinutes: 4,
    featuredImage: {
      src: "/hero-poster.jpg",
      alt: "Booking a tattoo session via WhatsApp",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Start with placement photos, approximate size, style direction, and travel dates. Deposits secure artist time after consult approval — details vary by studio and project scale.",
      },
      {
        type: "paragraph",
        text: "We respond with feasibility before payment. No deposit locks a design we have not reviewed.",
      },
    ],
    relatedServices: [{ label: "Contact", href: "/contact" }],
  },
  {
    slug: "large-scale-session-breakdown",
    title: "Planning Large-Scale Sessions",
    description:
      "How Bloodline splits back pieces, bodysuits, and multi-day work across healing windows.",
    category: "preparation",
    publishedAt: "2024-11-18",
    readingTimeMinutes: 7,
    featuredImage: {
      src: "/images/tattoo-styles/japanese.jpg",
      alt: "Large scale Japanese tattoo session planning",
    },
    regions: ["global", "bangkok", "bali", "phuket"],
    body: [
      {
        type: "paragraph",
        text: "Large work is a schedule problem as much as a design problem. We map sessions around swelling, sleep, and travel — not arbitrary daily hour caps.",
      },
      {
        type: "heading",
        level: 2,
        text: "Healing between sits",
      },
      {
        type: "paragraph",
        text: "Enough gap between heavy days keeps line quality high. Rushing adjacent panels while tissue is angry costs more time than spacing sessions correctly.",
      },
    ],
    relatedStyles: [{ label: "Japanese", href: "/tattoo-styles/japanese" }],
  },
];

const blogCatalog = z.array(blogPostSchema).parse(blogCatalogRaw);

export const BLOG_CATEGORY_LABELS: Record<BlogCategorySlug, string> = {
  "tattoo-guides": "Tattoo Guides",
  "tattoo-styles": "Tattoo Styles",
  aftercare: "Aftercare",
  "travel-tattoos": "Travel & Tattoo",
  preparation: "Tattoo Ideas",
  "studio-advice": "Studio Advice",
};

export const BLOG_CATEGORY_ORDER: readonly BlogCategorySlug[] = [
  "tattoo-guides",
  "travel-tattoos",
  "preparation",
  "aftercare",
  "tattoo-styles",
  "studio-advice",
];

export { blogCatalog };
