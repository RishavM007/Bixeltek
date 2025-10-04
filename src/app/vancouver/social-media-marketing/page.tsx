export const metadata = {
    title: "Social Media Marketing Vancouver | Meta & Instagram Ads Agency – Bixeltek",
    description:
        "Bixeltek helps Vancouver businesses grow with social media marketing across Meta, Instagram, and YouTube — combining paid ads, creative strategy, and content to drive engagement and leads.",
    keywords:
        "Web development Vancouver, Best web development company Vancouver, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Social Media Marketing Vancouver | Meta & Instagram Ads Agency – Bixeltek",
        description:
            "Bixeltek helps Vancouver businesses grow with social media marketing across Meta, Instagram, and YouTube — combining paid ads, creative strategy, and content to drive engagement and leads.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver/social-media-marketing",
    },
};

import React from 'react'
import HeroSocialMediaVancouver from '@/components/Vancouver/SocialMedia/SMVancHero'
import VancouverSocialCitySection from '@/components/Vancouver/SocialMedia/SMVancSection1'
import WhyBusinessesStruggleSocial from '@/components/Vancouver/SocialMedia/SMVancSection2'
import SocialMediaServicesVancouver from '@/components/Vancouver/SocialMedia/SMVancSection3'
import SocialMediaProcessVancouver from '@/components/Vancouver/SocialMedia/SMVancProcess'
import SocialVanIndustries from '@/components/Vancouver/SocialMedia/SMIndustriesVanc'
import VancouverSocialFaqs from '@/components/Vancouver/SocialMedia/SMVancFaq'
import SocialTrustSection from '@/components/Vancouver/SocialMedia/SMVancSection4'
import ContactFromNew from '@/components/ContactFormNew';
export default function page() {
    return (
        <>
            <HeroSocialMediaVancouver />
            <VancouverSocialCitySection />
            <WhyBusinessesStruggleSocial />
            <SocialMediaServicesVancouver />
            <SocialMediaProcessVancouver />
            <SocialTrustSection />
            <SocialVanIndustries />
            <VancouverSocialFaqs />
            <section
                className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                        Ready to Grow Your Brand  <span className="text-blue-500">With Social Media That Converts?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Stop blending in — it’s time to stand out. Let Bixeltek help your Vancouver business attract followers who convert into customers through powerful, data-driven social media marketing.
                    </p>

                    {/* CTA Buttons */}

                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[95%] md:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
