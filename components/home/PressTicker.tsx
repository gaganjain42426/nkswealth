const PRESS_ITEMS = [
  '"NKS Wealth named top emerging distributor in Western India" — Financial Express',
  '"Nikhil Shah\'s views on navigating the current bull run" — CNBC Awaaz',
  '"How NKS Wealth is democratising HNI strategies" — Mint',
  '"NKS Wealth wins Best Boutique Wealth Firm 2025" — Economic Times',
];

export default function PressTicker() {
  const items = [...PRESS_ITEMS, ...PRESS_ITEMS];
  return (
    <section className="py-6 bg-primary overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker">
          {items.map((item, i) => (
            <span key={i} className="ticker-item font-playfair text-xl text-white">
              {item}
              <span className="text-gold-accent mx-8">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
