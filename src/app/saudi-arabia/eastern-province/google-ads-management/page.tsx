
export const metadata = {
    title: " Google Ads Management in Eastern Province | PPC Agency for Khobar & Dammam – Bixeltek",
    description:
        " Bixeltek is a Google Partner Certified PPC agency offering expert Google Ads management for businesses across Khobar, Dammam, and Dhahran. Get full-funnel ad strategies that reduce wasted spend and boost ROI.",
    openGraph: {
        title: " Google Ads Management in Eastern Province | PPC Agency for Khobar & Dammam – Bixeltek",
        description:
            " Bixeltek is a Google Partner Certified PPC agency offering expert Google Ads management for businesses across Khobar, Dammam, and Dhahran. Get full-funnel ad strategies that reduce wasted spend and boost ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province/google-ads-management",
    },
};



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
            <HeroGAEasternProvince />
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
                    <ul className="text-sm mt-5 flex flex-row md:flex-row gap-5 md:gap-10  transition-all duration-500">
                        <li className="mb-6"><a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
                            <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                                alt="Google Partner Badge"
                                className="w-auto h-16 md:h-24" />
                        </a></li>
                        <li>
                            <div><a target="_blank" href="https://www.goodfirms.co/company/bixeltek"> <img src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" title="Top Digital Marketing Company" className="w-20 md:w-32 h-auto" alt="Top Digital Marketing Company on GoodFirms" /></a></div>
                        </li>

                    </ul>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[95%] md:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
