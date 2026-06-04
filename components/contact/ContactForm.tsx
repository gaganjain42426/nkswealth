"use client";

import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  goal: string;
  message: string;
}

const GOAL_OPTIONS = [
  "Select a goal...",
  "Wealth Preservation",
  "Aggressive Growth",
  "Retirement Planning",
  "Estate & Succession Planning",
  "Comprehensive Portfolio Review",
  "NRI Investment Advisory",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    goal: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", goal: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <span className="material-symbols-outlined text-5xl text-growth-teal block mb-4">
          check_circle
        </span>
        <h3 className="font-playfair text-2xl font-semibold text-primary mb-3">
          Request Received!
        </h3>
        <p className="text-on-surface-variant text-sm">
          A dedicated relationship manager will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Rajesh Sharma"
            className="w-full bg-surface border border-charcoal-text/10 rounded-md py-3 px-4 text-sm text-charcoal-text placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:shadow-[inset_0_0_5px_rgba(45,156,142,0.15)] transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full bg-surface border border-charcoal-text/10 rounded-md py-3 px-4 text-sm text-charcoal-text placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="rajesh@example.com"
          className="w-full bg-surface border border-charcoal-text/10 rounded-md py-3 px-4 text-sm text-charcoal-text placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-all"
        />
      </div>

      <div>
        <label htmlFor="goal" className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">
          Primary Investment Goal
        </label>
        <div className="relative">
          <select
            id="goal"
            name="goal"
            value={form.goal}
            onChange={handleChange}
            className="w-full bg-surface border border-charcoal-text/10 rounded-md py-3 px-4 pr-10 text-sm text-charcoal-text appearance-none focus:outline-none focus:border-primary transition-all cursor-pointer"
          >
            {GOAL_OPTIONS.map((opt) => (
              <option key={opt} value={opt === "Select a goal..." ? "" : opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">
          Additional Context{" "}
          <span className="normal-case font-normal">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your current portfolio or specific concerns..."
          className="w-full bg-surface border border-charcoal-text/10 rounded-md py-3 px-4 text-sm text-charcoal-text placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-all resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-error text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary text-on-primary py-4 px-6 rounded-md text-sm font-bold uppercase tracking-wider border border-transparent hover:border-gold-accent hover:shadow-gold-glow transition-all duration-300 flex justify-center items-center gap-2 group disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get Free Consultation"}
        {status !== "submitting" && (
          <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        )}
      </button>
    </form>
  );
}
