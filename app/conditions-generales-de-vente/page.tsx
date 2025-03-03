// app/conditions-generales-de-vente/page.tsx

"use client"

import { motion } from "framer-motion"

export default function ConditionsGeneralesDeVente() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">Conditions Générales de Vente</h1>
            <p className="max-w-2xl mx-auto mb-8 text-xl">
              Veuillez lire attentivement nos conditions générales de vente avant toute utilisation de nos services ou
              achat de nos produits.
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
            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">1. Objet</h2>
            <p className="mb-6 text-[#234B4B]">
              Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits et services par Dar
              Shefaa & Sheva AI à ses clients. Toute commande implique l'acceptation sans réserve par l'acheteur et son
              adhésion pleine et entière aux présentes CGV.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">2. Produits et Services</h2>
            <p className="mb-6 text-[#234B4B]">
              Les caractéristiques essentielles des produits et services sont présentées sur notre site web. Les
              photographies et textes illustrant les produits ne sont pas contractuels.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">3. Prix</h2>
            <p className="mb-6 text-[#234B4B]">
              Les prix de nos produits et services sont indiqués en euros toutes taxes comprises (TTC). Dar Shefaa &
              Sheva AI se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la
              base des tarifs en vigueur au moment de l'enregistrement des commandes.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">4. Commandes</h2>
            <p className="mb-6 text-[#234B4B]">
              Les commandes sont passées sur le site internet de Dar Shefaa & Sheva AI. La confirmation de la commande
              entraîne l'acceptation des présentes conditions de vente et la reconnaissance d'en avoir parfaite
              connaissance.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">5. Paiement</h2>
            <p className="mb-6 text-[#234B4B]">
              Le règlement des achats s'effectue par carte bancaire, virement ou tout autre moyen proposé sur notre
              site. Le débit de la carte est effectué au moment de la commande.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">6. Livraison</h2>
            <p className="mb-6 text-[#234B4B]">
              Les délais de livraison sont donnés à titre indicatif. Dar Shefaa & Sheva AI ne pourra être tenue
              responsable des conséquences dues à un retard de livraison indépendant de sa volonté.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">7. Droit de rétractation</h2>
            <p className="mb-6 text-[#234B4B]">
              Conformément aux dispositions légales en vigueur, le client dispose d'un délai de 14 jours à compter de la
              réception du produit pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de
              pénalités.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">8. Garanties</h2>
            <p className="mb-6 text-[#234B4B]">
              Tous nos produits bénéficient de la garantie légale de conformité et de la garantie des vices cachés. En
              cas de non-conformité d'un produit vendu, il pourra être retourné à Dar Shefaa & Sheva AI qui le
              reprendra, l'échangera ou le remboursera.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">9. Protection des données personnelles</h2>
            <p className="mb-6 text-[#234B4B]">
              Dar Shefaa & Sheva AI s'engage à protéger les données personnelles de ses clients conformément à la
              réglementation en vigueur. Les informations collectées sont nécessaires au traitement des commandes et ne
              seront en aucun cas transmises à des tiers.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">10. Propriété intellectuelle</h2>
            <p className="mb-6 text-[#234B4B]">
              Tous les éléments du site de Dar Shefaa & Sheva AI sont et restent la propriété intellectuelle et
              exclusive de la société. Personne n'est autorisé à reproduire, exploiter, ou utiliser à quelque titre que
              ce soit, même partiellement, des éléments du site.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">11. Litiges</h2>
            <p className="mb-6 text-[#234B4B]">
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée
              avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[#234B4B]">12. Contact</h2>
            <p className="mb-6 text-[#234B4B]">
              Pour toute question relative aux présentes CGV, veuillez nous contacter à :
              <br />
              <strong>Email :</strong> cgv@darshefaa.com
              <br />
              <strong>Adresse :</strong> [Adresse de l'entreprise]
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

