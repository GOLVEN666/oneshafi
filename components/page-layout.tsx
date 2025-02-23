import type React from "react"
import { Navbar, SideNavbar } from "./navigation"

interface PageLayoutProps {
  children: React.ReactNode
  route: string
}

export default function PageLayout({ children, route }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-brown-50">
      <Navbar />
      <SideNavbar route={route} />
      <main className="container px-4 py-8 mx-auto">{children}</main>
    </div>
  )
}

