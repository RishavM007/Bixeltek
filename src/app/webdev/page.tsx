'use client';
import React from 'react'
import { useState } from 'react'
import { HeroParallax } from '@/components/parallexHero'

export default function page() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    }

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const products = [
        {
            title: "Product 1",
            link: "/product-1",
            thumbnail: "/images/product1.jpg",
        },
        {
            title: "Product 2",
            link: "/product-2",
            thumbnail: "/images/product2.jpg",
        },
        {
            title: "Product 3",
            link: "/product-3",
            thumbnail: "/images/product3.jpg",
        },
        {
            title: "Product 4",
            link: "/product-4",
            thumbnail: "/images/product4.jpg",
        },
        {
            title: "Product 5",
            link: "/product-5",
            thumbnail: "/images/product5.jpg",
        },
        {
            title: "Product 6",
            link: "/product-6",
            thumbnail: "/images/product6.jpg",
        },
        {
            title: "Product 7",
            link: "/product-7",
            thumbnail: "/images/product7.jpg",
        },
        {
            title: "Product 8",
            link: "/product-8",
            thumbnail: "/images/product8.jpg",
        },
        {
            title: "Product 9",
            link: "/product-9",
            thumbnail: "/images/product9.jpg",
        },
        {
            title: "Product 10",
            link: "/product-10",
            thumbnail: "/images/product10.jpg",
        },
        {
            title: "Product 11",
            link: "/product-11",
            thumbnail: "/images/product11.jpg",
        },
        {
            title: "Product 12",
            link: "/product-12",
            thumbnail: "/images/product12.jpg",
        },
        {
            title: "Product 13",
            link: "/product-13",
            thumbnail: "/images/product13.jpg",
        },
        {
            title: "Product 14",
            link: "/product-14",
            thumbnail: "/images/product14.jpg",
        },
        {
            title: "Product 15",
            link: "/product-15",
            thumbnail: "/images/product15.jpg",
        },
    ];
    return (

        <>
            <section>
                <HeroParallax products={products} />

            </section>
            <section className=" pt-8 flex justify-center items-center max-w-[100%] md:max-w-[85%] mx-auto text-gray-100 sm:py-24">
                <div className="mx-auto flex max-w-md flex-col md:flex-row justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-full md:w-1/2 px-4 pb-10 md:pb-0 lg:pr-24">
                        <h3 className="mb-2 text-purple-600">Why Choose Us?</h3>
                        <h2 className="mb-5 text-3xl font-semibold"> Dedicated Certified Google Ads Experts</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-200">Our team consists of certified Google Ads specialists who stay ahead of the latest PPC trends, ensuring your campaigns are optimized for success.</p>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Proven Track Records</p>
                                <span className="font-normal text-sm md:text-lg text-gray-200">We have helped businesses across various industries scale with high-performing ad campaigns. Our clients see measurable improvements in lead generation, sales, and overall campaign performance.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Data-Driven Approach </p>
                                <span className="font-normal text-sm md:text-lg text-gray-200">Every decision is backed by in-depth analytics and market research. We analyze customer behavior, competitor strategies, and industry trends to fine-tune your campaigns.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Full-Service PPC Management </p>
                                <span className="font-normal text-sm md:text-lg text-gray-200">From campaign setup to continuous optimization, we handle everything so you can focus on running your business.</span>
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
            <section>

                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="lg:w-3/4">
                            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                                Why Choose Bixeltek for Web Design & Development?
                            </h2>
                            <p className="mt-3 text-gray-800 text-xl dark:text-neutral-400">
                                Our team of expert developers and UI/UX designers build websites that engage users, drive conversions, and rank high on search engines.                            </p>
                            <p className="mt-5">
                                <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="#">
                                    Contact sales to learn more
                                    <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </p>
                        </div>


                        <div className="space-y-6 lg:space-y-10">

                            <div className="flex gap-x-5 sm:gap-x-8">

                                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                </span>
                                <div className="grow">
                                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        Google Partnered & Trusted by Global Brands
                                    </h2>
                                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                        As a certified Google Partner, we deliver cutting-edge web solutions trusted by businesses worldwide for growth and digital success.                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5 sm:gap-x-8">

                                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                                </span>
                                <div className="grow">
                                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        Expertise in Small, Medium, and Enterprise-Scale Web Development                                    </h2>
                                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                        We build scalable, high-performance websites tailored to businesses of all sizes, ensuring flexibility, security, and long-term growth.                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5 sm:gap-x-8">

                                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                </span>
                                <div className="grow">
                                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        E-commerce Specialists (Shopify, WooCommerce, Magento, Custom Platforms)</h2>
                                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                        We craft conversion-focused online stores using WooCommerce for seamless shopping experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-5 sm:gap-x-8">
                                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16h14" /><path d="M7 20h10" /><path d="M10 12h4" /><path d="M12 2v8" /><path d="M2 16a10 10 0 1 1 20 0" /></svg>
                                </span>
                                <div className="grow">
                                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        SEO-Optimized, Mobile-Friendly, and Fast-Loading Designs
                                    </h2>
                                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                        We design responsive, fast-loading websites optimized for search engines to maximize visibility, traffic, and conversions.                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-5 sm:gap-x-8">
                                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                    <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v.01" /><path d="M12 8h0" /><path d="M8 12h0" /><path d="M16 12h0" /></svg>
                                </span>
                                <div className="grow">
                                    <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        Custom API Integration & Scalable Web Applications
                                    </h2>
                                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                        Our team integrates custom APIs and builds scalable web applications to streamline business operations and enhance functionality.                                    </p>
                                </div>
                            </div>



                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
