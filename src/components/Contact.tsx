"use client";
import { useEffect, useRef, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const contactInfo = [
  { icon: "📍", label: "Address", value: "123 Kandy Road, Kurunegala, Sri Lanka 60000" },
  { icon: "📧", label: "Email", value: "hello@digitalsolutionslanka.lk" },
  { icon: "📞", label: "Phone", value: "+94 75 692 9965" },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-dark border border-white/8 rounded-xl px-5 py-3.5 text-light font-body text-sm placeholder-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300";

  return (
    <section id="contact" ref={ref} className="py-28 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/6 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="reveal">
            <span className="tag mb-5 inline-block">Get In Touch</span>
          </div>
          <h2
            className="reveal font-heading font-extrabold text-4xl md:text-5xl text-light leading-[1.12]"
            style={{ transitionDelay: "0.15s" }}
          >
            Let's Build{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
          <p
            className="reveal text-muted font-body text-lg leading-relaxed mt-4"
            style={{ transitionDelay: "0.25s" }}
          >
            Tell us about your project and we'll be in touch within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="reveal flex gap-4 items-start bg-dark-card border border-white/6 rounded-2xl p-5 hover:border-primary/25 transition-all duration-300 group"
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-muted tracking-wider uppercase mb-1">
                    {info.label}
                  </p>
                  <p className="text-light font-body text-sm">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div
              className="reveal bg-dark-card border border-green-500/20 rounded-2xl p-5 flex items-center gap-3"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="font-heading font-bold text-light text-sm">Currently Available</p>
                <p className="text-muted text-xs font-body">Taking new projects for Q2 2026</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="reveal bg-dark-card border border-white/6 rounded-2xl p-8 md:p-10"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-heading font-semibold text-muted tracking-wider uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nimal Kumarage"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold text-muted tracking-wider uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nimal@gmail.com"
                    required
                    className={inputClass}
                  />
                </div>
                
              </div>

              <div className="mb-5">
                <label className="block text-xs font-heading font-semibold text-muted tracking-wider uppercase mb-2">
                  Service Needed
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a service...</option>
                  <option>Brand Identity</option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-7">
                <label className="block text-xs font-heading font-semibold text-muted tracking-wider uppercase mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="mb-5 p-4 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <p className="text-green-300 text-sm font-body">
                    Message sent! We'll be in touch within 24 hours.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <p className="text-red-300 text-sm font-body">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
