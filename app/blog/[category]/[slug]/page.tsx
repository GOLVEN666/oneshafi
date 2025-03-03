"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/appwrite"
import BlogPostGrid from "@/components/ui/BlogPostGrid"

export default function BlogPost() {
  const params = useParams()
  const { category, slug } = params

  const [currentPost, setCurrentPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      if (typeof slug === "string") {
        const postData = await getBlogPostBySlug(slug)
        setCurrentPost(postData)

        if (postData) {
          const allPosts = await getBlogPosts(postData.category)
          const filtered = allPosts.filter((post: any) => post.slug !== slug)
          setRelatedPosts(filtered.slice(0, 3))
        }
      }
      setLoading(false)
    }

    fetchData()
  }, [slug])

  if (loading) {
    return <div className="container py-20 text-center">Chargement...</div>
  }

  if (!currentPost) {
    return (
      <div className="container px-4 py-20 mx-auto">
        <h1 className="text-3xl font-bold text-[#234B4B]">Article non trouvé</h1>
        <Link href="/blog" className="text-[#9A7A3F] hover:underline mt-4 inline-block">
          Retour au blog
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#234B4B] text-white py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-[#92C0C8] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{currentPost.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-[#92C0C8]">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {currentPost.date}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {currentPost.author}
              </span>
              <span className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                {currentPost.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Image
              src={currentPost.image || "/placeholder.svg"}
              alt={currentPost.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[16/9]"
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto prose prose-lg prose-headings:text-[#234B4B] prose-a:text-[#9A7A3F] prose-a:no-underline hover:prose-a:underline"
          >
            <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <BlogPostGrid title="Articles similaires" posts={relatedPosts} backgroundClass="bg-[#92C0C8]" />
      )}

      {/* CTA Section */}
      <section className="py-12 bg-[#9A7A3F] text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Vous avez aimé cet article ?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités sur la santé naturelle et
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

