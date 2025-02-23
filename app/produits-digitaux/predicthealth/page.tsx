// app/produits-digitaux/predicthealth/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function PredictHealth() {
  return (
    <PageLayout route="/produits-digitaux">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">PredictHealth</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">IA Prédictive pour la Santé</h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=PredictHealth"
              alt="PredictHealth"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Description du produit</h3>
            <p className="mb-4 text-brown-600">
              PredictHealth utilise des algorithmes d'IA avancés pour prédire les risques de santé et optimiser les
              ressources médicales. Cette solution aide les professionnels de santé à prendre des décisions éclairées et
              à améliorer les résultats pour les patients.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Fonctionnalités clés</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Calcul de scores de risque personnalisés</li>
              <li>Prédictions dynamiques basées sur les données en temps réel</li>
              <li>Optimisation des ressources hospitalières</li>
              <li>Intégration avec les dossiers médicaux électroniques</li>
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

