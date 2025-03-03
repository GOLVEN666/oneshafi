"use client"
import Link from "next/link"
import type { ReactNode } from "react"

interface CTASectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  buttonVariant?: "primary" | "secondary"
  backgroundClass?: string
  children?: ReactNode
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  buttonVariant = "primary",
  backgroundClass = "bg-[#9A7A3F]",
  children,
}: CTASectionProps) {
  const buttonClass = buttonVariant === "primary" ? "btn-primary bg-white text-[#9A7A3F]" : "btn-secondary"

  return (
    <section className={`section-padding ${backgroundClass} text-white`}>
      <div className="container text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="max-w-2xl mx-auto mb-8 text-xl">{subtitle}</p>
        <Link href={buttonLink} className={buttonClass}>
          {buttonText}
        </Link>
        {children}
      </div>
    </section>
  )
}

