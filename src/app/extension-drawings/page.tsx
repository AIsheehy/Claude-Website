import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

export const metadata: Metadata = {
  title: "Extension Drawings",
  description:
    "Design, drawings and complete planning application packages for your home extension — from initial feasibility advice through to submission, at one fixed price.",
};

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
    />
  );
}
