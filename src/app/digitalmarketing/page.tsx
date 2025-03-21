'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Googleadecarosel } from '@/components/Googleadecarosel';
import image1 from '@/assets/IMG_0254.JPEG.jpg'
import { motion } from 'framer-motion';
import Accordion from '@/components/Faq';
import TestimonialSection from '@/components/TestimonialPage';
import ProcessSection from '@/sections/ProcessSection';
import SocialMediaTabs from '@/components/SocialMediaTabs';
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost, FaPinterestP, FaTiktok } from 'react-icons/fa';
import { SiPolestar, SiGoogleads, SiSemrush } from "react-icons/si";

const tabs = [
    {
        key: 'Pay-Per-Click Advertising',
        title: 'Pay-Per-Click Advertising',
        content: (
            <div className='max-w-full flex flex-col md:flex-row gap-5'>
                <div className='w-full md:w-1/3 bg-[#f1f1f1] rounded-xl p-10'>
                    <h2 className='font-sofiasanscondensed text-5xl font-semibold'>PPC Success: 90% Sales Growth</h2>
                    <p className=' font-normal text-xl mt-5'>This case study explores how a fashion retailer achieved a <strong>90% increase</strong> in e-commerce sales through targeted PPC campaigns. By optimizing keywords, refining audience targeting, and using creative A/B testing, the retailer improved ad performance and conversion rates, leading to significant revenue growth.</p>
                    <button className='border-2 border-[#570bd4] rounded-xl px-4 py-3 mt-5 text-lg text-[#570bd4]'>Read full Case Study</button>
                </div>
                <div className='w-full md:w-1/3 bg-[#FFCE1B] border rounded-xl flex flex-col relative justify-between shadow-md'>
                    <div className='p-10'>
                        <h2 className=' font-sofiasanscondensed text-5xl font-bold mb-3 text-white'>What Our Clients Say</h2>
                        <p className='text-2xl italic z-20 '>

                            &quot;Thanks to the PPC campaign, our online store saw a <strong>tremendous boost in sales</strong>. The strategy, keyword optimization, and A/B testing made a massive difference. We couldn&apos;t be happier with the results!&quot;
                        </p>
                    </div>

                    <div className='mt-5 flex gap-3 p-10 z-20'>
                        <div>
                            <p className='font-semibold text-xl font-sofiasanscondensed'>Jane Doe</p>
                            <p className='text-sm text-gray-900'>Marketing Manager, Fashion Brand</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 border rounded-xl'>
                    <Image src={image1} alt='image1' className='object-cover w-full h-[50vh] md:h-full rounded-xl'></Image>
                </div>
            </div>
        ),
    },
    {
        key: 'Social Media Marketing',
        title: 'Social Media Marketing',
        content: (
            <div>
                <h2 className="text-2xl font-bold">Social Media Marketing</h2>
                <p className="mt-2">
                    Learn how House of Malt used WooCommerce to streamline their operations and boost sales.
                </p>
            </div>
        ),
    },
    {
        key: 'SEO Optimization',
        title: "SEO Optimization",
        content: (
            <div>
                <h2 className="text-2xl font-bold">Pay-Per-Click Advertising</h2>
                <p className="mt-2">
                    See how Dan-O&apos;s Seasoning created a unique brand experience with WooCommerce.
                </p>
            </div>
        ),
    },
];

const faqs = [
    {
        question: "What is digital marketing, and why is it important for businesses?",
        answer: "Digital marketing includes SEO, Google Ads, social media marketing, and content marketing to help businesses increase online visibility, generate leads, and grow revenue.",
    },
    {
        question: "How can digital marketing help my business grow online?",
        answer: "Digital marketing drives targeted traffic, boosts brand awareness, improves customer engagement, and increases conversions through data-driven strategies.",
    },
    {
        question: "Do you provide digital marketing services in Hyderabad and beyond?",
        answer: "Yes! We offer digital marketing services in Hyderabad** and serve businesses across India, the USA, the UK, the UAE, Canada, and other global locations.",
    },
    {
        question: "Which digital marketing services do you offer?",
        answer: "We specialize in SEO, PPC advertising (Google Ads, Facebook Ads), social media marketing, content marketing, email marketing, and conversion rate optimization (CRO).",
    },
    {
        question: "How much does digital marketing cost in Hyderabad?",
        answer: "The cost of digital marketing depends on your goals, ad spend, and required services. We offer flexible and affordable digital marketing packages to fit your business needs.",
    },
    {
        question: "How long does it take to see results from digital marketing campaigns?",
        answer: "SEO results take 3-6 months, while PPC and social media ads can generate immediate traffic and leads within days, depending on your budget and strategy.",
    },
    {
        question: "What is the difference between SEO and PPC advertising?",
        answer: "**SEO (Search Engine Optimization) is a long-term strategy for organic traffic, while **PPC (Pay-Per-Click) ads like Google Ads deliver instant results with paid traffic.",
    },
    {
        question: "Can digital marketing help me generate more leads and sales?",
        answer: "Yes! With the right strategies like lead generation campaigns, landing page optimization, and remarketing ads, we can help you increase conversions and maximize ROI.",
    },
    {
        question: "Do you offer social media marketing services?",
        answer: "Yes! We create and manage **Facebook, Instagram, LinkedIn, and Twitter marketing campaigns** to enhance brand awareness and drive customer engagement.",
    },
    {
        question: "Why should I choose Bixeltek for digital marketing services in Hyderabad?",
        answer: "Bixeltek is a top digital marketing agency in Hyderabad with expertise in SEO, PPC, and social media marketing. We deliver data-driven strategies for business growth.",
    },
];

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState(tabs[0].key);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    }

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }

    const [activetimelineTab, setActiveTimelineTab] = useState("process");
    const socialIcons = [
        { icon: <FaFacebookF />, top: "20%", left: "10%", animation: { y: [0, -10, 0] } },
        { icon: <FaTwitter />, top: "30%", left: "80%", animation: { rotate: [0, 360] } },
        { icon: <SiSemrush />, top: "65%", left: "60%", animation: { scale: [1, 1.3, 1] } },
        { icon: <FaInstagram />, top: "70%", left: "20%", animation: { x: [-10, 10, -10] } },
        { icon: <FaYoutube />, top: "17%", left: "50%", animation: { scale: [1, 1.5, 1] } },
        { icon: <FaSnapchatGhost />, top: "85%", left: "50%", animation: { rotate: [0, -360] } },
        { icon: <FaPinterestP />, top: "60%", left: "90%", animation: { y: [0, 15, 0] } },
        { icon: <FaTiktok />, top: "40%", left: "10%", animation: { x: [10, -10, 10] } },
        { icon: <SiGoogleads />, top: "80%", left: "80%", animation: { x: [10, -10, 10] } },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="px-6 md:px-24 text-center bg-white min-h-[80vh] md:min-h-[100vh] lg:min-h-[120vh] flex flex-col items-center justify-center relative mt-[-150px] overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
                        Reach more customers with our digital marketing services
                    </h1>
                    <p className="text-sm md:text-xl  font-normal mb-12">
                        <strong>Tap into new audiences</strong> and <strong>increase sales</strong> by selling across multiple channels, including popular marketplaces like Amazon, social media platforms like TikTok, and search engines like Google.
                    </p>
                    <a
                        href="#"
                        className="bg-[#670ef7] text-white text-sm md:text-lg font-semibold px-6 py-3 md:px-7 md:py-4 rounded-lg shadow-md hover:bg-[#570bd4] transition"
                    >
                        Get A Quote
                    </a>
                </div>
                {socialIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute hidden md:flex text-[#670ef7] text-2xl md:text-3xl lg:text-4xl"
                        style={{
                            top: item.top,
                            left: item.left,
                            transform: "translate(-50%, -50%)",
                        }}
                        animate={item.animation}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </section>
            <section>
                <div className="min-h-screen bg-white flex items-center justify-center px-4 py-0 md:py-10">
                    <div className="max-w-full w-full bg-white text-black rounded-xl p-0 md:p-8 ml-0 md:ml-10 flex flex-col md:flex-row">

                        <div className="md:w-1/2 p-0 md:p-6">
                            <h2 className="text-5xl md:text-6xl font-semibold md:font-medium font-sofiasanscondensed  tracking-tight text-black mb-4">
                                How <span className='text-[#6728cc]'>Digital Marketing</span> Transforms Businesses
                            </h2>

                            <p className="text-gray-800 relative font-sans text-lg py-0 md:py-5 leading-relaxed">
                                Digital marketing is the key to establishing a strong online presence, reaching the right audience, and driving measurable results. It integrates various strategies like social media marketing, pay-per-click (PPC) advertising, email campaigns, and content marketing to boost brand awareness and customer engagement.
                            </p>
                            <p className="text-gray-800 font-sans text-lg leading-relaxed">
                                In today&apos;s digital-first world, businesses that invest in well-structured digital marketing campaigns can significantly outperform their competitors. Whether it&apos;s generating quality leads, improving conversion rates, or increasing customer retention, a strategic approach ensures sustainable growth.
                            </p>
                            <p className="text-gray-800 hidden font-sans text-lg leading-relaxed">
                                With the right combination of creativity and data-driven insights, brands can craft compelling messages, target the right demographics, and optimize campaigns in real time. Digital marketing is not just about visibility—it&apos;s about creating meaningful connections with customers that lead to long-term success.
                            </p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 pt-10 uppercase font-sofiasanscondensed pb-10 md:pb-0  text-black'>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> ROI-Driven Campaigns
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Multi-Channel Strategies
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Creative & Data-Backed Approach
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Performance Analytics & Insights
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Targeted Audience Engagement
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Scalable Growth Solutions
                                </h3>
                            </div>
                        </div>



                        {/* Right Section: Contact Form */}
                        <div className="md:w-1/2 p-6 relative bg-[#1a1a1a] rounded-lg">
                            <h3 className="text-3xl md:text-4xl  font-normal text-white mb-4">Get in Touch</h3>
                            <div className='absolute w-40 h-1 bg-[#670ef7] translate-y-[-10px] translate-x-[5px]'></div>
                            <form className="space-y-4">
                                <div className='flex flex-col md:flex-row gap-5'>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                        placeholder="First Name"
                                    />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                        placeholder="Last Name*"
                                    />
                                </div>
                                <div className='flex flex-col md:flex-row gap-5'>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className=" w-full md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                        placeholder="Enter your email*"
                                    />
                                    <input
                                        type="phone"
                                        id="phone"
                                        name="phone"
                                        className=" w-full md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full md:w-1/2 mt-2 p-3 border-b border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                        placeholder="Company/Organisation*"
                                    />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                        placeholder="Website"
                                    />

                                </div>
                                <div className='relative max-w-full flex flex-col md:flex-row gap-4'>
                                    <div className="relative max-w-full md:max-w-[50%] inline-block text-left w-full">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-between text-left rounded-md border border-gray-600 bg-black px-4 py-3 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            id="menu-button"
                                            aria-expanded={isOpen1}
                                            aria-haspopup="true"
                                            onClick={toggleDropdown1}
                                        >
                                            How are you running your Marketing Department Currently?
                                            <svg
                                                className={`-mr-1 ml-2 h-5 w-5 text-gray-300 transition-transform ${isOpen1 ? 'rotate-180' : ''}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 15 15"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        {/* Dropdown menu */}
                                        {isOpen1 && (
                                            <div
                                                className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-black border border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="menu-button"
                                            >
                                                <div className="py-1" role="none">
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        role="menuitem"
                                                    >
                                                        Inhouse
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        role="menuitem"
                                                    >
                                                        Outsourced
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        role="menuitem"
                                                    >
                                                        Myself
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        role="menuitem"
                                                    >
                                                        Freelancer
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative max-w-full md:max-w-[50%] inline-block text-left w-full">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-between rounded-md border text-left border-gray-600 bg-black px-4 py-3 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            id="menu-button"
                                            aria-expanded={isOpen2}
                                            aria-haspopup="true"
                                            onClick={toggleDropdown2}
                                        >
                                            What is the current marketing budget you are looking at?
                                            <svg
                                                className={`-mr-1 ml-2 h-5 w-5 text-gray-300 transition-transform ${isOpen2 ? 'rotate-180' : ''}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 15 15"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                        {/* Dropdown menu */}
                                        {isOpen2 && (
                                            <div
                                                className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-black border border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="menu-button"
                                            >
                                                <div className="py-1" role="none">
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        role="menuitem"
                                                    >
                                                        INR 1-2 Lacs a month
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        role="menuitem"
                                                    >
                                                        INR 2-5 Lacs a month
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                        role="menuitem"
                                                    >
                                                        INR &gt;5 Lacs a month
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="relative max-w-full inline-block text-left w-full">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-between rounded-md border border-gray-600 bg-black px-4 py-3 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                        id="menu-button"
                                        aria-expanded={isOpen}
                                        aria-haspopup="true"
                                        onClick={toggleDropdown}
                                    >
                                        Our Services
                                        <svg
                                            className={`-mr-1 ml-2 h-5 w-5 text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {/* Dropdown menu */}
                                    {isOpen && (
                                        <div
                                            className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-black border border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="menu-button"
                                        >
                                            <div className="py-1" role="none">
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Social Media Management
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    SEO Optimization
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    E-commerce Solutions
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Content Marketing
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    PPC Campaigns
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <textarea name="textarea" id="" rows={5} placeholder='Tell us about your business'
                                    className='w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]'
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-[#670ef7] text-white py-3 rounded-lg hover:bg-[#5b0cd1] transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-16 md:py-12">
                <div className="max-w-full mx-auto px-6">
                    <div className="mb-12 ml-0 md:ml-10">
                        <h2 className="text-5xl md:text-6xl font-bold font-sofiasanscondensed text-black mb-4">Drive Real Results with Digital Marketing</h2>
                        <p className="text-lg md:text-xl text-black pr-[5%] md:pr-[30%]">
                            Unlock the power of data-driven strategies to attract, engage, and convert your audience. From tailored campaigns to seamless user experiences, we help brands maximize their online presence, boost engagement, and achieve measurable growth.
                        </p>
                    </div>
                    <nav className="tab-menu__wrapper tab-menu__wrapper--is-style-secondary ml-0 md:ml-10">
                        <ul className="tab-menu__tabs flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4" role="tablist">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.key}
                                    className={`tab-menu__tab  ${activeTab === tab.key ? 'tab-menu__tab--active' : ''}`}
                                    role="presentation"
                                >
                                    <button
                                        role="tab"
                                        aria-selected={activeTab === tab.key}
                                        className={`tab-menu__tab-link ${activeTab === tab.key ? 'text-[#570bd4] font-semibold md:underline decoration-[#570bd4] underline-offset-8' : 'text-gray-600'}`}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        <span className="tab-menu__tab-title">{tab.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 ml-0 md:ml-10 flex flex-col md:flex-row"
                    >
                        {tabs.find((tab) => tab.key === activeTab)?.content}
                    </motion.div>
                </div>
            </section>
            <section className='mt-16 mb-10'>
                <Googleadecarosel />
            </section>
            <section className='bg-white mt-10'>
                <div className='flex flex-col'>
                    <h2 className='text-black ml-10 text-6xl px-6 mb-12 font-semibold font-sofiasanscondensed'>What we do</h2>

                    {/* First Container - Google Yellow Theme */}
                    <div className='w-[90%] mx-auto rounded-3xl flex border-l-[3px] py-14 z-10 hover:bg-[#EAAA00] group transition-all duration-300 border-l-[#EAAA00] mb-10 relative overflow-hidden'>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(234, 170, 0, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 gap-4 flex flex-col md:flex-row ml-5  w-full">
                            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-3xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#8A5B00]">
                                <p>Social Media</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-1/2 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-black'>
                                    Our social media services create tailored strategies for each platform to elevate your brand&apos;s presence.
                                    By combining engaging content with in-depth analytics, we drive growth and loyalty, connecting with your audience where it matters most.
                                </p>

                                <div className='flex flex-wrap gap-x-4 text-sm'>
                                    {[
                                        "Channel-Wise Strategy & Ideation",
                                        "Impactful Copywriting",
                                        "High-Quality Production",
                                        "Reporting & Analysis",
                                        "Graphic Design & Video Editing"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#EAAA00] py-2 px-4 mt-4 font-medium rounded-full inline-block bg-white'>
                                            <SiPolestar className='text-[#EAAA00] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Container - Google Blue Theme */}
                    <div className='w-[90%] mx-auto rounded-3xl flex border-l-[3px] py-14 hover:bg-[#DB4437] group transition-all duration-300 border-l-[#DB4437] mb-10 relative overflow-hidden '>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(219, 68, 55, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row ml-5 gap-4 w-full">
                            <div className="flex flex-col w-1/2 justify-center items-start text-3xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#a2362c]">
                                <p>Performance</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-1/2 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-black'>
                                    We create data-driven marketing campaigns that fuel growth and maximize ROI. From precise paid search to engaging social ads, our strategies boost brand reach, generate qualified leads, and increase conversions across all channels, including e-commerce and social platforms.
                                </p>

                                <div className='flex flex-wrap gap-x-4 text-sm'>
                                    {[
                                        "Conversion Rate Optimization",
                                        "Lead Generation",
                                        "Boost Social Media Reach",
                                        "App Installs",
                                        "Increase Revenue",
                                        "Brand Awareness & Increased Traffic"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#3367D6] py-2 px-4 mt-4 font-medium rounded-full inline-block bg-white'>
                                            <SiPolestar className='text-[#3367D6] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='overflow-hidden mt-20'>
                <div className="w-full ml-10">
                    <div>
                        <div className="flex w-fit gap-6 ml-10 text-2xl font-medium font-sofiasanscondensed">
                            <span
                                className={`cursor-pointer ${activetimelineTab === "process"
                                    ? "text-black underline decoration-blue-700 underline-offset-4 decoration-2"
                                    : "hover:text-black text-black"
                                    }`}
                                onClick={() => setActiveTimelineTab("process")}
                            >
                                Performance
                            </span>

                            <span
                                className={`cursor-pointer ${activetimelineTab === "social"
                                    ? "text-black underline decoration-[#DB4437] underline-offset-4 decoration-2"
                                    : "hover:text-black "
                                    }`}
                                onClick={() => setActiveTimelineTab("social")}
                            >
                                Social Media
                            </span>
                        </div>
                        {activetimelineTab === "process" ? <ProcessSection /> : <SocialMediaTabs />}
                    </div>
                </div>
            </section>

            <section>
                <TestimonialSection />
            </section>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

                        <div className="w-full lg:w-full">
                            <div className="lg:max-w-full">
                                <h6 className="text-lg text-center font-medium text-indigo-700 mb-2">FAQs</h6>
                                <h2 className="text-5xl text-center font-sofiasanscondensed font-bold text-gray-900 mb-5">Looking for answers?</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-4">
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="flex justify-between items-center w-full text-xl pt-4 pb-4 text-black font-normal transition duration-500 hover:text-indigo-600"
                                            >
                                                {faq.question}
                                                <svg
                                                    className={`transition-transform duration-500 ${openIndex === index ? "rotate-180 text-indigo-700" : "text-gray-900"}`}
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                        stroke="currentColor"
                                                        strokeWidth="1.6"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                            {openIndex === index && (
                                                <p className="text-base text-gray-900 mt-2 pt-5 pb-5 transition-all duration-300 ">{faq.answer}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
