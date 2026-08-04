import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { Service } from "@/lib/content";

export const metadata: Metadata = {
  title: "Planning Permission Applications",
  description:
    "Planning permission advice, drawings and complete application packages — from initial feasibility through to submission, at one fixed price.",
};

const planningServices: Service[] = [
  {
    slug: "feasibility-study",
    shortName: "Detailed Planning Feasibility Study",
    description:
      "Before spending money on drawings or construction, we'll assess your project, explain the planning constraints affecting your property and advise on the best route to maximise your chances of approval.",
    icon: "compass",
  },
  {
    slug: "permitted-development-assessment",
    shortName: "Permitted Development Assessment",
    description:
      "Not every project requires planning permission. We'll establish whether your proposal can be completed under Permitted Development or whether a full planning application is needed, helping you avoid unnecessary time and expense.",
    icon: "scale",
  },
  {
    slug: "measured-survey",
    shortName: "Accurate Measured Survey",
    description:
      "We carry out a detailed survey of your property, recording every measurement and level to ensure your drawings are accurate from the very beginning.",
    icon: "ruler",
  },
  {
    slug: "design-support",
    shortName: "Inspired Design Support",
    description:
      "Combining our technical expertise with your ideas, we'll refine your design together through unlimited revisions until you're completely happy with the final proposal before anything is submitted.",
    icon: "drawing",
  },
  {
    slug: "planning-drawings",
    shortName: "Professional Planning Drawings",
    description:
      "Existing and proposed drawings prepared to planning standards, giving your application the best possible chance of progressing smoothly through the council's review process.",
    icon: "house",
  },
  {
    slug: "complete-application",
    shortName: "Complete Planning Application",
    description:
      "We prepare, organise and submit all the documents required by your local authority, ensuring your application is complete, accurate and professionally presented.",
    icon: "shield",
  },
  {
    slug: "council-liaison",
    shortName: "Council Liaison",
    description:
      "We communicate directly with the planning officer on your behalf, responding to queries and managing the application until a decision is reached wherever possible.",
    icon: "roof",
  },
  {
    slug: "aftercare",
    shortName: "Aftercare and Ongoing Support",
    description:
      "Our support doesn't stop once your application is submitted. We're here to answer questions, explain the next stages and provide continued guidance throughout your project.",
    icon: "shield",
  },
];

export default function PlanningPermissionPage() {
  return (
    <ServicePageContent
      eyebrow="Planning permission advice, drawings and complete application packages."
      headline="Planning Permission, Made Simple"
      lede="Whether you're just exploring ideas or ready to submit your application, we'll guide you through the entire planning process. From expert advice and professionally prepared drawings to complete planning submissions, everything is tailored to your project and delivered at one fixed price."
      heroCtaLabel="Find Out If You Need Planning Permission"
      servicesHeadline="Planning Permission Doesn't Have to Be Complicated"
      servicesLedeParagraphs={[
        "Whether you need help understanding the planning rules or want someone to manage the entire application from start to finish, we'll guide you every step of the way. Every project is different, so we tailor our service to your needs and can include:",
      ]}
      services={planningServices}
      afterServicesCtaLabel="Get Expert Planning Advice"
      guidance={{
        eyebrow: "Planning permission",
        heading: "Not Sure If You Need Planning Permission?",
        paragraphs: [
          "Every project is different, and the rules can vary depending on your property, location and the type of work you're planning.",
          "We can assess your proposal, explain whether planning permission is likely to be required and recommend the most appropriate route forward before you spend money on unnecessary drawings or applications.",
        ],
        ctaLabel: "Check Your Project",
      }}
      midPageCtaLabel="Get Expert Planning Advice"
      finalCtaHeading="Not Sure Where to Start?"
      finalCtaText="We'll explain exactly what your project needs and recommend the most suitable route before you spend money unnecessarily."
      finalCtaLabel="Start Your Planning Application"
    />
  );
}
