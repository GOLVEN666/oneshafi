"use client"
import { motion } from "framer-motion"
import { FaLeaf, FaMicrochip, FaFlask, FaUserMd, FaChartLine } from "react-icons/fa"
import { useInView } from "react-intersection-observer"

const services = [
  {
    icon: FaLeaf,
    title: "Natural Products",
    description: "Discover our range of natural health solutions",
  },
  {
    icon: FaMicrochip,
    title: "AI Diagnostics",
    description: "Cutting-edge AI for accurate health assessments",
  },
  {
    icon: FaFlask,
    title: "Research & Development",
    description: "Continuous innovation in health technologies",
  },
  {
    icon: FaUserMd,
    title: "Personalized Health Plans",
    description: "Tailored wellness programs for your unique needs",
  },
  {
    icon: FaChartLine,
    title: "Health Monitoring",
    description: "Real-time tracking of your health progress",
  },
]

const ServiceCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
    >
      <Icon className="text-4xl text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

