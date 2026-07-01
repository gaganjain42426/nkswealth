"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  prefix?: string;
  target: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { prefix: "₹", target: 100, suffix: "Cr+", label: "Assets Under Management" },
  { target: 700, suffix: "+", label: "Satisfied Investors" },
  { target: 20, suffix: "Yrs", label: "Market Experience" },
  { target: 100, suffix: "%", label: "Unbiased Advice" },
];

const DURATION = 1600;

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / DURATION, 1);
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * stat.target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.target]);

  return (
    <div>
      <div className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
        {stat.prefix}
        {value}
        <span className="text-gold-accent">{stat.suffix}</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-fixed-dim/20">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}
