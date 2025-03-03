// components/Preloader.tsx

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import animationHook from "@/assets/logo/animation-hook.gif"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1400) // Adjust the duration as needed

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center bg-[#F1F3F0]">
      <div className="text-center">
        <Image
          src={animationHook || "/placeholder.svg"}
          className="self-center m-auto p-auto"
          alt="Loading"
          width={300}
          height={300}
        />
        <p className="mt-4 text-xl font-semibold text-[#234B4B]">Bienvenue chez Dar Shefaa & Sheva AI</p>
        <p className="mt-2 text-[#234B4B]">La fusion de la médecine traditionnelle et de l'intelligence artificielle</p>
      </div>
    </div>
  )
}

