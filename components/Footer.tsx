// components/Footer.tsx
import { Phone, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/data"

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#C9A84C]/20 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-widest text-[#C9A84C] mb-2">
              {"LONAD DZ"}
            </h3>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">
              {"Van Rental"}
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {"Transport premium en Algérie. Confort, sécurité et professionnalisme à chaque trajet."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              {"Navigation"}
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200">
                {"Services"}
              </a>
              <a href="#fleet" className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200">
                {"Nos Vans"}
              </a>
              <a href="#coverage" className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200">
                {"Destinations"}
              </a>
              <a href="#testimonials" className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200">
                {"Avis"}
              </a>
              <a href="#about" className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200">
                {"À Propos"}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              {"Contact"}
            </h4>
            <div className="flex flex-col gap-3">
             <a 
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200"
              >
                <MessageCircle size={14} />
                {siteConfig.whatsapp}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200"
              >
                <Phone size={14} />
                {siteConfig.phone}
              </a>

              {/* Socials */}
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.facebook.com/Lonaddz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 hover:border-[#C9A84C] text-white/50 hover:text-[#C9A84C] p-2 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/locationvans_algeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 hover:border-[#C9A84C] text-white/50 hover:text-[#C9A84C] p-2 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            {"© 2026 LONAD DZ. Tous droits réservés."}
          </p>
          <p className="text-white/20 text-xs tracking-wide">
            {"Premium Transportation Company in Algeria"}
          </p>
        </div>

      </div>
    </footer>
  )
}
