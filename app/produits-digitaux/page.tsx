// app/produits-digitaux/page.tsx

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Cpu, Database, Brain, LineChartIcon as ChartLine, Code } from "lucide-react"

const products = [
  {
    id: "agent-laboratory",
    name: "Agent Laboratory",
    description: "Solution d'IA avancée qui automatise la recherche en santé.",
    icon: Cpu,
  },
  {
    id: "healthrag",
    name: "HealthRAG",
    description: "Solution d'IA sécurisée conçue spécifiquement pour le secteur de la santé.",
    icon: Database,
  },
  {
    id: "medivision",
    name: "Medivision",
    description: "Utilise l'IA de pointe pour améliorer l'analyse d'images médicales.",
    icon: Brain,
  },
  {
    id: "predicthealth",
    name: "PredictHealth",
    description: "Utilise des algorithmes d'IA avancés pour prédire les risques de santé.",
    icon: ChartLine,
  },
  {
    id: "tailorai",
    name: "TailorAI",
    description: "Offre des solutions d'IA personnalisées pour répondre aux besoins spécifiques de votre organisation.",
    icon: Code,
  },
]

export default function DigitalProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section id="header" className="bg-[#234B4B] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Nos Produits Digitaux</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Découvrez nos solutions d'IA innovantes conçues pour révolutionner le secteur de la santé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-white section-padding">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] rounded-lg overflow-hidden shadow-lg p-6"
              >
                <product.icon className="w-16 h-16 mx-auto mb-4 text-[#234B4B]" />
                <h3 className="text-xl font-bold mb-2 text-[#234B4B] text-center">{product.name}</h3>
                <p className="text-[#234B4B] mb-4 text-center">{product.description}</p>
                <div className="text-center">
                  <Link href={`/produits-digitaux/${product.id}`} className="btn-primary">
                    En savoir plus
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à Innover dans le Domaine de la Santé ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Découvrez comment nos solutions d'IA peuvent transformer votre approche de la santé.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#9A7A3F]">
            Demandez une Démo
          </Link>
        </div>
      </section>
    </div>
  )
}

