// components/Hero.tsx
"use client"

import { useEffect, useState } from "react"
import { MessageCircle, ChevronDown } from "lucide-react"
import { siteConfig } from "@/lib/data"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gold bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Eyebrow */}
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">
          {"Transport Premium en Algérie"}
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          {"Voyagez avec "}
          <span className="text-[#C9A84C]">{"Élégance"}</span>
          <br />
          {"et Confort"}
        </h1>

        {/* Subheadline */}
        <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {"Location de vans premium pour vos transferts aéroport, voyages de groupe, excursions et événements à travers toute l'Algérie."}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#C9A84C] text-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#b8973e] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            {"Réserver via WhatsApp"}
          </a>
        <a
          
            href="#services"
            className="flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            {"Découvrir nos services"}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-8 mt-14 text-white/40 text-xs tracking-widest uppercase">
          <span>{"Confort"}</span>
          <span className="text-[#C9A84C]">{"◆"}</span>
          <span>{"Sécurité"}</span>
          <span className="text-[#C9A84C]">{"◆"}</span>
          <span>{"Ponctualité"}</span>
          <span className="text-[#C9A84C]">{"◆"}</span>
          <span>{"Premium"}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">{"Défiler"}</span>
        <ChevronDown size={16} />
      </div>

    </section>
  )
}