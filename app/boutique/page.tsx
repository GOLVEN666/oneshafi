"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, Suspense, lazy } from "react"
import { Search, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { getProducts } from "@/lib/appwrite"

// Lazy load modals
const OrderModal = lazy(() => import("@/components/ui/OrderModal"))
const CartModal = lazy(() => import("@/components/ui/CartModal"))

interface ProductCardProps {
  product: any; // Replace with proper product type if available
  onOrderClick: (product: any) => void;
}

// Separate Product Card component for better performance
const ProductCard = ({ product, onOrderClick }: ProductCardProps) => (
  <motion.div
    key={product.$id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-white rounded-lg shadow-md"
  >
    <div className="relative aspect-[3/2] mb-4">
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLUEwLi0tLTAtQFBGRkBQRi0tMD0tLS1BVUFERUFKSU1PS0H/2wBDAR"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#234B4B]">{product.name}</h3>
    <p className="text-[#9A7A3F] mb-2">{product.category}</p>
    <p className="text-[#234B4B] font-bold mb-4">{product.price}</p>
    <div className="flex space-x-2">
      <button onClick={() => onOrderClick(product)} className="flex-1 btn-primary">
        {product.price === "Sur devis" ? "Demander un devis" : "Commander"}
      </button>
      <Link
        href={`/${product.category.toLowerCase().replace(/\s+/g, "-")}/${product.slug}`}
        className="flex-1 text-center btn-secondary"
      >
        Détails
      </Link>
    </div>
  </motion.div>
)

// Loading skeleton
const ProductSkeleton = () => (
  <div className="p-6 bg-white rounded-lg shadow-md animate-pulse">
    <div className="bg-gray-200 aspect-[3/2] mb-4 rounded" />
    <div className="h-6 bg-gray-200 rounded mb-2" />
    <div className="h-4 bg-gray-200 rounded mb-2 w-1/2" />
    <div className="h-4 bg-gray-200 rounded mb-4" />
    <div className="flex space-x-2">
      <div className="flex-1 h-10 bg-gray-200 rounded" />
      <div className="flex-1 h-10 bg-gray-200 rounded" />
    </div>
  </div>
)

export default function Boutique() {
  const [products, setProducts] = useState<any[]>([])
  const [filter, setFilter] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [isCartModalOpen, setIsCartModalOpen] = useState(false)
  const { totalItems } = useCart()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts()
        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Memoize filtered products
  const filteredProducts = products
    .filter((product) => (filter === "Tous" ? true : product.category === filter))
    .filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div>
      {/* Hero Section - Optimized for LCP */}
      <section className="bg-[#234B4B] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Notre Boutique</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Découvrez notre gamme de produits naturels et services IA pour améliorer votre santé
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Section with optimized rendering */}
      <section className="bg-white section-padding">
        <div className="container">
          {/* Filter and Search */}
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex mb-4 space-x-4 md:mb-0">
              {["Tous", "Produits Naturels", "Services IA"].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full ${
                    filter === category ? "bg-[#9A7A3F] text-white" : "bg-gray-200 text-[#234B4B]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9A7A3F]"
                />
                <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              </div>
              <button
                onClick={() => setIsCartModalOpen(true)}
                className="relative p-2 transition-colors rounded-full hover:bg-gray-100"
              >
                <ShoppingCart className="w-6 h-6 text-[#234B4B]" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-[#9A7A3F] rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Products Grid with loading state */}
          <div className="grid gap-8 md:grid-cols-3">
            {loading ? (
              // Show loading skeletons
              Array.from({ length: 6 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            ) : filteredProducts.length === 0 ? (
              <div className="col-span-3 py-12 text-center">
                <p className="text-lg text-gray-500">
                  Aucun produit ne correspond à votre recherche.
                </p>
              </div>
            ) : (
              // Render actual products
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.$id}
                  product={product}
                  onOrderClick={() => {
                    setSelectedProduct(product)
                    setIsOrderModalOpen(true)
                  }}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Besoin d'aide pour choisir ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Nos experts sont là pour vous guider dans votre parcours de santé personnalisé.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-[#9A7A3F]">
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* Modals with Suspense */}
      <Suspense fallback={null}>
        {selectedProduct && isOrderModalOpen && (
          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            product={selectedProduct}
          />
        )}
        {isCartModalOpen && (
          <CartModal
            isOpen={isCartModalOpen}
            onClose={() => setIsCartModalOpen(false)}
          />
        )}
      </Suspense>
    </div>
  )
}

