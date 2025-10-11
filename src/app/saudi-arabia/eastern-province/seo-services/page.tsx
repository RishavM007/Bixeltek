export const metadata = {
    title:  "SEO Services in Eastern Province | SEO Agency for Khobar & Dammam – Bixeltek",
    description:
        " Bixeltek offers advanced SEO services across Khobar, Dammam, and Dhahran. Start ranking in just 60 days with AI-driven, intent-based SEO systems that improve visibility and conversions across Google, Gemini, and AI Overviews.",
    openGraph: {
        title: "SEO Services in Eastern Province | SEO Agency for Khobar & Dammam – Bixeltek",
        description:
            " Bixeltek offers advanced SEO services across Khobar, Dammam, and Dhahran. Start ranking in just 60 days with AI-driven, intent-based SEO systems that improve visibility and conversions across Google, Gemini, and AI Overviews.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province/seo-services",
    },
};


import HeroEasternProvinceSEO from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEO'
import SEOMarqueeSaudi from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOMarquee';
import SEOGrowthEasternProvince from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection1'
import SemanticSEOSection from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection2';
import SEOAuthorityCards from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection3';
import SEOProcessFramework from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection4';
import SEOServicesEasternProvince from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection5';
import React from 'react'

export default function page() {
  return (
    <>
    <HeroEasternProvinceSEO />
    <SEOGrowthEasternProvince />
    <SemanticSEOSection />
    <SEOMarqueeSaudi />
    <SEOAuthorityCards />
    <SEOProcessFramework />
    <SEOServicesEasternProvince />
    </>
  )
}
