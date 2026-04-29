"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { value: 250, suffix: "+", label: "Happy Clients", icon: "🤝" },
  { value: 10, suffix: "+", label: "Years Experience", icon: "🏆" },
  { value: 24, suffix: "", label: "Awards Won", icon: "⭐" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const duration = 2000;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    const increment = target / totalFrames;

    const timer = setInterval(() => {
      frame++;
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-dark relative overflow-hidden">
      {/* Full-width gradient band */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-accent/8 pointer-events-none" />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="reveal text-center group"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-dark-card border border-white/8 flex items-center justify-center text-2xl group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(108,99,255,0.2)] transition-all duration-400">
                {stat.icon}
              </div>
              <div className="font-heading font-black text-5xl md:text-6xl text-light mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted font-body text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
