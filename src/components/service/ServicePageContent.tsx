import { ReactNode } from "react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ServiceStats } from "@/components/home/ServiceStats";
import { Process } from "@/components/home/Process";
import { Reviews } from "@/components/home/Reviews";
import { WhyUs } from "@/components/home/WhyUs";
import { MeetMichael } from "@/components/home/MeetMichael";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";

// Shared body for every dedicated service landing page (Planning
// Applications, Permitted Development, Loft Conversion Drawings, Extension
// Drawings) — identical to the homepage below the hero. Hero copy and the
// What We Do headline can be overridden per page; anything left unset falls
// back to the original shared copy.
export function ServicePageContent({
  eyebrow,
  headline,
  lede,
  heroCtaLabel,
  heroCtaNote,
  servicesHeadline,
  servicesEmphasis,
  servicesLedeParagraphs,
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
  heroCtaLabel?: string;
  heroCtaNote?: { line1: string; line2: string };
  servicesHeadline?: ReactNode;
  servicesEmphasis?: string;
  servicesLedeParagraphs?: ReactNode[];
}) {
  return (
    <>
      <Hero eyebrow={eyebrow} headline={headline} lede={lede} primaryCtaLabel={heroCtaLabel} ctaNote={heroCtaNote} />
      <Services headline={servicesHeadline} emphasis={servicesEmphasis} ledeParagraphs={servicesLedeParagraphs} />
      <ServiceStats />
      <Reviews />
      <Process />
      <WhyUs />
      <Contact tone="beige" />
      <MeetMichael />
      <Faq />
    </>
  );
}
