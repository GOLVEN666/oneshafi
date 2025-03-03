// app/partenariats/partenaire/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Handshake, Zap, Target } from "lucide-react"
import { useState } from "react"
import PartnershipModal from "@/components/ui/PartnershipModal"

export default function DevenirPartenaire() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Devenir Partenaire</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Collaborez avec nous pour innover dans le domaine de la santé et créer un impact positif
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Details */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Image
                src="/stock/partenaire.png"
                alt="Devenir Partenaire"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Pourquoi devenir partenaire ?</h2>
              <p className="mb-6 text-[#234B4B]">
                En devenant partenaire de Dar Shefaa & Sheva AI, vous rejoignez un écosystème d'innovation dans le
                domaine de la santé. Nous offrons des opportunités de collaboration uniques, combinant médecine
                traditionnelle et technologie de pointe.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Accès à des technologies de pointe en santé",
                  "Collaboration sur des projets innovants",
                  "Visibilité accrue dans le secteur de la santé",
                  "Opportunités de croissance mutuelle",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-[#234B4B]">
                    <Check className="w-5 h-5 mr-2 text-[#9A7A3F]" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                Proposer un partenariat
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Partnerships */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Types de partenariats</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Handshake,
                title: "Partenariats stratégiques",
                description: "Collaborations à long terme pour développer des solutions de santé innovantes.",
              },
              {
                icon: Zap,
                title: "Partenariats technologiques",
                description: "Intégration de nos technologies IA dans vos produits ou services de santé.",
              },
              {
                icon: Target,
                title: "Partenariats de recherche",
                description: "Collaboration sur des projets de recherche en santé et en IA.",
              },
            ].map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <partnership.icon className="w-12 h-12 mx-auto mb-4 text-[#9A7A3F]" />
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{partnership.title}</h3>
                <p className="text-[#234B4B]">{partnership.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Histoires de réussite</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "MedTech Innovations",
                story:
                  "Notre partenariat avec Dar Shefaa & Sheva AI nous a permis d'intégrer leur IA de pointe dans nos dispositifs médicaux, améliorant considérablement la précision des diagnostics.",
              },
              {
                name: "Institut de Recherche en Santé",
                story:
                  "Grâce à notre collaboration, nous avons pu accélérer nos recherches sur les maladies rares, en utilisant l'IA pour analyser des ensembles de données complexes.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{story.name}</h3>
                <p className="text-[#234B4B] italic">"{story.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à innover avec nous ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contactez-nous dès aujourd'hui pour explorer les possibilités de partenariat et façonner ensemble l'avenir
            de la santé.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="btn-primary bg-white text-[#9A7A3F]">
            Proposer un partenariat
          </button>
        </div>
      </section>

      {/* Partnership Modal */}
      <PartnershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="partenaire"
        title="Devenir Partenaire"
      />
    </div>
  )
}

