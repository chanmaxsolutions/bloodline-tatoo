import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

const TATTOO_STYLE_PROOF_SECTION_ID = "tattoo-style-proof";

/** Matches approach band `SectionHeading` title scale. */
const proofTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const proofDescriptionClassName = "w-full max-w-none";

interface TattooStyleDetailProofSectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailProofSection({ content }: TattooStyleDetailProofSectionProps) {
  return (
    <section
      id={TATTOO_STYLE_PROOF_SECTION_ID}
      aria-labelledby="tattoo-style-proof-heading"
      className={cn(
        "scroll-mt-24 border-t border-border/50 bg-surface text-foreground md:scroll-mt-28",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="flex flex-col gap-8 md:gap-10">
        <SectionReveal className="flex flex-col gap-8 md:gap-10">
          <SectionHeading
            align="center"
            eyebrow="Proof"
            heading="CRAFT ON SKIN"
            description="Selected frames from the studio floor. Full portfolio lives in the gallery."
            headingId="tattoo-style-proof-heading"
            titleClassName={proofTitleClassName}
            descriptionClassName={proofDescriptionClassName}
            className={sectionRevealItemClass("none", "w-full")}
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {content.proofImages.map((image, index) => (
              <li
                key={`${image.src}-${index}`}
                className={sectionRevealStaggerClass(
                  index,
                  "relative aspect-4/3 overflow-hidden rounded-xl border border-white/5",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  quality={72}
                  className="object-cover object-center"
                />
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailProofSection, TATTOO_STYLE_PROOF_SECTION_ID };
