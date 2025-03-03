"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import CartModal from "./CartModal"

export default function CartButton() {
  const { totalItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative p-2 transition-colors rounded-full hover:bg-gray-100"
        aria-label="Voir le panier"
      >
        <ShoppingBag className="w-6 h-6 text-[#234B4B]" />
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-[#9A7A3F] rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

