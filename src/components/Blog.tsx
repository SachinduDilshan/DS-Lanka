"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "The Future of Web Design: AI-Powered Interfaces in 2025",
    excerpt: "How artificial intelligence is reshaping the way we design and interact with digital products — and what it means for your brand.",
    category: "Design Trends",
    date: "Mar 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=380&fit=crop",
    author: { name: "Sarah Kim", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  },
  {
    id: 2,
    title: "Building Scalable Next.js Applications: Lessons Learned",
    excerpt: "Key architectural patterns and performance optimisations we've refined over 50+ production Next.js projects.",
    category: "Development",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=380&fit=crop",
    author: { name: "Marcus Chen", avatar: "https://randomuser.me/api/portraits/men/67.jpg" },
  },
  {
    id: 3,
    title: "Why Brand Identity is Your Most Valuable Business Asset",
    excerpt: "A deep dive into how consistent, strategic branding drives customer trust, loyalty and long-term revenue growth.",
    category: "Branding",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=380&fit=crop",
    author: { name: "Alex Rivera", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  },
];

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null);

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
    <section id="blog" ref={ref} className="py-28 bg-dark-2 relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="reveal">
              <span className="tag mb-5 inline-block">Insights</span>
            </div>
            <h2
              className="reveal font-heading font-extrabold text-4xl md:text-5xl text-light leading-[1.12]"
              style={{ transitionDelay: "0.15s" }}
            >
              Latest from{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Blog
              </span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <a href="#" className="btn-outline text-sm">
              View All Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="reveal group bg-dark-card border border-white/6 rounded-2xl overflow-hidden hover:border-primary/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.6)] cursor-pointer"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="tag text-[10px] py-1 px-2.5">{post.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted font-body mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/40" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-heading font-bold text-light text-lg leading-snug mb-3 group-hover:text-white transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted text-sm font-body leading-relaxed line-clamp-2 mb-5">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <span className="text-xs font-body font-medium text-muted">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary text-xs font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read More
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
