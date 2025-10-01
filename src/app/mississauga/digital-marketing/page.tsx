import React from 'react'
import HeroDMiss from '@/components/Mississauga/DigitalMarketing/DMissHero'
import WhyGoogleAdsMississauga from '@/components/Mississauga/DigitalMarketing/Section1DMiss'
import DM_BenefitsMississauga from '@/components/Mississauga/DigitalMarketing/Section2DMiss'
import DigitalMarketingServicesMississauga from '@/components/Mississauga/DigitalMarketing/Section3DMiss'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import MississaugaSection4 from '@/components/Mississauga/DigitalMarketing/Section4DMiss'
import DMIndustriesMiss from '@/components/Mississauga/DigitalMarketing/DMissIndustries'
import AreasWeServeCanadaDMMiss from '@/components/Mississauga/DigitalMarketing/DMMissAreasWeServe'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import DMFaqMiss from '@/components/Mississauga/DigitalMarketing/DMissFaq'
export default function page() {
  return (
    <>
    <HeroDMiss/>
    <WhyGoogleAdsMississauga />
    <DM_BenefitsMississauga />
    <DigitalMarketingServicesMississauga />
    <MississaugaSection4 />
    <DMIndustriesMiss />
    <AreasWeServeCanadaDMMiss />
    <DMFaqMiss />
    <MovingBlob />
    <section
    className="bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row"
    id="form"
>
    {/* Left Side - Text & CTAs */}
    <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
        <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                Ready to Grow Your <span className="text-blue-500">Mississauga Business?</span>
            </h2>
            <p className="text-white font-poppins text-base leading-relaxed">
                If your business isn’t visible online, you’re losing customers to competitors. Bixeltek helps Mississauga businesses get found, generate leads, and scale ROI by 10x with integrated digital marketing.
            </p>

            {/* CTA Buttons */}
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
