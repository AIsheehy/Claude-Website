import { Service } from "@/lib/content";
import { GuidanceContent } from "@/components/service/ServicePageContent";

// Single source of truth for the Planning Permission page's content, shared
// with the homepage so the two stay identical (see planning-permission/page.tsx
// and app/page.tsx).
export const planningServices: Service[] = [
  {
    slug: "feasibility-study",
    shortName: "Detailed Planning Feasibility Study",
    description: "We assess your project and explain the planning constraints before you spend money.",
    icon: "compass",
  },
  {
    slug: "permitted-development-assessment",
    shortName: "Permitted Development Assessment",
    description: "We establish whether Permitted Development applies, saving you unnecessary time and expense.",
    icon: "scale",
  },
  {
    slug: "measured-survey",
    shortName: "Accurate Measured Survey",
    description: "A detailed survey of your property, so your drawings are accurate from the start.",
    icon: "ruler",
  },
  {
    slug: "design-support",
    shortName: "Inspired Design Support",
    description: "We refine your design together, through unlimited revisions, until you're completely happy.",
    icon: "drawing",
  },
  {
    slug: "planning-drawings",
    shortName: "Professional Planning Drawings",
    description: "Drawings prepared to planning standards, giving your application the best chance of approval.",
    icon: "house",
  },
  {
    slug: "complete-application",
    shortName: "Complete Planning Application",
    description: "We prepare, organise and submit everything your local authority requires.",
    icon: "shield",
  },
  {
    slug: "council-liaison",
    shortName: "Council Liaison",
    description: "We deal directly with the planning officer, managing your application to a decision.",
    icon: "roof",
  },
  {
    slug: "aftercare",
    shortName: "Aftercare and Ongoing Support",
    description: "Support doesn't stop at submission — we're here to guide you through what's next.",
    icon: "shield",
  },
];

export const planningPermissionContent = {
  eyebrow: "Planning permission advice, drawings and complete application packages.",
  headline: "Planning Permission, Made Simple",
  lede: "Whether you're just exploring ideas or ready to submit your application, we are here to help. From expert advice and professionally prepared drawings to complete planning submissions, everything is tailored to your project and delivered at one fixed price.",
  heroCtaLabel: "Get A Free Planning Assessment",
  servicesHeadline: "Planning Permission Doesn't Have to Be Complicated",
  servicesLedeParagraphs: [
    "Whether you need help understanding the planning rules or want someone to manage the entire application from start to finish, we'll guide you every step of the way. Every project is different, so we tailor our service to your needs and can include:",
  ],
  services: planningServices,
  guidance: {
    eyebrow: "Planning permission",
    heading: "Not Sure If You Need Planning Permission?",
    paragraphs: [
      "Every project is different, and the rules can vary depending on your property, location and the type of work you're planning.",
      "We can assess your proposal, explain whether planning permission is likely to be required and recommend the most appropriate route forward before you spend money on unnecessary drawings or applications.",
    ],
    ctaLabel: "Check Your Project",
  } satisfies GuidanceContent,
  finalCtaHeading: "Not Sure Where to Start?",
  finalCtaText: "We'll explain exactly what your project needs and recommend the most suitable route before you spend money unnecessarily.",
};
