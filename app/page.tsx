// app/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Cpu, FlaskRoundIcon as Flask } from "lucide-react"

export default function Home() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Fusion de la Sagesse Ancestrale et de l'Innovation Technologique
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Découvrez comment Dar Shefaa & Sheva AI révolutionne la santé en combinant médecine traditionnelle et
              intelligence artificielle.
            </p>
            <Link href="/produits-physiques" className="mr-4 btn-primary">
              Découvrir nos produits
            </Link>
            <Link href="/contact" className="btn-secondary">
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">Nos Atouts</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Leaf, title: "Produits Naturels", description: "Des solutions de santé issues de la nature." },
              { icon: Cpu, title: "IA Avancée", description: "Technologie de pointe pour des diagnostics précis." },
              {
                icon: Flask,
                title: "Recherche Innovante",
                description: "Développement continu de nouvelles solutions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#234B4B]" />
                <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{feature.title}</h3>
                <p className="text-[#234B4B]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-[#234B4B] text-white">
        <div className="container">
          <div className="flex flex-col items-center md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:w-1/2 md:mb-0"
            >
              <Image
                src="/placeholder.svg?height=400&width=600&text=About+Us"
                alt="About Dar Shefaa & Sheva AI"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 md:pl-12"
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Notre Histoire</h2>
              <p className="mb-6">
                Fondée par Mouad Mankour, Dar Shefaa & Sheva AI est née de la vision de combiner la sagesse de la
                médecine traditionnelle avec les avancées de l'intelligence artificielle pour offrir des solutions de
                santé innovantes et efficaces.
              </p>
              <Link href="/a-propos" className="inline-flex items-center btn-primary">
                En savoir plus <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">Nos Produits Phares</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Hemoneole", description: "Solution naturelle pour les hémorroïdes" },
              { name: "Shilajit Brut", description: "Boost d'énergie et de vitalité" },
              { name: "Viniline", description: "Soulagement des douleurs dorsales" },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg text-center"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=${product.name}`}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{product.name}</h3>
                <p className="text-[#234B4B] mb-4">{product.description}</p>
                <Link
                  href={`/produits-physiques/${product.name.toLowerCase()}`}
                  className="text-[#9A7A3F] font-semibold hover:underline"
                >
                  Découvrir
                </Link>
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
            Rejoignez-nous dans cette révolution de la santé qui allie tradition et innovation.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#9A7A3F]">
            Commencez Votre Voyage
          </Link>
        </div>
      </section>
    </div>
  )
}

