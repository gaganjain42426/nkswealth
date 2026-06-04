export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: "minimum-investment",
    question: "What is the minimum investment required?",
    answer:
      "Our advisory services are tailored for high-net-worth individuals. We typically require a minimum portfolio size of ₹5 Crores to ensure we can provide the depth of service and bespoke strategy our clients expect.",
  },
  {
    id: "initial-consultation",
    question: "How does the initial consultation work?",
    answer:
      "The initial meeting is an exploratory dialogue. We focus on understanding your financial history, current obligations, risk tolerance, and long-term aspirations. There is no obligation or fee for this introductory phase.",
  },
  {
    id: "fiduciary",
    question: "Are your advisors fiduciaries?",
    answer:
      "Yes. As SEBI Registered Investment Advisers, we operate strictly under a fiduciary standard. This means we are legally and ethically obligated to place your financial interests above our own in all recommendations.",
  },
  {
    id: "onboarding-time",
    question: "How long does onboarding take?",
    answer:
      "Once you decide to proceed, the full onboarding process — including KYC verification, risk profiling, and strategy design — typically takes 5–7 business days. Your dedicated relationship manager will guide you through every step.",
  },
];
