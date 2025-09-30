import React from 'react'
import HeroSocialMediaMiss from '@/components/Mississauga/SocialMedia/SocialHeroMiss'
import AudienceReachSection from '@/components/Mississauga/SocialMedia/SocialSection2Miss'
import SocialMediaStruggleSection from '@/components/Mississauga/SocialMedia/SocialSection3Miss'
import SocialMediaServicesMiss from '@/components/Mississauga/SocialMedia/SocialSection4Miss'
import CampaignTabsSocialMiss from '@/components/Mississauga/SocialMedia/SocialSection5Miss'
import SocialProcessTimeline from '@/components/Mississauga/SocialMedia/SocialSection6Miss'
import SocialMissIndustries from '@/components/Mississauga/SocialMedia/SocialSection7Miss'
import SocialMediaFaqs from '@/components/Mississauga/SocialMedia/SocialMissFaq'
import Link from 'next/link'
import ContactFromNew from '@/components/ContactFormNew'
export default function page() {
    return (
        <>
            <HeroSocialMediaMiss />
            <AudienceReachSection />
            <SocialMediaStruggleSection />
            <SocialMediaServicesMiss />
            <CampaignTabsSocialMiss />
            <SocialProcessTimeline />
            <SocialMissIndustries />
            <SocialMediaFaqs />
            <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Grow Your Business With{" "}
                            <span className="text-blue-500">Social Media?</span>
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            Your customers are on social media right now. The question is — are they
                            seeing <span className="font-semibold">you</span>, or your competitors?
                            Partner with <span className="font-semibold">Bixeltek</span> to launch
                            social campaigns that build awareness, engage audiences, and generate
                            leads in Mississauga.
                        </p>

                        {/* CTA Buttons */}
                        
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
