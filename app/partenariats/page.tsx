// app/partenariats/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const partnerships = [
  {
    id: "ambassadeur",
    name: "Devenir Ambassadeur",
    description: "Rejoignez notre communauté et partagez notre vision pour une santé naturelle et innovante.",
    benefits: [
      "Accès exclusif à nos produits et formations",
      "Commissions attractives sur les ventes",
      "Opportunités de networking",
      "Participation à des événements exclusifs",
    ],
    image: "/placeholder.svg?text=Ambassadeur",
    link: "/partenariats/ambassadeur",
  },
  {
    id: "partenaire",
    name: "Devenir Partenaire",
    description: "Collaborez avec nous pour innover dans le domaine de la santé et créer un impact positif.",
    benefits: [
      "Co-développement de solutions innovantes",
      "Accès à notre expertise en IA et santé naturelle",
      "Visibilité accrue dans le secteur de la santé",
      "Opportunités de croissance mutuelle",
    ],
    image: "/placeholder.svg?text=Partenaire",
    link: "/partenariats/partenaire",
  },
  {
    id: "revendeur",
    name: "Devenir Revendeur",
    description: "Distribuez nos produits et solutions pour contribuer à améliorer la santé de vos clients.",
    benefits: [
      "Gamme complète de produits naturels et solutions IA",
      "Marges attractives et programme de fidélité",
      "Support marketing et formation produit",
      "Accès à notre réseau de professionnels de santé",
    ],
    image: "/placeholder.svg?text=Revendeur",
    link: "/partenariats/revendeur",
  },
]

const PartnershipSection = ({ partnership, index }) => {
  const isOdd = index % 2 !== 0
  return (
    <motion.section
      id={partnership.id}
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`flex flex-col ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
        <div className="mb-8 md:w-1/2 md:mb-0 md:px-4">
          <Image
            src={partnership.image || "/placeholder.svg"}
            alt={partnership.name}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:px-4">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">{partnership.name}</h2>
          <p className="mb-6 text-gray-600">{partnership.description}</p>
          <h3 className="mb-4 text-xl font-semibold text-green-700">Avantages :</h3>
          <ul className="mb-6 text-gray-600 list-disc list-inside">
            {partnership.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <Link href={partnership.link}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
            >
              En savoir plus
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

const PartnershipsPage = () => {
  return (
    <PageLayout route="/partenariats">
      <div className="container px-4 py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-blue-800">Partenariats & Communauté</h1>
          <p className="text-xl text-gray-600">Rejoignez-nous dans notre mission pour révolutionner la santé</p>
        </motion.div>
        {partnerships.map((partnership, index) => (
          <PartnershipSection key={partnership.id} partnership={partnership} index={index} />
        ))}
      </div>
    </PageLayout>
  )
}

export default PartnershipsPage

