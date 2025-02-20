// app/page.tsx

'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import Innovation from '@/components/Innovation'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Research from '@/components/Research'
import Partners from '@/components/Partners'
import Impact from '@/components/Impact'
import Forager from '@/components/Forager'
import News from '@/components/News'
import Footer from '@/components/Footer'
import ScrollIndicator from '@/components/ScrollIndicator'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export default function Home() {
  

  return (
    <main className="min-h-screen pb-20 bg-white">
      <motion.section 
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>
      <motion.section 
        id="what-we-do"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <WhatWeDo />
      </motion.section>
      <motion.section 
        id="innovation"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Innovation />
      </motion.section>
      <motion.section 
        id="process"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Process />
      </motion.section>
      <motion.section 
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.section>
      <motion.section 
        id="research"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Research />
      </motion.section>
      <motion.section 
        id="partners"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Partners />
      </motion.section>
      <motion.section 
        id="impact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Impact />
      </motion.section>
      <motion.section 
        id="forager"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Forager />
      </motion.section>
      <motion.section 
        id="news"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <News />
      </motion.section>
      <Footer />
    </main>
  )
}

