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
    description:
      "Every property is different. We'll assess your home against the current Permitted Development rules, explain whether your project qualifies and advise on the best route forward before you spend money on unnecessary applications or construction.",
    icon: "scale",
  },
  {
    slug: "lawful-development-certificate",
    shortName: "Lawful Development Certificate",
    description:
      "If your project qualifies, we'll prepare and submit a Lawful Development Certificate application, giving you official confirmation from your local authority that your proposal is lawful and can be carried out under Permitted Development rights.",
    icon: "shield",
  },
  {
    slug: "measured-survey",
    shortName: "Accurate Measured Survey",
    description:
      "We carry out a detailed survey of your property, recording every measurement and level to ensure your drawings accurately reflect your home from the very beginning.",
    icon: "ruler",
  },
  {
    slug: "architectural-drawings",
    shortName: "Professional Architectural Drawings",
    description:
      "Existing and proposed drawings prepared to the standard required by your local authority, ensuring your application is clear, accurate and professionally presented.",
    icon: "house",
  },
  {
    slug: "application-package",
    shortName: "Complete Application Package",
    description:
      "We prepare, organise and submit everything required to support your Lawful Development Certificate application, making the process straightforward from start to finish.",
    icon: "drawing",
  },
  {
    slug: "council-liaison",
    shortName: "Council Liaison",
    description:
      "We communicate directly with your local authority on your behalf, responding to any queries and managing the application until a decision is issued wherever possible.",
    icon: "roof",
  },
  {
    slug: "aftercare",
    shortName: "Aftercare and Ongoing Support",
    description:
      "Our support doesn't end once your certificate has been submitted. We're here to answer questions, provide guidance and help you move confidently into the next stage of your project.",
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
      afterServicesCtaLabel="Check Your Permitted Development Rights"
      guidance={{
        eyebrow: "Permitted development",
        heading: "Not Sure If Your Project Falls Under Permitted Development?",
        paragraphs: [
          "The rules surrounding Permitted Development can be confusing, and they don't apply to every property. Factors such as previous extensions, conservation areas, listed buildings and the size of your proposal can all affect whether your project qualifies.",
          "We'll assess your property, explain your options in plain English and recommend the most appropriate route before you spend money on unnecessary drawings or planning applications.",
        ],
        ctaLabel: "Speak to a Permitted Development Expert",
      }}
      midPageCtaLabel="Check Your Permitted Development Rights"
      finalCtaHeading="Think Your Project Might Qualify?"
      finalCtaText="We'll assess your proposal, explain whether Permitted Development applies and help you move forward with complete confidence."
      finalCtaLabel="Secure Your Lawful Development Certificate"
    />
  );
}
