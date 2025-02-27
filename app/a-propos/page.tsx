// app/a-propos/page.tsx

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Target, Award, Leaf, Cpu, FlaskRoundIcon as Flask } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section id="header" className="bg-[#234B4B] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">À Propos de Nous</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Découvrez l'histoire et la vision derrière Dar Shefaa & Sheva AI, pionniers de la santé intégrative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="notre-histoire" className="bg-white section-padding">
        <div className="container">
          <div className="flex flex-col items-center md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:w-1/2 md:mb-0 md:pr-8"
            >
              <Image
                src="/placeholder.svg?height=400&width=600&text=Notre+Histoire"
                alt="Notre Histoire"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#234B4B]">Notre Histoire</h2>
              <p className="mb-6 text-[#234B4B]">
                Fondée en 2020 par Mouad Mankour, Dar Shefaa & Sheva AI est née d'une vision audacieuse : fusionner la
                sagesse ancestrale de la médecine traditionnelle avec les avancées révolutionnaires de l'intelligence
                artificielle. Notre voyage a commencé avec la conviction profonde que la santé optimale réside dans
                l'harmonie entre nature et technologie.
              </p>
              <p className="text-[#234B4B]">
                Depuis, nous avons développé plus de 50 formulations naturelles uniques, touché la vie de plus de 10 000
                personnes, et collaboré avec plus de 25 professionnels de santé pour créer des solutions innovantes qui
                redéfinissent les soins de santé.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="notre-valeurs" className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">Nos Valeurs</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description: "Nous croyons en la puissance de la synergie entre experts de divers domaines.",
              },
              {
                icon: Target,
                title: "Innovation",
                description:
                  "Nous repoussons constamment les limites pour créer des solutions de santé révolutionnaires.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos produits et services.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-[#9A7A3F]" />
                <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{value.title}</h3>
                <p className="text-[#234B4B]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="notre-approche" className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">Notre Approche</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: "Médecine Naturelle",
                description:
                  "Nous puisons dans la sagesse des remèdes traditionnels pour des solutions de santé durables.",
              },
              {
                icon: Cpu,
                title: "Intelligence Artificielle",
                description: "Nous utilisons l'IA pour personnaliser et optimiser nos solutions de santé.",
              },
              {
                icon: Flask,
                title: "Recherche Scientifique",
                description: "Nous menons des études rigoureuses pour valider l'efficacité de nos produits.",
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#92C0C8] p-6 rounded-lg shadow-md text-center"
              >
                <approach.icon className="w-12 h-12 mx-auto mb-4 text-[#234B4B]" />
                <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{approach.title}</h3>
                <p className="text-[#234B4B]">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="notre-equipe" className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">Notre Équipe</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { name: "Mouad Mankour", role: "Fondateur & CEO", image: "/placeholder.svg?text=Mouad+Mankour" },
              {
                name: "Dr. Amina Benali",
                role: "Directrice Scientifique",
                image: "/placeholder.svg?text=Dr.+Amina+Benali",
              },
              { name: "Youssef El Azizi", role: "Responsable IA", image: "/placeholder.svg?text=Youssef+El+Azizi" },
              { name: "Fatima Zahra", role: "Directrice Produit", image: "/placeholder.svg?text=Fatima+Zahra" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white rounded-lg shadow-md"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{member.name}</h3>
                <p className="text-[#234B4B]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Rejoignez Notre Mission</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Ensemble, transformons l'avenir de la santé en combinant sagesse ancestrale et innovation technologique.
          </p>
          <a href="/contact" className="btn-primary bg-white text-[#9A7A3F]">
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  )
}

