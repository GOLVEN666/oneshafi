"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import CartModal from "./CartModal"

export default function FloatingCartButton() {
  const { totalItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      const buttonRect = document.getElementById("floating-cart-button")?.getBoundingClientRect()
      if (buttonRect) {
        const distanceX = e.clientX - (buttonRect.left + buttonRect.width / 2)
        const distanceY = e.clientY - (buttonRect.top + buttonRect.height / 2)
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

        if (distance < 100) {
          const angle = Math.atan2(distanceY, distanceX)
          const x = Math.cos(angle) * 20
          const y = Math.sin(angle) * 20

          controls.start({
            x: -x,
            y: -y,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          })

          clearTimeout(timeout)
          timeout = setTimeout(() => {
            controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
          }, 500)
        } else {
          controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeout)
    }
  }, [controls])

  return (
    <>
      <motion.button
        id="floating-cart-button"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#9A7A3F] text-white rounded-full shadow-lg hover:bg-[#7A6231] transition-colors duration-300"
        onClick={() => setIsCartOpen(true)}
        animate={controls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ShoppingBag className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </motion.button>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

