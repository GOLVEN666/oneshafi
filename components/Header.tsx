'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-700">
            BioActive
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/what-we-do" className="hover:text-green-600 transition duration-300">What We Do</Link>
            <Link href="/bioactives" className="hover:text-green-600 transition duration-300">Bioactives</Link>
            <Link href="/partnerships" className="hover:text-green-600 transition duration-300">Partnerships</Link>
            <Link href="/technology" className="hover:text-green-600 transition duration-300">Technology</Link>
            <Link href="/about-us" className="hover:text-green-600 transition duration-300">About Us</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/what-we-do" className="block hover:text-green-600 transition duration-300">What We Do</Link>
            <Link href="/bioactives" className="block hover:text-green-600 transition duration-300">Bioactives</Link>
            <Link href="/partnerships" className="block hover:text-green-600 transition duration-300">Partnerships</Link>
            <Link href="/technology" className="block hover:text-green-600 transition duration-300">Technology</Link>
            <Link href="/about-us" className="block hover:text-green-600 transition duration-300">About Us</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

