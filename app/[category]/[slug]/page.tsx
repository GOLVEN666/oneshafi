// app/[category]/[slug]/page.tsx

"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { getProductBySlug, getTestimonials } from "@/lib/appwrite"
import HeroSection from "@/components/ui/HeroSection"
import TestimonialGrid from "@/components/ui/TestimonialGrid"
import CTASection from "@/components/ui/CTASection"
import OrderModal from "@/components/ui/OrderModal"

export default function ProductPage() {
  const params = useParams()
  const { slug } = params

  const [product, setProduct] = useState<any>(null)
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      if (typeof slug === "string") {
        const productData = await getProductBySlug(slug)
        setProduct(productData)

        if (productData) {
          const testimonialData = await getTestimonials(productData.category)
          setTestimonials(testimonialData)
        }
      }
      setLoading(false)
    }

    fetchData()
  }, [slug])

  if (loading) {
    return <div className="container py-20 text-center">Chargement...</div>
  }

  if (!product) {
    return (
      <div className="container px-4 py-20 mx-auto">
        <h1 className="text-3xl font-bold text-[#234B4B]">Produit non trouvé</h1>
        <Link href="/produits-physiques" className="text-[#9A7A3F] hover:underline mt-4 inline-block">
          Retour aux produits
        </Link>
      </div>
    )
  }

  return (
    <div>
      <HeroSection title={product.name} subtitle={product.shortDescription || product.description} />

      {/* Product Details */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
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
              <h2 className="text-3xl font-bold mb-4 text-[#234B4B]">Découvrez {product.name}</h2>
              <p className="mb-6 text-[#234B4B]">{product.description}</p>
              <ul className="mb-6 space-y-2">
                {product.benefits &&
                  product.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center text-[#234B4B]">
                      <Check className="w-5 h-5 mr-2 text-[#9A7A3F]" />
                      {benefit}
                    </li>
                  ))}
              </ul>
              <button onClick={() => setIsOrderModalOpen(true)} className="btn-primary">
                Commander maintenant
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Sections - Conditionally rendered based on product data */}
      {product.ingredients && (
        <section className="section-padding bg-[#92C0C8]">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Ingrédients naturels</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {product.ingredients.map((ingredient: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 text-center bg-white rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{ingredient}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Usage Instructions - if available */}
      {product.usageInstructions && (
        <section className="bg-white section-padding">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">Comment utiliser {product.name}</h2>
            <div className="max-w-2xl mx-auto">
              {product.usageInstructions.map((instruction: string, index: number) => (
                <p key={index} className="mb-4 text-[#234B4B]">
                  {index + 1}. {instruction}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <TestimonialGrid title="Ce que disent nos clients" testimonials={testimonials} backgroundClass="bg-[#92C0C8]" />
      )}

      {/* CTA Section */}
      <CTASection
        title={`Prêt à essayer ${product.name} ?`}
        subtitle="Découvrez les bienfaits de nos produits naturels et transformez votre santé dès aujourd'hui."
        buttonText="Commander maintenant"
        buttonLink="/boutique"
      />

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={{
          id: product.$id || product.id,
          name: product.name,
          description: product.description,
          image: product.image,
          category: product.category,
          price: product.price,
          benefits: product.benefits,
        }}
      />
    </div>
  )
}

