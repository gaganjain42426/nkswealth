export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: "sip",
    icon: "trending_up",
    title: "Systematic Investment Plan",
    description:
      "Build wealth progressively through disciplined, automated investments. Benefit from rupee-cost averaging and the power of compounding over time.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcJaE5gSWHILBk_yjmtpSY_jvAhxkApw5XM0H_ms8jyECz8kaRkHy8QArfkqk2E_wc7ICovyLmZSSLhwbcv8A0Ic0DnniS_wt98tRTHpjIJYRKxnxd5TqWf2SyE8l1OAecP3myp4MPoj6WNVQuj4-FPOeSmku6HUB-m3ZLYOSDRDVKkny_jaHbPgCFdcczYPfwrFsbOFP9to1dGi8ZBxE99gEOVXffvkN6ZMi-7q5W5Rhi03fuzuCJ3lgMX6aX2FjbenUrGH17VZQ",
    imageAlt: "Systematic Investment Plan",
  },
  {
    id: "lumpsum",
    icon: "account_balance_wallet",
    title: "Lump Sum Investments",
    description:
      "Strategically deploy large capital inflows into curated portfolios designed for optimal growth and risk-adjusted returns.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzwiSZPJiFy-vg42xhulgNA04sd5esUn6aE_7BpZqgEGipXzxdN2MomKXDhfHPvIdDCj5P0I7VCdDAwJe_9HvrOJn4Fsc7fET3AkqSw5OoluMf02Rgk0XJBgQaUE_yYHshdY3CGIFb2c4HF_xbvGE-RzWZVLEfsJ0VGl09lMHVhqhopwJ5Lzo5HJXH8A75GvUPHKDOM2hKNEmk1YKGz3vNsgaoLDWpEPvOz0Apnp77tEl0Mq-5sm3Wy3AGNXAdsZ87XKPBvdSnXek",
    imageAlt: "Lump Sum Investments",
  },
  {
    id: "elss",
    icon: "savings",
    title: "Tax Saving (ELSS)",
    description:
      "Optimize your tax liabilities under Section 80C while participating in equity market growth through carefully selected ELSS funds.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwSd6pzQeJ7XqBB_OgAtQWPeIN2nCxnePTt4uu4w8CxTqVNf6evC9x2bCe-NHbmkZwXMda9mM983aiJlunIrem3irBsGRUj3Qf16LV04ywJZMixfLYVE_jLhOKK55XxZG8BnnFc6uydQLQ-mde8HFWFo0Ox5HWOgFZQ9QEjGjLAg2l0FMjPDpwRhvoB2NhdEPvt0-POB99c-HqXJiEgLDStZaYDQS3pg6rLNFAxDZCdWQHu2vXHSnJUnYwKsKn8jfYXb7wd6K8jxM",
    imageAlt: "Tax Saving ELSS",
  },
  {
    id: "goal-based",
    icon: "flag",
    title: "Goal-Based Planning",
    description:
      "Bespoke strategies mapped to specific life events — retirement, children's education, home purchase, and legacy planning.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsOVYZSXoO33dS_pygew7xya0pFlP6NK5Xpj-HLa5ByJPsb6qg3dDU64qw16c6I_JfLWclaXpQ414ZkN5Rfi8UsqxCmyz2S7nTXA9eoypycZWgMHl34m0LqQ1ab2coQsB16jylzix11tatmIDvMAgD1ttwER8-QRNhqtbsq_fpDS5lGoeoulbW7YuudMovRuDyBoqsUzc_RTkQIyV4ZT7-h6Q5HhaD7Ij9uuVIoE1RtjHedyJJNzpWfEd8h3y03HpDavKPWK_Tn_w",
    imageAlt: "Goal-Based Financial Planning",
  },
  {
    id: "nri",
    icon: "flight_takeoff",
    title: "NRI Investments",
    description:
      "Specialised advisory for Non-Resident Indians seeking to participate in the Indian growth story, navigating regulatory frameworks seamlessly.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Zd6EkU1jC8awPeAuLExxixIhcFu8c-grV61jaY5NpoNSk5AZMQr5sY1ozOLGx-xiWxM7SUyOL-iozARL0uIvz8cx-4ZXUdimS5Ahv8Zlsz_WvAgb5nIop9yRdHheadzu-TS-CXHIpvbzG3wwG4HeybIiaqb1aBpYd8gNKO_EWs92nE3bJnWoKDaTKjf4bt-UdBrdwF85w8-bNwIkyn_1-af33WkniorjxYQUWuArFMGQKvU6v4XZFVvpnuHHl9Dll3abSs-nmLc",
    imageAlt: "NRI Investments",
  },
  {
    id: "portfolio-review",
    icon: "analytics",
    title: "Portfolio Review",
    description:
      "Comprehensive diagnostic analysis of your existing investments to identify overlaps, optimise asset allocation, and enhance performance.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgf8iBACH-17CVFak3rmFCFYN416GuHZySf0y_WtrecbWwYPAshHoufe3GqsuMUqSNCQnFhvvd24zXFKTCo6gSld-vCqbgKSJE3gMTMPth1QYfe84cCQTw4d84hJFVoC0xJvRKe7tHS8VnV1Didx6AyCvUVQ7eJimTP5IcjKFXTSxnzpqvhEpVU6fQ5dm1rIEcR_q5d_6xT1-OMI_FpEYswp2CCSyCSjtBt9yJSbvdP2Wx_BkOhbkVwFhn31-8reDoUsQ4IsWX1so",
    imageAlt: "Portfolio Review",
  },
];

export const PROCESS_STEPS = [
  {
    icon: "search",
    title: "Discovery",
    description:
      "Understanding your current financial landscape, risk tolerance, and future aspirations.",
  },
  {
    icon: "architecture",
    title: "Strategy Design",
    description:
      "Crafting a bespoke asset allocation blueprint tailored to your specific milestones.",
  },
  {
    icon: "rocket_launch",
    title: "Execution",
    description:
      "Seamless implementation of the selected investment vehicles with precision.",
  },
  {
    icon: "monitoring",
    title: "Regular Monitoring",
    description:
      "Continuous review and tactical rebalancing to keep your portfolio aligned with goals.",
  },
];
