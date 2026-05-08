"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { cinematicEase } from "@/components/shared/motion/easing";
import { motionDurations } from "@/components/shared/motion/motion-tokens";

interface AnimatedCounterProps {
  value: string;
  delay?: number;
  className?: string;
}

interface ParsedCounterValue {
  numericValue: number;
  decimals: number;
  prefix: string;
  suffix: string;
  compactThousands: boolean;
}

function parseCounterValue(rawValue: string): ParsedCounterValue {
  const value = rawValue.trim();
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return {
      numericValue: 0,
      decimals: 0,
      prefix: "",
      suffix: value,
      compactThousands: false,
    };
  }

  const [, prefix, numericPart, suffix] = match;
  const normalizedSuffix = (suffix ?? "").trim();
  const compactThousands = normalizedSuffix.toUpperCase().startsWith("K");
  const decimals = numericPart.includes(".") ? (numericPart.split(".")[1]?.length ?? 0) : 0;
  const rawNumericValue = Number.parseFloat(numericPart);
  const numericValue = compactThousands ? rawNumericValue * 1000 : rawNumericValue;

  return {
    numericValue,
    decimals,
    prefix: prefix ?? "",
    suffix: normalizedSuffix,
    compactThousands,
  };
}

function formatCounterValue(value: number, parsedValue: ParsedCounterValue): string {
  if (parsedValue.compactThousands) {
    const compactValue = value / 1000;
    return `${parsedValue.prefix}${compactValue.toFixed(parsedValue.decimals)}${parsedValue.suffix}`;
  }

  return `${parsedValue.prefix}${value.toFixed(parsedValue.decimals)}${parsedValue.suffix}`;
}

function AnimatedCounter({ value, delay = 0, className }: AnimatedCounterProps) {
  const parsedValue = useMemo(() => parseCounterValue(value), [value]);
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const valueRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.8 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const valueElement = valueRef.current;

    if (!valueElement) {
      return;
    }

    if (!isInView) {
      return;
    }

    if (shouldReduceMotion || parsedValue.numericValue === 0) {
      valueElement.textContent = value;
      return;
    }

    valueElement.textContent = formatCounterValue(0, parsedValue);

    const controls = animate(0, parsedValue.numericValue, {
      duration: motionDurations.cinematicSlow,
      delay,
      ease: cinematicEase,
      onUpdate: (latestValue) => {
        valueElement.textContent = formatCounterValue(latestValue, parsedValue);
      },
    });

    return () => {
      controls.stop();
    };
  }, [
    delay,
    isInView,
    parsedValue,
    parsedValue.decimals,
    parsedValue.numericValue,
    parsedValue.prefix,
    parsedValue.suffix,
    shouldReduceMotion,
    value,
  ]);

  return (
    <span ref={wrapperRef} className={className}>
      <span ref={valueRef}>{value}</span>
    </span>
  );
}

export { AnimatedCounter };
