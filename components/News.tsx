// components/News.tsx

import Image from 'next/image'

const newsItems = [
  {
    title: "BioActive Launches New Bioactive Fiber",
    source: "Globe Newswire",
    image: "/placeholder.svg?height=200&width=300&text=Bioactive+Fiber"
  },
  {
    title: "New Research on Insoluble Fiber and Bioactives",
    source: "University Research",
    image: "/placeholder.svg?height=200&width=300&text=Fiber+Research"
  },
  {
    title: "BioActive Forms Coalition for Bioactive Adoption",
    source: "Business Wire",
    image: "/placeholder.svg?height=200&width=300&text=Bioactive+Coalition"
  }
]

const News = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Latest News</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md" >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.source}</p>
                <a href="#" className="inline-block mt-4 text-green-600 transition duration-300 hover:text-green-700">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News

