"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  description: string
  image: string
  category: string
  price?: string
  slug: string
  index?: number
  baseUrl?: string
}

export default function ProductCard({
  id,
  name,
  description,
  image,
  category,
  price,
  slug,
  index = 0,
  baseUrl = "/produits-physiques",
}: ProductCardProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#92C0C8] rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <span className="text-[#9A7A3F] text-sm font-semibold">{category}</span>
        <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{name}</h3>
        <p className="text-[#234B4B] mb-4">{description}</p>
        {price && <p className="text-[#234B4B] font-bold mb-4">{price}</p>}
        <Link href={`${baseUrl}/${slug}`} className="btn-primary">
          En savoir plus
        </Link>
      </div>
    </motion.div>
  )
}

