interface BuildWhatsAppUrlInput {
  phoneNumber: string;
  text?: string;
}

function normalizeWhatsAppPhoneDigits(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  return digits.length > 0 ? digits : null;
}

export function buildWhatsAppUrl(input: BuildWhatsAppUrlInput): string {
  const digits = normalizeWhatsAppPhoneDigits(input.phoneNumber) ?? input.phoneNumber;
  const base = `https://wa.me/${digits}`;
  if (!input.text) return base;

  const encodedText = encodeURIComponent(input.text);
  return `${base}?text=${encodedText}`;
}
