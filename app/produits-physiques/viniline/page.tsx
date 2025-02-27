// app/produits-physiques/viniline/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, Star } from "lucide-react"

export default function Viniline() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#234B4B] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Viniline</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Solution innovante pour le soulagement des douleurs dorsales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Image
                src="/placeholder.svg?text=Viniline"
                alt="Viniline"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez Viniline</h2>
              <p className="mb-6 text-[#234B4B]">
                Viniline est une solution innovante pour le soulagement des douleurs dorsales, formulée à base de venin
                d'abeille. Ce produit unique combine les propriétés anti-inflammatoires et analgésiques du venin
                d'abeille avec des ingrédients naturels apaisants.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Soulage rapidement les douleurs dorsales",
                  "Réduit l'inflammation",
                  "Améliore la mobilité",
                  "Formule naturelle sans effets secondaires",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-[#234B4B]">
                    <Check className="w-5 h-5 mr-2 text-[#9A7A3F]" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-primary">
                Commander maintenant
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Comment fonctionne Viniline ?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Pénétration profonde",
                description:
                  "Le venin d'abeille pénètre profondément dans les tissus pour cibler la source de la douleur.",
              },
              {
                title: "Action anti-inflammatoire",
                description: "Les composés actifs réduisent l'inflammation et soulagent la douleur.",
              },
              {
                title: "Régénération tissulaire",
                description: "Viniline stimule la régénération naturelle des tissus pour une guérison à long terme.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{step.title}</h3>
                <p className="text-[#234B4B]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Comment utiliser Viniline</h2>
          <div className="max-w-2xl mx-auto">
            <p className="mb-4 text-[#234B4B]">1. Nettoyez et séchez soigneusement la zone à traiter.</p>
            <p className="mb-4 text-[#234B4B]">2. Appliquez une fine couche de Viniline sur la zone douloureuse.</p>
            <p className="mb-4 text-[#234B4B]">3. Massez doucement pour faire pénétrer le produit.</p>
            <p className="mb-4 text-[#234B4B]">
              4. Répétez l'application 2 à 3 fois par jour ou selon les recommandations de votre praticien.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Témoignages de nos clients</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Pierre M.",
                comment:
                  "Viniline a considérablement réduit mes douleurs dorsales chroniques. Je peux enfin reprendre mes activités normales.",
              },
              {
                name: "Sophie L.",
                comment:
                  "J'étais sceptique au début, mais Viniline a vraiment fait des merveilles pour mon mal de dos. Je le recommande vivement.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <p className="mb-4 text-[#234B4B] italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 inline-block text-[#9A7A3F]" fill="#9A7A3F" />
                    ))}
                  </div>
                  <p className="font-semibold text-[#234B4B]">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à dire adieu aux douleurs dorsales ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Essayez Viniline dès aujourd'hui et retrouvez votre mobilité et votre confort.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Commander maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

