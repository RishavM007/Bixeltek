'use client';
import React, { useState } from 'react';

import TestimonialSection from '@/components/TestimonialPage';
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { FaDatabase, FaUsers, FaHandshake, FaChartLine, FaEnvelope, FaClipboardList } from "react-icons/fa";
import Image from 'next/image';
import { color } from 'framer-motion';

export default function Seo() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const seoBenefits = [
        {
            icon: <FaDatabase className="text-blue-500 text-5xl" />,
            title: "Experience Matters",
            description:
                "For more than 15 years, Thrive has helped businesses grow their online presence to drive more revenue.",
            style: "col-span-2",
            color: "border-blue-500",
        },
        {
            icon: <FaUsers className="text-green-500 text-5xl" />,
            title: "Dedicated SEO Professionals",
            color: "border-green-500",
            description:
                "We make the complicated SEO process simple by providing each client with a single point of contact to manage their project.",
        },
        {
            icon: <FaHandshake className="text-yellow-500 text-5xl" />,
            title: "Relationships & Results",
            color: "border-yellow-500",
            description:
                "Our core values: Relationships & Results. We help businesses of all sizes achieve exponential growth.",
            style: "row-span-2",
        },
        {
            icon: <FaChartLine className="text-red-500 text-5xl" />,
            title: "We're Always Getting Better",
            color: "border-red-500",
            description:
                "SEO is constantly evolving, and we stay ahead of the curve to ensure the best rankings and traffic growth.",
        },
        {
            icon: <FaEnvelope className="text-purple-500 text-5xl" />,
            title: "We Play Fair",
            color: "border-purple-500",
            description:
                "We follow white hat SEO techniques to ensure long-term, penalty-free success for your business.",
        },
        {
            icon: <FaClipboardList className="text-indigo-500 text-5xl" />,
            title: "Transparent Reporting",
            color: "border-indigo-500",
            description:
                "We provide detailed reports, keyword rankings, and video summaries so you know exactly how your SEO is improving.",
            style: "col-span-2",
        },
    ];

    const seoServices = [
        {
            title: 'Keyword Research',
            description: 'Identify high-performing keywords to target your audience and increase visibility and rankings.',
            color: "bg-zinc-500"
        },
        {
            title: 'On-Page Optimization',
            description: 'Optimize content, meta tags, headings, and structure to ensure your site ranks higher and is relevant to search queries.',
            color: "bg-violet-400"
        },
        {
            title: 'Link Building',
            description: 'Build quality backlinks to enhance domain authority and improve organic traffic, boosting your website credibility and rank.',
            color: "bg-green-500"
        },
        {
            title: 'Content Marketing',
            description: 'Develop high-quality content tailored to your target audience to drive traffic, engage users, and support SEO goals.',

        },
        {
            title: 'Technical SEO',
            description: 'Optimize the technical aspects of your website, including site speed, mobile responsiveness, and URL structure for better crawling and indexing.',

        },
        {
            title: 'Mobile Optimization',
            description: 'Optimize your website for mobile users, improving load times, mobile responsiveness, and user experience across devices.',

        },
        {
            title: 'Local SEO',
            description: 'Enhance visibility in local search results through keyword optimization, local listings, and backlinks to attract local customers and increase rankings.',

        },
        {
            title: 'SEO Audits',
            description: 'Conduct detailed SEO audits to assess your websites performance and find areas of improvement, ensuring your site follows SEO best practices.',

        },
        {
            title: 'Conversion Rate Optimization (CRO)',
            description: 'Increase website conversions using A/B testing and user data insights to optimize pages and drive higher user actions, such as purchases or sign-ups.',

        },
    ];

    const testimonials = [
        {
            image: "/images/testimonial1.jpg",
            adminImage: "/images/admin1.jpg",
            admin: "ADMIN",
            title: "Crafting a Digital Identity: The Art of Agency Web Design",
        },
        {
            image: "/images/testimonial2.jpg",
            adminImage: "/images/admin2.jpg",
            admin: "ADMIN",
            title: "Achieving Fashion Elegance: Runway to Real Life",
        },
        {
            image: "/images/testimonial3.jpg",
            adminImage: "/images/admin3.jpg",
            admin: "ADMIN",
            title: "Facebook design is dedicated to whats new in design",
        },
    ];

    return (
        <>
            <section className="relative pt-12 overflow-hidden bg-black sm:pt-16">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm font-normal tracking-widest uppercase">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                Your startup needs a kick
                            </span>
                        </p>
                        <h1 className="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                            Connect & grow with your targeted customers
                        </h1>

                        <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                            <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                <a href="#" className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto">
                                    Get A Quote
                                </a>
                            </div>

                            <a href="#" className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-12 sm:mt-16 lg:mt-24">

                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10">
                            <svg
                                className="blur-[64px] filter"
                                width="645"
                                height="413"
                                viewBox="0 0 645 413"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                                    fill="url(#d)"
                                />
                                <defs>
                                    <linearGradient
                                        id="d"
                                        x1="665.741"
                                        y1="178.506"
                                        x2="296.286"
                                        y2="474.62"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0%" className="text-cyan-500" stopColor="currentColor" />
                                        <stop offset="100%" className="text-purple-500" stopColor="currentColor" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>


                        <div className="bg-[#7b00e0] max-w-full pt-5 mx-auto shadow-purple-custom2 rounded-t-2xl">
                            <div className="max-w-[97%] pt-10 pb-5  px-5 mx-auto bg-black rounded-t-2xl flex flex-col lg:flex-row justify-center items-center">
                                {/* Left side */}
                                <div className="w-1/2 flex flex-col">
                                    <h2 className="text-5xl text-white mt-10 mx-7">
                                        Expertise that drives digital <span className="text-[#7b00e0]">success</span>
                                    </h2>
                                    <div className="flex mt-20 mb-6 mx-2 px-5 gap-8">
                                        <div className="flex flex-col text-white">
                                            <h1 className="text-[#6728cc] text-5xl font-semibold">+60%</h1>
                                            <p className="text-gray-100 text-sm mt-2">By optimizing your website for search engines.</p>
                                        </div>
                                        <div className="flex flex-col text-white">
                                            <h1 className="text-[#6728cc] text-5xl font-semibold">+30%</h1>
                                            <p className="text-gray-100 text-sm mt-2">
                                                Rise in revenue as more visitors convert into paying customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side */}
                                <div className="w-1/2">
                                    <ul className="flex flex-col text-gray-100 gap-10 px-6">
                                        <li className="flex items-start gap-4">
                                            <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-[-17px] text-6xl" />
                                            <span>
                                                <span className="font-semibold">Social Media Management:</span> Our social media management services focus on building and enhancing your brand&apos;s online presence. We create engaging content, manage your social media accounts, and analyze performance.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-[-17px] text-6xl" />
                                            <span>
                                                <span className="font-semibold">E-commerce Solutions:</span> Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <section>
                    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
                        <div className="max-w-7xl w-full bg-black text-white rounded-xl shadow-md p-8 flex flex-col md:flex-row">

                            <div className="md:w-1/2 p-6">
                                <h2 className="text-5xl font-normal tracking-tight text-white mb-4 ">
                                    What is <span className='text-[#6728cc]'>SEO</span> and how it impacts businesses?
                                </h2>

                                <p className="text-gray-300 relative  font-sans text-lg py-5 leading-relaxed">
                                    Search Engine Optimization (SEO) is the practice of enhancing your website&apos;s visibility on search engines like Google. It ensures that your business appears in front of potential customers when they search for relevant services or products.
                                </p>
                                <p className="text-gray-300 leading-relaxed font-sans text-lg">
                                    Businesses with a strong SEO presence gain a competitive edge, reaching users organically without relying heavily on paid advertisements. Investing in SEO is a sustainable approach to long-term success in the digital landscape.
                                </p>
                                <div className='grid grid-cols-2 gap-y-5 pt-10 uppercase text-white'>
                                    <h3 className='font-light text-[17px] tracking-wide flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" />  Proven Track Record</h3>
                                    <h3 className='font-light text-[17px] tracking-wide flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" />Customized Strategies</h3>
                                    <h3 className='font-light text-[17px] tracking-wide  flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" />Expert Team</h3>
                                    <h3 className='font-light text-[17px] tracking-wide flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" />Data-Driven Insights</h3>
                                </div>

                            </div>

                            {/* Right Section: Contact Form */}
                            <div className="md:w-1/2 p-6 relative bg-[#1a1a1a] rounded-lg">
                                <h3 className="text-4xl  font-normal text-white mb-4">Get in Touch</h3>
                                <div className='absolute w-40 h-1 bg-[#670ef7] translate-y-[-10px] translate-x-[5px]'></div>
                                <form className="space-y-4">
                                    <div className='flex gap-5'>

                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            placeholder="First Name"
                                        />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            placeholder="Last Name*"
                                        />
                                    </div>
                                    <div className='flex gap-x-5'>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            placeholder="Enter your email*"
                                        />
                                        <input
                                            type="phone"
                                            id="phone"
                                            name="phone"
                                            className="w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className='flex gap-5'>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            placeholder="Company/Organisation*"
                                        />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                            placeholder="Website"
                                        />

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
                                    <textarea name="textarea" id="" placeholder='Tell us about your business'
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

            </section>
            <section className="bg-black text-gray-300 py-16">
                <div className="max-w-[90%] mx-auto px-6 lg:px-8">
                    {/* Heading and Paragraph */}
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-left text-white capitalize">
                            SEO Services You Can Expect from <span className='text-[#670ef7] font-normal font-sans italic'>Bixeltek</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl text-left">
                            At Bixeltek, we provide a full suite of SEO services tailored to meet your unique business needs. Our goal is to help you gain visibility, attract organic traffic, and achieve sustainable growth in the digital landscape.
                        </p>
                    </div>


                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Left Column */}
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

                        {/* Right Column */}
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
            </section>

            <section className='py-24'>
                <div>
                    <div className=' max-w-[90%] mx-auto'>
                        <h2 className='text-white text-5xl mb-3 font-semibold font-poppins'>Our SEO Services</h2>
                        <p className='text-gray-100 text-[17px] tracking-wider'>Increase Your Search Rankings and Get Discovered More Online</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 max-w-[90%] mx-auto mt-10">
                        {seoServices.map((service, index) => (
                            <div
                                key={index}
                                className={`relative w-full h-80 border border-gray-800 bg-black hover:bg-[#670ef7] transition-all duration-300  flex flex-col justify-center items-center p-16`}>

                                <h3 className="text-white text-3xl font-bold text-center mb-2">{service.title}</h3>
                                <p className="text-gray-300 text-center">{service.description}</p>

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
            </section>
            <section className="bg-transparent py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-6xl font-sofiasanscondensed font-bold text-center text-gray-200 mb-6">
                        Why Bixeltek&apos;s SEO Services Are Better Than the Rest
                    </h2>
                    <p className="text-center text-white mb-12">
                        Our SEO Solutions Work: We&apos;ve Proven it Over and Over Again
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {seoBenefits.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-black text-white p-6 border-2 rounded-2xl shadow-lg hover:shadow-xl ${item.color} transition-all ${item.style || ""}`}
                            >
                                <h3 className="text-xl font-antonio tracking-wide font-semibold   text-gray-100 mt-4">{item.title}</h3>
                                <p className="text-gray-200 mt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative bg-white overflow-hidden text-black  py-40">
                {/* Top Wave */}
                <div className="absolute top-0 left-0 w-full">
                    <svg className="w-full h-24 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path className="fill-[#4285F4]" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0V320H0Z"></path>
                        <path className="fill-[#34A853]" fillOpacity="0.6" d="M0,272L80,224C160,176,320,80,480,85.3C640,91,800,197,960,240C1120,283,1280,261,1360,250.7L1440,240V320H0Z"></path>
                        <path className="fill-[#FBBC05]" fillOpacity="1" d="M0,256L100,202.7C200,149,400,43,600,64C800,85,1000,235,1200,245.3C1400,256,1600,128,1700,96L1800,80V320H0Z"></path>
                        <path className="fill-[#EA4335]" fillOpacity="0.1" d="M0,240L120,186.7C240,133,480,27,720,42.7C960,59,1200,203,1440,224V320H0Z"></path>
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-bold text-center text-black">
                        .: What Our Clients Say :.
                    </h2>
                    <p className="text-gray-900 text-center mt-2">
                        Hear from our satisfied customers about our exceptional services.
                    </p>
                </div>
                <div className="max-w-full">
                    <TestimonialSection />
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg className="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path className="fill-[#4285F4] z-40" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0V320H0Z"></path>
                        <path className="fill-[#34A853] z-30" fillOpacity="1" d="M0,272L80,224C160,176,320,80,480,85.3C640,91,800,197,960,240C1120,283,1280,261,1360,250.7L1440,240V320H0Z"></path>
                        <path className="fill-[#FBBC05] z-20" fillOpacity="1" d="M0,256L100,202.7C200,149,400,43,600,64C800,85,1000,235,1200,245.3C1400,256,1600,128,1700,96L1800,80V320H0Z"></path>
                        <path className="fill-[#EA4335] z-10" fillOpacity="0.3" d="M0,240L120,186.7C240,133,480,27,720,42.7C960,59,1200,203,1440,224V320H0Z"></path>
                    </svg>
                </div>
            </section>
        </>
    );
}
