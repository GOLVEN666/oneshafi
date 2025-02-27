// app/produits-digitaux/healthrag/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, Shield, Globe, Zap } from "lucide-react"

export default function HealthRAG() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">HealthRAG</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Solution d'IA sécurisée conçue spécifiquement pour le secteur de la santé
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
                src="/placeholder.svg?text=HealthRAG"
                alt="HealthRAG"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez HealthRAG</h2>
              <p className="mb-6 text-[#234B4B]">
                HealthRAG utilise des techniques avancées de traitement du langage naturel pour analyser et extraire des
                informations pertinentes à partir de vastes ensembles de données médicales.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Recherche hybride avancée",
                  "Protection des données conforme aux normes RGPD",
                  "Support multilingue",
                  "Intégration facile avec les systèmes existants",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-[#234B4B]">
                    <Check className="w-5 h-5 mr-2 text-[#9A7A3F]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-primary">
                Demander une démo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Fonctionnalités clés</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Sécurité des données",
                description: "Protection avancée des informations sensibles",
              },
              { icon: Globe, title: "Support multilingue", description: "Analyse de données dans plusieurs langues" },
              {
                icon: Zap,
                title: "Performances optimisées",
                description: "Traitement rapide de grandes quantités de données",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <feature.icon className="w-12 h-12 mb-4 text-[#9A7A3F]" />
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{feature.title}</h3>
                <p className="text-[#234B4B]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Cas d'utilisation</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Hôpitaux",
                description: "Amélioration de la recherche de dossiers médicaux et aide à la décision clinique.",
              },
              {
                title: "Laboratoires de recherche",
                description:
                  "Accélération de l'analyse de la littérature scientifique et identification de nouvelles pistes de recherche.",
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{useCase.title}</h3>
                <p className="text-[#234B4B]">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Prêt à révolutionner votre approche des données de santé ?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Découvrez comment HealthRAG peut transformer votre gestion des informations médicales.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Demander une démo
          </Link>
        </div>
      </section>
    </div>
  )
}

