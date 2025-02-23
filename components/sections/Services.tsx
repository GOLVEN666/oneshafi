"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { FaLeaf, FaMicrochip, FaFlask, FaUserMd, FaChartLine } from "react-icons/fa"

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
  return (
    <div className="flex items-start mb-6">
      <Icon className="text-3xl text-blue-600 mr-4 mt-1" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <Image
              src="/services-image.jpg"
              alt="Our Services"
              width={600}
              height={800}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <h2 className="text-4xl font-bold mb-8">Our Services</h2>
            <div>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services

