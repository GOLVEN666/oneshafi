// app/produits-physiques/hemoneole/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, Star } from "lucide-react"

export default function Hemoneole() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Hemoneole</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Solution naturelle et efficace pour le soulagement des hémorroïdes
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
                src="/placeholder.svg?text=Hemoneole"
                alt="Hemoneole"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez Hemoneole</h2>
              <p className="mb-6 text-[#234B4B]">
                Hemoneole est une solution naturelle formulée à partir d'ingrédients botaniques soigneusement
                sélectionnés pour soulager efficacement les symptômes des hémorroïdes.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Soulage la douleur et l'inconfort",
                  "Réduit l'inflammation",
                  "Favorise la cicatrisation",
                  "100% naturel",
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

      {/* Ingredients Section */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Ingrédients naturels</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Hamamélis", "Aloe Vera", "Calendula", "Huile essentielle de lavande"].map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 text-center bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{ingredient}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Ce que disent nos clients</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Sophie L.",
                comment: "Hemoneole a changé ma vie. Je recommande ce produit à tous ceux qui souffrent d'hémorroïdes.",
              },
              {
                name: "Marc D.",
                comment:
                  "Après avoir essayé de nombreux produits, Hemoneole est le seul qui m'a vraiment soulagé. Merci !",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg shadow-md"
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à soulager vos symptômes ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Essayez Hemoneole dès aujourd'hui et découvrez le soulagement naturel que vous méritez.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Commander maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

