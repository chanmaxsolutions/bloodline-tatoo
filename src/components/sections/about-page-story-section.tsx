import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { splitDescriptionEmphasis } from "@/lib/split-description-emphasis";
import { cn } from "@/lib/utils";
import type { AboutPageStoryBlock } from "@/types/about-page";

const storyHeadingClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl md:leading-none";

const storyParagraphClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const emphasisClassName = "font-semibold text-foreground";

interface AboutPageStorySectionProps {
  storyBlocks: readonly AboutPageStoryBlock[];
}

function AboutPageStorySection({ storyBlocks }: AboutPageStorySectionProps) {
  if (storyBlocks.length === 0) return null;

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
              "mx-auto flex w-full max-w-3xl flex-col gap-10 text-center md:gap-12 lg:gap-14",
            )}
          >
            {storyBlocks.map((block, blockIndex) => (
              <div
                key={block.heading ?? `story-block-${blockIndex}`}
                className="flex w-full flex-col gap-4 md:gap-5"
              >
                {block.heading ? <h2 className={storyHeadingClassName}>{block.heading}</h2> : null}
                {block.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className={storyParagraphClassName}>
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
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AboutPageStorySection };
