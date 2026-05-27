import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { galleryPageBandPaddingClassName } from "@/lib/gallery-page-layout";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";

interface GalleryPageReviewsStripSectionProps {
  regionLabel: string;
}

function GalleryPageReviewsStripSection({ regionLabel }: GalleryPageReviewsStripSectionProps) {
  const regionPhrase = regionLabel === "global" ? "across our studios" : `in ${regionLabel}`;

  return (
    <section
      aria-labelledby="portfolio-reviews-strip-heading"
      className={cn("bg-background text-foreground", galleryPageBandPaddingClassName)}
    >
      <Container size="wide">
        <SectionReveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
          <h2
            id="portfolio-reviews-strip-heading"
            className={sectionRevealItemClass(
              "none",
              "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl",
            )}
          >
            Verified on Google
          </h2>
          <p
            className={sectionRevealItemClass(
              "sm",
              "font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug",
            )}
          >
            {`Portfolio proves craft on skin. Google reviews prove how clients experience Bloodline ${regionPhrase}.`}
          </p>
          <Link
            href="/reviews"
            className={sectionRevealItemClass(
              "md",
              cn(buttonVariants({ variant: "outline", size: "lg" }), "w-fit max-w-full"),
            )}
          >
            Read Google reviews
          </Link>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { GalleryPageReviewsStripSection };
