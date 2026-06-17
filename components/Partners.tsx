// components/Partners.tsx
"use client"

import { partners } from "@/lib/data"

export default function Partners() {
  // Duplicate for seamless infinite scroll
  const doubled = [...partners, ...partners]

  return (
    <section className="bg-black border-y border-[#C9A84C]/20 py-6 overflow-hidden">

      {/* Label */}
      <p className="text-center text-[10px] tracking-[0.4em] text-white/30 uppercase mb-6">
        Ils nous font confiance
      </p>

      {/* Marquee */}
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((partner, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-10 text-white/50 hover:text-[#C9A84C] transition-colors duration-200 text-sm tracking-widest uppercase font-medium"
            >
              <span className="text-[#C9A84C] text-xs">◆</span>
              {partner}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}