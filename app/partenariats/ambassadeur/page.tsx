// app/partenariats/ambassadeur/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DevenirAmbassadeur() {
  return (
    <PageLayout route="/partenariats">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Devenir Ambassadeur</h1>
        <h2 className="mb-8 text-2xl text-center text-green-700">
          Rejoignez notre communauté et partagez notre vision
        </h2>

        <div className="flex flex-col items-center mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0 md:mr-8">
            <Image
              src="/placeholder.svg?text=Ambassadeur"
              alt="Devenir Ambassadeur"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Pourquoi devenir ambassadeur ?</h3>
            <p className="mb-4 text-brown-600">
              En tant qu'ambassadeur de Dar Shefaa & Sheva AI, vous aurez l'opportunité de partager notre passion pour
              la santé naturelle et l'innovation technologique. Vous ferez partie d'une communauté engagée à améliorer
              la santé et le bien-être des gens.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Avantages</h3>
            <ul className="mb-4 list-disc list-inside text-brown-600">
              <li>Accès exclusif à nos produits et formations</li>
              <li>Commissions attractives sur les ventes</li>
              <li>Opportunités de networking</li>
              <li>Participation à des événements exclusifs</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Postuler maintenant
            </motion.button>
          </div>
        </div>

        <section id="role" className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">Votre rôle en tant qu'ambassadeur</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="mb-2 text-lg font-semibold text-blue-700">Partager du contenu</h4>
              <p className="text-brown-600">
                Diffusez notre message sur les réseaux sociaux et dans votre réseau personnel.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="mb-2 text-lg font-semibold text-blue-700">Animer des ateliers</h4>
              <p className="text-brown-600">Organisez des événements pour présenter nos produits et solutions.</p>
            </div>
          </div>
        </section>

        <section id="temoignages" className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">Témoignages d'ambassadeurs</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md">
                <p className="mb-4 italic text-brown-600">
                  "Être ambassadeur pour Dar Shefaa & Sheva AI m'a permis de combiner ma passion pour la santé naturelle
                  avec les opportunités offertes par l'IA. C'est une expérience enrichissante et gratifiante."
                </p>
                <p className="font-semibold text-blue-700">- Ambassadeur {i}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq">
          <h3 className="mb-4 text-2xl font-semibold text-green-700">FAQ</h3>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700">Qui peut devenir ambassadeur ?</h4>
              <p className="text-brown-600">
                Toute personne passionnée par la santé naturelle et l'innovation technologique peut postuler. Nous
                recherchons des individus enthousiastes, communicatifs et désireux d'apprendre.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-blue-700">Quel est le processus de sélection ?</h4>
              <p className="text-brown-600">
                Après avoir soumis votre candidature, nous examinerons votre profil et vous contacterons pour un
                entretien. Si vous êtes sélectionné, vous recevrez une formation complète pour commencer votre parcours
                d'ambassadeur.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </PageLayout>
  )
}

