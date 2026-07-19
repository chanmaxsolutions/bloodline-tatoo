import type {
  AboutPageIntro,
  AboutPageStoryBlock,
  AboutPageTrustStat,
  AboutPageVideo,
} from "@/types/about-page";
import type { RegionSlug } from "@/types/region";
import { resolveGoogleBusinessTrustStats } from "@/lib/google-business-proof";

const ABOUT_STUDIO_STORY_YOUTUBE_VIDEO_ID = "4t9BxBku6wI";

function aboutIntroForRegion(region: RegionSlug, regionName: string): AboutPageIntro {
  if (region === "global") {
    return {
      eyebrow: "Inside the studio",
      heading: "A STUDIO HOUSE BUILT ON ONE STANDARD",
      description:
        "Bloodline runs across Bangkok, Bali and Phuket on one baseline. Consultation first, sterile discipline and custom work built to hold on skin for life.",
    };
  }

  if (region === "bali") {
    return {
      eyebrow: "Inside the studio",
      heading: "THE BLOODLINE STANDARD",
      description:
        "Bloodline Tattoo Bali runs on a family feel and an organised floor. Consultation first, dedicated staff throughout and every session executed with the care that permanent work deserves.",
    };
  }

  return {
    eyebrow: "Inside the studio",
    heading: `PREMIUM TATTOO STUDIO IN ${regionName.toUpperCase()}`,
    description: `Bloodline ${regionName} runs on calm rooms, measured pacing and craft treated as permanence. Consultation first, sterile practice and execution held with genuine long-term precision.`,
  };
}

function aboutTrustStatsForRegion(
  region: RegionSlug,
  curatedReviewCount: number,
): readonly AboutPageTrustStat[] {
  const googleTrust = resolveGoogleBusinessTrustStats(region);

  if (region === "global") {
    return [
      { label: "Studios across Asia", value: "3" },
      { label: googleTrust.rating.label, value: googleTrust.rating.value },
      { label: googleTrust.reviewCount.label, value: googleTrust.reviewCount.value },
    ];
  }

  return [
    { label: googleTrust.rating.label, value: googleTrust.rating.value },
    { label: "Reviews on this page", value: String(curatedReviewCount) },
    { label: googleTrust.reviewCount.label, value: googleTrust.reviewCount.value },
  ];
}

function aboutStoryBlocksForRegion(
  region: RegionSlug,
  regionName: string,
): readonly AboutPageStoryBlock[] {
  if (region === "global") {
    return [
      {
        paragraphs: [
          "Bloodline was built for clients who want more than trend-driven tattoo culture. Every studio aligns on placement, scale and reference direction before a session is staged.",
          "Across Bangkok, Bali and Phuket you get calm rooms, precise process and sterile practice. The city changes. The standard does not.",
          "You are not booking a fast chair. You are entering a studio house where scope, pacing and aftercare are treated as part of the work.",
        ],
      },
    ];
  }

  if (region === "bali") {
    return [
      {
        paragraphs: [
          "Step inside Bloodline Tattoo Bali and you'll feel it immediately, this isn't like other studios. The space is generous, the energy is calm and every detail has been considered. We believe the environment you work in sets the standard you work to. Build something beautiful, and the people inside it rise to meet it.",
          "Three floors of space for every artist and a dedicated support team whose only focus is making sure you're looked after from the moment you arrive. Whether that's walking you through the process, keeping you comfortable during a long session or making sure every little detail is taken care of, it's all handled so you can just be present for the experience.",
          "When serious artists work alongside each other in a space built for the craft, something special happens. The energy is collaborative, the standard is shared and every person in the room is there because they genuinely love what they do.",
          "A place that looks the part, feels like home and produces work that speaks for itself.",
        ],
      },
    ];
  }

  if (region === "phuket") {
    return [
      {
        heading: "MORE THAN A TATTOO STUDIO. THIS IS BLOODLINE.",
        paragraphs: [
          "Bloodline Tattoo was built on a simple idea — bring good people together, look after each other, and create the best tattoos we possibly can.",
          "Since 2015, Bloodline has grown from one vision into a family of more than 45 full-time tattoo artists and team members across Phuket, Bangkok and Bali. We’ve grown over the years, but the way we run our studios has stayed the same. We believe in treating our artists, staff and clients like part of the family.",
          "When you walk into Bloodline, we want you to feel comfortable. Whether you’re coming in for your first tattoo or travelling across the world for a large-scale custom piece, you’ll be looked after by a team that genuinely cares about what you’re creating.",
        ],
      },
      {
        heading: "BUILT BY FAMILY. RUN LIKE FAMILY.",
        paragraphs: [
          "Bloodline was founded by people who shared the same vision for what a tattoo studio should be.",
          "We wanted to create a place where great tattoo artists could come to work every day, enjoy what they do and focus on producing quality work. A place where the team supports each other and where clients feel welcome from the minute they walk through the door.",
          "Our owners are still hands-on in the business today. We work alongside our managers, artists and staff to keep improving our studios while protecting the family culture Bloodline was built on.",
          "As we’ve grown, that has become even more important to us.",
          "Three locations. One team. One Bloodline family.",
        ],
      },
      {
        heading: "OUR PHUKET TATTOO STUDIO",
        paragraphs: [
          "Bloodline Tattoo Phuket is our home in Thailand and a destination for clients travelling from around the world for custom tattoo work.",
          "As an appointment-focused custom tattoo studio in Phuket, we take the time to understand what each client wants before the tattoo begins. For larger pieces, the process starts with a proper consultation where we discuss your ideas, placement, tattoo style and estimated sessions.",
          "We don’t believe one tattoo artist should try to do every style.",
          "Our Phuket tattoo artists specialise in their own individual areas of tattooing. This allows our team to match each client with an artist whose experience and style are right for the work they want.",
          "From Japanese and realism to fine line, geometric, mandala and other custom tattoo styles, the goal is simple: the right artist for the right tattoo.",
        ],
      },
      {
        heading: "LARGE-SCALE CUSTOM TATTOOING",
        paragraphs: [
          "Large custom tattoos are a big part of what we do at Bloodline.",
          "Full sleeves, leg sleeves, back pieces and other large-scale tattoo projects require proper planning, time and commitment from both the artist and the client.",
          "That’s why we take the process seriously.",
          "From your initial consultation through to your final tattoo session, our team works with you to plan the project properly. We explain the expected number of sessions, organise consecutive appointments where required and make sure you understand the process before getting started.",
          "No rushing. No cutting corners.",
          "Just experienced tattoo artists doing what they do best.",
        ],
      },
      {
        heading: "OUR ARTISTS ARE THE HEART OF BLOODLINE",
        paragraphs: [
          "Bloodline wouldn’t be Bloodline without our artists.",
          "We are proud to have built a team of full-time tattoo artists who bring their own experience, personality and specialist style to the studio.",
          "Some have been tattooing for many years. Others have grown their careers as part of the Bloodline family. What matters to us is that everyone shares the same commitment to their work and to the people sitting in their chair.",
          "We want our artists to enjoy coming to work.",
          "Because when you build the right environment for your team, give artists the freedom to focus on their craft and surround them with people who support them, the quality of the work speaks for itself.",
        ],
      },
      {
        heading: "FROM PHUKET TO BANGKOK AND BALI",
        paragraphs: [
          "What started in Phuket has grown into three Bloodline Tattoo studios across Southeast Asia.",
          "Today, you’ll find the Bloodline family in Phuket, Bangkok and Bali.",
          "Each studio has its own team and personality, but we all share the same Bloodline values: quality tattooing, specialist artists, proper planning and looking after our clients from their first message through to their final session.",
          "Wherever you visit us, you’re walking into the same family.",
        ],
      },
      {
        heading: "THE BLOODLINE STANDARD",
        paragraphs: [
          "For us, the Bloodline standard isn’t a marketing line.",
          "It’s how we work every day.",
          "It means taking the time to understand the tattoo before we start. Matching clients with artists who specialise in the right style. Maintaining professional studio standards. Planning large tattoo projects properly. And making sure our clients feel looked after throughout the entire experience.",
          "We’ve spent years building Bloodline, and we’re proud of what our team has created together.",
          "We’re always looking to improve, but one thing won’t change:",
          "Bloodline will always be about the people.",
          "The owners. The artists. The staff. The clients.",
          "That’s the Bloodline family.",
        ],
      },
    ];
  }

  const studio = `Bloodline ${regionName}`;

  return [
    {
      paragraphs: [
        `${studio} sits in the heart of Bangkok and operates on the same disciplined floor as the wider house. Structured consultation, measured execution and sterile practice on every session.`,
        "Clients come for the work and return for the consistency. Calm process, serious standards and a room that stays focused from the first message through to the final detail.",
        "Whether you are based in Bangkok or travelling through, we align on scope and timing first, then execute with care in the room.",
      ],
    },
  ];
}

function aboutVideoForRegion(region: RegionSlug, regionName: string): AboutPageVideo {
  const base = {
    youtubeVideoId: ABOUT_STUDIO_STORY_YOUTUBE_VIDEO_ID,
    embedTitle: "Bloodline Tattoo studio story",
  };

  if (region === "global") {
    return {
      ...base,
      eyebrow: "Studio story",
      heading: "THE STORY BEHIND THE STUDIO HOUSE",
      description:
        "Watch how Bloodline formed across Bangkok, Bali and Phuket. Consultation first, sterile discipline and work built to hold on skin for life.",
    };
  }

  if (region === "bali") {
    return {
      ...base,
      eyebrow: "Studio story",
      heading: "THE STORY BEHIND THE STUDIO",
      description: `The same philosophy behind every Bloodline studio. See how the house was built and why the standard stays the same from city to city.`,
    };
  }

  return {
    ...base,
    eyebrow: "Studio story",
    heading: "THE HOUSE BEHIND THE ROOM",
    description: `The same philosophy behind every Bloodline studio. See how the house was built and why the standard stays the same from city to city.`,
  };
}

function aboutClosingForRegion(region: RegionSlug, regionName: string) {
  if (region === "global") {
    return {
      heading: "READY TO BOOK YOUR NEXT SESSION?",
      description:
        "Choose your studio and message us on WhatsApp. We align on placement, scale and timing before anything is committed.",
    };
  }

  return {
    heading: `READY TO BOOK YOUR ${regionName.toUpperCase()} SESSION?`,
    description: `Tell us what you have in mind. We align on placement, scale and timing before the session is locked in.`,
  };
}

function aboutPageContentForRegion(
  region: RegionSlug,
  regionName: string,
  curatedReviewCount: number,
) {
  return {
    intro: aboutIntroForRegion(region, regionName),
    trustStats: aboutTrustStatsForRegion(region, curatedReviewCount),
    storyBlocks: aboutStoryBlocksForRegion(region, regionName),
    video: aboutVideoForRegion(region, regionName),
    closing: aboutClosingForRegion(region, regionName),
  };
}

export { aboutPageContentForRegion };
