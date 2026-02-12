
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
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import saudiIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import heroBg from '@/assets/glenov-brankovic-flsXgoPoIuY-unsplash.jpg'
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/environmental-pollution-industry-exterior-daylight.jpg";
import pet from "@/assets/muslim-person-travelling-through-city.jpg"
import roofing from "@/assets/ordinary-life-scene-from-mall-america.jpg"
import dental from "@/assets/asian-man-reading-text-messages-with-his-colleague-making-phone-call-background.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/top-view-numerous-cars-traffic-dubai-united-arab-emirates.jpg"
import healthcare from "@/assets/beautiful-young-female-doctor-looking-camera-office.jpg"

const proofPoints = [
        { id: 1, text: "Google Partner Certified", icon: googleIcon },
        { id: 2, text: "90% Client Retention", icon: clientIcon },
        { id: 3, text: "Proven ROI Systems", icon: saudiIcon },
    ];

 const industries = [
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: " Healthcare & Dental Clinics",
                            description: "Rank for treatments, attract patients, and grow visibility.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Construction & Engineering",
                            text: "Construction & Engineering",
                            description: " Generate high-intent B2B inquiries from organic traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Industries",
                            text: " Industrial & Manufacturing Firms ",
                            description: "Build supplier visibility and trust online.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Ecommerce",
                            text: "E-commerce & Retail",
                            description: "Rank for products and drive consistent conversions.",
                        },
                        {
                            id: "lawncare",
                            img: pet,
                            label: "Digital Marketing for Education & Training Institutes",
                            text: "Education & Training Institutes",
                            description: "Capture enrollments through search visibility and local maps.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Corporate & Consulting Firms",
                            text: "Corporate & Consulting Firms",
                            description: "Build credibility and inbound visibility for brand trust.",
                        },
                    ]

export default function page() {
    return (
        <>
            {/* <HeroGAEasternProvince /> */}
            <LocationHeroSection
            ctaTheme='green'
            heading={
                <>
                <span>Google Ads Management in Eastern Province{" "}
                    <span className="text-yellow-500">That Delivers More Leads, Not Just Clicks</span></span>
                </>
            }
            description='Serving Khobar, Dammam, Jubail and Riyadh in Central Province — Bixeltek helps Saudi businesses turn advertising
                    budgets into predictable growth with data-driven campaings and strategies.'
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get a Free Campaign Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Talk to a Google Ads Expert',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
                backgroundImage={heroBg}      
            />
            <GoogleAdsAwarenessSection />
            <GoogleAdsStrategySection />
            <GooglePartnerBanner2 />
            <GoogleAdsProcessSection />
            <GoogleAdsCampaignTypesSaudi />
            <SaudiGAEPPillarIndustries />
            <PrecisionPerformanceSection />
            <section
                className="bg-[#fffdf5] py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
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
                <div className="lg:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
