"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Minus, Plus, ShoppingCart } from "lucide-react"
import Modal from "./Modal"
import { useCart, type CartItem } from "@/context/CartContext"

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    description: string
    image: string
    category: string
    price: string
    benefits?: string[]
  }
}

export default function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const { addToCart } = useCart()

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      category: product.category,
    }

    addToCart(cartItem)
    setOrderSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setOrderSuccess(false)
      onClose()
    }, 3000)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Commander">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:max-h-[50vh] overflow-y-auto">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:max-h-[50vh] overflow-y-auto">
          <h3 className="mb-2 text-xl font-bold text-[#234B4B]">{product.name}</h3>
          <p className="mb-4 text-[#234B4B]">{product.description}</p>

          {product.benefits && (
            <div className="mb-4">
              <h4 className="mb-2 font-semibold text-[#234B4B]">Bienfaits:</h4>
              <ul className="space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-[#234B4B]">
                    <Check className="w-4 h-4 mr-2 text-[#9A7A3F]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <p className="mb-2 text-lg font-bold text-[#234B4B]">Prix: {product.price}</p>

            {product.price !== "Sur devis" && (
              <div className="flex items-center mt-4">
                <span className="mr-4 text-[#234B4B]">Quantité:</span>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 text-gray-500 hover:text-[#9A7A3F]"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-[#234B4B]">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 text-gray-500 hover:text-[#9A7A3F]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {orderSuccess ? (
            <div className="p-3 text-center text-green-700 bg-green-100 rounded-lg">
              <p>Produit ajouté au panier avec succès!</p>
            </div>
          ) : (
            <button onClick={handleAddToCart} className="flex items-center justify-center w-full btn-primary">
              <ShoppingCart className="w-5 h-5 mr-2" />
              {product.price === "Sur devis" ? "Demander un devis" : "Ajouter au panier"}
            </button>
          )}
        </div>
      </div>
    </Modal>
  )
}

