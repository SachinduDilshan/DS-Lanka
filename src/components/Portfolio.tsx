"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const categories = ["All", "Web Dev", "POS", "Marketing"];

const projects = [
  {
    id: 1,
    title: "Corporate Website Development",
    category: "Web Development",
    tag: "Responsive Website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=440&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "Retail POS System",
    category: "POS Solutions",
    tag: "Point of Sale",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=440&fit=crop",
    year: "2024",
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    tag: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=440&fit=crop",
    year: "2024",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    category: "Web Development",
    tag: "Online Store",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=440&fit=crop",
    year: "2023",
  },
  {
    id: 5,
    title: "SEO Optimization",
    category: "Digital Marketing",
    tag: "SEO Services",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=440&fit=crop",
    year: "2024",
  },
  {
    id: 6,
    title: "Restaurant POS System",
    category: "POS Solutions",
    tag: "Billing & Inventory",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=440&fit=crop",
    year: "2023",
  },
];

// Map display category labels to data categories
const categoryMap: Record<string, string> = {
  "All": "All",
  "Web Dev": "Web Development",
  "POS": "POS Solutions",
  "Marketing": "Digital Marketing",
};

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const ref = useRef<HTMLDivElement>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === categoryMap[active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-16 md:py-28 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-14">
          <div>
            <div className="reveal">
              <span className="tag mb-4 inline-block">Our Work</span>
            </div>
            <h2
              className="reveal font-heading font-extrabold text-3xl md:text-5xl text-light leading-[1.12]"
              style={{ transitionDelay: "0.15s" }}
            >
              Selected{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <a href="#" className="btn-outline text-sm py-2 px-5">
              View All Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Filter Tabs — scrollable on mobile */}
        <div className="reveal flex gap-2 mb-6 md:mb-10 overflow-x-auto pb-1 scrollbar-hide" style={{ transitionDelay: "0.25s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-heading font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                active === cat
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(108,99,255,0.4)]"
                  : "bg-dark-card border border-white/8 text-muted hover:text-light hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid — 2 cols on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal group relative rounded-xl md:rounded-2xl overflow-hidden bg-dark-card border border-white/6 hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.7)] cursor-pointer"
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover CTA */}
                <div className="absolute inset-0 items-center justify-center hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-400">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-dark/70 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5">
                  <span className="text-[10px] md:text-xs font-heading font-semibold text-muted">{project.year}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 md:p-5">
                <span className="text-[10px] md:text-xs font-heading font-semibold text-primary tracking-wider uppercase">
                  {project.tag}
                </span>
                <h3 className="font-heading font-bold text-sm md:text-lg text-light mt-1 group-hover:text-white transition-colors leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
