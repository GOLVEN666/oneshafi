// app/produits-digitaux/tailorai/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function TailorAI() {
  return (
    <PageLayout route="/produits-digitaux">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">TailorAI</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">Solutions d'IA sur Mesure</h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=TailorAI"
              alt="TailorAI"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Description du service</h3>
            <p className="mb-4 text-brown-600">
              TailorAI offre des solutions d'IA personnalisées pour répondre aux besoins spécifiques de votre
              organisation dans le domaine de la santé. Notre équipe d'experts travaille en étroite collaboration avec
              vous pour développer des solutions innovantes et efficaces.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Nos services</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Développement d'IA sur mesure</li>
              <li>Intégration de solutions existantes</li>
              <li>Formation et support continu</li>
              <li>Optimisation des processus grâce à l'IA</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Discuter de votre projet
            </motion.button>
          </div>
        </div>

        {/* Add sections for Case Studies, Process, and FAQ */}
      </motion.div>
    </PageLayout>
  )
}

