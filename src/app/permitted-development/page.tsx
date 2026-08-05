import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { Service } from "@/lib/content";

export const metadata: Metadata = {
  title: "Permitted Development Applications",
  description:
    "Permitted Development advice, drawings and Lawful Development Certificates — assessed, prepared and submitted for you, at one fixed price.",
};

const permittedDevelopmentServices: Service[] = [
  {
    slug: "permitted-development-assessment",
    shortName: "Permitted Development Assessment",
    description: "We assess your home against the rules and advise on the best route forward.",
    icon: "scale",
  },
  {
    slug: "lawful-development-certificate",
    shortName: "Lawful Development Certificate",
    description: "Official confirmation from your council that your project is lawful under Permitted Development.",
    icon: "shield",
  },
  {
    slug: "measured-survey",
    shortName: "Accurate Measured Survey",
    description: "A detailed survey of your property, so your drawings accurately reflect your home.",
    icon: "ruler",
  },
  {
    slug: "architectural-drawings",
    shortName: "Professional Architectural Drawings",
    description: "Drawings prepared to the standard your local authority requires, clear and accurate.",
    icon: "house",
  },
  {
    slug: "application-package",
    shortName: "Complete Application Package",
    description: "Everything your Lawful Development Certificate application needs, prepared and submitted for you.",
    icon: "drawing",
  },
  {
    slug: "council-liaison",
    shortName: "Council Liaison",
    description: "We deal directly with your council, managing the application through to a decision.",
    icon: "roof",
  },
  {
    slug: "aftercare",
    shortName: "Aftercare and Ongoing Support",
    description: "Support doesn't stop at submission — we're here for questions and next steps too.",
    icon: "compass",
  },
];

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
      services={permittedDevelopmentServices}
      guidance={{
        eyebrow: "Permitted development",
        heading: "Not Sure If Your Project Falls Under Permitted Development?",
        paragraphs: [
          "The rules surrounding Permitted Development can be confusing, and they don't apply to every property. Factors such as previous extensions, conservation areas, listed buildings and the size of your proposal can all affect whether your project qualifies.",
          "We'll assess your property, explain your options in plain English and recommend the most appropriate route before you spend money on unnecessary drawings or planning applications.",
        ],
        ctaLabel: "Speak to a Permitted Development Expert",
      }}
      finalCtaHeading="Think Your Project Might Qualify?"
      finalCtaText="We'll assess your proposal, explain whether Permitted Development applies and help you move forward with complete confidence."
    />
  );
}
