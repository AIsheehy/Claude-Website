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
    description:
      "Before spending money on drawings, find out what your local authority is likely to approve, the planning constraints affecting your property and the best route to maximise your chances of success.",
    icon: "compass",
  },
  {
    slug: "measured-survey",
    shortName: "Accurate Measured Survey",
    description:
      "We carry out a detailed survey of your property, recording every measurement and level to ensure your drawings are accurate from day one.",
    icon: "ruler",
  },
  {
    slug: "design-support",
    shortName: "Inspired Design Support",
    description:
      "Combining our technical experience with your ideas, we'll refine your design together through unlimited revisions until you're completely happy with the final proposal.",
    icon: "drawing",
  },
  {
    slug: "architectural-drawings",
    shortName: "Professional Architectural Drawings",
    description:
      "Clear, accurate existing and proposed drawings prepared to planning standards, giving your project the best possible foundation for a successful application.",
    icon: "house",
  },
  {
    slug: "application-package",
    shortName: "Complete Planning Application Package",
    description:
      "We prepare and organise every document needed for your submission, ensuring your application is complete, accurate and ready for review by the local authority.",
    icon: "shield",
  },
  {
    slug: "council-liaison",
    shortName: "Council Liaison",
    description:
      "We deal directly with the local authority on your behalf, responding to queries, managing correspondence and keeping your application moving wherever possible.",
    icon: "scale",
  },
  {
    slug: "aftercare",
    shortName: "Aftercare and Ongoing Support",
    description:
      "Our support doesn't end once your application is submitted. We're here to answer questions, provide advice and guide you through the next stages of your project.",
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
