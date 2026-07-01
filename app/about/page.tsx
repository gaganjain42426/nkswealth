import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FounderQuote from "@/components/home/FounderQuote";
import { TEAM_MEMBERS } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About NKS Wealth | Our Story, Philosophy & Team",
  description:
    "Built on integrity, transparency, and results. Meet the NKS Wealth founding team and learn how we have guided high-net-worth families across India for over a decade.",
};

const PILLARS = [
  {
    icon: "balance",
    title: "Integrity",
    color: "border-t-primary",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    desc: "We operate as fiduciaries, placing your interests unequivocally ahead of our own. Our advice is unvarnished, objective, and structurally aligned with your long-term success.",
  },
  {
    icon: "visibility",
    title: "Transparency",
    color: "border-t-gold-accent",
    iconColor: "text-gold-accent",
    iconBg: "bg-gold-accent/10",
    desc: "Clarity is the bedrock of confidence. We provide absolute transparency in our fee structures, investment rationale, and potential risks, ensuring you are always fully informed.",
  },
  {
    icon: "monitoring",
    title: "Results",
    color: "border-t-growth-teal",
    iconColor: "text-growth-teal",
    iconBg: "bg-growth-teal/10",
    desc: "We measure our success strictly by the realisation of your goals. Through rigorous institutional research and dynamic asset allocation, we strive for superior risk-adjusted returns.",
  },
];

const WHY_CARDS = [
  {
    icon: "workspace_premium",
    title: "Deep Market Expertise",
    desc: "Our investment committee brings decades of experience navigating complex global markets, ensuring your portfolio is resilient across economic cycles.",
  },
  {
    icon: "diversity_3",
    title: "Personalised Concierge Care",
    desc: "You are never just an account number. We maintain low client-to-advisor ratios to guarantee responsive, proactive, and deeply customised service.",
  },
  {
    icon: "devices",
    title: "Modern Institutional Technology",
    desc: "We leverage cutting-edge financial technology to provide real-time, consolidated reporting, ensuring total visibility over your wealth architecture.",
  },
  {
    icon: "gavel",
    title: "Unbiased, Independent Advice",
    desc: "As AMFI Registered Mutual Fund Advisors, we have no proprietary products to push. Our recommendations are driven solely by what serves your mandate best.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-[600px] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #001456 60%, #1a2b6d)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2wR-phQwBboZqrSKixqj7ARbmCMc5luvIvp226Yi6liWSEHTl5MKjWDYt0BCrCKfH9HapbRTdTDXHUevUeF3WSx4MyjAjETnz_ulfK3GoPaC1-lGaHTYqbIyvG3cGqoslyIiBo3wd5yvfjFF8-dfG6da6mpIe2GqeBPDd2kNzRDch1LHkfvH1A5xB1dPRxYtHV15189KHbnuptob_OrzKPQl1Jq1dH6nr3I_rxCl6yp5On6TYmwiuv6OfwndzZhoGXVuEVfL6-uA"
            alt="NKS Wealth Office"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 md:px-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-accent mb-4">
              Our Heritage
            </p>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Rooted in{" "}
              <em className="text-gold-accent not-italic">Trust</em>,
              <br />
              Driven by Your Goals.
            </h1>
            <p className="text-lg text-white/80 max-w-lg">
              We provide bespoke financial strategies designed to preserve your
              legacy and accelerate your modern growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Story
            </p>
            <h2 className="font-playfair text-4xl font-semibold text-charcoal-text leading-tight">
              A Legacy of{" "}
              <em className="text-gold-accent not-italic">Family-Focused</em>{" "}
              Wealth Planning
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              NKS Wealth was founded on a singular premise: that true wealth
              management extends far beyond simple asset allocation. It requires
              a profound understanding of family dynamics, generational
              aspirations, and the unique footprint you wish to leave on the
              world.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              For over a decade, we have operated as a bespoke financial
              concierge for high-net-worth individuals and families. By
              stripping away institutional friction and focusing on direct,
              transparent counsel, we have built a practice where every strategy
              is intimately aligned with your personal definition of success.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="relative h-[480px] rounded-lg overflow-hidden shadow-indigo-medium group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_KDnqAnKLtSnCP2pjMdpAzadk-a_l9fkBsJJrNpviFuhbgK8nBXWC9UWEYwVtzzlgJ-SCyC9d019ngLQplr0O2gxKP18gJOYahsXeTVgid89AlvJqF1cB5UazgusTPNFO_-O3Uss-20EL4vmeGrU3YnrdKUzvH1lflv83rRqHAbHNA27TuhC7zfklRzb_j0yGi8S4Z7NrzuC8lnuK4UjU0hHJhA3PkTSPsKdpTcdnBM-banyyZhms9CBZcoRb5MoutQ-aLPKk-i4"
                alt="NKS Wealth team in boardroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface-container-low py-24 px-5 md:px-20">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Core Principles
            </p>
            <h2 className="font-playfair text-4xl font-semibold text-charcoal-text">
              Our Philosophy
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 80}>
                <div className={`bg-surface rounded-lg p-8 shadow-indigo-soft border border-charcoal-text/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-start border-t-4 ${pillar.color}`}>
                  <div className={`w-12 h-12 rounded-full ${pillar.iconBg} flex items-center justify-center mb-5`}>
                    <span className={`material-symbols-outlined ${pillar.iconColor}`}>
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal-text mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">
                    {pillar.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-5 md:px-20 max-w-[1280px] mx-auto">
        <ScrollReveal className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            The NKS Advantage
          </p>
          <h2 className="font-playfair text-4xl font-semibold text-charcoal-text">
            Why Choose Us
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WHY_CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 60}>
              <div className="group bg-surface p-8 rounded-lg shadow-indigo-soft border border-charcoal-text/5 hover:border-gold-accent/30 transition-colors duration-300 flex gap-5">
                <div className="mt-1 shrink-0">
                  <span className="material-symbols-outlined text-primary group-hover:text-gold-accent transition-colors duration-300">
                    {card.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-charcoal-text mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-surface-container py-24 px-5 md:px-20 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Our Team
            </p>
            <h2 className="font-playfair text-4xl font-semibold text-charcoal-text mb-4">
              Wealth Experts You Can Trust
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Meet the leadership driving our vision forward.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 100}>
                <article className="bg-surface rounded-lg p-3 shadow-indigo-soft border border-charcoal-text/5 group hover:-translate-y-1 transition-transform duration-300 h-full">
                  <div className="w-full aspect-[4/5] rounded overflow-hidden bg-surface-variant mb-4">
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      width={480}
                      height={600}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="px-2 pb-3">
                    <h3 className="font-playfair text-2xl font-semibold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold-accent mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <FounderQuote
        quote="True wealth is not merely the accumulation of capital, but the freedom and peace of mind it affords you and your family."
        author="Nikhil Shah"
        title="Founder, NKS Wealth"
      />
    </>
  );
}
