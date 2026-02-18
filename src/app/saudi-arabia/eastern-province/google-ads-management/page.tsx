
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
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';

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


const steps = [
  {
    number: "01",
    title: "Market & Competitor Analysis",
    text: "We analyze your industry, competitors, and target demographics in Khobar, Dammam, and nearby regions to identify profitable opportunities.",
    gradient: "from-green-500 via-green-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "02",
    title: "Campaign Architecture & Setup",
    text: "We design structured campaigns — separating branded, non-branded, service-specific, and remarketing ads to maximize control and clarity.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "03",
    title: "Ad Copywriting & Creative Strategy",
    text: "Our copywriters craft ads that speak directly to user intent, increasing click-through rates and reducing cost-per-click.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "04",
    title: "Tracking & Analytics",
    text: "We implement Google Tag Manager, Call Tracking, and Conversion APIs to measure every action — calls, forms, sales, and more.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Continuous Optimization & Reporting",
    text: "Daily bid management, search term pruning, A/B testing, and ROI reporting ensure performance keeps improving every week.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
];

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
            {/* <GoogleAdsProcessSection /> */}
            <LocationProcessSection
            bg='bg-white'
            heading={
                <>
                <span>How We Turn Ad Spend into ROI<span className=""></span></span>
                </>
            }
            description='We follow a precise, data-backed process to ensure every Riyal spent delivers measurable growth.'
            steps={steps}
            footerText='This isn’t a one-time setup — it’s a continuous growth engine designed to make your Google Ads perform better every single week.'
            cta={{
                text:'Talk To Our Google Ads Expert',
                href:'mailto:zee@bixeltek.com',
                bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 text-white hover:bg-[#d6ae3f]'    
            }}  
            />
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
