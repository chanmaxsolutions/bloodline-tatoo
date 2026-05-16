"use client";

import { type ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { useBookingAppointmentModal } from "@/components/cta/booking-appointment-provider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TattooStyleSlug } from "@/types/tattoo-style";

interface BookAppointmentTriggerProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
  /** On the global site, limits studio picker to regions that offer this style. */
  tattooStyleSlug?: TattooStyleSlug;
}

function BookAppointmentTrigger({
  className,
  variant = "primary",
  size = "lg",
  children,
  tattooStyleSlug,
}: BookAppointmentTriggerProps) {
  const { open } = useBookingAppointmentModal();

  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={() => open(tattooStyleSlug ? { tattooStyleSlug } : undefined)}
    >
      {children}
    </button>
  );
}

export { BookAppointmentTrigger };
