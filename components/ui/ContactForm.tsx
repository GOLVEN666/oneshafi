"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setStatus("loading")

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")
    }
  }

  return (
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <h2 className="text-3xl font-bold mb-6 text-[#234B4B]">Envoyez-nous un message</h2>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {status === "error" && <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[#234B4B] mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border border-[#92C0C8] rounded"
            required
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[#234B4B] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border border-[#92C0C8] rounded"
            required
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-[#234B4B] mb-2">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full p-2 border border-[#92C0C8] rounded"
            required
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-[#234B4B] mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 border border-[#92C0C8] rounded"
            rows={4}
            required
            disabled={status === "loading"}
          ></textarea>
        </div>
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </motion.div>
  )
}

