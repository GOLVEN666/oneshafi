"use client"
import { motion } from "framer-motion"
import { FaLeaf, FaMicrochip, FaFlask } from "react-icons/fa"
import { useInView } from "react-intersection-observer"

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
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Icon className="text-5xl text-blue-600 mb-4" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

