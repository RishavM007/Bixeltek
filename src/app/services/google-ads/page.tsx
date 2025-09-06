export const metadata = {
  title: "Google Ads Management Services | Google Partner PPC Agency | Bixeltek",
  description:
    "Bixeltek is a global-first Google Partner agency delivering smarter Google Ads management. From AI bidding & Performance Max to fraud protection, suspension recovery & advertiser verification — we scale businesses in the USA, Canada, India & Saudi Arabia",
  keywords: [
    "Bixeltek social media",
    "Social media management Hyderabad",
    "Best social media agency Hyderabad",
    "Instagram marketing",
    "Facebook ads",
    "LinkedIn marketing",
    "Twitter management",
    "Social media strategy",
    "Content creation",
    "Brand growth",
    "Online presence",
  ],
  alternates: {
    canonical: "https://bixeltek.com/services/google-ads", // ✅ Canonical URL
  },
  openGraph: {
    title:
      "Google Ads Management Services | Google Partner PPC Agency | Bixeltek",
    description:
      "Bixeltek is a global-first Google Partner agency delivering smarter Google Ads management. From AI bidding & Performance Max to fraud protection, suspension recovery & advertiser verification — we scale businesses in the USA, Canada, India & Saudi Arabia.",
    type: "website",
    url: "https://bixeltek.com/services/google-ads", // ✅ Matches canonical
    siteName: "Bixeltek",
  },
};

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

export default function page() {


    return (
        <>
            <section className="relative flex flex-col items-center justify-center h-[100vh] bg-black -mt-32 text-center px-6 overflow-hidden">
                <div className='flex justify-center items-center'>
                    {/* Blue Sphere Glow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl pointer-events-none" />

                    <div className="relative z-10 mt-40 max-w-7xl">
                        {/* Headline */}
                        <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
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
                <LogoTicker2 />
            </section>
            <Section1 />
            <WhyGoogleAds />
            <ProtectAds />
            <GradientBorderContainersMob/>
            <BiddingStrategies />
           <GoogleAdsCostSection/>
           <IndustryCarouselSection />
           <BixeltekAdvantage />
           <TechStackSection />
           <GoogleAdsSection10/>
           <FAQSection8/>
           <section className='bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row ' id='form'>
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
