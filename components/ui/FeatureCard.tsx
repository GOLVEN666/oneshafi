"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
  className?: string
  iconClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className = "p-6 text-center bg-white rounded-lg shadow-md",
  iconClassName = "w-12 h-12 mx-auto mb-4 text-[#9A7A3F]",
  titleClassName = "text-xl font-bold mb-2 text-[#234B4B]",
  descriptionClassName = "text-[#234B4B]",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      <Icon className={iconClassName} />
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </motion.div>
  )
}

