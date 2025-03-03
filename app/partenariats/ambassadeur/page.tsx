// app/partenariats/ambassadeur/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Users, Star, Gift } from "lucide-react"
import { useState } from "react"
import PartnershipModal from "@/components/ui/PartnershipModal"

export default function DevenirAmbassadeur() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Devenir Ambassadeur</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Rejoignez notre communauté et partagez notre vision pour une santé naturelle et innovante
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
                src="/stock/ambassadeur.png"
                alt="Devenir Ambassadeur"
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Pourquoi devenir ambassadeur ?</h2>
              <p className="mb-6 text-[#234B4B]">
                En tant qu'ambassadeur de Dar Shefaa & Sheva AI, vous aurez l'opportunité de partager notre passion pour
                la santé naturelle et l'innovation technologique. Vous ferez partie d'une communauté engagée à améliorer
                la santé et le bien-être des gens.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Accès exclusif à nos produits et formations",
                  "Commissions attractives sur les ventes",
                  "Opportunités de networking",
                  "Participation à des événements exclusifs",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-[#234B4B]">
                    <Check className="w-5 h-5 mr-2 text-[#9A7A3F]" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                Postuler maintenant
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ambassador Role */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Votre rôle en tant qu'ambassadeur</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Partager notre message",
                description:
                  "Diffusez notre vision de la santé naturelle et innovante sur les réseaux sociaux et dans votre réseau.",
              },
              {
                icon: Star,
                title: "Représenter la marque",
                description: "Incarnez nos valeurs et notre engagement envers la santé holistique.",
              },
              {
                icon: Gift,
                title: "Offrir des avantages exclusifs",
                description: "Partagez des offres spéciales et des promotions avec votre communauté.",
              },
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <role.icon className="w-12 h-12 mx-auto mb-4 text-[#9A7A3F]" />
                <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{role.title}</h3>
                <p className="text-[#234B4B]">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#234B4B]">Témoignages d'ambassadeurs</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Sophie L.",
                comment:
                  "Être ambassadrice pour Dar Shefaa & Sheva AI m'a permis de combiner ma passion pour la santé naturelle avec les opportunités offertes par l'IA. C'est une expérience enrichissante et gratifiante.",
              },
              {
                name: "Mehdi R.",
                comment:
                  "Grâce au programme d'ambassadeur, j'ai pu développer mon réseau professionnel tout en contribuant à une cause qui me tient à cœur. Je recommande vivement cette opportunité !",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg shadow-md"
              >
                <p className="mb-4 text-[#234B4B] italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-[#234B4B]">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Prêt à devenir ambassadeur ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Rejoignez notre communauté d'ambassadeurs passionnés et contribuez à transformer la santé grâce à
            l'innovation.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="btn-primary bg-white text-[#9A7A3F]">
            Postuler maintenant
          </button>
        </div>
      </section>

      {/* Partnership Modal */}
      <PartnershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="ambassadeur"
        title="Devenir Ambassadeur"
      />
    </div>
  )
}

