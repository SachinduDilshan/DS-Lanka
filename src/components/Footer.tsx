import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaDribbble, FaGithub, FaWhatsapp, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { FaSquareWhatsapp, FaX } from "react-icons/fa6";

const footerLinks = {
  Services: ["Website Development","E-Commerce Solutions","POS Systems","Digital Marketing","Social Media Management","SEO Optimization"],
  Company: ["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@digitalsolutionslanka",
    label: "TikTok",
    hover: "hover:bg-black hover:border-black",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/digitalsolutionslanka?_rdc=1&_rdr#",
    label: "Facebook",
    hover: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/digitalsolutionslanka/",
    label: "Instagram",
    hover: "hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-[#DD2A7B]",
  },
  {
    icon: FaSquareWhatsapp,
    href: "https://www.whatsapp.com/channel/0029VbCn3cV2ZjCuVl2DFV0z",
    label: "WhatsApp Channel",
    hover: "hover:bg-[#25D366] hover:border-[#25D366]",
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send/?phone=756929965&text&type=phone_number&app_absent=0",
    label: "WhatsApp Call",
    hover: "hover:bg-[#25D366] hover:border-[#25D366]",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
    hover: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-white/5">
      {/* CTA Band */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-accent/15 border-b border-white/5 py-10 md:py-16 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-heading font-extrabold text-2xl md:text-5xl text-light mb-3 md:mb-5 leading-tight">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Next Project?
            </span>
          </h2>
          <p className="text-muted font-body text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            Let's talk about how Digital Solutions can help you achieve your digital goals.
          </p>
          <a href="#contact" className="btn-primary text-sm md:text-base px-6 md:px-9 py-3 md:py-4">
            Start a Conversation
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand col — full width on mobile */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="mb-4 block w-fit">
              <Image
                src="/logo.png"
                alt="Digital Solutions Lanka"
                width={100}
                height={60}
                className="h-10 md:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
            <p className="text-muted font-body text-xs md:text-sm leading-relaxed max-w-xs mb-5 md:mb-7">
              A full service creative digital agency crafting bold brands,
              scalable software products, and growth focused digital experiences since 2026.
            </p>
            {/* Socials */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-xl bg-dark-card border border-white/8 flex items-center justify-center text-muted hover:text-white transition-all duration-300 ${s.hover}`}
                >
                  <s.icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Links — 2-col on mobile, individual cols on md+ */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-light text-xs md:text-sm mb-3 md:mb-5 tracking-wide">
                {title}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted text-xs md:text-sm font-body hover:text-light transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 sm:px-6 py-4 md:py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-muted text-xs font-body">
          <p>© {new Date().getFullYear()} Digital Solutions Lanka. All rights reserved.</p>
          <p>
            Crafted with{" "}
            <span className="text-accent">♥</span>{" "}
            Digital Solutions Lanka Team
          </p>
        </div>
      </div>
    </footer>
  );
}
