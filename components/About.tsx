// components/About.tsx
import { Shield, BadgeCheck, Clock, Sparkles, Armchair } from "lucide-react"
import { whyUs } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  armchair: <Armchair size={22} />,
  shield: <Shield size={22} />,
  "badge-check": <BadgeCheck size={22} />,
  clock: <Clock size={22} />,
  star: <Sparkles size={22} />,
}

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Story */}
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">
            {"Qui Sommes-Nous"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {"Votre Partenaire de Confiance en Algérie"}
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-6">
            {"LONAD DZ fournit des services de transport confortables, fiables et bien organisés pour le tourisme, les transferts aéroport et les voyages privés à travers toute l'Algérie."}
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            {"Notre engagement envers la qualité, la sécurité et la ponctualité fait de nous le choix privilégié des particuliers, entreprises et agences de voyage."}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <p className="text-3xl font-bold text-[#C9A84C]">500+</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{"Trajets"}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C9A84C]">48</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{"Wilayas"}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C9A84C]">5★</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{"Satisfaction"}</p>
            </div>
          </div>
        </div>

        {/* Right: Why Us grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyUs.map((item) => (
            <div
              key={item.label}
              className="border border-white/10 hover:border-[#C9A84C]/50 bg-white/5 hover:bg-white/[0.07] p-6 transition-all duration-300"
            >
              <div className="text-[#C9A84C] mb-4">
                {iconMap[item.icon]}
              </div>
              <p className="text-white font-medium text-sm tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
