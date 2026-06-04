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
        "portrait-tattoo-sydney-roosters-nrl-premiership-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism leg sleeve tribute to Sydney Roosters rugby league with player portraits, Steeden ball, and NRL premiership trophy at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-elderly-couple-turban-glasses-inner-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism inner forearm tattoos of an elderly man in a turban with glasses and an elderly woman with white hair at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-tupac-shakur-death-row-chain-arm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism arm tattoo of Tupac Shakur with hand near mouth and a Death Row Records chain pendant at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-woman-child-portraits-dual-forearms-bloodline-bangkok.jpg",
      ),
      alt: "Matching black and grey portrait realism forearm tattoos of a woman in profile and a smiling young child in a collared shirt at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-chris-brown-greyce-merci-script-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Chris Brown in a cap with grills and bold Greyce and Merci Chicago script below at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-nicki-minaj-barbie-dj-turntable-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism arm sleeve with a bearded man portrait, DJ turntable scene, and Nicki Minaj with Barbie script at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-boxing-legends-tyson-ali-pacquiao-canelo-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism full arm sleeve of boxing legends Mike Tyson, Muhammad Ali, Manny Pacquiao, and Canelo Alvarez at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-kodak-black-50-cent-tupac-ribs-stack-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism rib tattoo stack featuring Kodak Black, 50 Cent, and Tupac Shakur in bandana at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-darth-maul-demon-monster-dual-thighs-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism thigh tattoos of Darth Maul and a horned demonic creature with snarling teeth at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-thomas-shelby-peaky-blinders-cigarette-whiskey-arm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism arm tattoo of Thomas Shelby from Peaky Blinders smoking a cigarette and holding a whiskey glass at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-manny-pacquiao-boxing-mp-logo-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of boxer Manny Pacquiao in fighting stance with his MP logo and Philippine sun at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-hip-hop-legends-full-back-collage-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism full back collage of hip-hop legends including Biggie Smalls, Tupac, Eminem, 50 Cent, and Post Malone at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-tupac-shakur-bandana-shoulder-portrait-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism shoulder tattoo of Tupac Shakur wearing a front-tied bandana with chain and strap detail at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-tupac-shakur-bandana-glasses-thigh-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism thigh tattoo of Tupac Shakur in bandana and round glasses with rings on his raised hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-royce-da-59-eminem-detroit-microphone-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo stack of Royce da 5'9 in Detroit Tigers cap and Eminem holding a microphone at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-kendrick-lamar-vintage-microphone-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Kendrick Lamar with braids above a detailed vintage microphone at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-notorious-big-manhattan-bridge-money-leg-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism leg tattoo of The Notorious B.I.G. in sunglasses with Manhattan Bridge skyline and hands holding cash at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-mike-tyson-stacked-portraits-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism arm sleeve with stacked male portraits including Mike Tyson in boxing gloves between two detailed faces at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-tupac-shakur-la-skyline-dodgers-forearm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm sleeve of Tupac Shakur in bandana and glasses with Los Angeles skyline, palm trees, and Dodgers LA logo at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-bruce-lee-pointing-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Bruce Lee pointing directly forward with intense facial detail at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-smiling-man-plaid-shirt-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of a smiling man in a detailed plaid button-down shirt at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-notorious-big-ribs-bless-script-shattered-glass-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism rib tattoo of The Notorious B.I.G. in sunglasses and Coogi sweater with Bless script and shattered glass effect at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-tommy-egan-power-handgun-leather-jacket-arm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism upper arm tattoo of Tommy Egan from Power with close-up face and leather jacket figure holding a handgun at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-mike-tyson-face-tribal-tattoo-closeup-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism close-up tattoo of Mike Tyson with iconic tribal face tattoo and detailed stubble shading at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-french-bulldog-palm-trees-chest-shoulder-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism chest and shoulder tattoo of a French Bulldog with palm tree silhouettes and stylized K lettering at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-mac-miller-hand-tattoos-watch-arm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism arm tattoo of Mac Miller with hand near mouth, knuckle tattoos, MCMXCII wrist numerals, and a detailed watch at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-jj-watt-football-99-jersey-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of NFL player J.J. Watt with eye black and a smaller action pose in number 99 jersey at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-lagertha-vikings-war-paint-upper-back-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism upper back tattoo of Lagertha from Vikings with braided hair, metal rings, and war paint across her jaw at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-bob-marley-che-guevara-shoulder-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism shoulder tattoo pairing Bob Marley smoking with dreadlocks and Che Guevara laughing with a cigar at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-baby-frankie-james-script-inner-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism inner forearm tattoo of a smiling baby with headband and Frankie James script above at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-angus-young-slash-rock-legends-forearms-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoos of Angus Young in schoolboy uniform with devil horns and Slash in top hat playing a Les Paul at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-michael-scofield-prison-break-bars-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Michael Scofield from Prison Break with distressed title lettering and prison bar framing at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-ozzy-osbourne-black-sabbath-middle-finger-forearm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Ozzy Osbourne screaming with Black Sabbath reflected in his sunglasses and a raised middle finger at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-notorious-big-coogi-beanie-hand-gesture-arm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism arm tattoo of The Notorious B.I.G. in a beanie and textured Coogi sweater with an extended hand gesture at Bloodline Tattoo Bangkok.",
    },
    {
      src: portraitProofSrc(
        "bangkok",
        "portrait-tattoo-dennis-rodman-devil-horns-newspaper-background-arm-bloodline-bangkok.jpg",
      ),
      alt: "Black and grey portrait realism arm tattoo of Dennis Rodman with devil horns, tongue out, nose ring, and newspaper typography background at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-michael-jordan-kobe-bryant-basketball-forearms-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoos of Michael Jordan and Kobe Bryant with championship moments and Lakers branding at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-jim-morrison-singer-hands-forearm-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Jim Morrison with expressive hands and beaded necklace detail at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-chadwick-boseman-black-panther-forearm-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Chadwick Boseman paired with the Black Panther mask at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-soldier-bearded-man-pocket-watch-plane-chest-bloodline-bali.jpg",
      ),
      alt: "Full chest black and grey realism with soldier and bearded man portraits, pocket watch, vintage fighter plane, and Such is life script at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-angus-young-devil-horns-thigh-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism thigh tattoo of Angus Young in a schoolboy cap with devil horns at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc("bali", "portrait-tattoo-chihuahua-dog-thigh-bloodline-bali.jpg"),
      alt: "Detailed black and grey Chihuahua dog portrait realism on the thigh with expressive eyes and fine fur shading at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc("bali", "portrait-tattoo-rottweiler-dog-chest-bloodline-bali.jpg"),
      alt: "Black and grey Rottweiler dog portrait realism on the chest with lifelike fur texture and warm expression at Bloodline Tattoo Bali.",
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
        "portrait-tattoo-boy-woman-girl-arm-sleeve-collage-bloodline-bali.jpg",
      ),
      alt: "Black and grey portrait realism arm sleeve collage featuring a boy with face tattoos, a laughing woman in sunglasses with heart hands, and a girl with clown makeup holding ice cream, crafted at Bloodline Tattoo Bali.",
    },
    {
      src: portraitProofSrc(
        "bali",
        "portrait-tattoo-elderly-man-flat-cap-glasses-chest-bloodline-bali.jpg",
      ),
      alt: "Softly shaded black and grey portrait realism tattoo of a smiling elderly man in a flat cap and glasses on the left chest with a memorial date, at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-john-wick-shoot-color-realism-forearm-bloodline-phuket.jpg",
      ),
      alt: "Color realism portrait tattoo of John Wick with battle-worn face detail and bold SHOOT lettering on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-elderly-man-annalise-script-chest-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism chest tattoo of an elderly bearded man with Annalise script above the portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-mike-tyson-face-tribal-thigh-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism thigh tattoo of Mike Tyson with iconic facial tribal detail at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-jj-watt-99-football-leg-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism leg tattoo of J.J. Watt with eye black, nose tape, and number 99 football figure at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-muhammad-ali-manny-pacquiao-boxing-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism full leg sleeve with Muhammad Ali and Manny Pacquiao boxing portraits at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-mike-tyson-canelo-alvarez-boxing-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism leg sleeve pairing Mike Tyson with Canelo Alvarez and Mexico robe lettering at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-manny-pacquiao-mp-logo-calf-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism calf tattoo of Manny Pacquiao with MP logo and Philippine sun emblem at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-tupac-bandana-glasses-thigh-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism thigh tattoo of Tupac Shakur in bandana and round glasses at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-biggie-smalls-bridge-cash-thigh-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism thigh tattoo of The Notorious B.I.G. with NYC bridge skyline and cash hands at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-elderly-man-flat-cap-reference-proof-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of a smiling elderly man in a flat cap beside the reference photo at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-james-harden-13-beard-leg-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism leg tattoo of James Harden with beard detail and HARDEN 13 jersey figure at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-scarface-tony-montana-pablo-escobar-dual-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism dual tattoo of Tony Montana from Scarface and Pablo Escobar with NO ONE lettering at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-conor-mcgregor-jon-jones-ufc-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism UFC leg sleeve with Conor McGregor and Jon Jones championship scenes at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-east-la-welcome-three-men-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism arm sleeve with East Los Angeles welcome sign and three detailed male portraits at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-sunglasses-playing-cards-cityscape-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism arm sleeve with sunglasses portraits, playing cards, and cityscape filigree at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-pablo-escobar-hacienda-napoles-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism shoulder tattoo of Pablo Escobar with Medellin prison placard, plane, and Hacienda Napoles stack at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-barack-obama-thoughtful-pose-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Barack Obama in a suit with a thoughtful hand-to-temple pose at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-tupac-hit-em-up-west-st-leg-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism leg tattoo of Tupac with West St street signs and Hit Em Up script at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-muhammad-ali-liston-knockdown-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Muhammad Ali above the Sonny Liston knockdown boxing scene at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-chris-cornell-guitar-shoulder-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism shoulder tattoo of Chris Cornell playing electric guitar at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-angus-young-ozzy-bat-storm-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Angus Young with horned devil styling beside an Ozzy bat with lightning at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-slash-guitar-top-hat-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of Slash in top hat playing a Les Paul guitar at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-baby-brielle-birth-clock-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of baby Brielle with birth date, pocket watch, weight scale, and length details at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-woman-profile-pocket-watch-chest-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism chest tattoo of a woman in profile holding an open pocket watch at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-prison-break-michael-scofield-calf-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism calf tattoo of Michael Scofield from Prison Break with cell bars and title lettering at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-elderly-woman-smiling-upper-arm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism upper-arm tattoo of a smiling elderly woman with deep wrinkle detail at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-peaky-blinders-vintage-man-chair-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of a vintage gangster in flat cap seated on an ornate chair at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-joker-see-hear-speak-no-evil-calf-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism calf tattoo of Joker clown faces in see-no-evil, hear-no-evil, speak-no-evil poses at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-amar-family-memorial-grandmother-ribs-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism rib tattoo memorial for Amar Family with grandmother portrait, dove, and heavenly gates at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-woman-flowers-chest-portrait-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism chest tattoo of a smiling woman with floral accents behind the portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-dmx-ruff-ryders-chain-link-calf-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism calf tattoo of DMX with microphone, chain-link fence, and diamond Ruff Ryders logo at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-woman-tiara-wine-glass-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of a smiling woman with tiara, glasses, wine glass, and dragonfly necklace at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-forever-loved-man-portrait-calf-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism calf tattoo of a man with Forever Loved script arched above the portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-forever-loved-woman-portrait-calf-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism calf tattoo of a smiling young woman with Forever Loved script at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-eazy-e-compton-lowrider-leg-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism leg tattoo of Eazy-E with Compton street sign, skyline, and lowrider scene at Bloodline Tattoo Phuket.",
    },
    {
      src: portraitProofSrc(
        "phuket",
        "portrait-tattoo-french-bulldog-realism-forearm-bloodline-phuket.jpg",
      ),
      alt: "Black and grey portrait realism forearm tattoo of a French Bulldog with expressive face detail at Bloodline Tattoo Phuket.",
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
