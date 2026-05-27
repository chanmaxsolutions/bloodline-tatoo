import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { TattooStyleProofGallery } from "@/components/sections/tattoo-style-detail/tattoo-style-proof-gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

const TATTOO_STYLE_PROOF_SECTION_ID = "tattoo-style-proof";

const proofTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const proofDescriptionClassName = "mx-auto w-full max-w-2xl";

interface TattooStyleDetailProofSectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailProofSection({ content }: TattooStyleDetailProofSectionProps) {
  const galleryLabel = `${content.proofHeading} image gallery`;

  return (
    <section
      id={TATTOO_STYLE_PROOF_SECTION_ID}
      aria-labelledby="tattoo-style-proof-heading"
      className={cn(
        "scroll-mt-24 bg-surface text-foreground md:scroll-mt-28",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="flex flex-col gap-8 md:gap-10">
        <SectionReveal className="flex flex-col gap-8 md:gap-10">
          <SectionHeading
            align="center"
            eyebrow={content.proofEyebrow}
            heading={content.proofHeading}
            description={content.proofDescription}
            headingId="tattoo-style-proof-heading"
            titleClassName={sectionRevealItemClass("none", proofTitleClassName)}
            descriptionClassName={sectionRevealItemClass("sm", proofDescriptionClassName)}
            className="w-full"
          />
          <TattooStyleProofGallery images={content.proofImages} galleryLabel={galleryLabel} />
          <div className={sectionRevealItemClass("md", "flex w-full justify-center")}>
            <Link
              href={content.proofPortfolioHref}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-fit max-w-full")}
            >
              View portfolio
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailProofSection, TATTOO_STYLE_PROOF_SECTION_ID };
