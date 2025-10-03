import React from "react";
import Image from "next/image";
import doctorImage from "@/assets/dentist-examining-patient-s-teeth.jpg"; // replace with your actual image
import icon from "@/assets/feature-security-seo-svgrepo-com.png";
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

                {/* 2 Columns */}
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Left Column - Image */}
                    <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={doctorImage}
                            alt="Doctor"
                            className="w-full h-full object-cover"
                        />                        
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full md:w-1/2">
                        {/* Years of Experience */}
                       

                        {/* Icon & Challenges */}
                        <div className="w-16 h-16 mb-4 p-2 bg-blue-100 flex items-center justify-center rounded-md">
                            <Image src={icon} alt="icon" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            The Challenges Your Practice Faces
                        </h3>

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
                            <li>
                                The result? Your phones stay quiet, while competitors capture
                                patients actively searching for the treatments you provide.
                            </li>
                        </ul>

                        <Link href={"tel:+9191000323011"}>
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
