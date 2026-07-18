export type Differentiator = {
  title: string;
  description: string;
  icon: "layers" | "arrow" | "chat" | "pin" | "clock" | "shield" | "house";
};

// Real differentiators from the existing site — founder-led, satisfaction
// guarantee, and range of project experience.
export const founderLedDifferentiators: Differentiator[] = [
  {
    title: "Founder-led, start to finish",
    description:
      "Your project is handled directly by Michael, the company founder — not handed off to a case worker you've never spoken to.",
    icon: "chat",
  },
  {
    title: "A satisfaction guarantee that means something",
    description:
      "We're confident enough in the service that if you're not happy with it, you don't pay.",
    icon: "shield",
  },
  {
    title: "Experience across the full range of projects",
    description:
      "From single-room home improvements to substantial refurbishments, we've handled the kind of projects planning departments see every day.",
    icon: "house",
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "One team, not a chain of subcontractors",
    description:
      "Your survey, drawings, planning statement and submission are handled by the same team throughout — not passed between separate firms who've never spoken to each other.",
    icon: "layers",
  },
  {
    title: "A straight answer before you commit",
    description:
      "If we don't think a scheme is likely to be approved, we'll tell you at the advice stage — before you've spent anything on drawings, not after.",
    icon: "arrow",
  },
  {
    title: "Every council query, answered directly",
    description:
      "When a planning officer has a question, it comes to us and we deal with it — you're never relaying messages between a case officer and a project manager.",
    icon: "chat",
  },
  {
    title: "Local policy, council by council",
    description:
      "Planning policy is interpreted differently across every borough and Home Counties council we work in. We work within the specifics of your local authority, not a generic national playbook.",
    icon: "pin",
  },
  {
    title: "Speed, without cutting corners",
    description:
      "A measured survey within 7 days, a full application submitted within 14, and unlimited revisions and support along the way — at no extra cost.",
    icon: "clock",
  },
];
