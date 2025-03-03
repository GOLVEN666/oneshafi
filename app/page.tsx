"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Cpu, FlaskRoundIcon as Flask } from "lucide-react"
import { getProducts } from "@/lib/appwrite"
import Hero from "@/components/Hero"
import FeatureGrid from "@/components/ui/FeatureGrid"
import ContentSection from "@/components/ui/ContentSection"
import CTASection from "@/components/ui/CTASection"

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const productsData = await getProducts()
      setFeaturedProducts(productsData.slice(0, 3))
      setLoading(false)
    }

    fetchData()
  }, [])

  const features = [
    { icon: Leaf, title: "Produits Naturels", description: "Des solutions de santé issues de la nature." },
    { icon: Cpu, title: "IA Avancée", description: "Technologie de pointe pour des diagnostics précis." },
    { icon: Flask, title: "Recherche Innovante", description: "Développement continu de nouvelles solutions." },
  ]

  return (
    <div className="-mt-20">
      {/* Hero Section */}
      <motion.section id="hero" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Hero />
      </motion.section>

      {/* Features Section */}
      <FeatureGrid title="Nos Atouts" features={features} backgroundClass="bg-white" />

      {/* About Section */}
      <ContentSection
        title="Notre Histoire"
        content={
          <>
            <p className="mb-6 text-white">
              Fondée par Mouad Mankour, Dar Shefaa & Sheva AI est née de la vision de combiner la sagesse de la médecine
              traditionnelle avec les avancées de l'intelligence artificielle pour offrir des solutions de santé
              innovantes et efficaces.
            </p>
            <Link href="/a-propos" className="inline-flex items-center btn-primary">
              En savoir plus <ArrowRight className="ml-2" />
            </Link>
          </>
        }
        imageSrc="/stock/history.png"
        imageAlt="About Dar Shefaa & Sheva AI"
        backgroundClass="bg-[#234B4B] text-white"
      />

      {/* Products Preview Section */}
      <section id="services" className="bg-white section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">Nos Produits Phares</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {loading ? (
              <div className="col-span-3 text-center py-8">Chargement...</div>
            ) : (
              featuredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#92C0C8] p-6 rounded-lg text-center"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover mx-auto mb-4 overflow-hidden rounded-full h-[200px]"
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{product.name}</h3>
                  <p className="text-[#234B4B] mb-4">{product.shortDescription || product.description}</p>
                  <Link
                    href={`/produits-physiques/${product.slug}`}
                    className="text-[#9A7A3F] font-semibold hover:underline"
                  >
                    Découvrir
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à Transformer Votre Santé ?"
        subtitle="Rejoignez-nous dans cette révolution de la santé qui allie tradition et innovation."
        buttonText="Commencez Votre Voyage"
        buttonLink="/contact"
      />
    </div>
  )
}

