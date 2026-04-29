"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "The Future of Web Design: AI-Powered Interfaces in 2025",
    excerpt: "How artificial intelligence is reshaping the way we design and interact with digital products.",
    category: "Design Trends",
    date: "Mar 28, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=380&fit=crop",
    author: { name: "Sarah Kim", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  },
  {
    id: 2,
    title: "Building Scalable Next.js Applications: Lessons Learned",
    excerpt: "Key architectural patterns and performance optimisations from 50+ production Next.js projects.",
    category: "Development",
    date: "Mar 15, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=380&fit=crop",
    author: { name: "Marcus Chen", avatar: "https://randomuser.me/api/portraits/men/67.jpg" },
  },
  {
    id: 3,
    title: "Why Brand Identity is Your Most Valuable Business Asset",
    excerpt: "How consistent, strategic branding drives customer trust, loyalty and long-term revenue growth.",
    category: "Branding",
    date: "Feb 28, 2025",
    readTime: "6 min",
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
    <section id="blog" ref={ref} className="py-16 md:py-28 bg-dark-2 relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 md:mb-14">
          <div>
            <div className="reveal">
              <span className="tag mb-4 inline-block">Insights</span>
            </div>
            <h2
              className="reveal font-heading font-extrabold text-3xl md:text-5xl text-light leading-[1.12]"
              style={{ transitionDelay: "0.15s" }}
            >
              Latest from{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Blog
              </span>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <a href="#" className="btn-outline text-sm py-2 px-5">
              View All Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Posts — first post full-width on mobile, rest 2-col; all 3-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
          {/* Featured first post — full width on mobile */}
          <article
            className="reveal group bg-dark-card border border-white/6 rounded-2xl overflow-hidden hover:border-primary/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.6)] cursor-pointer"
            style={{ transitionDelay: "0s" }}
          >
            <div className="relative h-44 md:h-52 overflow-hidden">
              <Image src={posts[0].image} alt={posts[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="tag text-[10px] py-0.5 px-2">{posts[0].category}</span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 text-xs text-muted font-body mb-2">
                <span>{posts[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-muted/40" />
                <span>{posts[0].readTime}</span>
              </div>
              <h3 className="font-heading font-bold text-light text-base md:text-lg leading-snug mb-2 group-hover:text-white transition-colors line-clamp-2">
                {posts[0].title}
              </h3>
              <p className="text-muted text-xs md:text-sm font-body leading-relaxed line-clamp-2 mb-4 hidden sm:block">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden">
                    <Image src={posts[0].author.avatar} alt={posts[0].author.name} fill className="object-cover" />
                  </div>
                  <span className="text-xs font-body font-medium text-muted">{posts[0].author.name}</span>
                </div>
              </div>
            </div>
          </article>

          {/* Remaining posts — 2-col grid inside on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-1 md:col-span-2 gap-4 md:gap-7 md:grid-cols-2">
            {posts.slice(1).map((post, i) => (
              <article
                key={post.id}
                className="reveal group bg-dark-card border border-white/6 rounded-2xl overflow-hidden hover:border-primary/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.6)] cursor-pointer"
                style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="relative h-32 md:h-52 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
                  <div className="absolute top-2 left-2 md:top-4 md:left-4">
                    <span className="tag text-[9px] md:text-[10px] py-0.5 px-2">{post.category}</span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="flex items-center gap-1.5 text-xs text-muted font-body mb-1.5 md:mb-3">
                    <span className="hidden sm:block">{post.date}</span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-muted/40" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-light text-xs md:text-lg leading-snug mb-2 group-hover:text-white transition-colors line-clamp-3 md:line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm font-body leading-relaxed line-clamp-2 mb-5 hidden md:block">
                    {post.excerpt}
                  </p>
                  <div className="hidden md:flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <span className="text-xs font-body font-medium text-muted">{post.author.name}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
