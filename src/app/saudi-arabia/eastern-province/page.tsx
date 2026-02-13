import EasternProvinceAreasSection from '@/components/Saudi/EasternProvince/SaudiEPAreas'
import FreeAuditBanner from '@/components/Saudi/EasternProvince/SaudiEPBanner'
import HeroEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPHero'
import SaudiEPPillarIndustries from '@/components/Saudi/EasternProvince/SaudiEPIndustries'
import SaudiMarketingProcessBixeltek from '@/components/Saudi/EasternProvince/SaudiEPProcess'
import BusinessGrowthEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPSection2'
import MarketingSystemsEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPSection3'
import BixeltekSystemFramework from '@/components/Saudi/EasternProvince/SaudiEPSection4'
import DigitalMarketingServicesEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPSection5'
import SaudiEPWhyChooseBixeltek from '@/components/Saudi/EasternProvince/SaudiEPSection6'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection'
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import saudiIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import heroBg from "@/assets/saifaldhaher-vAkHAP27QMk-unsplash.jpg";
import ServicesSection from '@/components/Common/ServicesGrid'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection'
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import ContactCTASection from '@/components/Common/location/LocationCtaSection'

const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Trusted by Businesses Across Saudi Arabia", icon: saudiIcon },
  ];

   const services = [
    {
      title: "Google Ads Management",
      description:
        "Instant visibility, high-intent targeting, and lower cost per lead. We create and optimize ad campaigns that connect your business with ready-to-buy customers across Khobar, Dammam, and beyond.",
      link: "/saudi-arabia/eastern-province/google-ads-management",
    },
    {
      title: "SEO & Local Search Optimization",
      description:
        "Boost your visibility across Arabic and English searches. From technical SEO to Google Map optimization, we help your business rank where your customers are searching most.",
      link: "/saudi-arabia/eastern-province/seo-services",
    },
    {
      title: "Web Design & Development",
      description:
        "Websites that convert — not just impress. We build responsive, SEO-friendly, and high-converting websites tailored specifically for Saudi audiences and regional trends.",
      link: "/saudi-arabia/eastern-province/web-design-services",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build awareness and community through data-backed storytelling. We design campaigns that drive engagement and loyalty across Instagram, LinkedIn, TikTok, and more.",
      link: "/saudi-arabia/eastern-province/social-media-management",
    },
    {
      title: "Branding & Creative Strategy",
      description:
        "Your visual identity defines your reputation. We craft premium, consistent brand experiences that earn trust and differentiate your business in a competitive Saudi market.",
      link: "#",
    },
    {
      title: "Analytics & Conversion Optimization",
      description:
        "What gets measured, gets improved. We install advanced analytics to track performance, refine funnels, and make decisions backed by real data — not guesswork.",
      link: "#",
    },
  ];

  const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We begin by analyzing your business goals, marketing challenges, and growth opportunities across the Eastern Province. This stage includes a full performance audit of your current campaigns, website, and analytics setup to identify untapped potential.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Strategy & Keyword Mapping",
    text: "Next, we build a precise strategy using keyword research, audience insights, and regional targeting. Our team identifies the highest-performing search terms and ad opportunities that align with your services in Dammam, Khobar, and Dhahran.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Campaign Design",
    text: "We create structured Google Ads campaigns, localized SEO clusters, and conversion-optimized landing pages designed for your specific industry. Every creative, keyword group, and funnel step works together to capture high-intent traffic and convert efficiently.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Launch & Tracking",
    text: "Our team handles a full-scale campaign launch with precision tracking setup using Google Tag Manager, Analytics, and Meta or TikTok pixels. This ensures that every click, lead, and sale is accurately recorded for data-driven optimization.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Optimization & Scale",
    text: "Once live, we continuously monitor performance through A/B testing, bid adjustments, and audience refinement. Our focus is on scaling what works, improving ROI each month, and ensuring your marketing evolves with real data — not assumptions.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
];

const industries = [
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: "Health Care Practices",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Digital Marketing for Automobiles",
                            text: "Automobile industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industry",
                            description: "High-ticket lead funnels built for real estate and project-based services.",
                        },
                        {
                            id: "lawncare",
                            img: lawncare,
                            label: "Digital Marketing for Lawn Care and Landscaping",
                            text: "Lawn Care Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Dental Clinic",
                            text: "Dental Clinics",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "pet",
                            img: pet,
                            label: "Digital Marketing for Pet Stores",
                            text: "Educational Institutes",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil and Gas Industry",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]

export default function page() {
  return (
    <>
    {/* <HeroEasternProvince /> */}
    <LocationHeroSection
    ctaTheme='green'
    heading={
        <>
        <span>
            Digital Marketing Agency in Eastern Province{" "}
              <span className="text-yellow-500">That Delivers Real Growth</span>
        </span>
        </>
    }
    description='              From Khobar to Dammam and Dhahran — Bixeltek helps Saudi businesses attract customers,
              increase ROI, and build a strong online presence through data-driven marketing systems.'
    proofPoints={proofPoints}
    primaryCTA={{
                    text: 'Get My Free Marketing Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Talk to a Strategist',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
                backgroundImage={heroBg}
                />
    <BusinessGrowthEasternProvince />
    <FreeAuditBanner />
    <MarketingSystemsEasternProvince />
    <BixeltekSystemFramework />
    {/* <DigitalMarketingServicesEasternProvince/> */}
    <ServicesSection
    heading='Comprehensive Digital Marketing Services'
    spanText='for Businesses Across the Eastern Province'
    theme='green'
    services={services}
    description='Our team manages end-to-end marketing solutions — from strategic planning and content creation to campaign execution and reporting. We help you stay visible, competitive, and profitable in a fast-changing Saudi market.'            
    />
    {/* <SaudiMarketingProcessBixeltek /> */}
    <LocationProcessSection
    heading={
      <>
      <span>Every Great Result Starts With a <span className="text-yellow-500">Clear Process</span></span>
      </>
    }
    description='We follow a proven five-step marketing framework that aligns business goals with flawless execution — ensuring clarity, consistency, and measurable growth.'
    steps={steps}
    cta={{
      text:'Book a Free Strategy Call',
      href:'mailto:zee@bixeltek.com',
      bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
    }}
    footerText='This systematic approach ensures that your campaigns, SEO, and ads grow smarter over time — guided by insights, not guesswork.'
    />
    <EasternProvinceAreasSection />
    {/* <SaudiEPPillarIndustries /> */}
    <LocationIndustrySection
    heading={
      <>
      <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
                      From Local Businesses to Corporate Enterprises We Help Them Grow Online
                    </span>
      </>
    }
    description='Our digital marketing systems are tailored to Saudi Arabia’s most important sectors:'
    industries={industries}
    />
    <SaudiEPWhyChooseBixeltek />
    <section
    className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
    id="growth-system-cta"
>
    {/* LEFT SIDE — TEXT */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
        <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
            Ready to Build Your <span className="text-yellow-500">Growth System</span> in the Eastern Province?
        </h2>

        <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
            Stop running disconnected campaigns. Start building a digital marketing ecosystem that delivers clarity, measurable ROI, and consistent business growth across Khobar, Dammam, and Dhahran.
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

    {/* RIGHT SIDE — FORM */}
    <div className="  lg:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
    </div>
</section>

    </>
  )
}
