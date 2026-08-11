export type Differentiator = {
  title: string;
  description: string;
  icon: "compass" | "chat" | "drawing" | "shield" | "scale";
};

export const differentiators: Differentiator[] = [
  {
    title: "Professional Planning & Building Expertise",
    description:
      "Your project is assessed with practical construction knowledge as well as planning considerations.",
    icon: "compass",
  },
  {
    title: "Founder-Led Service",
    description: "You'll deal directly with Michael from your initial assessment through to submission.",
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
  {
    title: "We Deal With the Council",
    description: "We prepare, submit and manage the application on your behalf.",
    icon: "scale",
  },
];
