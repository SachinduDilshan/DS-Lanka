"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "James Thornton",
    role: "CEO, Luminary Labs",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Nexin transformed our digital presence completely. The team's attention to detail and creative vision exceeded every expectation we had. Our conversion rate jumped 40% in the first month.",
    rating: 5,
  },
  {
    name: "Lisa Fontaine",
    role: "Product Lead, Orion SaaS",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    quote:
      "Working with Nexin felt like having an in-house team that genuinely cared. They delivered a beautiful, performant platform on time and within budget. Outstanding experience from start to finish.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Founder, Pulse Health",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    quote:
      "The mobile app Nexin built for us has been downloaded 50,000 times. The UX is intuitive and our users love it. I'd recommend them to any founder who values quality and speed.",
    rating: 5,
  },
  {
    name: "Nina Vasquez",
    role: "Marketing Director, Nova",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    quote:
      "Nexin's brand strategy work was transformative. They gave us a visual identity that truly reflects who we are and where we're going. Every touchpoint feels cohesive and professional.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent [background-position:50%_50%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-16">
          <div className="reveal">
            <span className="tag mb-4 inline-block">Testimonials</span>
          </div>
          <h2
            className="reveal font-heading font-extrabold text-3xl md:text-5xl text-light leading-[1.12]"
            style={{ transitionDelay: "0.15s" }}
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="reveal max-w-3xl mx-auto" style={{ transitionDelay: "0.25s" }}>
          <div className="relative bg-dark-card border border-white/8 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 glow-ring">
            <div className="text-6xl md:text-8xl font-heading font-black text-primary/15 leading-none absolute top-4 left-6 md:top-6 md:left-10 select-none">
              "
            </div>

            <div className="flex gap-1 mb-4 md:mb-6">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p
              key={active}
              className="text-light/90 font-body text-sm md:text-xl leading-relaxed mb-6 md:mb-8 relative z-10 animate-fade-up"
            >
              "{testimonials[active].quote}"
            </p>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                <Image
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-light text-sm md:text-base">{testimonials[active].name}</p>
                <p className="text-muted text-xs md:text-sm font-body">{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 md:gap-2.5 mt-6 md:mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-6 md:w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail row — 2x2 grid on mobile */}
        <div className="reveal grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-4 mt-6 md:mt-10" style={{ transitionDelay: "0.4s" }}>
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-2.5 rounded-xl border transition-all duration-300 ${
                active === i
                  ? "border-primary/40 bg-primary/10"
                  : "border-white/6 bg-dark-card hover:border-white/15"
              }`}
            >
              <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-xs font-heading font-bold text-light leading-tight">{t.name.split(" ")[0]}</p>
                <p className="text-[10px] text-muted hidden sm:block">{t.role.split(",")[0]}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
