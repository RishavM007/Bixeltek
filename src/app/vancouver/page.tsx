import React from 'react'
import HeroDVancouver from '@/components/Vancouver/VanHero'
import BusinessProblemsVancouver from '@/components/Vancouver/VanSection1'
import BusinessStrugglesVancouver from '@/components/Vancouver/VanSection2'
import ServicesVancouver from '@/components/Vancouver/VanSection3'
import WhyChooseBixeltek from '@/components/Vancouver/VanSection4'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import BenefitsSectionVancouver from '@/components/Vancouver/VanSection4'
import VanIndustries from '@/components/Vancouver/VanIndustries'
import VancouverDMFaqs from '@/components/Vancouver/VanFaq'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'

export default function page() {
    return (
        <>
            <HeroDVancouver />
            <BusinessProblemsVancouver />
            <BusinessStrugglesVancouver />
            <ServicesVancouver />
            <BenefitsSectionVancouver />
            <VanIndustries />
            <VancouverDMFaqs />
            <section
                className="bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to <span className="text-blue-500">Grow Your Business in Vancouver?</span>
                        </h2>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Your customers are searching, scrolling, and comparing right now. The question is — will they find you, or your competitors? Partner with Bixeltek to launch SEO, Google Ads, and digital strategies that grow your business in Vancouver.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Link href={'/contact-us'}>  
                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                Get a Free Consultation
                            </button>
                            </Link>
                            <a href="tel:+91-9100032301">
                            <button className="px-7 py-3 rounded-2xl bg-white text-black font-semibold text-sm shadow-lg hover:bg-gray-100 transition">
                                Book a Strategy Call
                            </button>
                            </a>
                        </div> */}
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[87%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
