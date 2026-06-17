// components/Partners.tsx
import { partners } from "@/lib/data"

export default function Partners() {
  return (
    <section className="bg-[#0A0A0A] py-6 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {partners.map((partner) => (
          <span
            key={partner}
            className="text-white/30 text-sm font-semibold tracking-wide uppercase"
          >
            {partner}
          </span>
        ))}
      </div>
    </section>
  )
}
