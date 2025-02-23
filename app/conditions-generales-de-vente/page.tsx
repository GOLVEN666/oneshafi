// app/conditions-generales-de-vente/page.tsx

"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"

export default function ConditionsGeneralesDeVente() {
  return (
    <PageLayout route="/conditions-generales-de-vente">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-800">Conditions Générales de Vente</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">1. Objet</h2>
          <p className="mb-4 text-brown-600">
            Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits et services par Dar
            Shefaa & Sheva AI à ses clients. Toute commande implique l'acceptation sans réserve par l'acheteur et son
            adhésion pleine et entière aux présentes CGV.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">2. Produits et Services</h2>
          <p className="mb-4 text-brown-600">
            Les caractéristiques essentielles des produits et services sont présentées sur notre site web. Les
            photographies et textes illustrant les produits ne sont pas contractuels.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">3. Prix</h2>
          <p className="mb-4 text-brown-600">
            Les prix de nos produits et services sont indiqués en euros toutes taxes comprises (TTC). Dar Shefaa & Sheva
            AI se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des
            tarifs en vigueur au moment de l'enregistrement des commandes.
          </p>
        </section>

        {/* Add more sections as needed: Payment, Delivery, Returns and Refunds, etc. */}

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-green-700">10. Contact</h2>
          <p className="mb-4 text-brown-600">
            Pour toute question relative aux présentes CGV, veuillez nous contacter à :
            <br />
            <strong>Email :</strong> cgv@darshefaa.com
            <br />
            <strong>Adresse :</strong> [Adresse de l'entreprise]
          </p>
        </section>
      </motion.div>
    </PageLayout>
  )
}

