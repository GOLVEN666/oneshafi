// components/Hero.tsx

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (headingRef.current && subheadingRef.current) {
      const headingText = new SplitType(headingRef.current, { types: 'chars' })
      const subheadingText = new SplitType(subheadingRef.current, { types: 'words' })

      gsap.from(headingText.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from(subheadingText.words, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      })
    }
  }, [])

  return (
    <section className="relative flex items-center min-h-screen">
      <Image
        src="/placeholder.svg?height=1080&width=1920&text=Green+Leaf+Texture"
        alt="Nature Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 z-10 bg-black/20"></div>
      <div className="container relative z-20 px-6 mx-auto">
        <div className="max-w-3xl" >
          <motion.span
            className="block mb-2 text-lg font-semibold text-green-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            BRIGHTSEED
          </motion.span>
          <h1 ref={headingRef} className="mb-6 text-6xl font-bold text-gray-800">
            We Know{' '}
            <span className="block italic text-green-700 text-7xl">Nature</span>
          </h1>
          <p ref={subheadingRef} className="max-w-2xl mb-8 text-xl text-gray-600">
            Brightseed is a pioneer in biosciences and artificial intelligence that finds compounds in
            nature that can help restore human health.
          </p>
          <motion.button
            className="flex items-center font-semibold text-green-700 transition-colors group hover:text-green-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>OUR STORY</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
      <motion.div
        className="fixed z-50 px-4 py-2 text-sm font-semibold text-green-700 rounded-full bottom-8 right-8 bg-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        FORAGER TIME<br />INVENTION OF 2024!
      </motion.div>
    </section>
  )
}

export default Hero

