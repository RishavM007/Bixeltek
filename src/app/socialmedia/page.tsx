'use client';
import CarouselSection from "@/components/industriescarosel";
import { useState } from "react";
import Image from "next/image";
import cursorimg from '@/assets/images/cursor.png';
import messageimage from '@/assets/images/message.png'
import { MdArrowRightAlt } from "react-icons/md";
export default function SocialMedia() {

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

    return (
        <>
            <section className="bg-black h-[90vh] text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full z-30 h-40 bg-gradient-to-t from-black to-transparent"></div>
                <div className="container relative mx-auto px-4">
                    <div className="flex items-center justify-center">
                        <a href="#" className="border py-1 px-2 inline-flex gap-3 rounded-lg border-white/30">
                            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                                Transform Your Social Media Presence
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <span>Read More</span>
                                <MdArrowRightAlt />
                            </span>
                        </a>
                    </div>

                    {/* Ensure images do not cause overflow */}
                    <div className="flex justify-center mt-8 relative">
                        <div className="relative w-full max-w-5xl px-4">
                            <Image src={cursorimg} alt="cursor" height={200} width={200} className="absolute right-[876px] top-[108px] hidden md:inline" />
                            <Image src={messageimage} alt="message" height={200} width={200} className="absolute left-[85%] top-[106px] hidden md:inline" />
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter text-center">
                                Transform Your Social Media Presence
                            </h1>
                        </div>
                    </div>

                    <p className="text-center text-xl mt-8 max-w-md m-auto">
                        Partner with Hyderabad&apos;s premier social media management agency to drive growth, engagement, and conversions through targeted Instagram ads, Facebook ads, and more.
                    </p>

                    <div className="flex justify-center mt-6">
                        <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get a quote</button>
                    </div>
                </div>

                {/* Background Gradient Fix */}
                <div className="absolute h-[300px] w-[600px] md:w-[1200px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100% - 96px)] md:top-[calc(100% - 120px)]">
                </div>
            </section>
            <section className=" pt-8 flex justify-center items-center max-w-[100%] md:max-w-[85%] mx-auto text-white sm:py-24">
                <div className="mx-auto flex max-w-md flex-col md:flex-row justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-full md:w-1/2 px-4 pb-10 md:pb-0 lg:pr-24">
                        <h3 className="mb-2 text-purple-600">Why Choose Us?</h3>
                        <h2 className="mb-5 text-3xl font-semibold"> Why Bixeltek is Hyderabad’s Trusted Social Media Marketing Agency</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-50">Bixeltek stands out as a leading social media management agency in Hyderabad, known for innovative strategies, exceptional creativity, and measurable results. Our specialized team delivers bespoke solutions designed to meet the unique needs of Hyderabad&apos;s dynamic market.</p>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Experienced Professionals</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50">Skilled social media strategists with deep expertise in Hyderabad's local business ecosystem.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Result-Oriented Approach</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50"> Proven success stories of significantly improving online visibility and conversion rates.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Comprehensive Solutions</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50">End-to-end social media management and marketing tailored specifically to your business goals.</span>
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

            <section className="py-20 w-full">
                <div className="flex justify-center items-center">
                    <h2 className="text-white text-5xl font-sofiasanscondensed">Our Specialized Social Media Management Services</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row py-24 bg-black">
                    <div className="relative w-full ml-auto mt-6 md:!mt-0 md:-mr-[68px] md:w-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FFCE1B"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-xl mt-16 md:text-lg font-semibold text-[#FFCE1B] dark:text-white md:my-2">
                                Strategic Content<span className="text-[#FFCE1B]"> Creation & Management </span>
                            </h1>
                            <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Drive meaningful engagement through expertly curated content designed specifically for Hyderabad’s diverse audience.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:w-auto md:mt-[141px] md:-mr-[21px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#0096FF"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-xl mt-16 md:text-lg font-semibold text-[#0096FF] dark:text-white md:my-2">
                                Instagram & Facebook  <span className="text-[#0096FF]">Ads Management </span>
                            </h1>
                            <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Expand your reach and attract quality leads with precision-targeted Instagram and Facebook advertising campaigns tailored to Hyderabad demographics.                        </p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:!mt-0 md:!w-auto md:-ml-[48px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FF5733"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0  text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold  dark:text-white md:my-2">
                                Professional <span className="text-[#FF5733]">Photo & Video</span> Production
                            </h1>
                            <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Amplify your brand storytelling through professionally crafted photos and video content, resonating with Hyderabad consumers.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:w-auto md:-ml-[302px] md:mt-[283px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FF5733"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>                    <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold  dark:text-white md:my-2">
                                Landing Page <span className="text-[#FF5733]">Development & Optimization</span>
                            </h1>
                            <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Maximize conversions with expertly designed landing pages aligned perfectly with your social media campaigns, optimized to capture leads effectively.</p>
                        </div>
                    </div>

                    <div className="relative w-full mt-6 md:w-auto md:mt-[141px] md:-ml-[68px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#0096FF"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>                    <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                                Conversion Rate Optimization<span className="text-[#0096FF]"> (CRO)</span>
                            </h1>
                            <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Enhance your social media effectiveness by optimizing campaigns to deliver higher engagement, clicks, and sales conversions.                        </p>
                        </div>
                    </div>

                    <div className="relative w-full mr-auto mt-6 md:!mt-0 md:w-auto md:-ml-[68px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative z-10 rotate-90 mx-auto w-4/5 md:w-[300px] md:h-[300px]"
                            id="Layer_1"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="m485.291 129.408-224-128a10.645 10.645 0 0 0-10.581 0l-224 128a10.665 10.665 0 0 0-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128a10.665 10.665 0 0 0 5.376-9.259V138.667a10.668 10.668 0 0 0-5.377-9.259z"
                                fill="url(#SvgjsLinearGradient1060)"
                                stroke="#FFCE1B"
                                stroke-width="5"
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1060">
                                    <stop stop-color="#000000" offset="0"></stop>
                                    <stop stop-color="#000000" offset="1"></stop>
                                </linearGradient>
                            </defs>
                        </svg>                    <div className="absolute max-w-[60%] left-[19%] md:left-[13%] md:max-w-[75%] z-20 top-0 text-center text-white max-h-[300px] pt-3 md:!pt-12 overflow-hidden">
                            <h1 className="text-2xl mt-16 md:text-xl font-semibold text-emerald-400 dark:text-white md:my-2">
                                Comprehensive<span className="text-[#FFCE1B]"> Analytics & Reporting</span>
                            </h1>
                            <p className="w-full md:text-sm text-md my-3 md:mt-6 line-clamp-4 md:line-clamp-none">
                                Transparent monthly reporting offering actionable insights and data-driven recommendations to improve social media performance continuously.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
            <CarouselSection />

        </>

    );
}