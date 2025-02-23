// lib/constant.ts

import { Facebook, Instagram, Twitter } from "lucide-react"
export const navigation = [
  {
    route: "/",
    sections: [
       { id: "hero", label: "Home" },
      { id: "features", label: "Features" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "testimonials", label: "Testimonials" },
      { id: "team", label: "Team" },
      { id: "contact", label: "Contact" },
    ],
  },
  {
    route: "/produits-physiques",
    sections: [
      { id: "hemoneole", label: "Hemoneole" },
      { id: "shilajit", label: "Shilajit Brut" },
      { id: "viniline", label: "Viniline" },
      { id: "plan-personnalise", label: "Le Plan Personnalisé" },
      { id: "pilule-du-bonheur", label: "La Pilule du Bonheur" },
      { id: "bundles", label: "Bundles & Combos" },
    ],
  },
  {
    route: "/produits-digitaux",
    sections: [
      { id: "agent-laboratory", label: "Agent Laboratory" },
      { id: "healthrag", label: "HealthRAG" },
      { id: "medivision", label: "Medivision" },
      { id: "predicthealth", label: "PredictHealth" },
      { id: "tailorai", label: "TailorAI" },
    ],
  },
  {
    route: "/partenariats",
    sections: [
      { id: "ambassadeur", label: "Devenir Ambassadeur" },
      { id: "partenaire", label: "Devenir Partenaire" },
      { id: "revendeur", label: "Devenir Revendeur" },
    ],
  },
  {
    route: "/a-propos",
    sections: [
      { id: "notre-histoire", label: "Notre Histoire" },
      { id: "notre-vision", label: "Notre Vision" },
      { id: "notre-equipe", label: "Notre Équipe" },
    ],
  },
  {
    route: "/contact",
    sections: [
      { id: "faq", label: "FAQ" },
      { id: "support", label: "Support" },
    ],
  },
  {
    route: "/blog",
    sections: [
      { id: "medecine-ancestrale", label: "Médecine Ancestrale" },
      { id: "ia-et-sante", label: "IA et Santé" },
      { id: "temoignages", label: "Témoignages" },
    ],
  },
]

export const footerNavigation = {
  products: [
    { name: "Produits Physiques", href: "/produits-physiques" },
    { name: "Produits Digitaux", href: "/produits-digitaux" },
  ],
  company: [
    { name: "À Propos", href: "/a-propos" },
    { name: "Blog", href: "/blog" },
    { name: "Emplois", href: "/emplois" },
  ],
  legal: [
    { name: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
    { name: "Conditions Générales de Vente", href: "/conditions-generales-de-vente" },
    { name: "Mentions Légales", href: "/mentions-legales" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter 
    },
  ],
}

