export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  {
    id: "market-outlook-2026",
    category: "Market Commentary",
    title: "Market Outlook 2026",
    excerpt:
      "An in-depth analysis of global macroeconomic trends, anticipated regulatory shifts, and strategic asset allocation strategies to protect and grow your portfolio.",
    date: "Nov 1, 2025",
    readTime: "10 Min Read",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMAp5_CqDbC8G2WCF2wjvmTBrII3yRFcGd0Q9a3JlxT5LJ6IhcCr1eHcQuR7-4CNxuzytu-SGmqZBzpkI34ajn8sH_FJnmKASKvkfpdYfVLRqArDwTpKu2JtYqvTeO8KzOYto35UAovQa0n1YbOQoKoMrXr0Tklb0dlyoFGfMLgjVYBcwBCuYvoBa9pEdGXvuIqq1B79KcFQVxXGY_I4RQX_O-laodslWRC5VgqIU6xAHf6xkH9CFuAXUFKRpOVmWC87DOZeeY-iw",
    imageAlt: "Market Outlook 2026",
    featured: true,
  },
  {
    id: "power-of-consistent-investing",
    category: "SIP Guides",
    title: "The Power of Consistent Investing",
    excerpt:
      "Understanding how Systematic Investment Plans leverage rupee cost averaging to build long-term wealth despite market volatility.",
    date: "Oct 12, 2025",
    readTime: "6 Min Read",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcg5UF_DeBJY3LbfgwYcjGX8CXhwOYp64ipCRwEba4e0tsnvqHdCXAUt8wUhjz6CQROIyGV-MUVJ6d1gnOsb9YhuYZB2kdFnmG7wrKT7ykgSqqDmUprv6ueeY72CyTuKzABYbJkSt-3WnElLTRqhKfw0Bt8eoMLJvNrcswq3mgUEM405RNceAK2eghGdnPSL3CrlsqmCwU_UyxWrX0cZ2xzWOY4Z9qTqvy7hh1yyxNymo5loPWKlQALGdRvR420QbFBcr4siRUPqE",
    imageAlt: "The Power of Consistent Investing",
  },
  {
    id: "optimizing-tax-liabilities",
    category: "Tax Planning",
    title: "Optimising Your Tax Liabilities",
    excerpt:
      "Strategic approaches to legally minimising your tax burden while maximising investment returns for the current fiscal year.",
    date: "Oct 5, 2025",
    readTime: "7 Min Read",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5djc2xvsWqbm4w_ZnR4lgvv7eVPu1i-e9q5KQInpkoOi4COhZQ4NoWDzANcLTJ-WP94LqecZFf_qK86GF4RT_vtS6qyBRy9aEcHlmzCO6NCwyrhloYh_5kEfcRRiKES_0MZ8tmHkKU9WRpcELMvsU9w3d-ms_i694QgdIeTsyNZhLGwNwx3pMb_QKsQtvonCpgQB3xR0RxXo_VpukSfCwWsjlLCu6PhO7WMuR5AVmNqAxd45e8JdcY1zLL40wl2BYtloxtRQLXes",
    imageAlt: "Tax Planning Strategies",
  },
  {
    id: "navigating-short-term-volatility",
    category: "Market Commentary",
    title: "Navigating Short-Term Volatility",
    excerpt:
      "Why maintaining perspective during market corrections is crucial for achieving your long-term financial objectives.",
    date: "Sep 28, 2025",
    readTime: "5 Min Read",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfaTXlm_3bZRW9fhTX3pV0qvXSY-t4sS7fSj0V8xysmG2R_mxoEM3BZF0X9_e0mGcX-nslTMyBxRJbNmC7YspjxJ74pNwI_v1qhlAHkO_JnmnPH64RO5ibXDQIzuYVVez10lSxODBJ_Jr9hW_MX0Hpgrgu-w88VyD5OVqPYgqV70-nu7CERRRrzan_aiKIJ5Qqmz4cbIofXpCj-JH_3smC4qfjLpXLCQkjE1L-2iPPYXBzjl-K29vcKANrYFOqs2vKGN7Ok1hJImQ",
    imageAlt: "Navigating Market Volatility",
  },
];
