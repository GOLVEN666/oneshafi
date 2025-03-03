import { type NextRequest, NextResponse } from "next/server"
import { databases, DATABASE_ID } from "@/lib/appwrite"
import { ID } from "appwrite"

// Collection ID for newsletter subscriptions
const NEWSLETTER_COLLECTION_ID = "67c323de0021fc7f5aad"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate email
    if (!data.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Create document in Appwrite
    const response = await databases.createDocument(DATABASE_ID, NEWSLETTER_COLLECTION_ID, ID.unique(), {
      email: data.email,
      subscribed: true,
      subscribedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, id: response.$id })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}

