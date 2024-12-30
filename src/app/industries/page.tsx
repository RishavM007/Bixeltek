'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import pet from "@/assets/digital marketing for pet stores.jpg";
import { Screen } from "@/sections/Screen";
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import { FaChartLine, FaCogs, FaUserTie, FaBullseye, FaMoneyBillWave, FaChartBar, FaSeedling, FaDatabase } from 'react-icons/fa';
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import CarouselSection from "@/components/industriescarosel";

import { RiLineChartLine, RiInstagramLine, RiCalendarEventLine, RiHeart2Line } from 'react-icons/ri';
export default function Industries() {



    const industries = [
        { id: "healthcare", img: dental, text: "Healthcare" },
        { id: "auto", img: blackcar, text: "Automobile" },
        { id: "cleaning", img: cleaningcomp, text: "Cleaning Companies" },
        { id: "roofing", img: roofing, text: "Roofing Companies" },
        { id: "lawncare", img: lawncare, text: "Lawn Care" },
        { id: "pet", img: pet, text: "Pet Stores" },
        { id: "oil", img: oil, text: "Oil Refineries" },
    ];
    const cards = [
        {
            title: 'Proven Results',
            description: 'Experience transformative outcomes that propel your business to new heights.',
            icon: <FaChartLine size={50} />,
        },
        {
            title: 'Customized Approach',
            description: 'Tailored strategies designed specifically for your business goals and target audience.',
            icon: <FaCogs size={50} />,
        },
        {
            title: 'Industry Expertise',
            description: 'Specialized knowledge to create strategies that resonate with your market.',
            icon: <FaUserTie size={50} />,
        },
        {
            title: 'Targeted Lead Generation',
            description: 'Drive qualified leads and maximize conversions with strategic campaigns.',
            icon: <FaBullseye size={50} />,
        },
        {
            title: 'Cost-Effective Marketing',
            description: 'Achieve higher ROI with efficient digital marketing strategies.',
            icon: <FaMoneyBillWave size={50} />,
        },
        {
            title: 'Measurable ROI',
            description: 'Track success with detailed analytics for data-driven decision-making.',
            icon: <FaChartBar size={50} />,
        },
        {
            title: 'Continuous Growth',
            description: 'Optimize strategies for sustainable, long-term business growth.',
            icon: <FaSeedling size={50} />,
        },
        {
            title: 'Data-driven Decision Making',
            description: 'Utilize data analytics and insights to make informed decisions and continually optimize your digital marketing strategies.',
            icon: <FaDatabase size={50} />,
        },
    ];


    return (
        <>
            <section>
                <div className="relative isolate mt-[-120px] mb-[-70px] overflow-hidden bg-black h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[70vh] flex items-center justify-center">
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
                    <div
                        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                        aria-hidden="true">
                        <div
                            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-50"
                            style={{
                                clipPath:
                                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                            }}
                        ></div>
                    </div>
                    <div className="max-w-full px-4 text-center lg:max-w-3xl">
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            About
                            <span className="text-purple-500"> Bixeltek</span>
                        </h1>
                        <p className="mt-10 text-sm lg:text-lg leading-8 text-gray-300 ">
                            At <span className="text-purple-500 px-1">Bixeltek</span>we have worked with 100s of Brands in North American Market our team has come a long way understanding the needs of each individual brand. <span className='hidden md:block '>We are no freelancers but we work as your in-house team that knows exactly what your business needs.</span>
                        </p>

                        <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
                            <span>
                                Get a Quote <i className="fa-solid fa-arrow-right ml-2" id='get_a_quote'></i>
                            </span>
                        </button>
                    </div>

                </div>
            </section>
            <Screen />

            <section>
                <div className="relative pt-20 pb-32 max-w-[90%] mx-auto xl:max-w-full ">
                    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                        <div className="relative mx-auto max-w-7xl justify-between sm:static sm:px-6">
                            <div className="sm:max-w-lg">
                                <h1 className="font text-4xl xl:text-[42px] font-bold tracking-tight text-white sm:text-6xl">Why Bixeltek?</h1>
                                <p className="mt-4 text-lg xl:text-xl text-gray-100"> <span className="text-fuchsia-500 font-bold italic">Are you ready to revolutionize your business?</span> At Bixeltek, we specialize in empowering industries like dentistry, automobile, landscaping, cleaning services, construction, real estate, and more. Our secret weapon? A strategic blend of Google Ads PPC, SEO wizardry, captivating social media management, and visually stunning web designs.</p>
                            </div>
                            <div>
                                <div className="mt-10 ">
                                    <div aria-hidden="true" className="pointer-events-none relative lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lfg:-translate-y-1/2 lg:translate-x-8">
                                            <div className="flex items-center space-x-6 lg:space-x-8">
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                        <Image src={healthcare} alt="digital marketing image for healthcare" className="h-full w-full object-center" />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <Image src={blackcar} alt="digital marketing image for automobiles" className="h-full w-full  object-center" />
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <Image src={lawncare} alt="lawncare" className="h-full w-full  object-center" />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <Image src={dental} alt="dental" className="h-full w-full  object-center" />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <Image src={cleaningcomp} alt="cleaning" className="h-full w-full object-cover object-center" />
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <Image src={pet} alt="digital marketing image for pet store" className="h-full w-full  object-center" />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <Image src={oil} alt="digital marketing for oil company" className="h-full w-full object-center" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/about" className="inline-block rounded-md  bg-black border border-fuchsia-600 py-3 px-8 text-center font-medium opacity-95 text-white hover:opacity-80">Know more about us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[90%] xl:max-w-[80%] py-10 mx-auto">
                <div className="py-10 px-10">
                    <h2 className="text-5xl font-semibold text-white mb-5">Why Choose Us?</h2>
                    <p className="text-lg xl:text-xl max-w-lg text-gray-100">
                        Experience the unrivaled power of our proven methods that have catapulted countless businesses to new heights.
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-4 justify-items-center items-center h-auto w-full bg-black text-white">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`card-wrapper mx-4 my-1 h-[350px] w-[300px] bg-slate-800 rounded-lg shadow-lg transform transition-transform ${index < cards.length / 2
                                    ? "translate-x-10" // Upper-row cards
                                    : "-translate-x-10" // Bottom-row cards
                                }`}
                        >
                            <div className="card-content flex flex-col items-center justify-start text-center p-4">
                                <div className="icon mb-4 text-purple-400 pt-10 pb-5">{card.icon}</div>
                                <h3 className="font-bold text-xl mb-4">{card.title}</h3>
                                <p className="text-sm text-gray-300">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex text-lg cursor-pointer justify-center text-white group items-center mt-10">
                    <p>
                        View our services{" "}
                        <i
                            className="fa fa-arrow-right rotate-[-45deg] group-hover:rotate-[0deg] transition-all"
                            aria-hidden="true"
                        ></i>
                    </p>
                </div>
            </section>

            <section className="flex relative flex-col md:flex-row items-center mx-auto justify-between bg-black text-white px-40 py-20">
                <motion.div
                    className="absolute w-2 sm:w-3 md:w-3 h-[33px] bg-[#4285F4] top-0 right-0 origin-top"
                    animate={{ scaleY: [0, 10, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 4, // Starts first
                    }}
                />

                {/* Horizontal Scaling (Top - Red) */}
                <motion.div
                    className="absolute top-0 left-0 origin-left h-[6px] bg-[#EA4335]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 0, // Starts after the first motion ends
                    }}
                    style={{ width: "100%" }}
                />

                {/* Vertical Scaling (Left Side - Green) */}
                <motion.div
                    className="absolute left-0 w-2 origin-bottom bg-[#34A853]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 12, // Starts after the second motion ends
                    }}
                    style={{ height: "100%" }}
                />

                {/* Horizontal Scaling (Bottom - Yellow) */}
                <motion.div
                    className="absolute bottom-0 left-0 origin-right h-[6px] bg-[#FBBC05]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 8, // Starts after the third motion ends
                    }}
                    style={{ width: "100%" }}
                />


                <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-4xl font-semibold mb-4">
                        &quot;Hey <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>, We&apos;re Certified!&quot;
                    </h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed">
                        Proud to be a part of the Google Partners family. Leveraging the power of Google tools to help businesses grow smarter and faster.
                    </p>
                </div>


                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <a
                        href="https://www.google.com/partners/agency?id=2188074075"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                            alt="Google Partners Badge"
                            className="w-48"
                        />
                    </a>
                </div>
            </section>
            <CarouselSection />

        </>
    );
}
