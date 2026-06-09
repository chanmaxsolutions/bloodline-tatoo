import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type HealedStudioRegion = "bali";

const healedImageRoot = "/images/tattoo-styles/healed";

function isHealedStudioRegion(studio: TattooStyleStudioRegion): studio is HealedStudioRegion {
  return studio === "bali";
}

function healedProofSrc(studio: HealedStudioRegion, filename: string): string {
  return `${healedImageRoot}/${studio}/proof/${filename}`;
}

const healedStudioMediaByRegion = {
  bali: {
    heroAlt:
      "Healed black and grey full-back tattoo with woman portrait and motorcycle at Bloodline Tattoo Bali",
    approachAlt:
      "Healed Japanese black and grey full-back tattoo with dragon, Hannya masks, and samurai at Bloodline Tattoo Bali",
    cardAlt:
      "Healed black and grey wildlife full-leg sleeve with wolf, squirrel, and deer at Bloodline Tattoo Bali",
  },
} as const satisfies Record<
  HealedStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const healedProofPoolsByStudio: Record<HealedStudioRegion, readonly TattooStyleDetailProofImage[]> =
  {
    bali: [
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-01-03-25-23-55-47-bloodline-bali.webp"),
        alt: "Healed full-back dragon composition with mirrored Hannya masks, pagoda detailing, and soft greywash transitions holding strong line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-07-10-25-17-22-00-bloodline-bali.webp"),
        alt: "Healed black-and-grey sleeve with a dragon, Hannya mask, and watchful eye, showing smooth gradients and crisp healed line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-07-10-25-17-22-01-bloodline-bali.webp"),
        alt: "Healed Japanese sleeve with a Hannya mask, rope braid, and katana elements, showing settled blacks and sharp healed line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-07-10-25-17-24-04-bloodline-bali.webp"),
        alt: "Healed black-and-grey leg sleeve with a ram-headed Egyptian portrait, pharaoh face, and monument forms, finished with smooth healed shading at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-07-10-25-17-24-05-bloodline-bali.webp"),
        alt: "Healed surreal leg sleeve with a mechanical ram, lion portrait, and robotic hand motif, holding rich blacks and clean healed contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-09-01-24-17-23-44-bloodline-bali.webp"),
        alt: "Healed Japanese sleeve with temple guardian faces, mask imagery, and orange cloud accents, showing durable color saturation and healed edge clarity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-09-01-24-17-23-45-bloodline-bali.webp"),
        alt: "Healed Japanese leg sleeve with a snarling dragon and orange cloud accents, showing strong healed saturation and crisp line separation at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-09-05-25-16-07-19-bloodline-bali.webp"),
        alt: "Healed black-and-grey sleeve with Madonna, cherub, and Christ portraiture, showing soft portrait realism and stable healed line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-10-06-24-22-49-20-bloodline-bali.webp"),
        alt: "Healed realism leg sleeve with a Native portrait, feathers, and snarling wolf, showing smooth grey transitions and durable healed contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-1-bloodline-bali.webp"),
        alt: "Healed leg sleeve with a female face, butterfly wing, sacred-geometry accents, and red contour highlights, holding smooth healed contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-2-bloodline-bali.webp"),
        alt: "Healed black-and-grey leg sleeve with a bearded god, Medusa face, and snake scales, lifted by red lightning accents and crisp healed detail at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-3-bloodline-bali.webp"),
        alt: "Healed black-and-grey sleeve with an Egyptian queen, eclipse motifs, and geometric framing, showing smooth shading and crisp healed line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-4-bloodline-bali.webp"),
        alt: "Healed mythological leg sleeve with a bearded sea god, octopus tentacles, and underwater realism, showing soft healed shading at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-5-bloodline-bali.webp"),
        alt: "Healed black-and-grey leg sleeve with a horned Oni face and smoke-like hair flow, showing velvety shading and sharp healed line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-photo-14-10-25-17-20-56-6-1-bloodline-bali.webp",
        ),
        alt: "Healed full-back dragon piece with mirrored Hannya masks, pagoda depth, and soft black-and-grey transitions that keep strong line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-6-bloodline-bali.webp"),
        alt: "Healed black-and-grey leg sleeve with yin-yang discs, peony petals, and lionlike portrait elements, holding smooth gradients and healed line integrity at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-7-bloodline-bali.webp"),
        alt: "Healed black-and-grey leg sleeve with an eagle head, pyramid, radiant figure, and skulls, showing crisp healed contrast and depth at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-8-bloodline-bali.webp"),
        alt: "Healed wildlife leg sleeve with a wolf, squirrel, and forest scene, showing soft healed texture and clean subject separation at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-9-bloodline-bali.webp"),
        alt: "Healed black-and-grey leg sleeve with coiled snakes and female portraits, showing velvety blacks and clean healed facial detail at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-14-10-25-17-20-56-bloodline-bali.webp"),
        alt: "Healed horror leg sleeve with a sinister clown, theatre masks, and screaming face imagery, showing strong blacks and clean healed transitions at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-15-09-25-23-17-50-bloodline-bali.webp"),
        alt: "Healed full-back piece with a woman's face, skulls, and coiling snakes, showing smooth black-and-grey blending and strong healed contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-16-10-23-15-02-05-bloodline-bali.webp"),
        alt: "Healed samurai leg sleeve with a kabuto helmet, warrior face, and red accent slashes, keeping bold blacks and clean healed edges at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-16-10-23-15-02-06-bloodline-bali.webp"),
        alt: "Healed anime leg sleeve with spiky-haired hero portraiture and manga panels, showing smooth black-and-grey saturation and crisp healed contours at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-16-10-23-15-02-08-bloodline-bali.webp"),
        alt: "Healed collage leg sleeve with money, bold lettering, warning tape, and biker imagery, showing strong healed contrast and sharp edge definition at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-16-10-23-15-02-09-bloodline-bali.webp"),
        alt: "Healed realism leg sleeve with an armed officer, street signs, and shattered glass, keeping sharp healed detail and solid black-and-grey contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-16-10-23-15-12-11-bloodline-bali.webp"),
        alt: "Healed color dragon leg sleeve with emerald scales and red flames, showing strong saturation and clean healed contours at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-19-10-25-14-06-08-bloodline-bali.webp"),
        alt: "Healed leg sleeve with a hooded skull, stitched female face, and barbed wire framing, holding bold blacks and crisp healed contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-22-07-24-21-18-58-bloodline-bali.webp"),
        alt: "Healed black-and-grey leg sleeve with a screaming skull, skeletal hands, and revolver details, keeping bold blacks and crisp healed detail at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-23-10-25-20-57-02-bloodline-bali.webp"),
        alt: "Healed leg sleeve with a pagoda scene, Hannya mask, and tiger portrait, showing soft greywash depth and crisp healed detail at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-23-10-25-20-57-14-bloodline-bali.webp"),
        alt: "Healed abstract black-and-grey sleeve with swirling smoke forms and a female face, showing clean healed gradients and sharp edge control at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-23-10-25-20-57-15-bloodline-bali.webp"),
        alt: "Healed abstract black-and-grey full sleeve with flowing wave forms, orbital circles, and ornamental swirls, showing smooth healed saturation at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-25-10-23-01-00-03-bloodline-bali.webp"),
        alt: "Healed outlaw backpiece with a smoking woman, motorcycles, guns, and black-and-grey realism that keeps strong contrast and clean detail at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-26-07-24-23-44-21-bloodline-bali.webp"),
        alt: "Healed neo-surreal leg sleeve with split mask shapes, red facial tones, and flowing black forms, holding smooth healed saturation at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-27-11-23-19-56-36-bloodline-bali.webp"),
        alt: "Healed gangster backpiece with Al Capone portrait, wanted poster, and vintage car, showing crisp realism and settled greywash at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-29-10-24-20-40-58-1-bloodline-bali.webp"),
        alt: "Healed surreal sleeve with multi-eye geometry, filigree texture, and spiral latticework, showing crisp healed line integrity through the forearm at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-photo-29-10-24-20-40-58-bloodline-bali.webp"),
        alt: "Healed surreal sleeve with all-seeing eyes, lattice geometry, and face-like patterning, showing clean healed gradients and crisp line integrity at Bloodline Tattoo Bali.",
      },
    ],
  };

function getHealedStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof healedStudioMediaByRegion)["bali"],
): string {
  if (!isHealedStudioRegion(studio)) {
    return healedStudioMediaByRegion.bali[slot];
  }

  return healedStudioMediaByRegion[studio][slot];
}

function getHealedProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isHealedStudioRegion(studio)) {
    return [];
  }

  return healedProofPoolsByStudio[studio];
}

export {
  getHealedProofPoolForStudio,
  getHealedStudioMediaAlt,
  healedProofPoolsByStudio,
  healedStudioMediaByRegion,
};
