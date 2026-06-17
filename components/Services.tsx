// components/Services.tsx
import { Globe, Plane, Users, Sun, Map } from "lucide-react"
import { services } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={28} />,
  plane: <Plane size={28} />,
  users: <Users size={28} />,
  sun: <Sun size={28} />,
  map: <Map size={28} />,
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">
            Ce que nous offrons
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Nos Services
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border border-white/10 hover:border-[#C9A84C]/50 bg-white/5 hover:bg-white/[0.07] p-8 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[#C9A84C] mb-6 transition-transform duration-300 group-hover:scale-110">
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-3 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="w-0 group-hover:w-8 h-px bg-[#C9A84C] mt-6 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}