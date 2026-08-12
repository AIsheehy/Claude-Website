export type Differentiator = {
  title: string;
  description: string;
  icon: "compass" | "chat" | "drawing" | "shield";
};

export const differentiators: Differentiator[] = [
  {
    title: "Professional Planning & Building Expertise",
    description: "I have years of professional experience managing projects throughout London and the South.",
    icon: "compass",
  },
  {
    title: "Founder-Led Service",
    description:
      "You'll deal directly with Michael from your initial assessment through to submission — your single, direct point of contact throughout.",
    icon: "chat",
  },
  {
    title: "Design Built Around Your Ideas",
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
