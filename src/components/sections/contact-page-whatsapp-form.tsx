"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildWhatsAppUrl } from "@/lib/cta";
import {
  buildContactWhatsAppInquiryMessage,
  parseContactWhatsAppInquiry,
} from "@/lib/contact-whatsapp-inquiry";
import { cn } from "@/lib/utils";
import type {
  ContactPageWhatsAppFormCopy,
  ContactPageWhatsAppStudioOption,
} from "@/types/contact-page";

const formTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const formDescriptionClassName =
  "mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty sm:max-w-2xl md:text-xl md:leading-snug";

const fieldLabelClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground";

const fieldErrorClassName = "font-sans text-sm text-destructive";

const placeholderClassName = "placeholder:text-muted-foreground/40";

const inputClassName = cn("h-12 text-base md:h-[3.25rem] md:text-base", placeholderClassName);

const selectClassName = cn(
  inputClassName,
  "w-full min-w-0 rounded-md border border-border bg-surface px-3 text-foreground motion-fast outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
);

const textareaClassName = cn(
  "min-h-[9.5rem] text-base leading-relaxed md:min-h-[10.5rem]",
  placeholderClassName,
);

const formShellClassName =
  "mx-auto w-full max-w-2xl rounded-xl border border-border/50 bg-surface-elevated/90 p-6 md:p-8";

interface ContactPageWhatsAppFormProps {
  copy: ContactPageWhatsAppFormCopy;
  isGlobal: boolean;
  regionName: string;
  whatsappPhoneDigits: string | null;
  whatsappStudioOptions: readonly ContactPageWhatsAppStudioOption[];
  className?: string;
}

type FieldName = "name" | "placement" | "size" | "travelDates" | "details" | "studio";

interface ContactFormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
  className?: string;
}

function ContactFormField({
  id,
  label,
  required = false,
  error,
  errorId,
  children,
  className,
}: ContactFormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <label htmlFor={id} className={fieldLabelClassName}>
        <span className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
          <span>{label}</span>
          {required ? (
            <>
              <span aria-hidden className="text-accent">
                *
              </span>
              <span className="sr-only"> (required)</span>
            </>
          ) : null}
        </span>
      </label>
      {children}
      {error ? (
        <p id={errorId} className={fieldErrorClassName} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactPageWhatsAppForm({
  copy,
  isGlobal,
  regionName,
  whatsappPhoneDigits,
  whatsappStudioOptions,
  className,
}: ContactPageWhatsAppFormProps) {
  const formId = useId();
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  function resolvePhoneDigits(studioRegion?: string): string | null {
    if (isGlobal) {
      const match = whatsappStudioOptions.find((studio) => studio.region === studioRegion);
      return match?.phoneDigits ?? null;
    }
    return whatsappPhoneDigits;
  }

  function resolveMessageRegionName(studioRegion?: string): string {
    if (isGlobal) {
      const match = whatsappStudioOptions.find((studio) => studio.region === studioRegion);
      return match?.studioName ?? regionName;
    }
    return regionName;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);
    const parsed = parseContactWhatsAppInquiry(isGlobal, Object.fromEntries(formData.entries()));

    if (!parsed.success) {
      setFieldErrors(parsed.fieldErrors);
      return;
    }

    setFieldErrors({});

    const studioRegion = parsed.data.studio;
    const phoneDigits = resolvePhoneDigits(studioRegion);

    if (!phoneDigits) {
      setSubmitError(
        isGlobal
          ? "Select a studio with WhatsApp booking enabled."
          : "WhatsApp is not available for this studio right now.",
      );
      return;
    }

    const message = buildContactWhatsAppInquiryMessage({
      regionName: resolveMessageRegionName(studioRegion),
      name: parsed.data.name,
      placement: parsed.data.placement,
      size: parsed.data.size,
      travelDates: parsed.data.travelDates,
      details: parsed.data.details,
    });

    const url = buildWhatsAppUrl({ phoneNumber: phoneDigits, text: message });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function fieldErrorId(name: FieldName): string {
    return `${formId}-${name}-error`;
  }

  return (
    <div className={cn("flex w-full flex-col gap-8 md:gap-10", className)}>
      <div
        className="flex items-center gap-4"
        role="separator"
        aria-label="Alternative booking path"
      >
        <div className="h-px flex-1 bg-border/50" aria-hidden />
        <span className="font-heading text-base font-medium uppercase tracking-normal text-muted-foreground md:text-lg">
          Or
        </span>
        <div className="h-px flex-1 bg-border/50" aria-hidden />
      </div>

      <SectionHeading
        align="center"
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        description={copy.description}
        headingId={`${formId}-heading`}
        className="mx-auto w-full max-w-4xl"
        titleClassName={formTitleClassName}
        descriptionClassName={formDescriptionClassName}
      />

      <form
        className={formShellClassName}
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby={`${formId}-heading`}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
          {isGlobal ? (
            <ContactFormField
              id={`${formId}-studio`}
              label={copy.studio.label}
              required
              error={fieldErrors.studio}
              errorId={fieldErrorId("studio")}
              className="sm:col-span-2"
            >
              <select
                id={`${formId}-studio`}
                name="studio"
                required
                defaultValue=""
                className={selectClassName}
                aria-invalid={Boolean(fieldErrors.studio)}
                aria-describedby={fieldErrors.studio ? fieldErrorId("studio") : undefined}
              >
                <option value="" disabled>
                  {copy.studio.placeholder}
                </option>
                {whatsappStudioOptions.map((studio) => (
                  <option key={studio.region} value={studio.region}>
                    {studio.studioName}
                  </option>
                ))}
              </select>
            </ContactFormField>
          ) : null}

          <ContactFormField
            id={`${formId}-name`}
            label={copy.name.label}
            required
            error={fieldErrors.name}
            errorId={fieldErrorId("name")}
          >
            <Input
              id={`${formId}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder={copy.name.placeholder}
              className={inputClassName}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? fieldErrorId("name") : undefined}
            />
          </ContactFormField>

          <ContactFormField
            id={`${formId}-placement`}
            label={copy.placement.label}
            required
            error={fieldErrors.placement}
            errorId={fieldErrorId("placement")}
          >
            <Input
              id={`${formId}-placement`}
              name="placement"
              type="text"
              required
              placeholder={copy.placement.placeholder}
              className={inputClassName}
              aria-invalid={Boolean(fieldErrors.placement)}
              aria-describedby={fieldErrors.placement ? fieldErrorId("placement") : undefined}
            />
          </ContactFormField>

          <ContactFormField id={`${formId}-size`} label={copy.size.label}>
            <Input
              id={`${formId}-size`}
              name="size"
              type="text"
              placeholder={copy.size.placeholder}
              className={inputClassName}
            />
          </ContactFormField>

          <ContactFormField id={`${formId}-travelDates`} label={copy.travelDates.label}>
            <Input
              id={`${formId}-travelDates`}
              name="travelDates"
              type="text"
              placeholder={copy.travelDates.placeholder}
              className={inputClassName}
            />
          </ContactFormField>

          <ContactFormField
            id={`${formId}-details`}
            label={copy.details.label}
            required
            error={fieldErrors.details}
            errorId={fieldErrorId("details")}
            className="sm:col-span-2"
          >
            <Textarea
              id={`${formId}-details`}
              name="details"
              required
              placeholder={copy.details.placeholder}
              className={textareaClassName}
              aria-invalid={Boolean(fieldErrors.details)}
              aria-describedby={fieldErrors.details ? fieldErrorId("details") : undefined}
            />
          </ContactFormField>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 border-t border-border/45 pt-8 text-center md:mt-9 md:pt-9">
          {submitError ? (
            <p className={fieldErrorClassName} role="alert">
              {submitError}
            </p>
          ) : null}

          <p className="font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
            {copy.submitNote}
          </p>
          <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
            {copy.submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}

export { ContactPageWhatsAppForm };
