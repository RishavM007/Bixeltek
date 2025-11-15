import PetIndustrySection from '@/components/PetSEO/PetIndustrySection'
import PetSEOFAQAccordion from '@/components/PetSEO/PetSEOFaq'
import PetIndustrySEOHero from '@/components/PetSEO/petSEOHero'
import PetSEOSystemSection from '@/components/PetSEO/PetSEOProcess'
import PetBrandAdvantages from '@/components/PetSEO/PetSEOSection2'
import PetCaseStudySection from '@/components/PetSEO/PetSEOSection3'
import PetTraditionalSEO from '@/components/PetSEO/PetTraditionalSEO'
import React from 'react'

export default function page() {
  return (
      <>
          <PetIndustrySEOHero />
          <PetIndustrySection />
          <PetTraditionalSEO />
          <PetSEOSystemSection />
          <PetBrandAdvantages />
          <PetCaseStudySection />
          <PetSEOFAQAccordion />
      </>
  )
}
