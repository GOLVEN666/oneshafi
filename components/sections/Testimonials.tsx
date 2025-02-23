"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaQuoteLeft } from "react-icons/fa"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Health Enthusiast",
    content:
      "Dar Shefaa & Sheva AI has transformed my approach to health. Their natural products combined with AI-driven insights have made a significant difference in my well-being.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Medical Researcher",
    content:
      "As a medical professional, I'm impressed by the innovative approach of Dar Shefaa & Sheva AI. They're truly bridging the gap between traditional medicine and modern technology.",
  },
  {
    name: "Emma Rodriguez",
    role: "Fitness Trainer",
    content:
      "I recommend Dar Shefaa & Sheva AI to all my clients. Their personalized health plans and natural products complement my fitness programs perfectly.",
  },
]

const TestimonialCard = ({ name, role, content }) => {
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
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </motion.div>
  )
}

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

