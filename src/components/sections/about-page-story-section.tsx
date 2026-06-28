import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { splitDescriptionEmphasis } from "@/lib/split-description-emphasis";
import { cn } from "@/lib/utils";

const storyParagraphClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const emphasisClassName = "font-semibold text-foreground";

interface AboutPageStorySectionProps {
  storyParagraphs: readonly string[];
}

function AboutPageStorySection({ storyParagraphs }: AboutPageStorySectionProps) {
  if (storyParagraphs.length === 0) return null;

  return (
    <section
      aria-label="Studio philosophy"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative">
        <SectionReveal>
          <div
            className={sectionRevealItemClass(
              "lg",
              "mx-auto flex w-full max-w-2xl flex-col gap-4 text-center md:gap-5",
            )}
          >
            {storyParagraphs.map((paragraph, index) => (
              <p key={index} className={storyParagraphClassName}>
                {splitDescriptionEmphasis(paragraph).map((segment, segIndex) =>
                  segment.emphasis ? (
                    <strong key={segIndex} className={emphasisClassName}>
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={segIndex}>{segment.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AboutPageStorySection };
