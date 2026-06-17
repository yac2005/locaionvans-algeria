// components/VanCategories.tsx
"use client"

import { vanCategories, siteConfig } from "@/lib/data"

export default function VanCategories() {
  const handleDetails = (name: string) => {
    const text = `Bonjour, je souhaite plus de détails sur le van ${name}.`
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  return (
    <section id="fleet" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1F3D] text-center mb-12">
          {"Nos Catégories de Vans"}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vanCategories.map((van) => (
            <div
              key={van.id}
              className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden bg-[#F7F8FA]">
                <img
                  src={van.image}
                  alt={van.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0F1F3D] mb-3">
                  {van.name}
                </h3>

                <div className="text-sm text-[#6B7280] flex flex-col gap-1 mb-4">
                  <span>{"Volume: "}{van.volume}</span>
                  <span>{"Charge: "}{van.payload}</span>
                </div>

                <p className="text-xs text-[#6B7280] mb-1">{"Prix à partir de:"}</p>
                <p className="text-lg font-bold text-[#0F1F3D] mb-4">
                  {van.pricePerDay}{" DZD/jour"}
                </p>

                <button
                  onClick={() => handleDetails(van.name)}
                  className="w-full bg-[#E8650A] hover:bg-[#FF7A1F] text-white font-semibold rounded px-4 py-2.5 text-sm transition-colors duration-200"
                >
                  {"Voir Détails"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
