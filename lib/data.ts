// lib/data.ts

export const siteConfig = {
  name: "LONAD DZ",
  tagline: "Location de Vans Premium en Algérie",
  phone: "+213669488817",
  whatsapp: "213669488817",
  whatsappMessage: "Bonjour, je souhaite réserver un van avec LONAD DZ.",
  sinceYear: 2020,
}

export const colors = {
  black: "#0A0A0A",
  white: "#FFFFFF",
  offWhite: "#F5F5F3",
  gold: "#C9A84C",
  gray: "#6B7280",
  border: "#E5E5E5",
}

export const trustBullets = [
  { icon: "truck", text: "Flotte moderne et récente" },
  { icon: "clock", text: "Disponibilité 24/7 et confirmation immédiate" },
  { icon: "badge-check", text: "Partenaire de confiance pour entreprises et agences" },
]

export const partners = [
  "Sonatrach", "Air Algérie", "Ooredoo", "Mobilis", "Cevital", "Djezzy", "Naftal", "Condor",
]

export const services = [
  {
    id: 1,
    title: "Transferts Aéroport",
    subtitle: "Arrivées et départs sans stress",
    image: "/images/service-airport.jpg",
  },
  {
    id: 2,
    title: "Transport Touristique",
    subtitle: "Découvrez l'Algérie en confort",
    image: "/images/service-tourism.jpg",
  },
  {
    id: 3,
    title: "Voyages d'Entreprise",
    subtitle: "Solutions pour équipes et événements",
    image: "/images/service-corporate.jpg",
  },
  {
    id: 4,
    title: "Voyages de Groupe",
    subtitle: "Pour familles, amis et associations",
    image: "/images/service-group.jpg",
  },
  {
    id: 5,
    title: "Excursions Personnalisées",
    subtitle: "Itinéraires sur mesure",
    image: "/images/service-custom.jpg",
  },
]

export const fleetCategories = [
  {
    id: 1,
    name: "Vans Premium",
    description: "Confort et style pour trajets individuels et petits groupes",
    vehicles: [
      {
        id: 1,
        name: "Sprinter VIP",
        badge: "Mercedes Sprinter ou équivalent",
        passengers: 9,
        luggage: 9,
        amenities: ["Intérieur cuir", "Climatisation", "WiFi"],
        image: "/images/van-vip.jpg",
      },
      {
        id: 2,
        name: "Sprinter Standard",
        badge: "Mercedes Sprinter ou équivalent",
        passengers: 9,
        luggage: 9,
        amenities: ["Climatisation", "Confort premium"],
        image: "/images/van-standard.jpg",
      },
      {
        id: 3,
        name: "Van Compact",
        badge: "Mercedes Vito ou équivalent",
        passengers: 6,
        luggage: 6,
        amenities: ["Climatisation", "Sièges ajustables"],
        image: "/images/van-compact.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Minibus & Groupe",
    description: "Transport collectif pour groupes plus importants",
    vehicles: [
      {
        id: 4,
        name: "Minibus 14 Places",
        badge: "Mercedes Sprinter Long ou équivalent",
        passengers: 14,
        luggage: 14,
        amenities: ["Grand espace", "Climatisation"],
        image: "/images/van-medium.jpg",
      },
      {
        id: 5,
        name: "Minibus 19 Places",
        badge: "Mercedes ou équivalent",
        passengers: 19,
        luggage: 19,
        amenities: ["Confort groupe", "Climatisation"],
        image: "/images/van-large.jpg",
      },
      {
        id: 6,
        name: "Bus Excursion",
        badge: "Bus longue distance ou équivalent",
        passengers: 30,
        luggage: 30,
        amenities: ["Confort longue route", "Climatisation"],
        image: "/images/van-bus.jpg",
      },
    ],
  },
]

export const reviewStats = {
  rating: 4.8,
  reviewCount: 120,
  subScores: [
    { label: "Qualité du Service", score: 4.8 },
    { label: "Professionnalisme du Chauffeur", score: 4.9 },
    { label: "État du Véhicule", score: 4.7 },
  ],
}

export const testimonials = [
  {
    id: 1,
    name: "Karim B.",
    platform: "Facebook",
    text: "Service impeccable, van propre et chauffeur très professionnel. Je recommande vivement LONAD DZ.",
    rating: 5,
  },
  {
    id: 2,
    name: "Samira M.",
    platform: "Google",
    text: "Transfert aéroport parfait, à l'heure et très confortable. Une expérience VIP à un tarif raisonnable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yacine T.",
    platform: "Facebook",
    text: "Nous avons utilisé LONAD DZ pour un voyage de groupe. Tout était organisé à la perfection.",
    rating: 5,
  },
]

export const coverageRegions = [
  { name: "Alger & Centre", cities: 6 },
  { name: "Est Algérien", cities: 5 },
  { name: "Ouest Algérien", cities: 4 },
  { name: "Sud Algérien", cities: 3 },
]

export const branchOffices = [
  { city: "Alger", service: "Transferts Aéroport & Transport Groupe" },
  { city: "Oran", service: "Transport Touristique & Événements" },
  { city: "Constantine", service: "Transport d'Entreprise" },
  { city: "Ouargla", service: "Excursions Sud Algérien" },
]

export const otherCities = [
  "Sétif", "Tlemcen", "Blida", "Béjaïa", "Tizi Ouzou", "Ghardaïa", "Annaba", "Batna",
]

export const wilayas = [
  "Alger", "Oran", "Constantine", "Annaba", "Sétif",
  "Tlemcen", "Blida", "Béjaïa", "Tizi Ouzou", "Ouargla",
  "Ghardaïa", "Tamanrasset",
]

export const bookingWays = [
  {
    id: 1,
    title: "Réservation en Ligne",
    points: ["Confirmation immédiate", "Tarifs transparents", "Disponible 24/7"],
    cta: "Réserver Maintenant",
    featured: true,
  },
  {
    id: 2,
    title: "Contact Direct",
    points: ["Téléphone disponible", "WhatsApp réponse rapide", "Email pour devis détaillé"],
    cta: "Nous Contacter",
    featured: false,
  },
  {
    id: 3,
    title: "Partenariat B2B",
    points: ["Gestionnaire de compte dédié", "Réunion sur demande", "Contrats personnalisés"],
    cta: "Demander un Rendez-vous",
    featured: false,
  },
]
