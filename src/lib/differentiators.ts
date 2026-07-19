export type Differentiator = {
  title: string;
  description: string;
  icon: "layers" | "arrow" | "chat" | "pin" | "clock";
};

export const differentiators: Differentiator[] = [
  {
    title: "One team from start to finish.",
    description:
      "You'll deal with the same people throughout your project. Your survey, drawings, planning statement and submission are all handled together—not passed between separate companies who have never worked together.",
    icon: "layers",
  },
  {
    title: "Honest advice before you spend a penny on drawings.",
    description:
      "If we don't believe your proposal has a realistic chance of approval, we'll tell you at the advice stage—not after you've invested time and money.",
    icon: "arrow",
  },
  {
    title: "Stress Free Correspondence",
    description:
      "Planning officers speak directly with us. We deal with every query, request and amendment, keeping your application moving and keeping you updated every step of the way while you get on with your life.",
    icon: "chat",
  },
  {
    title: "Everything tailored to you",
    description:
      "What works in Bromley may not work in Barking. Every application is prepared around the policies and priorities of your local authority in line with your goals—not a generic national template.",
    icon: "pin",
  },
  {
    title: "Fast where it matters. Thorough where it counts.",
    description:
      "Measured survey within 7 days. Application submitted within 14. Unlimited revisions, updates and support included throughout.",
    icon: "clock",
  },
];
