"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-20 pb-10"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(79,110,247,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,110,247,0.8) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-32 right-[20%] w-48 h-48 md:w-80 md:h-80 rounded-full bg-primary/10 blur-[110px] animate-float-slow" />
      <div className="absolute bottom-40 left-[15%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-violet/8 blur-[90px] animate-float-slow [animation-delay:2.5s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ── Left Content ── */}
          <div>
            {/* Badge */}
            <div className="reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="tag mb-5 block w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Creative Digital Agency
              </span>
            </div>

            {/* Heading */}
            <h1
              className="reveal font-heading font-extrabold leading-[1.1] tracking-tight mb-4 md:mb-6"
              style={{ transitionDelay: "0.2s" }}
            >
              <span className="block text-3xl md:text-5xl lg:text-[3.5rem] text-light">
                We Build
              </span>
              <span className="block text-3xl md:text-5xl lg:text-[3.5rem] bg-gradient-to-r from-primary via-primary-light to-violet-light bg-clip-text text-transparent py-1">
                Digital Dreams
              </span>
              <span className="block text-3xl md:text-5xl lg:text-[3.5rem] text-light">
                Into Reality
              </span>
            </h1>

            {/* Description */}
            <p
              className="reveal font-body text-muted text-sm md:text-lg leading-relaxed max-w-lg mb-6 md:mb-10"
              style={{ transitionDelay: "0.35s" }}
            >
              We're a team of passionate designers and developers who craft bold
              digital experiences that elevate brands and drive measurable growth
              for forward-thinking companies.
            </p>

            {/* CTAs */}
            <div
              className="reveal flex flex-wrap gap-3"
              style={{ transitionDelay: "0.45s" }}
            >
              <a href="#portfolio" className="btn-primary text-sm py-2.5 px-5 md:text-base md:py-3.5 md:px-7">
                View Our Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" className="btn-outline text-sm py-2.5 px-5 md:text-base md:py-3.5 md:px-7">
                About Us
              </a>
            </div>

            {/* Social proof */}
            <div
              className="reveal mt-8 md:mt-12 flex items-center gap-4"
              style={{ transitionDelay: "0.55s" }}
            >
              <div className="flex -space-x-3">
                {["JD", "AR", "SK", "MP"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-dark bg-gradient-to-br from-primary/50 to-violet/50 flex items-center justify-center text-[9px] md:text-[10px] font-heading font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-muted font-body">
                  <span className="text-light font-semibold">4.9/5</span> from 200+ happy clients
                </p>
              </div>
            </div>
          </div>

          {/* ── Right — Floating collage (visible on md+ now, not just lg) ── */}
          <div className="reveal relative hidden md:flex items-center justify-center" style={{ transitionDelay: "0.3s" }}>
            {/* Main image — smaller on md */}
            <div className="relative w-[260px] h-[320px] md:w-[280px] md:h-[360px] lg:w-[320px] lg:h-[400px] rounded-2xl overflow-hidden border border-dark-border shadow-card-dark">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&h=800&fit=crop"
                alt="Agency team working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet/10" />
            </div>

            {/* Floating card — Projects */}
            <div className="absolute -top-5 -left-6 lg:-left-10 bg-dark-card border border-dark-border rounded-xl p-3 lg:p-4 w-36 lg:w-44 shadow-card-dark animate-float-slow">
              <p className="text-xs text-muted font-body mb-1">Projects Done</p>
              <p className="text-xl lg:text-2xl font-heading font-extrabold text-light">500+</p>
              <div className="mt-2 h-1 bg-dark-3 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-primary to-violet rounded-full" />
              </div>
            </div>

            {/* Floating card — Award */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-dark-card border border-dark-border rounded-xl p-3 lg:p-4 shadow-card-dark animate-float-slow [animation-delay:1.5s]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-violet/15 border border-violet/25 flex items-center justify-center text-sm lg:text-base">🏆</div>
                <div>
                  <p className="text-[10px] text-muted font-body">Award Won</p>
                  <p className="text-sm font-heading font-bold text-light">24 Awards</p>
                </div>
              </div>
            </div>

            {/* Available pill */}
            <div className="absolute top-1/2 -right-10 lg:-right-14 -translate-y-1/2 bg-dark-card border border-primary/25 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-card-dark animate-float-slow [animation-delay:3s]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-heading font-semibold text-light whitespace-nowrap">Available Now</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-body text-muted tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
