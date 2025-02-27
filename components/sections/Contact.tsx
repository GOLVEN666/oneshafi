// components/sections/Contact.tsx

"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-center mb-6">
    <Icon className="mr-4 text-2xl text-blue-600" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
)

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8 md:w-1/2 md:mb-0"
          >
            <ContactInfo icon={FaEnvelope} title="Email" content="contact@darshefaa.com" />
            <ContactInfo icon={FaPhone} title="Phone" content="+212 123 456 789" />
            <ContactInfo icon={FaMapMarkerAlt} title="Address" content="123 Innovation Street, Casablanca, Morocco" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

