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
import LocationHeroSection from '@/components/Common/location/LocationHeroSection'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import ContactCTASection from '@/components/Common/location/LocationCtaSection'
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection'
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationFaqSection from '@/components/Common/location/LocationFaqSection'


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
                            text: "Automobile industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industry",
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
                            text: "Educational Institutes",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil and Gas Industry",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ] 

    const faqs = [
  {
    question: "Do you only work with Toronto businesses?",
    answer:
      "No, we serve clients across Canada, but Toronto and the GTA are a key focus.",
  },
  {
    question: "What ROI can I expect?",
    answer:
      "Google Ads bring immediate results, while SEO builds over 3–6 months. Most clients see measurable ROI scaling within months.",
  },
  {
    question: "Do you combine services like SEO and Ads?",
    answer:
      "Yes, we specialize in integrated strategies that deliver better results.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely — we help startups, SMBs, and enterprises alike.",
  },
];

export default function page() {
    
    return (
        <>
            {/* <DMHero /> */}
            <LocationHeroSection
                heading={
                    <>
                    <span>Digital Marketing Services in <span className="text-blue-500">Toronto That Deliver Real Growth</span></span>
                    </>
                }
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
                    href: '#services',
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
            <LocationIndustrySection
            heading={
                <>
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        Digital Marketing Solutions Tailored for <br></br> Every Industry in Toronto
                    </span>
                </>
            }
            description='Every industry has unique challenges. We design strategies that align with your goals and customer journey.'
            industries={industries}/>
            {/* <DMIndustries /> */}
            <AreasWeServeCanadaDM />
            {/* <DMFaq /> */}
            <LocationFaqSection
            label='Frequently Asked Questions'
            heading={
                <>
                <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              <span className='text-blue-500'>Questions We Hear</span><br></br> From Toronto Businesses
            </h2>
            </>
            }
            description='Here are answers to the most common questions Toronto businesses ask us about web design, development, and online growth.'
            faqs={faqs}
            />
            <ContactCTASection
              heading="Ready to Grow Your"
              spanText="Toronto Business?"
              description="Your customers are searching online right now. If you’re not visible, you’re losing leads. Bixeltek helps Toronto businesses get found, generate qualified leads, and scale ROI by 10x through integrated digital marketing."
            />
        </>
    )
}
