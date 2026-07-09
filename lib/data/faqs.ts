export interface FAQ {
  id: string;
  question: string;
  /** One or more paragraphs. */
  answer: string[];
}

export const FAQS: FAQ[] = [
  {
    id: "minimum-investment",
    question: "What is the minimum investment required?",
    answer: [
      "There is no minimum investment requirement to begin your journey with NKS Invest.",
      "Whether you're a young professional starting your first SIP, a business owner managing surplus capital, or a family seeking comprehensive wealth planning, our advice is tailored to your unique financial situation.",
      "We build personalized investment and protection strategies based on your income, expenses, existing assets, financial responsibilities, risk appetite, and long-term goals — not on the size of your portfolio. As your wealth grows, your financial plan evolves with you.",
    ],
  },
  {
    id: "initial-consultation",
    question: "How does the initial consultation work?",
    answer: [
      "The initial meeting is an exploratory dialogue. We focus on understanding your financial history, current obligations, risk tolerance, and long-term aspirations. There is no obligation or fee for this introductory phase.",
    ],
  },
  {
    id: "unbiased-advice",
    question: "How do you keep your advice unbiased?",
    answer: [
      "As AMFI Registered Mutual Fund Advisors, we have no proprietary products to push. Our recommendations are driven solely by what serves your mandate best, with full disclosure of how we are compensated.",
    ],
  },
  {
    id: "onboarding-time",
    question: "How long does onboarding take?",
    answer: [
      "Once you decide to proceed, the full onboarding process — including KYC verification, risk profiling, and strategy design — typically takes 5–7 business days. Your dedicated relationship manager will guide you through every step.",
    ],
  },
];
