// app/produits-physiques/shilajit/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, Star } from "lucide-react"

export default function Shilajit() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Shilajit Brut</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Boost naturel d'énergie et de vitalité issu des montagnes de l'Himalaya
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
                src="/placeholder.svg?text=Shilajit+Brut"
                alt="Shilajit Brut"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez le Shilajit Brut</h2>
              <p className="mb-6 text-[#234B4B]">
                Le Shilajit Brut est un composé naturel puissant issu des montagnes de l'Himalaya. Riche en minéraux et
                en acides fulviques, il offre un boost d'énergie naturel et soutient la vitalité globale.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Augmente l'énergie et réduit la fatigue",
                  "Soutient le système immunitaire",
                  "Améliore les fonctions cognitives",
                  "Favorise la santé des os et des articulations",
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

      {/* Benefits Section */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Bienfaits du Shilajit</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Boost d'énergie naturel",
              "Amélioration de la concentration",
              "Renforcement du système immunitaire",
              "Soutien de la santé cardiaque",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 text-center bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Comment utiliser le Shilajit</h2>
          <div className="max-w-2xl mx-auto">
            <p className="mb-4 text-[#234B4B]">
              1. Commencez avec une petite quantité (environ la taille d'un grain de riz) une fois par jour.
            </p>
            <p className="mb-4 text-[#234B4B]">
              2. Dissolvez le Shilajit dans de l'eau tiède, du lait chaud ou votre boisson préférée.
            </p>
            <p className="mb-4 text-[#234B4B]">3. Consommez de préférence à jeun le matin ou avant un repas.</p>
            <p className="mb-4 text-[#234B4B]">
              4. Augmentez progressivement la dose selon vos besoins, sans dépasser la dose recommandée.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Ce que disent nos clients</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Thomas L.",
                comment: "Le Shilajit a considérablement augmenté mon énergie et ma concentration au quotidien.",
              },
              {
                name: "Marie D.",
                comment:
                  "Je me sens plus vitale et en meilleure santé depuis que j'ai intégré le Shilajit à ma routine.",
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à booster votre énergie naturellement ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Découvrez les bienfaits du Shilajit Brut et transformez votre vitalité dès aujourd'hui.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Commander maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

