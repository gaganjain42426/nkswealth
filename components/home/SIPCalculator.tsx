"use client";

import { useState } from "react";
import Link from "next/link";
import { calcSIP, formatINR } from "@/lib/utils/sip";

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const maturity = calcSIP(monthly, rate, years);

  return (
    <section className="py-24 bg-primary-fixed" id="calculator">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4">
              See Your Wealth Grow
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Discover the power of compounding. Small, disciplined investments
              today can build the foundation for your financial freedom tomorrow.
            </p>
            <ul className="space-y-4">
              {[
                "Instils financial discipline",
                "Benefits from Rupee Cost Averaging",
                "Harnesses the power of compounding",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-primary font-medium">
                  <span className="material-symbols-outlined text-gold-accent">check_circle</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-xl p-8 shadow-indigo-medium">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
              SIP Calculator
            </h3>

            <div className="space-y-6">
              {/* Monthly */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Monthly Investment
                  </label>
                  <span className="text-sm font-bold text-primary">
                    ₹{monthly.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={500}
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                />
              </div>

              {/* Return */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Expected Return (p.a)
                  </label>
                  <span className="text-sm font-bold text-primary">{rate}%</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={20}
                  step={1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </div>

              {/* Period */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Time Period (Years)
                  </label>
                  <span className="text-sm font-bold text-primary">{years} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </div>

              {/* Result */}
              <div className="pt-6 border-t border-surface-variant text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                  Expected Maturity Value
                </p>
                <p className="font-playfair text-4xl font-bold text-gold-accent">
                  {formatINR(maturity)}
                </p>
                <p className="text-xs text-on-surface-variant mt-2">
                  Total invested: {formatINR(monthly * years * 12)}
                </p>
              </div>

              <Link
                href="/contact"
                className="block w-full bg-primary text-white text-center py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-primary-container transition-colors"
              >
                Start This SIP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
