import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ARTICLES } from "@/lib/data/insights";
import NewsletterForm from "@/components/insights/NewsletterForm";

export default function InsightsSection() {
  const articles = ARTICLES.filter((a) => !a.featured).slice(0, 3);

  return (
    <section className="py-24 bg-surface" id="insights">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-3">
              Knowledge That Compounds
            </h2>
            <p className="text-on-surface-variant text-lg">
              Latest insights from our research desk.
            </p>
          </div>
          <Link
            href="/insights"
            className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary pb-0.5 hover:text-gold-accent hover:border-gold-accent transition-colors mt-4 md:mt-0"
          >
            View All Articles
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 80}>
              <article className="bg-surface-container rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-accent mb-2">
                    {article.category}
                  </p>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/insights/${article.id}`}
                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-gold-accent transition-colors flex items-center gap-1"
                  >
                    Read More
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter */}
        <ScrollReveal>
          <div className="bg-primary rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                Subscribe to our Weekly Digest
              </h3>
              <p className="text-sm text-primary-fixed-dim">
                Get exclusive market insights and financial planning tips
                delivered to your inbox.
              </p>
            </div>
            <NewsletterForm dark />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
