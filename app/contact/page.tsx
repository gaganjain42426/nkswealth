import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FAQAccordion from "@/components/contact/FAQAccordion";
import { SITE } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact NKS Wealth | Schedule a Free Consultation",
  description:
    "Schedule a complimentary consultation with a dedicated wealth advisor. Jaipur office and virtual meetings available.",
};

const CONTACT_ITEMS = [
  {
    icon: "location_on",
    label: "Registered Office",
    value: `${SITE.legalName},\n${SITE.address.line1},\n${SITE.address.line2}`,
  },
  {
    icon: "call",
    label: "Direct Line",
    value: `${SITE.phonePrimary} / ${SITE.phoneSecondary}`,
  },
  {
    icon: "mail",
    label: "Email Connect",
    value: `${SITE.emailNikhil}, ${SITE.emailShubham}`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-5 md:px-20 max-w-[1280px] mx-auto text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(0,20,86,0.04)_0%,_transparent_70%)]" />
        <ScrollReveal>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-5 max-w-4xl mx-auto leading-tight">
            Let&rsquo;s Start Your{" "}
            <em className="text-gold-accent not-italic">Wealth Journey.</em>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our advisory team to discuss bespoke financial
            strategies tailored to your legacy goals and long-term vision.
          </p>
        </ScrollReveal>
      </section>

      {/* Split Layout */}
      <section className="pb-20 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info + Map */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ScrollReveal>
              <h2 className="font-playfair text-3xl font-semibold text-primary mb-7">
                Reach Out Directly
              </h2>
              <div className="flex flex-col gap-6">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.icon} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-charcoal-text leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal delay={80}>
              <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-indigo-soft border border-on-surface/5 group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDleGkEzkfX6RbT8-TiIpiH3DBxLbqLX6iS6HALzsiYqnQw2XkpsOYmOgB7HNQQMA-DU3ymMFRlFjfUgB590QFW1y3RDMLl7nBc64kF-5VW2Q6nL72pUzG332d1h4Z2-kVcWzC50l1V21bs-hpFAnwf-Yw_Aii7NHs4bqIlfqEgK0O5SNdufMfSfvzygeDmLsTVNgCUAEdkUYenr-OZteYW3-lPcCndS8zZvnRraidg46DbpnAhUi6jjpZYpOBGoCaUvBDwLtYjBBY"
                  alt="NKS Wealth Jaipur Office Location"
                  fill
                  className="object-cover filter grayscale opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-primary/5" />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur px-3 py-1.5 rounded shadow-sm border border-charcoal-text/10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-gold-accent text-lg">push_pin</span>
                  <span className="text-xs font-bold text-charcoal-text">NKS Headquarters</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Direct contact actions */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={60}>
              <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-indigo-soft border border-charcoal-text/5">
                <h3 className="font-playfair text-3xl font-semibold text-primary mb-2">
                  Talk to an Advisor
                </h3>
                <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                  No lengthy forms. Reach us the way you prefer — call, WhatsApp,
                  or email — and a dedicated advisor will get back to you.
                </p>
                <div className="space-y-4">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 w-full bg-growth-teal text-white px-6 py-5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-2xl">chat</span>
                    <span>
                      <span className="block text-base">Chat on WhatsApp</span>
                      <span className="block text-xs font-normal opacity-90">
                        Fastest way to reach us
                      </span>
                    </span>
                  </a>
                  <a
                    href={`tel:${SITE.phonePrimaryTel}`}
                    className="flex items-center gap-4 w-full bg-primary text-white px-6 py-5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-2xl">call</span>
                    <span>
                      <span className="block text-base">Call an Advisor</span>
                      <span className="block text-xs font-normal opacity-90">
                        {SITE.phonePrimary} / {SITE.phoneSecondary}
                      </span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${SITE.emailNikhil}`}
                    className="flex items-center gap-4 w-full border border-primary/20 text-primary px-6 py-5 rounded-lg font-semibold hover:border-gold-accent hover:text-gold-accent transition-colors"
                  >
                    <span className="material-symbols-outlined text-2xl">mail</span>
                    <span>
                      <span className="block text-base">Email Us</span>
                      <span className="block text-xs font-normal opacity-70">
                        {SITE.emailNikhil}, {SITE.emailShubham}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-5 md:px-20">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
              Onboarding FAQ
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Common questions about starting your relationship with NKS Wealth.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
