import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair-nf",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter-nf",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nkswealth.com"),
  title: {
    default: "NKS Wealth | Premium Wealth Management for HNIs",
    template: "%s | NKS Wealth",
  },
  description:
    "AMFI-registered wealth management tailored for high-net-worth individuals, business owners and working professionals. Expert SIP, goal-based planning and NRI investment advisory with 20 years of market experience.",
  keywords: [
    "wealth management",
    "mutual fund distributor",
    "SIP",
    "ELSS",
    "NRI investments",
    "AMFI registered",
    "portfolio advisory",
    "financial planning India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "NKS Wealth",
    title: "NKS Wealth | Premium Wealth Management for HNIs",
    description:
      "AMFI-registered wealth management tailored for high-net-worth individuals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NKS Wealth | Premium Wealth Management",
    description: "Institutional expertise. Personalised care. AMFI registered.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        {/* Material Symbols for icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface antialiased">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
