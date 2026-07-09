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
  { icon: "layers", label: "One team, start to finish" },
  { icon: "pin", label: "London & Home Counties coverage" },
  { icon: "scale", label: "Independent planning advice" },
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
  { label: "FAQs", href: "/#faq" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: "compass" | "ruler" | "drawing" | "document" | "send" | "chat" | "check";
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Initial advice",
    description: "Know what's achievable before you spend a penny.",
    icon: "compass",
  },
  {
    step: "02",
    title: "Measured survey",
    description: "An accurate site survey, done right first time.",
    icon: "ruler",
  },
  {
    step: "03",
    title: "Planning drawings",
    description: "Drawn to the standard your council expects.",
    icon: "drawing",
  },
  {
    step: "04",
    title: "Planning statement",
    description: "The written policy case behind your application.",
    icon: "document",
  },
  {
    step: "05",
    title: "Submission",
    description: "Submitted correctly, first time, nothing missing.",
    icon: "send",
  },
  {
    step: "06",
    title: "Council correspondence",
    description: "Every query handled directly by us, not you.",
    icon: "chat",
  },
  {
    step: "07",
    title: "Decision & beyond",
    description: "Approved, and ready to move forward with confidence.",
    icon: "check",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  image: string;
};

// Real client testimonials and photos, carried over from the existing site.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Great service from start to finish. Michael was honest, knowledgeable, and very detail focused. Would highly recommend and will be using again for our loft!",
    name: "Harry",
    context: "Rear extension, SW London",
    image: "/images/testimonials/harry.jpg",
  },
  {
    quote:
      "Thanks to Michael's guidance, our application was approved, which we are absolutely delighted about. He made the process feel smooth and straightforward.",
    name: "Tasha",
    context: "Rear extension, Surrey",
    image: "/images/testimonials/tasha.jpg",
  },
  {
    quote:
      "Very professional and answered all of my questions promptly which made the process much less stressful. Really grateful for the support with my project!",
    name: "Irina",
    context: "Loft conversion, Surrey",
    image: "/images/testimonials/irina.jpg",
  },
];

// The one case study with full photographic + documentary proof (before/after
// photos, real drawings, a redacted real approval letter).
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
    title: "Rear extension & internal reconfiguration",
    location: "South London",
    summary:
      "A single-storey rear extension with structural wall removal and a full kitchen reconfiguration, prepared end-to-end from survey through to submission.",
    outcome: "Full planning permission granted.",
  },
  {
    // Real project — condition-discharge approval dated April 2026, Reigate & Banstead BC.
    title: "Garage, porch & roof renewal",
    location: "Horley, Surrey",
    summary:
      "Conversion of the garage to habitable office space, an extended porch, a new pitched roof replacing the old conservatory roof, and full window renewal — managed through to sign-off.",
    outcome: "Approved by Reigate & Banstead Borough Council.",
    image: "/images/case-studies/upfield-approval.jpg",
    imageCaption: "The council's approval — real, unredacted, dated April 2026.",
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

export const approvalPrinciples = [
  {
    title: "A clear strategy from day one",
    description: "A planning strategy that aligns with your goals before anything is drawn.",
  },
  {
    title: "Design that works with policy",
    description: "A design tailored to your vision that aligns with local policy, not against it.",
  },
  {
    title: "A proposal that's actually viable",
    description: "Backed by an experienced team, so what's submitted can genuinely be built.",
  },
];

// Project types handled — real project photography, carried over from the
// existing site's "types of projects" gallery.
export type ProjectType = {
  label: string;
  image: string;
};

export const projectTypes: ProjectType[] = [
  { label: "Loft conversions", image: "/images/project-types/loft-conversions.jpg" },
  { label: "Single & double storey extensions", image: "/images/project-types/house-extensions.jpg" },
  { label: "Roof, door & window alterations", image: "/images/project-types/roof-door-window.jpg" },
  { label: "Garage conversions", image: "/images/project-types/garage-conversions.jpg" },
  { label: "Outbuildings, home gyms & offices", image: "/images/project-types/outbuildings.jpg" },
  { label: "Change of use applications", image: "/images/project-types/change-of-use.jpg" },
  { label: "Annexes & conservatories", image: "/images/project-types/annexes-conservatories.jpg" },
  { label: "All other home improvements", image: "/images/project-types/other-improvements.jpg" },
];

export const inclusions = [
  "Initial consultation to understand your goals and the best route to achieve them",
  "A full survey of your property and production of architectural drawings and floor plans",
  "Design support to develop your ideas, with revisions as the scheme is refined",
  "Preparation, submission and management of the application with the council",
  "Direct support from initial enquiry through to the application decision",
];

export const planningPermissionFaqs: FaqItem[] = [
  {
    question: "How long will it take to get permission?",
    answer:
      "Once an application is validated, councils have a statutory period to decide — typically 8 weeks for a householder application, longer for larger or more complex schemes. We'll give you a realistic estimate for your specific project before you commit to anything.",
  },
  {
    question: "What's included in your planning application service?",
    answer:
      "Initial consultation, a full measured survey, architectural drawings and floor plans, design support, the planning statement, submission, and management of all correspondence with the council through to decision — all handled by the same team throughout.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover London and the Home Counties. If you're unsure whether your property falls within our coverage, get in touch and we'll tell you straight away.",
  },
  {
    question: "How long will it take to submit my application?",
    answer:
      "This depends on the complexity of the survey and drawings required, but we work to get a complete, correct application submitted as quickly as the project allows — without cutting corners that risk a refusal.",
  },
  {
    question: "Can you help me design my ideas, or do I need my own plans first?",
    answer:
      "You don't need existing plans. Bring us your ideas and constraints, and we'll develop a design that reflects what you want while being aligned with what's likely to be approved.",
  },
  {
    question: "Will I have to speak to the council myself?",
    answer:
      "No — we handle every piece of correspondence with your planning officer directly, so you're not fielding questions about policy or precedent yourself.",
  },
  {
    question: "What's the difference between planning permission and permitted development?",
    answer:
      "Permitted development rights let you carry out certain works without a full planning application, provided you meet specific conditions. Planning permission is a full application assessed by the council against local policy. We work out which route applies to you as the very first step.",
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
