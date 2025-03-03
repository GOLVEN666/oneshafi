// lib/constant.ts

import { Facebook, Instagram, Twitter } from "lucide-react"

export const productPage = {
  "produits-physiques": {
    title: "Nos Produits Physiques",
    subtitle: "Découvrez notre gamme de produits naturels, conçus pour améliorer votre santé et votre bien-être.",
  },
  "produits-digitaux": {
    title: "Nos Produits Digitaux",
    subtitle: "Découvrez notre gamme de produits digitaux, conçus pour améliorer votre santé et votre bien-être.",
  },
}

export const navigation = [
  {
    route: "/",
    sections: [
      { id: "hero", label: "Home" },
      { id: "features", label: "Features" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      // { id: "testimonials", label: "Testimonials" },
      { id: "cta", label: "Team" },
    ],
  },
  {
    route: "/produits-physiques",
    sections: [
      { id: "header", label: "Header" },
      { id: "products", label: "Products" },
      { id: "cta", label: "cta" },
    ],
  },
  {
    route: "/produits-digitaux",
    sections: [
      { id: "header", label: "Header" },
      { id: "products", label: "Products" },
      { id: "cta", label: "cta" },
    ],
  },
  {
    route: "/partenariats",
    sections: [
      // { id: "ambassadeur", label: "Devenir Ambassadeur" },
      // { id: "partenaire", label: "Devenir Partenaire" },
      // { id: "revendeur", label: "Devenir Revendeur" },
    ],
  },
  {
    route: "/a-propos",
    sections: [
      { id: "header", label: "Notre Histoire" },
      { id: "notre-histoire", label: "Notre Histoire" },
      { id: "notre-valeurs", label: "Notre valeurs" },
      { id: "notre-approche", label: "Notre approche" },
      { id: "notre-equipe", label: "Notre Équipe" },
    ],
  },
  {
    route: "/contact",
    sections: [
      { id: "contact", label: "contact" },
      { id: "support", label: "Support" },
      { id: "map", label: "Map" },
    ],
  },
  {
    route: "/blog",
    sections: [
      { id: "header", label: "Header" },
      { id: "blogs", label: "Blogs" },
      { id: "newsletter", label: "Newsletter" },
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
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
}

