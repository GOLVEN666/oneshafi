"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { motion } from "framer-motion"

const products = [
  {
    id: "agent-laboratory",
    name: "Agent Laboratory",
    description:
      "Solution d'IA avancée qui automatise la recherche en santé. Effectue des revues de littérature, génère du code d'apprentissage automatique et rédige des rapports.",
    features: [
      "Revue de littérature automatisée",
      "Génération de code ML",
      "Rédaction de rapports",
      "Analyse de données multi-sources",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "healthrag",
    name: "HealthRAG",
    description:
      "Solution d'IA sécurisée conçue spécifiquement pour le secteur de la santé. Utilise des techniques avancées de traitement du langage naturel pour analyser et extraire des informations pertinentes à partir de vastes ensembles de données médicales.",
    features: [
      "Recherche hybride avancée",
      "Protection des données conforme aux normes RGPD",
      "Support multilingue",
      "Intégration facile avec les systèmes existants",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "medivision",
    name: "Medivision",
    description:
      "Utilise l'IA de pointe pour améliorer l'analyse d'images médicales. Aide les professionnels de santé à détecter précocement les anomalies et à améliorer la précision des diagnostics.",
    features: [
      "Détection précoce des anomalies",
      "Amélioration de la qualité d'image",
      "Analyse automatisée des radiographies, IRM et scanners",
      "Intégration avec les systèmes PACS existants",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "predicthealth",
    name: "PredictHealth",
    description:
      "Utilise des algorithmes d'IA avancés pour prédire les risques de santé et optimiser les ressources médicales. Aide les professionnels de santé à prendre des décisions éclairées et à améliorer les résultats pour les patients.",
    features: [
      "Calcul de scores de risque personnalisés",
      "Prédictions dynamiques basées sur les données en temps réel",
      "Optimisation des ressources hospitalières",
      "Intégration avec les dossiers médicaux électroniques",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "tailorai",
    name: "TailorAI",
    description:
      "Offre des solutions d'IA personnalisées pour répondre aux besoins spécifiques de votre organisation dans le domaine de la santé. Notre équipe d'experts travaille en étroite collaboration avec vous pour développer des solutions innovantes et efficaces.",
    features: [
      "Développement d'IA sur mesure",
      "Intégration de solutions existantes",
      "Formation et support continu",
      "Optimisation des processus grâce à l'IA",
    ],
    image: "/placeholder.svg",
  },
]

const ProductSection = ({ product, index }) => {
  const isOdd = index % 2 !== 0
  return (
    <motion.section
      id={product.id}
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`flex flex-col ${isOdd ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="md:w-1/2 mb-4 md:mb-0 md:px-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:px-4">
        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <h3 className="text-xl font-semibold mb-2">Fonctionnalités clés :</h3>
          <ul className="list-disc list-inside">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            En savoir plus
          </button>
        </div>
      </div>
    </motion.section>
  )
}

const DigitalProductsPage = () => {
  return (
    <PageLayout route="/produits-digitaux">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Produits Digitaux</h1>
        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
      </div>
    </PageLayout>
  )
}

export default DigitalProductsPage

