import React from "react";
import Image from "next/image";
import doctorImage from "@/assets/video-img.png"; // replace with your actual image
import icon from '@/assets/feature-security-seo-svgrepo-com.png'
import { LiaStarOfLifeSolid } from "react-icons/lia";
import Link from "next/link";

export default function ExperienceSection() {
    return (
        <section className="relative py-36 bg-gray-50">
            <div className="w-full md:max-w-7xl mx-auto px-6">
                {/* Top Title + Subheading */}
                <div className="text-center mb-5 md:mb-16 flex flex-col gap-5">
                    <h3 className="text-blue-600 font-semibold uppercase tracking-wide">
                        Helping Patients From Around the Globe!!
                    </h3>
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
                        Why Dental Clinics Struggle to <br /> Attract Patients
                    </h2>
                </div>

                {/* Bottom 3 Columns */}
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Left Column */}
                    <div className="text-center w-full md:w-[25%] md:text-left">
                        <h1 className="text-[90px] md:text-[120px] font-bold text-blue-900">
                            10
                            <span className="relative -top-16 text-red-500 text-5xl">+</span>
                        </h1>

                        <h3 className="text-lg font-bold mt-4">YEARS OF EXPERIENCE</h3>
                        <p className="text-gray-600 mt-3">
                            Even the best dental care goes unnoticed without the right marketing.
                        </p>
                        <Link href={'/contact-us'}>
                        <button className="mt-6 inline-block border bg-blue-600 border-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition">
                            Get A Free Quote
                        </button>
                        </Link>
                    </div>

                    {/* Middle Column (Image with gradient overlay) */}
                    <div className="relative w-full md:w-[30%] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={doctorImage}
                            alt="Doctor"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-900/70 via-blue-800/30 to-transparent" />
                        {/* Video button example */}
                        <div className="absolute bottom-5 left-5 flex items-center text-white font-semibold cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6 mr-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407L10 8.972 6.79 5.093z" />
                            </svg>
                            Watch Our Video
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-[45%]">
                        {/* Main Icon */}
                        <div className="w-16 h-16 mb-4 p-2 bg-blue-100 flex items-center justify-center rounded-md">
                            <Image src={icon} alt="icon" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-4">
                            The Challenges Your Practice Faces
                        </h3>

                        {/* Icon list points */}
                        <ul className="mb-6 space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <LiaStarOfLifeSolid className="text-blue-700 mt-1 mr-2" />
                                Websites that don’t convert traffic into calls.
                            </li>
                            <li className="flex items-start">
                                <LiaStarOfLifeSolid className="text-blue-700 mt-1 mr-2" />
                                Ad campaigns that burn through budgets without results.
                            </li>
                            <li className="flex items-start">
                                <LiaStarOfLifeSolid className="text-blue-700 mt-1 mr-2" />
                                No clear strategy to consistently generate patient inquiries.
                            </li>
                            <li className="flex items-start">
                                <LiaStarOfLifeSolid className="text-blue-700 mt-1 mr-2" />
                                Marketing agencies that don’t understand dentistry.
                            </li>
                            <li className="flex items-start">
                            
                                The result? Your phones stay quiet, while competitors capture patients actively searching for the treatments you provide.
                            </li>
                        </ul>

                        {/* Button */}
                        <Link href={'tel:+9191000323011'}>
                        <button className="inline-block border border-blue-600 text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition">
                            Call Us Right Now
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
