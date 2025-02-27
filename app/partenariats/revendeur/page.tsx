// app/partenariats/revendeur/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, ShoppingBag, TrendingUp, Users } from "lucide-react"

export default function DevenirRevendeur() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Devenir Revendeur</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Distribuez nos produits et solutions innovantes pour contribuer à améliorer la santé de vos clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Image
                src="/placeholder.svg?text=Devenir+Revendeur"
                alt="Devenir Revendeur"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Avantages du programme de revendeur</h2>
              <p className="mb-6 text-[#234B4B]">
                En tant que revendeur officiel de Dar Shefaa & Sheva AI, vous bénéficierez d'un soutien complet et
                d'opportunités de croissance uniques dans le secteur de la santé naturelle et de l'IA.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Commissions attractives sur les ventes",
                  "Formation complète sur nos produits et solutions",
                  "Support marketing et matériel promotionnel",
                  "Accès à notre réseau de professionnels de santé",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-[#234B4B]">
                    <Check className="w-5 h-5 mr-2 text-[#9A7A3F]" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-primary">
                Devenir Revendeur Officiel
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products to Distribute */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Produits à distribuer</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: ShoppingBag,
                title: "Produits naturels",
                description: "Hemoneole, Shilajit Brut, Viniline, et plus encore.",
              },
              {
                icon: TrendingUp,
                title: "Solutions IA",
                description: "HealthRAG, Medivision, PredictHealth, et autres services IA innovants.",
              },
              {
                icon: Users,
                title: "Programmes personnalisés",
                description: "Le Plan Personnalisé et autres solutions de santé sur mesure.",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <product.icon className="w-12 h-12 mx-auto mb-4 text-[#9A7A3F]" />
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{product.title}</h3>
                <p className="text-[#234B4B]">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Processus de candidature</h2>
          <div className="max-w-2xl mx-auto">
            <ol className="list-decimal list-inside space-y-4 text-[#234B4B]">
              <li>Remplissez le formulaire de candidature en ligne</li>
              <li>Participez à un entretien avec notre équipe de partenariat</li>
              <li>Suivez notre formation complète sur les produits et services</li>
              <li>Signez le contrat de revendeur officiel</li>
              <li>Commencez à distribuer nos produits et solutions innovantes</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à rejoindre notre réseau de revendeurs ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Commencez votre parcours en tant que revendeur officiel de Dar Shefaa & Sheva AI et contribuez à transformer
            la santé de vos clients.
          </p>
          <Link href="#" className="btn-primary bg-white text-[#9A7A3F]">
            Postuler maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}

