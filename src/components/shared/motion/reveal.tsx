"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { revealSoftVariants, revealVariants } from "@/components/shared/motion/variants";
import { motionViewport } from "@/components/shared/motion/motion-tokens";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  mode?: "default" | "soft";
  once?: boolean;
  amount?: number;
}

function Reveal({
  children,
  className,
  delay = 0,
  mode = "default",
  once = motionViewport.once,
  amount = motionViewport.amount,
}: RevealProps) {
  const variants: Variants = mode === "soft" ? revealSoftVariants : revealVariants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export { Reveal };
