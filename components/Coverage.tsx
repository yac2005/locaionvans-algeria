// components/Coverage.tsx
import { Building2 } from "lucide-react"
import { coverageRegions, branchOffices, otherCities } from "@/lib/data"

export default function Coverage() {
  return (
    <section className="bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-12">
          <div>
            <p className="text-[#C9A84C] text-sm italic mb-2">{"Notre présence"}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
              {"COUVERTURE NATIONALE"}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {coverageRegions.map((r) => (
              <div key={r.name} className="border border-white/15 rounded px-4 py-2 text-center">
                <p className="text-white text-sm font-semibold">{r.name}</p>
                <p className="text-white/40 text-xs">{r.cities}{" wilayas"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Branch offices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {branchOffices.map((b) => (
            <div
              key={b.city}
              className="border border-white/15 rounded-lg px-5 py-4 flex items-center gap-4"
            >
              <Building2 size={20} className="text-[#C9A84C] shrink-0" />
              <div>
                <p className="text-white/50 text-xs mb-0.5">{"Agence "}{b.city}</p>
                <p className="text-white font-semibold text-sm">{b.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Other cities */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
          {otherCities.map((city) => (
            <div key={city} className="text-center sm:text-left">
              <p className="text-white text-sm font-medium mb-1">{city}</p>
              <a href="#contact" className="text-white/40 hover:text-[#C9A84C] text-xs transition-colors duration-200">
                {"Voir les services"}{" →"}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
