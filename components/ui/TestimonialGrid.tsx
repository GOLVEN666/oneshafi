"use client"

import TestimonialCard from "./TestimonialCard"

interface Testimonial {
  name: string
  comment: string
  rating?: number
}

interface TestimonialGridProps {
  title?: string
  testimonials: Testimonial[]
  columns?: 1 | 2 | 3
  backgroundClass?: string
}

export default function TestimonialGrid({
  title,
  testimonials,
  columns = 2,
  backgroundClass = "bg-white",
}: TestimonialGridProps) {
  return (
    <section className={`${backgroundClass} section-padding`}>
      <div className="container">
        {title && <h2 className="text-3xl font-bold mb-8 text-center text-[#234B4B]">{title}</h2>}
        <div className={`grid gap-8 md:grid-cols-${columns}`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              comment={testimonial.comment}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

