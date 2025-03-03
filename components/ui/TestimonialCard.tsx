"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  comment: string
  rating?: number
  index?: number
}

export default function TestimonialCard({ name, comment, rating = 5, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#92C0C8] p-6 rounded-lg shadow-md"
    >
      <p className="mb-4 text-[#234B4B] italic">"{comment}"</p>
      <div className="flex items-center">
        <div className="mr-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 inline-block text-[#9A7A3F]" fill="#9A7A3F" />
          ))}
        </div>
        <p className="font-semibold text-[#234B4B]">{name}</p>
      </div>
    </motion.div>
  )
}

