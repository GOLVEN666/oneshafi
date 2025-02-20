// components/Features.tsx

import { Leaf, Heart, Brain } from 'lucide-react'

const features = [
  {
    icon: <Leaf className="w-12 h-12 text-green-500" />,
    title: "Naturel",
    description: "Des ingrédients 100% naturels pour votre santé."
  },
  {
    icon: <Heart className="w-12 h-12 text-red-500" />,
    title: "Santé",
    description: "Améliorez votre bien-être grâce à nos bioactifs."
  },
  {
    icon: <Brain className="w-12 h-12 text-purple-500" />,
    title: "Science",
    description: "Des formules basées sur les dernières recherches scientifiques."
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Nos Fonctionnalités</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-center">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

