"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🌐",
    number: "01",
    title: "Website Development",
    desc: "We build fast, modern, and scalable websites tailored to your business — from corporate sites to fully dynamic web applications.",
    tags: ["Next.js", "React", "Responsive Design"],
    color: "from-cyan-500/20 to-blue-500/10",
    border: "hover:border-cyan-500/40",
  },
  {
    icon: "🛒",
    number: "02",
    title: "E-Commerce Solutions",
    desc: "Launch and grow your online store with secure, high-converting e-commerce platforms designed for performance and scalability.",
    tags: ["Online Store", "Payments", "Shop Systems"],
    color: "from-purple-500/20 to-indigo-500/10",
    border: "hover:border-purple-500/40",
  },
  {
    icon: "💳",
    number: "03",
    title: "POS Systems",
    desc: "Smart point-of-sale systems for retail and restaurants with billing, inventory management, and real-time reporting.",
    tags: ["Billing", "Inventory", "Reports"],
    color: "from-green-500/20 to-emerald-500/10",
    border: "hover:border-green-500/40",
  },
  {
    icon: "📢",
    number: "04",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies to grow your business through targeted campaigns, ads, and performance tracking.",
    tags: ["Ads", "Campaigns", "Analytics"],
    color: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-500/40",
  },
  {
    icon: "📱",
    number: "05",
    title: "Social Media Management",
    desc: "Build your brand presence and engage your audience with consistent, creative, and strategic social media content.",
    tags: ["Content", "Engagement", "Brand Growth"],
    color: "from-orange-500/20 to-amber-500/10",
    border: "hover:border-orange-500/40",
  },
  {
    icon: "🔍",
    number: "06",
    title: "SEO Optimization",
    desc: "Improve your search rankings and visibility with proven SEO strategies that bring organic traffic and long-term growth.",
    tags: ["On-page SEO", "Technical SEO", "Ranking"],
    color: "from-yellow-500/20 to-lime-500/10",
    border: "hover:border-yellow-500/40",
  },
];

export default function Services() {
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
    <section id="services" ref={ref} className="py-28 bg-dark-2 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal">
            <span className="tag mb-5 inline-block">What We Do</span>
          </div>
          <h2
            className="reveal font-heading font-extrabold text-4xl md:text-5xl text-light leading-[1.12] mb-5"
            style={{ transitionDelay: "0.15s" }}
          >
            Services That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p
            className="reveal text-muted font-body text-lg leading-relaxed"
            style={{ transitionDelay: "0.25s" }}
          >
            Complete digital solutions — from building your online presence to scaling your business with technology and marketing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal group relative bg-dark-card border border-white/6 rounded-2xl p-7 transition-all duration-500 ${s.border} hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden`}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="absolute inset-0 bg-card-shine rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    {s.icon}
                  </span>
                  <span className="font-heading font-black text-5xl text-white/5 group-hover:text-white/8 transition-colors">
                    {s.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-light mb-3 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted text-sm font-body leading-relaxed mb-6">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-heading font-semibold px-2.5 py-1 rounded-full bg-white/5 text-muted group-hover:bg-white/10 group-hover:text-light transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-muted group-hover:text-primary transition-colors duration-300">
                  <span className="text-xs font-heading font-semibold tracking-wider uppercase">
                    Learn More
                  </span>
                  <svg
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}