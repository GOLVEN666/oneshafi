// app/politique-de-confidentialite/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"

export default function PolitiqueDeConfidentialite() {
  return (
    <PageLayout route="/politique-de-confidentialite">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Politique de Confidentialité</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">1. Introduction</h2>
          <p className="mb-4 text-brown-600">
            Dar Shefaa & Sheva AI s'engage à protéger la vie privée des utilisateurs de notre site web et de nos
            services. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et
            protégeons vos informations personnelles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">2. Collecte d'informations</h2>
          <p className="mb-4 text-brown-600">
            Nous collectons des informations lorsque vous utilisez notre site web, passez une commande, vous inscrivez à
            notre newsletter, ou participez à nos programmes de partenariat. Ces informations peuvent inclure votre nom,
            adresse e-mail, adresse postale, numéro de téléphone et informations de paiement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">3. Utilisation des informations</h2>
          <p className="mb-4 text-brown-600">
            Nous utilisons les informations collectées pour traiter vos commandes, améliorer nos services, communiquer
            avec vous au sujet de nos produits et offres, et personnaliser votre expérience sur notre site web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">4. Protection des données</h2>
          <p className="mb-4 text-brown-600">
            Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre
            tout accès non autorisé, altération, divulgation ou destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">5. Vos droits</h2>
          <p className="mb-4 text-brown-600">
            Vous avez le droit d'accéder à vos informations personnelles, de les corriger, de les supprimer ou de
            limiter leur traitement. Pour exercer ces droits, veuillez nous contacter à l'adresse fournie ci-dessous.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-green-700">6. Contact</h2>
          <p className="mb-4 text-brown-600">
            Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
            <br />
            <strong>Email :</strong> privacy@darshefaa.com
            <br />
            <strong>Adresse :</strong> [Adresse de l'entreprise]
          </p>
        </section>
      </motion.div>
    </PageLayout>
  )
}

