import type { Metadata } from "next";
import { headers } from "next/headers";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { getRegionConfig, resolveRegionFromHostname } from "@/lib/region";
import "./globals.css";

const headingFont = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

async function getRequestRegion() {
  const requestHeaders = await headers();
  const hostname =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  return resolveRegionFromHostname(hostname);
}

export async function generateMetadata(): Promise<Metadata> {
  const region = await getRequestRegion();
  const regionConfig = getRegionConfig(region);

  return {
    title: "Bloodline Tattoo Platform",
    description: "Phase 1 foundation scaffold for Bloodline Tattoo.",
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
  const region = await getRequestRegion();

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader region={region} />
        <main className="min-w-0 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
