"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  { icon: "🎯", title: "Strategic Vision", desc: "We align your digital presence with long-term business objectives." },
  { icon: "⚡", title: "Fast Delivery", desc: "Agile workflows ensure timely, high-quality outputs every sprint." },
  { icon: "🔮", title: "Future-Ready", desc: "Tech stacks and strategies built for tomorrow's demands." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="reveal relative">
            <div className="relative w-full aspect-[4/5] max-w-md rounded-2xl overflow-hidden glow-ring">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop"
                alt="Our team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-dark-card border border-white/10 rounded-2xl p-6 glow-ring">
              <p className="text-4xl font-heading font-black text-primary">10+</p>
              <p className="text-sm text-muted font-body mt-1">Years of<br />Excellence</p>
            </div>
            {/* Decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary/20 rounded-xl" />
            <div className="absolute -top-2 -left-2 w-20 h-20 border border-primary/10 rounded-xl" />
          </div>

          {/* Content Side */}
          <div>
            <div className="reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="tag mb-5 block w-fit">About Us</span>
            </div>
            <h2
              className="reveal font-heading font-extrabold text-4xl md:text-5xl leading-[1.12] text-light mb-6"
              style={{ transitionDelay: "0.2s" }}
            >
              We Turn Bold Ideas Into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Powerful Products
              </span>
            </h2>
            <p
              className="reveal text-muted font-body text-lg leading-relaxed mb-8"
              style={{ transitionDelay: "0.3s" }}
            >
              Founded in 2014, Nexin is a full-service digital agency headquartered in New York. We specialize in crafting immersive brand identities, scalable web platforms, and growth-focused digital marketing strategies.
            </p>
            <p
              className="reveal text-muted font-body leading-relaxed mb-10"
              style={{ transitionDelay: "0.35s" }}
            >
              Our multidisciplinary team of 50+ creative professionals combines deep technical expertise with design sensibility to deliver outcomes that move the needle.
            </p>

            {/* Features */}
            <div className="reveal space-y-5" style={{ transitionDelay: "0.45s" }}>
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-dark-card border border-white/8 flex items-center justify-center text-xl flex-shrink-0 group-hover:border-primary/40 transition-colors duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-light mb-1">{f.title}</h4>
                    <p className="text-muted text-sm font-body leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10" style={{ transitionDelay: "0.55s" }}>
              <a href="#contact" className="btn-primary">
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
