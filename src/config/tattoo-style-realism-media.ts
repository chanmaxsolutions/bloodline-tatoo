import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type RealismStudioRegion = "bangkok" | "bali" | "phuket";

const realismImageRoot = "/images/tattoo-styles/realism";

function isRealismStudioRegion(studio: TattooStyleStudioRegion): studio is RealismStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function realismProofSrc(studio: RealismStudioRegion, filename: string): string {
  return `${realismImageRoot}/${studio}/proof/${filename}`;
}

const realismStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Black and grey realism back tattoo with Greek god portrait, winged angel, temple, and lightning at Bloodline Tattoo Bangkok",
    approachAlt:
      "Black and grey realism sleeve with Greek god, winged angel, cathedral architecture, and eye detail at Bloodline Tattoo Bangkok",
    cardAlt:
      "Archangel Michael black and grey realism back tattoo with sword, ruins, and rose sleeve at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Black and grey realism Spartan warrior and Parthenon full back tattoo in a moody studio at Bloodline Tattoo Bali",
    approachAlt:
      "Black and grey realism portrait sleeve with roses and classical columns on a woman at Bloodline Tattoo Bali",
    cardAlt:
      "Spartan warrior and Parthenon full moon black and grey realism back tattoo at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Black and grey realism angel full back tattoo with cathedral columns in a cinematic studio at Bloodline Tattoo Phuket",
    approachAlt:
      "Black and grey realism angel back tattoo with sword, roses, and classical columns at Bloodline Tattoo Phuket",
    cardAlt:
      "Black and grey realism sleeve with angel, skull, snake, and Greek god with lightning at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  RealismStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const realismProofPoolsByStudio: Record<
  RealismStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
  bangkok: [
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-spartan-warrior-greek-temple-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a Spartan warrior, Greek temple, and phalanx of soldiers at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-jesus-crown-thorns-last-supper-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A large black and grey realism full back tattoo depicting Jesus with a crown of thorns, the Last Supper, and crucifixion scenes at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-demonic-face-eye-woman-portrait-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a demonic face, a large eye, and a woman's portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-woman-third-eye-chain-warrior-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a woman with a third eye, heavy chains, and a Spartan warrior at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-chimpanzee-leopard-jungle-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A high-contrast black and grey realism full arm sleeve tattoo featuring a chimpanzee and leopard portrait with palm leaf patterns at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-poseidon-greek-gods-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring Poseidon, Hermes, Athena, and a stormy sea with a ship and mermaid at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-hooded-angel-sword-skulls-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a hooded winged figure holding a sword above a pile of skulls at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-grim-reaper-hourglass-clown-woman-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a hooded skull, an hourglass held by a skeletal hand, and a clown woman portrait at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-zeus-lightning-ship-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a Greek god portrait with lightning, a sailing ship, and crashing waves at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-viking-owl-eye-eagle-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a Viking warrior with an owl, a human eye, and an eagle with clock fragments at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-tiger-wolf-native-headdress-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism leg sleeve tattoo featuring a tiger, a wolf, and a woman in a Native American feathered headdress at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-demonic-woman-heart-angel-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a demonic woman's portrait, an anatomical heart, and a hooded angel at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-skeletal-queen-throne-skulls-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A highly detailed black and grey realism full back tattoo featuring a skeletal queen on a throne surrounded by skulls and gothic architecture at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-virgin-mary-jesus-golgotha-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring the Virgin Mary holding baby Jesus with a crown of thorns and Golgotha crosses at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-cherubs-scarface-portraits-chest-stomach-bloodline-bangkok.jpg",
      ),
      alt: "A massive black and grey realism chest and stomach tattoo featuring cherubs, portraits of Tony Montana and Pablo Escobar, and script lettering at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-archangel-dove-compass-rose-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring an archangel warrior, a dove, a compass, and a rose at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-eye-pocket-watch-filigree-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a large eye and an ornate pocket watch with ornamental filigree at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-bob-marley-cherub-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a portrait of Bob Marley and a cherub angel at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-tupac-lowrider-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a Tupac Shakur portrait, palm trees, and a lowrider car at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-roaring-lion-eagle-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a roaring lion and an eagle with spread wings at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-skull-snake-forest-stag-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a skull, a striking snake, and a forest scene with a stag at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-grim-reaper-hourglass-catrina-handgun-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a grim reaper skull, an hourglass, a Catrina woman portrait, and a handgun at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-santa-muerte-clown-skyline-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a Santa Muerte portrait, a clown face, and a city skyline at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-cherub-devil-last-supper-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a praying cherub, a devil with money, a crucifix, and the Last Supper at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-woman-snake-skull-flowers-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a woman's portrait, a snake, a skull, and flowers at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-woman-wolf-eye-red-accents-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a woman's portrait, a snarling wolf, and a large eye with red accents at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-greek-god-temple-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a Greek god portrait and a muscular deity standing before a temple at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-cracked-face-snake-grim-reaper-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a cracked stone woman's face, coiled snakes, and a grim reaper at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-poseidon-trident-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring Poseidon holding a trident with Greek key patterns at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-athena-zeus-temple-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring Athena with an eagle helmet, Zeus, and a classical temple at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-veiled-woman-statue-face-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "An intricate black and grey realism full arm sleeve tattoo featuring a veiled woman portrait and a weathered statue-like face at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-three-women-portraits-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring three women's portraits with dramatic light rays at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-medusa-snakes-skull-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring Medusa with snakes and a skull with rib cage at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-skull-angels-crucifixion-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a large skull with praying angels in the eye sockets and a crucifixion scene at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-skull-skeletal-hands-ribcage-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a large skull grasped by skeletal hands with ribcage framing at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-only-fools-horses-rocky-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring Only Fools and Horses characters, the Trotters van, and Rocky Balboa at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-zeus-lion-hercules-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring Zeus with lightning, a lion, and Hercules at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-demonic-skull-horns-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a demonic skull with large horns and sharp teeth at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-poseidon-skull-crown-greek-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring a Greek temple, Poseidon with a trident, and a bearded figure with a skull crown at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-noir-gangster-cinema-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring film noir gangster portraits and a cinematic street scene at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-noir-fedora-man-woman-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring noir-style man and woman portraits wearing fedora hats at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-grim-reaper-gothic-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a hooded grim reaper with gothic filigree and a skull at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-godfather-vito-corleone-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring Don Vito Corleone, Michael Corleone, and Godfather-themed imagery at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-three-men-portraits-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring three realistic men's portraits including a man with glasses and a flat cap at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-egyptian-pharaoh-skull-pyramid-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring an Egyptian pharaoh skull, a glowing hand, and a pyramid landscape at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-lion-screaming-woman-claw-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a lion with glowing eyes, a screaming woman's face, and a clawed hand at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-woman-devil-mask-scales-full-back-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full back tattoo featuring a woman with a halo holding a devil mask above scales of justice flanked by angels at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-pirate-ship-treasure-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a pirate portrait, a sailing ship, and an underwater treasure chest at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-woman-child-brain-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring portraits of a woman and a child, an anatomical brain, and geometric patterns at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-spartan-warrior-red-accents-arm-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full arm sleeve tattoo featuring Spartan warriors with red accents, a Greek shield, and temple ruins at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-norse-woman-runes-leg-sleeve-bloodline-bangkok.jpg",
      ),
      alt: "A detailed black and grey realism full leg sleeve tattoo featuring a Norse woman in a winged helmet, a horned skull, and runic symbols at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-medusa-gothic-cathedral-snakes-full-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a Medusa portrait with gothic cathedral arches, coiled snakes, and dark surreal portraiture at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-bearded-man-snake-wolves-full-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a bearded man portrait with glowing eyes, a snake, and snarling wolf heads at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-plague-doctor-lantern-demon-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a plague doctor with a glowing lantern, smoke, and a demonic figure with graveyard crosses at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-female-warrior-angel-sword-skulls-full-back-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full back tattoo featuring a female warrior angel with wings holding an ornate sword above a pile of skulls and gothic architecture at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-religious-mary-jesus-god-lion-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full arm sleeve tattoo featuring the Virgin Mary and child, a gothic rose window, a bearded god portrait, and a lion head at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-winged-warrior-angel-double-eyes-maze-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a winged warrior angel with a sword, a surreal double-eyed woman portrait, and a labyrinth scene at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-woman-crescent-moon-raven-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism arm sleeve tattoo featuring a mystical woman with a crescent moon and crystalline shards alongside a large raven at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-greek-mythology-zeus-pegasus-hercules-full-back-bloodline-bali.jpg",
      ),
      alt: "Intricate black and grey realism full back tattoo featuring Greek mythology with Zeus, lightning, Pegasus, Hercules, and a Greek key pattern at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-sydney-roosters-rugby-nrl-trophy-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring Sydney Roosters rugby league players and the NRL premiership trophy with red accents at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-mayan-warrior-jaguar-stone-dagger-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring an ancient Mayan warrior, a hand gripping a stone dagger, and a snarling jaguar at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-mayan-woman-pyramid-temple-statue-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a Mayan woman with an ornate headdress, a beam of light, a step pyramid temple, and an ancient stone statue at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-viking-warrior-helmet-sword-runes-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Viking warrior with an intricate helmet, sword, Norse runes, and an eagle head at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-gangster-collage-godfather-scarface-escobar-full-back-bloodline-bali.jpg",
      ),
      alt: "Massive black and grey realism full back tattoo collage featuring Vito Corleone, Tony Montana, Pablo Escobar, and the text Product of My Environment at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-gothic-cathedral-snake-blood-drip-portrait-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring gothic cathedral arches, coiled snakes, and realistic female portraits with dark dripping details at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-valkyrie-warrior-woman-skull-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a Valkyrie-style warrior woman with an ornate helmet, a skull, and a second woman with glowing eyes at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-gangster-noir-vintage-car-roulette-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring noir-style gangster portraits in fedoras, a vintage classic car, and a roulette wheel at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-gangster-mafia-tommy-gun-dollar-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring classic gangster portraits, mafia silhouettes, a Thompson submachine gun, and a dollar bill at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-mystical-woman-geometric-hands-orb-full-back-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full back tattoo featuring a serene female face with geometric stained-glass patterns and cupped hands holding a glowing orb at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-samurai-skull-katana-woman-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full arm sleeve tattoo featuring a samurai skull in a kabuto helmet, a skeletal hand gripping a katana, and a woman portrait at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-horror-michael-myers-jason-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring horror icons Michael Myers and Jason Voorhees with the Myers house and a kitchen knife at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-horror-freddy-pennywise-chucky-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism leg sleeve tattoo featuring horror movie characters Freddy Krueger, Pennywise, and Chucky with a torn-paper effect at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-joker-clown-puppeteer-creepy-doll-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism leg sleeve tattoo featuring a laughing Joker-style clown, a puppeteer hand with strings, and a creepy cracked doll head at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-horror-leatherface-screaming-woman-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a horror villain portrait resembling Leatherface and a screaming woman's face with sharp light shards at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-egyptian-queen-cobra-pyramids-scorpion-full-back-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full back tattoo featuring an Egyptian queen with hieroglyphics, a flared cobra, the pyramids, a scorpion, and the Eye of Providence at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-aztec-mayan-deity-pyramid-full-back-bloodline-bali.jpg",
      ),
      alt: "Large black and grey realism full back tattoo featuring an ancient Mesoamerican deity with an Aztec sun stone headdress and a stepped pyramid at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-woman-face-samurai-helmet-japanese-waves-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism arm sleeve tattoo featuring a woman's portrait, a samurai kabuto helmet, and traditional Japanese wave patterns at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-skull-roman-numerals-lotus-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism arm sleeve tattoo featuring a detailed skull, Roman numerals, an ornate mask figure, and a lotus flower at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-greek-statue-guy-fawkes-prayer-woman-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a cracked Greek statue, a Guy Fawkes mask, a prayerful religious woman portrait, and Greek key borders at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-cherub-statue-greek-key-temple-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a cherub with bow and arrow, a classical statue bust, Greek key patterns, and temple columns at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-pablo-escobar-revolver-money-woman-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism leg sleeve tattoo featuring a Pablo Escobar portrait, a .44 Magnum revolver, stacks of hundred-dollar bills, and a woman behind a chain-link fence at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-woman-clown-masks-laughing-crying-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a woman's portrait with clown markings and dramatic laughing and crying clown masks at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-script-lettering-names-roman-numerals-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring ornate script lettering with names and Roman numerals in calligraphy style at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-woman-horns-cracked-statue-face-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring a woman with ram horns and a cracked classical statue face with hollow dark spaces at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-skulls-spider-web-full-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring multiple human skulls, a large spider, and intricate spiderwebs at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-egyptian-pharaoh-anubis-ankh-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring an Egyptian pharaoh portrait, hieroglyphics, a glowing ankh symbol, and the god Anubis at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-egyptian-queen-pyramid-desert-camels-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring an Egyptian queen with hieroglyphics, the Great Pyramid, desert travelers, and a pharaoh burial mask at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-viking-warrior-beard-portraits-arm-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism full arm sleeve tattoo featuring Viking warrior portraits with ornate helmets, armor, and Norse mythology elements at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-hercules-lion-headdress-lightning-full-back-bloodline-bali.jpg",
      ),
      alt: "Intricate black and grey realism full back tattoo of a Greek god figure wearing a lion head headdress with lightning bolt accents and Greek columns at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-horror-surreal-faces-scream-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Black and grey realism full leg sleeve tattoo featuring horror-themed surreal faces with biomechanical ribs and a screaming open-mouth portrait at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-woman-face-spider-biomechanical-leg-sleeve-bloodline-bali.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a woman's portrait with a large spider, biomechanical textures, and an upside-down face at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-shattered-face-skeleton-graveyard-full-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a shattered face portrait and a macabre scene with a robed skeleton and skulls at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-egyptian-queen-pharaoh-pyramids-full-back-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full back tattoo featuring an Egyptian queen with bow, Pharaoh statue, Eye of Horus, Pyramids of Giza, and a camel caravan at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-warrior-woman-sword-hand-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a fierce warrior woman portrait and a hand gripping a sword at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-norse-odin-forest-bear-runes-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a hooded Norse god portrait, radiant starburst, pine forest, bear, and ancient runes at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-classical-female-statue-sculpture-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring two classical female sculpture faces surrounded by intricate architectural patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-skull-gothic-ornament-female-statue-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a skull with gothic ornamental patterns and a classical female statue on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-mac-miller-avicii-portrait-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring portraits of Mac Miller and Avicii at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-face-lions-full-back-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full back tattoo featuring a woman's face peering through the faces of two lions at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-swat-tactical-officer-armored-vehicle-back-bloodline-phuket.jpg",
      ),
      alt: "Highly detailed black and grey realism back tattoo featuring a SWAT tactical officer aiming a rifle, an armored vehicle, and a suburban house scene at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-norse-odin-raven-valkyrie-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a Norse warrior portrait, a raven in flight, and a crowned Valkyrie woman at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-slipknot-corey-taylor-mask-nonagram-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a Slipknot Corey Taylor mask and nonagram symbol at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-tupac-chester-bennington-portrait-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring portraits of Tupac Shakur and Chester Bennington at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-bear-elephant-crocodile-full-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a roaring bear, an elephant, and a crocodile at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-viking-warrior-raven-longship-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a Viking warrior portrait, a raven, and a Viking longship at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-eazy-e-biggie-angus-young-music-legends-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring portraits of Eazy-E, The Notorious B.I.G., and Angus Young from AC/DC at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-portrait-saturn-planet-tree-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Intricate black and grey realism full sleeve tattoo featuring a realistic woman's portrait, the planet Saturn, and a gnarled tree at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-panther-rose-dove-woman-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a snarling black panther, a rose, a dove, and a woman's face at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-anderson-silva-gsp-mma-fighter-portraits-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring MMA fighter portraits of Anderson Silva and Georges St-Pierre at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-pilot-skull-fighter-jet-compass-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a pilot skull with goggles, a fighter jet, and a compass rose at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-classical-statue-faces-architectural-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring classical statue faces and architectural elements at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-snarling-wolf-vegvisir-pine-forest-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a snarling wolf, a Viking Vegvisir compass with runes, and a pine forest at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-zeus-lightning-greek-god-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring Zeus with lightning bolts and Greek mythology elements at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-evil-clown-money-bag-shushing-woman-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a menacing horror clown holding a money bag and a woman making a shushing gesture at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-demon-skull-spider-web-full-back-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full back tattoo featuring a woman with barbed wire, a horned demonic figure, and a skull with a spider and web at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-face-shattered-glass-skull-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a woman's face seen through shattered glass and a skull on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-jaguar-chameleon-fern-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a snarling jaguar, a chameleon, and fern leaves at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-split-face-crown-of-thorns-skull-candles-full-back-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full back tattoo of a split human and demonic face with a crown of thorns, skull, and candles at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-surreal-screaming-face-portal-all-seeing-eye-full-back-bloodline-phuket.jpg",
      ),
      alt: "Intricate black and grey realism full back tattoo featuring a surreal screaming face with a portal in its mouth and an all-seeing eye at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-crucifixion-jesus-christ-angels-gothic-full-back-bloodline-phuket.jpg",
      ),
      alt: "Large detailed black and grey realism full back tattoo depicting the crucifixion of Jesus Christ with mourning angels and Gothic architectural framing at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-ufc-conor-mcgregor-jon-jones-leg-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring UFC legends Conor McGregor and Jon Jones with championship belts at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-medusa-statue-architecture-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a Medusa portrait with snakes, a classical statue, and architectural elements at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-mayan-aztec-skull-pyramid-woman-portrait-sleeve-bloodline-phuket.jpg",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a Mayan-style skull in a headdress, an ancient stepped pyramid with lightning, and a realistic woman's portrait at Bloodline Tattoo Phuket.",
    },
  ],
};

function getRealismStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof realismStudioMediaByRegion)["bangkok"],
): string {
  if (!isRealismStudioRegion(studio)) {
    return realismStudioMediaByRegion.bangkok[slot];
  }

  return realismStudioMediaByRegion[studio][slot];
}

function getRealismProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isRealismStudioRegion(studio)) {
    return [];
  }

  return realismProofPoolsByStudio[studio];
}

export {
  getRealismProofPoolForStudio,
  getRealismStudioMediaAlt,
  realismProofPoolsByStudio,
  realismStudioMediaByRegion,
};
