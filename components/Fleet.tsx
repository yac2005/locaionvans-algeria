// components/Fleet.tsx
"use client"

import { Users, Luggage } from "lucide-react"
import { fleetCategories, siteConfig } from "@/lib/data"

export default function Fleet() {
  const handleBook = (name: string) => {
    const text = `Bonjour, je souhaite réserver le ${name}.`
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  const handleDetails = (name: string) => {
    const text = `Bonjour, je souhaite plus de détails sur le ${name}.`
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  return (
    <section id="fleet" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-3">
          {"NOTRE FLOTTE"}
        </h2>
        <p className="text-[#6B7280] text-sm text-center mb-14 max-w-xl mx-auto">
          {"Choisissez parmi notre gamme de vans et minibus soigneusement entretenus, adaptés à vos besoins."}
        </p>

        {fleetCategories.map((category) => (
          <div key={category.id} className="mb-14">

            {/* Category header */}
            <div className="bg-[#F5F5F3] rounded-lg text-center py-4 mb-8">
              <h3 className="text-black font-bold text-lg">{category.name}</h3>
              <p className="text-[#6B7280] text-xs italic mt-1">{category.description}</p>
            </div>

            {/* Vehicles grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.vehicles.map((v) => (
                <div key={v.id} className="border border-[#E5E5E5] rounded-lg overflow-hidden">

                  {/* Image with passenger/luggage badge */}
                  <div className="relative h-44 bg-[#F5F5F3]">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/90 text-black text-xs font-medium rounded px-2 py-1 flex items-center gap-1">
                        <Users size={12} />{v.passengers}
                      </span>
                      <span className="bg-white/90 text-black text-xs font-medium rounded px-2 py-1 flex items-center gap-1">
                        <Luggage size={12} />{v.luggage}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <h4 className="text-black font-bold text-base mb-2">{v.name}</h4>
                    <span className="inline-block bg-[#F5F5F3] text-[#6B7280] text-xs rounded px-2 py-1 mb-4">
                      {v.badge}
                    </span>

                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
                      {v.amenities.map((a) => (
                        <span key={a} className="text-[#6B7280] text-xs">{a}</span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleBook(v.name)}
                        className="flex-1 bg-black hover:bg-[#222] text-white text-xs font-semibold rounded px-3 py-2.5 transition-colors duration-200"
                      >
                        {"Réserver"}
                      </button>
                      <button
                        onClick={() => handleDetails(v.name)}
                        className="flex-1 border border-[#E5E5E5] hover:border-black text-black text-xs font-semibold rounded px-3 py-2.5 transition-colors duration-200"
                      >
                        {"Voir Détails"}
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
