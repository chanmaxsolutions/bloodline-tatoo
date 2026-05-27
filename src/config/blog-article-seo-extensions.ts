import type { BlogFaqItem } from "@/types/blog";

interface BlogArticleSeoExtension {
  quickAnswer?: string;
  faq?: readonly BlogFaqItem[];
}

/**
 * SEO/AEO fields keyed by slug — keeps catalog body-focused and eases future MDX frontmatter migration.
 */
const blogArticleSeoExtensionsBySlug: Record<string, BlogArticleSeoExtension> = {
  "choose-tattoo-style-before-you-travel": {
    quickAnswer:
      "Choose your tattoo style before you travel by locking placement, scale, and a single reference lane first. Match that style to your trip length and healing window, then message Bloodline with photos and dates so we confirm what is realistic before you book flights.",
    faq: [
      {
        question: "Should I pick a tattoo style before booking my trip?",
        answer:
          "Yes. Style lane, placement, and healing time should be aligned before flights. That prevents booking a trip that is too short for the work you want or choosing references that do not suit your skin and placement.",
      },
      {
        question: "How many reference images should I send?",
        answer:
          "Send two or three references that share line weight, contrast, and mood — not a mixed Pinterest board. We use them to confirm feasibility and session count, not to copy another artist’s custom piece.",
      },
      {
        question: "Can I get a large piece done in one vacation?",
        answer:
          "Sometimes, but not always. Fine line and smaller work often fit one trip. Large Japanese, blackwork, and realism projects may need multiple sessions or a longer healing buffer before sun and water activities.",
      },
    ],
  },
  "realistic-tattoo-healing-timeline": {
    quickAnswer:
      "Realism tattoos typically need 14–21 days before swimming or heavy sun, with strict wash-and-moisturize care through days 1–3 and no picking during flaking. In humid climates, plan indoor recovery and message the studio if heat or redness spreads after the first week.",
    faq: [
      {
        question: "When can I swim after a realism tattoo?",
        answer:
          "Wait until the skin is matte and fully sealed — usually 14–21 days for larger work. Short showers are fine earlier; submersion and pool chemicals are what delay safe healing.",
      },
      {
        question: "Is flaking normal on a realism piece?",
        answer:
          "Yes. Light flaking in week one means the surface is sealing. Do not pick — picking pulls ink and can scar. Keep thin lotion layers and avoid heavy occlusive balms in heat.",
      },
      {
        question: "What if my tattoo looks dull while healing?",
        answer:
          "Muted or milky phases are common mid-heal. True clarity returns as the skin settles. If grey haze or blown lines remain after full healing, send photos — we may recommend a review or touch-up pass.",
      },
    ],
  },
  "bangkok-tattoo-session-what-to-expect": {
    quickAnswer:
      "A Bloodline Bangkok session starts on WhatsApp with references, placement, and scale. On the day you arrive fed and sober, approve the stencil collaboratively, and leave with written aftercare. Large work may split across two days; morning sessions help in Bangkok heat.",
    faq: [
      {
        question: "How do I book a tattoo session in Bangkok?",
        answer:
          "Message Bloodline Bangkok on WhatsApp with reference images, placement photos, approximate size, and travel dates. We confirm artist lane, timing, and deposit expectations before you fly.",
      },
      {
        question: "What should I do the morning of my session?",
        answer:
          "Eat, hydrate, and avoid alcohol. Wear comfortable clothing for the placement. Arrive on time so stencil approval and setup are not rushed.",
      },
    ],
  },
  "planning-tattoo-on-bali-trip": {
    quickAnswer:
      "Plan Bali tattoos after heavy beach and pool days, not before. Land with time for a consult on custom work, protect fine line from humidity and friction, and message Bloodline Bali with dates so we confirm the trip fits the piece you want.",
    faq: [
      {
        question: "When should I schedule a tattoo during a Bali trip?",
        answer:
          "Book toward the end of open-water-heavy days or allow enough healing time before boats, surf, and pools. We recommend landing a day early for custom or cover-up consults.",
      },
      {
        question: "Does humidity affect fine line healing?",
        answer:
          "Yes. Humidity keeps skin soft longer, so friction and sweat matter more. Thin lotion layers and breathable clothing help; we may suggest bolder line weight if your itinerary is high-friction.",
      },
    ],
  },
  "cover-up-tattoo-consultation-checklist": {
    quickAnswer:
      "For a cover-up consult, send healed photos in natural light, size reference, tattoo age, and any laser history. Cover-ups are design problems — share your desired direction and travel dates on WhatsApp so Bloodline can say honestly if laser sessions are needed first.",
    faq: [
      {
        question: "What photos do you need for a cover-up consult?",
        answer:
          "Healed photos in natural light with a coin or ruler for scale. Include angles that show saturation and line blur. Note prior laser removal or heavy black work upfront.",
      },
      {
        question: "Can any tattoo be covered in one session?",
        answer:
          "No. Dense old work may need laser lightening first or a multi-session plan. We prefer an honest timeline over a grey blur you will want removed later.",
      },
    ],
  },
  "fine-line-aftercare-humid-climates": {
    quickAnswer:
      "Fine line aftercare in humid climates means thin lotion layers, no heavy balms, and strict avoidance of steam, sun, and fabric rub until the skin seals. If lines soften after healing, book a review — touch-ups are common when placement is high-friction.",
    faq: [
      {
        question: "Why is fine line harder to heal in humidity?",
        answer:
          "Humidity keeps skin soft longer, so sweat and fabric rub can disturb thin lines. Lighter moisture and breathable clothing reduce blowouts compared with heavy occlusive products.",
      },
    ],
  },
};

function getBlogArticleSeoExtension(slug: string): BlogArticleSeoExtension | undefined {
  return blogArticleSeoExtensionsBySlug[slug];
}

export { blogArticleSeoExtensionsBySlug, getBlogArticleSeoExtension };
export type { BlogArticleSeoExtension };
