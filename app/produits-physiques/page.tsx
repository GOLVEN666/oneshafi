"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { motion } from "framer-motion"

const products = [
  {
    id: "hemoneole",
    name: "Hemoneole",
    description:
      "Solution naturelle pour les hémorroïdes, formulée à partir d'ingrédients botaniques soigneusement sélectionnés. Offre un soulagement rapide et durable.",
    benefits: [
      "Soulage la douleur et l'inconfort",
      "Réduit l'inflammation",
      "Favorise la cicatrisation",
      "100% naturel",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "shilajit",
    name: "Shilajit Brut",
    description:
      "Composé naturel issu des montagnes de l'Himalaya, riche en minéraux et en acides fulviques. Offre un boost d'énergie naturel et soutient la vitalité globale.",
    benefits: [
      "Augmente l'énergie",
      "Soutient le système immunitaire",
      "Améliore les fonctions cognitives",
      "Favorise la santé des os",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "viniline",
    name: "Viniline",
    description:
      "Solution innovante pour le soulagement des douleurs dorsales, formulée à base de venin d'abeille. Combine les propriétés anti-inflammatoires et analgésiques du venin d'abeille avec des ingrédients naturels apaisants.",
    benefits: [
      "Soulage rapidement les douleurs dorsales",
      "Réduit l'inflammation",
      "Améliore la mobilité",
      "Formule naturelle",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "plan-personnalise",
    name: "Le Plan Personnalisé",
    description:
      "Programme de santé sur mesure, conçu pour répondre à vos besoins spécifiques. Combine nos produits naturels avec des recommandations personnalisées pour optimiser votre bien-être.",
    benefits: [
      "Analyse approfondie de votre santé",
      "Plan d'action personnalisé",
      "Suivi régulier",
      "Ajustements en fonction de vos progrès",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "pilule-du-bonheur",
    name: "La Pilule du Bonheur",
    description:
      "Supplément naturel conçu pour améliorer l'humeur et réduire le stress. Formulé à partir d'ingrédients reconnus pour leurs propriétés adaptogènes et leur capacité à favoriser le bien-être mental.",
    benefits: [
      "Améliore l'humeur",
      "Réduit le stress et l'anxiété",
      "Favorise un sommeil réparateur",
      "Augmente la résistance au stress",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "bundles",
    name: "Bundles & Combos",
    description:
      "Ensembles de produits soigneusement sélectionnés pour offrir des solutions complètes à des problèmes de santé spécifiques. Profitez de réductions en achetant nos produits en combo.",
    benefits: [
      "Solutions complètes",
      "Économies sur les achats groupés",
      "Synergie entre les produits",
      "Facilité d'utilisation",
    ],
    image: "/placeholder.svg",
  },
]

const ProductSection = ({ product, index }) => {
  const isOdd = index % 2 !== 0
  return (
    <motion.section
      id={product.id}
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`flex flex-col ${isOdd ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="md:w-1/2 mb-4 md:mb-0 md:px-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:px-4">
        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <h3 className="text-xl font-semibold mb-2">Bénéfices :</h3>
          <ul className="list-disc list-inside">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            En savoir plus
          </button>
        </div>
      </div>
    </motion.section>
  )
}

const PhysicalProductsPage = () => {
  return (
    <PageLayout route="/produits-physiques">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Produits Physiques</h1>
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </div>
    </PageLayout>
  )
}

export default PhysicalProductsPage

