
export const metadata = {
    title: "SEO Services Toronto | Bixeltek – Trusted SEO Agency",
    description:
        " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " SEO Services Toronto | Bixeltek – Trusted SEO Agency",
        description:
            " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/toronto/seo-services",
    },
};

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
