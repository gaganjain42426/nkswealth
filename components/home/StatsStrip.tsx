import ScrollReveal from "@/components/ui/ScrollReveal";

const STATS = [
  { value: "₹500", suffix: "Cr+", label: "Assets Under Management" },
  { value: "1200", suffix: "+", label: "Satisfied Investors" },
  { value: "15", suffix: "Yrs", label: "Market Experience" },
  { value: "100", suffix: "%", label: "Unbiased Advice" },
];

export default function StatsStrip() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-fixed-dim/20">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
                {stat.value}
                <span className="text-gold-accent">{stat.suffix}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
