"use client"

import { useEffect, useState } from "react"
import { getTeamMembers } from "@/lib/appwrite"
import { Users, Target, Award, Leaf, Cpu, FlaskRoundIcon as Flask } from "lucide-react"
import HeroSection from "@/components/ui/HeroSection"
import ContentSection from "@/components/ui/ContentSection"
import FeatureGrid from "@/components/ui/FeatureGrid"
import CTASection from "@/components/ui/CTASection"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTeamMembers() {
      const membersData = await getTeamMembers()
      setTeamMembers(membersData)
      setLoading(false)
    }

    fetchTeamMembers()
  }, [])

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous croyons en la puissance de la synergie entre experts de divers domaines.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Nous repoussons constamment les limites pour créer des solutions de santé révolutionnaires.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos produits et services.",
    },
  ]

  const approaches = [
    {
      icon: Leaf,
      title: "Médecine Naturelle",
      description: "Nous puisons dans la sagesse des remèdes traditionnels pour des solutions de santé durables.",
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
  ]

  return (
    <div>
      <HeroSection
        title="À Propos de Nous"
        subtitle="Découvrez l'histoire et la vision derrière Dar Shefaa & Sheva AI, pionniers de la santé intégrative."
      />

      {/* Our Story Section */}
      <ContentSection
        title="Notre Histoire"
        content={
          <>
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
          </>
        }
        imageSrc="/stock/a-propos.png"
        imageAlt="Notre Histoire"
      />

      {/* Our Values Section */}
      <FeatureGrid title="Nos Valeurs" features={values} backgroundClass="bg-[#92C0C8]" />

      {/* Our Approach Section */}
      <FeatureGrid title="Notre Approche" features={approaches} backgroundClass="bg-white" />

      {/* Team Section */}
      <section id="notre-equipe" className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">Notre Équipe</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {loading ? (
              <div className="col-span-4 text-center py-8">Chargement...</div>
            ) : (
              teamMembers.map((member, index) => (
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
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Rejoignez Notre Mission"
        subtitle="Ensemble, transformons l'avenir de la santé en combinant sagesse ancestrale et innovation technologique."
        buttonText="Contactez-nous"
        buttonLink="/contact"
      />
    </div>
  )
}

