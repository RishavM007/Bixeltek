



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
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'

export default function page() {
  return (
    <>
      <section className="relative w-full h-[105vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
        </div>
        <div className="relative z-10 max-w-7xl text-center px-4">
          <h1 className="text-4xl md:text-7xl font-inter font-bold text-white/90 text-white mb-4 leading-tight">
            Toronto’s <span className='text-blue-500'>Trusted Google Ads Partner</span> for Scalable Lead Growth
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 mb-6">
            Bixeltek is a certified Google Partner agency helping Toronto &amp; GTA businesses run smarter PPC campaigns that deliver high-quality leads and measurable ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#form">
              <button className="px-6 py-3 bg-black/10 backdrop:blur-2xl border border-blue-500 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
                Get Your Free Google Ads Audit
              </button>
            </Link>
            <a href="tel:+91-9100032301">
              <button className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg transition">
                Speak to a Specialist
              </button>
            </a>
          </div>

        </div>
        <div className="absolute inset-0 bg-black/40" />
        <LogoTicker2 />
      </section>
      <WhyGoogleAdsToronto />
      <CampaignsSection />
      <MovingBlob />
      <WhyGoogleAdsToronto2 />
      <TextMarquee />
      <GoogleAdsServicesSectionToronto />
      <GradientBorderContainersMobToronto />
      <WhoIsThisServiceFor />
      <TGDevFaq />
       <section
      className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
      id="form"
    >
      {/* Left Side - Text & CTAs */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
        <div className="space-y-5 text-white max-w-2xl">
          <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
            Ready to Boost Your <span className="text-blue-500">Toronto Business with Google Ads?</span>
          </h2>
          <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
            Toronto customers are searching for your services right now. Don’t let competitors capture those clicks! 
            Partner with <span className="font-semibold">Bixeltek</span>, a Google Partner Certified agency, 
            to launch highly targeted campaigns that drive leads, sales, and measurable ROI across Toronto and the GTA.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="tel:+1-416-910-0323">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-md transition">
                Book a Strategy Call
              </button>
            </a>
            <Link href="/toronto-ads-audit">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition">
                Get a Free Ads Audit
              </button>
            </Link>
          </div>
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
