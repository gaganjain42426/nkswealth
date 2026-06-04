import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-surface-container" id="services">
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
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                  <h3 className="font-playfair text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
