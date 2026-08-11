import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

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
      lede="Not every home improvement project requires planning permission. We'll assess whether your proposal qualifies under Permitted Development, prepare everything needed to support your application and secure official confirmation through a Lawful Development Certificate, all at one fixed price."
      heroCtaLabel="Find Out If Your Project Qualifies"
      servicesHeadline="Find Out What You Can Build Without Planning Permission"
      servicesLedeParagraphs={[
        "Permitted Development can save time, money and unnecessary planning applications, but only if your project meets the rules. We'll assess your proposal, explain your options and manage the entire process, giving you complete confidence before any work begins. Our tailored service can include:",
      ]}
    />
  );
}
