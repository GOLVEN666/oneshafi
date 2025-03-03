"use client"

import { useEffect, useState } from "react"
import { getBlogPosts } from "@/lib/appwrite"
import HeroSection from "@/components/ui/HeroSection"
import BlogPostGrid from "@/components/ui/BlogPostGrid"

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogPosts() {
      const postsData = await getBlogPosts()
      setBlogPosts(postsData)
      setLoading(false)
    }

    fetchBlogPosts()
  }, [])

  if (loading) {
    return <div className="container py-20 text-center">Chargement...</div>
  }

  return (
    <div>
      <HeroSection
        title="Blog & Ressources"
        subtitle="Explorez nos articles sur la médecine traditionnelle, l'IA dans la santé, et les témoignages inspirants."
      />

      {/* Blog Posts Grid */}
      <BlogPostGrid posts={blogPosts} backgroundClass="bg-white" />

      {/* Newsletter Section */}
      <section id="newsletter" className="section-padding bg-[#9A7A3F] text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Restez informé</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités sur la santé naturelle et
            l'IA.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow p-2 rounded-l-full focus:outline-none text-[#234B4B]"
              />
              <button
                type="submit"
                className="bg-[#234B4B] text-white px-6 py-2 rounded-r-full hover:bg-opacity-90 transition duration-300"
              >
                S'abonner
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

