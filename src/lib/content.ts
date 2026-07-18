// Central content store. Real business details below were pulled from the
// existing formandfunctionlondon.co.uk site (via a client-supplied PDF export)
// — phone, email, address and testimonials are genuine. Numeric claims (98%
// approval rate, <14 day submission, money-back guarantee) came from the same
// source and should be reconfirmed as still current before this goes live.

export const business = {
  name: "Form & Function London",
  founder: "Michael",
  phone: "07865 647127",
  phoneHref: "tel:+447865647127",
  email: "michael@formandfunctionlondon.co.uk",
  addressLine: "Sutton, London",
  addressFull: "Unit 7 Mulgrave Chambers, Mulgrave Road, London Borough of Sutton, SM2 6LE",
  hours: [
    { days: "Monday – Friday", time: "8:30am – 7pm" },
    { days: "Saturday", time: "7am – 5pm" },
    { days: "Sunday", time: "Closed" },
  ],
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

// Inferred from the real office address (Sutton) and client locations in
// testimonials (SW London, Surrey) — confirm the exact coverage list.
export const boroughs = [
  "Sutton",
  "Croydon",
  "Kingston upon Thames",
  "Merton",
  "Surrey",
  "South West London",
];

// Qualitative trust markers used on the homepage hero.
export const trustMarkers = [
  { icon: "shield", label: "Professional indemnity insured" },
  { icon: "clock", label: "14 days from survey to submission" },
  { icon: "pin", label: "London & Home Counties coverage" },
  { icon: "star", label: "5-star rated on Google" },
];

// Numeric claims from the existing site — reconfirm these are still current
// before publishing; ASA guidance requires stats like this to be true and
// substantiable, not just carried over.
export const stats = [
  { value: "98%", label: "Application approval rate" },
  { value: "<14 days", label: "Applications submitted from instruction" },
  { value: "Fixed price", label: "Money-back guarantee" },
  { value: "5★", label: "Rated on Google" },
];

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

// Dedicated service landing pages, surfaced as a dropdown under the header's
// "Services" nav item. Each page reuses the same content template as
// Planning Applications (the original service page) with its own hero copy.
export const servicesPages = [
  { label: "Planning Applications", href: "/planning-permission" },
  { label: "Permitted Development Applications", href: "/permitted-development" },
  { label: "Loft Conversion Drawings", href: "/loft-conversion-drawings" },
  { label: "Extension Drawings", href: "/extension-drawings" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: "compass" | "drawing" | "send" | "check";
};

// A simplified, layperson-friendly roadmap — the original 7 internal stages
// grouped into 4 milestones a homeowner can actually picture themselves
// walking through.
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Advice and survey",
    description:
      "We start with an honest assessment of what's achievable, then send a surveyor to measure your property accurately — the foundation everything else is built on.",
    icon: "compass",
  },
  {
    step: "02",
    title: "Drawings and planning statement",
    description:
      "We prepare your proposed drawings and write the planning statement — the document that sets out, in the council's own terms, why your project should be approved.",
    icon: "drawing",
  },
  {
    step: "03",
    title: "Submission and council liaison",
    description:
      "Your application is submitted correctly the first time. From there, we handle every question the council raises directly, so you're never asked to explain your own project.",
    icon: "send",
  },
  {
    step: "04",
    title: "Decision and next steps",
    description:
      "Once a decision is issued, we talk you through exactly what it means — and if it's approved, what to do next to get your project moving.",
    icon: "check",
  },
];

export type Testimonial = {
  quote: string;
  supporting: string;
  name: string;
  context: string;
  image: string;
};

// Real client testimonials and photos, carried over from the existing site —
// rewritten outcome-first: a short quoted line stating the result, then a
// plain supporting sentence, rather than one long undifferentiated quote.
export const testimonials: Testimonial[] = [
  {
    quote: "Honest, knowledgeable and detail-focused from start to finish.",
    supporting: "We'd happily use Form & Function again for our loft conversion.",
    name: "Harry",
    context: "Rear extension · SW London",
    image: "/images/testimonials/harry.jpg",
  },
  {
    quote: "Our planning application was approved, and the whole process felt straightforward.",
    supporting: "Michael guided us through every stage and made everything easy to understand.",
    name: "Tasha",
    context: "Rear extension · Surrey",
    image: "/images/testimonials/tasha.jpg",
  },
  {
    quote: "Every question was answered quickly, making the whole process far less stressful.",
    supporting: "Professional, responsive and a pleasure to work with.",
    name: "Irina",
    context: "Loft conversion · Surrey",
    image: "/images/testimonials/irina.jpg",
  },
];

// The one case study with full photographic + documentary proof (before/after
// photos, real drawings, a redacted real approval letter). Site: 4 Upfield,
// Horley, Surrey — this is the only case study that carries approval language;
// the two grid case studies below deliberately stay outcome-neutral.
export const featuredCaseStudy = {
  title: "Full refurbishment of a 1900s detached home",
  location: "Surrey",
  summary:
    "A substantial refurbishment including new rear extensions, window replacements and a new roof — prepared and managed end-to-end, from survey through to a granted decision.",
  outcome: "Full planning permission granted",
  before: "/images/case-studies/surrey-before.jpg",
  after: "/images/case-studies/surrey-after.jpg",
  drawings: "/images/case-studies/surrey-drawings.jpg",
  approvalLetter: "/images/case-studies/approval-letter.jpg",
};

export type CaseStudy = {
  title: string;
  location: string;
  summary: string;
  outcome: string;
  image?: string;
  imageCaption?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    // Real project — 21 Eveline Road, CR4 3LF.
    title: "Rear extension & internal reconfiguration",
    location: "South London",
    summary:
      "A single-storey rear extension with structural wall removal and a full kitchen reconfiguration, prepared end-to-end from survey through to submission.",
    outcome: "Full planning application prepared and submitted.",
    image: "/images/case-studies/eveline-road-elevations.jpg",
    imageCaption: "The proposed elevations prepared for the application.",
  },
  {
    // Real project — 14 Turvin Crescent, CM20 2FW.
    title: "Rear balcony & new door set",
    location: "Turvin Crescent, Harlow",
    summary:
      "Addition of a steel-framed rear balcony, supported on ground-level columns, together with a new door set replacing the existing first-floor window — prepared and submitted on the client's behalf.",
    outcome: "Full planning application prepared and submitted.",
    image: "/images/case-studies/turvin-crescent-elevations.jpg",
    imageCaption: "The proposed elevations prepared for the application.",
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
