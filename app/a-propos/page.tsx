// app/a-propos/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutUs() {
  return (
    <PageLayout route="/a-propos">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">À Propos de Nous</h1>

        <section id="notre-histoire" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">Notre Histoire</h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-4 md:w-1/2 md:mb-0 md:mr-8">
              <Image
                src="/placeholder.svg?text=Notre+Histoire"
                alt="Notre Histoire"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-brown-600">
                Dar Shefaa & Sheva AI est né de la vision de Mouad Mankour, qui a cherché à combiner la sagesse de la
                médecine traditionnelle avec les avancées de l'intelligence artificielle pour créer des solutions de
                santé innovantes et naturelles.
              </p>
            </div>
          </div>
        </section>

        <section id="notre-vision" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">Notre Vision</h2>
          <p className="text-brown-600">
            Notre mission est de révolutionner le domaine de la santé en combinant la sagesse ancestrale avec la science
            moderne. Nous visons à créer un impact global en offrant des solutions naturelles et technologiques
            accessibles à tous.
          </p>
        </section>

        <section id="notre-equipe">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">Notre Équipe</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {["Fondateur", "Scientifique en Chef", "Ingénieur IA"].map((member, index) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 text-center bg-white rounded-lg shadow-md"
              >
                <Image
                  src={`/placeholder.svg?text=${member}`}
                  alt={member}
                  width={150}
                  height={150}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="mb-2 text-lg font-semibold text-blue-700">{member}</h3>
                <p className="text-brown-600">Expert en santé naturelle et technologie</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </PageLayout>
  )
}

