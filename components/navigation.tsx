// components/navigation.tsx

"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, ShoppingBag } from "lucide-react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { navigation } from "@/lib/constant"
import eclipse from "@/assets/logo/eclipse.svg"
import logoGif from "@/assets/logo/oneshafi.gif"
import { usePathname } from "next/navigation"

interface Category {
  content: {
    title: string
  }
}

export function Navbar({ categories = [] }: { categories?: Category[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHeroActive, setIsHeroActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const currentRoute = navigation.find((item) => item.route === pathname) || navigation[0]

  const activeSection = useScrollSpy(
    currentRoute.sections.map((section) => section.id),
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsHeroActive(activeSection === "hero")
  }, [activeSection])

  // Add this effect to prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Separate the mobile menu from the header to avoid z-index stacking context issues */}
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[80px] transition-all duration-300 
        ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : isHeroActive ? "bg-transparent" : "bg-white shadow-sm"
        }`}
      >
        <nav className="flex items-center justify-between h-full p-4 mx-auto max-w-7xl lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="relative w-16 h-16 group">
              <motion.div
                className={`absolute w-[150%] h-[150%] -left-[25%] -top-[25%] transition-all duration-300
                  ${isHeroActive && !isScrolled ? "brightness-0 invert" : ""}`}
                animate={{
                  rotate: 360,
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "linear" }}
              >
                <img src={eclipse.src || "/placeholder.svg"} alt="Eclipse" className="w-full h-full" />
              </motion.div>
              <div
                className="absolute w-8 h-8 transition-transform duration-300 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 top-1/2 left-1/2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* White glow background when navbar is transparent */}
                <div
                  className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                    isHeroActive && !isScrolled ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: "radial-gradient(circle, rgb(255, 255, 255) 0%, rgba(255,255,255,0) 70%)",
                    transform: "scale(2)",
                    filter: "blur(6px)",
                    zIndex: -1,
                  }}
                />

                <img
                  src={logoGif.src || "/placeholder.svg"}
                  alt="Logo Animation"
                  className="relative z-10 w-full h-full transition-all duration-300"
                  style={{
                    animationPlayState: isHovered ? "running" : "paused",
                    animationDelay: isHovered ? "0s" : "-999s",
                  }}
                />
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300
                ${isHeroActive && !isScrolled ? "text-white" : "text-gray-700"}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div
            className={`hidden lg:flex lg:gap-x-12 text-sm font-semibold leading-6 transition-colors duration-300
              ${isHeroActive && !isScrolled ? "text-white" : "text-gray-900"}`}
          >
            {navigation.map((item) => {
              const displayName =
                item.route === "/"
                  ? "Accueil"
                  : item.route
                      .slice(1)
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")
              return (
                <Link
                  key={item.route}
                  href={item.route}
                  className={`relative group ${pathname === item.route ? "text-green-600" : ""}`}
                >
                  {displayName}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
            <Link
              href="/boutique"
              className={`relative group px-4 py-2 rounded-full border-2 transition-all duration-300 flex items-center gap-2
                ${
                  isHeroActive && !isScrolled
                    ? "text-white border-white hover:bg-white hover:text-gray-900"
                    : "text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
            >
              <span>Boutique</span>
              <ShoppingBag className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

interface MobileMenuProps {
  open: boolean
  setOpen: (open: boolean) => void
}

function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    // Move the mobile menu outside the header and give it a higher z-index
    <div className="fixed inset-0 z-[9999] isolate">
      {" "}
      {/* Use isolate to create new stacking context */}
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
      />
      {/* Menu Panel */}
      <motion.div
        className="fixed inset-y-0 right-0 w-[300px] bg-white shadow-xl overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setOpen(false)}>
              <span className="sr-only">Dar Shefaa & Sheva AI</span>
              <img className="w-auto h-8" src={logoGif.src || "/placeholder.svg"} alt="Logo" />
            </Link>
            <button onClick={() => setOpen(false)} className="p-2 text-gray-600 transition-colors hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const displayName =
                    item.route === "/"
                      ? "Accueil"
                      : item.route
                          .slice(1)
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")
                  return (
                    <Link
                      key={item.route}
                      href={item.route}
                      className="block px-4 py-2 text-gray-800 transition-colors rounded-lg hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      {displayName}
                    </Link>
                  )
                })}
              </div>

              <div className="pt-6 mt-6 border-t">
                <Link
                  href="/boutique"
                  className="flex items-center px-4 py-2 text-gray-800 transition-colors rounded-lg hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <span>Boutique</span>
                  <ShoppingBag className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Update the SideNavbar component to add the dodge animation
export const SideNavbar = () => {
  const pathname = usePathname()
  const currentNavItem = navigation.find((item) => item.route === pathname)
  const sections = currentNavItem?.sections || []
  const activeSection = useScrollSpy(
    sections.map((s) => s.id),
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  )

  // Add state for visibility
  const [isVisible, setIsVisible] = useState(false)

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  if (sections.length === 0) return null

  return (
    <div
      className="fixed z-30 hidden transition-all duration-300 lg:block"
      style={{
        left: isVisible ? "2rem" : "-3rem",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Add a hover area to detect mouse */}
      <div className="absolute left-0 w-16 h-full -translate-x-full" onMouseEnter={() => setIsVisible(true)} />

      <div className="relative py-20 bg-transparent rounded-r-lg backdrop-blur-sm">
        {/* Vertical line */}

        {/* Navigation dots */}
        <div className="relative px-2 space-y-8">
          {sections.map(({ id, label }, index) => (
            <div key={id} className="relative">
              <motion.button
                className="relative z-10 flex items-center group focus:outline-none"
                onClick={() => handleDotClick(id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Dot */}
                <motion.div
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300
                    ${
                      activeSection === id
                        ? "border-green-500 bg-green-500"
                        : "border-gray-300 bg-white hover:border-green-500"
                    }`}
                />

                {/* Label */}
                <span
                  className={`ml-3 text-sm whitespace-nowrap transition-all duration-300
                    ${
                      activeSection === id
                        ? "text-green-500 opacity-100"
                        : "text-gray-500 opacity-0 group-hover:opacity-100"
                    }`}
                >
                  {label}
                </span>
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

