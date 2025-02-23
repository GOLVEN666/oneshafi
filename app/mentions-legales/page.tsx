// app/mentions-legales/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"

export default function MentionsLegales() {
  return (
    <PageLayout route="/mentions-legales">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">1. Informations légales</h2>
          <p className="mb-4 text-brown-600">
            Le site www.darshefaa.com est édité par la société Dar Shefaa & Sheva AI, [forme juridique] au capital de
            [montant] euros, immatriculée au Registre du Commerce et des Sociétés de [ville] sous le numéro [numéro
            RCS], dont le siège social est situé à [adresse complète].
          </p>
          <p className="mb-4 text-brown-600">
            <strong>Numéro de TVA intracommunautaire :</strong> [numéro]
            <br />
            <strong>Directeur de la publication :</strong> [nom du directeur de publication]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">2. Hébergement</h2>
          <p className="mb-4 text-brown-600">
            Le site est hébergé par [nom de l'hébergeur], [forme juridique], dont le siège social est situé [adresse de
            l'hébergeur].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">3. Propriété intellectuelle</h2>
          <p className="mb-4 text-brown-600">
            L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de Dar Shefaa &
            Sheva AI ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission,
            dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque
            support que ce soit est interdite.
          </p>
        </section>

        {/* Add more sections as needed: Personal Data Protection, Cookies, Disclaimer, etc. */}

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-green-700">7. Contact</h2>
          <p className="mb-4 text-brown-600">
            Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter à :
            <br />
            <strong>Email :</strong> legal@darshefaa.com
            <br />
            <strong>Adresse :</strong> [Adresse de l'entreprise]
          </p>
        </section>
      </motion.div>
    </PageLayout>
  )
}

