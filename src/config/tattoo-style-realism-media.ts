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
        "black-grey-realism-photo-19-5-2026-1-06-10-pm-1-bloodline-bangkok.webp",
      ),
      alt: "A cinematic black and grey realism full sleeve with noir portraits, a spiral staircase scene, and melting abstract smoke flowing down the forearm, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-1-06-10-pm-3-1-bloodline-bangkok.webp",
      ),
      alt: 'A black and grey realism full sleeve featuring Harley Quinn with a baseball bat and the Joker\'s manic grin with "HAHAHA" lettering, at Bloodline Tattoo Bangkok.',
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-1-06-10-pm-4-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve with classic film-noir scenes including a fedora-clad man, shadowed figures on a staircase, and a somber woman's portrait, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-1-06-10-pm-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full arm sleeve with blindfolded and front-facing women's portraits, an ornate clock tower, and ethereal smoke highlights, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-1-06-11-pm-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism forearm sleeve pairing a detailed human skull with a woman's face seen through shattered glass and gothic architecture, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-1-06-11-pm-2-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve of Greek mythology with Zeus amid crackling lightning, a heroic figure, and a classical temple near the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-1-06-11-pm-5-bloodline-bangkok.webp",
      ),
      alt: 'A black and grey realism sleeve tattoo of a snarling dog head with bared teeth and a "CANADA" landscape backdrop on the upper arm, at Bloodline Tattoo Bangkok.',
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-1-06-11-pm-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve with a bearded hero in a lion pelt, the Roman Colosseum, and a winged angel descending toward the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-35-53-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve with Renaissance-style portraits of a praying veiled woman above a bearded man wearing a wristwatch, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-36-45-am-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism arm sleeve centered on Queen Elizabeth II with Tower Bridge, Big Ben, and a faded Union Jack backdrop, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-37-54-am-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve with a bald eagle above a snarling tiger's head, connected by wispy lightning-like energy streaks, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-37-54-am-2-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve with a roaring grizzly bear above the three wise monkeys motif with glowing eye highlights, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-37-54-am-3-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve of ancient Greece with a cracked Spartan helmet portrait, a lightning-struck temple, and battling warriors on the forearm, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-38-26-am-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve montage of a human skull, butterflies across a woman's eyes, and a large rose near the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-38-26-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full back piece of an intense gorilla portrait framed by smoky wisps across the shoulders and lower back, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-38-45-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism chest tattoo with a barbed-wire heart above a skull, flanked by a horned bearded man and a thorn-crowned woman in smoky shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-39-35-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve with a roaring black panther on the upper arm above a fierce gorilla on the forearm, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-39-47-am-bloodline-bangkok.webp",
      ),
      alt: "Two black and grey realism sleeves shown together: a weeping angel with puzzle-piece gaps and cherub, and a cracked nun above a fanged grinning woman, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-40-06-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism thigh tattoo of a woman's face merging into an anatomical skull, framed by roses and monarch butterflies, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-41-47-am-bloodline-bangkok.webp",
      ),
      alt: "A horror-themed black and grey realism full sleeve with a plague doctor, a sinister grinning clown, and macabre faces in atmospheric shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-42-06-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve pairing an indigenous woman in a feathered headdress with a skull wearing the same ornate headpiece, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-42-34-am-1-bloodline-bangkok.webp",
      ),
      alt: "Two black and grey realism sleeves: one with a woman, coiled snake, and oni mask, and another with a samurai kabuto, mempo, and geisha portrait, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-42-34-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism forearm sleeve of a fierce Hannya mask entwined with a scaled snake and delicate cherry blossoms, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-42-53-am-2-bloodline-bangkok.webp",
      ),
      alt: "Dual black and grey realism sleeves with Zeus and a lightning-struck Greek temple on one arm and a crowned skull with a Spartan warrior on the other, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-42-53-am-3-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve with a haloed female angel, cherubs among clouds, a dove, and a rose near the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-42-53-am-4-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve of Greek mythology with a bearded god, Parthenon-style temple, marble woman portrait, and armored warrior, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-10-42-53-am-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve of Mesoamerican warriors in feathered headdresses, a stepped pyramid temple, and a snarling jaguar near the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-22-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve with a serene Buddha head above a tiger's face, woven together with detailed lotus flowers, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-22-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve of an intricate mandala above a honeycomb of hexagonal geometric patterns with fine dotwork, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-26-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve stacking an owl beneath a full moon, a tiger's intense eyes, a woman's portrait, and a snarling big cat near the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-29-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve with a snarling wolf, a small warrior with shield before its jaws, and an ornate helmeted warrior profile bordered by Greek key patterns, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-30-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism forearm sleeve of a freckled woman's portrait crowned by a Hannya mask and framed with roses and cherry blossoms, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-31-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism chest and shoulder portrait of an indigenous woman in a feathered headdress with face paint and patterned headband details, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-32-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism forearm sleeve of a winged angelic figure beneath a geometric mandala and above a subdued foe in dramatic shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-33-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve with an elder Native American chief in a feathered headdress, horseback silhouettes in mountains, and a younger woman's portrait below, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-38-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism upper back tattoo of three snarling Doberman heads linked by heavy chains in a Cerberus-inspired design, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-39-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism stomach piece of an ornate Thai-style elephant head with decorative headdress, tusks, and lotus accents across the torso, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-41-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve combining a shadowed hooded figure, a detailed horse head, and a dove in flight amid glowing geometric patterns, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-42-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve with a snarling tiger and a coiled snake with bared fangs in high-contrast shading, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-44-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism tattoo of a fierce Thai mythological guardian wielding an ornate staff, with wispy energy swirls on the upper arm or thigh, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-38-30-am-45-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism arm tattoo of a plague doctor in a beaked mask and layered coat, with three lit candles glowing at the base, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-1-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full back tattoo of a roaring lion with detailed mane, fangs, and lifelike fur texture spanning the shoulders to the lower back, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve with a bearded Greek god, crackling lightning bolts, a flying dove, and an ornate pocket watch on the forearm, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-11-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism horror sleeve with a Ghostface mask, the Grim Reaper with scythe, and a misty graveyard beneath a full moon near the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-17-bloodline-bangkok.webp",
      ),
      alt: 'A black and grey realism forearm tattoo with Gothic "BROWNING" lettering above an ornate medallion and a hooded winged knight gripping a longsword, at Bloodline Tattoo Bangkok.',
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-19-1-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism forearm sleeve of a roaring lion with intricate fur detail and Roman numerals MCMLXXVIII near the wrist, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-25-1-bloodline-bangkok.webp",
      ),
      alt: 'A black and grey realism sleeve tattoo of a roaring lion\'s head with textured mane above a "Cain" script piece on the forearm, at Bloodline Tattoo Bangkok.',
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-3-1-bloodline-bangkok.webp",
      ),
      alt: "Two black and grey realism pieces on one arm: a feathered indigenous woman portrait and an owl perched atop a detailed human skull, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-3-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism sleeve of Egyptian imagery with Anubis beneath a full moon, a glowing ankh, pyramids, and a camel rider in desert sands, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-6-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism full sleeve of Thai mythology with fierce Yaksha and Hanuman faces before a detailed temple backdrop, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-8-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism stomach tattoo of a woman's portrait with a red forehead rune facing a snarling wolf with bloody jaws amid gothic filigree, at Bloodline Tattoo Bangkok.",
    },
    {
      src: realismProofSrc(
        "bangkok",
        "black-grey-realism-photo-19-5-2026-11-58-32-am-9-bloodline-bangkok.webp",
      ),
      alt: "A black and grey realism pirate-themed full sleeve with a bandana-clad captain, a storm-lashed ship attacked by kraken tentacles, a flintlock pistol, and a treasure chest, at Bloodline Tattoo Bangkok.",
    },
  ],
  bali: [
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-14-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo with a kraken, deep-sea diver, shark, and woman's face in a dark nautical scene at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-15-1-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full sleeve tattoo blending a demonic multi-eyed face, scaly textures, and a realistic human portrait at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-16-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoos pairing a jeweled masked portrait with occult horns, gothic architecture, and skull motifs at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-18-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full sleeve tattoo with a woman's face, wolves with blue eyes, white butterflies, and detailed floral elements at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-20-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of armored Archangel Michael battling dragons with wings, halo, and dramatic clouds at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-21-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo with a roaring grizzly bear, skull, surreal multi-eyed woman's face, and orange filigree accents at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-22-1-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo inspired by Saw with a bloody pig mask, blade, and Billy the Puppet portrait at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-22-2-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full sleeve tattoo of a mythological bearded god with flowing hair and intense shaded portrait detail at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-24-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo with a pirate captain portrait, sailing galleon, and kraken tentacles in turbulent seas at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-26-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of the Virgin Mary with a rose crown beside Jesus wearing a crown of thorns at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-27-1-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo with layered human skulls draped in delicate white spider webs and dark shading at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-27-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of snarling Cerberus beneath a bearded Hades portrait with Pluto symbol and shadowy hands at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-32-1-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of a lightning-wreathed Zeus with roaring lion, dragon, Medusa, and skull mace motifs at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-32-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of winged classical angel figures framed by ornate baroque scrollwork and architectural filigree at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-37-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of a roaring lion or tiger face with bared fangs and finely detailed fur texture at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-41-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo with a metallic female profile, Barong-style mask, mandala, and orange-outlined geometric accents at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-45-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo of a Viking warrior in helmet with Valknut medallion and a snarling wolf on the forearm at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-46-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo of a Norse female warrior portrait with runic markings, compass emblem, and ringed hand at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-48-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of the Joker's grinning portrait above a bold Why So Serious lettering at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-50-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of a large human skull with swirling white smoke through the eye sockets and teeth at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-52-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo collage of chained snarling wolves and a scarred tiger face divided by white slash marks at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-53-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo of a Spartan warrior in helmet gripping a heavy chain above a snarling wolf at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-54-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo pairing a bearded Greek philosopher with meander patterns and a laurel-wreathed portrait below at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-56-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo with multiple detailed dog portraits and polaroid-style snapshots layered along the arm at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-29-57-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo of a bandaged Egyptian mummy with a glowing red eye and hieroglyphic stone panels at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-30-01-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of Poseidon with kraken tentacles, a storm-tossed galleon, treasure chest, and sea creature eye at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-30-03-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo of a bearded sea god with octopus tentacles, crashing waves, and trident details at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-30-05-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo of a screaming Medusa with glowing eyes and snake above an armored minotaur holding a double axe at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-12-30-07-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of a chained roaring lion facing a Spartan warrior above a chariot race in a colosseum at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-21-04-25-13-43-38-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo with Anubis, a stone-textured pharaoh, and an Egyptian queen portrait with hieroglyph cheek markings at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-23-04-25-14-34-58-1-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo blending a classical male statue, smiling woman's portrait, and intertwined serpents with fangs at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-23-04-25-14-34-58-2-bloodline-bali.webp",
      ),
      alt: "Black and grey realism tattoos of Medusa with glowing eyes and snakes beside mythological Greek god portraits with lightning bolts at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-23-04-25-14-34-58-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo of Odin with ravens, Vegvisir compass, Valknut symbol, and runic circular frame at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-23-04-25-14-35-22-bloodline-bali.webp",
      ),
      alt: "Black and grey realism full back tattoo with domed light rays, winged figure, Atlas, Medusa head, lion carving, and classical portrait at Bloodline Tattoo Bali.",
    },
    {
      src: realismProofSrc(
        "bali",
        "black-grey-realism-photo-23-04-25-14-36-09-bloodline-bali.webp",
      ),
      alt: "Black and grey realism sleeve tattoo of one-eyed Odin with runes, a detailed raven, and a shouting Viking warrior in studded helmet at Bloodline Tattoo Bali.",
    },
  ],
  phuket: [
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-anderson-silva-gsp-mma-fighter-portraits-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring MMA fighter portraits of Anderson Silva and Georges St-Pierre at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-bear-elephant-crocodile-full-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a roaring bear, an elephant, and a crocodile at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-classical-female-statue-sculpture-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring two classical female sculpture faces surrounded by intricate architectural patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-classical-statue-faces-architectural-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring classical statue faces and architectural elements at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-crucifixion-jesus-christ-angels-gothic-full-back-bloodline-phuket.webp",
      ),
      alt: "Large detailed black and grey realism full back tattoo depicting the crucifixion of Jesus Christ with mourning angels and Gothic architectural framing at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-eazy-e-biggie-angus-young-music-legends-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring portraits of Eazy-E, The Notorious B.I.G., and Angus Young from AC/DC at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-egyptian-queen-pharaoh-pyramids-full-back-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full back tattoo featuring an Egyptian queen with bow, Pharaoh statue, Eye of Horus, Pyramids of Giza, and a camel caravan at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-evil-clown-money-bag-shushing-woman-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a menacing horror clown holding a money bag and a woman making a shushing gesture at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0262-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring a Spartan warrior in a Corinthian helmet, Greek temple columns, and a phalanx of shield-bearing soldiers at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0355-bloodline-phuket.webp"),
      alt: "Large black and grey realism full back tattoo featuring Jesus with a crown of thorns, the Last Supper, the Crucifixion, and a figure ascending toward light at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0499-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a snarling demon, metal chains, a realistic eye in a clawed hand, a serene woman, and a lotus flower at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0522-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a woman with a third eye, heavy chains, and a gladiator warrior in armor at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0550-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring realistic chimpanzee and leopard portraits framed by tropical palm fronds at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0565-bloodline-phuket.webp"),
      alt: "Highly detailed black and grey realism full back tattoo featuring Poseidon, winged all-seeing eye, Hermes, Athena with owl, sailing ship, mermaid, and Greek key border at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0692-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo of a hooded winged angel holding a broadsword above a pile of skulls and reaching skeletal hands at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0720-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a hooded skull, ornate hourglass, chicano-style smiling woman, and skull near the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0916-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Greek god portrait with lightning, a sailing galleon, and a muscular figure in stormy waves at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0924-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Viking warrior in a knotwork helmet, an owl, a shattered clock with a realistic eye, and an eagle head at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-0983-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a tiger headdress, tribal-marked woman, wolf profile, and Native American feathered headdress portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1006-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a horned demon woman with white eyes, anatomical heart, and hooded winged reaper at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1107-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo of a skull-faced warrior woman on a gothic throne with staff, skulls, and skeletal figure at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1260-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo of the Virgin Mary holding the infant Jesus beneath a crown of thorns and Calvary crosses at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1331-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism torso tattoo featuring cherubs, Tony Montana from Scarface, Pablo Escobar, and script reading Real eyes Realise Real lies at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1405-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a classical warrior with cross shield, flying dove, compass rose, rose, and feather at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1406-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a realistic human eye, skeleton pocket watch with gears, and ornate filigree scrollwork at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1437-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a Bob Marley portrait, skeletal scene, script lettering, and cherub angel at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1441-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a Tupac Shakur portrait, palm trees, classic lowrider, and Welcome to Mt Druitt road sign at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1548-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism tattoo sleeve featuring a snarling lion on the upper arm and an eagle with spread wings on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1555-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a misty forest with a stag, coiled striking snake, and realistic skull at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1575-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a hooded skull, Venetian mask, Santa Muerte woman, and handgun at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1577-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a skull with spider web, sugar skull woman, clown face, smoking hand, and city skyline at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1598-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring a praying cherub, devilish cherub with money, crucifix, and The Last Supper at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1625-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a woman's floral portrait, hand gripping a snake, realistic skull, and flowers at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1668-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo with red accents featuring a woman with glowing red eyes, snarling wolf, and realistic eye on the hand at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1715-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Greek god portrait on the thigh and a robed figure before classical temple columns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1717-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a cracked stone woman with white eyes, coiled snakes, and hooded skeletal reaper at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1730-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring Poseidon with trident, Greek key pattern, and classical temple near the ankle at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1737-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring Athena in a lion helmet, Zeus portrait, and Parthenon columns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-1847-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a veiled woman with ornate ring and weathered classical statue face at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2075-2-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring multiple realistic women's portraits with glowing halos and dramatic light rays at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2101-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring Medusa with snake hair and fangs above a cracked skull and rib-like bone structures at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2153-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring the Crucifixion in an archway, feathered wings, large skull, and praying angels in the eye sockets at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2157-online-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring a massive weathered skull, skeletal gripping hands, ribcage framing, and spider at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2186-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring Only Fools and Horses characters, the Trotters Reliant van, and Rocky Balboa at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2200-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a Zeus-like figure with lightning, snarling lion, and bearded warrior portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2264-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring a horned demonic face with cat-like eyes, jagged teeth, and gothic filigree at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2352-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a Greek temple, Poseidon with trident, and bearded figure with skull crown at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2594-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a fedora-clad man with handgun, film noir street scene with Avatar marquee, and flat-cap portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2600-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a man in a fedora and trench coat with a woman smoking a cigarette in vintage noir style at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2669-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring a hooded skeletal grim reaper, ornate filigree, and screaming skull in a spade frame at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2732-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring The Godfather portrait, King of New York banner, and gangster with Tommy gun at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2793-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring realistic portraits of a bearded man in a flat cap with glasses and additional faces in script style at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2798-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a fragmenting Egyptian pharaoh skull, reaching hand, and pyramid under a starry sky at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2810-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a biomechanical lion with glowing eyes, screaming woman, and reaching hand at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2931-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism full back tattoo featuring a crowned woman with halo holding a horned demon mask, scales balancing heart and brain, and flanking angels at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-2970-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a pirate portrait, sailing galleon on waves, and underwater treasure chest at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3002-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a serene woman with radiant cross, Saturn, child portrait, and brain in geometric pattern at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3007-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo with red accents featuring Spartan warriors, Greek temple, Lambda shield, and meander patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3061-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Viking woman in an ornate helmet, ram skull, tear-streaked portrait, and sword hilt at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3064-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism full leg sleeve tattoo featuring a Medusa-like woman with white eyes, gothic cathedral arches, and coiled snakes at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3252-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a bearded elder with glowing white eyes, snake overhead, and three snarling wolf heads at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3257-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a plague doctor, glowing lantern with smoke, demonic face, and graveyard crosses at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3334-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring a winged angel warrior with broadsword, gothic window, and pile of skulls at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3356-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring the Virgin Mary with infant Jesus, gothic rose window, bearded statue face, and lion on the hand at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3366-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring an armored angel with sword, four-eyed woman portrait, and maze silhouette at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3493-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a mystical woman with crescent moon and crystal shards, and a detailed raven on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3550-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring Zeus with lightning, serpent creature, Hercules in lion pelt, Pegasus, and Greek key band at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3816-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo with red accents featuring Sydney Roosters rugby players, Steeden ball, and NRL trophy at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3947-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring an indigenous warrior in an ornate headdress, hand gripping a decorative dagger, and snarling jaguar at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-3949-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Mayan woman with ornate crown and light beam, ancient statue idol, and stepped pyramid at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4070-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism full leg sleeve tattoo featuring a Viking knotwork helmet, braided warrior beard, hand on sword, raven, and runic banner at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4212-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring The Godfather, Sydney Opera House, Tony Montana, Pablo Escobar mugshot, and Product of My Environment banner at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4430-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring gothic cathedral arches, two haunting women's portraits, and coiled snakes at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4437-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Valkyrie in an ornate helmet with war paint and a second woman with white eyes beneath a skull at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4537-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a gangster in a fedora and trench coat, vintage car, roulette wheel, and rugged portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4542-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring gangster portraits, dollar bill, silhouettes in fedoras, and Tommy gun at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4544-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism full back tattoo featuring a woman with closed eyes and tear streaks, stained-glass light rays, cupped glowing orb, and ornate script at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4593-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a samurai skull in a kabuto helmet with katana, woman's portrait, and Japanese cloud patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4648-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring Michael Myers mask, Jason Voorhees with machete, and haunted Victorian house at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4650-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring Freddy Krueger, Pennywise, and Chucky with a torn-paper effect at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4793-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring the Joker laughing portrait and a puppeteer hand controlling a creepy doll head at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-4798-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a Leatherface-style stitched mask and a woman screaming in terror at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5023-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism full back tattoo featuring an Egyptian goddess with hieroglyphics, Eye of Providence, snarling panther, cobra, scorpion, and pyramids at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5043-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism full back tattoo featuring a Mayan warrior with ornate feathered headdress, stepped pyramid, and feathered serpent skull at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5221-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a realistic woman's portrait with Japanese wave motifs at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5224-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a realistic skull, lotus flower, Roman numerals, and flowing smoke patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5385-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a classical Greek statue head, Guy Fawkes mask, religious woman portrait, and Greek key band at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5392-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a cherub tattooing a heart, classical David portrait, temple columns, and Greek key patterns at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5667-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring Pablo Escobar portrait, .44 Magnum revolver, hundred-dollar bills, and woman behind chain-link fence at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5676-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a woman with clown makeup, laughing clown mask, and sad clown mask at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5739-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring names Harrison, Jacob, Salmon, and Neil in intricate script with Roman numerals at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5874-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a woman with ram horn, skeletal clawed hand, and cracked Michael Myers mask at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-5878-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring multiple realistic skulls, large spider, and intricate spider webs at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-6005-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring an Egyptian Pharaoh portrait, hieroglyphics, glowing Ankh, and sphinx at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-6008-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring an Egyptian queen with hieroglyphics, pyramid, camel caravan, and pharaoh portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-6064-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full sleeve tattoo featuring two Viking warriors with ornate winged helmets, beards, and lightning effects at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-6096-bloodline-phuket.webp"),
      alt: "Detailed black and grey realism full back tattoo featuring Hercules in a lion-head cowl with glowing eye, classical columns, and lightning-torn composition at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-6288-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism full leg sleeve tattoo featuring surreal biomechanical human faces with rib-like structures and screaming expressions at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc("phuket", "black-grey-realism-img-6293-bloodline-phuket.webp"),
      alt: "Intricate black and grey realism tattoo featuring a surreal biomechanical woman's face, organic textures, and a large spider over a second face at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-jaguar-chameleon-fern-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring a snarling jaguar, a chameleon, and fern leaves at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-mac-miller-avicii-portrait-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring portraits of Mac Miller and Avicii at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-mayan-aztec-skull-pyramid-woman-portrait-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a Mayan-style skull in a headdress, an ancient stepped pyramid with lightning, and a realistic woman's portrait at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-medusa-statue-architecture-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a Medusa portrait with snakes, a classical statue, and architectural elements at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-norse-odin-forest-bear-runes-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a hooded Norse god portrait, radiant starburst, pine forest, bear, and ancient runes at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-norse-odin-raven-valkyrie-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a Norse warrior portrait, a raven in flight, and a crowned Valkyrie woman at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-panther-rose-dove-woman-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a snarling black panther, a rose, a dove, and a woman's face at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-pilot-skull-fighter-jet-compass-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a pilot skull with goggles, a fighter jet, and a compass rose at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-shattered-face-skeleton-graveyard-full-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a shattered face portrait and a macabre scene with a robed skeleton and skulls at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-skull-gothic-ornament-female-statue-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a skull with gothic ornamental patterns and a classical female statue on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-slipknot-corey-taylor-mask-nonagram-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a Slipknot Corey Taylor mask and nonagram symbol at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-snarling-wolf-vegvisir-pine-forest-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism sleeve tattoo featuring a snarling wolf, a Viking Vegvisir compass with runes, and a pine forest at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-split-face-crown-of-thorns-skull-candles-full-back-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full back tattoo of a split human and demonic face with a crown of thorns, skull, and candles at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-surreal-screaming-face-portal-all-seeing-eye-full-back-bloodline-phuket.webp",
      ),
      alt: "Intricate black and grey realism full back tattoo featuring a surreal screaming face with a portal in its mouth and an all-seeing eye at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-swat-tactical-officer-armored-vehicle-back-bloodline-phuket.webp",
      ),
      alt: "Highly detailed black and grey realism back tattoo featuring a SWAT tactical officer aiming a rifle, an armored vehicle, and a suburban house scene at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-tupac-chester-bennington-portrait-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring portraits of Tupac Shakur and Chester Bennington at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-ufc-conor-mcgregor-jon-jones-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full leg sleeve tattoo featuring UFC legends Conor McGregor and Jon Jones with championship belts at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-viking-warrior-raven-longship-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a Viking warrior portrait, a raven, and a Viking longship at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-warrior-woman-sword-hand-leg-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism leg sleeve tattoo featuring a fierce warrior woman portrait and a hand gripping a sword at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-demon-skull-spider-web-full-back-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full back tattoo featuring a woman with barbed wire, a horned demonic figure, and a skull with a spider and web at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-face-lions-full-back-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full back tattoo featuring a woman's face peering through the faces of two lions at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-face-shattered-glass-skull-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring a woman's face seen through shattered glass and a skull on the forearm at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-woman-portrait-saturn-planet-tree-sleeve-bloodline-phuket.webp",
      ),
      alt: "Intricate black and grey realism full sleeve tattoo featuring a realistic woman's portrait, the planet Saturn, and a gnarled tree at Bloodline Tattoo Phuket.",
    },
    {
      src: realismProofSrc(
        "phuket",
        "black-grey-realism-zeus-lightning-greek-god-sleeve-bloodline-phuket.webp",
      ),
      alt: "Detailed black and grey realism full sleeve tattoo featuring Zeus with lightning bolts and Greek mythology elements at Bloodline Tattoo Phuket.",
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
