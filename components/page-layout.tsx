import type React from "react"
import { Navbar, SideNavbar } from "./navigation"
import Footer from "./Footer"
import { navigation } from "@/lib/constant"

interface PageLayoutProps {
  children: React.ReactNode
  route: string
}

export default function PageLayout({ children, route }: PageLayoutProps) {
  const currentRoute = navigation.find((item) => item.route === route)
  const showSideNavbar = currentRoute && currentRoute.sections && currentRoute.sections.length > 0

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="relative">
          {showSideNavbar && <SideNavbar route={route} />}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

