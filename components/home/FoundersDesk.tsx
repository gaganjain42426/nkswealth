import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/lib/data/team";

const NIKHIL = TEAM_MEMBERS.find((m) => m.id === "nikhil-shah")!;

export default function FoundersDesk() {
  return (
    <section className="py-24 bg-surface scroll-mt-24" id="about">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-indigo-medium bg-primary">
          {/* Photo with experience badge */}
          <ScrollReveal className="relative min-h-[420px] lg:min-h-[520px]">
            <Image
              src={NIKHIL.imageSrc}
              alt={NIKHIL.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            {/* Vertical EXPERT label */}
            <span
              className="absolute top-8 left-6 font-playfair font-bold text-white/15 text-6xl md:text-7xl tracking-tight select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              EXPERT
            </span>
            {/* Experience badge */}
            <div className="absolute bottom-6 right-6 bg-surface/95 backdrop-blur rounded-xl px-5 py-3 shadow-indigo-soft text-center">
              <p className="font-playfair text-3xl font-bold text-primary leading-none">
                20<span className="text-gold-accent">+</span>
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">
                Years Of Experience
              </p>
            </div>
          </ScrollReveal>

          {/* Founders Desk copy */}
          <ScrollReveal delay={120} className="p-10 md:p-14 flex flex-col justify-center text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-accent mb-3">
              Founders Desk
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              Navigating wealth with clarity and purpose.
            </h2>
            <div className="space-y-4 text-primary-fixed-dim text-sm md:text-base leading-relaxed">
              <p>
                At NKS Invest, we believe that true wealth is not just about
                accumulating assets, but about securing the freedom to live life
                on your terms. For over two decades, we have partnered with
                individuals, families, and institutions to navigate the
                intricacies of the financial markets.
              </p>
              <p>
                Our philosophy is rooted in deep market research, a disciplined
                approach to risk management, and an unwavering commitment to your
                long-term goals. As an AMFI-registered mutual fund distributor,
                our advice is always aligned with your best interests.
              </p>
            </div>
            <div className="mt-8">
              <p className="font-playfair text-xl font-semibold text-white">
                {NIKHIL.name}
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                {NIKHIL.role}
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-7 text-xs font-bold uppercase tracking-wider text-white border-b border-gold-accent pb-0.5 w-fit hover:text-gold-accent transition-colors"
            >
              Learn More About Us
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
