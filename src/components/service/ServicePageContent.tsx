import { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { StatBar } from "@/components/ui/StatBar";
import { Principles } from "@/components/service/Principles";
import { Process } from "@/components/home/Process";
import { Scope } from "@/components/service/Scope";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Reviews } from "@/components/home/Reviews";
import { WhyUs } from "@/components/home/WhyUs";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";
import { InlineCta } from "@/components/home/InlineCta";
import { planningPermissionFaqs } from "@/lib/content";
import { founderLedDifferentiators } from "@/lib/differentiators";

// Shared body for every dedicated service landing page (Planning Applications,
// Permitted Development, Loft Conversion Drawings, Extension Drawings). Only
// the hero eyebrow/headline/lede and page metadata differ page to page.
export function ServicePageContent({
  eyebrow,
  headline,
  lede,
}: {
  eyebrow: string;
  headline: ReactNode;
  lede: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        headline={headline}
        lede={lede}
        primaryCtaLabel="Get My Free Feasibility Review"
        formEyebrow="Free, no-obligation review"
        formTitle="Tell us about your project"
        trustSlot={<StatBar />}
      />
      <Principles />
      <InlineCta text="Not sure if you need permission at all? Get a free assessment first." />
      <Process />
      <Scope />
      <CaseStudies />
      <InlineCta text="Ready for the same result? Let's talk about your project." />
      <Reviews />
      <WhyUs
        title="Why work with Form & Function on your application."
        lede="A founder-led service built around getting applications approved, not just submitted."
        items={founderLedDifferentiators}
        alt
      />
      <Contact />
      <Faq
        items={planningPermissionFaqs}
        title="Planning permission — the questions people ask us."
        groupName="planning-permission-faq"
      />
    </>
  );
}
