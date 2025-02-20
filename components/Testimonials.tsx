// components/Testimonials.tsx

import Image from 'next/image'

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Nutritionniste",
    content: "Les produits bioactifs ont révolutionné ma pratique. Mes clients voient des résultats remarquables.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Pierre Martin",
    role: "Athlète professionnel",
    content: "Depuis que j'utilise ces suppléments, ma récupération est plus rapide et mes performances se sont améliorées.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Sophie Leclerc",
    role: "Chef d'entreprise",
    content: "Ces produits m'aident à rester en forme malgré mon emploi du temps chargé. Je me sens plus énergique et concentrée.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-green-100">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Témoignages</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="mr-4 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-600">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

