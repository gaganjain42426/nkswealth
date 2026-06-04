/**
 * Calculates SIP maturity value using compound interest formula.
 * M = P × ((1 + r)^n – 1) / r × (1 + r)
 */
export function calcSIP(
  monthlyAmount: number,
  annualReturnPercent: number,
  years: number
): number {
  const r = annualReturnPercent / 100 / 12;
  const n = years * 12;
  if (r === 0) return monthlyAmount * n;
  return monthlyAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

export function formatINR(amount: number): string {
  if (amount >= 10_000_000) {
    return `₹${(amount / 10_000_000).toFixed(2)} Cr`;
  }
  if (amount >= 100_000) {
    return `₹${(amount / 100_000).toFixed(2)} Lakhs`;
  }
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}
