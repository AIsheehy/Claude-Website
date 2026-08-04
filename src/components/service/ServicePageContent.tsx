import { ReactNode } from "react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ServiceStats } from "@/components/home/ServiceStats";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { WhyUs } from "@/components/home/WhyUs";
import { Faq } from "@/components/home/Faq";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { InlineCta } from "@/components/home/InlineCta";
import { GuidanceSection } from "@/components/service/GuidanceSection";
import { Service } from "@/lib/content";

export type GuidanceContent = {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  ctaLabel: string;
};

// Shared body for every dedicated service landing page (Planning
// Applications, Permitted Development, Loft Conversion Drawings, Extension
// Drawings) — identical to the homepage below the hero. Hero copy, the
// What We Do section and every CTA can be overridden per page; anything
// left unset falls back to the original shared copy.
export function ServicePageContent({
  eyebrow,
  headline,
  lede,
  heroCtaLabel,
  servicesHeadline,
  servicesEmphasis,
  servicesLedeParagraphs,
  services,
  afterServicesCtaText = "Not sure which service you need? Get a free assessment and we'll tell you.",
  afterServicesCtaLabel,
  guidance,
  midPageCtaText = "Ready for the same result? Let's talk about your project.",
  midPageCtaLabel,
  finalCtaHeading,
  finalCtaText = "See how straightforward your project can be by reaching out today.",
  finalCtaLabel,
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
  heroCtaLabel?: string;
  servicesHeadline?: ReactNode;
  servicesEmphasis?: string;
  servicesLedeParagraphs?: ReactNode[];
  services?: Service[];
  afterServicesCtaText?: string;
  afterServicesCtaLabel?: string;
  guidance?: GuidanceContent;
  midPageCtaText?: string;
  midPageCtaLabel?: string;
  finalCtaHeading?: ReactNode;
  finalCtaText?: string;
  finalCtaLabel?: string;
}) {
  return (
    <>
      <Hero eyebrow={eyebrow} headline={headline} lede={lede} primaryCtaLabel={heroCtaLabel} />
      <Services
        headline={servicesHeadline}
        emphasis={servicesEmphasis}
        ledeParagraphs={servicesLedeParagraphs}
        services={services}
      />
      <ServiceStats />
      <Process tightBottom />
      <InlineCta text={afterServicesCtaText} ctaLabel={afterServicesCtaLabel} tone="dark" />
      {guidance && (
        <GuidanceSection
          eyebrow={guidance.eyebrow}
          heading={guidance.heading}
          paragraphs={guidance.paragraphs}
          ctaLabel={guidance.ctaLabel}
        />
      )}
      <Reviews tightBottom />
      <InlineCta text={midPageCtaText} ctaLabel={midPageCtaLabel} />
      <WhyUs dark tightBottom />
      <InlineCta heading={finalCtaHeading} text={finalCtaText} ctaLabel={finalCtaLabel} tone="dark" />
      <Contact tone="beige" />
      <Faq />
      <About />
    </>
  );
}
