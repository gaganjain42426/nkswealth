import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary-container overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdft2yrJhNAGzXOVaslCNVOkp4pC4h1f-0jeprk5veE80O-rtqXDicFqYjEGSLl9P-URKCmptMf9VnQmcTUtIwVcKLSIRYGIxTdLbhCsJwvWgPW2Zm0xuh3OytBUnUr_K8jT5NOuG9MG7pPON0tWsAqcESPfe9GG8SoJ81uuPb1kSLxIWf7KQBBVDlIHFjR1YgLNowlc58BYgXHLDfkpjKXPXj1g0gGTpW6mh66nJl-liS8f9BabTbDFBm22BLzIJoJ1Rc0gAF-5Y"
          alt="NKS Wealth - Premium Wealth Management"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-20 w-full text-center py-20">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
          Bridging the Gap Between Your Savings &amp; Your{" "}
          <em className="text-gold-accent not-italic">Dreams</em>
        </h1>
        <p className="text-lg md:text-xl text-primary-fixed-dim mb-10 max-w-2xl mx-auto leading-relaxed">
          AMFI-registered wealth management tailored for high-net-worth
          individuals, business owners and working professionals. Experience
          stable growth guided by institutional expertise and personalised
          service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
            className="bg-gold-accent text-white font-semibold px-8 py-3.5 rounded hover:bg-gold-accent/90 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Start Your Journey
          </Link>
          <Link
            href="/#services"
            className="border border-white text-white font-semibold px-8 py-3.5 rounded hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
