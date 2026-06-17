// components/BookingBar.tsx
"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, Users } from "lucide-react"
import { siteConfig } from "@/lib/data"

export default function BookingBar() {
  const [tab, setTab] = useState<"transfer" | "hourly">("transfer")
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [passengers, setPassengers] = useState(1)

  const handleBook = () => {
    const mode = tab === "transfer" ? "Transfert point à point" : "Location à l'heure"
    const parts = [`Mode: ${mode}`]
    if (pickup) parts.push(`Départ: ${pickup}`)
    if (tab === "transfer" && destination) parts.push(`Destination: ${destination}`)
    if (date) parts.push(`Date: ${date}`)
    if (time) parts.push(`Heure: ${time}`)
    parts.push(`Passagers: ${passengers}`)

    const text = `Bonjour, je souhaite réserver un van. ${parts.join(", ")}.`
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  return (
    <div className="relative z-20 max-w-4xl mx-auto px-4 -mt-16 sm:-mt-20">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden">

        {/* Tabs */}
        <div className="flex border-b border-[#E5E5E5]">
          <button
            onClick={() => setTab("transfer")}
            className={`flex-1 sm:flex-none px-6 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200 ${
              tab === "transfer" ? "bg-black text-white" : "text-[#6B7280] hover:bg-[#F5F5F3]"
            }`}
          >
            <MapPin size={15} />
            {"Transfert point à point"}
          </button>
          <button
            onClick={() => setTab("hourly")}
            className={`flex-1 sm:flex-none px-6 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200 ${
              tab === "hourly" ? "bg-black text-white" : "text-[#6B7280] hover:bg-[#F5F5F3]"
            }`}
          >
            <Clock size={15} />
            {"Location à l'heure"}
          </button>
        </div>

        {/* Form */}
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">

          <div className="flex flex-col gap-1.5 lg:col-span-1">
            <label className="text-[#6B7280] text-xs">{"Lieu de départ"}</label>
            <div className="flex items-center gap-2 border border-[#E5E5E5] rounded px-3 py-2.5">
              <MapPin size={14} className="text-[#6B7280] shrink-0" />
              <input
                type="text"
                placeholder="Adresse, ville..."
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full text-sm text-black outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 lg:col-span-1">
            <label className="text-[#6B7280] text-xs">{"Date"}</label>
            <div className="flex items-center gap-2 border border-[#E5E5E5] rounded px-3 py-2.5">
              <Calendar size={14} className="text-[#6B7280] shrink-0" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm text-black outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 lg:col-span-1">
            <label className="text-[#6B7280] text-xs">{"Heure"}</label>
            <div className="flex items-center gap-2 border border-[#E5E5E5] rounded px-3 py-2.5">
              <Clock size={14} className="text-[#6B7280] shrink-0" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full text-sm text-black outline-none"
              />
            </div>
          </div>

          {tab === "transfer" ? (
            <div className="flex flex-col gap-1.5 lg:col-span-1">
              <label className="text-[#6B7280] text-xs">{"Destination"}</label>
              <div className="flex items-center gap-2 border border-[#E5E5E5] rounded px-3 py-2.5">
                <MapPin size={14} className="text-[#6B7280] shrink-0" />
                <input
                  type="text"
                  placeholder="Adresse, ville..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-sm text-black outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5 lg:col-span-1">
              <label className="text-[#6B7280] text-xs">{"Passagers"}</label>
              <div className="flex items-center gap-2 border border-[#E5E5E5] rounded px-3 py-2.5">
                <Users size={14} className="text-[#6B7280] shrink-0" />
                <input
                  type="number"
                  min={1}
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full text-sm text-black outline-none"
                />
              </div>
            </div>
          )}

          <button
            onClick={handleBook}
            className="bg-black hover:bg-[#222] text-white font-semibold rounded px-5 py-3 text-sm transition-colors duration-200 lg:col-span-1"
          >
            {"Réserver en Ligne"}
          </button>

        </div>
      </div>
    </div>
  )
}
