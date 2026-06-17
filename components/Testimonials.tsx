// components/Testimonials.tsx
import { Star } from "lucide-react"
import { reviewStats, testimonials } from "@/lib/data"

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F5F5F3] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
              {"Ce Que Disent Nos Clients"}
            </h2>
            <p className="text-[#6B7280] text-sm italic">
              {"Avis de clients vérifiés"}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-lg border border-[#E5E5E5] px-5 py-4">
            <span className="text-3xl font-bold text-black">{reviewStats.rating}</span>
            <div>
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <p className="text-[#6B7280] text-xs">
                {"Basé sur "}{reviewStats.reviewCount}{"+ avis"}
              </p>
            </div>
          </div>
        </div>

        {/* Sub-scores */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {reviewStats.subScores.map((s) => (
            <div key={s.label} className="bg-white border border-[#E5E5E5] rounded-lg p-5">
              <p className="text-black text-sm font-medium mb-3">{s.label}</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-[#E5E5E5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C9A84C] rounded-full"
                    style={{ width: `${(s.score / 5) * 100}%` }}
                  />
                </div>
                <span className="text-[#6B7280] text-xs shrink-0">{s.score}{"/5.0"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white border border-[#E5E5E5] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-black text-sm font-semibold">{t.name}</p>
                  <p className="text-[#6B7280] text-xs">{"Avis de "}{t.platform}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>

              <p className="text-[#6B7280] text-sm leading-relaxed">
                {"\u201C"}{t.text}{"\u201D"}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
