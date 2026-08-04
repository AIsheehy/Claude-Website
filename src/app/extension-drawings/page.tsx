import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { Service } from "@/lib/content";

export const metadata: Metadata = {
  title: "Extension Drawings",
  description:
    "Design, drawings and complete planning application packages for your home extension — from initial feasibility advice through to submission, at one fixed price.",
};

const extensionServices: Service[] = [
  {
    slug: "feasibility-study",
    shortName: "Detailed Feasibility Study",
    description: "Find out what your council is likely to approve before you spend money on drawings.",
    icon: "compass",
  },
  {
    slug: "measured-survey",
    shortName: "Accurate Measured Survey",
    description: "A detailed survey of your property, so your drawings are accurate from day one.",
    icon: "ruler",
  },
  {
    slug: "design-support",
    shortName: "Inspired Design Support",
    description: "We refine your design together, through unlimited revisions, until you're completely happy.",
    icon: "drawing",
  },
  {
    slug: "architectural-drawings",
    shortName: "Professional Architectural Drawings",
    description: "Clear, accurate drawings prepared to planning standards, giving your application a strong foundation.",
    icon: "house",
  },
  {
    slug: "application-package",
    shortName: "Complete Planning Application Package",
    description: "Every document your application needs, prepared and organised, ready for council review.",
    icon: "shield",
  },
  {
    slug: "council-liaison",
    shortName: "Council Liaison",
    description: "We deal directly with the local authority, managing correspondence and keeping things moving.",
    icon: "scale",
  },
  {
    slug: "aftercare",
    shortName: "Aftercare and Ongoing Support",
    description: "Support doesn't stop at submission — we're here for questions and next steps too.",
    icon: "roof",
  },
];

export default function ExtensionDrawingsPage() {
  return (
    <ServicePageContent
      eyebrow="Architectural drawings, planning advice and application packages for home extensions."
      headline="Design, Drawings and Complete Planning Application Packages for Your Home Extension"
      lede="Whether you're just exploring ideas or ready to submit your application, we provide everything from initial feasibility advice to professionally prepared drawings and complete planning submissions, all at one fixed price."
      heroCtaLabel="Get Your Free Project Assessment"
      servicesHeadline="We Take the Stress Out of Extending Your Home"
      servicesLedeParagraphs={[
        "Whether you're just exploring ideas or already have sketches prepared, we'll meet you where you are. Every project is different, so we tailor our service to your needs, from one-off drawings to complete planning application packages.",
      ]}
      services={extensionServices}
      afterServicesCtaLabel="Discuss Your Extension Project"
      midPageCtaLabel="See How We Can Help"
      finalCtaHeading="Ready to Start Planning Your Extension?"
      finalCtaText="Tell us about your ideas and we'll explain the best way to move your project forward."
      finalCtaLabel="Get Your Fixed Quote"
    />
  );
}
