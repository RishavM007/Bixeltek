
export const metadata = {
    title: "Digital Marketing Agency Mississauga | SEO, Google Ads & Web Design – Bixeltek",
    description:
        "Bixeltek is a Google Partner Certified digital marketing agency helping Mississauga businesses generate leads and scale ROI with SEO, Google Ads, web design, and more.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Digital Marketing Agency Mississauga | SEO, Google Ads & Web Design – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified digital marketing agency helping Mississauga businesses generate leads and scale ROI with SEO, Google Ads, web design, and more.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga",
    },
};

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
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';


 const proofPoints = [
    { id: 1, text: "Google Partner Certified Agency", icon: googleimg },
    { id: 2, text: "200+ Projects Delivered Across Canada", icon: starimg },
    { id: 3, text: "90% Client Retention", icon: iconimg },
  ];

  const services = [
        {
            title: 'Google Ads Management',
            description: 'Ad budgets are wasted when campaigns aren’t set up right. We create and optimize Google Ads campaigns targeting Mississauga customers to drive more leads at lower cost.',
            link: "/mississauga/google-ads"
        },
        {
            title: 'SEO Services',
            description: 'If you don’t appear in Google results, you’re invisible. Our SEO boosts local and national rankings, generating consistent organic traffic and qualified leads.',
            link: "/mississauga/seo-services"
        },
        {
            title: 'Web Design & Development',
            description: 'An outdated website hurts credibility. We build modern, mobile-first, SEO-ready websites that strengthen your brand and convert visitors into customers effectively.',
            link: "/mississauga/web-design"
        },
        {
            title: 'Social Media Marketing',
            description: 'Low engagement weakens your brand. We create campaigns and content that increase visibility, grow your following, and drive meaningful engagement for your business.',
            link: "/mississauga/social-media-marketing"
        },
        {
            title: 'Analytics & CRO',
            description: 'Without tracking, you’re guessing. We implement full analytics and conversion rate optimization, providing actionable insights to maximize ROI and improve marketing performance.',
            link: "#"
        },
        {
            title: 'Graphic Design & Branding',
            description: 'Weak branding creates confusion. Our team crafts consistent, impactful logos, creatives, and brand assets that make your business stand out in Mississauga’s competitive market.',
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
    question: "Do you only work with Mississauga businesses?",
    answer:
      "No — we serve clients across Canada, but Mississauga and the GTA are key focus areas.",
  },
  {
    question: "What ROI can I expect?",
    answer:
      "Google Ads bring instant leads, while SEO builds sustainable results over 3–6 months.",
  },
  {
    question: "Can you manage all services together?",
    answer:
      "Yes, we integrate Ads, SEO, Web Design, and Social Media for maximum ROI.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely — we help startups, SMBs, and enterprises alike.",
  },
  {
    question: "How soon can I start seeing results?",
    answer:
      "Paid campaigns can generate leads immediately, while organic SEO results typically appear within 3–6 months.",
  },
  {
    question: "Do you provide reporting and analytics?",
    answer:
      "Yes, all campaigns come with transparent, easy-to-understand reporting so you can track ROI and performance in real-time.",
  },
];                  


export default function page() {
     
  return (
    <>
    {/* <HeroDMiss/> */}
    <LocationHeroSection
    heading={
        <>
        <span>
            Digital Marketing Services in Mississauga <span className="text-blue-500">That Deliver Measurable Results</span>
        </span>
        </>
    }
    description='In a growing business hub like Mississauga, competition is intense. If your business isn’t visible online, your competitors are taking the leads you’re missing. Bixeltek helps Mississauga businesses get found, generate qualified leads, and scale ROI through Google Ads, SEO, web design, and more.'
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
    />
    <WhyGoogleAdsMississauga />
    <DM_BenefitsMississauga />
    <ServicesSection
                heading='Digital Marketing Services That Solve'
                spanText='Real Business Problems'
                description='Bixeltek offers a complete range of digital marketing services for Mississauga businesses, each designed to solve a problem and deliver measurable ROI.'
                services={services}
                />
    <MississaugaSection4 />
    {/* <DMIndustriesMiss /> */}
    <LocationIndustrySection
    heading={
        <>
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        Digital Marketing for Every Industry <br></br> in Mississauga
                    </span>
        </>
    }
    description='Every industry faces unique challenges. We design strategies tailored to the business landscape in Mississauga.'
    industries={industries}
    />
    <AreasWeServeCanadaDMMiss />
    {/* <DMFaqMiss /> */}
    <LocationFaqSection
    label='Frequently Asked Questions'
    faqs={faqs}
    heading={
        <>
        <h2 className="text-4xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Questions<span className='text-blue-500'> Mississauga Businesses</span> Ask Us
            </h2>
        </>
    }
    description='Here are answers to the most common questions Mississauga businesses ask about digital marketing, Ads, SEO, and online growth.'
    />
    <MovingBlob />

    <ContactCTASection
    heading='Ready to Grow Your'
    spanText='Mississauga Business?'
    description='If your business isn’t visible online, you’re losing customers to competitors. Bixeltek helps Mississauga businesses get found, generate leads, and scale ROI by 10x with integrated digital marketing.'
    />
    {/* <section
    className="bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row"
    id="form"
>
    <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
        <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                Ready to Grow Your <span className="text-blue-500">Mississauga Business?</span>
            </h2>
            <p className="text-white font-poppins text-base leading-relaxed">
                If your business isn’t visible online, you’re losing customers to competitors. Bixeltek helps Mississauga businesses get found, generate leads, and scale ROI by 10x with integrated digital marketing.
            </p>

        </div>
    </div>

    <div className="w-[87%] lg:mr-32 flex justify-start items-center">
        <ContactFromNew />
    </div>
</section> */}

    </>
  )
}
