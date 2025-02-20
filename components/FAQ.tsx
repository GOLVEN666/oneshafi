// components/FAQ.tsx

'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Quels sont les bioactifs naturels et pourquoi sont-ils importants ?",
    answer: "Les bioactifs naturels sont des composés présents dans les aliments qui ont des effets bénéfiques sur la santé. Ils sont importants car ils peuvent aider à prévenir certaines maladies et à améliorer le bien-être général."
  },
  {
    question: "Comment vos produits sont-ils fabriqués ?",
    answer: "Nos produits sont fabriqués à partir d'ingrédients naturels soigneusement sélectionnés. Nous utilisons des processus d'extraction avancés pour préserver l'intégrité des bioactifs."
  },
  {
    question: "Vos produits sont-ils testés cliniquement ?",
    answer: "Oui, tous nos produits font l'objet de tests cliniques rigoureux pour garantir leur efficacité et leur sécurité avant d'être mis sur le marché."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Foire Aux Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="pb-4 border-b border-gray-200">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

