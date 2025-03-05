import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navbar, SideNavbar } from "@/components/navigation"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import { CartProvider } from "@/context/CartContext"
import FloatingCartButton from "@/components/ui/FloatingCartButton"
import Script from "next/script"
import { headers } from 'next/headers'
import { getGeoData } from '@/lib/geo-utils'

// Add type definition for country codes
type CountryCode = 'MA' | 'FR' | 'US';

// Geo-specific metadata generator
const generateGeoMetadata = (country: string) => {
  const geoSpecificData = {
    MA: {
      title: "ONESHAFI | Médecine Naturelle & IA Médicale au Maroc",
      description: "Leader marocain en solutions de santé naturelle et IA. Produits authentiques et innovations médicales à Casablanca et partout au Maroc.",
      keywords: ["médecine traditionnelle Maroc", "Shilajit Maroc", "IA médicale Maghreb"]
    },
    FR: {
      title: "ONESHAFI | Solutions de Santé Naturelle et IA en France",
      description: "Solutions innovantes alliant médecine traditionnelle et intelligence artificielle. Livraison en France métropolitaine.",
      keywords: ["médecine holistique France", "Shilajit authentique France", "IA santé Europe"]
    },
    US: {
      title: "ONESHAFI | Natural Medicine & AI Health Solutions",
      description: "Innovative health solutions combining traditional medicine with artificial intelligence. Shipping available in the USA.",
      keywords: ["natural health AI", "authentic Shilajit USA", "medical AI solutions"]
    }
  }
  // Cast country as CountryCode and provide fallback
  return geoSpecificData[country as CountryCode] || geoSpecificData.MA
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const geoData = await getGeoData(headersList)
  const countrySpecificMeta = generateGeoMetadata(geoData.country)

  return {
    metadataBase: new URL('https://oneshafi.com'),
    title: {
      default: countrySpecificMeta.title,
      template: "%s | ONESHAFI"
    },
    description: countrySpecificMeta.description,
    keywords: [
      ...countrySpecificMeta.keywords,
      "intelligence artificielle santé",
      "médecine naturelle",
      "Hemoneole",
      "Shilajit",
      "Viniline"
    ],
    authors: [{ name: "Mouad Mankour" }],
    creator: "ONESHAFI",
    publisher: "ONESHAFI",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: 'https://oneshafi.com',
      languages: {
        'fr-MA': 'https://oneshafi.com',
        'ar-MA': 'https://oneshafi.com/ar',
        'fr-FR': 'https://oneshafi.com/fr',
        'en-US': 'https://oneshafi.com/en'
      }
    },
    openGraph: {
      type: 'website',
      locale: 'fr_MA',
      url: 'https://oneshafi.com',
      title: 'ONESHAFI | Médecine Traditionnelle Marocaine & Intelligence Artificielle',
      description: 'Solutions de santé naturelles et innovantes au Maroc',
      siteName: 'ONESHAFI',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ONESHAFI - Médecine Traditionnelle Marocaine & IA',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ONESHAFI | Médecine Traditionnelle Marocaine & IA',
      description: 'Solutions de santé naturelles et innovantes au Maroc',
      images: ['/twitter-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="alternate" href="https://oneshafi.com" hrefLang="fr-MA" />
        <link rel="alternate" href="https://oneshafi.com/ar" hrefLang="ar-MA" />
        <link rel="canonical" href="https://oneshafi.com" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "MedicalBusiness"],
              "@id": "https://oneshafi.com",
              "name": "ONESHAFI",
              "alternateName": "Dar Shefaa & Sheva AI",
              "url": "https://oneshafi.com",
              "areaServed": [
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "33.5731",
                    "longitude": "-7.5898"
                  },
                  "geoRadius": "50000",
                  "description": "Zone de service principale - Casablanca"
                },
                {
                  "@type": "Country",
                  "name": "Morocco"
                },
                {
                  "@type": "Country",
                  "name": "France"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services ONESHAFI",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Produits Naturels",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Product",
                          "name": "Hemoneole",
                          "description": "Traitement naturel pour les hémorroïdes",
                          "availableAtOrFrom": {
                            "@type": "Place",
                            "address": {
                              "@type": "PostalAddress",
                              "addressCountry": "MA"
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            })
          }}
        />

        {/* Geo-targeting meta tags */}
        <meta name="geo.region" content="MA-08" />
        <meta name="geo.placename" content="Casablanca" />
        <meta name="geo.position" content="33.5731;-7.5898" />
        <meta name="ICBM" content="33.5731, -7.5898" />
      </head>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Preloader />
          <Navbar />
          <SideNavbar />
          <main className="flex-1 pt-[80px]">{children}</main>
          <Footer />
          <FloatingCartButton />
        </CartProvider>
        
        {/* Google Analytics or Tag Manager */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR-GA-ID');
            `,
          }}
        />
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'