"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface BlogPostCardProps {
  title: string
  category: string
  slug: string
  image: string
  index?: number
}

export default function BlogPostCard({ title, category, slug, image, index = 0 }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#92C0C8] rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <span className="text-[#9A7A3F] text-sm font-semibold">{category}</span>
        <h3 className="text-xl font-bold mb-2 text-[#234B4B]">{title}</h3>
        <Link
          href={`/blog/${category.toLowerCase().replace(/\s+/g, "-")}/${slug}`}
          className="text-[#234B4B] hover:text-[#9A7A3F] transition duration-300"
        >
          Lire la suite →
        </Link>
      </div>
    </motion.div>
  )
}

