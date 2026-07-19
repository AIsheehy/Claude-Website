import Script from "next/script";

// Neither ID is a secret — both are visible in every page's source once
// live — so they're hardcoded here rather than left dependent on a Netlify
// env var. Still overridable via env var if either property ever changes
// without a code push.
const DEFAULT_GA_MEASUREMENT_ID = "G-0JPLBDKJLT";
const DEFAULT_GOOGLE_ADS_ID = "AW-17493643073";
const DEFAULT_HOTJAR_ID = "6749628";

// Renders nothing until the corresponding env var is set, so an unconfigured
// deploy never ships a broken/empty tracking snippet.
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || DEFAULT_GOOGLE_ADS_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID || DEFAULT_HOTJAR_ID;

  // GA4 and Google Ads both run on the same gtag.js loader — load it once
  // (using whichever ID is present) and issue a separate `config` call per
  // ID that's actually configured. trackFormSubmission() in
  // src/lib/analytics.ts fires the actual lead/conversion events later.
  const gtagLoaderId = gaId || googleAdsId;

  return (
    <>
      {gtagLoaderId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${gaId ? `gtag('config', '${gaId}');` : ""}
              ${googleAdsId && googleAdsId !== gaId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      )}

      {hotjarId && (
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
              h._hjSettings = { hjid: ${hotjarId}, hjsv: 6 };
              a = o.getElementsByTagName('head')[0];
              r = o.createElement('script'); r.async = 1;
              r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
              a.appendChild(r);
            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
          `}
        </Script>
      )}
    </>
  );
}
