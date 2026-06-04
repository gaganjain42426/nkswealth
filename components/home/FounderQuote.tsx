import ScrollReveal from "@/components/ui/ScrollReveal";

interface FounderQuoteProps {
  quote: string;
  author: string;
  title: string;
}

export default function FounderQuote({ quote, author, title }: FounderQuoteProps) {
  return (
    <section className="py-20 bg-[#FDFBF7] border-y border-surface-variant">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <ScrollReveal>
          <div className="border-l-4 border-gold-accent pl-8 md:pl-12 py-4">
            <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary italic leading-tight mb-6">
              &ldquo;{quote}&rdquo;
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              — {author},{" "}
              <span className="font-normal normal-case">{title}</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
