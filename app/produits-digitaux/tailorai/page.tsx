"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, Settings, Zap, Layers } from "lucide-react"

export default function TailorAI() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">TailorAI</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Solutions d'IA sur mesure pour répondre aux besoins spécifiques de votre organisation
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
                src="/placeholder.svg?text=TailorAI"
                alt="TailorAI"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez TailorAI</h2>
              <p className="mb-6 text-[#234B4B]">
                TailorAI offre des solutions d'IA personnalisées pour répondre aux besoins spécifiques de votre
                organisation dans le domaine de la santé. Notre équipe d'experts travaille en étroite collaboration avec
                vous pour développer des solutions innovantes et efficaces.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Développement d'IA sur mesure",
                  "Intégration de solutions existantes",
                  "Formation et support continu",
                  "Optimisation des processus grâce à l'IA",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-[#234B4B]">
                    <Check className="w-5 h-5 mr-2 text-[#9A7A3F]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-primary">
                Discuter de votre projet
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Nos services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Settings,
                title: "Conception sur mesure",
                description: "Développement de solutions d'IA adaptées à vos besoins spécifiques.",
              },
              {
                icon: Zap,
                title: "Intégration rapide",
                description: "Mise en place efficace de l'IA dans vos systèmes existants.",
              },
              {
                icon: Layers,
                title: "Support complet",
                description: "Formation, maintenance et optimisation continue de vos solutions IA.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-[#9A7A3F]" />
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{service.title}</h3>
                <p className="text-[#234B4B]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Notre processus</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Analyse des besoins",
                description: "Nous étudions en profondeur vos défis et objectifs pour concevoir la solution idéale.",
              },
              {
                title: "Développement itératif",
                description: "Nous créons votre solution IA par étapes, en vous impliquant à chaque phase du projet.",
              },
              {
                title: "Tests et optimisation",
                description: "Nous testons rigoureusement la solution et l'optimisons pour des performances maximales.",
              },
              {
                title: "Déploiement et suivi",
                description:
                  "Nous assurons un déploiement en douceur et un suivi continu pour garantir le succès à long terme.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{step.title}</h3>
                <p className="text-[#234B4B]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à transformer votre organisation avec l'IA ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contactez-nous pour discuter de vos besoins et découvrir comment TailorAI peut vous aider à atteindre vos
            objectifs.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Commencer votre projet
          </Link>
        </div>
      </section>
    </div>
  )
}

