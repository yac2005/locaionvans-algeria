// components/Navbar.tsx
"use client"

import { useState, useEffect } from "react"
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
    { label: "Flotte", href: "#fleet" },
    { label: "Couverture", href: "#coverage" },
    { label: "Avis", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-widest text-white">
              {"Location DZ"}
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase">
              {"Van Rental"}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="text-white/70 text-sm hover:text-white transition-colors duration-200">
              {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-sm font-semibold rounded px-4 py-2 hover:bg-white/90 transition-colors duration-200"
            >
              {"Réserver"}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-sm font-semibold rounded px-4 py-2.5 text-center mt-2"
          >
            {"Réserver"}
          </a>
        </div>
      )}
    </header>
  )
}
