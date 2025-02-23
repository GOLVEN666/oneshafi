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
    href: "/produits-digitaux/agent-laboratory",
    imageSrc: "/agent-laboratory.jpg",
  },
  {
    name: "HealthRAG",
    description: "IA sécurisée pour la santé",
    href: "/produits-digitaux/healthrag",
    imageSrc: "/healthrag.jpg",
  },
  {
    name: "Medivision",
    description: "IA pour l'imagerie médicale", 
    href: "/produits-digitaux/medivision",
    imageSrc: "/medivision.jpg",
  },
  {
    name: "PredictHealth",
    description: "IA prédictive pour la santé",
    href: "/produits-digitaux/predicthealth",
    imageSrc: "/predicthealth.jpg",
  },
  {
    name: "TailorAI",
    description: "Solutions d'IA sur mesure",
    href: "/produits-digitaux/tailorai",
    imageSrc: "/tailorai.jpg",
  },
]

export default function DigitalProducts() {
  return (
    <PageLayout route="/produits-digitaux">
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Nos Produits Numériques</h1>
          <p className="mt-4 text-xl text-gray-500">
            Découvrez nos solutions d'IA innovantes pour révolutionner le domaine de la santé.
          </p>

          <div className="grid grid-cols-1 mt-10 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {digitalProducts.map((product) => (
              <motion.div
                key={product.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={product.imageSrc || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={product.href}
                    className="relative z-10 flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    En savoir plus
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

