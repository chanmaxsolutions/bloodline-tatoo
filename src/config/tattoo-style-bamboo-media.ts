import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type BambooStudioRegion = "bangkok" | "phuket";

const bambooImageRoot = "/images/tattoo-styles/bamboo";

function isBambooStudioRegion(studio: TattooStyleStudioRegion): studio is BambooStudioRegion {
  return studio === "bangkok" || studio === "phuket";
}

function bambooProofSrc(studio: TattooStyleStudioRegion, filename: string): string {
  return `${bambooImageRoot}/${studio}/proof/${filename}`;
}

const bambooStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Sak Yant twin tigers and Gao Yord bamboo tattoo banner with candlelit temple atmosphere at Bloodline Tattoo Bangkok",
    approachAlt:
      "Traditional bamboo hand-tap Sak Yant session with twin tigers and Gao Yord on the back at Bloodline Tattoo Bangkok",
    cardAlt:
      "Lotus Sak Yant spine tattoo with Om symbol, bamboo hand-tap work at Bloodline Tattoo Bangkok",
  },
  phuket: {
    heroAlt:
      "Sak Yant bamboo tattoo hero with twin tigers, embers, and spiritual atmosphere at Bloodline Tattoo Phuket",
    approachAlt:
      "Bamboo hand-tap Sak Yant application on the shoulder with Gao Yord and twin tigers at Bloodline Tattoo Phuket",
    cardAlt: "Gao Yord and Suea Koo twin-tigers Sak Yant on the back at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  BambooStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const bambooProofPoolsByStudio: Record<BambooStudioRegion, readonly TattooStyleDetailProofImage[]> =
  {
    bangkok: [
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-two-lines-script-left-shoulder-blade-bamboo-tattoo-bloodline-bangkok.jpg",
        ),
        alt: "Fresh bamboo Sak Yant with two vertical lines of sacred script on a man's left shoulder blade at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-gao-yord-nine-peaks-neck-back-tattoos-bloodline-bangkok.jpg",
        ),
        alt: "Traditional Sak Yant Gao Yord nine-peaks design on the back of the neck, with large black-and-grey back tattoos, at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-three-lines-script-inner-forearm-bamboo-bloodline-bangkok.jpg",
        ),
        alt: "Bamboo Sak Yant with three horizontal lines of Khom script on the inner forearm at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "bamboo-fine-line-woman-reaching-sun-ribs-side-bloodline-bangkok.jpg",
        ),
        alt: "Fine-line bamboo tattoo of a woman reaching toward a sun on the ribs and side torso at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-lotus-om-unalome-upper-back-shoulder-bamboo-bloodline-bangkok.jpg",
        ),
        alt: "Sak Yant lotus flower with Om symbol and unalome script on the upper back and left shoulder at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-suea-koo-twin-tigers-red-black-upper-back-bamboo-bloodline-bangkok.jpg",
        ),
        alt: "Suea Koo twin-tigers Sak Yant in red and black ink centered on the upper back, bamboo hand-tap style at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-hah-taew-five-lines-thigh-bamboo-hand-tap-bloodline-bangkok.jpg",
        ),
        alt: "Hah Taew five-lines Sak Yant on the upper thigh beside tribal tattoos, done with bamboo hand-tap at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-gao-yord-hah-taew-twin-tigers-upper-back-bamboo-bloodline-bangkok.jpg",
        ),
        alt: "Upper back collection of Sak Yant designs including Gao Yord, Hah Taew five lines, and twin tigers at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-hah-taew-five-lines-shoulder-blade-closeup-bamboo-bloodline-bangkok.jpg",
        ),
        alt: "Close-up of fresh Hah Taew five-lines Sak Yant on the right shoulder blade with Gao Yord and twin tiger nearby at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-three-lines-script-ribs-side-bamboo-bloodline-bangkok.jpg",
        ),
        alt: "Sak Yant with three horizontal lines of sacred script on the side ribs, bamboo tattoo at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "sak-yant-suea-koo-singha-hah-taew-full-back-bamboo-bloodline-bangkok.jpg",
        ),
        alt: "Full back Sak Yant featuring twin tigers, twin lions Singha, Hah Taew five lines, and name lettering, bamboo style at Bloodline Tattoo Bangkok.",
      },
    ],
    phuket: [
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-paed-tidt-eight-directional-upper-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Paed Tidt eight-directional Sak Yant on the upper back with infinity symbol on the neck, bamboo tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-tiger-leaping-shoulder-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Traditional Sak Yant leaping tiger surrounded by Khom script on the upper back and left shoulder at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-hah-taew-lotus-inner-forearm-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Hah Taew five-lines Sak Yant with central lotus flower on the inner forearm, bamboo hand-tap at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-gao-yord-nine-peaks-upper-back-neck-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Gao Yord nine-peaks Sak Yant centered on the upper back below the hairline, bamboo tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-gao-yord-twin-tigers-script-grid-full-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Full back Sak Yant stack with Gao Yord, Suea Koo twin tigers, and script grid yant, bamboo style at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-hah-taew-five-lines-shoulder-tiger-gao-yord-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Hah Taew five-lines Sak Yant on the left shoulder blade with tiger and Gao Yord on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-hah-taew-five-lines-shoulder-blade-anchor-rose-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Fresh Hah Taew five-lines Sak Yant on the shoulder blade beside an anchor and rose tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-twin-naga-snakes-upper-arm-bamboo-hand-tap-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant twin intertwined Nagas with Khom script and unalomes on the upper arm, bamboo hand-tap at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-tiger-forearm-khom-script-unalome-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant tiger Suea design with Khom script and unalome symbols on the inner forearm, bamboo tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-suea-koo-twin-tigers-upper-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Suea Koo twin-tigers Sak Yant centered on the upper back with sacred script border at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-tiger-thigh-khom-script-unalome-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Large Sak Yant tiger on the outer thigh with Khom script and unalomes, bamboo hand-tap at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-hah-taew-red-lotus-inner-arm-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Hah Taew five-lines Sak Yant with red lotus center on the inner upper arm, bamboo tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-om-symbol-script-inner-forearm-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant Om symbol with radiating Khom script lines and unalomes on the inner forearm, bamboo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-gao-yord-spine-script-full-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Gao Yord nine-peaks Sak Yant with long spine column of Khom script down the back, bamboo tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-tiger-roaring-upper-arm-shoulder-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant roaring tiger in profile on the upper arm and shoulder with sacred script arcs at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-hah-taew-five-lines-inner-bicep-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Hah Taew five-lines Sak Yant with unalomes on the inner bicep, bamboo hand-tap at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "sak-yant-garuda-chest-bamboo-hand-tap-bloodline-phuket.jpg"),
        alt: "Large Sak Yant Garuda with spread wings across the chest, stippled bamboo hand-tap style at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-hah-taew-five-lines-upper-back-shoulder-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Hah Taew five-lines Sak Yant on the left upper back and shoulder blade at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "sak-yant-tiger-ribs-side-bamboo-bloodline-phuket.jpg"),
        alt: "Fresh Sak Yant tiger on the rib cage and side torso with Khom script, bamboo tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-tiger-head-back-of-head-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant tiger head surrounded by Khom script on the back of the head, bamboo hand-tap at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-turtle-phaya-tao-ruean-upper-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Phaya Tao Ruean king turtle Sak Yant with script grid and unalomes on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-khom-grid-roman-numeral-iv-inner-arm-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant Khom script grid with Roman numeral IV on the inner arm, bamboo tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-suea-koo-twin-tigers-upper-back-neck-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Suea Koo twin-tigers Sak Yant on the upper back below the neck with Khom script at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-twin-tigers-paed-tidt-full-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Full back Sak Yant with twin tigers, lower Paed Tidt yant, and Latin shoulder text, bamboo style at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-lotus-om-spine-upper-back-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant lotus with Om symbol and script lines down the spine on the upper back, bamboo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-gao-yord-nape-skull-sombrero-head-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Fresh Gao Yord Sak Yant on the nape with skull sombrero head tattoo and dragon on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-lotus-script-lower-back-spine-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Sak Yant lotus flower with Khom script lines above and below on the lower back and spine, bamboo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-lotus-hah-taew-calf-lower-leg-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Vertical Sak Yant lotus with Hah Taew five-lines script on the back of the calf, bamboo hand-tap at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc(
          "phuket",
          "sak-yant-hah-taew-dual-shoulder-blades-fresh-bamboo-bloodline-phuket.jpg",
        ),
        alt: "Fresh dual Hah Taew five-lines Sak Yant tattoos on both shoulder blades, bamboo hand-tap at Bloodline Tattoo Phuket.",
      },
    ],
  };

function getBambooStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof bambooStudioMediaByRegion)["bangkok"],
): string {
  if (!isBambooStudioRegion(studio)) {
    return bambooStudioMediaByRegion.bangkok[slot];
  }

  return bambooStudioMediaByRegion[studio][slot];
}

function getBambooProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isBambooStudioRegion(studio)) {
    return [];
  }

  return bambooProofPoolsByStudio[studio];
}

export {
  bambooProofPoolsByStudio,
  bambooStudioMediaByRegion,
  getBambooProofPoolForStudio,
  getBambooStudioMediaAlt,
};
