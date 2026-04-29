import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// Heading font — modern, geometric, very readable
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body font — clean, neutral, excellent legibility
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexin — Creative Digital Agency",
  description:
    "We craft bold digital experiences that elevate brands and drive growth. Design, development, and strategy for forward-thinking companies.",
  keywords: ["digital agency", "web design", "branding", "creative studio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} font-body bg-[#05050D] text-[#E8E8FF] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
