// components/Process.tsx

'use client'

import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const processes = [
  {
    title: 'Discovery',
    description: 'Identifying natural compounds with potential health benefits',
    image: '/placeholder.svg?height=400&width=600&text=Discovery'
  },
  {
    title: 'Analysis',
    description: 'Advanced AI processing of molecular structures',
    image: '/placeholder.svg?height=400&width=600&text=Analysis'
  },
  {
    title: 'Validation',
    description: 'Scientific verification of health impacts',
    image: '/placeholder.svg?height=400&width=600&text=Validation'
  },
  {
    title: 'Implementation',
    description: 'Integration into health solutions',
    image: '/placeholder.svg?height=400&width=600&text=Implementation'
  }
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div className="min-h-screen py-20 bg-gray-100" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="container px-6 mx-auto"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold" >Our Process</h2>
          <p className="text-xl text-gray-600"  >
            Discovering nature's solutions through advanced technology
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-5xl"
        >
          {processes.map((process, index) => (
            <SwiperSlide key={index} className="w-full max-w-lg">
              <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={process.image}
                    alt={process.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  )
}

