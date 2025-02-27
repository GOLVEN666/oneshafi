import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navigation"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"

export const metadata: Metadata = {
  title: "Dar Shefaa & Sheva AI",
  description: "Fusion de médecine traditionnelle et d'intelligence artificielle",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

