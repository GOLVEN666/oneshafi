import { type NextRequest, NextResponse } from "next/server"
import { databases, DATABASE_ID } from "@/lib/appwrite"
import { ID } from "appwrite"

// Collection ID for contact form submissions
const CONTACT_COLLECTION_ID = "67c322b400187f550c37"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create document in Appwrite
    const response = await databases.createDocument(DATABASE_ID, CONTACT_COLLECTION_ID, ID.unique(), {
      name: data.name,
      email: data.email,
      subject: data.subject || "",
      message: data.message,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, id: response.$id })
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}

