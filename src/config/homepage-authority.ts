import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";
import type { RegionSlug } from "@/types/region";

function homepageAuthorityForRegion(
  slug: RegionSlug,
  regionName: string,
): RegionHomepageAuthorityConfig {
  const studio = slug === "global" ? "Bloodline" : `Bloodline ${regionName}`;

  if (slug === "global") {
    return {
      eyebrow: "The institution",
      heading: "ARTISTRY HELD TO A GLOBAL BASELINE.",
      description: `${studio} is built as an **elite studio house**—not a volume shop or a trend surface. **Consultation comes before commitment**, execution stays under restraint, and hygiene is treated as infrastructure: **the same non-negotiable floor** whether you sit in Bangkok, Bali, or Phuket. Sessions follow a disciplined rhythm—alignment is clarified before the needle moves, the room stays calm so the work stays exact, and permanence is respected as a decision that will outlast the appointment. When we say global, we mean craft discipline, procedural seriousness, and an atmosphere where premium work can be held to account on every pass, every field, every day.`,
      ctaLabel: "Inside the studio",
      ctaHref: "/about",
    };
  }

  return {
    eyebrow: "The institution",
    heading: `THE SAME BASELINE IN ${regionName.toUpperCase()}.`,
    description: `${studio} carries the same institutional posture as the wider house: **structured consultation**, **measured execution**, and standards that do not flex for convenience. The work is staged with intent—stencil discipline, **sterile field habits**, and pacing that keeps uncertainty out of the room while the piece is built line by line. What you should feel here is continuity: the same gravity, the same seriousness, and the same refusal to rush permanence—only the city changes.`,
    ctaLabel: "Inside the studio",
    ctaHref: "/about",
  };
}

export { homepageAuthorityForRegion };
