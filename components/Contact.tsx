// components/Contact.tsx
"use client"

import { useState } from "react"
import { MessageCircle, Phone, Send } from "lucide-react"
import { siteConfig } from "@/lib/data"

export default function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const buildWhatsappLink = () => {
    const text = name
      ? `Bonjour, je m'appelle ${name}. ${message || siteConfig.whatsappMessage}`
      : message || siteConfig.whatsappMessage
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="contact" className="bg-black py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">
            {"Contactez-Nous"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {"Réservez Votre Trajet"}
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Quick contact */}
          <div className="flex flex-col gap-6">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-[#C9A84C]/30 hover:border-[#C9A84C] bg-white/5 hover:bg-white/[0.07] p-6 transition-all duration-300"
            >
              <div className="bg-[#C9A84C] text-black p-3 rounded-full">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">{"WhatsApp"}</p>
                <p className="text-white/50 text-sm">{siteConfig.whatsapp}</p>
              </div>
            </a>
            <a
            
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-4 border border-white/10 hover:border-[#C9A84C]/50 bg-white/5 hover:bg-white/[0.07] p-6 transition-all duration-300"
            >
              <div className="bg-white/10 text-[#C9A84C] p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">{"Téléphone"}</p>
                <p className="text-white/50 text-sm">{siteConfig.phone}</p>
              </div>
            </a>

            <p className="text-white/40 text-sm leading-relaxed mt-4">
              {"Disponible 7j/7 pour vos réservations et questions. Réponse rapide garantie."}
            </p>
          </div>

          {/* Right: Quick form -> WhatsApp */}
          <div className="border border-white/10 bg-white/5 p-8">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
              {"Envoyer une Demande Rapide"}
            </h3>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black/40 border border-white/10 focus:border-[#C9A84C] text-white placeholder-white/30 px-4 py-3 text-sm outline-none transition-colors duration-200"
              />

              <textarea
                placeholder="Votre message (destination, date, nombre de passagers...)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="bg-black/40 border border-white/10 focus:border-[#C9A84C] text-white placeholder-white/30 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
              />
              <a
              
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#C9A84C] text-black font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#b8973e] transition-all duration-200"
              >
                <Send size={16} />
                {"Envoyer via WhatsApp"}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
