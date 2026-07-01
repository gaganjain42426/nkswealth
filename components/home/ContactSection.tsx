import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/data/site";

export default function ContactSection() {
  return (
    <section className="bg-surface scroll-mt-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Info panel */}
        <div className="bg-primary text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=40')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-md">
            <ScrollReveal>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-5">
                Let&rsquo;s Discuss Your Financial Future.
              </h2>
              <p className="text-primary-fixed-dim mb-10 text-sm leading-relaxed">
                Schedule a complimentary consultation with our wealth experts
                today.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold-accent">location_on</span>
                  <div>
                    <p className="font-semibold mb-1">Registered Office</p>
                    <p className="text-primary-fixed-dim">
                      {SITE.legalName},
                      <br />
                      {SITE.address.line1},
                      <br />
                      {SITE.address.line2}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold-accent">call</span>
                  <p className="text-primary-fixed-dim">
                    {SITE.phonePrimary} / {SITE.phoneSecondary}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold-accent">mail</span>
                  <p className="text-primary-fixed-dim">
                    {SITE.emailNikhil}, {SITE.emailShubham}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Quick contact actions */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-3">
              Reach Us Directly
            </h3>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
              No forms, no waiting. Call, message us on WhatsApp, or drop an
              email and a dedicated advisor will get back to you.
            </p>
            <div className="space-y-4">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-growth-teal text-white px-6 py-4 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">chat</span>
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${SITE.phonePrimaryTel}`}
                className="flex items-center gap-4 w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">call</span>
                Call {SITE.phonePrimary}
              </a>
              <a
                href={`mailto:${SITE.emailPrimary}`}
                className="flex items-center gap-4 w-full border border-primary/20 text-primary px-6 py-4 rounded-lg font-semibold text-sm hover:border-gold-accent hover:text-gold-accent transition-colors"
              >
                <span className="material-symbols-outlined">mail</span>
                Email {SITE.emailPrimary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
