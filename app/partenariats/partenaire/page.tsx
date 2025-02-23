// app/partenaire/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DevenirPartenaire() {
  return (
    <PageLayout route="/partenariats">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Devenir Partenaire</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">
          Collaborez avec nous pour innover dans le domaine de la santé
        </h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=Partenariat"
              alt="Devenir Partenaire"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Pourquoi devenir partenaire ?</h3>
            <p className="mb-4 text-brown-600">
              En devenant partenaire de Dar Shefaa & Sheva AI, vous rejoignez un écosystème d'innovation dans le domaine
              de la santé. Nous offrons des opportunités de collaboration uniques, combinant médecine traditionnelle et
              technologie de pointe.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Types de partenariats</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Partenariats de recherche et développement</li>
              <li>Collaborations industrielles</li>
              <li>Partenariats événementiels</li>
              <li>Alliances stratégiques</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Proposer un partenariat
            </motion.button>
          </div>
        </div>

        {/* Add sections for Benefits, Success Stories, and Application Process */}
      </motion.div>
    </PageLayout>
  )
}

