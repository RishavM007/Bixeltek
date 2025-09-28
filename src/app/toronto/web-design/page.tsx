import React from 'react'
import TWHero from '@/components/Toronto/Webdev/TWHero'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import WhyWebsiteToronto from '@/components/Toronto/Webdev/TWSection1'
import SolutionSection from '@/components/Toronto/Webdev/TWSection2'
import WebDesignToronto2 from '@/components/Toronto/Webdev/TWSection3'
import WebsiteMattersSection from '@/components/Toronto/Webdev/TWSection4'
import WebDesignServicesToronto from '@/components/Toronto/Webdev/TWSection5'
import IndustryCarouselSectionSeo from '@/components/Toronto/Webdev/TWSection6'
import ProcessTorontoWebdev from '@/components/Toronto/Webdev/TWTimeline'
import BenefitsSectionWebDesign from '@/components/Toronto/Webdev/TWBenefits'
import AreasWeServeCanadaTW from '@/components/Toronto/Webdev/TWAreasWeServe'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link';
import { PhoneCall, MessageCircle, CalendarDays } from 'lucide-react';
import TWFaq from '@/components/Toronto/Webdev/TWFaq'
export default function page() {
    return (
        <>
            <TWHero />
            <MovingBlob />
            <WhyWebsiteToronto />
            <SolutionSection />
            <WebDesignToronto2 />
            <WebsiteMattersSection />
            <WebDesignServicesToronto />
            <IndustryCarouselSectionSeo />
            <ProcessTorontoWebdev />
            <BenefitsSectionWebDesign />
            <AreasWeServeCanadaTW />
            <TWFaq />
            <section
                className="bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Fix What’s <span className="text-blue-500">Holding Your Website Back?</span>
                        </h2>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            If your website is outdated, slow, or failing to bring results, it’s costing you more than you realize. At Bixeltek, we design websites that solve problems, remove customer frustrations, and generate measurable business growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link href="/case-studies">
                                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition">
                                    View Our Casestudies
                                </button>
                            </Link>
                            <a href="tel:+91-9100032301">
                                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-md transition">
                                    Book a Strategy Call
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[87%] mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
