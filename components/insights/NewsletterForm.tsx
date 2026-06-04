"use client";

import { useState } from "react";

interface NewsletterFormProps {
  dark?: boolean; // dark mode for homepage hero
}

export default function NewsletterForm({ dark = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise((r) => setTimeout(r, 600));
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (dark) {
    return (
      <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-l px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-accent w-full md:w-64 text-sm"
        />
        <button
          type="submit"
          className="bg-gold-accent text-white px-5 py-3 rounded-r text-xs font-bold uppercase tracking-wider hover:bg-gold-accent/90 transition-colors whitespace-nowrap"
        >
          {status === "success" ? "Done ✓" : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your professional email"
        required
        className="flex-grow bg-surface-container-lowest border border-charcoal-text/10 rounded px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
      />
      <button
        type="submit"
        className="bg-primary-container text-on-primary text-sm font-bold uppercase tracking-wider px-8 py-3 rounded hover:bg-primary transition-colors whitespace-nowrap"
      >
        {status === "success" ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
