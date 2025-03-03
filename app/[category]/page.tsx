// app/[category]/page.tsx

// app/produits-physiques/page.tsx

"use client"

import { useEffect, useState } from "react"
import { getProducts } from "@/lib/appwrite"
import HeroSection from "@/components/ui/HeroSection"
import ProductGrid from "@/components/ui/ProductGrid"
import CTASection from "@/components/ui/CTASection"
import { useParams } from "next/navigation"
import { productPage } from "@/lib/constant"

export default function PhysicalProductsPage() {
  const params = useParams()
  const { category } = params
  console.log(category, productPage[category])
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts(category)
      setProducts(productsData)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className="container py-20 text-center">Chargement...</div>
  }

  return (
    <div>
      <HeroSection title={productPage[category].title} subtitle={productPage[category].subtitle} />

      {/* Products Grid */}
      <ProductGrid products={products} backgroundClass="bg-white" />

      {/* CTA Section */}
      <CTASection
        title="Prêt à Transformer Votre Santé ?"
        subtitle="Découvrez comment nos produits naturels peuvent améliorer votre qualité de vie."
        buttonText="Contactez-nous"
        buttonLink="/contact"
      />
    </div>
  )
}

