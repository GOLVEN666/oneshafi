"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundClass?: string
  children?: ReactNode
}

export default function HeroSection({ title, subtitle, backgroundClass = "bg-[#234B4B]", children }: HeroSectionProps) {
  return (
    <section id="header" className={`${backgroundClass} text-white py-20`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">{title}</h1>
          {subtitle && <p className="max-w-2xl mx-auto mb-8 text-xl">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

