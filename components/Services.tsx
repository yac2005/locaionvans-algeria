// components/Services.tsx
import { services } from "@/lib/data"

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <p className="text-[#C9A84C] text-sm italic text-center mb-2">
          {"Solutions de transport professionnelles"}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-12 tracking-wide">
          {"NOS SERVICES"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <a
              key={service.id}
              href="#contact"
              className={`group relative rounded-lg overflow-hidden h-64 ${
                i === services.length - 1 && services.length % 3 === 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-bold text-xl mb-1">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm flex items-center gap-1">
                  {service.subtitle}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">{"→"}</span>
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
