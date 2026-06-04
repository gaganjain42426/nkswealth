import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ARTICLES } from "@/lib/data/insights";
import NewsletterForm from "@/components/insights/NewsletterForm";

export const metadata: Metadata = {
  title: "Insights Vault | Market Research & Financial Planning",
  description:
    "Expert perspectives on Indian equity markets, tax planning strategies, ESG investing, and personal finance from the NKS Wealth research desk.",
};

export default function InsightsPage() {
  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-container py-20 px-5 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{ backgroundImage: "radial-gradient(#C9A84C 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <ScrollReveal className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-growth-teal">
              Thought Leadership
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary">
              Knowledge That{" "}
              <em className="text-gold-accent not-italic">Compounds.</em>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Expert perspectives, market analysis, and strategic guides to help
              you navigate the complexities of wealth creation with clarity and
              confidence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="max-w-[1280px] mx-auto px-5 md:px-20 py-16">
          <ScrollReveal>
            <Link href={`/insights/${featured.id}`}>
              <div className="flex flex-col md:flex-row gap-6 bg-surface-container-lowest rounded-xl shadow-indigo-soft border border-charcoal-text/5 overflow-hidden group cursor-pointer hover:shadow-indigo-medium transition-shadow duration-300">
                <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] relative overflow-hidden">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-growth-teal text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-primary-container mb-3 block">
                    {featured.category}
                  </span>
                  <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4 group-hover:text-gold-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-outline">
                      By NKS Research Team • {featured.readTime}
                    </span>
                    <span className="material-symbols-outlined text-gold-accent group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </section>
      )}

      {/* Article Grid */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-20 pb-16 border-t border-on-surface/5 pt-8">
        <ScrollReveal className="flex items-center justify-between mb-10">
          <h3 className="font-playfair text-3xl font-semibold text-primary">
            Latest <em className="text-gold-accent not-italic">Perspectives</em>
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 80}>
              <Link href={`/insights/${article.id}`}>
                <article className="bg-surface-container-lowest rounded-lg p-4 shadow-indigo-soft border border-charcoal-text/5 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 hover:shadow-indigo-medium cursor-pointer group">
                  <div className="h-48 rounded overflow-hidden relative mb-4">
                    <Image
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-growth-teal mb-2 block">
                    {article.category}
                  </span>
                  <h4 className="font-playfair text-xl font-semibold text-primary mb-3 leading-tight group-hover:text-gold-accent transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-3 border-t border-on-surface/5 flex items-center justify-between">
                    <span className="text-xs text-outline">{article.date}</span>
                    <span className="material-symbols-outlined text-sm text-primary-container">
                      bookmark_border
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface-container py-20 px-5 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="material-symbols-outlined text-4xl text-gold-accent block mb-4">mail</span>
            <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
              Stay Ahead of the{" "}
              <em className="text-gold-accent not-italic">Curve</em>
            </h2>
            <p className="text-on-surface-variant text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our exclusive newsletter for weekly market insights,
              strategic advice, and updates from the NKS Wealth research desk.
            </p>
            <NewsletterForm />
            <p className="text-xs text-outline mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
