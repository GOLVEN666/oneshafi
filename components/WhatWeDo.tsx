// components/WhatWeDo.tsx

import Image from 'next/image'

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-10 md:w-1/2 md:mb-0" >
            <h2 className="mb-6 text-4xl font-bold text-gray-800">What We Do</h2>
            <p className="mb-6 text-xl text-gray-600">
              We explore nature at the molecular level, discovering unique insights into how plants and microbes affect our bodies, minds, and microbiome. Our AI-powered platform, Forager®, identifies bioactive compounds and their health benefits.
            </p>
            <button className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Nature+Science+Diagram"
              alt="Nature Science Diagram"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

