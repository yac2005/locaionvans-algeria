// components/WaysToBook.tsx
"use client"

import { Check } from "lucide-react"
import { bookingWays, siteConfig } from "@/lib/data"

export default function WaysToBook() {
  const handleClick = (way: typeof bookingWays[number]) => {
    const text = way.featured
      ? siteConfig.whatsappMessage
      : `Bonjour, je souhaite en savoir plus sur "${way.title}".`
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <p className="text-[#C9A84C] text-sm italic text-center mb-2">
          {"Comment réserver"}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-14 tracking-wide">
          {"MODES DE RÉSERVATION"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {bookingWays.map((way) => (
            <div
              key={way.id}
              className={`rounded-lg p-7 flex flex-col ${
                way.featured
                  ? "bg-black text-white"
                  : "border border-[#E5E5E5] text-black"
              }`}
            >
              <h3 className="font-bold text-lg mb-5">{way.title}</h3>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {way.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check size={15} className="shrink-0 mt-0.5 text-[#C9A84C]" />
                    <span className={way.featured ? "text-white/80" : "text-[#6B7280]"}>{p}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(way)}
                className={`font-semibold text-sm rounded px-5 py-3 transition-colors duration-200 ${
                  way.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {way.cta}{" →"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
