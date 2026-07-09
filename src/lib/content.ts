// Central content store. Anything marked TODO/PLACEHOLDER stands in for real
// business detail (contact info, credentials, reviews, case studies) and must
// be swapped for the genuine article before this site goes live. Testimonials
// in particular must never be published as real without genuine client
// consent — they're marked here purely as layout placeholders.

export const business = {
  name: "Form & Function London",
  phone: "020 0000 0000", // TODO: real number
  phoneHref: "tel:+442000000000",
  email: "hello@formandfunctionlondon.co.uk", // TODO: real email
  addressLine: "London", // TODO: real office area, e.g. "Clerkenwell, London EC1"
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  icon: "compass" | "shield" | "scale" | "ruler" | "drawing" | "house" | "roof";
  group: "Strategy & Certainty" | "Drawings & Surveys" | "Extensions & Conversions";
};

export const services: Service[] = [
  {
    slug: "planning-consultancy",
    name: "Planning Consultancy",
    shortName: "Planning Consultancy",
    summary: "Independent advice on what's achievable before you spend a pound on drawings.",
    icon: "compass",
    group: "Strategy & Certainty",
  },
  {
    slug: "planning-permission",
    name: "Planning Permission Applications",
    shortName: "Planning Permission",
    summary: "Full applications prepared and managed from first sketch to council decision.",
    icon: "drawing",
    group: "Strategy & Certainty",
  },
  {
    slug: "lawful-development-certificates",
    name: "Lawful Development Certificates",
    shortName: "Lawful Development Certificates",
    summary: "Written proof your permitted development rights protect you, on file, for good.",
    icon: "shield",
    group: "Strategy & Certainty",
  },
  {
    slug: "change-of-use",
    name: "Change of Use Applications",
    shortName: "Change of Use",
    summary: "Reclassifying a property's legal use, handled correctly from the outset.",
    icon: "scale",
    group: "Strategy & Certainty",
  },
  {
    slug: "measured-building-surveys",
    name: "Measured Building Surveys",
    shortName: "Measured Building Surveys",
    summary: "Precise on-site surveys that become the accurate foundation for every drawing after.",
    icon: "ruler",
    group: "Drawings & Surveys",
  },
  {
    slug: "planning-drawings",
    name: "Planning Drawings",
    shortName: "Planning Drawings",
    summary: "Existing and proposed drawings prepared to the standard your council expects.",
    icon: "drawing",
    group: "Drawings & Surveys",
  },
  {
    slug: "house-extensions",
    name: "House Extensions",
    shortName: "House Extensions",
    summary: "Rear, side and wraparound extensions — designed to be approvable, not just drawn.",
    icon: "house",
    group: "Extensions & Conversions",
  },
  {
    slug: "loft-conversions",
    name: "Loft Conversions",
    shortName: "Loft Conversions",
    summary: "Dormer, hip-to-gable and mansard conversions, planned around what your roofline allows.",
    icon: "roof",
    group: "Extensions & Conversions",
  },
];

export const boroughs = [
  // TODO: confirm real coverage area
  "Wandsworth",
  "Richmond upon Thames",
  "Kingston upon Thames",
  "Merton",
  "Lambeth",
  "Hammersmith & Fulham",
  "Ealing",
  "Camden",
];

// Qualitative trust markers — used instead of unverified numeric stats.
// Replace with real figures (years trading, applications submitted, approval
// rate) as soon as you can confirm them; specific numbers convert better
// than qualitative claims, but only if they're true.
export const trustMarkers = [
  { icon: "shield", label: "Professional indemnity insured" },
  { icon: "layers", label: "One team, start to finish" },
  { icon: "pin", label: "London-wide coverage" },
  { icon: "scale", label: "Independent planning advice" },
];

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQs", href: "/#faq" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Initial advice",
    description:
      "We assess your property and your goals before anything is drawn, so you know what's realistically achievable first.",
  },
  {
    step: "02",
    title: "Measured survey",
    description:
      "An accurate on-site survey of your existing building — the foundation everything else is drawn from.",
  },
  {
    step: "03",
    title: "Planning drawings",
    description:
      "Existing and proposed drawings prepared to the standard your local council expects to see.",
  },
  {
    step: "04",
    title: "Planning statement",
    description:
      "The written case for your application — the policy argument that supports what's been drawn.",
  },
  {
    step: "05",
    title: "Submission",
    description: "Your full application is submitted correctly, first time, with nothing missing.",
  },
  {
    step: "06",
    title: "Council correspondence",
    description:
      "Every query from your planning officer is handled directly by us. You're kept informed — not chasing.",
  },
  {
    step: "07",
    title: "Decision & beyond",
    description:
      "We see your application through to decision, and advise on next steps whatever the outcome.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

// PLACEHOLDER TESTIMONIALS — layout examples only. Do not publish without
// swapping in genuine, consented client feedback.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I didn't understand any of the planning process before we started. They explained every step and just got on with it — I never once felt out of my depth.",
    name: "Placeholder — homeowner",
    context: "Rear extension, South West London",
  },
  {
    quote:
      "We'd been quoted for drawings elsewhere with no real guidance on whether the scheme would even be approved. This was the first time someone gave us a straight answer before we spent anything.",
    name: "Placeholder — landlord",
    context: "Change of use, North London",
  },
  {
    quote:
      "Every email to the council went through them. I found out about the approval by text — that was the whole experience from my side.",
    name: "Placeholder — property investor",
    context: "Loft conversion, South East London",
  },
];

export type CaseStudy = {
  title: string;
  location: string;
  summary: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Rear extension & internal reconfiguration",
    location: "South London",
    summary:
      "A single-storey rear extension with structural wall removal and a full kitchen reconfiguration, prepared end-to-end from survey through to submission.",
    outcome: "Full planning permission granted.",
  },
  {
    title: "Loft conversion with rear dormer",
    location: "South West London", // PLACEHOLDER — illustrative example
    summary:
      "A hip-to-gable loft conversion with rear dormer, drawn around existing roof constraints and neighbouring amenity considerations.",
    outcome: "Full planning permission granted.",
  },
  {
    title: "Change of use to residential",
    location: "North London", // PLACEHOLDER — illustrative example
    summary:
      "Reclassification from commercial to residential use, supported by a planning statement addressing policy and precedent.",
    outcome: "Certificate of lawfulness issued.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What happens if my application is refused?",
    answer:
      "We assess the risk of refusal honestly before you submit — if we don't think an application is likely to succeed, we'll say so at the advice stage, not after. If a refusal does happen, we review the council's reasoning and advise on amending and resubmitting or appealing, as part of our service.",
  },
  {
    question: "How do I know I won't waste money on drawings that can't be built?",
    answer:
      "That's what the initial advice stage is for. We look at your property, the relevant planning policy and any site-specific constraints before a single drawing is produced, so you're making decisions with a clear view of what's realistic.",
  },
  {
    question: "Do I need planning permission, or does permitted development cover me?",
    answer:
      "Often neither is obvious without a proper assessment — many projects fall under permitted development rights, some need a Lawful Development Certificate to prove it, and others need full planning permission. We work out which applies to you as the first step.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Councils have statutory timeframes for a decision once an application is validated — typically 8 weeks for householder applications, longer for larger schemes. Survey, drawings and preparation ahead of submission vary by project; we'll give you a realistic timeline for your specific case at the advice stage.",
  },
  {
    question: "Will I deal with one person, or get passed between departments?",
    answer:
      "One team handles your project from initial advice through to the council's decision — including every piece of correspondence in between. You're not re-explaining your project to someone new at each stage.",
  },
  {
    question: "Do you only handle the paperwork, or the design too?",
    answer:
      "Both. Drawings are prepared with approvability in mind from the outset, not just to illustrate what you've already decided — the two are handled together, not as separate handoffs.",
  },
];

export const aboutCopy = {
  eyebrow: "About us",
  title: "Planning permission shouldn't feel like a gamble.",
  paragraphs: [
    "Form & Function London exists because most people who need planning permission have never needed it before, and don't plan to again. You shouldn't have to become an expert in planning policy to extend your home or invest in a property with confidence.",
    "We handle the process end-to-end — advice, survey, drawings, planning statement, submission and every piece of council correspondence — so the only thing you have to do is tell us what you want to achieve.",
  ],
};
