export type Differentiator = {
  title: string;
  description: string;
  icon: "layers" | "chat" | "shield";
};

export const differentiators: Differentiator[] = [
  {
    title: "Deep Professional Experience",
    description:
      "Delivering complex projects from home improvements to large scale refurbishments so we have the knowledge to meet your needs.",
    icon: "layers",
  },
  {
    title: "Founder Led Service",
    description:
      "All work is handled directly by the company founder - so you get the care and dedication your project deserves.",
    icon: "chat",
  },
  {
    title: "One Fixed Price",
    description: "Everything you need, from initial advice to submission, with no hidden costs.",
    icon: "shield",
  },
];
