"use client"

import type React from "react"

import { useState } from "react"

interface NewsletterFormProps {
  onSuccess?: () => void
}

export default function NewsletterForm({ onSuccess }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setStatus("loading")

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setStatus("success")
      setEmail("")

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")
    }
  }

  return (
    <div>
      {status === "success" && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded-md text-sm">
          Merci pour votre inscription à notre newsletter !
        </div>
      )}

      {status === "error" && <div className="mb-4 p-2 bg-red-100 text-red-800 rounded-md text-sm">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex">
          <input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow p-2 rounded-l-full focus:outline-none text-[#234B4B]"
            required
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="bg-[#234B4B] text-white px-6 py-2 rounded-r-full hover:bg-opacity-90 transition duration-300"
            disabled={status === "loading"}
          >
            {status === "loading" ? "..." : "S'abonner"}
          </button>
        </div>
      </form>
    </div>
  )
}

