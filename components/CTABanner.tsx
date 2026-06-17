// components/CTABanner.tsx
"use client"

import { siteConfig } from "@/lib/data"

export default function CTABanner() {
  const handleClick = () => {
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
      "_blank"
    )
  }

  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-lg overflow-hidden h-64 sm:h-72">

          {/* Background image */}
          <img
            src="/images/cta-banner.jpg"
            alt="Flotte LONAD DZ"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1F3D]/80" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-8 sm:px-12 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {"Prêt à Démarrer?"}
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              {"Contactez-nous pour une offre personnalisée."}
            </p>
            <button
              onClick={handleClick}
              className="bg-[#E8650A] hover:bg-[#FF7A1F] text-white font-semibold rounded px-6 py-3 text-sm transition-colors duration-200"
            >
              {"Demander un Devis"}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
