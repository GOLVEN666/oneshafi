// app/produits-physiques/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  { name: "Hemoneole", description: "Solution naturelle pour les hémorroïdes" },
  { name: "Shilajit Brut", description: "Boost d'énergie et de vitalité" },
  { name: "Viniline", description: "Soulagement des douleurs dorsales" },
]

export default function PhysicalProducts() {
  return (
    <PageLayout route="/produits-physiques">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Nos Produits Physiques</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <Image
                src={`/placeholder.svg?text=${product.name}`}
                alt={product.name}
                width={300}
                height={200}
                className="mb-4 rounded-md"
              />
              <h2 className="mb-2 text-xl font-semibold text-green-700">{product.name}</h2>
              <p className="text-brown-600">{product.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700"
              >
                En savoir plus
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  )
}

