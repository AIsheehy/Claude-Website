// Central content store. Anything marked TODO is a placeholder standing in
// for real business detail and should be swapped before launch.

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
  group: "Strategy & Certainty" | "Drawings & Surveys" | "Extensions & Conversions";
};

export const services: Service[] = [
  {
    slug: "planning-consultancy",
    name: "Planning Consultancy",
    shortName: "Planning Consultancy",
    summary:
      "Independent advice on what's achievable before you spend a pound on drawings.",
    group: "Strategy & Certainty",
  },
  {
    slug: "planning-permission",
    name: "Planning Permission Applications",
    shortName: "Planning Permission",
    summary:
      "Full applications prepared and managed from first sketch to council decision.",
    group: "Strategy & Certainty",
  },
  {
    slug: "lawful-development-certificates",
    name: "Lawful Development Certificates",
    shortName: "Lawful Development Certificates",
    summary:
      "Written proof your permitted development rights protect you, on file, for good.",
    group: "Strategy & Certainty",
  },
  {
    slug: "change-of-use",
    name: "Change of Use Applications",
    shortName: "Change of Use",
    summary:
      "Reclassifying a property's legal use, handled correctly from the outset.",
    group: "Strategy & Certainty",
  },
  {
    slug: "measured-building-surveys",
    name: "Measured Building Surveys",
    shortName: "Measured Building Surveys",
    summary:
      "Precise on-site surveys that become the accurate foundation for every drawing after.",
    group: "Drawings & Surveys",
  },
  {
    slug: "planning-drawings",
    name: "Planning Drawings",
    shortName: "Planning Drawings",
    summary:
      "Existing and proposed drawings prepared to the standard your council expects.",
    group: "Drawings & Surveys",
  },
  {
    slug: "house-extensions",
    name: "House Extensions",
    shortName: "House Extensions",
    summary:
      "Rear, side and wraparound extensions — designed to be approvable, not just drawn.",
    group: "Extensions & Conversions",
  },
  {
    slug: "loft-conversions",
    name: "Loft Conversions",
    shortName: "Loft Conversions",
    summary:
      "Dormer, hip-to-gable and mansard conversions, planned around what your roofline allows.",
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

export const credentials = [
  { label: "Years handling London applications", value: "TODO" },
  { label: "Applications submitted", value: "TODO" },
  { label: "Approval rate", value: "TODO" },
  { label: "Professional indemnity insured", value: "Yes" },
];

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Why us", href: "/#why-us" },
  { label: "FAQs", href: "/#faq" },
];
