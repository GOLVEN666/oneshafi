"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <Image src="/about-image.jpg" alt="About Us" width={600} height={800} className="rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              At Dar Shefaa & Sheva AI, we combine the wisdom of traditional medicine with cutting-edge AI technology to
              revolutionize healthcare. Our mission is to provide natural, effective solutions for your well-being while
              leveraging the power of artificial intelligence to personalize your health journey.
            </p>
            <p className="text-gray-600 mb-6">
              Founded by visionary entrepreneur Mouad Mankour, our company stands at the forefront of the health
              innovation landscape, bridging the gap between nature's remedies and modern science.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

