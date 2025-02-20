// components/Forager.tsx

import Image from 'next/image'

const Forager = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="mb-12 text-center" >
          <h2 className="mb-4 text-4xl font-bold text-gray-800">FORAGER®</h2>
          <p className="text-xl text-gray-600">Discovering Health Solutions in Nature</p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-10 md:w-1/2 md:mb-0" >
            <Image
              src="/placeholder.svg?height=400&width=600&text=Forager+AI+Visualization"
              alt="Forager AI Visualization"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12" >
            <p className="mb-6 text-xl text-gray-600">
              Forager is our AI platform built on advancements in computation, biology, and chemistry. It allows us to rapidly identify and characterize bioactives with the potential to improve human health.
            </p>
            <p className="mb-6 text-xl text-gray-600">
              Our team of scientists, engineers, and data scientists work together to unlock the power of nature's hidden health solutions.
            </p>
            <button className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700">
              Explore Forager
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Forager

