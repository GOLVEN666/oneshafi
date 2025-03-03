// components/ui/CartModal.tsx

"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Modal from "./Modal"
import { useCart } from "@/context/CartContext"
import { createOrder } from "@/lib/appwrite"

export default function CartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Create order in Appwrite
      await createOrder({
        customerInfo: JSON.stringify(formData),
        items: cart.map((item) => JSON.stringify(item)),
        totalAmount: totalPrice,
        status: "pending",
        createdAt: new Date().toISOString(),
      })

      // Show success message and clear cart
      setCheckoutSuccess(true)
      clearCart()

      // Reset and close after 3 seconds
      setTimeout(() => {
        setCheckoutSuccess(false)
        setIsCheckingOut(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Error creating order:", error)
      alert("Une erreur s'est produite lors de la commande. Veuillez réessayer.")
    }
  }

  if (cart.length === 0 && !checkoutSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Votre Panier">
        <div className="py-8 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="mb-2 text-xl font-medium text-[#234B4B]">Votre panier est vide</h3>
          <p className="text-gray-500">Ajoutez des produits à votre panier pour commencer vos achats.</p>
          <button onClick={onClose} className="mt-6 btn-primary">
            Continuer mes achats
          </button>
        </div>
      </Modal>
    )
  }

  if (checkoutSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Commande Confirmée">
        <div className="py-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-green-500 rounded-full">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="mb-2 text-xl font-medium text-[#234B4B]">Merci pour votre commande!</h3>
          <p className="text-gray-500">
            Votre commande a été enregistrée avec succès. Vous recevrez bientôt un email de confirmation.
          </p>
          <button onClick={onClose} className="mt-6 btn-primary">
            Continuer mes achats
          </button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Votre Panier" maxWidth="max-w-3xl">
      {!isCheckingOut ? (
        <>
          <div className="max-h-[50vh] overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex py-4 border-b">
                <div className="flex-shrink-0 w-20 h-20">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <h4 className="font-medium text-[#234B4B]">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="mt-auto font-semibold text-[#9A7A3F]">{item.price}</p>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-gray-400 transition-colors rounded-full hover:bg-gray-100 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center mt-auto border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-gray-500 hover:text-[#9A7A3F]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 py-1 text-sm text-[#234B4B]">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-gray-500 hover:text-[#9A7A3F]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 mt-6 border-t">
            <div className="flex justify-between mb-2">
              <span className="text-[#234B4B]">Nombre d'articles:</span>
              <span className="font-medium text-[#234B4B]">{totalItems}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-[#234B4B]">Total:</span>
              <span className="text-xl font-bold text-[#234B4B]">{totalPrice}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => clearCart()}
                className="flex-1 px-4 py-2 text-[#9A7A3F] bg-white border border-[#9A7A3F] rounded-full hover:bg-gray-50"
              >
                Vider le panier
              </button>
              <button onClick={() => setIsCheckingOut(true)} className="flex-1 btn-primary">
                Passer à la caisse
              </button>
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={handleCheckout} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
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
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 text-sm font-medium text-[#234B4B]">
              Adresse
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="city" className="block mb-1 text-sm font-medium text-[#234B4B]">
                Ville
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block mb-1 text-sm font-medium text-[#234B4B]">
                Code postal
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-1 text-sm font-medium text-[#234B4B]">
                Pays
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="pt-4 mt-4 border-t">
            <div className="flex justify-between mb-2">
              <span className="text-[#234B4B]">Total:</span>
              <span className="text-xl font-bold text-[#234B4B]">{totalPrice}</span>
            </div>
          </div>

          <div className="flex mt-4 space-x-4">
            <button
              type="button"
              onClick={() => setIsCheckingOut(false)}
              className="flex-1 px-4 py-2 text-[#9A7A3F] bg-white border border-[#9A7A3F] rounded-full hover:bg-gray-50"
            >
              Retour
            </button>
            <button type="submit" className="flex-1 btn-primary">
              Confirmer la commande
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

