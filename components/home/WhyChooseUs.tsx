import ScrollReveal from "@/components/ui/ScrollReveal";

const REASONS = [
  {
    icon: "verified_user",
    title: "AMFI Registered",
    desc: "Fully compliant and regulated by the Association of Mutual Funds in India.",
  },
  {
    icon: "balance",
    title: "100% Unbiased",
    desc: "Product recommendations driven solely by merit and alignment with your goals.",
  },
  {
    icon: "person_search",
    title: "Personalised Planning",
    desc: "Bespoke strategies tailored to your unique risk appetite and financial objectives.",
  },
  {
    icon: "devices",
    title: "Digital-First",
    desc: "Seamless onboarding and real-time portfolio tracking through our client portal.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface" id="why-us">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4">
            The NKS Edge
          </h2>
          <p className="text-on-surface-variant text-lg">
            Why discerning investors trust us with their financial legacy.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 80} className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-fixed rounded-full flex items-center justify-center mb-5 text-primary">
                <span className="material-symbols-outlined text-3xl">{r.icon}</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                {r.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{r.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
