import GooglePartnerBanner2 from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGABanner'
import HeroGAEasternProvince from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGAHero'
import SaudiGAEPPillarIndustries from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGAIndustries'
import GoogleAdsAwarenessSection from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGASection1'
import GoogleAdsStrategySection from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGASection2'
import PrecisionPerformanceSection from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGASection3'
import GoogleAdsProcessSection from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGASection4'
import GoogleAdsCampaignTypesSaudi from '@/components/Saudi/EasternProvince/GoogleAds/SaudiEPGASection5'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroGAEasternProvince/>
    <GoogleAdsAwarenessSection />
    <GoogleAdsStrategySection />
    <GooglePartnerBanner2 />
    <GoogleAdsProcessSection />
    <GoogleAdsCampaignTypesSaudi />
    <SaudiGAEPPillarIndustries />
    <PrecisionPerformanceSection />
    <section
                    className="bg-[#fffdf5] py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                    id="form"
                >
                    {/* Left Side - Text & CTAs */}
                    <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                        <h2 className="text-4xl md:text-6xl font-inter font-bold text-black mb-6">
                             Start Running Google Ads That <span className="text-yellow-600">Actually Deliver ROI</span>
                        </h2>
                        <p className="text-gray-900 font-poppins text-base md:text-lg leading-relaxed mb-8">
                            Stop wasting money on untracked, unoptimized campaigns. Let’s build a performance-driven Google Ads system that gets your business in front of ready-to-buy customers across Khobar, Dammam, and the Eastern Province.

                        </p>
    
                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <a href="/vancouver/google-ads-audit">
                                <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                    Get a Free Ads Audit
                                </button>
                            </a>
                            <a href="/contact-us">
                                <button className="px-7 py-3 rounded-2xl bg-white text-black font-semibold text-sm shadow-lg hover:bg-gray-100 transition">
                                    Book a Strategy Call
                                </button>
                            </a>
                        </div> */}
                    </div>
    
                    {/* Right Side - Contact Form */}
                    <div className="w-[95%] md:w-[50%] lg:mr-32 flex justify-start items-center">
                        <ContactFromNew />
                    </div>
                </section>
    </>
  )
}
