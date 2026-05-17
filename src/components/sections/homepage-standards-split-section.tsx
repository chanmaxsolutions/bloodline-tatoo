import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { RegionHomepageStandardsSplitConfig } from "@/types/homepage-standards-split";

interface HomepageStandardsSplitSectionProps {
  content: RegionHomepageStandardsSplitConfig;
  /** Stable DOM id and `aria-labelledby` target; default matches first homepage split band. */
  sectionId?: string;
}

function HomepageStandardsSplitSection({
  content,
  sectionId = "homepage-standards-split",
}: HomepageStandardsSplitSectionProps) {
  const headingId = `${sectionId}-heading`;
  const mediaSide = content.mediaSide ?? "start";
  const bandSurface = content.bandSurface ?? "default";
  const isMediaEnd = mediaSide === "end";

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className={cn(
        "border-t border-border/50 text-foreground",
        bandSurface === "surface" ? "bg-surface" : "bg-background",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide">
        <SectionReveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div
            className={sectionRevealItemClass(
              "none",
              cn(
                "relative aspect-4/5 min-h-[min(52vh,420px)] w-full overflow-hidden rounded-xl border border-white/5 lg:min-h-[min(64vh,520px)]",
                isMediaEnd ? "order-2" : "order-1",
              ),
            )}
          >
            <Image
              src={content.media.src}
              alt={content.media.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              quality={75}
              className="object-cover object-center"
            />
          </div>
          <div
            className={cn(
              "flex min-w-0 flex-col gap-6 lg:gap-8",
              isMediaEnd ? "order-1" : "order-2",
            )}
          >
            <h2
              id={headingId}
              className={sectionRevealItemClass(
                "sm",
                "text-heading-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]",
              )}
            >
              {content.heading}
            </h2>
            <ul className="flex flex-col gap-4 md:gap-5">
              {content.bullets.map((line, index) => (
                <li
                  key={index}
                  className={sectionRevealStaggerClass(
                    index + 1,
                    "flex items-start gap-3 md:gap-4",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 font-heading text-3xl leading-none text-accent md:text-2xl"
                  >
                    ✓
                  </span>
                  <span className="font-sans text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
            <div className={sectionRevealItemClass("lg", "pt-1")}>
              <Link
                href={content.cta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full border-border-strong bg-transparent sm:inline-flex sm:w-auto",
                )}
              >
                {content.cta.label}
              </Link>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { HomepageStandardsSplitSection };
