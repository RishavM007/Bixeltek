import React from 'react'
import TSHero from '@/components/Toronto/SeoServices/TSHero'
import WhySEOToronto from '@/components/Toronto/SeoServices/TSSection1'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import SEOGridSection2 from '@/components/Toronto/SeoServices/TSSection2'
import WhySEOMattersToronto from '@/components/Toronto/SeoServices/TSSection3'
import SEOcategoryServicesToronto from '@/components/Toronto/SeoServices/TSSection4'
import IndustryCarouselSectionWeb from '@/components/WebDev/WebDevInd'
import AreasWeServeCanada from '@/components/Toronto/SeoServices/AreasWeServeTS'
import SEO_BenefitsGrid from '@/components/Toronto/SeoServices/TSSection5'
import BenefitsSectionTorontoSeo from '@/components/Toronto/SeoServices/TSSection6'
import TSFaq from '@/components/Toronto/SeoServices/TSFaq'
import GradientBorderContainersSEO from '@/components/Toronto/SeoServices/TSTimeline'
export default function page() {
  return (
    <>
      <TSHero />
      <MovingBlob/>
      <WhySEOToronto/>
      <SEOGridSection2/>
      <WhySEOMattersToronto/>
      <SEOcategoryServicesToronto />
      <IndustryCarouselSectionWeb/>
      <GradientBorderContainersSEO/>
      <SEO_BenefitsGrid />
      <BenefitsSectionTorontoSeo/>
      <AreasWeServeCanada />
      <TSFaq/>
    </>
  )
}
