// lib/data.ts

export const siteConfig = {
  name: "LONAD DZ",
  tagline: "Premium Transportation Company in Algeria",
  phone: "+213669488817",
  whatsapp: "+213669488817",
  whatsappMessage: "Bonjour, je souhaite réserver un van avec LONAD DZ.",
}

export const services = [
  {
    id: 1,
    icon: "globe",
    title: "Transport Touristique",
    description: "Découvrez l'Algérie en confort avec nos vans premium dédiés au tourisme.",
  },
  {
    id: 2,
    icon: "plane",
    title: "Transferts Aéroport",
    description: "Prise en charge ponctuelle depuis et vers tous les aéroports d'Algérie.",
  },
  {
    id: 3,
    icon: "users",
    title: "Voyages Privés & Groupes",
    description: "Solutions sur mesure pour vos déplacements privés ou en groupe.",
  },
  {
    id: 4,
    icon: "sun",
    title: "Voyages d'Été",
    description: "Profitez de la saison estivale avec nos circuits et transferts saisonniers.",
  },
  {
    id: 5,
    icon: "map",
    title: "Excursions Personnalisées",
    description: "Itinéraires sur mesure selon vos envies, votre budget et votre groupe.",
  },
]

export const fleet = [
  {
    id: 1,
    name: "Mercedes Sprinter VIP",
    capacity: 9,
    luggage: 9,
    amenities: ["Intérieur luxueux", "Climatisation", "Accès VIP"],
    image: "/images/van-1.jpg",
  },
  {
    id: 2,
    name: "Mercedes Sprinter Groupe",
    capacity: 14,
    luggage: 14,
    amenities: ["Grand espace", "Climatisation", "Confort premium"],
    image: "/images/van-2.jpg",
  },
]

export const wilayas = [
  "Alger", "Oran", "Constantine", "Annaba", "Sétif",
  "Tlemcen", "Blida", "Béjaïa", "Tizi Ouzou", "Ouargla",
  "Ghardaïa", "Tamanrasset",
]

export const testimonials = [
  {
    id: 1,
    name: "Karim B.",
    text: "Service impeccable, van propre et chauffeur très professionnel. Je recommande vivement LONAD DZ.",
    rating: 5,
  },
  {
    id: 2,
    name: "Samira M.",
    text: "Transfert aéroport parfait, à l'heure et très confortable. Une expérience VIP à un tarif raisonnable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yacine T.",
    text: "Nous avons utilisé LONAD DZ pour un voyage de groupe. Tout était organisé à la perfection.",
    rating: 5,
  },
]

export const partners = [
  "Sonatrach", "Air Algérie", "Ooredoo", "Mobilis", "Cevital", "Djezzy",
]

export const whyUs = [
  { label: "Confort", icon: "armchair" },
  { label: "Sécurité", icon: "shield" },
  { label: "Professionnalisme", icon: "badge-check" },
  { label: "Service Ponctuel", icon: "clock" },
  { label: "Expérience Premium", icon: "star" },
]