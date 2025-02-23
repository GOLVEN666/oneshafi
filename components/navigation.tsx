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
import { usePathname } from "next/navigation"
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const currentRoute = navigation.find((item) => item.route === pathname) || navigation[0]

  return (
    <header className="bg-white shadow-sm">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dar Shefaa & Sheva AI</span>
            <img className="w-auto h-8" src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.route ? "text-blue-600" : "text-gray-900"
              }`}
            >
              {item.route === "/" ? "Accueil" : item.route.slice(1)}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/boutique" className="text-sm font-semibold leading-6 text-gray-900">
            Boutique <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  )
}

function MobileMenu({ open, setOpen }) {
  return (
    <motion.div
      className={`lg:hidden ${open ? "fixed inset-0 z-50" : "hidden"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
      <motion.div
        className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dar Shefaa & Sheva AI</span>
            <img className="w-auto h-8" src="/logo.svg" alt="Logo" />
          </Link>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setOpen(false)}>
            <span className="sr-only">Close menu</span>
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flow-root mt-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.route}
                  href={item.route}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.route === "/" ? "Accueil" : item.route.slice(1)}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href="/boutique"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Boutique
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
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

