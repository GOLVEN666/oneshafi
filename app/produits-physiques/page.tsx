// app/produits-physiques/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Hemoneole",
    description: "Solution naturelle pour les hémorroïdes",
    href: "/produits-physiques/hemoneole",
    imageSrc: "/hemoneole.jpg",
  },
  {
    name: "Shilajit Brut",
    description: "Boost d'énergie et de vitalité",
    href: "/produits-physiques/shilajit",
    imageSrc: "/shilajit.jpg",
  },
  {
    name: "Viniline",
    description: "Soulagement des douleurs dorsales",
    href: "/produits-physiques/viniline",
    imageSrc: "/viniline.jpg",
  },
]

export default function PhysicalProducts() {
  return (
    <PageLayout route="/produits-physiques">
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Nos Produits Physiques</h1>
          <p className="mt-4 text-xl text-gray-500">
            Découvrez notre gamme de produits naturels conçus pour améliorer votre santé et votre bien-être.
          </p>

          <div className="grid grid-cols-1 mt-10 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
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

