"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import HeroSection from "@/components/ui/HeroSection"
import ContactForm from "@/components/ui/ContactForm"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Contactez-nous"
        subtitle="Nous sommes là pour répondre à vos questions et vous aider dans votre parcours de santé."
      />

      {/* Contact Form and Info Section */}
      <section id="support" className="bg-white section-padding">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <ContactForm />

            <div
              className="motion.div"
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="section-padding bg-[#92C0C8]">
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

