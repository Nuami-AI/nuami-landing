"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { gaMeasurementIds } from "@/content/site";

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

export default function GoogleAnalytics() {
  const [measurementId, setMeasurementId] = useState<string | null>(null);

  useEffect(() => {
    const id = gaMeasurementIds[window.location.hostname] ?? null;
    setMeasurementId(id && GA_ID_PATTERN.test(id) ? id : null);
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `}
      </Script>
    </>
  );
}
