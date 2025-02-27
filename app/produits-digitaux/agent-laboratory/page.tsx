// app/produits-digitaux/agent-laboratory/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, Cpu, FileText, Code } from "lucide-react"

export default function AgentLaboratory() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Agent Laboratory</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">Solution d'IA avancée qui automatise la recherche en santé</p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Image
                src="/placeholder.svg?text=Agent+Laboratory"
                alt="Agent Laboratory"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez Agent Laboratory</h2>
              <p className="mb-6 text-[#234B4B]">
                Agent Laboratory est une solution d'IA avancée qui révolutionne la recherche en santé. Elle automatise
                les revues de littérature, génère du code d'apprentissage automatique et rédige des rapports, accélérant
                ainsi considérablement le processus de recherche.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Revue de littérature automatisée",
                  "Génération de code ML",
                  "Rédaction de rapports",
                  "Analyse de données multi-sources",
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Fonctionnalités clés</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "IA avancée",
                description:
                  "Utilise des algorithmes d'IA de pointe pour analyser et synthétiser les données de recherche.",
              },
              {
                icon: FileText,
                title: "Génération de rapports",
                description:
                  "Crée automatiquement des rapports détaillés et structurés basés sur les résultats de recherche.",
              },
              {
                icon: Code,
                title: "Génération de code ML",
                description:
                  "Produit du code d'apprentissage automatique prêt à l'emploi pour des analyses approfondies.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#9A7A3F]" />
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
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Cas d'utilisation</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Recherche médicale",
                description:
                  "Accélère les découvertes en analysant rapidement de vastes ensembles de données médicales.",
              },
              {
                title: "Développement de médicaments",
                description: "Identifie de nouvelles cibles thérapeutiques et prédit les interactions médicamenteuses.",
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à révolutionner votre recherche en santé ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Découvrez comment Agent Laboratory peut transformer votre approche de la recherche médicale.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Demander une démo
          </Link>
        </div>
      </section>
    </div>
  )
}

