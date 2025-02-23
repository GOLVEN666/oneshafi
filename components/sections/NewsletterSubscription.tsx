"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement subscription logic here
    setSubscribed(true)
  }

  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Stay updated with our latest products and health tips</p>
          {subscribed ? (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-semibold">
              Thank you for subscribing!
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSubscription

