"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaDribbble } from "react-icons/fa";

const team = [
  {
    name: "Sithara Dissanayaka",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Sithara Dissanayakam",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Sachindu Dilshan",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
  {
    name: "Priya Nair",
    role: "UX Research Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: { linkedin: "#", twitter: "#", dribbble: "#" },
  },
];

export default function Team() {
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
    <section id="team" ref={ref} className="py-28 bg-dark-2 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal">
            <span className="tag mb-5 inline-block">Our People</span>
          </div>
          <h2
            className="reveal font-heading font-extrabold text-4xl md:text-5xl text-light leading-[1.12]"
            style={{ transitionDelay: "0.15s" }}
          >
            Meet the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dream Team
            </span>
          </h2>
          <p
            className="reveal text-muted font-body text-lg leading-relaxed mt-4"
            style={{ transitionDelay: "0.25s" }}
          >
            50+ talented creatives and engineers united by a passion for
            exceptional digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="reveal group relative bg-dark-card border border-white/6 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                {/* Social links — slide up on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href={member.socials.dribbble}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    aria-label="Dribbble"
                  >
                    <FaDribbble size={14} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-light text-lg group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-body font-medium mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="reveal text-center mt-14" style={{ transitionDelay: "0.4s" }}>
          <p className="text-muted font-body mb-5">
            Think you'd be a great fit?
          </p>
          <a href="#contact" className="btn-outline">
            Join Our Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
