"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/sections/section-shell";
import { cinematicEase } from "@/components/shared/motion/easing";
import { motionDurations } from "@/components/shared/motion/motion-tokens";

interface TrustProofItem {
  label: string;
  value: string;
}

interface TrustProofBarSectionProps {
  items: TrustProofItem[];
}

function TrustProofBarSection({ items }: TrustProofBarSectionProps) {
  return (
    <SectionShell
      spacing="tight"
      containerSize="wide"
      className="bg-[#1C1B1D] pt-0 pb-6 md:pb-8"
      reveal
      revealMode="soft"
      revealDelay={0.06}
    >
      <div className="py-3 md:py-4">
        <motion.ul
          className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.04,
              },
            },
          }}
        >
          {items.map((item) => (
            <motion.li
              key={item.label}
              className="grid gap-1 px-5 py-5 text-center"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: motionDurations.medium,
                    ease: cinematicEase,
                  },
                },
              }}
            >
              <p className="font-heading text-7xl leading-[0.95] font-bold tracking-tight text-foreground md:text-8xl md:leading-[0.9] lg:text-9xl">
                {item.value}
              </p>
              <p className="font-heading text-lg font-medium uppercase tracking-tight text-accent md:text-xl">
                {item.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionShell>
  );
}

export { TrustProofBarSection };
export type { TrustProofItem };
