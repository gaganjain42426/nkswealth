import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROCESS_STEPS } from "@/lib/data/services";

export default function InvestorJourney() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <ScrollReveal className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
            Methodology
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary">
            The Investor Journey
          </h2>
        </ScrollReveal>

        <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-outline-variant/30 z-0" />
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal
              key={step.title}
              delay={i * 80}
              className="relative z-10 flex flex-col items-center text-center md:w-1/4 px-4"
            >
              <div className="w-16 h-16 rounded-full bg-surface border border-gold-accent/50 shadow-indigo-soft flex items-center justify-center mb-5 text-primary">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <h4 className="font-playfair text-xl font-semibold text-primary mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
