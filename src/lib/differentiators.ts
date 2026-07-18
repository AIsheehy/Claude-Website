export type Differentiator = {
  title: string;
  description: string;
  icon: "layers" | "arrow" | "chat" | "pin" | "clock";
};

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
