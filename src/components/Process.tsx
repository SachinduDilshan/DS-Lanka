"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals, audience, and competitive landscape to build a solid strategic foundation.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Design & Prototype",
    desc: "Our designers craft wireframes and high-fidelity prototypes, iterating quickly based on your feedback.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Development & Build",
    desc: "Expert engineers bring designs to life with clean, scalable code — tested across all devices and browsers.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Launch & Grow",
    desc: "We deploy, monitor and optimise your product — providing ongoing support to ensure continuous growth.",
    icon: "🚀",
  },
];

export default function Process() {
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
    <section id="process" ref={ref} className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="reveal">
            <span className="tag mb-5 inline-block">How We Work</span>
          </div>
          <h2
            className="reveal font-heading font-extrabold text-4xl md:text-5xl text-light leading-[1.12]"
            style={{ transitionDelay: "0.15s" }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Proven Process
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="reveal text-center group"
                style={{ transitionDelay: `${0.12 * i}s` }}
              >
                {/* Icon circle */}
                <div className="relative mx-auto mb-7 w-28 h-28">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-primary/15 group-hover:border-primary/40 transition-colors duration-400" />
                  {/* Inner circle */}
                  <div className="absolute inset-3 rounded-full bg-dark-card border border-white/8 group-hover:border-primary/30 flex flex-col items-center justify-center gap-1 transition-all duration-400 group-hover:shadow-[0_0_30px_rgba(108,99,255,0.25)]">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-[10px] font-heading font-black text-primary/60">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-light mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted text-sm font-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
