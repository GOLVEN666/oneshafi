'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#00ff00"
        wireframe
        transparent
        opacity={0.5}
      />
    </Sphere>
  )
}

export default function Research() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" >
            Research & Development
          </h2>
          <p className="text-xl">
            Exploring the molecular frontier of natural compounds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
            
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Research Area {i}
              </h3>
              <p className="text-gray-300">
                Advancing our understanding of natural bioactive compounds through
                cutting-edge research and technology.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

