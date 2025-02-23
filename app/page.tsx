// app/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <PageLayout route="/">
      <motion.div id="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="mb-6 text-4xl font-bold text-blue-800">Bienvenue chez Dar Shefaa & Sheva AI</h1>
        <p className="mb-8 text-xl text-green-700">
          Découvrez la puissance de la nature et de l'intelligence artificielle pour votre santé
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Notre Histoire
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
          >
            Notre Boutique
          </motion.button>
        </div>
      </motion.div>
    </PageLayout>
  )
}

