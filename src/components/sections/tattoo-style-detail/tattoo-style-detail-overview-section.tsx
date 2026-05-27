import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

const styleOverviewParagraphClassName =
  "text-center font-sans text-xl leading-snug text-foreground/85 text-pretty md:text-2xl md:leading-snug";

interface TattooStyleDetailOverviewSectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailOverviewSection({ content }: TattooStyleDetailOverviewSectionProps) {
  const [firstParagraph, secondParagraph] = content.overview;

  return (
    <section
      aria-labelledby="tattoo-style-overview-heading"
      className={cn("bg-surface text-foreground", "py-12 md:py-14 lg:py-16")}
    >
      <Container size="narrow">
        <SectionReveal className="mx-auto flex w-full max-w-4xl flex-col gap-5 text-center md:gap-6">
          <h2 id="tattoo-style-overview-heading" className="sr-only">
            About {content.title.toLowerCase()}
          </h2>
          <p className={sectionRevealItemClass("none", styleOverviewParagraphClassName)}>
            {firstParagraph}
          </p>
          <p className={sectionRevealItemClass("sm", styleOverviewParagraphClassName)}>
            {secondParagraph}
          </p>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailOverviewSection };
