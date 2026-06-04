import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Our Team | NKS Wealth",
  description:
    "Meet Nikhil Shah, Shubham Shah, and Pradhuman Kumar Shah — the founding team behind India's boutique wealth management firm with decades of combined experience.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-5 md:px-20 max-w-[1280px] mx-auto text-center">
        <ScrollReveal>
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-5 max-w-3xl mx-auto leading-tight">
            The Minds Behind Your{" "}
            <em className="text-gold-accent not-italic">Financial Success.</em>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Decades of institutional expertise, dedicated entirely to protecting
            and growing your legacy through bespoke wealth management strategies.
          </p>
        </ScrollReveal>
      </section>

      {/* Team Cards */}
      <section className="pb-20 px-5 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 100}>
              <article className="bg-surface-container-lowest rounded-lg p-3 shadow-indigo-soft border border-charcoal-text/5 group hover:-translate-y-1 transition-transform duration-300">
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
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedIn}
                    className="inline-flex items-center text-primary hover:text-gold-accent transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="pb-20 px-5 md:px-20 max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="bg-surface-container-high rounded-xl p-16 text-center border border-charcoal-text/5 shadow-indigo-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            <h2 className="font-playfair text-3xl font-semibold text-primary mb-4 relative z-10">
              Join Our Team of Experts
            </h2>
            <p className="text-on-surface-variant text-sm mb-8 max-w-xl mx-auto leading-relaxed relative z-10">
              We are always looking for exceptional talent to help shape the
              future of wealth management. If you share our commitment to
              excellence and integrity, we&rsquo;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="relative z-10 inline-block bg-transparent text-primary font-bold text-sm px-8 py-3 rounded border border-gold-accent hover:bg-gold-accent hover:text-white transition-all duration-300"
            >
              View Open Positions
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
