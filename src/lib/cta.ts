interface BuildWhatsAppUrlInput {
  phoneNumber: string;
  text?: string;
}

export function buildWhatsAppUrl(input: BuildWhatsAppUrlInput): string {
  const base = `https://wa.me/${input.phoneNumber}`;
  if (!input.text) return base;

  const encodedText = encodeURIComponent(input.text);
  return `${base}?text=${encodedText}`;
}
