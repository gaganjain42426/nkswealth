"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data/faqs";
import { cn } from "@/lib/utils/cn";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, i) => (
        <div
          key={faq.id}
          className="bg-surface-container-lowest border border-charcoal-text/5 rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(26,43,109,0.02)]"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-surface-container/50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="text-xs font-bold uppercase tracking-wide text-primary pr-4">
              {faq.question}
            </span>
            <span
              className={cn(
                "material-symbols-outlined text-primary shrink-0 transition-transform duration-300",
                openIndex === i && "rotate-180"
              )}
            >
              expand_more
            </span>
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === i ? "max-h-48" : "max-h-0"
            )}
          >
            <p className="px-6 pb-5 text-sm text-charcoal-text/80 leading-relaxed border-t border-on-surface/5 pt-3">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
