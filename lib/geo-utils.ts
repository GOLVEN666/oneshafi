import { headers } from 'next/headers'

export interface GeoData {
  country: string
  city?: string
  region?: string
}

export async function getGeoData(headersList = headers()): Promise<GeoData> {
  // Get country from CloudFlare or similar CDN headers
  const country = headersList.get('cf-ipcountry') || 'MA'
  
  // You can expand this with more sophisticated geo-detection
  // like MaxMind GeoIP2 or similar services
  
  return {
    country,
    city: headersList.get('cf-ipcity') || 'Casablanca',
    region: headersList.get('cf-region') || 'Casablanca-Settat'
  }
}

type CountryCode = 'MA' | 'FR' | 'US';

export function getCurrencyByCountry(country: string): string {
  const currencyMap = {
    MA: 'MAD',
    FR: 'EUR',
    US: 'USD'
  }
  return currencyMap[country as CountryCode] || 'MAD'
}