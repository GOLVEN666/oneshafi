// components/navigation.tsx

"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { navigation } from "@/lib/constant"
import eclipse from "@/assets/logo/eclipse.svg"
import group from "@/assets/logo/group.svg"
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const activeSection = useScrollSpy(
    navigation[0].sections.map((s) => s.id),
    50,
  )

  useEffect(() => {
    setIsHeroSection(activeSection === "hero")
  }, [activeSection])

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-2 mx-auto ${
        isHeroSection ? "text-blue-800 bg-white" : "text-white bg-transparent backdrop-blur-sm"
      } transition-all duration-300`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-20 h-20 text-2xl font-bold">
          <motion.div
              className="absolute w-full h-full"
              animate={{
                rotate: 360,
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "linear" }}
            >
              <img src={eclipse.src || "/placeholder.svg"} alt="Eclipse" className="w-full h-full" />
            </motion.div>
            <div className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <img src={group.src || "/placeholder.svg"} alt="Group" className="w-full h-full" />
            </div>
          </Link>

          <div className={`hidden space-x-8 md:flex ${isHeroSection ? "text-blue-800" : "text-white"}`}>
            {navigation.map((item) => (
              <div
                key={item.route}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.route)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.route} className="flex items-center transition duration-300 hover:text-green-400">
                  {item.route.slice(1) || "Accueil"}
                  {item.sections.length > 0 && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                {activeDropdown === item.route && item.sections.length > 0 && (
                  <div className="absolute left-0 p-2 mt-2 space-y-2 bg-white rounded-md shadow-lg">
                    {item.sections.map((section) => (
                      <Link
                        key={section.id}
                        href={`${item.route}#${section.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 transition duration-300 hover:bg-green-100"
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-4 md:hidden">
            {navigation.map((item) => (
              <div key={item.route}>
                <Link href={item.route} className="block transition duration-300 hover:text-green-400">
                  {item.route.slice(1) || "Accueil"}
                </Link>
                {item.sections.length > 0 && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.sections.map((section) => (
                      <Link
                        key={section.id}
                        href={`${item.route}#${section.id}`}
                        className="block text-sm text-gray-600 transition duration-300 hover:text-green-400"
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export const SideNavbar = ({ route }: { route: string }) => {
  const currentNavItem = navigation.find((item) => item.route === route)
  const sections = currentNavItem?.sections || []

  const activeSection = useScrollSpy(
    sections.map((s) => s.id),
    50,
  )

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (sections.length === 0) return null

  return (
    <div className="fixed z-50 hidden -translate-y-1/2 top-1/2 left-8 lg:block">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-[200px]">
          <div className="absolute w-px h-full transform -translate-x-1/2 bg-gray-300 left-1/2" />
          {sections.map(({ id, label }, index) => (
            <motion.div
              key={id}
              className="absolute w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                top: `${(index * 100) / (sections.length - 1)}%`,
              }}
            >
              <motion.button
                className="absolute flex items-center justify-center w-8 h-8 -translate-x-1/2 -translate-y-1/2 left-1/2 focus:outline-none"
                onClick={() => handleDotClick(id)}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full ${activeSection === id ? "bg-green-500" : "bg-gray-400"}`}
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.button>
              <AnimatePresence>
                {activeSection === id && (
                  <motion.span
                    className="absolute text-sm text-green-600 -translate-y-1/2 left-8 top-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

