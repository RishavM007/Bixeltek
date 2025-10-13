export const metadata = {
    title:  " Social Media Marketing | Eastern Province – Bixeltek",
    description:
        " Grow your brand with Bixeltek’s social media marketing services in Khobar & Dammam. Creative content, paid ads & full-funnel strategy for real ROI.",
    openGraph: {
        title: " Social Media Marketing | Eastern Province – Bixeltek",
        description:
            " Grow your brand with Bixeltek’s social media marketing services in Khobar & Dammam. Creative content, paid ads & full-funnel strategy for real ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province/social-media-management",
    },
};



import React from 'react'
import HeroSocialMedia from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMHero'
import SocialMediaTrustSection from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSEMSection1'
import SocialStrategySection from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMSection2'
import SocialMediaCards from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMSection3'
import SocialMediaServicesEasternProvince from '@/components/Saudi/EasternProvince/SocialMedia/SocialEPSMSection4'
import SocialMediaFramework from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMProcess'
import SaudiEPSMIndustries from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMInd'
import ContactFromNew from '@/components/ContactFormNew'
import SocialMediaBranding from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMSection5';

export default function page() {
    return (
        <>
            <HeroSocialMedia />
            <SocialMediaTrustSection />
            <SocialStrategySection />
            <SocialMediaCards />
            <SocialMediaServicesEasternProvince />
            <SocialMediaFramework />
            <SaudiEPSMIndustries />
            <SocialMediaBranding />
            <section
                className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="social-media-cta"
            >
                {/* LEFT SIDE — TEXT */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
                        Turn Social Media Into Your <span className="text-yellow-600">Most Profitable Channel</span>
                    </h2>

                    <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Don’t let your competitors dominate the feed. Start building a brand that connects, converts,
                        and compounds across the Eastern Province — every post, story, and campaign optimized for ROI.
                    </p>
                </div>

                <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
