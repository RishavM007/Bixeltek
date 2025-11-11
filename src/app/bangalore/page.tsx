
export const metadata = {
    title: "Digital Marketing Agency in Bangalore | SEO, PPC & Web Design ",
    description:
        " Bixeltek is a Google Partner Certified digital marketing agency in Bangalore. We help tech-driven businesses scale with SEO, PPC, and web design engineered for measurable growth.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " Digital Marketing Agency in Bangalore | SEO, PPC & Web Design ",
        description:
            " Bixeltek is a Google Partner Certified digital marketing agency in Bangalore. We help tech-driven businesses scale with SEO, PPC, and web design engineered for measurable growth.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/bangalore",
    },
};


import BangaloreCoverageSection from '@/components/Bangalore/BangaloreAreas'
import AreasWeServeBangalore from '@/components/Bangalore/BangaloreAreas'
import HeroBangalore from '@/components/Bangalore/BangaloreHero'
import GrowthFrameworkSection from '@/components/Bangalore/BangaloreProcess'
import MarketingStructureSection from '@/components/Bangalore/BangaloreSection1'
import MarketingEngines from '@/components/Bangalore/BangaloreSection2'
import ServicesSectionBangalore from '@/components/Bangalore/BangaloreSection3'
import DataAndDesignSection from '@/components/Bangalore/BangaloreWhyChoose'
import React from 'react'

export default function page() {
  return (
      <>
          <HeroBangalore />
          <MarketingStructureSection />
          <MarketingEngines />
          <ServicesSectionBangalore />
          <GrowthFrameworkSection />
          <BangaloreCoverageSection />
          <DataAndDesignSection />
      </>

  )
}
