"use client";

import Script from "next/script";
import { Button } from "@/components/ui/Button";

const CALENDLY_URL = "https://calendly.com/michael-formandfunctionlondon/30min";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

// Calendly's popup widget opens the real scheduler (date/time picker) in an
// in-page overlay instead of a plain link out to a new tab, which is more
// reliable across mobile browsers/webviews that block window.open.
export function CalendlyBookButton({ className }: { className?: string }) {
  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <Button
        variant="secondary"
        className={className}
        onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
      >
        Book a Call
      </Button>
    </>
  );
}
