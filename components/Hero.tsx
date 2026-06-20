// components/Hero.tsx
import { Truck, Clock, BadgeCheck } from "lucide-react"
import { siteConfig, trustBullets } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck size={18} />,
  clock: <Clock size={18} />,
  "badge-check": <BadgeCheck size={18} />,
}

export default function Hero() {
  return (
    <section className="relative h-[600px] sm:h-[640px] overflow-hidden">

      {/* Background image */}
      <img
        src="/images/hero-bg.jpg"
        alt="LONAD DZ"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl">

          <p className="text-white/70 text-sm tracking-widest uppercase mb-3">
            {"Transport Premium"}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            {"LOCATION VANS DZ"}
          </h1>

          <p className="text-[#C9A84C] text-base sm:text-lg mb-5">
            {"Location de Vans Premium en Algérie"}
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            {"Service exceptionnel, chauffeurs professionnels, et une flotte premium pour ceux qui exigent l'excellence."}
          </p>

          {/* Trust bullets */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
            {trustBullets.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm">
                <span className="text-[#C9A84C]">{iconMap[item.icon]}</span>
                {item.text}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
