// app/politique-de-confidentialite/page.tsx

"use client"

import { motion } from "framer-motion"

export default function PolitiqueDeConfidentialite() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Politique de Confidentialité</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">1. Introduction</h2>
            <p className="mb-6 text-[#234B4B]">
              Dar Shefaa & Sheva AI s'engage à protéger la vie privée des utilisateurs de notre site web et de nos
              services. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et
              protégeons vos informations personnelles.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">2. Collecte d'informations</h2>
            <p className="mb-6 text-[#234B4B]">
              Nous collectons des informations lorsque vous utilisez notre site web, passez une commande, vous inscrivez
              à notre newsletter, ou participez à nos programmes de partenariat. Ces informations peuvent inclure votre
              nom, adresse e-mail, adresse postale, numéro de téléphone et informations de paiement.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">3. Utilisation des informations</h2>
            <p className="mb-6 text-[#234B4B]">
              Nous utilisons les informations collectées pour traiter vos commandes, améliorer nos services, communiquer
              avec vous au sujet de nos produits et offres, et personnaliser votre expérience sur notre site web.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">4. Protection des données</h2>
            <p className="mb-6 text-[#234B4B]">
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles
              contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">5. Partage d'informations</h2>
            <p className="mb-6 text-[#234B4B]">
              Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers, sauf pour nous
              aider à vous fournir nos services, à respecter la loi ou à protéger nos droits.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">6. Cookies et technologies similaires</h2>
            <p className="mb-6 text-[#234B4B]">
              Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site,
              analyser notre trafic et personnaliser le contenu et les publicités.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">7. Vos droits</h2>
            <p className="mb-6 text-[#234B4B]">
              Vous avez le droit d'accéder à vos informations personnelles, de les corriger, de les supprimer ou de
              limiter leur traitement. Pour exercer ces droits, veuillez nous contacter à l'adresse fournie ci-dessous.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">
              8. Modifications de la politique de confidentialité
            </h2>
            <p className="mb-6 text-[#234B4B]">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
              modification sera publiée sur cette page avec une date de mise à jour.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">9. Contact</h2>
            <p className="mb-6 text-[#234B4B]">
              Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
              <br />
              <strong>Email :</strong> privacy@darshefaa.com
              <br />
              <strong>Adresse :</strong> [Adresse de l'entreprise]
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

