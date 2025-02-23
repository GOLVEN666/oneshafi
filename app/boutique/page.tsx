"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Hemoneole",
    category: "Produits Naturels",
    image: "/placeholder.svg?text=Hemoneole",
    link: "/produits-physiques/hemoneole",
  },
  {
    name: "Shilajit Brut",
    category: "Produits Naturels",
    image: "/placeholder.svg?text=Shilajit",
    link: "/produits-physiques/shilajit",
  },
  {
    name: "Viniline",
    category: "Produits Naturels",
    image: "/placeholder.svg?text=Viniline",
    link: "/produits-physiques/viniline",
  },
  {
    name: "HealthRAG",
    category: "Services IA",
    image: "/placeholder.svg?text=HealthRAG",
    link: "/produits-digitaux/healthrag",
  },
  {
    name: "Medivision",
    category: "Services IA",
    image: "/placeholder.svg?text=Medivision",
    link: "/produits-digitaux/medivision",
  },
  {
    name: "PredictHealth",
    category: "Services IA",
    image: "/placeholder.svg?text=PredictHealth",
    link: "/produits-digitaux/predicthealth",
  },
]

export default function Boutique() {
  return (
    <PageLayout route="/boutique">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Notre Boutique</h1>
        <p className="mb-8 text-xl text-center text-green-700">Découvrez nos produits naturels et services IA</p>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-blue-700">Filtres</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700">
              Tous les produits
            </button>
            <button className="px-4 py-2 text-green-600 bg-white border border-green-600 rounded-full hover:bg-green-50">
              Produits Naturels
            </button>
            <button className="px-4 py-2 text-green-600 bg-white border border-green-600 rounded-full hover:bg-green-50">
              Services IA
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <span className="text-sm text-green-600">{product.category}</span>
                <h2 className="mb-2 text-xl font-semibold text-blue-700">{product.name}</h2>
                <Link href={product.link}>
                  <motion.span className="text-brown-600 hover:text-brown-800" whileHover={{ x: 5 }}>
                    En savoir plus →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  )
}

