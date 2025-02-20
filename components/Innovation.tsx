// components/Innovation.tsx

'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { initTextAnimation, initParallaxImage } from '@/lib/animations'

export default function Innovation() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  useEffect(() => {
    if (headingRef.current) {
      initTextAnimation(headingRef.current)
    }
    if (imageRef.current) {
      initParallaxImage(imageRef.current)
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div ref={imageRef} className="relative w-full h-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Innovation+Background"
            alt="Innovation"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
      </motion.div>
      
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 ref={headingRef} className="mb-8 text-5xl font-bold">
              Pioneering the Future of Natural Health
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 rounded-lg bg-white/10 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
            
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={`/placeholder.svg?height=80&width=80&text=Icon${i}`}
                    alt={`Innovation ${i}`}
                    layout="fill"
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Innovation Title {i}</h3>
                <p className="text-gray-300">
                  Discover how our groundbreaking approach is transforming natural health solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

