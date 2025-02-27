// app/blog/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "Les bienfaits des plantes médicinales",
    category: "Médecine Ancestrale",
    link: "/blog/medecine-ancestrale/plantes-medicinales",
    image: "/placeholder.svg?text=Plantes+Médicinales",
  },
  {
    title: "L'IA révolutionne le diagnostic médical",
    category: "IA et Santé",
    link: "/blog/ia-et-sante/ia-diagnostic-medical",
    image: "/placeholder.svg?text=IA+Diagnostic",
  },
  {
    title: "Comment j'ai retrouvé ma vitalité grâce au Shilajit",
    category: "Témoignages",
    link: "/blog/temoignages/vitalite-shilajit",
    image: "/placeholder.svg?text=Témoignage+Shilajit",
  },
  {
    title: "Les avancées de l'IA dans la recherche sur le cancer",
    category: "IA et Santé",
    link: "/blog/ia-et-sante/ia-recherche-cancer",
    image: "/placeholder.svg?text=IA+Cancer+Research",
  },
  {
    title: "L'histoire millénaire de la médecine ayurvédique",
    category: "Médecine Ancestrale",
    link: "/blog/medecine-ancestrale/histoire-ayurveda",
    image: "/placeholder.svg?text=Histoire+Ayurveda",
  },
  {
    title: "Mon parcours de guérison avec les produits Dar Shefaa",
    category: "Témoignages",
    link: "/blog/temoignages/guerison-dar-shefaa",
    image: "/placeholder.svg?text=Témoignage+Dar+Shefaa",
  },
]

export default function Blog() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Blog & Ressources</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Explorez nos articles sur la médecine traditionnelle, l'IA dans la santé, et les témoignages inspirants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <span className="text-[#9A7A3F] text-sm font-semibold">{post.category}</span>
                  <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{post.title}</h3>
                  <Link href={post.link} className="text-[#234B4B] hover:text-[#9A7A3F] transition duration-300">
                    Lire la suite →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Restez informé</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités sur la santé naturelle et
            l'IA.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow p-2 rounded-l-full focus:outline-none text-[#234B4B]"
              />
              <button
                type="submit"
                className="bg-[#234B4B] text-white px-6 py-2 rounded-r-full hover:bg-opacity-90 transition duration-300"
              >
                S'abonner
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

