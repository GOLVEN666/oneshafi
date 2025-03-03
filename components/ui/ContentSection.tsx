"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { ReactNode } from "react"

interface ContentSectionProps {
  title: string
  content: string | ReactNode
  imageSrc?: string
  imageAlt?: string
  imagePosition?: "left" | "right"
  backgroundClass?: string
}

export default function ContentSection({
  title,
  content,
  imageSrc,
  imageAlt = "Image",
  imagePosition = "left",
  backgroundClass = "bg-white",
}: ContentSectionProps) {
  return (
    <section className={`section-padding ${backgroundClass}`}>
      <div className="container">
        <div className="flex flex-col items-center md:flex-row">
          {imageSrc && imagePosition === "left" && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:w-1/2 md:mb-0 md:pr-8"
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`md:w-1/2 ${imagePosition === "right" ? "md:pr-8" : "md:pl-8"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#234B4B]">{title}</h2>
            {typeof content === "string" ? <p className="mb-6 text-[#234B4B]">{content}</p> : content}
          </motion.div>

          {imageSrc && imagePosition === "right" && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:w-1/2 md:mb-0"
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

