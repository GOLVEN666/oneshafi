// app/produits-digitaux/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const digitalProducts = [
  {
    name: "Agent Laboratory",
    description: "Recherche automatisée pour la santé",
    link: "/produits-digitaux/agent-laboratory",
  },
  { name: "HealthRAG", description: "IA sécurisée pour la santé", link: "/produits-digitaux/healthrag" },
  { name: "Medivision", description: "IA pour l'imagerie médicale", link: "/produits-digitaux/medivision" },
  { name: "PredictHealth", description: "IA prédictive pour la santé", link: "/produits-digitaux/predicthealth" },
  { name: "TailorAI", description: "Solutions d'IA sur mesure", link: "/produits-digitaux/tailorai" },
]

export default function DigitalProducts() {
  return (
    <PageLayout route="/produits-digitaux">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Nos Produits Numériques</h1>
        <p className="mb-8 text-xl text-center text-green-700">Découvrez nos solutions d'IA pour la santé</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {digitalProducts.map((product, index) => (
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
              <Link href={product.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  En savoir plus
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  )
}

