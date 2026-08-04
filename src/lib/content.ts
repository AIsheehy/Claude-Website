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
  shortName: string;
  description: string;
  icon: "compass" | "shield" | "scale" | "ruler" | "drawing" | "house" | "roof";
};

export const services: Service[] = [
  {
    slug: "planning-permission",
    shortName: "Planning Applications",
    description: "Full applications prepared and submitted to the council for you.",
    icon: "drawing",
  },
  {
    slug: "lawful-development-certificates",
    shortName: "Lawful Development Certificates",
    description: "Proof your project is lawful without needing full planning permission.",
    icon: "shield",
  },
  {
    slug: "loft-conversions",
    shortName: "Loft Conversions",
    description: "Drawings and approvals for turning your loft into usable space.",
    icon: "roof",
  },
  {
    slug: "house-extensions",
    shortName: "House Extensions",
    description: "Design and drawings for rear, side or wraparound extensions.",
    icon: "house",
  },
  {
    slug: "architectural-designs",
    shortName: "Architectural Designs",
    description: "Considered design work that balances your brief with what will get approved.",
    icon: "compass",
  },
  {
    slug: "floor-plan-drawings",
    shortName: "Floor Plan Drawings",
    description: "Accurate existing and proposed floor plans for your application.",
    icon: "ruler",
  },
  {
    slug: "change-of-use",
    shortName: "Change of Use Applications",
    description: "Applications for changing how a building or land is legally used.",
    icon: "scale",
  },
];

// London, then every traditional Home County — matches the "London and Home
// Counties" coverage claimed throughout the rest of the site.
export const boroughs = [
  "London",
  "Surrey",
  "Kent",
  "Essex",
  "Hertfordshire",
  "Buckinghamshire",
  "Berkshire",
];

// Qualitative trust markers used on the homepage hero. 5-star rating leads,
// the rest keep their existing order.
export const trustMarkers = [
  { icon: "star", label: "5-Star Rated On Google" },
  { icon: "shield", label: "From £995.00" },
  { icon: "clock", label: "Drawings Ready Within 7 Days" },
  { icon: "pin", label: "London & Home Counties Coverage" },
];

// Numeric claims from the existing site — reconfirm these are still current
// before publishing; ASA guidance requires stats like this to be true and
// substantiable, not just carried over.
export const stats = [
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "<14 days", label: "Applications submitted from instruction" },
  { value: "Fixed price", label: "Money-back guarantee" },
  { value: "5★", label: "Rated on Google" },
];

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Our Work", href: "/our-work" },
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
    title: "Initial Advice & Survey",
    description:
      "We discuss your project, answer your questions and carry out a measured survey of your property.",
    icon: "compass",
  },
  {
    step: "02",
    title: "Design & Drawings",
    description:
      "We prepare your drawings and share them with you for review before making any final amendments.",
    icon: "drawing",
  },
  {
    step: "03",
    title: "Planning Submission",
    description:
      "Once you're happy with the proposal, we submit your application and manage all communication with the council.",
    icon: "send",
  },
  {
    step: "04",
    title: "Decision & Next Steps",
    description:
      "When a decision is issued, we'll explain the outcome and guide you through the next stage of your project.",
    icon: "check",
  },
];

export type TestimonialGalleryImage = {
  src: string;
  alt: string;
  label: string;
  fit: "cover" | "contain";
  /** Extra disclosure badge shown on the image itself (used for AI visualisations). */
  badge?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  image: string;
  /** Defaults to "Planning Approved" when omitted — set explicitly for projects
   *  where permission has not (yet, or ever) been granted, so the badge never
   *  implies an outcome that didn't happen. */
  statusBadge?: string;
  /** Optional project photo/drawing gallery, replacing the single `image` when present. */
  gallery?: TestimonialGalleryImage[];
};

// Real client testimonials and photos, carried over from the existing site —
// rewritten outcome-first as a short quoted line stating the result.
export const testimonials: Testimonial[] = [
  {
    quote: "An excellent experience from start to finish. Michael was professional, and our application was approved.",
    name: "Tasha",
    context: "House extension · Surrey",
    image: "/images/testimonials/upfield-horley/existing.jpg",
    gallery: [
      {
        src: "/images/testimonials/upfield-horley/existing.jpg",
        alt: "The rear of the property at Upfield, Horley before the extension works began",
        label: "Existing",
        fit: "cover",
      },
      {
        src: "/images/testimonials/upfield-horley/approved-drawings.png",
        alt: "The approved planning drawing sheet for Upfield, Horley, showing all proposed elevations",
        label: "Approved Drawings",
        fit: "contain",
      },
      {
        src: "/images/testimonials/upfield-horley/visualisation.jpg",
        alt: "An artist's visualisation of the proposed extension at Upfield, Horley",
        label: "Artist's Visualisation",
        fit: "cover",
        badge: "Artist's Visualisation",
      },
    ],
  },
  {
    quote: "Michael made the drawings and planning process much less stressful, and was always helpful.",
    name: "Irina",
    context: "Rear extension · Mitcham",
    image: "/images/testimonials/eveline-road/existing.jpg",
    gallery: [
      {
        src: "/images/testimonials/eveline-road/existing.jpg",
        alt: "The rear of the property at 21 Eveline Road before the extension works began",
        label: "Existing",
        fit: "cover",
      },
      {
        src: "/images/testimonials/eveline-road/approved-drawings.png",
        alt: "The approved planning drawing sheet for 21 Eveline Road, showing all proposed elevations",
        label: "Approved Drawings",
        fit: "contain",
      },
      {
        src: "/images/testimonials/eveline-road/visualisation.jpg",
        alt: "An artist's visualisation of the proposed rear extension at 21 Eveline Road",
        label: "Artist's Visualisation",
        fit: "cover",
        badge: "Artist's Visualisation",
      },
    ],
  },
  {
    quote: "Great service from start to finish. Michael was honest, knowledgeable and detail-focused throughout.",
    name: "Harry",
    context: "House extension · South West London",
    image: "/images/testimonials/turvin-crescent/existing.jpg",
    // This application was not approved — the badge and gallery labels must
    // not imply that it was.
    statusBadge: "Planning Application",
    gallery: [
      {
        src: "/images/testimonials/turvin-crescent/existing.jpg",
        alt: "The rear of the property at 14 Turvin Crescent before the extension works began",
        label: "Existing",
        fit: "cover",
      },
      {
        src: "/images/testimonials/turvin-crescent/proposed-drawings.png",
        alt: "The proposed planning drawing sheet for 14 Turvin Crescent, showing all proposed elevations",
        label: "Proposed Drawings",
        fit: "contain",
      },
      {
        src: "/images/testimonials/turvin-crescent/visualisation.jpg",
        alt: "An artist's visualisation of the proposed extension and balcony at 14 Turvin Crescent",
        label: "Artist's Visualisation",
        fit: "cover",
        badge: "Artist's Visualisation",
      },
    ],
  },
];

// Content for the dedicated "Our Work" page (/our-work) — three full
// project write-ups. `gallery` entries without a `src` are placeholders for
// projects whose photos haven't been supplied yet.
export type WorkGalleryItem =
  | { src: string; alt: string; caption: string }
  | { src?: undefined; caption: string };

export type WorkProject = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  outcome: string;
  hero:
    | { type: "beforeAfter"; before: string; after: string; beforeAlt: string; afterAlt: string }
    | { type: "image"; src: string; alt: string }
    | { type: "placeholder" };
  gallery: WorkGalleryItem[];
};

export const workProjects: WorkProject[] = [
  {
    // Real project — 21 Eveline Road, Morden. Decision notice on file with
    // the London Borough of Merton.
    slug: "rear-extension-south-london",
    title: "Rear Extension South London",
    location: "Morden, London Borough of Merton",
    summary:
      "A single-storey rear and side extension with a new front porch, an additional first-floor window and a reconfigured garage parapet wall — designed and prepared end-to-end, from the initial survey through to a granted decision.",
    outcome: "Full Planning Permission Granted by the London Borough of Merton.",
    hero: {
      type: "image",
      src: "/images/case-studies/south-london-elevations.jpg",
      alt: "Proposed elevations for the rear and side extension",
    },
    gallery: [
      {
        src: "/images/case-studies/south-london-floorplan.jpg",
        alt: "Proposed floor plans for the rear and side extension",
        caption: "The proposed floor plans prepared for the application. Click to enlarge.",
      },
      {
        src: "/images/case-studies/south-london-decision.jpg",
        alt: "The council's decision notice granting full planning permission (applicant details redacted)",
        caption: "The council's decision notice — applicant details redacted. Click to enlarge.",
      },
    ],
  },
  {
    // No decision evidence on file yet for this one, so — consistent with
    // ASA guidance — the outcome language stays neutral rather than
    // claiming approval.
    slug: "hertfordshire-balcony-design",
    title: "Hertfordshire Balcony Design",
    location: "Hertfordshire",
    summary:
      "Full design and planning application for a new balcony on the rear elevation, giving the client valuable extra outdoor space without compromising the character of the property — prepared end-to-end from initial concept through to submission.",
    outcome: "Full planning application prepared and submitted.",
    hero: {
      type: "image",
      src: "/images/case-studies/hertfordshire-elevations.jpg",
      alt: "Proposed elevations showing the new rear steel balcony",
    },
    gallery: [
      {
        src: "/images/case-studies/hertfordshire-floorplan.jpg",
        alt: "Proposed floor plans for the balcony application",
        caption: "The proposed floor plans prepared for the application. Click to enlarge.",
      },
      {
        src: "/images/case-studies/hertfordshire-roofplan.jpg",
        alt: "Proposed roof plans for the balcony application",
        caption: "The proposed roof plans prepared for the application. Click to enlarge.",
      },
    ],
  },
  {
    // Same real project as the homepage's featured case study — copy
    // adapted for this page rather than duplicated verbatim.
    slug: "upfield",
    title: "Upfield",
    location: "Horley, Surrey",
    summary:
      "A full refurbishment of a 1900s detached home, including new rear extensions, replacement windows and a new roof — prepared and managed end-to-end, from the initial survey through to a granted decision.",
    outcome: "Full Planning Permission Granted by Reigate and Banstead Council.",
    hero: {
      type: "beforeAfter",
      before: "/images/case-studies/surrey-before.jpg",
      after: "/images/case-studies/surrey-after.jpg",
      beforeAlt: "The property before works began",
      afterAlt: "The completed extension and refurbishment",
    },
    gallery: [
      {
        src: "/images/case-studies/surrey-drawings.jpg",
        alt: "Architectural elevation and floor plan drawings prepared for the application",
        caption: "The drawings prepared for the application. Click to enlarge.",
      },
      {
        src: "/images/case-studies/approval-letter.jpg",
        alt: "The council's decision notice granting full planning permission (applicant details redacted)",
        caption: "The council's decision notice — applicant details redacted. Click to enlarge.",
      },
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How long will it take to get permission?",
    answer:
      "We aim to have your application submitted within 14 days. The council then must make a decision within the statutory period of a maximum of 8 weeks.",
  },
  {
    question: "What's included in your application?",
    answer:
      "Simply put, everything you need to secure approval. We handle every step for you, from the initial survey and production of all scaled drawings and plans, right up to submission and management of the application with the council.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer: "We mainly work in London and the Home Counties but are happy to travel, so get in touch!",
  },
  {
    question: "How long will it take to submit my application?",
    answer:
      "On average, just 14 days. We aim to have the draft version of your application with you within 7 days of survey. We then aim to have the full application complete and submitted 7 days later.",
  },
  {
    question: "Can you help me with designing my ideas?",
    answer:
      "Yes, absolutely. Good home design is something we are deeply passionate about and would love to help make your ideas a reality.",
  },
  {
    question: "Will I have to speak to the council?",
    answer:
      "No, not unless you specifically want to. We handle the entire process for you, acting as your planning agent and handling all correspondence with your local authority — you will only hear from them once a (hopefully positive) decision has been reached.",
  },
  {
    question: "What is the difference between planning permission and permitted development?",
    answer:
      "Permitted Development allows certain home improvements, provided they meet size and design limits, which are guaranteed by a Lawful Development Certificate. Planning Permission is a formal process that involves a council decision. We'll identify which applies to your property and prepare drawings accordingly.",
  },
];

export const aboutCopy = {
  eyebrow: "About us",
  title: "Planning permission shouldn't feel like a gamble.",
  paragraphs: [
    "I started Form & Function London to make the process simpler, clearer and more transparent. Every project is built around honest advice, careful preparation and a single point of contact from the first conversation through to the council's decision.",
  ],
};
