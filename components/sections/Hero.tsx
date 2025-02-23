"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

const Hero = () => {
  const controls = useAnimation()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    })

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [controls])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="relative z-10 text-center text-white">
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Our World</motion.h1>
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
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 flex items-center mx-auto"
        >
          Get Started
          <FaArrowRight className="ml-2" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero

