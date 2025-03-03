"use client"

import type React from "react"

import { useState } from "react"
import Modal from "./Modal"
import { createPartnershipApplication } from "@/lib/appwrite"

interface PartnershipModalProps {
  isOpen: boolean
  onClose: () => void
  type: "ambassadeur" | "partenaire" | "revendeur"
  title: string
}

export default function PartnershipModal({ isOpen, onClose, type, title }: PartnershipModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await createPartnershipApplication({
        type,
        ...formData,
        status: "pending",
        createdAt: new Date().toISOString(),
      })

      setSubmitSuccess(true)

      // Reset form and close modal after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
        setSubmitSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Error submitting application:", error)
      setError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      {submitSuccess ? (
        <div className="py-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-green-500 rounded-full">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="mb-2 text-xl font-medium text-[#234B4B]">Candidature envoyée avec succès!</h3>
          <p className="text-gray-500">
            Nous avons bien reçu votre candidature. Notre équipe vous contactera prochainement.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-red-700 bg-red-100 rounded-lg">
              <p>{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-[#234B4B]">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-[#234B4B]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-[#234B4B]">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="company" className="block mb-1 text-sm font-medium text-[#234B4B]">
              {type === "revendeur" || type === "partenaire" ? "Entreprise" : "Profession"}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-[#234B4B]">
              {type === "ambassadeur"
                ? "Pourquoi souhaitez-vous devenir ambassadeur ?"
                : type === "partenaire"
                  ? "Décrivez votre projet de partenariat"
                  : "Pourquoi souhaitez-vous devenir revendeur ?"}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
              disabled={isSubmitting}
            >
              Annuler
            </button>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  )
}

// This component is used in the success message
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

