import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/lib/data/team";

export default function TeamPreview() {
  return (
    <section className="py-24 bg-surface-container" id="team">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4">
            Wealth Experts You Can Trust
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Meet the leadership driving our vision forward.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 100}>
              <div className="bg-surface rounded-lg overflow-hidden shadow-indigo-soft">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-accent mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-on-surface-variant">{member.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link
            href="/team"
            className="inline-block border border-primary text-primary text-sm font-semibold px-8 py-3 rounded hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Meet the Full Team
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
