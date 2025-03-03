"use client"

import ProductCard from "./ProductCard"

interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  price?: string
  slug: string
}

interface ProductGridProps {
  title?: string
  products: Product[]
  columns?: 2 | 3 | 4
  backgroundClass?: string
  baseUrl?: string
}

export default function ProductGrid({
  title,
  products,
  columns = 3,
  backgroundClass = "bg-white",
  baseUrl = "/produits-physiques",
}: ProductGridProps) {
  return (
    <section id="products" className={`${backgroundClass} section-padding`}>
      <div className="container">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">{title}</h2>}
        <div className={`grid gap-8 md:grid-cols-${columns}`}>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              category={product.category}
              price={product.price}
              slug={product.slug}
              index={index}
              baseUrl={baseUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

