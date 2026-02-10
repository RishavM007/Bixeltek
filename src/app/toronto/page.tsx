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
import ServicesSection from '@/components/Common/ServicesGrid'
import LocationHeroSection from '@/components/Common/LocationHeroSection'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';


 const proofPoints = [
                    { id: 1, text: 'Google Partner Certified Agency', icon: googleimg },
                    { id: 2, text: '200+ Projects Delivered Across Canada', icon: starimg },
                    { id: 3, text: '90% Client Retention', icon: iconimg },
                ];

 const services = [
    {
      title: 'Google Ads Management',
      description:
        'Many businesses waste budget on ads that don’t convert. We set up and optimize campaigns to target the right audience, helping you generate more leads at a lower cost per acquisition.',
        link: "toronto/google-ads-management",
    },
    {
      title: 'SEO Services',
      description:
        'If your business isn’t ranking in Google, you’re invisible to customers. Our SEO strategies improve local and national visibility, bringing in sustainable organic leads and long-term growth.',
        link: "toronto/seo-services",
    },
    {
      title: 'Web Design & Development',
      description:
        'Outdated websites reduce trust and conversions. We design modern, mobile-first, SEO-ready websites that build credibility and turn visitors into paying customers.',
        link: "toronto/web-design",
    },
    {
      title: 'Social Media Marketing',
      description:
        'Low engagement weakens your brand presence. We manage campaigns and create content that boosts visibility, builds trust, and connects you with your target audience.',
        link: "#",
    },
    {
      title: 'Analytics & CRO',
      description:
        'Without proper tracking, marketing is guesswork. We provide full analytics and conversion optimization, giving you clarity on performance and helping you improve ROI.',
        link: "#",
    },
    {
      title: 'Graphic Design & Branding',
      description:
        'Inconsistent branding confuses customers. Our design team creates logos, ad creatives, and brand assets that strengthen your identity and make your business stand out in Toronto’s competitive market.',
        link: "#",
    },
  ];


export default function page() {
    
    return (
        <>
            {/* <DMHero /> */}
            <LocationHeroSection
                heading="Digital Marketing Services in"
                highlightText="Toronto That Deliver Real Growth"
                description="Your customers are searching online right now. If they can’t find you, they’ll find your competitors."
                proofPoints={proofPoints}
                primaryCTA={{
                    text: 'Book a Free Strategy Call',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Explore Our Services',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
                >
                </LocationHeroSection>

            <BusinessProblems />
            <DigitalMarketingBenefits />
            <ServicesSection
            heading='Digital Marketing Services That'
            spanText='Solve Your Business Challenges'
            description='At Bixeltek, we offer a complete range of digital marketing services in Toronto. Each service is designed to solve a real business problem and deliver measurable results.'
            services={services}
            />
            <WhyChooseBixeltekToronto />
            <DMIndustries />
            <AreasWeServeCanadaDM />
            <DMFaq />
            <section
                className="bg-black p-2 md:p-10 lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row"
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
                        {/* <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
            </div> */}
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="lg:w-[87%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
