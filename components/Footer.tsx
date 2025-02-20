// components/Footer.tsx

import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-800">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="transition duration-300 hover:text-green-400">About Us</Link></li>
              <li><Link href="/careers" className="transition duration-300 hover:text-green-400">Careers</Link></li>
              <li><Link href="/contact" className="transition duration-300 hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Technology</h3>
            <ul className="space-y-2">
              <li><Link href="/forager" className="transition duration-300 hover:text-green-400">Forager AI</Link></li>
              <li><Link href="/research" className="transition duration-300 hover:text-green-400">Research</Link></li>
              <li><Link href="/patents" className="transition duration-300 hover:text-green-400">Patents</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="transition duration-300 hover:text-green-400">Blog</Link></li>
              <li><Link href="/press" className="transition duration-300 hover:text-green-400">Press Releases</Link></li>
              <li><Link href="/events" className="transition duration-300 hover:text-green-400">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="transition duration-300 hover:text-green-400"><Facebook /></a>
              <a href="#" className="transition duration-300 hover:text-green-400"><Twitter /></a>
              <a href="#" className="transition duration-300 hover:text-green-400"><LinkedIn /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p>&copy; 2023 BioActive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

