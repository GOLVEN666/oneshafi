"use client"
import { motion } from "framer-motion"
import { FaLeaf, FaMicrochip, FaFlask } from "react-icons/fa"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const features = [
  {
    icon: FaLeaf,
    title: "Natural Products",
    description: "Harnessing the power of nature for your well-being",
  },
  {
    icon: FaMicrochip,
    title: "AI-Powered Solutions",
    description: "Cutting-edge technology for personalized health",
  },
  {
    icon: FaFlask,
    title: "Scientific Research",
    description: "Backed by rigorous studies and clinical trials",
  },
]

const FeatureCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <Icon className="text-4xl text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <Image src="/features-image.jpg" alt="Features" width={600} height={800} className="rounded-lg shadow-xl" />
          </motion.div>
          <div className="lg:w-1/2 lg:pl-12">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center lg:text-left mb-12"
            >
              Our Features
            </motion.h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

