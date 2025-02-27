// app/partenariats/page.tsx

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, Handshake, ShoppingBag } from "lucide-react"

const partnerships = [
  {
    id: "ambassadeur",
    name: "Devenir Ambassadeur",
    description: "Rejoignez notre communauté et partagez notre vision pour une santé naturelle et innovante.",
    icon: Users,
  },
  {
    id: "partenaire",
    name: "Devenir Partenaire",
    description: "Collaborez avec nous pour innover dans le domaine de la santé et créer un impact positif.",
    icon: Handshake,
  },
  {
    id: "revendeur",
    name: "Devenir Revendeur",
    description: "Distribuez nos produits et solutions pour contribuer à améliorer la santé de vos clients.",
    icon: ShoppingBag,
  },
]

export default function PartnershipsPage() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Partenariats & Communauté</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Rejoignez-nous dans notre mission pour révolutionner la santé en alliant tradition et innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Grid */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] rounded-lg overflow-hidden shadow-lg p-6"
              >
                <partnership.icon className="w-16 h-16 mx-auto mb-4 text-[#234B4B]" />
                <h3 className="text-xl font-bold mb-2 text-[#234B4B] text-center">{partnership.name}</h3>
                <p className="text-[#234B4B] mb-4 text-center">{partnership.description}</p>
                <div className="text-center">
                  <Link href={`/partenariats/${partnership.id}`} className="btn-primary">
                    En savoir plus
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-[#234B4B] text-white">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Ce que disent nos partenaires</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#92C0C8] p-6 rounded-lg"
            >
              <p className="text-[#234B4B] mb-4 italic">
                "Devenir ambassadeur pour Dar Shefaa & Sheva AI a été une expérience incroyable. J'ai pu partager ma
                passion pour la santé naturelle tout en bénéficiant d'un soutien exceptionnel."
              </p>
              <p className="text-[#234B4B] font-bold">- Sarah M., Ambassadrice</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#92C0C8] p-6 rounded-lg"
            >
              <p className="text-[#234B4B] mb-4 italic">
                "En tant que revendeur, j'ai pu offrir à mes clients des produits de haute qualité qui ont vraiment fait
                la différence dans leur vie. Le support de l'équipe est incomparable."
              </p>
              <p className="text-[#234B4B] font-bold">- Ahmed K., Revendeur</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Rejoignez Notre Réseau</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Ensemble, nous pouvons faire une réelle différence dans le domaine de la santé. Découvrez comment vous
            pouvez contribuer à notre mission et faire partie de notre communauté grandissante."
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#9A7A3F]">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}

