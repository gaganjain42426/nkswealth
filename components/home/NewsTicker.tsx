const TICKER_ITEMS = [
  "Sensex hits new all-time high amidst strong FII inflows.",
  "NKS Wealth announces new ESG-focused portfolio advisory.",
  "RBI maintains repo rate, signalling stable growth trajectory.",
  "Upcoming Webinar: Tax Planning for FY 2025-26. Register Now.",
  "NKS Wealth featured in Financial Express: Top Emerging Distributor.",
];

export default function NewsTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop
  return (
    <div className="bg-surface-container border-t border-surface-variant py-3 ticker-wrap">
      <div className="ticker">
        {items.map((item, i) => (
          <span key={i} className="ticker-item text-primary text-xs font-bold uppercase tracking-widest">
            {item}
            <span className="text-gold-accent mx-8">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
