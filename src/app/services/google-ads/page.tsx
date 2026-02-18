export const metadata = {
  title: "Google Ads Management Services | Google Partner PPC Agency | Bixeltek",
  description:
    "Bixeltek is a global-first Google Partner agency delivering smarter Google Ads management. From AI bidding & Performance Max to fraud protection, suspension recovery & advertiser verification — we scale businesses in the USA, Canada, India & Saudi Arabia",
  keywords: [
"Google Ads management",
    "Google Ads agency",
    "PPC management",
    "Google Partner agency",
    "Google Ads certified",
    "Pay per click advertising",
    "Google Ads campaign",
    "PPC services",
    "Google Ads optimization",
    "Performance Max campaigns",
    "Google Ads suspension recovery",
    "PPC agency USA",
    "Google Ads Canada",
    "PPC management India",
    "Google Ads Saudi Arabia",
    "AI bidding strategies",
    "Google Ads fraud protection",
    "Advertiser verification",
    "ROI focused PPC",
    "Conversion optimization",
    "Lead generation ads"
  ],
  alternates: {
    canonical: "https://bixeltek.com/services/google-ads", 
  },
//   openGraph: {
//     title:
//       "Google Ads Management Services | Google Partner PPC Agency | Bixeltek",
//     description:
//       "Bixeltek is a global-first Google Partner agency delivering smarter Google Ads management. From AI bidding & Performance Max to fraud protection, suspension recovery & advertiser verification — we scale businesses in the USA, Canada, India & Saudi Arabia.",
//     type: "website",
//     url: "https://bixeltek.com/services/google-ads", 
//     siteName: "Bixeltek",
//   },
};

export const dynamic = "force-dynamic";

import React from 'react'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'
import Section1 from '@/components/GoogleAds/Section1';
import ProtectAds from '@/components/GoogleAds/Section3';
import WhyGoogleAds from '@/components/GoogleAds/Section2';
import BiddingStrategies from '@/components/GoogleAds/Section5';
import GoogleAdsCostSection from '@/components/GoogleAds/Section6';
import IndustryCarouselSection from '@/components/GoogleAds/Section7';
import GoogleAdsSection10 from '@/components/GoogleAds/Section10';
import BixeltekAdvantage from '@/components/GoogleAds/Section8';
import FAQSection8 from '@/components/GoogleAds/SectionFaq';
import ContactFromNew from '@/components/ContactFormNew';
import { PhoneCall } from "lucide-react";
import GradientBorderContainersMob from '@/components/GoogleAds/TimelineMobile';
import TechStackSection from '@/components/GoogleAds/Section9';
import Link from 'next/link';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/digital marketing for pet stores.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/digital marketing for health care practices.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';

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
                            text: "Automobile industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industries",
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
                            text: "Pet Stores",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil Refineries",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]

export default function page() {


    return (
        <>
            <section className="relative flex flex-col items-center justify-center min-h-[70vh] lg:min-h-[80vh]  bg-black -mt-32 text-center px-6 overflow-hidden">
                <div className='flex justify-center items-center'>
                    {/* Blue Sphere Glow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl pointer-events-none" />

                    <div className="relative z-10 mt-40 max-w-7xl">
                        {/* Headline */}
                        <h1 className="text-3xl md:text-6xl font-bold leading-tight text-white">
                            Google Ads Management Services {" "}
                            <span className="text-blue-500">That Deliver Real Growth</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Stop wasting ad spend. Start scaling with a Google Partner certified agency trusted in the USA, Canada, India & Saudi Arabia.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href="tel:+919100032301"
                                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                            >
                                Call To Start Your Campaign
                            </a>
                            <a
                                href="/contact-us"
                                className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-800 transition"
                            >
                                Book A Free Audit
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <LogoTicker2 />
            <Section1 />
            <WhyGoogleAds />
            <ProtectAds />
            <GradientBorderContainersMob/>
            <BiddingStrategies />
            <GoogleAdsCostSection/>
            {/* <IndustryCarouselSection /> */}
            <LocationIndustrySection
            heading={<>
            <span><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        INDUSTRIES WE
                    </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                        SERVE
                    </span></span>
            </>}
            description='Discover the diverse industries we proudly cater to, offering innovative solutions to help you excel in your field.'
            industries={industries}
            />
            <BixeltekAdvantage />
            <TechStackSection />
            <GoogleAdsSection10/>
            <FAQSection8/>
           <section className='bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row ' id='form'>
                <div className="w-full mt-14 md:mt-0 flex justify-center items-center px-6">
                    <div className="space-y-5 text-white max-w-xl ">
                        <h2 className="text-4xl md:text-4xl capitalize font-bold">
                            Lets grow your<br></br> business with 
                            <span className='text-blue-500'> google ads</span>
                        </h2>
                        <h3 className='text-xl md:text-2xl font-poppins'>Fill the form to get started</h3>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Ready to stop wasting ad spend and start driving measurable results? Partner with Bixeltek — a Google Partnered agency trusted by businesses worldwide. Fill out the form now to request your free Google Ads audit, and our certified experts will show you exactly how to increase conversions, reduce costs, and scale your growth with precision.
                        </p>
                        <div className="space-y-3 pt-3">
                            <Link href={'tel:+919100032301'}>
                                <div className="flex items-center gap-2">
                                    <PhoneCall size={22} />
                                    <span className="text-white text-base">Call: +91-9100032301</span>
                                </div>
                            </Link>

                            
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center' >
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
