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
          {content.overview.map((paragraph, index) => (
            <p
              key={index}
              className={sectionRevealItemClass(
                index === 0 ? "none" : "sm",
                styleOverviewParagraphClassName,
              )}
            >
              {paragraph}
            </p>
          ))}
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailOverviewSection };
