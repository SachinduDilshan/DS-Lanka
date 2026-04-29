"use client";

const brands = [
  "Google", "Microsoft", "Amazon", "Netflix", "Spotify",
  "Airbnb", "Slack", "Figma", "Notion", "Stripe",
  "Google", "Microsoft", "Amazon", "Netflix", "Spotify",
  "Airbnb", "Slack", "Figma", "Notion", "Stripe",
];

export default function Marquee() {
  return (
    <section className="py-14 bg-dark-2 border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted mb-8">
        Trusted by Industry Leaders
      </p>
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {brands.map((brand, i) => (
            <span
              key={i}
              className="mx-10 font-heading font-extrabold text-xl text-white/10 hover:text-white/30 transition-colors duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
