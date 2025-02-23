// app/blog/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "Les bienfaits des plantes médicinales",
    category: "Médecine Ancestrale",
    link: "/blog/medecine-ancestrale/plantes-medicinales",
  },
  {
    title: "L'IA révolutionne le diagnostic médical",
    category: "IA et Santé",
    link: "/blog/ia-et-sante/ia-diagnostic-medical",
  },
  {
    title: "Comment j'ai retrouvé ma vitalité grâce au Shilajit",
    category: "Témoignages",
    link: "/blog/temoignages/vitalite-shilajit",
  },
]

export default function Blog() {
  return (
    <PageLayout route="/blog">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Blog & Ressources</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <Image
                src={`/placeholder.svg?text=${post.category}`}
                alt={post.category}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <span className="text-sm text-green-600">{post.category}</span>
                <h2 className="mb-2 text-xl font-semibold text-blue-700">{post.title}</h2>
                <Link href={post.link}>
                  <motion.span className="text-brown-600 hover:text-brown-800" whileHover={{ x: 5 }}>
                    Lire la suite →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
          >
            S'abonner à la newsletter
          </motion.button>
        </div>
      </motion.div>
    </PageLayout>
  )
}

