import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type ChicanoStudioRegion = "bangkok" | "bali" | "phuket";

const chicanoImageRoot = "/images/tattoo-styles/chicano";

function isChicanoStudioRegion(studio: TattooStyleStudioRegion): studio is ChicanoStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function chicanoProofSrc(studio: ChicanoStudioRegion, filename: string): string {
  return `${chicanoImageRoot}/${studio}/proof/${filename}`;
}

const chicanoStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Chicano black and grey back tattoo with Familia script, payasa portrait, lowrider, and roses in a moody studio at Bloodline Tattoo Bangkok",
    approachAlt:
      "Chicano Familia and Vida Loca script with payasa and portrait sleeves on a woman at Bloodline Tattoo Bangkok",
    cardAlt:
      "Chicano sleeve with Virgin of Guadalupe, payasa portrait, roses, Familia script, and lowrider at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Chicano Familia script full back tattoo with payasa portrait, lowrider, money stacks, and roses at Bloodline Tattoo Bali",
    approachAlt:
      "Chicano chest piece with Familia, Blessed script, payasa, Virgin Mary, lowrider, and LA logo at Bloodline Tattoo Bali",
    cardAlt:
      "Chicano arm sleeve with payasa portrait, script lettering, rose, and LA lowrider at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Chicano Loyalty script back tattoo with LA logo, payasa portrait, lowrider, and palm trees at Bloodline Tattoo Phuket",
    approachAlt:
      "Chicano torso tattoo with Familia, Virgin Mary, payasa, Vida Loca script, and praying hands at Bloodline Tattoo Phuket",
    cardAlt:
      "Chicano leg sleeve with Smile Now Cry Later, payasa, LA skyline, lowrider, roses, and praying hands at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  ChicanoStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const chicanoProofPoolsByStudio: Record<
  ChicanoStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
  bangkok: [
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-joker-clown-playing-cards-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano arm sleeve with clown, Joker portrait, and playing cards at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-payasa-mario-chainlink-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano payasa portrait with Mario and chain-link fence arm sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-lowrider-roses-cholo-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano lowrider, roses, and cholo character black and grey arm sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-payasa-loyalty-barbed-wire-globe-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano payasa, Loyalty script, barbed wire, praying hands, and globe arm sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-vegas-payasa-money-dice-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano Las Vegas sign, payasa portrait, cash, dice, and handgun leg sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-lv-gucci-payasa-chain-fence-chest-bloodline-bangkok.jpg",
      ),
      alt: "Chicano chest tattoo with LV and Gucci motifs, payasa portraits, and chain-link fence at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-payasa-rose-roulette-8ball-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano payasa portrait with rose, roulette wheel, and 8-ball leg sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-payasa-gun-wild-cash-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano payasa, handgun, Wild script, and cash roll leg sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-graffiti-payasa-spray-cctv-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano graffiti, payasa portrait, spray can, and CCTV camera leg sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-melbourne-clown-train-back-piece-bloodline-bangkok.jpg",
      ),
      alt: "Chicano Melbourne cityscape back tattoo with clown portrait, train, and graffiti script at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-payasa-gun-cityscape-chest-bloodline-bangkok.jpg",
      ),
      alt: "Chicano payasa chest tattoo pointing a handgun with city skyline and falling coins at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-clown-money-love-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano clown, rolled cash, and Love knuckle script leg sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-payasa-crown-barbed-wire-gun-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano payasa portraits with crown, barbed wire highlights, and handgun leg sleeve at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-amor-king-mask-rifle-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano Amor and King script arm sleeve with masked portrait and rifle at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-king-von-otf-oblock-ski-mask-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano leg sleeve with portrait, OTF chain, O Block lettering, ski mask, and handgun at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-self-made-scrooge-monopoly-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano Self Made script leg sleeve with gangster Scrooge and Monopoly Man portraits at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-laugh-cry-clown-payasa-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Chicano laughing clown and payasa portrait leg sleeve in black and grey at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-vegas-chain-fence-torso-collage-bloodline-bangkok.jpg",
      ),
      alt: "Chicano torso collage with Vegas sign, chain-link fence, bandaged faces, and cash at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-ride-or-die-balaclava-lion-torso-bloodline-bangkok.jpg",
      ),
      alt: "Chicano Ride or Die torso tattoo with balaclava portrait, lion, cash, and firearm at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-bandana-portrait-gun-lost-money-leg-bloodline-bangkok.jpg",
      ),
      alt: "Chicano bandana portrait leg tattoo with handgun, Lost script, and hundred-dollar bills at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-monopoly-man-dice-woman-clock-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano full arm sleeve tattoo featuring the Monopoly man, dice, and a woman portrait with a clock eye at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-payasa-mario-boo-leg-sleeve-bloodline-bali.jpg"),
      alt: "Black and grey Chicano full leg sleeve tattoo featuring a payasa clown woman, theatrical mask, Mario, and Boo at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-scrooge-mickey-gambling-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano full leg sleeve tattoo featuring Scrooge McDuck, Mickey Mouse, a roulette wheel, and gambling motifs at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-masked-figure-gun-skull-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey Chicano full arm sleeve tattoo featuring a masked figure with a gun, bullet holes, script lettering, and a skull on the hand at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-las-vegas-payasa-money-gun-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano arm sleeve tattoo featuring the Las Vegas sign, a payasa woman portrait, money, and a handgun at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-masked-torso-ride-die-lions-tigers-bloodline-bali.jpg",
      ),
      alt: "Intricate black and grey Chicano torso tattoo featuring a masked figure, Ride Die script, lion and tiger heads, money, and a rifle at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-woman-gun-motorcycle-back-piece-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano back tattoo featuring a woman with dollar sign sunglasses holding a gun, a motorcycle, and city street signs at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-payasa-clown-sleeve-collage-bloodline-bali.jpg"),
      alt: "Black and grey Chicano arm sleeve collage featuring payasa clown women, an urban cityscape, and a clown mask with a gun at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-melbourne-flinders-street-back-piece-bloodline-bali.jpg",
      ),
      alt: "Massive black and grey Chicano back tattoo featuring Flinders Street Station, a Frankston train, graffiti lettering, and urban Melbourne imagery at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-payasa-gtr-rose-gambling-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano full arm sleeve tattoo featuring a payasa woman, Nissan GT-R, roses, dice, and casino chips at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-skull-woman-loyalty-roses-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey Chicano full arm sleeve tattoo featuring a skull, roses, a woman with Loyalty script, praying hands, and barbed wire at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-boy-portrait-wanted-glasgow-leg-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano leg tattoo featuring a boy portrait with facial tattoos, a handgun, and a Glasgow wanted poster at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-woman-heart-hands-clown-ice-cream-leg-bloodline-bali.jpg",
      ),
      alt: "Black and grey Chicano full leg sleeve tattoo featuring a woman in sunglasses, heart hands, and a clown girl with an ice cream cone at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-heist-nun-crown-full-back-bloodline-bali.jpg"),
      alt: "Intricate black and grey Chicano full back tattoo featuring a crowned masked figure, a nun with an assault rifle, a grand building, and a heist scene at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-ski-mask-swag-graffiti-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano arm sleeve tattoo featuring a ski mask portrait with SWAG lettering, gold grillz, and graffiti spray can art at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-woman-balaclava-gun-skull-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey Chicano full arm sleeve tattoo featuring a woman in a balaclava holding a gun, cracked glass effects, script lettering, and a wrist skull at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc(
        "bali",
        "chicano-tattoo-woman-clown-mask-hand-portrait-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey Chicano tattoo featuring a woman portrait with clown makeup, a peeling clown mask, and a hand with long nails at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-crown-skull-gun-drama-masks-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano leg sleeve with crowned skull portrait, handgun, and laugh-now cry-later masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-harley-payasa-roses-scream-arm-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano arm sleeve with screaming portrait, Harley-Davidson logo, payasa face, and roses at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-gun-script-joker-arm-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano arm sleeve with payasa portrait, handgun, script lettering, and Joker face at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-yavuz-ailesi-money-rifle-back-piece-bloodline-phuket.jpg",
      ),
      alt: "Chicano back tattoo with Yavuz Ailesi script, money, rifle portrait, and Australian banknotes at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-sinner-payasa-torn-faces-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano Sinner script leg sleeve with payasa portrait and torn layered faces at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-statue-liberty-money-gag-clock-eye-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano arm sleeve with Statue of Liberty portrait, money blindfold, clock, eye, and rose at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-statue-liberty-balaclava-payasa-smile-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano arm sleeve with Statue of Liberty, balaclava, payasa, and smile-now mask at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-greed-balaclava-three-monkeys-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano Greed script leg sleeve with balaclava grill and three wise monkeys payasas at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-all-seeing-eye-clown-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano payasa portrait leg sleeve with all-seeing eye and clown masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-king-amor-money-tiger-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano King and Amor script leg sleeve with cash stack and tiger portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-control-lowrider-boombox-graffiti-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano graffiti arm sleeve with Control script, lowrider, portraits, and boombox at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-baby-girl-shotgun-hollywood-pitbull-leg-bloodline-phuket.jpg",
      ),
      alt: "Chicano Baby Girl payasa leg sleeve with shotgun, Hollywood sign, lowrider, and pitbull at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-west-coast-motorcycle-brass-knuckles-leg-bloodline-phuket.jpg",
      ),
      alt: "Chicano West Coast script leg tattoo with motorcycle, name banners, brass knuckles, and dice at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-blue-eye-las-vegas-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano payasa portrait leg sleeve with blue eye and Las Vegas cityscape at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-crown-lv-bandana-mustang-clown-leg-bloodline-phuket.jpg",
      ),
      alt: "Chicano crowned portrait leg sleeve with LV bandana, Mustang, palm trees, and clown masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-dice-chain-laugh-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano payasa and laughing portrait leg sleeve with dice, chain, and graffiti logo at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-skull-bomb-scream-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Chicano payasa leg sleeve with skull bomb, screaming portrait, and clown masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-roulette-payasa-gun-lowrider-back-piece-bloodline-phuket.jpg",
      ),
      alt: "Chicano back tattoo with roulette, payasa portrait, handgun, playing cards, and lowrider at Bloodline Tattoo Phuket.",
    },
  ],
};

function getChicanoStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof chicanoStudioMediaByRegion)["bangkok"],
): string {
  if (!isChicanoStudioRegion(studio)) {
    return chicanoStudioMediaByRegion.bangkok[slot];
  }

  return chicanoStudioMediaByRegion[studio][slot];
}

function getChicanoProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isChicanoStudioRegion(studio)) {
    return [];
  }

  return chicanoProofPoolsByStudio[studio];
}

export {
  chicanoProofPoolsByStudio,
  chicanoStudioMediaByRegion,
  getChicanoProofPoolForStudio,
  getChicanoStudioMediaAlt,
};
