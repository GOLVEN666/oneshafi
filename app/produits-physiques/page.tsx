// app/produits-physiques/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: "hemoneole",
    name: "Hemoneole",
    description:
      "Solution naturelle pour les hémorroïdes, formulée à partir d'ingrédients botaniques soigneusement sélectionnés.",
    image: "/placeholder.svg?text=Hemoneole",
  },
  {
    id: "shilajit",
    name: "Shilajit Brut",
    description: "Composé naturel issu des montagnes de l'Himalaya, riche en minéraux et en acides fulviques.",
    image: "/placeholder.svg?text=Shilajit",
  },
  {
    id: "viniline",
    name: "Viniline",
    description: "Solution innovante pour le soulagement des douleurs dorsales, formulée à base de venin d'abeille.",
    image: "/placeholder.svg?text=Viniline",
  },
  {
    id: "plan-personnalise",
    name: "Le Plan Personnalisé",
    description: "Programme de santé sur mesure, conçu pour répondre à vos besoins spécifiques.",
    image: "/placeholder.svg?text=Plan+Personnalisé",
  },
  {
    id: "pilule-du-bonheur",
    name: "La Pilule du Bonheur",
    description: "Supplément naturel conçu pour améliorer l'humeur et réduire le stress.",
    image: "/placeholder.svg?text=Pilule+du+Bonheur",
  },
  {
    id: "bundles",
    name: "Bundles & Combos",
    description: "Ensembles de produits soigneusement sélectionnés pour offrir des solutions complètes.",
    image: "/placeholder.svg?text=Bundles+%26+Combos",
  },
]

export default function PhysicalProductsPage() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Nos Produits Physiques</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Découvrez notre gamme de produits naturels, conçus pour améliorer votre santé et votre bien-être.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{product.name}</h3>
                  <p className="text-[#234B4B] mb-4">{product.description}</p>
                  <Link href={`/produits-physiques/${product.id}`} className="btn-primary">
                    En savoir plus
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à Transformer Votre Santé ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Découvrez comment nos produits naturels peuvent améliorer votre qualité de vie.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#9A7A3F]">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}

