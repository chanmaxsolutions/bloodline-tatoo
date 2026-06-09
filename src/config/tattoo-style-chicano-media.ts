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
        "chicano-tattoo-photo-19-5-2026-10-35-40-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano arm sleeve tattoo featuring a defiant woman portrait, bold Sinner script, and a layered payasa clown girl at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-10-36-45-am-2-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano tattoo of a Louis Vuitton ski-mask portrait with cash rolls, playing-card aces, and Made in South London script at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-10-44-23-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano full sleeve tattoo featuring a bandana payasa with a handgun, a cherub with LOVE and 999 script, and bold FAITH lettering at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-07-30-am-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano sleeve tattoo with a beanie woman portrait, cash in hand, Chicano script, and a Smile Now drama mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-1-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano twin sleeve designs featuring payasa portraits, a Harley-Davidson logo, stacked cash, a handgun, and roses at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-10-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano sleeves with La Catrina, a revolver, skull and rose, Sacred Heart, Blessed script, payasa girl, and cry-later mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-11-bloodline-bangkok.webp",
      ),
      alt: "High-contrast black and grey realism sleeve tattoo featuring a masked gunman with a rifle, ancient warrior portrait, samurai mask, and Native American chief at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-12-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano sleeve tattoo with La Catrina holding a revolver, Sacred Heart, Blessed script, payasa portrait, drama mask, skull, and rose at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-13-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano forearm tattoo of a hooded payasa Catrina portrait with ornate face paint and a rose on the hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-14-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano tattoo featuring twin La Catrina payasa portraits with sugar-skull makeup, roses, and fine-line realism shading at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-15-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano forearm tattoos with a flying dove, lit candle, payasa woman portrait, dice, and Ace of Spades card at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-16-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano sleeve collage with urban portraits, graffiti script, a lowrider car, rolled hundred-dollar bills, and street motifs at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-17-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano twin sleeves with a money-blindfolded portrait, bound hands, all-seeing eye, rose, balaclava figure, and payasa girl at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-18-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano arm tattoo with a payasa portrait, bold LA lettering, palm trees, and a rolled hundred-dollar bill at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-19-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano sleeve design with payasa portraits, praying Virgin Mary, money-bag cherub, rose, and expressive face collage at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-2-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano arm tattoo with a payasa portrait, flowing Loyalty script, Greek key emblem, and praying hands at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-20-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano sleeve with payasa portraits, chained bomb skull, and a smile-now cry-later drama mask at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-21-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano arm tattoo featuring a payasa clown-girl portrait, Never Stop script, and classic lowrider chrome grille at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-22-bloodline-bangkok.webp",
      ),
      alt: "Massive black and grey Chicano back tattoo with praying and gangster cherubs, illuminated crucifix, Last Supper scene, roses, and cross at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-3-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano twin sleeves with payasa portraits, Las Vegas sign, New York skyline, sports car, crown, and drama masks at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-4-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano forearm tattoo of a realistic payasa woman portrait with flowing hair and fine-line clown makeup at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-5-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano sleeve tattoo with a wrinkled nun portrait, handgun, bold Vengeance script, and balaclava street portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-6-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano twin sleeves with Catrina payasa, decorative skull, roses, lily, and ornate pocket watch at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-7-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano forearm tattoo close-up of a payasa woman portrait with sharp eye markings and smooth realism shading at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-8-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano sleeve tattoo with payasa portrait, praying cherub, LOST script, Sydney Opera House, lowrider grille, playing cards, and rose at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-9-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano arm tattoo of a payasa woman biting a bullet above a Doberman holding a handgun at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-17-36-am-bloodline-bangkok.webp",
      ),
      alt: "Black and grey Chicano forearm tattoo of a payasa woman with halo and cross holding hundred-dollar bills with clown-face Benjamin Franklin at Bloodline Tattoo Bangkok.",
    },
    {
      src: chicanoProofSrc(
        "bangkok",
        "chicano-tattoo-photo-19-5-2026-11-38-30-am-19-bloodline-bangkok.webp",
      ),
      alt: "Detailed black and grey Chicano sleeve tattoo with hooded Grim Reaper, ornate hourglass, payasa portrait, and drama mask at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-01-07-24-16-33-12-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full arm sleeve tattoo featuring a masked woman, pistols, checkerboard patterns, and skull imagery at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-02-09-23-22-57-14-1-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo with a laughing man in sunglasses, heart hands, and a crying child holding an ice cream cone at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-02-09-23-22-57-14-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano thigh tattoo of a teardrop child portrait with a cigarette, chain necklace, hand sign, and graffiti lettering at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-06-06-24-21-55-44-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full back tattoo featuring a crowned ski mask woman, armed nun, cathedral facade, and riot scene at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-07-01-25-21-26-54-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full arm sleeve tattoo with a grinning clown in a bowler hat, dramatic pointing hand, and screaming face below at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-07-08-24-22-40-41-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano upper arm sleeve tattoo featuring a screaming clown girl, Mario figure, and bold graffiti-style script at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-09-11-23-08-48-15-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full arm sleeve tattoo with a lowrider car, rose, script lettering, and a suited penguin character at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-11-04-24-00-12-28-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full arm sleeve tattoo featuring a woman portrait, barbed wire, scissors, spiderweb elements, and script at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-12-01-24-23-04-52-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano thigh tattoo with the Las Vegas sign, laughing woman in round glasses, skull, and gambling motifs at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-12-12-23-01-45-51-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full back tattoo featuring masked faces, a woman in a Gucci scarf, palm trees, cards, and stacks of money at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-13-05-24-23-14-13-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo of a smoking woman with a rose, cards, dice, an 8-ball, and casino chips at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-14-04-25-22-36-01-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo with smiling clown women, a handgun, city skyline, and stacked portrait faces at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-14-04-25-22-36-30-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo featuring a female portrait, spray can, block lettering, and urban street imagery at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-15-04-24-21-46-44-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full back tattoo with a gangster portrait, city skyline, helicopter, tram, and large script lettering at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-17-06-24-22-53-10-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano chest tattoo featuring a payasa woman, handgun, poker chips, city scene, and rolling coins at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-17-10-23-20-41-14-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo with a shouting clown, crying woman portrait, swirling script forms, and a lower face detail at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-19-07-24-22-43-06-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo featuring a crowned woman portrait, barbed wire elements, layered faces, and a pistol at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-23-10-23-12-51-52-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano upper arm sleeve tattoo with a blindfolded smoking woman, graffiti script, masked gunman, and checkerboard detail at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-29-08-25-22-58-06-1-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo featuring Scrooge McDuck, Monopoly Man, cash-sign glasses, and bullet hole accents at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-29-08-25-22-58-06-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano thigh and shin tattoo with a braided rapper portrait, bold script, ski mask figure, and handgun at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-29-12-24-22-54-32-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo with a split clown face, melancholic female portrait, and layered face studies at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-30-06-23-01-30-32-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full back tattoo featuring blindfolded faces, chain-link framing, city skyline, casino chips, and money at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-30-10-23-13-31-00-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano full back tattoo with a ski mask portrait, lion head, Statue of Liberty, cash stacks, and rifle at Bloodline Tattoo Bali.",
    },
    {
      src: chicanoProofSrc("bali", "chicano-tattoo-photo-30-12-22-17-32-40-bloodline-bali.webp"),
      alt: "Detailed black and grey Chicano leg sleeve tattoo of a woman in a cap holding a pistol with cash and a nun portrait below at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-baby-girl-shotgun-hollywood-pitbull-leg-bloodline-phuket.webp",
      ),
      alt: "Chicano Baby Girl payasa leg sleeve with shotgun, Hollywood sign, lowrider, and pitbull at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-control-lowrider-boombox-graffiti-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano graffiti arm sleeve with Control script, lowrider, portraits, and boombox at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-crown-lv-bandana-mustang-clown-leg-bloodline-phuket.webp",
      ),
      alt: "Chicano crowned portrait leg sleeve with LV bandana, Mustang, palm trees, and clown masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-crown-skull-gun-drama-masks-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano leg sleeve with crowned skull portrait, handgun, and laugh-now cry-later masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-greed-balaclava-three-monkeys-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano Greed script leg sleeve with balaclava grill and three wise monkeys payasas at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-harley-payasa-roses-scream-arm-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano arm sleeve with screaming portrait, Harley-Davidson logo, payasa face, and roses at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc("phuket", "chicano-tattoo-img-0770-bloodline-phuket.webp"),
      alt: "Chicano black and grey sleeve with a Monopoly man in an LV-pattern vest, tumbling dice, and a woman portrait with a clock eye and shush gesture at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc("phuket", "chicano-tattoo-img-1373-bloodline-phuket.webp"),
      alt: "Chicano leg tattoo with a woman in clown stitch makeup, a shushing hand, a cracked mask with Boo ghost, Mario, and a screaming face at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc("phuket", "chicano-tattoo-img-1377-bloodline-phuket.webp"),
      alt: "Chicano leg tattoo with Scrooge McDuck, fedora Mickey Mouse, a roulette wheel, slot reels, money bags, and a cartoon bomb at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-king-amor-money-tiger-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano King and Amor script leg sleeve with cash stack and tiger portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-all-seeing-eye-clown-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano payasa portrait leg sleeve with all-seeing eye and clown masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-blue-eye-las-vegas-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano payasa portrait leg sleeve with blue eye and Las Vegas cityscape at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-dice-chain-laugh-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano payasa and laughing portrait leg sleeve with dice, chain, and graffiti logo at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-gun-script-joker-arm-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano arm sleeve with payasa portrait, handgun, script lettering, and Joker face at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-payasa-skull-bomb-scream-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano payasa leg sleeve with skull bomb, screaming portrait, and clown masks at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-roulette-payasa-gun-lowrider-back-piece-bloodline-phuket.webp",
      ),
      alt: "Chicano back tattoo with roulette, payasa portrait, handgun, playing cards, and lowrider at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-sinner-payasa-torn-faces-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano Sinner script leg sleeve with payasa portrait and torn layered faces at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-statue-liberty-balaclava-payasa-smile-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano arm sleeve with Statue of Liberty, balaclava, payasa, and smile-now mask at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-statue-liberty-money-gag-clock-eye-sleeve-bloodline-phuket.webp",
      ),
      alt: "Chicano arm sleeve with Statue of Liberty portrait, money blindfold, clock, eye, and rose at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-west-coast-motorcycle-brass-knuckles-leg-bloodline-phuket.webp",
      ),
      alt: "Chicano West Coast script leg tattoo with motorcycle, name banners, brass knuckles, and dice at Bloodline Tattoo Phuket.",
    },
    {
      src: chicanoProofSrc(
        "phuket",
        "chicano-tattoo-yavuz-ailesi-money-rifle-back-piece-bloodline-phuket.webp",
      ),
      alt: "Chicano back tattoo with Yavuz Ailesi script, money, rifle portrait, and Australian banknotes at Bloodline Tattoo Phuket.",
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
