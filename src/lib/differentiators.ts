export type Differentiator = {
  title: string;
  description: string;
  icon: "compass" | "chat" | "drawing" | "shield";
};

export const differentiators: Differentiator[] = [
  {
    title: "Deep Professional Experience",
    description:
      "With years of professional experience managing projects across a range of industries, we have a proven track record of success for clients.",
    icon: "compass",
  },
  {
    title: "Founder-Led Service",
    description:
      "Single point of contact from initial enquiry right through to submission — you'll have a direct line to the founder the entire time to ensure first class service.",
    icon: "chat",
  },
  {
    title: "Design Built Around You",
    description:
      "We don't force a standard solution. We'll develop your ideas and advise on how to make them practical and planning-friendly.",
    icon: "drawing",
  },
  {
    title: "One Fixed Price",
    description: "Know what you're paying from the outset, with no unexpected professional fees.",
    icon: "shield",
  },
];
