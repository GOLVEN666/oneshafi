// components/Footer.tsx

"use client"
import Link from "next/link"
import { footerNavigation } from "@/lib/constant"
import { motion } from "framer-motion"
import eclipse from "@/assets/logo/eclipse.svg"
import group from "@/assets/logo/group.svg"
export default function Footer() {
  return (
    <footer id="footer" className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
          <Link href="/" className="relative w-16 h-16">
            <motion.div
              className="absolute w-full h-full"
              animate={{
                rotate: 360,
              }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <img
                src={eclipse.src || "/placeholder.svg"}
                alt="Eclipse"
                className="w-full h-full"
              />
            </motion.div>
            <div className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <img
                src={group.src || "/placeholder.svg"}
                alt="Group"
                className="w-full h-full"
              />
            </div>
          </Link>            <p className="text-base text-gray-500">
              Combinant la sagesse ancestrale et l'innovation technologique pour votre santé.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Produits</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Entreprise</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Légal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Dar Shefaa & Sheva AI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

