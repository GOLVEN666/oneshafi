// app/produits-physiques/shilajit/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Shilajit() {
  return (
    <PageLayout route="/produits-physiques">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Shilajit Brut</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">Boost d'Énergie et de Vitalité</h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=Shilajit+Brut"
              alt="Shilajit Brut"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Description du produit</h3>
            <p className="mb-4 text-brown-600">
              Le Shilajit Brut est un puissant composé naturel issu des montagnes de l'Himalaya. Riche en minéraux et en
              acides fulviques, il offre un boost d'énergie naturel et soutient la vitalité globale.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Bénéfices</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Augmente l'énergie et réduit la fatigue</li>
              <li>Soutient le système immunitaire</li>
              <li>Améliore les fonctions cognitives</li>
              <li>Favorise la santé des os et des articulations</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Acheter maintenant
            </motion.button>
          </div>
        </div>

        {/* Add sections for Ingredients, Usage Instructions, Testimonials, and FAQ */}
      </motion.div>
    </PageLayout>
  )
}

