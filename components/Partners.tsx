// components/Partners.tsx

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Partner 1', logo: '/placeholder.svg?height=100&width=200&text=Partner+1' },
  { name: 'Partner 2', logo: '/placeholder.svg?height=100&width=200&text=Partner+2' },
  { name: 'Partner 3', logo: '/placeholder.svg?height=100&width=200&text=Partner+3' },
  { name: 'Partner 4', logo: '/placeholder.svg?height=100&width=200&text=Partner+4' },
  { name: 'Partner 5', logo: '/placeholder.svg?height=100&width=200&text=Partner+5' },
  { name: 'Partner 6', logo: '/placeholder.svg?height=100&width=200&text=Partner+6' },
]

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <div className="py-20 bg-gray-50" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold" >Our Partners</h2>
          <p className="text-xl text-gray-600"  >
            Collaborating with industry leaders to drive innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
          
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className="h-auto max-w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

