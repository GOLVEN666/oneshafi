"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import notFoundSvg from '@/assets/logo/404.svg'

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(255,254,234,1)_0%,_rgba(255,254,234,1)_35%,_#B7E8EB_100%)]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center w-full max-w-md px-4 z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center w-full mb-8"
          >
            <Image
              src={notFoundSvg}
              alt="404 Error"
              width={300}
              height={217}
              priority
              className="w-auto h-auto max-w-[300px]"
              unoptimized
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-2xl font-semibold text-[#234B4B]">Page non trouvée</h2>
            <p className="text-[#234B4B]/80">
              Désolé, la page que vous recherchez n'existe pas.
            </p>
            
            <Link 
              href="/"
              className="inline-block px-6 py-3 mt-4 text-white transition-colors rounded-lg bg-[#234B4B] hover:bg-[#234B4B]/90"
            >
              Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <style jsx>{`
        .ocean { 
          height: 5%;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #015871;
        }

        .wave {
          background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
          position: absolute;
          top: -198px;
          width: 6400px;
          height: 198px;
          animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
          transform: translate3d(0, 0, 0);
        }

        .wave:nth-of-type(2) {
          top: -175px;
          animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, 
                    swell 7s ease -1.25s infinite;
          opacity: 1;
        }

        @keyframes wave {
          0% {
            margin-left: 0;
          }
          100% {
            margin-left: -1600px;
          }
        }

        @keyframes swell {
          0%, 100% {
            transform: translate3d(0,-25px,0);
          }
          50% {
            transform: translate3d(0,5px,0);
          }
        }
      `}</style>
    </div>
  )
}