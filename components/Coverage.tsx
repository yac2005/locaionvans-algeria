// components/Coverage.tsx
import { MapPin } from "lucide-react"
import { wilayas } from "@/lib/data"

export default function Coverage() {
  return (
    <section id="coverage" className="bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">
            {"Nos Destinations"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {"Nous Couvrons l'Algérie"}
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-6" />
          <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto">
            {"De l'est à l'ouest, du nord au sahara — nous assurons vos transferts à travers toutes les wilayas."}
          </p>
        </div>

        {/* Wilayas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {wilayas.map((wilaya) => (
            <div
              key={wilaya}
              className="group flex items-center gap-3 border border-white/10 hover:border-[#C9A84C]/50 bg-white/5 hover:bg-white/[0.07] px-4 py-3 transition-all duration-300"
            >
              <MapPin size={14} className="text-[#C9A84C] shrink-0" />
              <span className="text-white/60 group-hover:text-white text-sm tracking-wide transition-colors duration-200">
                {wilaya}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-xs tracking-widest uppercase mt-12">
          {"Votre wilaya n'est pas listée ? Contactez-nous directement."}
        </p>

      </div>
    </section>
  )
}
