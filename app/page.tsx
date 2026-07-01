import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import FoundersDesk from "@/components/home/FoundersDesk";
import ServicesGrid from "@/components/home/ServicesGrid";
import InvestorJourney from "@/components/home/InvestorJourney";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FounderQuote from "@/components/home/FounderQuote";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "NKS Wealth | Premium Wealth Management for HNIs",
  description:
    "AMFI-registered mutual fund distributor. Expert SIP, goal-based planning, NRI investments and insurance advisory with 20 years of market experience. Start your wealth journey today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <FoundersDesk />
      <ServicesGrid />
      <InvestorJourney />
      <WhyChooseUs />
      <FounderQuote
        quote="We don't just distribute products — we build long-term relationships built on trust, transparency, and results."
        author="Nikhil Shah"
        title="Founder, NKS Wealth"
      />
      <ContactSection />
    </>
  );
}
