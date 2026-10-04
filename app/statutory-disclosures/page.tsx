import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Statutory Disclosures",
  description: `Statutory disclosures of ${SITE.legalName}, including the annual return filed with the Registrar of Companies.`,
};

export default function StatutoryDisclosuresPage() {
  const { annualReturn } = SITE;

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-[860px] mx-auto px-5 md:px-8">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-widest text-gold-accent mb-3">
            Investor Information
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
            Statutory Disclosures
          </h1>
          <p className="text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-charcoal-text">{SITE.legalName}</span>
            <span className="mx-2">|</span>
            CIN: {SITE.cin}
          </p>
          <p className="text-on-surface-variant leading-relaxed mt-1">
            Registered Office: {SITE.address.line1}, {SITE.address.line2}
          </p>
        </ScrollReveal>

        <hr className="my-10 border-outline-variant/50" />

        <ScrollReveal delay={100}>
          <h2 className="font-playfair text-2xl font-semibold text-primary mb-5">
            Annual Return &ndash; Financial Year {annualReturn.financialYear}
          </h2>
          <a
            href={annualReturn.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary underline underline-offset-4 hover:text-gold-accent transition-colors"
          >
            <span className="material-symbols-outlined">description</span>
            {annualReturn.form}, FY {annualReturn.financialYear}
          </a>
          <p className="text-sm text-on-surface-variant mt-3">
            Filed with the {SITE.rocName} on {annualReturn.filedOn} &nbsp;|&nbsp; SRN:{" "}
            {annualReturn.srn}
          </p>
        </ScrollReveal>

        <hr className="my-10 border-outline-variant/50" />

        <ScrollReveal delay={150}>
          <h2 className="font-playfair text-2xl font-semibold text-primary mb-5">
            Registrations
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            AMFI Registered Mutual Fund Distributor &middot; {SITE.arn} (valid{" "}
            {SITE.arnInitialRegistration} to {SITE.arnValidity}).{" "}
            <a
              href={SITE.arnCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors"
            >
              View ARN Certificate
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
