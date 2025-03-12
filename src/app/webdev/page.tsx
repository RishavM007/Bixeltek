'use client';
import React from 'react'
import { useState } from 'react'
import { HeroParallax } from '@/components/parallexHero'
import Smfeatures from '@/components/smfeatures';
import Accordion from '@/components/Faq';
export default function Webdev() {
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
    const faqs = [
        {
            question: "How much does a website cost in Hyderabad?",
            answer: "The cost of a website in Hyderabad depends on its features, design, and complexity. Contact us for a custom quote based on your business needs.",
        },
        {
            question: "Do you provide web development services outside Hyderabad?",
            answer: "Yes! We serve clients across India, the USA, the UK, the UAE, Canada, and other countries with professional web development services.",
        },
        {
            question: "Can you improve my website’s Google ranking with SEO in Hyderabad?",
            answer: "Yes, we offer SEO-optimized web design to help your website rank higher on Google and increase online visibility.",
        },
        {
            question: "Which payment gateways can you integrate into my website?",
            answer: "We integrate popular payment gateways like Razorpay, PayU, Stripe, PayPal, and other secure options for smooth online transactions.",
        },
        {
            question: "Do you offer website maintenance and support services?",
            answer: "Yes, we provide ongoing website maintenance, security updates, and technical support to ensure your site runs smoothly.",
        },
        {
            question: "How long does it take to develop a website?",
            answer: "Website development timelines vary based on project complexity. Most business websites are completed within 2-6 weeks.",
        },
        {
            question: "Do you build custom e-commerce websites in Hyderabad?",
            answer: "Yes, we specialize in e-commerce website development with secure payment integration, product management, and a seamless user experience.",
        },
        {
            question: "Will my website be mobile-friendly and responsive?",
            answer: "Absolutely! We design fully responsive websites that work seamlessly on mobile phones, tablets, and desktops.",
        },
        {
            question: "Can I edit and manage my website content myself?",
            answer: "Yes, we provide CMS-based websites (like WordPress or Strapi) that allow you to update content easily without coding knowledge.",
        },
        {
            question: "Do you provide domain registration and website hosting services?",
            answer: "Yes, we offer domain registration and reliable web hosting solutions to ensure your website remains online 24/7.",
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
                        <h2 className="mb-5 text-3xl font-semibold">Dedicated Certified Google Ads Experts</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-200">Bixeltek blends local expertise with global standards to create exceptional digital experiences for businesses of all sizes. From startups and SMEs to multinational corporations, we help brands establish a strong online identity with high-performance websites. We are a 5-star rated web design agency, trusted by over 100+ satisfied clients worldwide.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Hyderabad-Based, Global Reach",
                                    description: "Trusted by businesses in India, USA, UAE, UK, and Canada.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                    ),
                                },
                                {
                                    title: "Custom Web Design Solutions",
                                    description: "Tailored websites designed to meet unique business needs.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    ),
                                },
                                {
                                    title: "Secure Payment Gateway Integration",
                                    description: "Seamless transactions via PayPal, Stripe, Razorpay, Square, and more.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    ),
                                },
                                {
                                    title: "SEO-Optimized & Mobile-Ready Websites",
                                    description: "Enhanced Google visibility for local and international markets.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    ),
                                },
                                {
                                    title: "Scalable & Future-Proof Development",
                                    description: "Websites that evolve with your business.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    ),
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4 bg-black rounded-xl">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-purple-600">
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[16px] font-semibold text-white mb-1">{item.title}</p>
                                        <span className="text-gray-300 text-xs">{item.description}</span>
                                    </div>
                                </div>
                            ))}
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
                <Smfeatures />
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
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                        <div className="w-full flex-col justify-start items-center gap-3 flex">
                            <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-500 text-center">Process</span>
                            <h2 className="w-full text-center text-gray-100 text-4xl font-bold font-manrope leading-normal">Our Process – How We Work</h2>
                        </div>


                        <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">1</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Discovery & Strategy</h4>
                                <p className="text-center text-white text-base font-normal">Understanding your business goals, target audience, and market opportunities.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.5 6L11.5 12L5.5 18M12.5 6L18.5 12L12.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">2</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">UI/UX Design</h4>
                                <p className="text-center text-white text-base font-normal">Creating wireframes, mockups, and user-centric prototypes.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.5 6L11.5 12L5.5 18M12.5 6L18.5 12L12.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">3</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Development & Coding</h4>
                                <p className="text-center text-white text-base font-normal">Building secure, scalable, and fast web solutions aligned with industry best practices.</p>
                            </div>
                        </div>


                        <div className="w-full flex justify-end items-center pr-44 py-4">
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 5.5L12 11.5L18 5.5M6 12.5L12 18.5L18 12.5" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>


                        <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col-reverse">
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">6</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Launch & Growth Support</h4>
                                <p className="text-center text-white text-base font-normal">Providing ongoing maintenance, SEO, and digital marketing strategies for sustained success.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.5 6L12.5 12L18.5 18M11.5 6L5.5 12L11.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">5</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Testing & Quality Assurance</h4>
                                <p className="text-center text-white text-base font-normal">Ensuring page speed, security, and mobile responsiveness for a seamless experience.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.5 6L12.5 12L18.5 18M11.5 6L5.5 12L11.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">4</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">SEO & Localization</h4>
                                <p className="text-center text-white text-base font-normal">Optimizing for Hyderabad-based search rankings and global scalability.</p>
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
                                <h6 className="text-lg text-center font-medium text-indigo-600 mb-2">FAQs</h6>
                                <h2 className="text-5xl text-center font-sofiasanscondensed font-bold text-gray-100 mb-5">Looking for answers?</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-4">
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="flex justify-between items-center w-full text-xl pt-4 pb-4 text-white font-normal transition duration-500 hover:text-indigo-600"
                                            >
                                                {faq.question}
                                                <svg
                                                    className={`transition-transform duration-500 ${openIndex === index ? "rotate-180 text-indigo-400" : "text-gray-100"}`}
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
                                                <p className="text-base text-gray-100 mt-2 pt-5 pb-5 transition-all duration-300 ">{faq.answer}</p>
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
    )
}
