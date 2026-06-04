import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICE_OPTIONS = [
  "Mutual Funds",
  "Portfolio Review",
  "Goal Planning",
  "Tax Saving (ELSS)",
  "NRI Investments",
  "Other",
];

export default function ContactSection() {
  return (
    <section className="bg-surface" id="contact">
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
                    <p className="font-semibold mb-1">Our Office</p>
                    <p className="text-primary-fixed-dim">
                      123 Financial District, Nariman Point,
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold-accent">call</span>
                  <p className="text-primary-fixed-dim">+91 22 4567 8900</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold-accent">mail</span>
                  <p className="text-primary-fixed-dim">advisory@nkswealth.com</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Form */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-8">
              Request a Callback
            </h3>
            <form action="/contact" className="space-y-6">
              {[
                { label: "Full Name", type: "text", name: "name" },
                { label: "Email Address", type: "email", name: "email" },
                { label: "Phone Number", type: "tel", name: "phone" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full border-b border-surface-variant py-2 focus:outline-none focus:border-primary transition-colors bg-transparent text-sm"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                  How can we help?
                </label>
                <select className="w-full border-b border-surface-variant py-2 focus:outline-none focus:border-primary transition-colors bg-transparent text-sm">
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-gold-accent text-white text-center py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-gold-accent/90 transition-colors mt-4"
              >
                Submit Request
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
