import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type ColourStudioRegion = "bangkok" | "bali" | "phuket";

const colourImageRoot = "/images/tattoo-styles/colour";

function isColourStudioRegion(studio: TattooStyleStudioRegion): studio is ColourStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function colourProofSrc(studio: ColourStudioRegion, filename: string): string {
  return `${colourImageRoot}/${studio}/proof/${filename}`;
}

const colourStudioMediaByRegion = {
  bangkok: {
    heroAlt:
      "Japanese colour full-back samurai tattoo with saturated reds and greens in a Bloodline Tattoo Bangkok studio hero image",
    approachAlt:
      "Japanese colour leg tattoo with red Tengu mask, blue tassels, and wind bars at Bloodline Tattoo Bangkok",
    cardAlt:
      "Japanese colour leg sleeve with samurai helmet, tiger, and orange cloud swirls at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Japanese colour chest and arm tattoo with green dragon, red Hannya mask, and cherry blossoms at Bloodline Tattoo Bali",
    approachAlt:
      "Full-leg colour tattoo with Greek god portrait, snake, and red lightning accents at Bloodline Tattoo Bali",
    cardAlt:
      "Colour realism fox sleeve with blue eyes, magenta peonies, and diagonal skin breaks at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Japanese colour leg sleeve with orange Hannya mask and black-and-grey waves at Bloodline Tattoo Phuket",
    approachAlt:
      "Colour leg tattoo with twin red Japanese masks and ornamental black-and-grey shading at Bloodline Tattoo Phuket",
    cardAlt:
      "Japanese colour leg sleeve with geisha in blue kimono, chrysanthemums, and wind bars at Bloodline Tattoo Phuket",
  },
} as const satisfies Record<
  ColourStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const colourProofPoolsByStudio: Record<ColourStudioRegion, readonly TattooStyleDetailProofImage[]> =
  {
    bangkok: [
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-1-06-10-pm-3-bloodline-bangkok.webp",
        ),
        alt: "Colour Japanese Irezumi full-back tattoo with a red Tengu, green dragon, Daruma doll, and katana swords at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-1-06-11-pm-3-bloodline-bangkok.webp",
        ),
        alt: "Colour neo-traditional Japanese Hannya mask tattoo with yellow eyes and fangs on the upper arm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-10-50-30-am-1-bloodline-bangkok.webp",
        ),
        alt: "Colour anime-style full sleeve tattoo of a horned woman with green hair above a purple Hannya mask on the arm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-10-50-30-am-bloodline-bangkok.webp",
        ),
        alt: "Colour Japanese Irezumi full leg sleeve tattoo with a samurai, green dragon, and lion dog among waves and clouds at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-1-bloodline-bangkok.webp",
        ),
        alt: "Colour surreal forearm sleeve tattoo with cracked stone faces, a dark owl, red energy, and a silhouetted figure at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-10-bloodline-bangkok.webp",
        ),
        alt: "Colour dark surreal full leg sleeve tattoo with skeletal figures, skulls, and glowing red and pink energy patterns at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-11-bloodline-bangkok.webp",
        ),
        alt: "Colour matching calf tattoos with a chameleon, cosmic face, mandrill portrait, and African savanna sunset silhouettes at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-12-1-bloodline-bangkok.webp",
        ),
        alt: "Colour space-themed full arm sleeve tattoo with astronauts, a launching shuttle, and cosmic nebulas at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-12-bloodline-bangkok.webp",
        ),
        alt: "Colour forearm tattoo of a French Bulldog in samurai armour with a red sun and pink peonies at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-13-bloodline-bangkok.webp",
        ),
        alt: "Colour religious lower leg tattoos of Jesus as the Good Shepherd and the Virgin Mary holding the infant Jesus at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-14-bloodline-bangkok.webp",
        ),
        alt: "Colour sci-fi full arm sleeve tattoo with grey aliens, an Egyptian pyramid, a spaceship, and a colourful nebula at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-15-bloodline-bangkok.webp",
        ),
        alt: "Colour portrait realism tattoo of Thomas Shelby in a flat cap with a cigarette on the forearm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-16-bloodline-bangkok.webp",
        ),
        alt: "Colour portrait realism tattoo of battle-damaged Terminator with exposed endoskeleton and glowing red eye at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-17-bloodline-bangkok.webp",
        ),
        alt: "Colour portrait realism tattoo of John Wick with bruised face and bold SHOOT lettering below on the forearm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-18-bloodline-bangkok.webp",
        ),
        alt: "Colour portrait realism tattoo of Arthur Shelby lighting a cigar in a suit and bow tie at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-2-bloodline-bangkok.webp",
        ),
        alt: "Colour biomechanical full sleeve tattoo with dark metallic structures and glowing orange organic accents on the arm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-20-bloodline-bangkok.webp",
        ),
        alt: "Colour portrait realism tattoo of a man in three-quarter profile with warm skin tones on the forearm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-21-bloodline-bangkok.webp",
        ),
        alt: "Colour Japanese Irezumi tattoo of a lantern spirit and Hannya mask with orange flames on the ribs or upper arm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-22-bloodline-bangkok.webp",
        ),
        alt: "Colour Japanese Irezumi matching full leg sleeve tattoos with a red dragon, koi fish, waves, and a red sun at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-23-bloodline-bangkok.webp",
        ),
        alt: "Colour surreal rib tattoo blending a woman's portrait with large red and pink roses on the side torso at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-3-bloodline-bangkok.webp",
        ),
        alt: "Colour dark fantasy thigh tattoo of an armoured knight with a sword before a glowing red sun at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-4-bloodline-bangkok.webp",
        ),
        alt: "Colour realistic forearm tattoo of a heart-shaped pocket watch inscribed Aria flanked by pink roses at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-5-bloodline-bangkok.webp",
        ),
        alt: "Colour arm tattoo of a black and grey snake winding through pink, purple, and blue flowers on a partial sleeve at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-6-bloodline-bangkok.webp",
        ),
        alt: "Colour Our Lady of Guadalupe forearm tattoo with blue star mantle, red roses, and lit candles on the hand at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-7-1-bloodline-bangkok.webp",
        ),
        alt: "Colour realistic forearm tattoo of an eagle head with warm sun rays above a Roman numeral pocket watch at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-7-bloodline-bangkok.webp",
        ),
        alt: "Colour trash polka arm sleeve tattoo with chess pieces, checkered patterns, and a snarling wolf in black, white, and red at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-8-bloodline-bangkok.webp",
        ),
        alt: "Colour surreal forearm tattoo of a woman in profile with red tribal markings and a golden helmet above a cosmic nebula at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-9-bloodline-bangkok.webp",
        ),
        alt: "Colour forearm sleeve tattoo of teal ocean waves, an orange sun, bare tree branches, and a geometric mandala at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-03-16-am-bloodline-bangkok.webp",
        ),
        alt: "Colour underwater arm tattoo with a seal, sea turtle, orange octopus tentacle, and deep blue ocean background at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-58-32-am-28-bloodline-bangkok.webp",
        ),
        alt: "Colour portrait realism tattoo of Kobe Bryant biting his yellow Lakers jersey on the forearm at Bloodline Tattoo Bangkok.",
      },
      {
        src: colourProofSrc(
          "bangkok",
          "colour-tattoo-photo-19-5-2026-11-58-32-am-29-bloodline-bangkok.webp",
        ),
        alt: "Colour portrait realism tattoo of Kurt Cobain with blonde hair and signature script on the forearm at Bloodline Tattoo Bangkok.",
      },
    ],
    bali: [
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-12-29-34-bloodline-bali.webp"),
        alt: "Colour surreal cyberpunk forearm sleeve tattoo with a glossy red face, grayscale portrait, and glowing blue circuit lines at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-12-29-44-bloodline-bali.webp"),
        alt: "Colour full arm sleeve tattoo with a snarling tiger, realistic eyes, orange ribbon swirls, and a lotus flower at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-16-08-bloodline-bali.webp"),
        alt: "Colour biomechanical leg tattoo with metallic gears, pistons, and bright red coiled springs wrapping the limb at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-16-15-bloodline-bali.webp"),
        alt: "Colour trash polka full sleeve tattoo with realistic female faces, red leaves, and a detailed skull on the arm at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-16-19-bloodline-bali.webp"),
        alt: "Colour Pennywise clown full sleeve tattoo with playing cards and dice on the arm at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-16-30-bloodline-bali.webp"),
        alt: "Colour Egyptian full arm sleeve tattoo with a queen portrait, ornate headdress, and Anubis in black and grey realism at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-16-48-bloodline-bali.webp"),
        alt: "Colour Japanese Irezumi full sleeve tattoo of a snarling tiger in black, grey, and red with traditional wind bars at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-16-53-bloodline-bali.webp"),
        alt: "Colour Japanese full arm sleeve tattoo with a dragon head, Fu dog, and orange swirling clouds at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-17-00-bloodline-bali.webp"),
        alt: "Colour Japanese full arm sleeve tattoo with a woman's face, samurai helmet, Hannya mask, skull, and red black patterns at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-17-05-bloodline-bali.webp"),
        alt: "Colour surreal full sleeve tattoo of a woman's face with a glowing third eye, red light streaks, and pale bandage wraps at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-18-38-bloodline-bali.webp"),
        alt: "Colour Greek mythology full arm sleeve tattoo with Zeus, red lightning, Medusa, and a Greek key pattern at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-18-46-bloodline-bali.webp"),
        alt: "Colour Egyptian full leg sleeve tattoo with a queen portrait, Anubis, hieroglyphics, and electric blue shattered effects at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-18-54-bloodline-bali.webp"),
        alt: "Colour surreal full arm sleeve tattoo peeling between a ghostly white face and a realistic portrait with red leaves at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-26-24-bloodline-bali.webp"),
        alt: "Colour illustrative forearm tattoo of Ariel, Flounder, and Sebastian from The Little Mermaid underwater at Bloodline Tattoo Bali.",
      },
      {
        src: colourProofSrc("bali", "colour-tattoo-photo-21-04-25-13-26-28-bloodline-bali.webp"),
        alt: "Colour realistic forearm tattoo of a tiger's face with orange fur, black stripes, and green foliage at Bloodline Tattoo Bali.",
      },
    ],
    phuket: [
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-0018-bloodline-phuket.webp"),
        alt: "Full-sleeve colour tattoo of a screaming warrior with glowing red lightning, a Spartan helmet figure, and a red Greek key band extending onto the hand at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-0085-bloodline-phuket.webp"),
        alt: "Trash-polka colour leg tattoo with a boy portrait, AGAINST ALL ODDS script, a red crying eye, a burning house, and RISK TAKER lettering at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-0524-bloodline-phuket.webp"),
        alt: "Japanese Irezumi colour sleeve with a blue dragon, a green Hannya mask, and swirling wave backgrounds at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-0535-bloodline-phuket.webp"),
        alt: "Vibrant Japanese colour sleeve featuring a coiled blue dragon, a purple peony, and traditional black wind-bar shading at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-0620-bloodline-phuket.webp"),
        alt: "Japanese colour phoenix full-leg tattoo with teal scales, red and yellow tail feathers, and dark cloud backgrounds at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-2575-bloodline-phuket.webp"),
        alt: "Colour realism leg tattoo of Death Row Records with red block lettering and portraits of Snoop Dogg and Tupac Shakur at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-2837-bloodline-phuket.webp"),
        alt: "Japanese-inspired colour leg tattoo of an armored samurai with a katana and a Hannya mask amid red cloud accents at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-2839-bloodline-phuket.webp"),
        alt: "Japanese colour leg tattoo with a pagoda, red cherry blossoms, a tiger eye medallion, a realistic tiger portrait, and kanji at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-3445-bloodline-phuket.webp"),
        alt: "Surrealist colour thigh tattoo of a large orange owl eye, a stylized skull, and a Gothic tower engulfed in flames at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-3627-bloodline-phuket.webp"),
        alt: "Colour sleeve with a Santa Muerte portrait, a pink rose, and a red demonic face on yellow and blue ornamental backgrounds at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-3638-bloodline-phuket.webp"),
        alt: "Colour forearm tattoo of a laurel-crowned woman profile with FEAR IS A REACTION and COURAGE IS A DECISION script beside a sunburst at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-3651-bloodline-phuket.webp"),
        alt: "Dragon Ball anime colour full sleeve with Majin Vegeta, Majin Buu, and Super Saiyan characters in bold saturated tones at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-3658-bloodline-phuket.webp"),
        alt: "Colour forearm tattoo of Super Saiyan Trunks wielding his sword beside a four-star Dragon Ball with blue energy effects at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-3687-bloodline-phuket.webp"),
        alt: "Dark fantasy colour sleeve with a cracked stone face, a snarling demon in red flames, and a geometric mandala on the shoulder at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-3749-bloodline-phuket.webp"),
        alt: "Colour sleeve and hand tattoo with realistic grey portraits, glowing yellow eyes, red ornamental patterns, and a shoulder mandala at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-4730-bloodline-phuket.webp"),
        alt: "Underwater colour sleeve with a shark, sea turtle, clownfish in anemone, and a scuba diver in deep blue water at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-4743-2-bloodline-phuket.webp"),
        alt: "Underwater colour sleeve with a pink jellyfish, a clownfish, and a detailed sunken shipwreck in saturated blue ocean tones at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-6324-bloodline-phuket.webp"),
        alt: "Colour realism shoulder tattoo of a green tree python coiled through lush tropical palm leaves and jungle foliage at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-9048-bloodline-phuket.webp"),
        alt: "Dark fantasy colour sleeve with a hooded wraith, a glowing eclipse portal, and a layered Oni demon mask in red and orange at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-9061-bloodline-phuket.webp"),
        alt: "Australian colour sleeve with rainbow lorikeets, red bottlebrush flowers, and golden wattle on dark green foliage at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-9148-bloodline-phuket.webp"),
        alt: "Colour forearm tattoo of a cracked porcelain woman face with flame motifs and a glowing fiery eye symbol below at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-9718-bloodline-phuket.webp"),
        alt: "Japanese colour full-leg tattoo with a coiled blue and pink snake, a red Hannya mask, and floral accents in black wind-bar shading at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-9726-bloodline-phuket.webp"),
        alt: "Japanese colour leg tattoo with a large orange chrysanthemum, a descending red koi fish, and dark swirling cloud backgrounds at Bloodline Tattoo Phuket.",
      },
      {
        src: colourProofSrc("phuket", "colour-tattoo-img-9982-bloodline-phuket.webp"),
        alt: "Colour full sleeve of a screaming warrior with red lightning bolts, a Spartan helmet portrait, and a red Greek key band on the hand at Bloodline Tattoo Phuket.",
      },
    ],
  };

function getColourStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof colourStudioMediaByRegion)["bangkok"],
): string {
  if (!isColourStudioRegion(studio)) {
    return colourStudioMediaByRegion.bangkok[slot];
  }

  return colourStudioMediaByRegion[studio][slot];
}

function getColourProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isColourStudioRegion(studio)) {
    return [];
  }

  return colourProofPoolsByStudio[studio];
}

export {
  colourProofPoolsByStudio,
  colourStudioMediaByRegion,
  getColourProofPoolForStudio,
  getColourStudioMediaAlt,
};
