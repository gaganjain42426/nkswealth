import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-surface-container scroll-mt-24" id="services">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4">
            Comprehensive Wealth Solutions
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Tailored investment strategies designed to protect and grow your
            wealth across generations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 60}>
              <div className="group relative overflow-hidden rounded-lg min-h-[26rem] flex flex-col justify-end">
                {/* Background image */}
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/30" />

                {/* Always-visible content */}
                <div className="relative p-7 text-white">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-accent mb-3">
                    <span className="material-symbols-outlined text-lg">
                      {service.icon}
                    </span>
                    {service.title}
                  </span>
                  <h3 className="font-playfair text-2xl font-semibold mb-3 leading-snug">
                    {service.tagline}
                  </h3>
                  <p className="text-sm text-primary-fixed-dim leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white border-b border-gold-accent pb-0.5 hover:text-gold-accent transition-colors"
                  >
                    {service.cta}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
