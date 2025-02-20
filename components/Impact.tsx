// app/components/Impact.tsx

'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { morphPath } from '../lib/animations'

const paths = {
  circle: "M50,50 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0",
  square: "M0,0 L100,0 L100,100 L0,100 Z",
  triangle: "M50,0 L100,100 L0,100 Z"
}

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    if (pathRef.current) {
      const interval = setInterval(() => {
        const shapes = Object.values(paths)
        const currentPath = pathRef.current?.getAttribute('d')
        const currentIndex = shapes.indexOf(currentPath || '')
        const nextIndex = (currentIndex + 1) % shapes.length
        morphPath(pathRef.current, shapes[nextIndex])
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen py-20 overflow-hidden bg-white">
      <motion.div
        style={{ scale, rotate }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            ref={pathRef}
            d={paths.circle}
            fill="none"
            stroke="rgba(0, 128, 0, 0.2)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold" >
            Our Impact
          </h2>
          <p className="text-xl text-gray-600" >
            Transforming lives through natural innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center"
           
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-2 text-4xl font-bold text-green-600"
              >
                {i}M+
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold">Impact Metric {i}</h3>
              <p className="text-gray-600">
                Making a difference in millions of 
                lives through natural solutions.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

