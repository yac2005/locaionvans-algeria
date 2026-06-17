// components/About.tsx
import { Truck, Headset, HandCoins } from "lucide-react"
import { whyUs } from "@/lib/data"

const icons = [Truck, Headset, HandCoins]

export default function About() {
  return (
    <section id="about" className="bg-[#F7F8FA] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F1F3D] text-center mb-12">
          {"Pourquoi Nous Choisir"}
        </h2>

        {/* 3 points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {whyUs.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={item.title} className="flex flex-col gap-3">
                <Icon size={28} className="text-[#E8650A]" />
                <h3 className="text-base font-bold text-[#0F1F3D]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
