'use client';
import Link from "next/link";
import Image from "next/image";
import roof from "@/assets/pexels-pixabay-45206.jpg";
import Dental from "@/assets/ozkan-guner-AWqHc49SU-c-unsplash.jpg";
import lawn from "@/assets/pexels-theshuttervision-17326319.jpg";
import cleaning from '@/assets/pexels-tima-miroshnichenko-6196235.jpg'
import doc from "@/assets/pexels-shvetsa-4225880.jpg";
import Accordion from "@/components/Faq";
import car from "@/assets/pexels-mayday-1545743.jpg"
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaCar, FaTree, FaBroom, FaBuilding, FaTooth } from "react-icons/fa";
import { RiLineChartLine, RiInstagramLine, RiCalendarEventLine, RiHeart2Line } from 'react-icons/ri';




export default function Industries() {
    return (
        <>
            <section className="min-h-max mt-[-130px] bg-black">
                <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40"></div>
                    <div className="h-52 w-3/5 bg-gradient-to-r from-blue-500 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 rounded-full opacity-50 blur-2xl"></div>
                <div className="relative mx-auto pt-48 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
                    <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
                        Transforming Industries with Digital Marketing
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
                        From startups to global enterprises, we specialize in creating tailored strategies that drive engagement, amplify reach, and deliver measurable results. Lets redefine your digital journey.
                    </p>
                    <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
                        <Link href="#" className="flex items-center h-12 px-6 rounded-full bg-purple-300 backdrop-blur-2xl text-black border border-black">
                            Get Started
                        </Link>
                        <Link href="#" className="flex items-center h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-gray-300 border border-purple-500 ">
                            Discover More
                        </Link>
                    </div>
                    <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 shadow-purple-custom to-gray-200 dark:from-purple-200 dark:to-white border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
                        <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                            <div className="w-10">
                                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h2 className="text-gray-900  font-semibold text-lg">
                                    Industry Expertise
                                </h2>
                                <p className="text-gray-700  text-xs">
                                    Our solutions are designed to cater to diverse industries, ensuring strategies that align with your business goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                            <div className="w-10">
                                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h2 className="text-gray-900  font-semibold text-lg">
                                    Innovative Solutions
                                </h2>
                                <p className="text-gray-700 text-xs">
                                    Harness the power of data, creativity, and technology to craft campaigns that stand out in a competitive market.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                            <div className="w-10">
                                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25-2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h2 className="text-gray-900  font-semibold text-lg">
                                    Measurable Results
                                </h2>
                                <p className="text-gray-700  text-xs">
                                    Stay ahead with transparent analytics and insights that showcase the impact of our digital marketing efforts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black z-10">
                <div className="w-full relative flex items-center justify-between">

                    <div className="w-3/5 relative py-5 pr-10 pl-16 flex flex-col gap-6 text-white" style={{ height: "600px" }}>
                        <a href="#health">
                        <div className=" flex items-center justify-between bg-sky-200 hover:translate-x-4 transition-all duration-300 cursor-pointer   p-9  hover:shadow-purple-custom w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg text-black ">Healthcare</span>
                            <span className="text-xl p-3 rounded-full">
                                <i className="text-black text-3xl">
                                    <MdOutlineHealthAndSafety />
                                </i>
                            </span>
                        </div>
                        </a>

                        <a href="#car">
                        <div className="flex items-center justify-between  bg-rose-200  hover:translate-x-4 transition-all duration-300 cursor-pointer  p-9 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg text-black">Automobiles</span>
                            <span className="text-xl p-3 rounded-full">
                                <i className="text-black text-3xl">
                                    <FaCar />
                                </i>
                            </span>
                        </div>
                        </a>

                        <a href="#cleaning">
                        <div className="flex items-center  justify-between bg-yellow-200 hover:translate-x-4 transition-all duration-300 cursor-pointer   p-9 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg text-black ">Cleaning Companies</span>
                            <span className="text-xl  p-3 rounded-full">
                                <i className="text-black text-3xl">
                                    <FaBroom />
                                </i>
                            </span>
                        </div>
                        </a>

                        <a href="#roof">
                        <div className=" flex items-center  justify-between bg-orange-200  hover:translate-x-4 transition-all duration-300 cursor-pointer  p-9 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg text-black">Roofing Companies</span>
                            <span className="text-xl  p-3 rounded-full">
                                <i className="text-black text-3xl">
                                    <FaBuilding />
                                </i>
                            </span>
                        </div>
                        </a>

                        <a href="#lawn">
                        <div className=" flex items-center  justify-between bg-green-200 hover:translate-x-4 transition-all duration-300 cursor-pointer   p-9 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg text-black">Lawn Care & Landscaping</span>
                            <span className="text-xl  p-3 rounded-full">
                                <i className="text-black text-3xl">
                                    <FaTree />
                                </i>
                            </span>
                        </div>
                        </a>
                        <a href="#dental">
                        <div className=" flex items-center justify-between bg-fuchsia-200  hover:translate-x-4 transition-all duration-300 cursor-pointer   p-9 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg text-black">Dental Clinic</span>
                            <span className="text-xl p-3 rounded-full">
                                <i className="text-black text-3xl ">
                                    <FaTooth />
                                </i>
                            </span>
                        </div>
                        </a>
                    </div>
                    <div className="w-2/5 flex py-5 justify-end items-center">
                        <div className="flex flex-col items-end">
                            <h1 className="rotate-90 text-fuchsia-600 text-[85px] xl:text-[100px] font-bold">
                                INDUSTRIES
                            </h1>
                            <h1 className="rotate-90 text-gray-600 text-[85px] xl:text-[100px] font-bold mr-[120px] xl:mr-[130px]">
                                WE SERVE
                            </h1>
                        </div>
                    </div>

                </div>
            </section>
            <section id="dental" className="relative bg-white  rounded-2xl text-black w-[90%] ml-[-5%] shadow-purple-custom2 py-10 my-20 pl-8 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    <div className="w-full md:w-1/2">
                        <Image
                            src={Dental}
                            alt="Dental Clinic"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mx-10 mt-6 flex flex-col md:mt-0 md:ml-8  text-zinc-800">
                        <h2 className="text-4xl font-bold mb-6 mr-10 text-purple-600">Boost Your Dental Clinic&apos;s Visibility</h2>
                        <p className="text-[17px] leading-relaxed mb-6 mr-10">
                            At <strong>Bixeltek</strong>, we specialize in digital marketing strategies that help
                            dental clinics attract more patients, enhance their online presence, and grow their
                            practice. From SEO to social media campaigns, we tailor solutions to fit your unique
                            needs.
                        </p>
                        <ul className="space-y-12 mt-10">

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-100 text-purple-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiLineChartLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-purple-700 transition-colors">
                                        SEO Optimization
                                    </h3>
                                    <p className="text-gray-700 text-sm tracking-wide xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Rank higher in local searches and attract more patients.
                                    </p>
                                </div>
                            </li>


                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-100 text-purple-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiInstagramLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-purple-700 transition-colors">
                                        Social Media Campaigns
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Engage with your audience on Instagram, Facebook, and more.
                                    </p>
                                </div>
                            </li>


                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-100 text-purple-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiCalendarEventLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-purple-700 transition-colors">
                                        Appointment Booking
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Streamline patient scheduling with integrated solutions.
                                    </p>
                                </div>
                            </li>


                            <li className="flex items-center group">
                                <div className="flex items-center  justify-center bg-gray-100 text-purple-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiHeart2Line className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-semibold tracking-widest group-hover:text-purple-700 transition-colors">
                                        Reputation Management
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Build trust with positive reviews and patient testimonials.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <button className="mt-16 bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition">
                            Learn More
                        </button>
                    </div>

                </div>
            </section>
            <section id="roof" className="relative bg-white rounded-l-2xl text-black w-[90%] ml-[10%] shadow-purple-custom2 py-10 my-10 pr-6 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Content Section */}
                    <div className="w-full md:w-1/2 mx-10 mt-6 flex flex-col md:mt-0 md:ml-8 text-zinc-800">
                        <h2 className="text-4xl font-bold mb-6 text-orange-600">Elevate Your Roofing Business</h2>
                        <p className="text-[17px] leading-relaxed mb-6">
                            At <strong>Bixeltek</strong>, we specialize in digital marketing solutions tailored for roofing companies.
                            Boost your online presence, attract more leads, and grow your business with strategies designed for your unique needs.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-12 mt-10">
                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-100 text-orange-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiLineChartLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-orange-700 transition-colors">
                                        SEO Optimization
                                    </h3>
                                    <p className="text-gray-700 text-sm tracking-wide xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Rank higher in local searches and attract more clients in need of roofing services.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-100 text-orange-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiInstagramLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-orange-700 transition-colors">
                                        Social Media Campaigns
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Showcase your roofing projects on platforms like Instagram and Facebook.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-100 text-orange-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiCalendarEventLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-orange-700 transition-colors">
                                        Lead Management
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Capture and manage roofing inquiries with ease using integrated tools.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-100 text-orange-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiHeart2Line className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-semibold tracking-widest group-hover:text-orange-700 transition-colors">
                                        Reputation Building
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Strengthen your brand with positive client reviews and testimonials.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <button className="mt-16 bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition">
                            Learn More
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={roof}
                            alt="Roofing Services"
                            className="rounded-xl overflow-hidden"
                        />
                    </div>
                </div>
            </section>
            <section id="lawn" className="relative bg-white rounded-2xl text-black w-[90%] ml-[-5%] shadow-green-200 py-10 my-20 pl-8 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src={lawn} // Replace with the actual lawn care image URL or import
                            alt="Lawn and Cleaning Services"
                            className="rounded-xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 mx-10 mt-6 flex flex-col md:mt-0 md:ml-8 text-zinc-800">
                        <h2 className="text-4xl font-bold mb-6 mr-10 text-green-700">Transform Your Lawn and Cleaning Business</h2>
                        <p className="text-[17px] leading-relaxed mb-6 mr-10">
                            At <strong>Bixeltek</strong>, we craft tailored digital marketing strategies to help lawn care
                            and cleaning companies grow their client base, enhance their online visibility,
                            and increase bookings. From local SEO to engaging social campaigns, we bring you closer to your customers.
                        </p>

                        {/* Features Section */}
                        <ul className="space-y-12 mt-10">

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-green-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiLineChartLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-green-700 transition-colors">
                                        Local SEO
                                    </h3>
                                    <p className="text-gray-700 text-sm tracking-wide xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Appear in local searches and attract more homeowners in your area.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-green-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiInstagramLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-green-700 transition-colors">
                                        Social Media Marketing
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Share your before-and-after transformations to inspire and engage your audience.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-green-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiCalendarEventLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-green-700 transition-colors">
                                        Online Booking
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Simplify appointment scheduling and manage bookings seamlessly.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-green-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiHeart2Line className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-semibold tracking-widest group-hover:text-green-700 transition-colors">
                                        Client Trust
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-zinc-800 transition-colors">
                                        Build credibility with client testimonials and showcase your expertise.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <button className="mt-16 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
            <section id="car" className="relative bg-gray-100 rounded-l-2xl text-black w-[90%] ml-[10%] shadow-blue-custom py-10 my-10 pr-6 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Content Section */}
                    <div className="w-full md:w-1/2 mx-10 mt-6 flex flex-col md:mt-0 md:ml-8 text-gray-800">
                        <h2 className="text-4xl font-bold mb-6 text-rose-700">Drive Your Automobile Business Forward</h2>
                        <p className="text-[17px] leading-relaxed mb-6">
                            At <strong>Bixeltek</strong>, we offer customized digital marketing solutions for automobile companies. Increase your visibility, attract more customers, and accelerate your business growth with strategies designed for the automotive industry.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-12 mt-10">
                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-rose-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiLineChartLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-rose-700 transition-colors">
                                        SEO Optimization
                                    </h3>
                                    <p className="text-gray-600 text-sm tracking-wide xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Boost your ranking in search engines and drive more traffic to your dealership.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-rose-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiInstagramLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-rose-700 transition-colors">
                                        Social Media Marketing
                                    </h3>
                                    <p className="text-gray-600 tracking-wide text-sm xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Showcase your latest models and offers on Instagram, Facebook, and more.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-rose-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiCalendarEventLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-rose-700 transition-colors">
                                        Lead Management
                                    </h3>
                                    <p className="text-gray-600 tracking-wide text-sm xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Streamline inquiries and manage customer leads effectively.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-gray-200 text-rose-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiHeart2Line className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-semibold tracking-widest group-hover:text-rose-700 transition-colors">
                                        Brand Reputation
                                    </h3>
                                    <p className="text-gray-600 tracking-wide text-sm xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Build trust and credibility with positive customer testimonials.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <button className="mt-16 bg-rose-700 text-white px-6 py-3 rounded hover:bg-rose-800 transition">
                            Learn More
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={car}
                            alt="Automobile Services"
                            className="rounded-xl overflow-hidden"
                        />
                    </div>
                </div>
            </section>

            <section id="health" className="relative bg-blue-50 rounded-2xl text-black w-[90%] ml-[-5%] shadow-blue-200 py-10 my-20 pl-8 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src={doc} // Replace with the actual healthcare image URL or import
                            alt="Healthcare Services"
                            className="rounded-xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 mx-10 mt-6 flex flex-col md:mt-0 md:ml-8 text-gray-800">
                        <h2 className="text-4xl font-bold mb-6 mr-10 text-blue-700">
                            Empowering Healthcare for a Healthier Tomorrow
                        </h2>
                        <p className="text-[17px] leading-relaxed mb-6 mr-10">
                            At <strong>Bixeltek</strong>, we specialize in digital solutions for healthcare providers. Enhance patient engagement, streamline operations, and build trust with innovative marketing strategies tailored to your practice.
                        </p>

                        {/* Features Section */}
                        <ul className="space-y-12 mt-10">

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-blue-100 text-blue-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiLineChartLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-blue-700 transition-colors">
                                        Patient-Centered SEO
                                    </h3>
                                    <p className="text-gray-700 text-sm tracking-wide xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Improve your online presence and help patients find you easily.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-blue-100 text-blue-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiInstagramLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-blue-700 transition-colors">
                                        Social Media Awareness
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Share health tips and build a connection with your community.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-blue-100 text-blue-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiCalendarEventLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-blue-700 transition-colors">
                                        Online Appointments
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Simplify scheduling and provide seamless care to your patients.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center bg-blue-100 text-blue-700 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiHeart2Line className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-semibold tracking-widest group-hover:text-blue-700 transition-colors">
                                        Build Trust
                                    </h3>
                                    <p className="text-gray-700 tracking-wide text-sm xl:text-[16px] group-hover:text-gray-800 transition-colors">
                                        Showcase patient testimonials and your commitment to quality care.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <button className="mt-16 bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
            <section id="clean" className="relative bg-white rounded-l-2xl text-black w-[90%] ml-[10%] shadow-blue-200 py-10 my-10 pr-6 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Content Section */}
                    <div className="w-full md:w-1/2 mx-10 mt-6 flex flex-col md:mt-0 md:ml-8 text-black">
                        <h2 className="text-4xl font-bold mb-6 text-yellow-500">Elevate Your Cleaning Services</h2>
                        <p className="text-[17px] leading-relaxed mb-6">
                            At <strong>Bixeltek</strong>, we empower cleaning companies with targeted marketing strategies.
                            Gain visibility, attract more clients, and establish a lasting impression with our tailored solutions.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-12 mt-10">
                            <li className="flex items-center group">
                                <div className="flex items-center justify-center  text-yellow-500 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiLineChartLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-yellow-500 transition-colors">
                                        SEO Optimization
                                    </h3>
                                    <p className=" text-sm tracking-wide xl:text-[16px] transition-colors">
                                        Increase your visibility on search engines and attract local clients effectively.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center  text-yellow-500 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiInstagramLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-yellow-500 transition-colors">
                                        Social Media Presence
                                    </h3>
                                    <p className=" tracking-wide text-sm xl:text-[16px]  transition-colors">
                                        Highlight your services and success stories to engage your audience effectively.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center  text-yellow-500 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiCalendarEventLine className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg tracking-widest font-semibold group-hover:text-yellow-500 transition-colors">
                                        Online Booking
                                    </h3>
                                    <p className=" tracking-wide text-sm xl:text-[16px]  transition-colors">
                                        Simplify scheduling with an intuitive online booking system.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center group">
                                <div className="flex items-center justify-center  text-yellow-500 p-3 rounded-full shadow-md transition-transform group-hover:scale-110">
                                    <RiHeart2Line className="text-2xl" />
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-semibold tracking-widest group-hover:text-yellow-500 transition-colors">
                                        Client Trust
                                    </h3>
                                    <p className=" tracking-wide text-sm xl:text-[16px]  transition-colors">
                                        Showcase testimonials to build credibility and enhance client trust.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <button className="mt-16 bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition">
                            Learn More
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src={cleaning} // Replace with your cleaning service image
                            alt="Cleaning Services"
                            className="rounded-xl overflow-hidden"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
