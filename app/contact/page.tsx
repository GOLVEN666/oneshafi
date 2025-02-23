// app/contact/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <PageLayout route="/contact">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Contactez-Nous</h1>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-green-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-green-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-green-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
              type="submit"
            >
              Envoyer
            </motion.button>
          </form>
        </div>

        <section id="faq" className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-center text-green-700">FAQ</h2>
          {/* Add FAQ content here */}
        </section>

        <section id="support" className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-center text-green-700">Support</h2>
          <p className="text-center text-brown-600">
            Pour toute assistance, n'hésitez pas à nous contacter par email à support@darshefaa.com ou par téléphone au
            +33 1 23 45 67 89.
          </p>
        </section>
      </motion.div>
    </PageLayout>
  )
}

