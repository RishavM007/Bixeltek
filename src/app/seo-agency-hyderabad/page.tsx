export const metadata = {
    title: "SEO Services in Hyderabad | Rank #1 with AI SEO",
    description:
        "SEO Services in Hyderabad powered by AI to get you ranked #1. Outperform competitors, capture more leads, and turn searches into sales.",
    keywords:
        "SEO services Hyderabad, Best SEO agency Hyderabad, Digital marketing Hyderabad, Local SEO Hyderabad, Google ranking services, Technical SEO, On-page SEO, Off-page SEO, E-commerce SEO, SEO expert Hyderabad, Increase website traffic, SEO consultant Hyderabad",
    openGraph: {
        title: "SEO Services in Hyderabad | Rank #1 with AI SEO",
        description:
            "SEO Services in Hyderabad powered by AI to get you ranked #1. Outperform competitors, capture more leads, and turn searches into sales.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/seo-agency-hyderabad", // 👈 canonical URL here
    },
};

export const dynamic = "force-dynamic";
import React from 'react';
import DarkFaqSection from '@/components/DarkFaq';
import ContactFrom from '@/components/ContactFrom';
import Link from 'next/link';
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import { FaSearch, FaTachometerAlt, FaFileAlt, FaStar, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";
import SeoHero from '@/components/SeoHero';
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree, FaSeedling } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { GrFlag } from "react-icons/gr";
import { LuFileClock } from "react-icons/lu";
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

import tumblewashlogo from "@/assets/TumbleWash-Logo.webp";
import revita from "@/assets/Revita-Logo-without-background-02-Colored-Font-01.png";
import markham from "@/assets/Logo.png.webp";
import durrat from "@/assets/durrat_logo.png";
import daprbins from "@/assets/DAPrBINS.logo_.jpg";
import oma from "@/assets/OMA-Computer-System-Trading-2-2048x426.webp";
import rooted from '@/assets/Rooted_Logo_new-4-wbg.png';
import wheellogo from '@/assets/head-logo.png';
import edify from '@/assets/edify-new-logo-1.webp';
import cylus from '@/assets/CYCAS-INVESTMENT-ADVISORS-2048x1677.png';
import blooming from '@/assets/Logo2-2048x548.png';
import cloud from '@/assets/logo-2.png';
import ananta from '@/assets/Ananta Ananda-01.png';
import daddysharklogo from "@/assets/daddyshark logo-01.png";
import SeoChallenges from '@/components/Hyderabad/Seo/SeoChallenges';
import SeoWhyChooseUs from '@/components/Hyderabad/Seo/SeoWhyChooseUs';
import SeoCTA1 from '@/components/Hyderabad/Seo/SeoCTA1';
import ServicesSection from '@/components/Common/ServicesGrid';
import SeoLeads from '@/components/Hyderabad/Seo/SeoLeads';
import SeoResults from '@/components/Hyderabad/Seo/SeoResults';
import SeoPartners from '@/components/Hyderabad/Seo/SeoPartners';




export default function Seo() {



    const industries = [
        { name: "Dental", icon: <FaTooth /> },
        { name: "Healthcare", icon: <FaHospital /> },
        { name: "Pet Shops", icon: <FaDog /> },
        { name: "Oil & Gas", icon: <FaGasPump /> },
        { name: "Automobile", icon: <FaCar /> },
        { name: "Roof Cleaning", icon: <FaBroom /> },
        { name: "Education", icon: <FaGraduationCap /> },
        { name: "Real Estate", icon: <FaBuilding /> },
        { name: "Arborist & Tree Removal", icon: <FaTree /> },
        { name: "Lawn Care", icon: <FaSeedling /> },
    ];
    const logos = [
        { src: tumblewashlogo, alt: "TumbleWash" },
        { src: daddysharklogo, alt: "Daddy Shark" },
        { src: revita, alt: "Revita" },
        { src: markham, alt: "Markham" },
        { src: durrat, alt: "Durrat" },
        { src: oma, alt: "OMA Computer System" },
        { src: rooted, alt: "Rooted" },
        { src: wheellogo, alt: "Wheels" },
        { src: edify, alt: "Edify" },
        { src: blooming, alt: "Blooming" },
        { src: ananta, alt: "Ananta" },
        { src: cloud, alt: "Cloud" },
    ];

    const seoChallenges = [
        { icon: <FaSearch />, title: "Poor Keyword Targeting", desc: "Missing high-intent search queries that bring in buyers." },
        { icon: <FaTachometerAlt />, title: "Slow Website Speed", desc: "A slow site leads to higher bounce rates & lower rankings." },
        { icon: <FaFileAlt />, title: "Weak Content Strategy", desc: "Google favors sites with valuable, engaging, and optimized content." },
        { icon: <FaStar />, title: "Low Domain Authority", desc: "Without high-quality backlinks, your competitors will outrank you." },
        { icon: <FaMapMarkerAlt />, title: "Incomplete Google My Business", desc: "Losing local customers due to poor local SEO optimization." },
        { icon: <FaCode />, title: "Lack of Technical SEO", desc: "Site structure, schema markup & mobile optimization need fixes." }
    ];

    const faqs = [
        {
            question: "How much does SEO services cost in Hyderabad ?",
            answer: "The cost of SEO services in Hyderabad varies based on keyword competition, website size, and optimization level. We offer affordable SEO packages tailored to your business goals. Typically our packeges start from 25,000 INR per month.",
        },
        {
            question: "Do you provide SEO services outside Hyderabad?",
            answer: "Yes! We offer professional SEO services to businesses across India, the USA, the UK, the UAE, Canada, and more, helping brands improve their Google rankings worldwide.",
        },
        {
            question: "How can SEO improve my website’s Google ranking and organic traffic?",
            answer: "SEO helps boost your website’s visibility on Google by optimizing content, keywords, backlinks, and technical aspects. Our expert SEO strategies drive organic traffic and improve search rankings.",
        },
        {
            question: "What are the key benefits of investing in SEO for my business?",
            answer: "SEO increases organic traffic, improves brand credibility, generates high-quality leads, enhances user experience, and delivers long-term results for your online business growth.",
        },
        {
            question: "How long does it take to see results from SEO optimization?",
            answer: "SEO is a long-term strategy, and results typically take 3-6 months, depending on competition, keyword ranking, and website optimization efforts.",
        },
        {
            question: "Do you offer local SEO services for businesses in Hyderabad?",
            answer: "Yes! Our **local SEO services** help businesses rank higher in Google My Business and local search results, attracting more customers from Hyderabad and surrounding areas.",
        },
        {
            question: "Do you provide e-commerce SEO for online stores?",
            answer: "Yes! We offer E-Commerce SEO services, including product page optimization, technical SEO, schema markup, and conversion rate optimization to boost sales and traffic.",
        },
        {
            question: "Will SEO make my website mobile-friendly and faster?",
            answer: "Yes! Our SEO services include mobile optimization, page speed improvements, and core web vitals optimization to enhance user experience and search rankings.",
        },
        {
            question: "Can I track my SEO performance and keyword rankings?",
            answer: "Absolutely! We provide regular SEO reports, keyword ranking updates, Google Analytics tracking, and insights to monitor your website’s growth and ROI.",
        },
        {
            question: "Why should I choose Bixeltek for SEO services in Hyderabad?",
            answer: "Bixeltek is a trusted SEO agency in Hyderabad, specializing in on-page SEO, off-page SEO, link building, technical SEO, and content marketing to boost your website’s search engine rankings.",
        },
    ];



    const items = [
        { text: "Measurable Goals", icon: <GrFlag />, description: "Set clear, achievable objectives that align with your business growth. Our SEO strategies focus on measurable success indicators, ensuring transparency and progress tracking." },
        { text: "Data-Driven Strategies", icon: <BsGraphUpArrow />, description: "Utilizing analytics and performance insights, we craft SEO plans backed by data. This ensures your website ranks higher and reaches the right audience effectively." },
        { text: "Transparent Reporting", icon: <TbReportAnalytics />, description: "Stay informed with detailed reports that break down your website's performance. We provide easy-to-understand analytics, keeping you in control of your SEO journey." },
        { text: "Continuous Optimisation", icon: <LuFileClock />, description: "SEO is an ongoing process. We continuously refine strategies, optimize content, and adapt to algorithm changes to keep your website competitive." },
    ];
    const seoServices = [
        {
            title: 'Keyword Research',
            description: 'Discover high-volume, low-competition keywords to improve SEO rankings, drive organic traffic, and target the right audience.',
            color: "bg-zinc-500"
        },
        {
            title: 'On-Page Optimization',
            description: 'Optimize meta tags, headings, URLs, and content structure to boost search engine rankings and enhance user experience.',
            color: "bg-violet-400"
        },
        {
            title: 'Link Building',
            description: 'Earn high-quality, authoritative backlinks using white-hat SEO techniques to improve domain authority and organic search rankings.',
            color: "bg-green-500"
        },
        {
            title: 'Content Marketing',
            description: 'Create keyword-rich, engaging, and SEO-optimized content to increase website traffic, improve search rankings, and drive conversions.',
        },
        {
            title: 'Technical SEO',
            description: 'Optimize site speed, mobile-friendliness, structured data, and indexing to ensure search engines crawl and rank your site effectively.',
        },
        {
            title: 'Mobile Optimization',
            description: 'Enhance mobile responsiveness, loading speed, and UX to improve mobile search rankings and reduce bounce rates.',
        },
        {
            title: 'Local SEO',
            description: 'Boost local search rankings with Google My Business optimization, geo-targeted keywords, citations, and customer reviews.',
        },
        {
            title: 'SEO Audits',
            description: 'Conduct in-depth website SEO audits to identify and fix errors, enhance performance, and improve search engine rankings.',
        },
        {
            title: 'Conversion Rate Optimization (CRO)',
            description: 'Optimize landing pages, CTAs, and user journey using A/B testing to increase conversions, sales, and lead generation.',
        },
    ];

    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <SeoHero /> 
            <SeoChallenges seoChallenges={seoChallenges} />
            <SeoWhyChooseUs />
            <SeoCTA1/>
            {/* <section className="bg-black text-gray-300 py-16">
                <div className="max-w-[90%] mx-auto px-6 lg:px-8">
                    
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-left text-white capitalize">
                            SEO Services You Can Expect from <span className='text-[#670ef7] font-normal font-sans italic'>Bixeltek</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl text-left">
                            At Bixeltek, we provide a full suite of SEO services tailored to meet your unique business needs. Our goal is to help you gain visibility, attract organic traffic, and achieve sustainable growth in the digital landscape.
                        </p>
                    </div>


                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    We develop tailor-made SEO strategies designed to align with your specific business goals, ensuring maximum impact and results.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Optimize every element of your website, including title tags, meta descriptions, alt attributes, and internal linking, to improve search engine rankings.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Conduct comprehensive research to identify the best-performing keywords and analyze market trends to help you target the right audience.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Create engaging and valuable content that resonates with your audience, driving traffic and building authority in your industry.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Evaluate your competitors’ strategies to uncover opportunities for differentiation and market advantage.
                                </p>
                            </div>
                        </div>

                     
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Build high-quality, diverse backlinks on authoritative domains to boost your site’s credibility and search engine rankings.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Use ethical and effective SEO practices to achieve sustainable growth, with the option to combine organic strategies with paid advertising.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Share your articles and updates across social media platforms, curated websites, and relevant news outlets to maximize reach and engagement.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Leverage tools like Google Analytics to monitor trends, analyze traffic, and make data-driven decisions for your SEO campaigns.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Optimize your online store for search engines to increase product visibility, enhance user experience, and drive more sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <section className='py-24'>
                <div>
                    <div className=' max-w-[80%] mx-auto mb-5 text-center'>
                        <h2 className='text-white text-3xl md:text-5xl font-sofiasanscondensed mb-3 font-semibold '>Our Comprehensive SEO Services in Hyderabad</h2>
                        <p className='text-gray-100 text-sm md:text-[17px] tracking-wider max-w-3xl mx-auto'>We offer a full suite of strategies and solutions, meticulously designed to propel your website above the competition. Each service aims to improve your online presence, boost conversions, and ensure long-term digital growth.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[75%] mx-auto mt-10">
                        {seoServices.map((service, index) => (
                            <div
                                key={index}
                                className={`relative w-full h-80 border border-gray-800 bg-black hover:bg-[#670ef7] transition-all duration-300  flex flex-col justify-center items-center p-8 md:p-16`}>

                                <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">{service.title}</h3>
                                <p className="text-sm md:text-base text-gray-300 text-center">{service.description}</p>

                                {index % 4 === 0 && (
                                    <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 1 || index == 0 || index == 2) && (
                                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 2 || index == 0 || index == 3) && (
                                    <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 3 || index == 5 || index == 6 || index == 8) && (
                                    <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <ServicesSection
            heading='Our Comprehensive'
            spanText='SEO Services in Hyderabad'
            description='We offer a full suite of strategies and solutions, meticulously designed to propel your website above the competition. Each service aims to improve your online presence, boost conversions, and ensure long-term digital growth.'
            services={seoServices}
            />

            <SeoLeads items={items}/>  
            <SeoResults industries={industries}/>  
            <SeoPartners logos={logos}/>
            <DarkFaqSection faqs={faqs} />
        </>
    );
}
