import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import { BookingAppointmentProvider } from "@/components/cta";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { buildBookingModalPayload } from "@/lib/booking-modal";
import { getRequestRegionContext } from "@/lib/request-region";
import "./globals.css";

const headingFont = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { regionConfig } = await getRequestRegionContext();

  return {
    title: "Bloodline Tattoo Platform",
    description:
      "Bloodline Tattoo runs premium appointment-only studios in Bangkok, Bali and Phuket. Consultation first, sterile practice and serious custom work.",
    icons: {
      icon: regionConfig.branding.faviconPath,
      shortcut: regionConfig.branding.faviconPath,
      apple: regionConfig.branding.faviconPath,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { region, regionConfig } = await getRequestRegionContext();
  const bookingModalPayload = buildBookingModalPayload(regionConfig);

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <BookingAppointmentProvider payload={bookingModalPayload}>
          <SiteHeader region={region} />
          <main className="min-w-0 flex-1">{children}</main>
          <SiteFooter region={region} />
        </BookingAppointmentProvider>
      </body>
    </html>
  );
}
