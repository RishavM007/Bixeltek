"use client";
import { useState } from "react";
import { Monitor, Search, Layout, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import googleadsdashboard from '@/assets/google-ads-dentists-reporting-dashboard.webp'
import laptopmockup from '@/assets/laptop dentist 2.png'
import seoimg from '@/assets/Delmain-dental-seo-case-study.webp'
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        id: "google-ads",
        title: "Google Ads Management",
        icon: <Monitor className="w-5 h-5 mr-2" />,
        image: googleadsdashboard,
        content: (
            <>
                <h3 className="text-3xl md:text-5xl font-semibold mb-3">Google Ads Management</h3>
                <p className="text-gray-600 mt-5">
                    We craft high-performing campaigns for treatments like veneers,
                    Invisalign, and emergency dental care. Every dollar is optimized to
                    generate phone calls and bookings.
                </p>
                <div className="flex gap-5">
                    <Link href={'/services/google-ads'}>
                        <button className="inline-block border mt-5 border-blue-700 bg-blue-700 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-900  transition">
                            Discover More
                        </button>
                    </Link>
                    <Link href={'/contact-us'}>
                        <button className="inline-block border mt-5 border-blue-700 text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition">
                            Get A Free Quote
                        </button>
                    </Link>

                </div>
            </>
        ),
    },
    {
        id: "seo",
        title: "SEO for Dentists",
        icon: <Search className="w-5 h-5 mr-2" />,
        image: seoimg,
        content: (
            <>
                <h3 className="text-3xl md:text-5xl  font-semibold mb-3">SEO for Dentists</h3>
                <p className="text-gray-600 mt-5">
                    Rank locally for the treatments your patients are searching for. Drive
                    consistent organic traffic that converts into appointments.
                </p>
                <div className="flex gap-5">
                    <Link href={'/services/seo-services'}>
                        <button className="inline-block border mt-5 border-blue-700 bg-blue-700 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-900  transition">
                            Discover More
                        </button>
                    </Link>
                    <Link href={'/contact-us'}>
                        <button className="inline-block border mt-5 border-blue-700 text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition">
                            Get A Free Quote
                        </button>
                    </Link>

                </div>
            </>
        ),
    },
    {
        id: "web-design",
        title: "Web Design & Conversion Optimization",
        icon: <Layout className="w-5 h-5 mr-2" />,
        image: laptopmockup,
        content: (
            <>
                <h3 className="text-3xl md:text-5xl text-left font-semibold mb-3">
                    Web Design & Conversion Optimization
                </h3>
                <p className="text-gray-600 mt-5">
                    We build responsive, fast-loading websites that act as
                    patient-conversion machines—turning clicks into phone calls with clear,
                    compelling messaging.
                </p>
                <div className="flex gap-5">
                    <Link href={'/services/web-design'}>
                        <button className="inline-block border mt-5 border-blue-700 bg-blue-700 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-900  transition">
                            Discover More
                        </button>
                    </Link>
                    <Link href={'/contact-us'}>
                        <button className="inline-block border mt-5 border-blue-700 text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition">
                            Get A Free Quote
                        </button>
                    </Link>

                </div>

            </>
        ),
    },
    {
        id: "social-media",
        title: "Social Media Marketing",
        icon: <Share2 className="w-5 h-5 mr-2" />,
        image: googleadsdashboard,
        content: (
            <>
                <h3 className="text-3xl md:text-5xl font-semibold mb-3">Social Media Marketing</h3>
                <p className="text-gray-600 mt-5">
                    Meta and Instagram campaigns that build awareness, generate leads, and
                    drive patients to your practice month after month.
                </p>
                <div className="flex gap-5">
                    <Link href={'/social-media-marketing-hyderabad'}>
                        <button className="inline-block border mt-5 border-blue-700 bg-blue-700 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-900  transition">
                            Discover More
                        </button>
                    </Link>
                    <Link href={'/contact-us'}>
                        <button className="inline-block border mt-5 border-blue-700 text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition">
                            Get A Free Quote
                        </button>
                    </Link>

                </div>
            </>
        ),
    },
];

export default function DentalServicesTabs() {
    const [activeTab, setActiveTab] = useState("google-ads");

    const activeService = services.find((s) => s.id === activeTab);

    return (
        <section className="pt-32 pb-20 bg-gray-50 flex flex-col justify-center items-center ">
            <h3 className="text-blue-600 font-semibold uppercase tracking-wide">
                Empowering Dental Clinics With Proven Growth Strategies
            </h3>
            <h2 className="text-3xl text-center md:text-6xl max-w-7xl font-bold mt-2 mb-14 text-black">
                Our Services Designed for <br></br> Dental Clinics
            </h2>

            {/* Tabs */}
            <div className="flex flex-col md:grid md:grid-cols-2  lg:flex lg:flex-row justify-center  px-4 gap-4 mb-8">
                {services.map((service) => (
                    <motion.button
                        key={service.id}
                        onClick={() => setActiveTab(service.id)}
                        whileTap={{ scale: 1.0 }}
                        whileHover={{ scale: 1.01 }}
                        className={`relative flex-1 min-w-[120px] flex items-center rounded-lg font-medium transition
        ${activeTab === service.id
                                ? "bg-blue-700 text-white shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {/* Icon container */}
                        <span
                            className={`flex items-center justify-center pr-3 pl-5 py-[22px] rounded-l-lg border-r-2 border-white 
          ${activeTab === service.id
                                    ? "bg-blue-900 text-white"
                                    : "bg-gray-50 text-blue-500 group-hover:bg-blue-500"
                                }`}
                        >
                            {service.icon}
                        </span>

                        {/* Text */}
                        <span className="px-4 font-inter tracking-wide py-2 text-center">
                            {service.title}
                        </span>

                        {/* Arrow */}
                        {activeTab === service.id && (
                            <motion.span
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-1/2 -bottom-2 -translate-x-1/2 
            w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] 
            border-transparent border-t-blue-700 z-10"
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto mt-7 bg-gray-50 p-8 border border-gray-300 rounded-xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService?.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 gap-8 items-center"
                    >
                        {/* Image */}
                        <div>
                            <Image
                                src={activeService?.image || ""}
                                alt={activeTab}
                                className="rounded-xl w-full h-[200px] md:h-[400px] object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div>{activeService?.content}</div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
