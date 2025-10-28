import CMSFlexibilitySection from '@/components/CodedWeb/CoddedWebSection3'
import GlobalExpertiseSection from '@/components/CodedWeb/CodedAreasWeServe'
import CustomCodeFaq from '@/components/CodedWeb/CodedFaq'
import CodedCTASection from '@/components/CodedWeb/CodedWebCTA'
import CustomCodedHeroSection from '@/components/CodedWeb/CodedWebHero'
import IntersectingTiltedMarquees from '@/components/CodedWeb/CodedWebMarquee'
import CustomDevelopmentSection from '@/components/CodedWeb/CodedWebSection1'
import CustomGrowthCoded from '@/components/CodedWeb/CodedWebSection2'
import SecureByDefault from '@/components/CodedWeb/CodedWebSection4'
import CodeConversionSection from '@/components/CodedWeb/CodedWebSection5'
import HowItWorks from '@/components/CodedWeb/CodedWebSection6'
import WebsiteProcessTimeline from '@/components/CodedWeb/CodedWebTimeline'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'

export default function page() {
    return (
        <>
            <CustomCodedHeroSection />
            <CustomDevelopmentSection />
            <CustomGrowthCoded />
            <CMSFlexibilitySection />
            <IntersectingTiltedMarquees />
            <SecureByDefault />
            <CodeConversionSection />
            <CodedCTASection />
            <WebsiteProcessTimeline />
            <GlobalExpertiseSection />
            <HowItWorks />
            <CustomCodeFaq />

            <section
                className="bg-[black] py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-6xl font-inter font-medium text-white mb-6">
                        Get a Custom Build <span className='text-blue-500'>Roadmap for Your Brand</span> 
                    </h2>
                    <p className="text-gray-100 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        We’ll review your existing website architecture, Core Web Vitals, SEO structure,
                        and conversion funnel — and outline a tailored approach for your next-generation build.
                    </p>

                    {/* Audit Points */}
                    <ul className="flex flex-col text-white gap-4 mb-8">
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Speed & Performance Diagnostics</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Crawl Map & Schema Analysis</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>CMS vs Custom Feasibility Review</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Integration & Tracking Health</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>30-Day Improvement Plan</span>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <a href="#form" className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Get My Free Audit
                    </a>

                    {/* Badges */}
                    <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
                        <li className="mb-6">
                            <a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
                                <img
                                    src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                                    alt="Google Partner Badge"
                                    className="w-auto h-16 md:h-24"
                                />
                            </a>
                        </li>
                        <li>
                            <div>
                                <a target="_blank" href="https://www.goodfirms.co/company/bixeltek">
                                    <img
                                        src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg"
                                        title="Top Digital Marketing Company"
                                        className="w-20 md:w-32 h-auto"
                                        alt="Top Digital Marketing Company on GoodFirms"
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[95%] md:w-[50%] lg:mr-20 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
