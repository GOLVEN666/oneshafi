"use client"

import BlogPostCard from "./BlogPostCard"

interface BlogPost {
  title: string
  category: string
  slug: string
  image: string
}

interface BlogPostGridProps {
  title?: string
  posts: BlogPost[]
  columns?: 2 | 3
  backgroundClass?: string
}

export default function BlogPostGrid({ title, posts, columns = 3, backgroundClass = "bg-white" }: BlogPostGridProps) {
  return (
    <section id="blogs" className={`${backgroundClass} section-padding`}>
      <div className="container">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#234B4B]">{title}</h2>}
        <div className={`grid gap-8 md:grid-cols-${columns}`}>
          {posts.map((post, index) => (
            <BlogPostCard
              key={`${post.slug}-${index}`}
              title={post.title}
              category={post.category}
              slug={post.slug}
              image={post.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

