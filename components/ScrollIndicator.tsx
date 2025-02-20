// components/ScrollIndicator.tsx

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'hero', label: 'Nature' },
  { id: 'what-we-do', label: 'Science' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'process', label: 'Process' },
  { id: 'impact', label: 'Impact' },
  { id: 'forager', label: 'Forager' }
]

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers = new Map()

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id)
              }
            })
          },
          {
            threshold: 0.5,
          }
        )

        observer.observe(element)
        observers.set(id, observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const handleDotClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="fixed z-50 hidden -translate-y-1/2 left-8 top-1/2 lg:block">
      <div className="flex flex-col items-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8.00002C21 6.34315 19.6569 5.00002 18 5.00002H6C4.34315 5.00002 3 6.34315 3 8.00002V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16Z" stroke="#22C55E" strokeWidth="2" />
          <path d="M3 11L21 11" stroke="#22C55E" strokeWidth="2" />
          <path d="M9 19L9 21" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 19L15 21" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="relative h-[300px] mt-4">
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
                className="absolute flex items-center justify-center w-5 h-5 -translate-x-1/2 -translate-y-1/2 left-1/2 focus:outline-none"
                onClick={() => handleDotClick(id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full ${
                    activeSection === id ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                  layoutId="activeDot"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
        <div className="mt-4 text-sm tracking-wider text-gray-500 writing-mode-vertical-rl">
          brightseed
        </div>
      </div>
    </div>
  )
}

