// app/produits-physiques/viniline/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Viniline() {
  return (
    <PageLayout route="/produits-physiques">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Viniline</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">Soulagement des Douleurs Dorsales</h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=Viniline"
              alt="Viniline"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Description du produit</h3>
            <p className="mb-4 text-brown-600">
              Viniline est une solution innovante pour le soulagement des douleurs dorsales, formulée à base de venin
              d'abeille. Ce produit unique combine les propriétés anti-inflammatoires et analgésiques du venin d'abeille
              avec des ingrédients naturels apaisants.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Bénéfices</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Soulage rapidement les douleurs dorsales</li>
              <li>Réduit l'inflammation</li>
              <li>Améliore la mobilité</li>
              <li>Formule naturelle sans effets secondaires</li>
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

