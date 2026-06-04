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
        "chicano-tattoo-photo-19-5-2026-10-35-40-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano arm sleeve tattoo featuring a defiant woman portrait, bold Sinner script, and a layered payasa clown girl at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-10-36-45-am-2-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano tattoo of a Louis Vuitton ski-mask portrait with cash rolls, playing-card aces, and Made in South London script at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-10-44-23-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano full sleeve tattoo featuring a bandana payasa with a handgun, a cherub with LOVE and 999 script, and bold FAITH lettering at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-07-30-am-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano sleeve tattoo with a beanie woman portrait, cash in hand, Chicano script, and a Smile Now drama mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-1-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano twin sleeve designs featuring payasa portraits, a Harley-Davidson logo, stacked cash, a handgun, and roses at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-10-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano sleeves with La Catrina, a revolver, skull and rose, Sacred Heart, Blessed script, payasa girl, and cry-later mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-11-bloodline-bangkok.jpg",
      ),
      alt: "High-contrast black and grey realism sleeve tattoo featuring a masked gunman with a rifle, ancient warrior portrait, samurai mask, and Native American chief at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-12-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano sleeve tattoo with La Catrina holding a revolver, Sacred Heart, Blessed script, payasa portrait, drama mask, skull, and rose at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-13-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano forearm tattoo of a hooded payasa Catrina portrait with ornate face paint and a rose on the hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-14-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano tattoo featuring twin La Catrina payasa portraits with sugar-skull makeup, roses, and fine-line realism shading at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-15-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano forearm tattoos with a flying dove, lit candle, payasa woman portrait, dice, and Ace of Spades card at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-16-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano sleeve collage with urban portraits, graffiti script, a lowrider car, rolled hundred-dollar bills, and street motifs at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-17-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano twin sleeves with a money-blindfolded portrait, bound hands, all-seeing eye, rose, balaclava figure, and payasa girl at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-18-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano arm tattoo with a payasa portrait, bold LA lettering, palm trees, and a rolled hundred-dollar bill at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-19-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano sleeve design with payasa portraits, praying Virgin Mary, money-bag cherub, rose, and expressive face collage at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-2-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano arm tattoo with a payasa portrait, flowing Loyalty script, Greek key emblem, and praying hands at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-20-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano sleeve with payasa portraits, chained bomb skull, and a smile-now cry-later drama mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-21-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano arm tattoo featuring a payasa clown-girl portrait, Never Stop script, and classic lowrider chrome grille at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-22-bloodline-bangkok.jpg",
      ),
      alt: "Massive black and grey Chicano back tattoo with praying and gangster cherubs, illuminated crucifix, Last Supper scene, roses, and cross at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-3-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano twin sleeves with payasa portraits, Las Vegas sign, New York skyline, sports car, crown, and drama masks at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-4-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano forearm tattoo of a realistic payasa woman portrait with flowing hair and fine-line clown makeup at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-5-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano sleeve tattoo with a wrinkled nun portrait, handgun, bold Vengeance script, and balaclava street portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-6-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano twin sleeves with Catrina payasa, decorative skull, roses, lily, and ornate pocket watch at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-7-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano forearm tattoo close-up of a payasa woman portrait with sharp eye markings and smooth realism shading at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-8-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano sleeve tattoo with payasa portrait, praying cherub, LOST script, Sydney Opera House, lowrider grille, playing cards, and rose at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-9-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano arm tattoo of a payasa woman biting a bullet above a Doberman holding a handgun at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey Chicano forearm tattoo of a payasa woman with halo and cross holding hundred-dollar bills with clown-face Benjamin Franklin at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-38-30-am-19-bloodline-bangkok.jpg",
      ),
      alt: "Detailed black and grey Chicano sleeve tattoo with hooded Grim Reaper, ornate hourglass, payasa portrait, and drama mask at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
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
        "chicano-tattoo-woman-balaclava-gun-skull-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey Chicano full arm sleeve tattoo featuring a woman in a balaclava holding a gun, cracked glass effects, script lettering, and a wrist skull at Bloodline Tattoo Bali.",
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
      src: chicanoProofSrc("phuket", "chicano-tattoo-img-0770-bloodline-phuket.jpg"),
      alt: "Chicano black and grey sleeve with a Monopoly man in an LV-pattern vest, tumbling dice, and a woman portrait with a clock eye and shush gesture at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc("phuket", "chicano-tattoo-img-1373-bloodline-phuket.jpg"),
      alt: "Chicano leg tattoo with a woman in clown stitch makeup, a shushing hand, a cracked mask with Boo ghost, Mario, and a screaming face at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc("phuket", "chicano-tattoo-img-1377-bloodline-phuket.jpg"),
      alt: "Chicano leg tattoo with Scrooge McDuck, fedora Mickey Mouse, a roulette wheel, slot reels, money bags, and a cartoon bomb at Bloodline Tattoo Phuket.",
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
