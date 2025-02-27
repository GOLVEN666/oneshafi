// app/produits-digitaux/predicthealth/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, TrendingUp, Activity, Users } from "lucide-react"

export default function PredictHealth() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">PredictHealth</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              IA prédictive pour optimiser les risques de santé et les ressources médicales
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
                src="/placeholder.svg?text=PredictHealth"
                alt="PredictHealth"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez PredictHealth</h2>
              <p className="mb-6 text-[#234B4B]">
                PredictHealth utilise des algorithmes d'IA avancés pour prédire les risques de santé et optimiser les
                ressources médicales. Cette solution aide les professionnels de santé à prendre des décisions éclairées
                et à améliorer les résultats pour les patients.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Calcul de scores de risque personnalisés",
                  "Prédictions dynamiques basées sur les données en temps réel",
                  "Optimisation des ressources hospitalières",
                  "Intégration avec les dossiers médicaux électroniques",
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
                icon: TrendingUp,
                title: "Prédiction de risques",
                description: "Analyse les données pour prédire les risques de santé individuels et populationnels.",
              },
              {
                icon: Activity,
                title: "Suivi en temps réel",
                description: "Surveille les indicateurs de santé en continu pour des interventions rapides.",
              },
              {
                icon: Users,
                title: "Gestion des ressources",
                description: "Optimise l'allocation des ressources hospitalières en fonction des besoins prévus.",
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
                title: "Gestion des maladies chroniques",
                description:
                  "Prévoit les complications et optimise les plans de traitement pour les patients atteints de maladies chroniques.",
              },
              {
                title: "Planification hospitalière",
                description:
                  "Anticipe les besoins en lits et en personnel pour une gestion efficace des ressources hospitalières.",
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
            Prêt à révolutionner la gestion des risques de santé ?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Découvrez comment PredictHealth peut améliorer les résultats pour vos patients et optimiser vos ressources.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Demander une démo
          </Link>
        </div>
      </section>
    </div>
  )
}

