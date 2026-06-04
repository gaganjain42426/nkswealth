import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES, PROCESS_STEPS } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Wealth Management Services | NKS Wealth",
  description:
    "SIP, lump sum, ELSS tax saving, goal-based planning, NRI investments, and portfolio review — complete wealth solutions tailored for your financial goals.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="max-w-xl">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-5 leading-tight">
              Tailored Financial Solutions for Every{" "}
              <em className="text-gold-accent not-italic">Milestone</em>.
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We navigate the complexities of wealth management with precision
              and care, ensuring your financial strategy aligns perfectly with
              your life&rsquo;s ambitions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="relative h-[480px] rounded-xl overflow-hidden shadow-indigo-medium">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANIvIjg6yoghPWr5DVi0-AKwEDml15mS6LKEmMwX8EWCjKSNM2dDuT_nfgw1OefzfD0nwmMfw0853HXJgGnjXfycCY-r1SOcfoEdqadbbD_47Bakrk_EoBytBErET8j6ymFRapo1NLQbm-eDPVgZ0T6OPm-LXX-mIDl6fFs9uEzmVpWm25j_1TlQwwNCbnEvrPjWLXI6n7AJc6gzR6dhgs5_nld9sZgAHOAF5jGrMLg1_D2XFWu2pX5ns-o2Z492nETpbyU7Eb_hk"
                alt="Wealth Management Advisory"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <ScrollReveal className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
              Our Expertise
            </span>
            <h2 className="font-playfair text-4xl font-semibold text-primary">
              Comprehensive Wealth Strategy
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 60}>
                <div className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/10 shadow-indigo-soft hover:-translate-y-1 hover:border-gold-accent/40 transition-all duration-300 group flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed flex-grow mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-accent hover:text-primary transition-colors mt-auto border-b border-transparent hover:border-primary pb-0.5 w-fit"
                  >
                    Get Started
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 max-w-[1280px] mx-auto px-5 md:px-20">
        <ScrollReveal className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent block mb-2">
            Methodology
          </span>
          <h2 className="font-playfair text-4xl font-semibold text-primary">
            The Investor Journey
          </h2>
        </ScrollReveal>

        <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-outline-variant/30 z-0" />
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 80} className="relative z-10 flex flex-col items-center text-center md:w-1/4 px-4">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest border border-gold-accent/50 shadow-indigo-soft flex items-center justify-center mb-5 text-primary">
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
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-container relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 md:px-20 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-semibold text-on-primary mb-5">
              Ready to take the first step?
            </h2>
            <p className="text-on-primary/80 text-lg mb-10 leading-relaxed">
              Schedule a complimentary review to align your current portfolio
              with our sophisticated growth strategies.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold-accent text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-gold-accent/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Free Portfolio Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
