"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Hemoneole",
    category: "Produits Naturels",
    image: "/placeholder.svg?text=Hemoneole",
    price: "29.99€",
  },
  {
    id: 2,
    name: "Shilajit Brut",
    category: "Produits Naturels",
    image: "/placeholder.svg?text=Shilajit+Brut",
    price: "39.99€",
  },
  {
    id: 3,
    name: "Viniline",
    category: "Produits Naturels",
    image: "/placeholder.svg?text=Viniline",
    price: "24.99€",
  },
  {
    id: 4,
    name: "HealthRAG",
    category: "Services IA",
    image: "/placeholder.svg?text=HealthRAG",
    price: "Sur devis",
  },
  {
    id: 5,
    name: "Medivision",
    category: "Services IA",
    image: "/placeholder.svg?text=Medivision",
    price: "Sur devis",
  },
  {
    id: 6,
    name: "PredictHealth",
    category: "Services IA",
    image: "/placeholder.svg?text=PredictHealth",
    price: "Sur devis",
  },
]

export default function Boutique() {
  const [filter, setFilter] = useState("Tous")

  const filteredProducts = filter === "Tous" ? products : products.filter((product) => product.category === filter)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#234B4B] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Notre Boutique</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Découvrez notre gamme de produits naturels et services IA pour améliorer votre santé
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="bg-white section-padding">
        <div className="container">
          {/* Filter and Search */}
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex mb-4 space-x-4 md:mb-0">
              {["Tous", "Produits Naturels", "Services IA"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full ${
                    filter === category ? "bg-[#9A7A3F] text-white" : "bg-gray-200 text-[#234B4B]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9A7A3F]"
              />
              <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-48 mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{product.name}</h3>
                <p className="text-[#9A7A3F] mb-2">{product.category}</p>
                <p className="text-[#234B4B] font-bold mb-4">{product.price}</p>
                <Link href={`/produits/${product.id}`} className="w-full text-center btn-primary">
                  Voir le produit
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Besoin d'aide pour choisir ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Nos experts sont là pour vous guider dans votre parcours de santé personnalisé.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#9A7A3F]">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}

