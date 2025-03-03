import { type NextRequest, NextResponse } from "next/server"
import {
  databases,
  DATABASE_ID,
  PRODUCTS_COLLECTION_ID,
  BLOG_POSTS_COLLECTION_ID,
  SERVICES_COLLECTION_ID,
  TEAM_MEMBERS_COLLECTION_ID,
  TESTIMONIALS_COLLECTION_ID,
} from "@/lib/appwrite"
import { Query } from "appwrite"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const collection = searchParams.get("collection")
  const slug = searchParams.get("slug")
  const category = searchParams.get("category")

  try {
    let collectionId = ""
    const queries = []

    // Determine which collection to query
    switch (collection) {
      case "products":
        collectionId = PRODUCTS_COLLECTION_ID
        break
      case "blog-posts":
        collectionId = BLOG_POSTS_COLLECTION_ID
        queries.push(Query.orderDesc("date"))
        break
      case "services":
        collectionId = SERVICES_COLLECTION_ID
        break
      case "team-members":
        collectionId = TEAM_MEMBERS_COLLECTION_ID
        break
      case "testimonials":
        collectionId = TESTIMONIALS_COLLECTION_ID
        break
      default:
        return NextResponse.json({ error: "Invalid collection" }, { status: 400 })
    }

    // Add filters if provided
    if (slug) {
      queries.push(Query.equal("slug", slug))
    }

    if (category) {
      queries.push(Query.equal("category", category))
    }

    // Execute the query
    const response = await databases.listDocuments(DATABASE_ID, collectionId, queries)

    // Return the results
    return NextResponse.json(response.documents)
  } catch (error) {
    console.error("Error fetching data from Appwrite:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}

