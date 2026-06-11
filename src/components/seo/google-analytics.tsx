"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { resolveGaMeasurementIdFromHostname } from "@/config/google-analytics";
import { sendGaPageView } from "@/lib/gtag";

function subscribeToHostname(): () => void {
  return () => {};
}

function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const measurementId = useSyncExternalStore(
    subscribeToHostname,
    () => resolveGaMeasurementIdFromHostname(window.location.hostname),
    () => null,
  );
  const [isGtagReady, setIsGtagReady] = useState(false);

  useEffect(() => {
    if (!measurementId || !isGtagReady) {
      return;
    }

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    sendGaPageView(measurementId, pagePath);
  }, [isGtagReady, measurementId, pathname, searchParams]);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="bloodline-ga4"
        strategy="afterInteractive"
        onReady={() => {
          setIsGtagReady(true);
        }}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}

export { GoogleAnalytics };
