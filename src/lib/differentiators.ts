export type Differentiator = {
  title: string;
  description: string;
  icon: "layers" | "arrow" | "chat" | "shield";
};

export const differentiators: Differentiator[] = [
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
  {
    title: "We Deal With The Council",
    description:
      "We prepare your application, submit it and handle all communication with the council on your behalf.",
    icon: "chat",
  },
  {
    title: "One Fixed Price",
    description: "Everything you need, from initial advice to submission, with no hidden costs.",
    icon: "shield",
  },
];
