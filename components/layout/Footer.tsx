import Link from "next/link";
import { SITE } from "@/lib/data/site";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "Our Story" },
  { href: "/about#team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-playfair text-3xl font-bold text-gold-accent mb-4">
              NKS Invest
            </p>
            <p className="text-sm text-primary-fixed-dim leading-relaxed max-w-sm mb-4">
              Guiding your financial future with institutional expertise and
              personalised care. AMFI-registered mutual fund distributor.
            </p>
            <p className="text-sm text-on-primary-container leading-relaxed max-w-sm">
              We are not agents. We are not salespeople. We are long-term
              thinking partners for families and founders who want clarity over
              noise.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="font-playfair text-lg font-semibold mb-5">Explore</h4>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-on-primary-container hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-4">
            <h4 className="font-playfair text-lg font-semibold mb-5">Contact Us</h4>
            <address className="not-italic text-sm text-on-primary-container space-y-3">
              <p className="flex gap-3">
                <span className="material-symbols-outlined text-gold-accent text-lg shrink-0">
                  location_on
                </span>
                <span>
                  {SITE.legalName}, {SITE.address.line1}, {SITE.address.line2}
                </span>
              </p>
              <p className="flex gap-3">
                <span className="material-symbols-outlined text-gold-accent text-lg shrink-0">
                  call
                </span>
                <span>
                  <a href={`tel:${SITE.phonePrimaryTel}`} className="hover:text-white transition-colors">
                    {SITE.phonePrimary}
                  </a>{" "}
                  /{" "}
                  <a href={`tel:${SITE.phoneSecondaryTel}`} className="hover:text-white transition-colors">
                    {SITE.phoneSecondary}
                  </a>
                </span>
              </p>
              <p className="flex gap-3">
                <span className="material-symbols-outlined text-gold-accent text-lg shrink-0">
                  mail
                </span>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </p>
              <p className="flex gap-3">
                <span className="material-symbols-outlined text-gold-accent text-lg shrink-0">
                  chat
                </span>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chat on WhatsApp →
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <h5 className="text-xs font-bold uppercase tracking-widest text-on-primary-container mb-2">
            Risk Factors
          </h5>
          <p className="text-xs text-on-primary-container/70 leading-relaxed">
            Investments in Mutual Funds are subject to Market Risks. Read all
            scheme related documents carefully before investing. Mutual Fund
            Schemes do not assure or guarantee any returns. Past performances of
            any Mutual Fund Scheme may or may not be sustained in future. There
            is no guarantee that the investment objective of any suggested scheme
            shall be achieved. All existing and prospective investors are advised
            to check and evaluate the Exit loads and other cost structure (TER)
            applicable at the time of making the investment before finalizing on
            any investment decision for Mutual Funds schemes. We deal in Regular
            Plans only for Mutual Fund Schemes and earn a Trailing Commission on
            client investments. Disclosure for Commission earnings is made to
            clients at the time of investments. Option of Direct Plan for every
            Mutual Fund Scheme is available to investors offering advantage of
            lower expense ratio. We are not entitled to earn any commission on
            Direct plans. Hence we do not deal in Direct Plans.
          </p>
        </div>

        {/* Regulatory line */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-2 text-xs text-on-primary-container/80">
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <span>AMFI Registered Mutual Fund Distributor · {SITE.arn}</span>
            <span className="hidden sm:inline">|</span>
            <span>Initial Registration · {SITE.arnInitialRegistration}</span>
            <span className="hidden sm:inline">|</span>
            <span>Current Validity · {SITE.arnValidity}</span>
            <span className="hidden sm:inline">|</span>
            <span>Grievance Officer · {SITE.grievanceOfficer}</span>
            <span className="hidden sm:inline">|</span>
            <a
              href={SITE.arnCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              View ARN Certificate
            </a>
          </p>
          <p className="text-on-primary-container/60">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
