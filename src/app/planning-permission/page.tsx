import type { Metadata } from "next";
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
import { planningPermissionFaqs } from "@/lib/content";
import { founderLedDifferentiators } from "@/lib/differentiators";

export const metadata: Metadata = {
  title: "Planning Permission Applications",
  description:
    "Secure planning permission without the fear of refusal, delays or costly mistakes. A complete, done-for-you service from initial advice to council submission.",
};

export default function PlanningPermissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Planning permission applications"
        headline="Secure planning permission, without the fear of refusal, delays or costly mistakes."
        lede={
          <>
            A complete, done-for-you service &mdash; from initial advice to drawings to
            submission &mdash; so you can move forward with clarity, confidence and the
            strongest possible chance of approval.
          </>
        }
        primaryCtaLabel="Get a free feasibility review"
        formEyebrow="Free, no-obligation review"
        formTitle="Tell us about your project"
        trustSlot={<StatBar />}
      />
      <Principles />
      <Process />
      <Scope />
      <CaseStudies />
      <Reviews />
      <WhyUs
        title="Why work with Form & Function on your application."
        lede="A founder-led service built around getting applications approved, not just submitted."
        items={founderLedDifferentiators}
      />
      <Faq
        items={planningPermissionFaqs}
        title="Planning permission — the questions people ask us."
        groupName="planning-permission-faq"
      />
      <Contact />
    </>
  );
}
