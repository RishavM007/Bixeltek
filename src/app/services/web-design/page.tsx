
export const metadata = {
    title: " Web Design Services for Businesses | Professional Web Design Agency",
    description:
        "  Enterprise-grade web design services for businesses in India, USA, Canada, UAE, Saudi Arabia & UK. Partner with a professional web design agency to build responsive, SEO-ready websites that drive sales and growth.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " Web Design Services for Businesses | Professional Web Design Agency",
        description:
            " Enterprise-grade web design services for businesses in India, USA, Canada, UAE, Saudi Arabia & UK. Partner with a professional web design agency to build responsive, SEO-ready websites that drive sales and growth.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/services/seo-services",
    },
};

import React from 'react'
import WebSection1 from '@/components/WebDev/WebSection1'
import WhyWebDev from '@/components/WebDev/WebSection2'
import WebSection4 from '@/components/WebDev/WebSection4'
import WebDesignSection from '@/components/WebDev/WebSection3'
import FeaturesSection from '@/components/WebDev/WebSection5'
import GradientBorderContainersMobWeb from '@/components/WebDev/WebTimeline'
import BenefitsSection from '@/components/WebDev/WebSection6'
import WebSection7 from '@/components/WebDev/WebSection7'
import WebdevTestimonials from '@/components/WebDev/WebDevTestimonials'
import AreasWeServe from '@/components/WebDev/WebSection8';
import IndustryCarouselSectionWeb from '@/components/WebDev/WebDevInd';
import WebDevFaq from '@/components/WebDev/WebDevFaq';
import WebShowcaseSection from '@/components/WebDev/WebDevShowcase';
import WebTech from '@/components/WebDev/WebTech';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/digital marketing for pet stores.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/digital marketing for health care practices.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import Tech2 from '@/components/Tech2';
import DynamicIndustrySection from '@/components/Common/IndustryCarousel';

const steps = [
  {
    number: '01',
    title: 'Need Identification',
    text: 'We analyze your business goals, challenges, and competitors to lay a solid foundation for your website project.',
    gradient: 'from-blue-500 via-blue-400 to-[black]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    text: 'We define the website structure, features, and clear conversion pathways that guide your users toward action.',
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-teal-500',
  },
  {
    number: '03',
    title: 'Design & Branding',
    text: 'Pixel-perfect mockups and visuals crafted to align seamlessly with your brand identity and engage your audience.',
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '04',
    title: 'Development',
    text: 'Custom-coded or WordPress builds tailored to your requirements, ensuring scalability, flexibility, and security.',
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-purple-500',
  },
  {
    number: '05',
    title: 'Integrations',
    text: 'Payment gateways, analytics, CRM, and other third-party tools integrated for smooth business operations.',
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-indigo-500',
  },
  {
    number: '06',
    title: 'Testing & Launch',
    text: 'Comprehensive QA for speed, security, SEO, and responsiveness before going live to ensure maximum impact.',
    gradient: 'from-red-500 via-[#13131333] to-[#13131333]',
    color: 'text-red-500',
  },
];

const industries=[
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

export default function page() {
    return (
        <>
            <WebSection1 />
            <WhyWebDev />
            <WebDesignSection />
            <FeaturesSection />
            <WebSection4 />
            {/* <GradientBorderContainersMobWeb /> */}
            <LocationProcessSection
            heading={
                <>
                <span>Our<span className="text-blue-500"> Web Design <br></br></span>Process</span>
                </>
            }
            description='Our proven process ensures every project is delivered with precision, scalability, and measurable ROI.'
            footerText='This structured approach ensures your website is not only launched but consistently optimized for growth.'
            steps={steps}
            cta={{
                text:'Talk To Our Web Design Specialist',
                href:'tel:+919100032301'
            }}
            />
            <WebSection7 />
            <BenefitsSection />
            <WebShowcaseSection/>
            <WebTech/>
            <AreasWeServe/>
            {/* <IndustryCarouselSectionWeb/> */}
            <DynamicIndustrySection
            backgroundColor='bg-black'
            heading={
                <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        Web Development Solutions <br></br> Tailored for Every Industry
                    </span>
                </>
            }
            description='Every industry has its own goals, users, and digital challenges.
                    Our team builds websites and web apps that align with each sector’s unique needs — whether it’s e-commerce, healthcare, real estate, education, or tech startups.
                    We translate business objectives into seamless digital experiences that deliver results.'
             industries={industries} 
            />
            {/* <LocationIndustrySection
            heading={
                <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        Web Development Solutions <br></br> Tailored for Every Industry
                    </span>
                </>
            }
            description='Every industry has its own goals, users, and digital challenges.
                    Our team builds websites and web apps that align with each sector’s unique needs — whether it’s e-commerce, healthcare, real estate, education, or tech startups.
                    We translate business objectives into seamless digital experiences that deliver results.'
             industries={industries}       
            /> */}
            <WebdevTestimonials />
            <WebDevFaq/>
        </>
    )
}
