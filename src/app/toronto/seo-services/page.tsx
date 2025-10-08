
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
import AreasWeServeCanada from '@/components/Toronto/SeoServices/AreasWeServeTS'
import SEO_BenefitsGrid from '@/components/Toronto/SeoServices/TSSection5'
import BenefitsSectionTorontoSeo from '@/components/Toronto/SeoServices/TSSection6'
import TSFaq from '@/components/Toronto/SeoServices/TSFaq'
import GradientBorderContainersSEO from '@/components/Toronto/SeoServices/TSTimeline'
import ContactFromNew from '@/components/ContactFormNew';
import IndustriesTS from '@/components/Toronto/SeoServices/TSIndustries';
export default function page() {
  return (
    <>
      <TSHero />
      <MovingBlob />
      <WhySEOToronto />
      <SEOGridSection2 />
      <WhySEOMattersToronto />
      <SEOcategoryServicesToronto />
      <IndustriesTS/>
      <GradientBorderContainersSEO />
      <SEO_BenefitsGrid />
      <BenefitsSectionTorontoSeo />
      <AreasWeServeCanada />
      <TSFaq />
      <section
        className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
        id="form"
      >
        {/* Left Side - Text & CTAs */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
          <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
              Ready to Dominate <span className="text-blue-500">Google Rankings in Toronto?</span>
            </h2>
            <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
              Your customers are searching on Google right now — but are they finding you or your competitors?
              Partner with <span className="font-semibold">Bixeltek</span>, Toronto’s trusted SEO agency, to build
              an organic growth strategy that boosts visibility, trust, and long-term ROI across Toronto and the GTA.
            </p>

            {/* CTA Buttons */}
            
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <ContactFromNew />
        </div>
      </section>
    </>
  )
}
