import React from 'react'
import DMHero from '@/components/Toronto/DigitalMarketing/DMHero'
import BusinessProblems from '@/components/Toronto/DigitalMarketing/DMSection'
import DigitalMarketingBenefits from '@/components/Toronto/DigitalMarketing/DMSection2'
import ServicesToronto from '@/components/Toronto/DigitalMarketing/DMSection3'
import WhyChooseBixeltekToronto from '@/components/Toronto/DigitalMarketing/DMSection4'
import DMIndustries from '@/components/Toronto/DigitalMarketing/DMIndustries'
import AreasWeServeCanadaDM from '@/components/Toronto/DigitalMarketing/DMSection5'
import ContactFromNew from '@/components/ContactFormNew'
import DMFaq from '@/components/Toronto/DigitalMarketing/DMFaq'
import Link from 'next/link'
export default function page() {
    return (
        <>
        <DMHero />
        <BusinessProblems />
        <DigitalMarketingBenefits />
        <ServicesToronto />
        <WhyChooseBixeltekToronto />
        <DMIndustries />
        <AreasWeServeCanadaDM />
        <DMFaq/>
        <section
    className="bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row"
    id="form"
>
    {/* Left Side - Text & CTAs */}
    <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
        <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                Ready to Grow Your <span className="text-blue-500">Toronto Business?</span>
            </h2>
            <p className="text-white font-poppins text-base leading-relaxed">
                Your customers are searching online right now. If you’re not visible, you’re losing leads. 
                Bixeltek helps Toronto businesses get found, generate qualified leads, and scale ROI by 10x 
                through integrated digital marketing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/strategy-call">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition">
                        Book a Free Strategy Call
                    </button>
                </Link>
                <Link href="/services">
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-md transition">
                        Explore Our Services
                    </button>
                </Link>
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
