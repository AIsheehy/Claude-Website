export type Differentiator = {
  title: string;
  description: string;
  icon: "layers" | "arrow" | "chat" | "shield";
};

export const differentiators: Differentiator[] = [
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
    title: "One Team From Start To Finish",
    description:
      "Everything is managed by one experienced team, from your first survey to your planning submission.",
    icon: "layers",
  },
  {
    title: "Honest Advice Before You Commit",
    description:
      "We'll tell you if your proposal is realistic before you spend money on drawings or applications.",
    icon: "arrow",
  },
];
