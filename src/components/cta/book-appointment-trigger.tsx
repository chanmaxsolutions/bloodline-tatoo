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
  /** GA4: parent section or surface name for `appointment_modal_open`. */
  trackingComponentName?: string;
}

function BookAppointmentTrigger({
  className,
  variant = "primary",
  size = "lg",
  children,
  tattooStyleSlug,
  trackingComponentName,
}: BookAppointmentTriggerProps) {
  const { open } = useBookingAppointmentModal();

  function handleOpen(): void {
    const ctaText = typeof children === "string" ? children : undefined;

    open({
      ...(tattooStyleSlug ? { tattooStyleSlug } : {}),
      componentName: trackingComponentName ?? "BookAppointmentTrigger",
      ctaText,
    });
  }

  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={handleOpen}
    >
      {children}
    </button>
  );
}

export { BookAppointmentTrigger };
