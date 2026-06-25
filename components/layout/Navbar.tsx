"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
          "bg-surface/90 backdrop-blur-md border-b border-on-surface/5",
          scrolled && "shadow-indigo-soft"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-20 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-playfair text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            NKS Wealth
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors duration-200",
                    isActive
                      ? "text-primary border-b-2 border-gold-accent pb-0.5"
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded border border-transparent hover:border-gold-accent hover:shadow-gold-glow transition-all duration-300"
            >
              Start Investing
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 text-primary"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="material-symbols-outlined text-3xl select-none">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-surface flex flex-col pt-20 px-6 pb-8 transition-transform duration-300 ease-in-out md:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-2 mt-6">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-playfair text-2xl font-semibold py-4 border-b border-surface-variant",
                  isActive ? "text-gold-accent" : "text-primary"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="mt-8 bg-primary text-white text-center py-4 rounded font-semibold text-sm uppercase tracking-widest"
        >
          Start Investing
        </Link>
      </div>
    </>
  );
}
