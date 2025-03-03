// lib/appwrite.ts

import { Client, Account, Databases, Storage, ID, Query, ImageGravity } from "appwrite"

// Initialize the Appwrite client
const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("67b391b50006cda93db7")

// Initialize Appwrite services
export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)

// Database and collection IDs
export const DATABASE_ID = "67c22eda0001fcc11b7f"
export const PRODUCTS_COLLECTION_ID = "67c232e9000de503394e"
export const BLOG_POSTS_COLLECTION_ID = "67c232f3000ad619a995"
export const SERVICES_COLLECTION_ID = "67c232f8003c394b47c8"
export const TEAM_MEMBERS_COLLECTION_ID = "67c232ff0024ac2323d8"
export const TESTIMONIALS_COLLECTION_ID = "67c2330500370a800f0a"
export const ORDERS_COLLECTION_ID = "67c511e6003a2a5d1afc" // You'll need to create this collection
export const PARTNERSHIP_APPLICATIONS_COLLECTION_ID = "67c513b2000bf983daaa" // You'll need to create this collection

// Helper functions for data fetching
export async function getProducts(category?: string) {
  try {
    const queries = []

    if (category) {
      queries.push(Query.equal("category", category))
    }

    const response = await databases.listDocuments(DATABASE_ID, PRODUCTS_COLLECTION_ID, queries)

    return response.documents
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, PRODUCTS_COLLECTION_ID, [Query.equal("slug", slug)])

    return response.documents[0] || null
  } catch (error) {
    console.error("Error fetching product by slug:", error)
    return null
  }
}

export async function getBlogPosts(category?: string) {
  try {
    const queries = [Query.orderDesc("date")]

    if (category) {
      queries.push(Query.equal("category", category))
    }

    const response = await databases.listDocuments(DATABASE_ID, BLOG_POSTS_COLLECTION_ID, queries)

    return response.documents
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, BLOG_POSTS_COLLECTION_ID, [Query.equal("slug", slug)])

    return response.documents[0] || null
  } catch (error) {
    console.error("Error fetching blog post by slug:", error)
    return null
  }
}

export async function getServices(category?: string) {
  try {
    const queries = []

    if (category) {
      queries.push(Query.equal("category", category))
    }

    const response = await databases.listDocuments(DATABASE_ID, SERVICES_COLLECTION_ID, queries)

    return response.documents
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const response = await databases.listDocuments(DATABASE_ID, SERVICES_COLLECTION_ID, [Query.equal("slug", slug)])

    return response.documents[0] || null
  } catch (error) {
    console.error("Error fetching service by slug:", error)
    return null
  }
}

export async function getTeamMembers() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, TEAM_MEMBERS_COLLECTION_ID)

    return response.documents
  } catch (error) {
    console.error("Error fetching team members:", error)
    return []
  }
}

export async function getTestimonials(category?: string) {
  try {
    const queries = []

    if (category) {
      queries.push(Query.equal("category", category))
    }

    const response = await databases.listDocuments(DATABASE_ID, TESTIMONIALS_COLLECTION_ID, queries)

    return response.documents
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

// New functions for orders and partnership applications

export async function createOrder(orderData: any) {
  try {
    const response = await databases.createDocument(DATABASE_ID, ORDERS_COLLECTION_ID, ID.unique(), orderData)
    return response
  } catch (error) {
    console.error("Error creating order:", error)
    throw error
  }
}

export async function createPartnershipApplication(applicationData: any) {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      PARTNERSHIP_APPLICATIONS_COLLECTION_ID,
      ID.unique(),
      applicationData,
    )
    return response
  } catch (error) {
    console.error("Error creating partnership application:", error)
    throw error
  }
}

// Helper function to get file preview URL
export function getFilePreview(fileId: string) {
  return storage.getFilePreview(
    process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID || "",
    fileId,
    2000, // width
    2000, // height
    ImageGravity.Center,
    100,
  )
}

// Helper function to upload a file
export async function uploadFile(file: File) {
  try {
    const response = await storage.createFile(process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID || "", ID.unique(), file)

    return response.$id
  } catch (error) {
    console.error("Error uploading file:", error)
    throw error
  }
}

