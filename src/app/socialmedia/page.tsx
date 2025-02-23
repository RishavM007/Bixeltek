'use client';
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { useState } from "react";
import appscreen from '@/assets/app-screen.png';
import Image from "next/image";
export default function SocialMedia() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>

            <section className="relative flex flex-col   mt-[-50px] items-center  justify-center overflow-hidden bg-black  text-white">
            <div className="absolute bottom-0 left-0 w-full z-30 h-40 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-40 z-30 bg-gradient-to-b from-black to-transparent"></div>
                {/* Video Background */}
                <div className="absolute inset-0 sm:hidden md:inline">
                    <video
                        className="w-full h-[70vh] md:h-[150vh] lg:h-[140vh] object-cover opacity-100"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/lottie/blackhole.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Text Content */}
                <div className="relative z-10 text-center max-w-4xl px-6 my-20">
                    <p className="text-sm font-normal tracking-widest max-w-sm rounded-full mx-auto uppercase bg-clip-text border  border-white/40 bg-white/50 py-2 px-4 text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                        Elevate your Brand Online
                    </p>
                    <h1 className="mt-8 text-4xl font-bold sm:text-5xl lg:text-6xl">
                        Boost Engaging and Drive more sales
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Unlock the power of social media with targeted strategies that grow your audience, increase conversions, and build a loyal community.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            className="px-8 py-3 text-base font-semibold text-white bg-purple-600/90 rounded-full hover:bg-purple-700 transition"
                        >
                            Get A Quote
                        </a>
                        <a
                            href="#"
                            className="px-8 py-3 text-base font-semibold border bg-white/70 text-purple-800 border-white rounded-full hover:bg-white hover:text-black transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Text section */}
                <div className="relative z-10 mt-2 text-center w-[80%] h-[50vh] px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-tr-lg rounded-tl-lg shadow-lg">
                    <Image
                        src={appscreen}
                        alt="App Screen"
                        className="w-full overflow-y-hidden opacity-50"
                    ></Image>
                </div>

            </section>
            <section>
                <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
                    <div className="max-w-7xl w-full bg-black text-white rounded-xl shadow-md p-8 flex flex-col md:flex-row">

                    <div className="md:w-1/2 p-6">
                <h2 className="text-5xl font-antonio tracking-normal text-white mb-4 ">
                    What is <span className='text-[#6728cc]'>Social Media Marketing</span> and how it impacts businesses?
                </h2>

                <p className="text-gray-300 relative font-sofiasanscondensed tracking-wide text-xl py-5 leading-relaxed">
                    Social Media Marketing (SMM) is the use of social media platforms to connect with your audience, 
                    build your brand, increase sales, and drive website traffic. It involves publishing great content, 
                    engaging with followers, running advertisements, and analyzing results.
                </p>
                <p className="text-gray-300 leading-relaxed  font-sofiasanscondensed tracking-wide text-xl">
                    Businesses that leverage social media effectively can enhance brand awareness, foster customer relationships, 
                    and achieve higher conversions. With a strategic approach, SMM is a cost-effective way to grow in the digital world.
                </p>
                <div className='grid grid-cols-2 gap-y-5 pt-10 uppercase text-white'>
                    <h3 className='font-light text-[17px]  font-sofiasanscondensed  tracking-wide flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" /> Targeted Ad Campaigns</h3>
                    <h3 className='font-light text-[17px]  font-sofiasanscondensed  tracking-wide flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" />Creative Content Strategies</h3>
                    <h3 className='font-light text-[17px] font-sofiasanscondensed  tracking-wide flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" />Engagement & Growth</h3>
                    <h3 className='font-light text-[17px] font-sofiasanscondensed  tracking-wide flex'><VscDebugBreakpointDataUnverified className="text-[#670ef7] mx-2 mt-1" />Analytics & Optimization</h3>
                </div>
            </div>

                        {/* Right Section: Contact Form */}
                        <div className="md:w-1/2 p-6 relative bg-[#1a1a1a] rounded-lg">
                            <h3 className="text-4xl  font-normal text-white mb-4 font-antonio tracking-wide">Get in Touch</h3>
                            <div className='absolute w-40 h-1 bg-[#670ef7] translate-y-[-10px] translate-x-[5px]'></div>
                            <form className="space-y-4 font-sofiasanscondensed text-xl">
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
                                        className="inline-flex w-full justify-between rounded-md border border-gray-600 bg-black px-4 py-3 text-xl font-medium text-gray-300 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
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
                                                    className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Social Media Management
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    SEO Optimization
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    E-commerce Solutions
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Content Marketing
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
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

        </>

    );
}