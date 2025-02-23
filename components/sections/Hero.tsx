"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import gsap from "gsap"

const Hero = () => {
  const controls = useAnimation()
  const textRef = useRef(null)

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    })

    gsap.to(textRef.current, {
      backgroundPositionX: "200%",
      duration: 5,
      ease: "linear",
      repeat: -1,
    })
  }, [controls])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image src="/hero-bg.jpg" alt="Hero background" layout="fill" objectFit="cover" className="absolute z-0" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="relative z-10 text-center text-white">
        <motion.h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-300% animate-gradient"
        >
          Welcome to Our World
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-xl md:text-2xl mb-8"
        >
          Discover the power of nature and AI combined
        </motion.p>
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 flex items-center"
        >
          Get Started
          <FaArrowRight className="ml-2" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero

