import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { planningPermissionContent } from "@/lib/planningPermissionContent";

export const metadata: Metadata = {
  title: "Permitted Development Applications",
  description:
    "Permitted Development advice, drawings and Lawful Development Certificates — assessed, prepared and submitted for you, at one fixed price.",
};

export default function PermittedDevelopmentPage() {
  return (
    <ServicePageContent
      eyebrow="Permitted Development advice, drawings and Lawful Development Certificates."
      headline="Permitted Development, Made Simple"
      lede={planningPermissionContent.lede}
      heroCtaLabel={planningPermissionContent.heroCtaLabel}
      heroCtaNote={planningPermissionContent.heroCtaNote}
      servicesHeadline={planningPermissionContent.servicesHeadline}
      servicesLedeParagraphs={planningPermissionContent.servicesLedeParagraphs}
    />
  );
}
