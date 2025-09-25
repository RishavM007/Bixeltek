import React from 'react'
import WhyGoogleAdsToronto from '@/components/Toronto/GoogleAds/Section2TG'
import CampaignsSection from '@/components/Toronto/GoogleAds/Sextion3TG'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import WhyGoogleAdsToronto2 from '@/components/Toronto/GoogleAds/Section4TG'
import GoogleAdsServicesSectionToronto from '@/components/Toronto/GoogleAds/Section5TG'
import TextMarquee from '@/components/Toronto/GoogleAds/SectionMaruqq'
import WhoIsThisServiceFor from '@/components/Toronto/GoogleAds/Section6TG'
import GradientBorderContainersMobToronto from '@/components/Toronto/GoogleAds/TimelineTG'
import TGDevFaq from '@/components/Toronto/GoogleAds/SectionFaqTG'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'

export default function Page() {
  return (
    <>
<section className="relative w-full h-[105vh] flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute inset-0">

      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl text-center px-4">
        <h1 className="text-4xl md:text-7xl font-inter font-bold text-white/90 text-white mb-4 leading-tight">
          Toronto’s <span className='text-blue-500'>Trusted Google Ads Partner</span> for Scalable Lead Growth
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 mb-6">
          Bixeltek is a certified Google Partner agency helping Toronto &amp; GTA businesses run smarter PPC campaigns that deliver high-quality leads and measurable ROI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-black/10 backdrop:blur-2xl border border-blue-500 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
            Get Your Free Google Ads Audit
          </button>
          <button className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg transition">
            Speak to a Specialist
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <LogoTicker2/>
    </section>
    <WhyGoogleAdsToronto/>
    <CampaignsSection/>
    <MovingBlob/>
    <WhyGoogleAdsToronto2/>
    <TextMarquee />
    <GoogleAdsServicesSectionToronto />
    <GradientBorderContainersMobToronto/>
    <WhoIsThisServiceFor/>
    <TGDevFaq/>
    </>
  )
}
