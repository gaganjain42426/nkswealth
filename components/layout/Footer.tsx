import Link from "next/link";
import { SITE } from "@/lib/data/site";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "Our Story" },
  { href: "/about#team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-playfair text-3xl font-bold text-gold-accent mb-4">
              NKS Wealth
            </p>
            <p className="text-sm text-primary-fixed-dim leading-relaxed max-w-sm mb-4">
              Guiding your financial future with institutional expertise and
              personalised care. AMFI-registered mutual fund distributor.
            </p>
            <p className="text-sm text-on-primary-container leading-relaxed max-w-sm mb-6">
              We are not agents. We are not salespeople. We are long-term
              thinking partners for families and founders who want clarity over
              noise.
            </p>
            <address className="not-italic text-sm text-on-primary-container space-y-1">
              <p className="font-semibold text-white">{SITE.legalName}</p>
              <p>{SITE.address.line1}</p>
              <p>{SITE.address.line2}</p>
              <p className="mt-3">
                <a
                  href={`mailto:${SITE.emailHello}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.emailHello}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${SITE.phonePrimaryTel}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phonePrimary}
                </a>{" "}
                /{" "}
                <a
                  href={`tel:${SITE.phoneSecondaryTel}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phoneSecondary}
                </a>
              </p>
            </address>
          </div>

          {/* Explore */}
          <div>
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

          {/* Reach Us */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">Reach Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-primary-container hover:text-white transition-colors"
                >
                  WhatsApp →
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.emailHello}`}
                  className="text-on-primary-container hover:text-white transition-colors"
                >
                  {SITE.emailHello}
                </a>
              </li>
              <li className="text-on-primary-container">{SITE.city}</li>
            </ul>

            <div className="mt-6 text-xs text-on-primary-container/80 space-y-1.5 leading-relaxed">
              <p>
                AMFI Registered Mutual Fund Distributor · {SITE.arn}
              </p>
              <p>Initial Registration · {SITE.arnInitialRegistration}</p>
              <p>Current Validity · {SITE.arnValidity}</p>
              <p>Grievance Officer · {SITE.grievanceOfficer}</p>
              <p>
                <a
                  href={`tel:${SITE.phonePrimaryTel}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phonePrimary}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.emailPrimary}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.emailPrimary}
                </a>
              </p>
            </div>
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

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-on-primary-container text-center md:text-left">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            AMFI Registered Mutual Fund Distributor · {SITE.arn}.
          </p>
        </div>
      </div>
    </footer>
  );
}
