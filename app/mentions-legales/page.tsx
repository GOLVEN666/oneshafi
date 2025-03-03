// app/mentions-legales/page.tsx

"use client"

import { motion } from "framer-motion"

export default function MentionsLegales() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Mentions Légales</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Informations légales concernant Dar Shefaa & Sheva AI et l'utilisation de notre site web.
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
            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">1. Informations légales</h2>
            <p className="mb-6 text-[#234B4B]">
              Le site www.darshefaa.com est édité par la société Dar Shefaa & Sheva AI, [forme juridique] au capital de
              [montant] euros, immatriculée au Registre du Commerce et des Sociétés de [ville] sous le numéro [numéro
              RCS], dont le siège social est situé à [adresse complète].
            </p>
            <p className="mb-6 text-[#234B4B]">
              <strong>Numéro de TVA intracommunautaire :</strong> [numéro]
              <br />
              <strong>Directeur de la publication :</strong> [nom du directeur de publication]
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">2. Hébergement</h2>
            <p className="mb-6 text-[#234B4B]">
              Le site est hébergé par [nom de l'hébergeur], [forme juridique], dont le siège social est situé [adresse
              de l'hébergeur].
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">3. Propriété intellectuelle</h2>
            <p className="mb-6 text-[#234B4B]">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de Dar Shefaa &
              Sheva AI ou de ses partenaires. Toute reproduction, représentation, modification, publication,
              transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce
              soit, et sur quelque support que ce soit est interdite.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">4. Protection des données personnelles</h2>
            <p className="mb-6 text-[#234B4B]">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit
              d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en
              nous contactant à l'adresse email : [adresse email de contact].
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">5. Cookies</h2>
            <p className="mb-6 text-[#234B4B]">
              Le site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur le site, vous
              acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">6. Limitation de responsabilité</h2>
            <p className="mb-6 text-[#234B4B]">
              Dar Shefaa & Sheva AI ne saurait être tenue responsable des erreurs, d'une absence de disponibilité des
              informations et/ou de la présence de virus sur son site.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">7. Droit applicable et juridiction compétente</h2>
            <p className="mb-6 text-[#234B4B]">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">8. Contact</h2>
            <p className="mb-6 text-[#234B4B]">
              Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter à :
              <br />
              <strong>Email :</strong> legal@darshefaa.com
              <br />
              <strong>Adresse :</strong> [Adresse de l'entreprise]
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

