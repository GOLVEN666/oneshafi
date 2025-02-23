// app/produits-physiques/hemoneole/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hemoneole() {
  return (
    <PageLayout route="/produits-physiques">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Hemoneole</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">Solution Naturelle pour les Hémorroïdes</h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=Hemoneole"
              alt="Hemoneole"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Description du produit</h3>
            <p className="mb-4 text-brown-600">
              Hemoneole est une solution naturelle et efficace pour soulager les symptômes des hémorroïdes. Formulé à
              partir d'ingrédients botaniques soigneusement sélectionnés, ce produit offre un soulagement rapide et
              durable.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Bénéfices</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Soulage la douleur et l'inconfort</li>
              <li>Réduit l'inflammation</li>
              <li>Favorise la cicatrisation</li>
              <li>100% naturel et sans effets secondaires</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Acheter maintenant
            </motion.button>
          </div>
        </div>

        <section id="ingredients" className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">Ingrédients</h3>
          <p className="text-brown-600">Hemoneole est composé d'un mélange unique d'extraits de plantes, notamment :</p>
          <ul className="mt-4 list-disc list-inside text-brown-600">
            <li>Hamamélis</li>
            <li>Aloe Vera</li>
            <li>Calendula</li>
            <li>Huile essentielle de lavande</li>
          </ul>
        </section>

        <section id="testimonials" className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">Témoignages</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md">
                <p className="mb-4 italic text-brown-600">
                  "Hemoneole a changé ma vie. Je recommande ce produit à tous ceux qui souffrent d'hémorroïdes."
                </p>
                <p className="font-semibold text-blue-700">- Client satisfait</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">FAQ</h3>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700">Comment utiliser Hemoneole ?</h4>
              <p className="text-brown-600">
                Appliquez une petite quantité d'Hemoneole sur la zone affectée 2 à 3 fois par jour, ou selon les
                recommandations de votre professionnel de santé.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700">
                Combien de temps faut-il pour voir des résultats ?
              </h4>
              <p className="text-brown-600">
                La plupart des utilisateurs rapportent un soulagement dans les 24 à 48 heures suivant la première
                application. Pour des résultats optimaux, utilisez régulièrement pendant 2 à 3 semaines.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </PageLayout>
  )
}

