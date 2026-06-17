// components/Testimonials.tsx
"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[index]

  return (
    <section id="testimonials" className="bg-black py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Header */}
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">
          {"Avis Clients"}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          {"Ce Qu'ils Disent"}
        </h2>
        <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-16" />

        {/* Quote Icon */}
        <Quote size={32} className="text-[#C9A84C]/40 mx-auto mb-6" />

        {/* Testimonial */}
        <div className="min-h-[160px] flex flex-col items-center justify-center">
          <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-xl">
            {current.text}
          </p>

          {/* Stars */}
          <div className="flex gap-1 mb-3">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>

          {/* Name */}
          <p className="text-white font-semibold tracking-wide">
            {current.name}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            aria-label="Avis précédent"
            className="border border-white/20 hover:border-[#C9A84C] text-white/60 hover:text-[#C9A84C] p-3 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Avis ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === index ? "bg-[#C9A84C] w-6" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Avis suivant"
            className="border border-white/20 hover:border-[#C9A84C] text-white/60 hover:text-[#C9A84C] p-3 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}
