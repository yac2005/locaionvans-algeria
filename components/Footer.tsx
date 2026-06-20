// components/Footer.tsx
import { siteConfig, otherCities } from "@/lib/data"

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
    <footer className="bg-[#0A0A0A] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-widest text-white mb-1">
              {"Location Vans DZ"}
            </h3>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase mb-4">
              {"Premium Van Rental"}
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              {"LOCATION VANS DZ fournit un transport premium à travers l'Algérie. Confort, sécurité, professionnalisme."}
            </p>
            <div className="flex gap-3">
            <a  
                href="https://www.facebook.com/Lonaddz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
             <a 
                href="https://www.instagram.com/locationvans_algeria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Top cities */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              {"Villes Principales"}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {otherCities.slice(0, 6).map((city) => (
                <span key={city} className="text-white/40 text-sm">{city}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              {"Liens Utiles"}
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-200">{"À Propos"}</a>
              <a href="#fleet" className="text-white/40 hover:text-white text-sm transition-colors duration-200">{"Notre Flotte"}</a>
              <a href="#contact" className="text-white/40 hover:text-white text-sm transition-colors duration-200">{"Contact"}</a>
              <a href="#testimonials" className="text-white/40 hover:text-white text-sm transition-colors duration-200">{"Avis"}</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              {"Nous Contacter"}
            </h4>
            <div className="flex flex-col gap-2">
              <a href={`tel:${siteConfig.phone}`} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                {"WhatsApp"}
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            {"© 2026 Location Vans DZ. Tous droits réservés."}
          </p>
          <div className="flex gap-5 text-white/30 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors duration-200">{"Conditions"}</a>
            <a href="#" className="hover:text-white/60 transition-colors duration-200">{"Confidentialité"}</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
