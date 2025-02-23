// app/produits-digitaux/healthrag/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HealthRAG() {
  return (
    <PageLayout route="/produits-digitaux">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">HealthRAG</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">IA Sécurisée pour la Santé</h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=HealthRAG"
              alt="HealthRAG"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Description du produit</h3>
            <p className="mb-4 text-brown-600">
              HealthRAG est une solution d'IA sécurisée conçue spécifiquement pour le secteur de la santé. Elle utilise
              des techniques avancées de traitement du langage naturel pour analyser et extraire des informations
              pertinentes à partir de vastes ensembles de données médicales.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Fonctionnalités clés</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Recherche hybride avancée</li>
              <li>Protection des données conforme aux normes RGPD</li>
              <li>Support multilingue</li>
              <li>Intégration facile avec les systèmes existants</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Demander une démo
            </motion.button>
          </div>
        </div>

        <section id="use-cases" className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">Cas d'utilisation</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="mb-2 text-lg font-semibold text-blue-700">Hôpitaux</h4>
              <p className="text-brown-600">
                Amélioration de la recherche de dossiers médicaux et aide à la décision clinique.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="mb-2 text-lg font-semibold text-blue-700">Laboratoires de recherche</h4>
              <p className="text-brown-600">
                Accélération de l'analyse de la littérature scientifique et identification de nouvelles pistes de
                recherche.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">Tarification</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Basique", "Standard", "Entreprise"].map((plan) => (
              <div key={plan} className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="mb-2 text-lg font-semibold text-blue-700">{plan}</h4>
                <p className="mb-4 text-brown-600">Fonctionnalités adaptées à vos besoins spécifiques.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  Voir les détails
                </motion.button>
              </div>
            ))}
          </div>
        </section>

        <section id="faq">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">FAQ</h3>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700">
                Comment HealthRAG protège-t-il les données sensibles ?
              </h4>
              <p className="text-brown-600">
                HealthRAG utilise des techniques de chiffrement avancées et respecte toutes les réglementations en
                matière de protection des données de santé, y compris le RGPD et HIPAA.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700">
                HealthRAG peut-il s'intégrer à notre système existant ?
              </h4>
              <p className="text-brown-600">
                Oui, HealthRAG est conçu pour s'intégrer facilement avec la plupart des systèmes de gestion de données
                de santé existants. Notre équipe technique vous assistera tout au long du processus d'intégration.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </PageLayout>
  )
}

