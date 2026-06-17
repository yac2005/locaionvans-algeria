// components/Fleet.tsx
import { Users, Luggage, CheckCircle, MessageCircle } from "lucide-react"
import { fleet, siteConfig } from "@/lib/data"

export default function Fleet() {
  return (
    <section id="fleet" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">
            Notre Flotte
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Nos Vans Premium
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleet.map((van) => (
            <div
              key={van.id}
              className="group border border-white/10 hover:border-[#C9A84C]/50 bg-white/5 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={van.image}
                  alt={van.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Van name over image */}
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white font-bold text-xl tracking-wide">
                    {van.name}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">

                {/* Capacity & Luggage */}
                <div className="flex items-center gap-6 mb-6 text-white/60 text-sm">
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-[#C9A84C]" />
                    {van.capacity} passagers
                  </span>
                  <span className="flex items-center gap-2">
                    <Luggage size={16} className="text-[#C9A84C]" />
                    {van.luggage} bagages
                  </span>
                </div>

                {/* Amenities */}
                <ul className="flex flex-col gap-2 mb-8">
                  {van.amenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/50 text-sm">
                      <CheckCircle size={14} className="text-[#C9A84C] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Bonjour, je souhaite réserver le ${van.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border border-[#C9A84C] text-[#C9A84C] px-6 py-3 text-sm tracking-wide hover:bg-[#C9A84C] hover:text-black transition-all duration-200 w-full"
                >
                  <MessageCircle size={16} />
                  Réserver ce van
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}