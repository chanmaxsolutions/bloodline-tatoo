import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import { BookingAppointmentProvider, TrustpilotFloatingWidget } from "@/components/cta";
import { trustpilotForRegion } from "@/config/trustpilot";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { GoogleAnalytics } from "@/components/seo";
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
    metadataBase: new URL(`https://${regionConfig.domain}`),
    title: regionConfig.seo.defaultTitle,
    description: regionConfig.seo.defaultDescription,
    icons: {
      icon: [
        {
          url: regionConfig.branding.faviconPath.replace(/\.png$/i, "-48.png"),
          sizes: "48x48",
          type: "image/png",
        },
        {
          url: regionConfig.branding.faviconPath,
          sizes: "192x192",
          type: "image/png",
        },
      ],
      shortcut: regionConfig.branding.faviconPath,
      apple: {
        url: regionConfig.branding.faviconPath,
        sizes: "192x192",
        type: "image/png",
      },
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
  const trustpilot = trustpilotForRegion(region);

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <BookingAppointmentProvider payload={bookingModalPayload}>
          <SiteHeader region={region} />
          <main className="min-w-0 flex-1">{children}</main>
          <SiteFooter region={region} />
          {trustpilot.enabled ? (
            <TrustpilotFloatingWidget regionSlug={region} evaluateUrl={trustpilot.evaluateUrl} />
          ) : null}
        </BookingAppointmentProvider>
      </body>
    </html>
  );
}
