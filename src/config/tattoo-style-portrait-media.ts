import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type PortraitStudioRegion = "bangkok" | "bali" | "phuket";

const portraitImageRoot = "/images/tattoo-styles/portrait";

function isPortraitStudioRegion(studio: TattooStyleStudioRegion): studio is PortraitStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function portraitProofSrc(studio: PortraitStudioRegion, filename: string): string {
  return `${portraitImageRoot}/${studio}/proof/${filename}`;
}

const portraitStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Memorial black and grey portrait tattoo of children Jackson and Olivia with birth dates on the chest at Bloodline Tattoo Bangkok",
    approachAlt:
      "Black and grey Jim Morrison portrait realism tattoo on the inner forearm at Bloodline Tattoo Bangkok",
    cardAlt:
      "Black and grey N.W.A portrait leg tattoo with Eazy-E and Dr. Dre in realism at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Black and grey chest portrait realism with soldier, pocket watch, bearded figure, and vintage plane at Bloodline Tattoo Bali",
    approachAlt:
      "Black and grey Chadwick Boseman and Black Panther split portrait realism on the forearm at Bloodline Tattoo Bali",
    cardAlt:
      "Realistic black and grey Rottweiler dog portrait on the upper chest at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Black and grey portrait realism thigh tattoo of Angus Young in a schoolboy cap with devil horns at Bloodline Tattoo Phuket",
    approachAlt:
      "Black and grey Kobe Bryant portrait realism on both forearms with championship and Lakers tribute scenes at Bloodline Tattoo Phuket",
    cardAlt:
      "Black and grey child portrait realism with braided hair on the inner upper arm at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  PortraitStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const portraitProofPoolsByStudio: Record<
  PortraitStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
  bangkok: [
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-michael-jordan-three-peat-dunk-leg-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism leg tattoo of Michael Jordan in a three-peat championship cap above a slam-dunk scene at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-children-jackson-olivia-chest-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait tattoo of two smiling children, Jackson and Olivia, with birth dates on a man's upper chest at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-soldier-bearded-man-pocket-watch-plane-chest-bloodline-bangkok.jpg",
      ),
      alt: "Full chest black and grey realism with soldier and bearded man portraits, pocket watch, vintage fighter plane, and Such is life script at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-angus-young-devil-horns-thigh-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism thigh tattoo of Angus Young in a schoolboy cap with devil horns at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc("bangkok", "portrait-tattoo-chihuahua-dog-thigh-bloodline-bangkok.jpg"),
      alt: "Detailed black and grey Chihuahua dog portrait realism on the thigh with expressive eyes and fine fur shading at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-rottweiler-dog-chest-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Rottweiler dog portrait realism on the chest with lifelike fur texture and warm expression at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-boxer-dog-chest-script-bloodline-bangkok.jpg",
      ),
      alt: "Realistic boxer dog portrait on the left chest with memorial script below, alongside additional portrait work at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-marvel-hulk-thor-iron-man-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Marvel leg sleeve in black and grey portrait realism featuring Hulk, Thor with lightning, and Iron Man from thigh to ankle at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-eminem-rap-god-full-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Full leg sleeve black and grey portrait realism tribute to Eminem with beanie portrait, seated figure, boombox, and Rap God lettering at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-boy-woman-girl-arm-sleeve-collage-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism arm sleeve collage featuring a boy with face tattoos, a laughing woman in sunglasses with heart hands, and a girl with clown makeup holding ice cream, crafted at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-kyrie-irving-michael-jordan-basketball-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey portrait realism leg sleeve tattoo featuring Kyrie Irving with a championship trophy and Michael Jordan portraits with the number 23, inked at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-woman-heart-hands-girl-ice-cream-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism full leg sleeve tattoo of a woman in sunglasses, hands forming a heart, and a young girl with clown makeup eating ice cream, completed at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-michael-jackson-eminem-tupac-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "High-contrast black and grey portrait realism leg tattoo collage of Michael Jackson, Eminem with script lettering, and Tupac Shakur with Thug Life lettering, done at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-boxer-dog-chest-memorial-script-bloodline-bali.jpg",
      ),
      alt: "Realistic black and grey portrait tattoo of a Boxer dog on the upper chest with sentimental script lettering below, created at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-elderly-man-flat-cap-glasses-chest-bloodline-bali.jpg",
      ),
      alt: "Softly shaded black and grey portrait realism tattoo of a smiling elderly man in a flat cap and glasses on the left chest with a memorial date, at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-nwa-eazy-e-dr-dre-death-row-leg-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey portrait realism lower leg tattoo featuring N.W.A lettering, Eazy-E, Compton script, and Dr. Dre with Death Row Records text, at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-boy-face-tattoos-money-chain-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism leg sleeve tattoo of a young boy with face tattoos, a diamond chain, and a stack of cash with Wanted Glasgow lettering below, at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-sidney-crosby-penguins-pocket-watch-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey portrait realism full arm sleeve of Sidney Crosby in Pittsburgh Penguins gear with pocket watches and memorial dates, inked at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-michael-jordan-kobe-bryant-basketball-forearms-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoos of Michael Jordan and Kobe Bryant with championship moments and Lakers branding at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-chadwick-boseman-black-panther-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Chadwick Boseman paired with the Black Panther mask at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-kobe-bryant-lakers-tribute-leg-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism leg tattoo tribute to Kobe Bryant with a close-up portrait, celebration scene, and Lakers logo at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-jim-morrison-singer-hands-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Jim Morrison with expressive hands and beaded necklace detail at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-chadwick-boseman-black-panther-upper-arm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism upper-arm tattoo of Chadwick Boseman flowing into the Black Panther mask at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-young-child-top-knot-inner-arm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism inner upper-arm tattoo of a young child with a top-knot hairstyle at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-dog-portrait-boss-melbourne-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism full sleeve with a detailed dog portrait, jeweled BOSS lettering, and Melbourne-themed signage at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-soldier-ned-kelly-pocket-watch-plane-chest-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism chest tattoo with military and bearded figure portraits, a pocket watch, and a fighter plane at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-joker-heath-ledger-full-back-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism full-back tattoo of the Joker with dripping makeup and Why So Serious lettering at Bloodline Tattoo Phuket.",
    },
  ],
};

function getPortraitStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof portraitStudioMediaByRegion)["bangkok"],
): string {
  if (!isPortraitStudioRegion(studio)) {
    return portraitStudioMediaByRegion.bangkok[slot];
  }

  return portraitStudioMediaByRegion[studio][slot];
}

function getPortraitProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isPortraitStudioRegion(studio)) {
    return [];
  }

  return portraitProofPoolsByStudio[studio];
}

export {
  getPortraitProofPoolForStudio,
  getPortraitStudioMediaAlt,
  portraitProofPoolsByStudio,
  portraitStudioMediaByRegion,
};
