// app/produits-digitaux/medivision/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Medivision() {
  return (
    <PageLayout route="/produits-digitaux">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Medivision</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">IA pour l'Imagerie Médicale</h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=Medivision"
              alt="Medivision"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Description du produit</h3>
            <p className="mb-4 text-brown-600">
              Medivision utilise l'IA de pointe pour améliorer l'analyse d'images médicales. Elle aide les
              professionnels de santé à détecter précocement les anomalies et à améliorer la précision des diagnostics.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Fonctionnalités clés</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Détection précoce des anomalies</li>
              <li>Amélioration de la qualité d'image</li>
              <li>Analyse automatisée des radiographies, IRM et scanners</li>
              <li>Intégration avec les systèmes PACS existants</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Demander une démo
            </motion.button>
          </div>
        </div>

        {/* Add sections for Use Cases, Pricing, and FAQ */}
      </motion.div>
    </PageLayout>
  )
}

