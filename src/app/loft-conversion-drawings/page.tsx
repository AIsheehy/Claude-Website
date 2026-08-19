import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { planningPermissionContent } from "@/lib/planningPermissionContent";

export const metadata: Metadata = {
  title: "Loft Conversion Drawings",
  description:
    "Professionally designed loft conversion plans tailored to your vision and planning requirements. A complete, done-for-you service from design and drawings to planning approval.",
};

export default function LoftConversionDrawingsPage() {
  return (
    <ServicePageContent
      eyebrow="Loft Conversion advice, drawings and complete application packages."
      headline="Loft Conversions Made Simple"
      lede="Whether you're exploring ideas or ready to get started, our expert team will help you move forward with confidence. From professional drawings to complete planning submissions, everything is tailored to your project and delivered at one fixed price."
      heroCtaLabel="Get A Free Loft Conversion Assessment"
      heroCtaNote={planningPermissionContent.heroCtaNote}
      servicesHeadline="Loft Conversions Don't Have to Be Complicated"
      servicesLedeParagraphs={[
        "Red tape, ambiguous rules and complex application requirements. Loft Conversions can be complicated. But it doesn't have to be.",
        "We use our experience and know how to cut through the noise, taking the stress out of planning and getting our clients' projects off the ground from day one. Our services include:",
      ]}
    />
  );
}
