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
        src: healedProofSrc(
          "bali",
          "healed-tattoo-japanese-dragon-hannya-samurai-full-back-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese black and grey full-back tattoo with dragon head, twin Hannya masks, and samurai temple scene at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-japanese-dragon-hannya-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed black and grey arm sleeve with Japanese dragon and Hannya mask, showing settled contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-japanese-samurai-mask-katana-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese samurai mask and katana arm sleeve in black and grey realism at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-egyptian-pharaoh-bull-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Egyptian-themed full leg sleeve with pharaoh portrait and bull deity in black and grey at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-lion-egyptian-deity-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed black and grey full leg tattoo with lion portrait and Egyptian deity motifs at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-japanese-foo-dog-hannya-red-accents-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese leg sleeve with foo dog, Hannya mask, and red accent packing at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-dragon-foo-dog-red-flames-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed leg sleeve with dragon, foo dog, and red flame accents showing stable healed colour at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-religious-jesus-mary-crucifixion-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed religious black and grey arm sleeve with Mary, Jesus, and crucifixion portrait work at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-native-american-wolf-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Native American portrait and wolf full leg sleeve in black and grey realism at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-pennywise-horror-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed horror-themed full leg sleeve with Pennywise portrait and puppeteer imagery at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-female-portrait-sacred-geometry-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed surreal leg sleeve with female portrait, sacred geometry, and red line accents at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-greek-god-snake-red-lightning-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed full leg tattoo with Greek god portrait, snake, woman face, and red lightning accents at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-egyptian-pharaoh-anubis-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Egyptian arm sleeve with pharaoh portrait, eclipse pyramids, and Anubis at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-poseidon-octopus-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Poseidon and octopus mythology full leg sleeve in black and grey at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-monkey-king-clouds-full-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Monkey King portrait and cloud patterns on a full leg sleeve at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-japanese-warrior-rope-tomoe-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese warrior and tomoe emblem leg sleeve with smooth settled shading at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-dragon-hannya-samurai-full-back-glass-bloodline-bali.jpg",
        ),
        alt: "Healed dragon, Hannya, and samurai full-back tattoo photographed at Bloodline Tattoo Bali storefront.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-horus-anubis-egyptian-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Egyptian leg sleeve with Horus falcon, pyramid beam, Anubis, and skull base at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-wolf-squirrel-deer-wildlife-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed wildlife leg sleeve with wolf, squirrel, deer, and frog in black and grey at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-snake-female-portrait-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed leg sleeve combining snake heads and realistic female portrait sections at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc("bali", "healed-tattoo-woman-skull-snake-full-back-bloodline-bali.jpg"),
        alt: "Healed full-back tattoo with woman portrait, skulls, snakes, and gothic pattern work at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-samurai-woman-red-brushstroke-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese samurai mask and woman portrait leg sleeve with red brush accents at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-anime-goku-dragon-ball-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed anime leg sleeve featuring Goku and Dragon Ball characters in black and grey at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-plata-o-plomo-cocaine-cowboys-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed narrative leg sleeve with Plata o Plomo lettering and Cocaine Cowboys themed realism at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-tactical-police-street-signs-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed tactical officer and street sign collage leg sleeve in black and grey at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-japanese-dragon-green-red-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese dragon leg sleeve with green scales and red accents at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-skull-thorns-praying-hands-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed gothic leg sleeve with cathedral skull, thorns, woman portrait, and praying hands at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-grim-reaper-skull-church-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed dark surreal leg sleeve with grim reaper, skulls, eye motif, and church silhouette at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-japanese-pagoda-samurai-tiger-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese leg sleeve with pagoda waterfall, samurai mask, bridge, and tiger at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-woman-portrait-wave-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed black and grey arm sleeve with woman portrait and flowing wave patterns at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-hannya-wave-black-grey-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Japanese Hannya and wave motif arm sleeve with settled black and grey tones at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-woman-motorcycle-dollar-sunglasses-full-back-bloodline-bali.jpg",
        ),
        alt: "Healed full-back tattoo with woman in dollar-sign sunglasses, cigarette, and motorcycle at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-hannya-woman-face-red-leg-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed Hannya mask and woman portrait leg sleeve with red and black contrast at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-al-capone-gangster-full-back-bloodline-bali.jpg",
        ),
        alt: "Healed Al Capone gangster full-back tattoo with wanted poster, roulette, and vintage car at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-surreal-eye-spiral-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed surreal arm sleeve with multi-eye spiral geometry and hand tattoo at Bloodline Tattoo Bali.",
      },
      {
        src: healedProofSrc(
          "bali",
          "healed-tattoo-surreal-multi-eye-chest-arm-sleeve-bloodline-bali.jpg",
        ),
        alt: "Healed surreal chest and arm tattoo with multi-eye patterns and geometric overlays at Bloodline Tattoo Bali.",
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
