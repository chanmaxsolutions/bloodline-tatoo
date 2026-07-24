import { homepageMediaPaths } from "@/config/homepage-media";
import type { RegionHomepageStandardsSplitConfig } from "@/types/homepage-standards-split";
import type { RegionSlug } from "@/types/region";

/** Phuket YouTube frame posters (downloaded from each video’s maxres thumb, WebP q92). */
const phuketYoutubePosterPaths = {
  standardsSplit: "/images/homepage/phuket/youtube-poster-standards-20250724-home.webp",
  sessionPath: "/images/homepage/phuket/youtube-poster-session-20250724-home.webp",
} as const;

const standardsSplitAltByRegion: Record<RegionSlug, string> = {
  global:
    "Close detail of premium tattoo execution in a controlled Bloodline studio session across Asia",
  bangkok:
    "Black and grey realism sleeve with Greek god, winged angel, cathedral architecture, and eye detail at Bloodline Tattoo Bangkok",
  bali: "Professional tattoo artists working in the sterile Bloodline Tattoo Bali studio with black and grey realism murals and clinical session standards",
  phuket:
    "Still from Bloodline Tattoo’s Asia empire studio film — team under neon branding and hexagonal lights",
};

const sessionPathAltByRegion: Record<RegionSlug, string> = {
  global:
    "Bloodline studio atmosphere and controlled lighting for premium tattoo sessions across Bangkok, Bali, and Phuket",
  bangkok:
    "Black and grey realism back tattoo with Greek god portrait, winged angel, temple, and lightning at Bloodline Tattoo Bangkok",
  bali: "Tattoo artists and client reviewing a custom design on a tablet during consultation at Bloodline Tattoo Bali before session day",
  phuket:
    "Still from Bloodline Tattoo’s studio story film — founders and artists seated in the Phuket studio",
};

function homepageStandardsSplitForRegion(
  slug: RegionSlug,
  regionName: string,
): RegionHomepageStandardsSplitConfig {
  const studio = slug === "global" ? "Bloodline" : `Bloodline ${regionName}`;

  if (slug === "global") {
    return {
      bandSurface: "elevated",
      eyebrow: "Studio standard",
      heading: "PREMIUM STANDARD. SERIOUS CRAFT.",
      intro:
        "The house runs on consultation first, sterile practice and execution held with genuine discipline across every studio.",
      pointerLabels: ["Studio foundation", "Execution discipline", "Across studios"],
      pointerIcons: ["building-2", "pen-tool", "globe"],
      bullets: [
        `${studio} is built as a studio house. Consultation before commitment, measured pacing and craft discipline that does not follow trends.`,
        "The same execution standards across every city. Sterile field habits, stencil integrity and a calm room so the work stays exact on every pass.",
        "Bangkok, Bali and Phuket operate on one floor. Permanence treated with seriousness, not speed.",
      ],
      cta: { label: "About the studio", href: "/about" },
      media: {
        src: homepageMediaPaths.standardsSplit(slug),
        alt: standardsSplitAltByRegion[slug],
      },
    };
  }

  const standardsSplitHeadingByRegion: Record<Exclude<RegionSlug, "global">, string> = {
    bangkok: "PREMIUM WORK. DISCIPLINED ROOM.",
    bali: "PREMIUM WORK. DISCIPLINED ROOM.",
    phuket: "ASIA'S BIGGEST TATTOO EMPIRE. BUILT WITH DISCIPLINE.",
  };

  const standardsSplitIntroByRegion: Record<Exclude<RegionSlug, "global">, string> = {
    bangkok:
      "How Bangkok sessions are run. Structured consultation, measured pacing and craft discipline that does not follow trends.",
    bali: "How we run things in Bali. From first consultation to final result. Organised, personal and held to a standard we don't compromise on.",
    phuket:
      "How Bloodline grew from one studio into Asia's largest appointment-only tattoo group through family values, specialist artists and uncompromising standards",
  };

  const standardsSplitCustomExecutionBulletByRegion: Record<
    Exclude<RegionSlug, "global">,
    string
  > = {
    bangkok:
      "Custom work is built with intent. Stencil discipline, tonal control and careful pacing keep the process steady while the piece comes together.",
    bali: "Every piece starts with a conversation. Designed from the ground up, consulted, crafted and executed with intent.",
    phuket:
      "Custom work is built with intent. Stencil discipline, tonal control and careful pacing keep the process steady while the piece comes together.",
  };

  const standardsSplitPointerLabels =
    slug === "bali"
      ? (["Room baseline", "Custom Execution", "House gravity"] as const)
      : (["Room baseline", "Custom execution", "House gravity"] as const);

  return {
    bandSurface: "elevated",
    eyebrow: "Studio standard",
    heading: standardsSplitHeadingByRegion[slug],
    intro: standardsSplitIntroByRegion[slug],
    pointerLabels: [...standardsSplitPointerLabels],
    pointerIcons: ["shield-check", "pen-tool", "building-2"],
    bullets: [
      `${studio} runs on a clear baseline. Structured consultation, sterile practice and execution held with genuine discipline, not hype.`,
      standardsSplitCustomExecutionBulletByRegion[slug],
      "The standard you feel here is the same across every Bloodline studio. Only the city changes.",
    ],
    cta: { label: "About the studio", href: "/about" },
    media:
      slug === "phuket"
        ? {
            kind: "youtube",
            youtubeVideoId: "QC8k-tWgNIc",
            embedTitle: "Bloodline Tattoo — Asia's biggest tattoo empire",
            posterSrc: phuketYoutubePosterPaths.standardsSplit,
            alt: standardsSplitAltByRegion[slug],
          }
        : {
            src: homepageMediaPaths.standardsSplit(slug),
            alt: standardsSplitAltByRegion[slug],
          },
  };
}

function homepageSessionPathSplitForRegion(
  slug: RegionSlug,
  regionName: string,
): RegionHomepageStandardsSplitConfig {
  const studio = slug === "global" ? "Bloodline" : `Bloodline ${regionName}`;

  if (slug === "global") {
    return {
      mediaSide: "start",
      proofVariants: ["dark", "light", "accent"],
      eyebrow: "SESSION PATH",
      heading: "MESSAGE TO HEALED WORK",
      intro:
        "One consultation process across Bangkok, Bali and Phuket. Clear from first message through final heal, with no vague steps between studios.",
      pointerLabels: ["Cross-studio consult", "Timing on the desk", "Aftercare included"],
      pointerIcons: ["message-square", "clock", "heart-pulse"],
      bullets: [
        `${studio} runs one consultation process across Bangkok, Bali and Phuket. Expectations are aligned before you travel.`,
        "Scope, session length, sterile prep and pacing are all confirmed before your session day. Nothing is left vague.",
        "Aftercare is part of the work. Clear steps so your healing protects the line weight and tone we built.",
      ],
      cta: { label: "Book consultation", href: "/contact" },
      media: {
        src: homepageMediaPaths.sessionPath(slug),
        alt: sessionPathAltByRegion[slug],
      },
    };
  }

  const sessionPathHeadingByRegion: Record<Exclude<RegionSlug, "global">, string> = {
    bangkok: "CONSULT TO HEALED WORK",
    bali: "THE FULL JOURNEY",
    phuket: "EVERY GREAT TATTOO STUDIO HAS A STORY. THIS IS OURS.",
  };

  const sessionPathIntroByRegion: Record<Exclude<RegionSlug, "global">, string> = {
    bangkok:
      "Consultation, agreed scope, then execution in the chair. Each stage is clear before you commit. Placement, pacing and recovery are all set before session day.",
    bali: "Every Bloodline booking starts with a conversation. Tell us what you've always wanted and we'll take it from there. Everything sorted before you set foot in the studio.",
    phuket:
      "Built from the ground up through family, discipline and a commitment to world-class tattooing. This is the story behind Bloodline Tattoo and how we became one of Asia's leading tattoo studios.",
  };

  const sessionPathCtaByRegion: Record<
    Exclude<RegionSlug, "global">,
    { label: string; href: string }
  > = {
    bangkok: { label: "Book consultation", href: "/contact" },
    bali: { label: "Book a session", href: "/contact" },
    phuket: { label: "Book consultation", href: "/contact" },
  };

  const sessionPathPointerLabels =
    slug === "bali"
      ? (["Everything Agreed First", "Consultation Day", "Session Day"] as const)
      : (["Consult first", "Scope locked", "Session day"] as const);

  const sessionPathPointerIcons =
    slug === "bali"
      ? (["clipboard-list", "message-square", "shield-check"] as const)
      : (["message-square", "clipboard-list", "shield-check"] as const);

  const sessionPathBullets =
    slug === "bali"
      ? ([
          "Placement, session count and everything in between. All locked in before you're asked to commit. No surprises, no pressure.",
          "This is where it all comes together. Meet your artist, go over everything you've shared and lock in the blueprint for the piece you're about to wear.",
          "The day you've been waiting for. Our team is with you every step of the way. Dedicated staff, a comfortable environment and everything in place to make sure your experience is as seamless as the work going on your skin. This is where you become part of the Bloodline family.",
        ] as const)
      : ([
          `${studio} runs consult first. Scope, timing and sterile prep are all agreed before the session is committed.`,
          "You know placement, session length and recovery expectations before anything is staged. No vague deposit games.",
          "Session day is calm. Disciplined field habits, controlled pacing and a close-out brief that protects the line weight and tone of your work.",
        ] as const);

  return {
    mediaSide: "start",
    proofVariants: ["dark", "light", "accent"],
    eyebrow: "SESSION PATH",
    heading: sessionPathHeadingByRegion[slug],
    intro: sessionPathIntroByRegion[slug],
    pointerLabels: [...sessionPathPointerLabels],
    pointerIcons: [...sessionPathPointerIcons],
    bullets: [...sessionPathBullets],
    cta: sessionPathCtaByRegion[slug],
    media:
      slug === "phuket"
        ? {
            kind: "youtube",
            youtubeVideoId: "4t9BxBku6wI",
            embedTitle: "Bloodline Tattoo — the story behind the studio",
            posterSrc: phuketYoutubePosterPaths.sessionPath,
            alt: sessionPathAltByRegion[slug],
          }
        : {
            src: homepageMediaPaths.sessionPath(slug),
            alt: sessionPathAltByRegion[slug],
          },
  };
}

export { homepageSessionPathSplitForRegion, homepageStandardsSplitForRegion };
