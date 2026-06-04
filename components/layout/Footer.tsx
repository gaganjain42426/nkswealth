import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact Us" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclosures", label: "Regulatory Disclosures" },
  { href: "/grievance", label: "Grievance Redressal" },
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
            <p className="text-sm text-primary-fixed-dim leading-relaxed max-w-sm mb-6">
              Guiding your financial future with institutional expertise and
              personalised care. AMFI-registered mutual fund distributor.
            </p>
            <address className="not-italic text-sm text-on-primary-container space-y-1">
              <p>123 Financial District, Nariman Point</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p className="mt-3">
                <a href="mailto:advisory@nkswealth.com" className="hover:text-white transition-colors">
                  advisory@nkswealth.com
                </a>
              </p>
              <p>
                <a href="tel:+912245678900" className="hover:text-white transition-colors">
                  +91 22 4567 8900
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
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

          {/* Legal */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
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
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-primary-container text-center md:text-left">
            © {new Date().getFullYear()} NKS Wealth. All rights reserved. SEBI
            Registered Investment Adviser. AMFI Registration No. ARN-XXXXX.
          </p>
          <p className="text-xs text-on-primary-container">
            Mutual Fund investments are subject to market risks. Read all scheme
            related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}
