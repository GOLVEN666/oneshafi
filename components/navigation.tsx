// components/navigation.tsx

"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"
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
  const [isHeroActive, setIsHeroActive] = useState(false) // Track if #hero is active
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const currentRoute = navigation.find((item) => item.route === pathname) || navigation[0]

  // Use ScrollSpy to detect the active section
  const activeSection = useScrollSpy(
    currentRoute.sections.map((section) => section.id),
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  )

  // Update the state based on the active section
  useEffect(() => {
    setIsHeroActive(activeSection === "hero")
  }, [activeSection])

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isHeroActive ? "bg-transparent shadow-none" : "bg-white shadow-sm"
      }`}
    >
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="relative w-16 h-16">
            <motion.div
              className={`absolute w-[150%] h-[150%] -left-[25%] -top-[25%] ${
                isHeroActive ? "brightness-0 invert" : ""
              }`}
              animate={{
                rotate: 360,
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "linear" }}
            >
              <img src={eclipse.src || "/placeholder.svg"} alt="Eclipse" className="w-full h-full" />
            </motion.div>
            <div
              className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={logoGif.src || "/placeholder.svg"}
                alt="Logo Animation"
                className={`w-full h-full ${isHeroActive ? "brightness-0 invert" : ""}`}
                style={{
                  animationPlayState: isHovered ? "running" : "paused",
                  animationDelay: isHovered ? "0s" : "-999s", // This tricks the GIF to show first frame when paused
                }}
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              isHeroActive ? "text-white" : "text-gray-700"
            }`}
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
          className={`hidden lg:flex lg:gap-x-12 text-sm font-semibold leading-6 ${
            isHeroActive ? "text-white" : "text-gray-900"
          }`}
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
                className={`${pathname === item.route ? "text-blue-600" : ""} hover:text-blue-500 transition-colors`}
              >
                {displayName}
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/boutique"
            className={`text-sm font-semibold leading-6 ${isHeroActive ? "text-white" : "text-gray-900"}`}
          >
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
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    {displayName}
                  </Link>
                )
              })}
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
export const SideNavbar = () => {
  const pathname = usePathname();
  const currentNavItem = navigation.find((item) => item.route === pathname);
  const sections = currentNavItem?.sections || [];
  const activeSection = useScrollSpy(
    sections.map((s) => s.id),
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  );

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (sections.length === 0) return null;

  return (
    <div className="fixed z-50 hidden transform -translate-y-1/2 top-1/2 left-8 lg:block">
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
                  className={`w-3 h-3 rounded-full ${activeSection === id ? "bg-blue-500" : "bg-gray-400"}`}
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.button>
              <AnimatePresence>
                {activeSection === id && (
                  <motion.span
                    className="absolute text-sm text-blue-600 whitespace-pre-wrap transform -translate-y-1/2 left-2 top-1/2"
                    style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  ></motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};