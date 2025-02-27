// app/contact/page.tsx

"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#234B4B] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Contactez-nous</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Nous sommes là pour répondre à vos questions et vous aider dans votre parcours de santé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-6 text-[#234B4B]">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#234B4B] mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 border border-[#92C0C8] rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#234B4B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2 border border-[#92C0C8] rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#234B4B] mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-2 border border-[#92C0C8] rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#234B4B] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2 border border-[#92C0C8] rounded"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Envoyer
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#234B4B]">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#9A7A3F] mr-4" />
                  <p className="text-[#234B4B]">+212 123 456 789</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#9A7A3F] mr-4" />
                  <p className="text-[#234B4B]">contact@darshefaa.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[#9A7A3F] mr-4" />
                  <p className="text-[#234B4B]">123 Rue de l'Innovation, Casablanca, Maroc</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-[#234B4B]">Heures d'ouverture</h3>
                <p className="text-[#234B4B]">Lundi - Vendredi: 9h00 - 18h00</p>
                <p className="text-[#234B4B]">Samedi: 10h00 - 14h00</p>
                <p className="text-[#234B4B]">Dimanche: Fermé</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-[#92C0C8]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#234B4B]">Notre emplacement</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846399874576!2d-7.6321208!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d4778aa113e3%3A0x10e6aaaeedd802ef!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1652362894325!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

