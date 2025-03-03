import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navbar, SideNavbar } from "@/components/navigation"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import { CartProvider } from "@/context/CartContext"
import FloatingCartButton from "@/components/ui/FloatingCartButton"

export const metadata: Metadata = {
  title: "Dar Shefaa & Sheva AI",
  description: "Fusion de médecine traditionnelle et d'intelligence artificielle",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Preloader />
          <Navbar />
          <SideNavbar />
          <main className="flex-1 pt-[80px]">{children}</main>
          <Footer />
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'