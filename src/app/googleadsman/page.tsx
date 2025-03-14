'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Googleadecarosel } from '@/components/Googleadecarosel';
import rocket from '@/assets/rb_3704.png';
import { LuTrendingUp, LuTarget, LuFlaskConical, LuClipboardList, LuLayoutDashboard, LuLayers } from "react-icons/lu";
import Teamimg from '@/assets/pexels-fauxels-3182834.jpg'
import { Googlecard } from '@/components/Cards/Googleadscards';
import { motion } from 'framer-motion';
import HoverDevCards from '@/components/Hovercards';
import { FaChartLine, FaChartPie, FaChartBar } from "react-icons/fa";
import { SiPolestar } from "react-icons/si";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import Link from 'next/link';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const faqs = [
    {
        question: "What is Google Ads, and how can it help my business grow?",
        answer: "Google Ads is a powerful pay-per-click (PPC) advertising platform that helps businesses appear at the top of Google search results. By targeting high-intent keywords, businesses can attract more leads, increase sales, and improve brand visibility.",
    },
    {
        question: "How much does it cost to run a Google Ads campaign?",
        answer: "The cost of running a Google Ads campaign depends on factors like industry competition, keyword bidding, and ad quality. We create **cost-effective PPC campaigns** tailored to your budget, ensuring maximum ROI.",
    },
    {
        question: "Can Google Ads generate high-quality leads for my business?",
        answer: "Yes! Google Ads allows **laser-focused audience targeting** based on location, interests, demographics, and search intent. This ensures you attract **qualified leads** who are ready to convert.",
    },
    {
        question: "How long does it take to see results with Google Ads?",
        answer: "Unlike SEO, which takes months to rank, Google Ads delivers **instant traffic** to your website. However, optimizing your ad campaigns for maximum **click-through rate (CTR)** and conversions may take 2-4 weeks.",
    },
    {
        question: "What types of Google Ads campaigns should I run?",
        answer: "The best **Google Ads campaign** type depends on your business goals. We offer: **Search Ads** (for high-intent keywords), **Display Ads** (for brand awareness), **Shopping Ads** (for e-commerce), **Video Ads** (for YouTube marketing), and **Remarketing Ads** (to retarget past visitors).",
    },
    {
        question: "Can I target a specific audience using Google Ads?",
        answer: "Absolutely! Google Ads provides advanced targeting options like **geo-targeting, device targeting, demographic filters, keyword intent targeting**, and remarketing. This ensures your ads reach the right people at the right time.",
    },
    {
        question: "How do I measure the success of my Google Ads campaign?",
        answer: "We track key performance metrics like **CTR (Click-Through Rate), Conversion Rate, Quality Score, Cost Per Click (CPC), and Return on Ad Spend (ROAS)** to ensure you get the best results from your ad budget.",
    },
    {
        question: "Do I need a large budget to start Google Ads?",
        answer: "No, you can start with a **small Google Ads budget** and scale as you see positive ROI. We optimize ad spending to minimize costs and **maximize lead generation** within your budget.",
    },
    {
        question: "Can you manage my Google Ads campaigns for me?",
        answer: "Yes! Our **Google Ads management services** include **campaign setup, keyword research, A/B testing, conversion tracking, bid optimization, and continuous performance monitoring** to boost your ad results.",
    },
    {
        question: "Why should I choose Bixeltek for Google Ads management?",
        answer: "Bixeltek is a **trusted Google Ads agency** specializing in **high-performance PPC campaigns**. We focus on **increasing conversions, reducing ad spend wastage, and delivering measurable growth** for your business.",
    },
];



export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    }

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const benefits = [
        {
            icon: <LuTrendingUp className="text-purple-600 text-3xl" />,
            title: "Higher ROI",
            description: "We optimize your campaigns for maximum profitability with data-driven insights.",
        },
        {
            icon: <LuTarget className="text-blue-500 text-3xl" />,
            title: "Precise Audience Targeting",
            description: "Refined audience targeting to reach high-converting customers.",
        },
        {
            icon: <LuFlaskConical className="text-red-500 text-3xl" />,
            title: "A/B Ad Testing",
            description: "Continuous testing and optimization to improve ad performance.",
        },
        {
            icon: <LuClipboardList className="text-orange-500 text-3xl" />,
            title: "Advanced Analytics and Conversion Tracking",
            description: "Get detailed reports with actionable insights to track campaign success.",
        },
        {
            icon: <LuLayoutDashboard className="text-indigo-500 text-3xl" />,
            title: "Conversion-Focused Pages (CRO)",
            description: "Landing pages built for maximum engagement and conversions.",
        },
        {
            icon: <LuLayers className="text-purple-500 text-3xl" />,
            title: "Competitor Analysis",
            description: "Stay ahead with adaptive strategies based on competitor analysis.",
        },
    ];

    return (
        <>
            <section>
                <div className="relative mt-[-90px]  isolate lg:mt-[-150px] mb-[0px] overflow-hidden bg-black h-[100vh] md:h-[100vh] lg:h-[105vh] xl:h-[105vh]  sm:h-[80vh]  flex items-center justify-center">
                    <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true">
                        <defs>
                            <pattern id="hero-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
                    </svg>
                    <motion.div
                        className="absolute right-0 bottom-[-100px] z-10"
                        animate={{ y: [-20, 20, -20], x: [-40, 40, -40] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image src={rocket} height={600} width={600} alt="rocket" />
                    </motion.div>
                    <div
                        className="absolute left-[calc(50%-12rem)] top-10 -z-10 transform-gpu blur-[180px] sm:left-[calc(50%-24rem)] lg:left-48 lg:top-[calc(50%-40rem)] xl:left-[calc(50%-32rem)]"
                        aria-hidden="true">
                        <div
                            className="aspect-[1108/632] w-[100rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-30"
                            style={{
                                clipPath:
                                    "polygon(50% 0%, 85% 20%, 100% 50%, 85% 80%, 50% 100%, 15% 80%, 0% 50%, 15% 20%)",
                            }}
                        ></div>
                    </div>
                    <div className="max-w-full px-1  text-center mb-[-120px] lg:max-w-5xl xl:max-w-7xl z-30">
                        <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl xl:text-6xl">
                            Drive <span className="text-purple-500 px-1 leading-4">300%</span>More Traffic with Precision Google Ads Management by Bixeltek!
                        </h1>
                        <p className="mt-10 text-sm lg:text-lg  xl:text-xl leading-8 text-gray-200 ">
                            Based in <span className="text-purple-600 px-1">Hyderabad</span>, trusted by 50+ businesses across India, Usa, Canada and Middle East.
                        </p>

                        <button className="backdrop-blur-3xl border border-white group text-white font-normal text-sm xl:text-lg py-2 px-4 md:px-6 md:py-3 xl:py-5 xl:px-5 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
                            <span>
                                Get a Free Audit Today!{' '}
                                <i className="fa fa-arrow-right ml-2 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className='flex flex-col justify-center items-center relative'>
                <motion.div
                    className="absolute w-2 sm:w-3 md:w-3 h-8 hidden  bg-[#EA4335] bottom-0 left-0 origin-bottom"
                    animate={{ scaleY: [0, 8, 0] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
                <div className='flex flex-col md:flex-row  justify-between bg-white'>
                    <div className="w-full md:w-1/3  relative">
                        <motion.div
                            className="absolute w-2 sm:w-3 md:w-3 h-10 bg-[#4285F4] top-0  right-0 origin-top"
                            animate={{ scaleY: [0, 10, 0] }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <Image src={Teamimg} alt="Team" className='h-full w-full object-cover' />
                    </div>


                    <div className="w-full md:w-2/3 flex flex-col items-start px-10 xl:px-16 py-10 xl:py-16 bg-gray-100">
                        <h2 className="text-5xl font-sofiasanscondensed lg:text-5xl xl:text-5xl xl:leading-[50px] font-bold text-left my-10 xl:my-14 text-zinc-700">
                            Google Ads Agency Certified by{" "}
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FFBB00]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34AB53]">l</span>
                            <span className="text-[#EA4335]">e</span>
                        </h2>
                        <p className="text-left mt-3 xl:mt-0 xl:text-lg mb-7 font-sans text-gray-700 leading-7">
                            As a <strong>Google Partner Certified Agency</strong>, we are recognized for delivering high-performance Google Ads campaigns.
                            Our certification ensures we meet <strong>Google’s strict quality standards</strong>, driving better ROI and conversions.
                        </p>
                        <p className="text-left mb-7 font-sans xl:text-lg text-gray-700 leading-7">
                            Our team of <strong>Google Ads specialists</strong> stays updated on the latest ad strategies, bidding techniques, and audience targeting
                            to maximize your campaign results.
                        </p>
                        <p className="text-left mb-7 font-sans xl:text-lg text-gray-700 leading-7">
                            With exclusive <strong>Google insights</strong> and beta features, we craft data-driven strategies tailored to your business goals,
                            ensuring optimal ad performance and growth.
                        </p>
                        <a
                            href="https://www.google.com/partners/agency?id=2188074075"
                            target="_blank"
                            className="mt-10 flex justify-start"
                        >
                            <img
                                src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                                alt="Google Partner Badge"
                                className="w-auto h-auto"
                            />
                        </a>
                    </div>
                </div>
                <div className="= max-w-[97%] items-center relative flex flex-col md:flex-row pt-5 gap-5 md:gap-14 px-10 pb-20 md:pt-16 xl:pt-16">

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-montaga font-bold text-zinc-700">5+</h2>
                        <p className="font-sofiasanscondensed text-gray-900 leading-6 tracking-wide text-sm lg:text-xl uppercase">Years creating campaigns</p>
                        <p className=" text-gray-700  tracking-wide my-1 text-sm xl:text-lg">
                            In Google Ads, the experience is a degree
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">0</h2>
                        <p className="font-raleway text-gray-900 leading-6 tracking-wide uppercase font-sofiasanscondensed text-sm lg:text-xl">Months of permanence</p>
                        <p className=" text-gray-700 tracking-wide my-1 text-sm xl:text-lg">
                            Our service does not have permanence
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">4</h2>
                        <p className="font-raleway text-gray-900 leading-6 tracking-wide uppercase  font-sofiasanscondensed lg:text-xl text-sm">Experts</p>
                        <p className=" text-gray-700 tracking-wide my-1 text-sm xl:text-lg">
                            A large team of certified professionals
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">12</h2>
                        <p className="font-raleway text-gray-900 leading-6 tracking-wide font-sofiasanscondensed uppercase text-sm lg:text-xl">Years with us</p>
                        <p className=" text-gray-700 my-1 tracking-wide text-sm xl:text-lg">
                            Each customer is with us for an average of 12 years
                        </p>
                    </div>
                </div>
            </section>
            <section className=" pt-8 flex justify-center items-center max-w-[100%] md:max-w-[85%] mx-auto text-gray-800 sm:py-24">
                <div className="mx-auto flex max-w-md flex-col md:flex-row justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-full md:w-1/2 px-4 pb-10 md:pb-0 lg:pr-24">
                        <h3 className="mb-2 text-purple-600">Why Choose Us?</h3>
                        <h2 className="mb-5 text-3xl font-semibold"> Dedicated Certified Google Ads Experts</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-600">Our team consists of certified Google Ads specialists who stay ahead of the latest PPC trends, ensuring your campaigns are optimized for success.</p>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Proven Track Records</p>
                                <span className="font-normal text-sm md:text-lg text-gray-600">We have helped businesses across various industries scale with high-performing ad campaigns. Our clients see measurable improvements in lead generation, sales, and overall campaign performance.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Data-Driven Approach </p>
                                <span className="font-normal text-sm md:text-lg text-gray-600">Every decision is backed by in-depth analytics and market research. We analyze customer behavior, competitor strategies, and industry trends to fine-tune your campaigns.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Full-Service PPC Management </p>
                                <span className="font-normal text-sm md:text-lg text-gray-600">From campaign setup to continuous optimization, we handle everything so you can focus on running your business.</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] md:w-1/2 p-6 relative bg-[#1a1a1a] rounded-lg">
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
            </section>

            <section className='bg-white py-20'>
                <Googlecard />
            </section>
            <section className='bg-white py-20'>
                <Googleadecarosel />
            </section>
            <section className="pb-16 bg-white">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-4xl font-semibold font-sofiasanscondensed text-gray-900">Key Benefits of Our <span className='text-purple-500'>Google Ads Service</span> </h2>
                    <p className="text-gray-600 text-lg mt-2 mb-10">Unlock better performance with expert ad strategies.</p>
                    {/* Grid with Tic-Tac-Toe style borders */}
                    <div className="grid grid-cols-1  md:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`p-8 md:p-14 flex flex-col justify-center items-center border-0 border-purple-900 ${index < 3 ? "md:border-b " : ""} ${index % 3 !== 2 ? "md:border-r" : ""}`}
                            >
                                <div className="mb-4 text-purple-500">{benefit.icon}</div>
                                <h2 className="text-xl font-semibold text-gray-800 font-poppins">{benefit.title}</h2>
                                <p className="text-gray-600 mt-2">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="pt-2">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div className="block text-center mb-5 lg:text-left lg:mb-0">
                            <h2
                                className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                            >
                                Connect & grow with your targeted customers
                            </h2>
                            <p className="text-xl text-indigo-100">
                                Contact us with any query or any idea.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
                        >Get In Touch
                            <svg
                                width="19"
                                height="14"
                                viewBox="0 0 19 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                    stroke="#4F46E5"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-gray-700">How It Works</p>
                        <h2 className="mt-6 text-3xl font-semibold font-sofiasanscondensed tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Optimize Your Google Ads in <span className='text-purple-500'>4 Simple Steps</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
                            Maximize your ad performance with our streamlined  4-step process.
                        </p>
                    </div>

                    <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-7xl lg:grid-cols-4">
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-database text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Free Audit & Consultation</h2>
                                <h4 className="mt-2 text-base text-gray-700">We analyze your current campaigns to identify key improvement areas, optimizing ad performance and budget efficiency.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-map text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Custom Strategy Development</h2>
                                <h4 className="mt-2 text-base text-gray-700"> We craft a tailored Google Ads strategy, including audience targeting, ad copywriting, and budget allocation.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-globe text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Campaign Launch & Optimization</h2>
                                <h4 className="mt-2 text-base text-gray-700"> We launch and monitor your ads, making real-time adjustments through A/B testing, audience refinement, and bid optimization.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-rocket text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Performance Tracking & Reporting</h2>
                                <h4 className="mt-2 text-base text-gray-700">Get clear, data-driven insights with detailed reports on conversions, click-through rates, and overall effectiveness.</h4>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>

            <div className="max-w-[80%] px-0 py-10 lg:px-8 lg:py-14 mx-auto">

                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
                    <div className="lg:col-span-5 w-full lg:col-start-1">

                        <div className="mb-8">
                            <h2 className=" text-3xl text-gray-800 font-bold lg:text-4xl  ">
                                It&apos;s all about
                            </h2>
                            <span className='text-yellow-500 text-xl mb-2 font-medium font-poppins'>More Call. More Leads. More Conversions.</span>
                            <p className="text-gray-600 ">
                                We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
                            </p>
                        </div>

                        <blockquote className="relative">
                            <svg className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-purple-200 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                            </svg>

                            <div className="relative z-10">
                                <p className="text-xl italic text-gray-800 ">
                                    Amazing people to work with. Very fast and professional partner.
                                </p>
                            </div>

                            <footer className="mt-6">
                                <div className="flex items-center gap-x-4">
                                    <div className="shrink-0">
                                        <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                    </div>
                                    <div className="grow">
                                        <div className="font-semibold text-gray-800 ">Josh Grazioso</div>
                                        <div className="text-xs text-gray-700 ">Director Payments & Risk | Airbnb</div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>

                    </div>


                    <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
                        <div className="space-y-6 sm:space-y-8">

                            <ul className="grid grid-cols-2  divide-y-2 divide-x-2 divide-gray-200 overflow-hidden dark:divide-neutral-700">
                                <li className="flex flex-col -m-0.5 p-4 md:p-8">
                                    <div className="flex items-end gap-x-0 md:gap-x-2 text-4xl md:text-5xl font-bold text-blue-600">
                                        45k+
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        users - from new startups to public companies
                                    </p>
                                </li>

                                <li className="flex flex-col -m-0.5 p-4 lg:p-8">
                                    <div className="flex items-end gap-x-0 md:gap-x-2 text-4xl md:text-5xl font-bold text-red-600">
                                        <svg className="shrink-0 size-5 text-red-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                                        23%
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        increase in traffic on webpages with Looms
                                    </p>
                                </li>

                                <li className="flex flex-col -m-0.5 p-4 lg:p-8">
                                    <div className="flex items-end gap-x-0 md:gap-x-2 text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                                        <svg className="shrink-0 size-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                                        9.3%
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600 ">
                                        boost in reply rates across sales outreach
                                    </p>
                                </li>

                                <li className="flex flex-col -m-0.5 p-4 lg:p-8">
                                    <div className="flex items-end gap-x-0 md:gap-x-2 text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                                        2x
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        faster than previous Preline versions
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>

            </div>



            <section className='bg-white mb-20'>
                <div className='flex flex-col'>
                    <h2 className='text-black ml-24 text-4xl md:text-6xl px-6 mb-12 font-semibold font-sofiasanscondensed'>What we do</h2>

                    {/* First Container - Google Yellow Theme */}
                    <div className='w-[85%] mx-auto rounded-3xl flex border-l-[3px] py-14 z-10 hover:bg-[#EAAA00] group transition-all duration-300 border-l-[#EAAA00] mb-10 relative overflow-hidden'>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(234, 170, 0, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 gap-4 flex flex-col md:flex-row ml-5 w-full">
                            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-3xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#8A5B00]">
                                <p>Google Ads</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-1/2 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-sm md:text-lg mr-10 md:mr-0 text-black'>
                                    Our expert-driven Google Ads campaigns ensure your business reaches the right audience at the right time.
                                    With strategic ad placements, compelling copy, and continuous optimization, we drive high-quality traffic,
                                    increase conversions, and maximize your advertising budget.
                                </p>

                                <div className='flex flex-wrap gap-x-4 mt-4'>
                                    {[
                                        "Targeted Campaign Strategy",
                                        "Conversion-Optimized Landing Pages",
                                        "Search & Display Ads",
                                        "Remarketing & Retargeting",
                                        "Performance Tracking & Optimization",
                                        "YouTube & Shopping Ads"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#EAAA00] py-2 px-4 mt-4 font-medium rounded-full text-xs md:text-sm inline-block bg-white'>
                                            <SiPolestar className='text-[#EAAA00] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Second Container - Google Blue Theme */}
                    <div className='w-[85%] mx-auto rounded-3xl flex border-l-[3px] py-14 hover:bg-[#DB4437] group transition-all duration-300 border-l-[#DB4437] mb-10 relative overflow-hidden '>
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
                                <p className='group-hover:text-white text-sm md:text-lg mr-10 md:mr-0  text-black'>
                                    We create data-driven marketing campaigns that fuel growth and maximize ROI. From precise paid search to engaging social ads, our strategies boost brand reach, generate qualified leads, and increase conversions across all channels, including e-commerce and social platforms.
                                </p>

                                <div className='flex flex-wrap gap-x-4 text-xs md:text-sm mt-4'>
                                    {[
                                        "Conversion Rate Optimization",
                                        "Lead Generation",
                                        "Boost Social Media Reach",
                                        "App Installs",
                                        "Increase Revenue",
                                        "Brand Awareness & Increased Traffic"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#a2362c] py-2 px-4 mt-4 font-medium rounded-full inline-block bg-white'>
                                            <SiPolestar className='text-[#a2362c] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="bg-white flex flex-col pt-10 pb-20 items-center">
                    <div className="text-center flex flex-col max-w-5xl">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                            Maximize Every Click with Our Proven Strategies
                        </h2>
                        <p className="text-sm md:text-lg text-gray-700 py-10 max-w-[80%] mx-auto md:max-w-full font-sans">
                            We focus on making your ad spend count by combining precision, creativity, and data-driven insights. Here&apos;s how we transform your campaigns into performance powerhouses:
                        </p>
                    </div>
                    <div className="w-full py-10 flex justify-center">
                        <HoverDevCards />
                    </div>
                    <Link href='#'>
                        <p className='font-semibold text-lg text-center group'>See Our CaseStudies <i className="fa fa-arrow-right ml-1 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i></p>
                    </Link>
                </div>
            </section>


            <section>
                <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Proven Success: Over $2 Million In Revenue Generated For Clients</h2>
                            <p className="text-lg md:text-xl text-gray-600">Numbers That Speak Louder Than Words</p>
                        </div>

                        <p className="text-center text-sm md:text-lg text-gray-700 mb-12">
                            We believe in results that matter. Here is a glimpse of how we have empowered our clients to achieve measurable success.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartLine className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">150%</h3>
                                <p className="text-gray-600">Increase in CTR for e-commerce campaigns, driving targeted traffic that converts.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartBar className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">200%</h3>
                                <p className="text-gray-600">Average ROI growth across all managed campaigns.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartLine className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">40%</h3>
                                <p className="text-gray-600">Reduction in CPC while maintaining ad effectiveness.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartPie className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
                                <p className="text-gray-600">Boost in conversions in just 90 days for a leading retail client.</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                className="flex justify-between items-center w-full text-sm md:text-xl pt-4 pb-4 text-black font-normal transition duration-500 hover:text-indigo-600"
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
                                                <p className="text-sm md:text-base text-gray-900 mt-2 pt-5 pb-5  transition-all duration-300 ">{faq.answer}</p>
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
