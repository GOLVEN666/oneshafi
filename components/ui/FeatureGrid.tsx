"use client"

import type { LucideIcon } from "lucide-react"
import FeatureCard from "./FeatureCard"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  backgroundClass?: string
}

export default function FeatureGrid({ title, features, columns = 3, backgroundClass = "bg-white" }: FeatureGridProps) {
  return (
    <section className={`section-padding ${backgroundClass}`}>
      <div className="container">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">{title}</h2>}
        <div className={`grid gap-8 md:grid-cols-${columns}`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

