import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TeamPreview from "@/components/home/TeamPreview";
import FounderQuote from "@/components/home/FounderQuote";
import InsightsSection from "@/components/home/InsightsSection";
import SIPCalculator from "@/components/home/SIPCalculator";
import RecognitionBar from "@/components/home/RecognitionBar";
import PressTicker from "@/components/home/PressTicker";
import ContactSection from "@/components/home/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NKS Wealth | Premium Wealth Management for HNIs",
  description:
    "AMFI-registered mutual fund distributor. Expert SIP, ELSS, goal-based planning and NRI investment advisory with 15+ years experience. Start your wealth journey today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />

      {/* Who Are We */}
      <section className="py-24 bg-surface" id="about">
        <div className="max-w-[1280px] mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary">
                Navigating the complexities of wealth with clarity and purpose.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100} className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
              <p>
                At NKS Wealth, we believe that true wealth is not just about
                accumulating assets, but about securing the freedom to live life
                on your terms. For over a decade, we have partnered with
                individuals, families, and institutions to navigate the
                intricacies of the financial markets.
              </p>
              <p>
                Our philosophy is rooted in deep market research, a disciplined
                approach to risk management, and an unwavering commitment to
                your long-term goals. We do not chase short-term fads; instead,
                we build resilient portfolios designed to weather market cycles.
              </p>
              <p>
                As an AMFI-registered mutual fund distributor, our advice is
                always aligned with your best interests.
              </p>
              <Link
                href="/about"
                className="inline-block text-primary font-bold text-sm uppercase tracking-wider border-b border-primary pb-0.5 hover:text-gold-accent hover:border-gold-accent transition-colors mt-2"
              >
                Learn More About Us
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <TeamPreview />
      <FounderQuote
        quote="We don't just distribute mutual funds — we build long-term relationships built on trust, transparency, and results."
        author="Nikhil Shah"
        title="Founder, NKS Wealth"
      />
      <InsightsSection />
      <SIPCalculator />
      <RecognitionBar />
      <PressTicker />

      {/* Careers CTA */}
      <section className="py-20 bg-surface-container text-center">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-semibold text-primary mb-4">
              Build Your Career With Us
            </h2>
            <p className="text-on-surface-variant text-lg mb-8">
              We are always looking for passionate, driven individuals to join
              our growing team of wealth experts.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-primary text-primary font-bold text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-primary hover:text-white transition-colors"
            >
              View Open Positions
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
