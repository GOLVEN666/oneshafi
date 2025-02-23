// app/revendeur/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DevenirRevendeur() {
  return (
    <PageLayout route="/partenariats">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-blue-800 text-center">Devenir Revendeur</h1>
        <h2 className="mb-8 text-2xl text-green-700 text-center">Distribuez nos produits et solutions innovantes</h2>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=Revendeur"
              alt="Devenir Revendeur"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Avantages du programme de revendeur</h3>
            <ul className="list-disc list-inside mb-4 text-brown-600">
              <li>Commissions attractives sur les ventes</li>
              <li>Formation complète sur nos produits et solutions</li>
              <li>Support marketing et matériel promotionnel</li>
              <li>Accès à notre réseau de professionnels de santé</li>
            </ul>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Produits à distribuer</h3>
            <p className="mb-4 text-brown-600">
              En tant que revendeur, vous aurez l'opportunité de distribuer notre gamme complète de produits naturels et
              de solutions IA pour la santé, y compris Hemoneole, Shilajit Brut, Viniline, et nos services IA innovants.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Devenir Revendeur Officiel
            </motion.button>
          </div>
        </div>

        {/* Add sections for Application Process, Training Program, and FAQ */}
      </motion.div>
    </PageLayout>
  )
}

