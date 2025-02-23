// app/partenariats/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Link from "next/link"

const partnerships = [
  {
    name: "Devenir Ambassadeur",
    description: "Rejoignez notre communauté et partagez notre vision",
    link: "/partenariats/ambassadeur",
  },
  {
    name: "Devenir Partenaire",
    description: "Collaborez avec nous pour innover dans le domaine de la santé",
    link: "/partenariats/partenaire",
  },
  { name: "Devenir Revendeur", description: "Distribuez nos produits et solutions", link: "/partenariats/revendeur" },
]

export default function Partnerships() {
  return (
    <PageLayout route="/partenariats">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Partenariats & Communauté</h1>
        <p className="mb-8 text-xl text-center text-green-700">
          Rejoignez-nous dans notre mission pour révolutionner la santé
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={partnership.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="mb-2 text-xl font-semibold text-green-700">{partnership.name}</h2>
              <p className="mb-4 text-brown-600">{partnership.description}</p>
              <Link href={partnership.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
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

