export type Differentiator = {
  title: string;
  description: string;
  icon: "layers" | "arrow" | "chat" | "shield";
};

export const differentiators: Differentiator[] = [
  {
    title: "One Experienced and Passionate Team",
    description:
      "You'll work with one experienced, passionate team from your first survey through to your planning submission — invested in getting your project right.",
    icon: "layers",
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "We'll work closely with you throughout the process, listening to your ideas and refining the design until you're completely happy.",
    icon: "chat",
  },
  {
    title: "One Fixed Price",
    description: "Everything you need, from initial advice to submission, with no hidden costs.",
    icon: "shield",
  },
  {
    title: "Honest Advice Before You Commit",
    description:
      "We'll tell you if your proposal is realistic before you spend money on drawings or applications.",
    icon: "arrow",
  },
];
