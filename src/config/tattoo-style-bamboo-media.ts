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
          "bamboo-sak-yant-photo-2-6-2026-3-39-48-pm-1-bloodline-bangkok.jpg",
        ),
        alt: "Black and grey realism portrait tattoo of a young child with curly hair and freckles on the arm at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "bamboo-sak-yant-photo-2-6-2026-3-39-48-pm-2-bloodline-bangkok.jpg",
        ),
        alt: "Traditional Sak Yant back piece with Gao Yord nine spires, Suea Koo twin tigers, and Hah Taew script columns at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "bamboo-sak-yant-photo-2-6-2026-3-39-48-pm-3-1-bloodline-bangkok.jpg",
        ),
        alt: "Black and grey upper-back tattoo with a compass rose and three realistic sharks with drop-shadow depth at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "bamboo-sak-yant-photo-2-6-2026-3-39-48-pm-3-bloodline-bangkok.jpg",
        ),
        alt: "Black and grey realism portrait tattoo of a woman with ornamental face patterns, floral hairpin, chrysanthemum, and Maia script at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "bamboo-sak-yant-photo-2-6-2026-3-39-48-pm-4-bloodline-bangkok.jpg",
        ),
        alt: "Ornamental upper-back tattoo with a realistic lion face centered in a patterned lotus mandala and hanging bead pendants at Bloodline Tattoo Bangkok.",
      },
      {
        src: bambooProofSrc(
          "bangkok",
          "bamboo-sak-yant-photo-2-6-2026-3-39-48-pm-bloodline-bangkok.jpg",
        ),
        alt: "Sak Yant chest collar tattoo with Khom script arcs, central yantra spires, and symmetrical sacred geometry across the upper chest at Bloodline Tattoo Bangkok.",
      },
    ],
    phuket: [
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-final-bloodline-phuket.jpg"),
        alt: "Traditional black ink Hah Taew (Five Lines) and Chat Petch (Diamond Armour) Sak Yant tattoos symmetrically placed on a man's upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-0088-bloodline-phuket.jpg"),
        alt: "Paed Tidt (Eight-Directional Yant) Sak Yant with concentric Khom script and eight radiating unalome spires on the upper back, with a solid infinity symbol on the nape at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-0120-bloodline-phuket.jpg"),
        alt: "Traditional Suea (Tiger) Sak Yant of a leaping tiger surrounded by sacred Khom script and unalome symbols on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-0122-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Lines) Sak Yant with five vertical Khom script columns and unalome flourishes framing a central blooming lotus on the upper arm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-0591-bloodline-phuket.jpg"),
        alt: "Gao Yord (Nine Spires) Sak Yant with a geometric pyramid grid of Khom script and nine peaked unalomes centered on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-0602-bloodline-phuket.jpg"),
        alt: "Upper-back Sak Yant composition with Gao Yord nine spires, Suea Koo twin tigers, and a lower geometric yantra grid with Khom script at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-0964-bloodline-phuket.jpg"),
        alt: "Sak Yant with two parallel vertical columns of Khom script topped with unalome symbols on the left shoulder blade at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1060-bloodline-phuket.jpg"),
        alt: "Gao Yord (Nine Spires) Sak Yant with nine peaked unalomes rising from a Khom script base on the back of the neck at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1061-bloodline-phuket.jpg"),
        alt: "Sam Taew (Three Rows) Sak Yant with three vertical columns of sacred Khom script and unalome caps on the inner forearm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1081-bloodline-phuket.jpg"),
        alt: "Fine-line bamboo tattoo of a stylized woman reaching toward a radiant sun on the side ribs at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1086-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Lines) Sak Yant with five Khom script columns, unalomes, and a central lotus flower bearing an Om symbol on the left shoulder blade at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1158-bloodline-phuket.jpg"),
        alt: "Suea Koo (Twin Tigers) Sak Yant with black-ink tigers and red Khom script in a circular yantra on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1196-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Lines) Sak Yant with five vertical Khom script rows, unalomes, and a central diamond eye motif on the upper thigh at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1706-bloodline-phuket.jpg"),
        alt: "Full upper-back Sak Yant layout with Gao Yord nine spires, Suea Koo twin tigers, Hah Taew five lines, and geometric script yantras at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1707-bloodline-phuket.jpg"),
        alt: "Close-up Hah Taew (Five Lines) Sak Yant on the right shoulder blade with Gao Yord and Suea Koo designs on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1708-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Lines) Sak Yant with five Khom script columns and unalome flourishes on the left shoulder blade at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-1710-bloodline-phuket.jpg"),
        alt: "Three-line Sak Yant with diagonal Khom script columns and unalome symbols on the side ribcage at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-2292-bloodline-phuket.jpg"),
        alt: "Large back Sak Yant with Suea Koo twin tigers, Yant Singha mythical lions, Hah Taew five lines, and MCKENZIE script lettering at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-2544-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Sacred Lines) Sak Yant with five vertical Khom script rows and unalome symbols on the ribcage at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-3041-bloodline-phuket.jpg"),
        alt: "Twin Naga snakes Sak Yant with intertwined serpents, Khom script bodies, and unalome spires on the upper arm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-3144-bloodline-phuket.jpg"),
        alt: "Suea (Tiger) Sak Yant of a leaping tiger with Khom script arcs and unalomes on the inner forearm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-3401-bloodline-phuket.jpg"),
        alt: "Suea Koo (Twin Tigers) Sak Yant with symmetrical tigers, Khom script crescent, and unalomes centered on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-3605-bloodline-phuket.jpg"),
        alt: "Suea (Tiger) Sak Yant of a snarling tiger with Khom script border and multiple unalomes on the outer thigh at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-3641-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Lines) Sak Yant with five Khom script columns framing a vibrant red lotus flower on the inner forearm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-4203-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Rows) Sak Yant with five Khom script columns and a central Om symbol on the inner forearm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-5243-bloodline-phuket.jpg"),
        alt: "Gao Yord (Nine Spires) Sak Yant with a geometric yantra grid and a long vertical Khom script column down the spine at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-6464-bloodline-phuket.jpg"),
        alt: "Suea (Tiger) Sak Yant of a snarling tiger surrounded by curved Khom script on the upper arm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-6468-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Sacred Lines) Sak Yant with five vertical Khom script columns on the inner upper arm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-6735-bloodline-phuket.jpg"),
        alt: "Garuda Sak Yant with outstretched wings, ornate headdress, and detailed feather shading centered on the chest at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-6806-bloodline-phuket.jpg"),
        alt: "Hah Taew (Five Lines) Sak Yant with five vertical Khom script rows and unalome caps on the left shoulder blade at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-6956-bloodline-phuket.jpg"),
        alt: "Suea (Tiger) Sak Yant of a snarling tiger with Khom script on the ribs beside an ornate cross tattoo at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-7038-bloodline-phuket.jpg"),
        alt: "Yant Suea tiger-head Sak Yant with concentric Khom script rings and unalomes on the back of the head at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-7055-bloodline-phuket.jpg"),
        alt: "Yant Tao Ruean (Turtle) Sak Yant with a script-filled shell grid, circular Khom borders, and unalome spires on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-7056-bloodline-phuket.jpg"),
        alt: "Sak Yant talismanic grid yantra with sixteen Khom script cells, tiered script design, unalomes, and Roman numeral IV on the inner arm at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-7306-bloodline-phuket.jpg"),
        alt: "Suea Koo (Twin Tigers) Sak Yant in black and grey with symmetrical tigers, central unalomes, and Khom script crescent on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-7914-bloodline-phuket.jpg"),
        alt: "Full-back Sak Yant with Suea Koo twin tigers, Paed Tidt eight-directional yantra, and FORTIS FORTUNA ADIUVAT script across the shoulders at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-9882-bloodline-phuket.jpg"),
        alt: "Lotus and Om Sak Yant with shaded lotus petals, five Khom script columns with unalomes, and a spine script line on the upper back at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-9941-bloodline-phuket.jpg"),
        alt: "Fresh Gao Yord (Nine Spires) Sak Yant with nine peaked unalomes and Khom script on the nape of the neck at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-9946-bloodline-phuket.jpg"),
        alt: "Hah Taew-style Sak Yant with a central lotus flower and five vertical Khom script columns along the lower back spine at Bloodline Tattoo Phuket.",
      },
      {
        src: bambooProofSrc("phuket", "bamboo-sak-yant-img-9947-bloodline-phuket.jpg"),
        alt: "Hah Taew-style Sak Yant with a decorative lotus motif and five rows of Khom script above and below on the lower leg at Bloodline Tattoo Phuket.",
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
