// components/Navbar.tsx
"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { siteConfig } from "@/lib/data"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Nos Vans", href: "#fleet" },
    { label: "Destinations", href: "#coverage" },
    { label: "Avis", href: "#testimonials" },
    { label: "À Propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="text-2xl font-bold tracking-widest text-[#C9A84C]">
              LONAD DZ
            </span>
            <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase">
              Van Rental
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-[#C9A84C] tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden md:flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] px-4 py-2 text-sm tracking-wide hover:bg-[#C9A84C] hover:text-black transition-all duration-200"
          >
            <Phone size={14} />
            {siteConfig.phone}
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/98 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 border-t border-[#C9A84C]/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/70 hover:text-[#C9A84C] tracking-wide transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] px-4 py-2 text-sm tracking-wide mt-2 justify-center"
          >
            <Phone size={14} />
            {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
