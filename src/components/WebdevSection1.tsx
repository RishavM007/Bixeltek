'use client';
import React from "react";
import { motion } from "framer-motion";
import { PiHouseLine } from "react-icons/pi";
import { LuHospital } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GoRocket } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa6";

const industries = [
    {
        title: "Real Estate Web Design and Development",
        description:
            "Custom websites for real estate agents and builders — built to showcase listings, attract local buyers, and drive inquiries. Includes SEO, map sections, and high-performing lead-gen forms.",
        icon: <PiHouseLine className="text-purple-800 text-3xl" />,
    },
    {
        title: "Clinics, Dentists & Healthcare Brands",
        description:
            "Websites built to rank locally, showcase services clearly, and drive appointment bookings.",
        icon: <LuHospital className="text-purple-800 text-3xl" />,
    },
    {
        title: "Ecommerce & D2C Brands",
        description:
            "Fast-loading, mobile-first WooCommerce websites optimized for conversion and repeat sales.",
        icon: <RiShoppingCart2Line className="text-purple-800 text-3xl" />,
    },
    {
        title: "Local Services (Laundry, Bike Repair, Tree Removal, etc.)",
        description:
            "Google Maps integration + local SEO to show up in 'near me' searches and get more calls.",
        icon: <IoLocationOutline className="text-purple-800 text-3xl" />,
    },
    {
        title: "Startups & SaaS Products",
        description:
            "Landing pages, waitlists, MVPs — built fast, flexible, and ready to scale with your product roadmap.",
        icon: <GoRocket className="text-purple-800 text-3xl" />,
    },
    {
        title: "Marketing Agencies",
        description:
            "White-label builds with pixel-perfect dev, silent delivery, and real deadlines met.",
        icon: <FaRegChartBar className="text-purple-800 text-3xl" />,
    },
];

const IndustrySolutions = () => {
    return (
        <section className="bg-white max-w-[95%] md:max-w-[85%] py-20 mx-auto font-roboto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="py-12 px-6 mx-auto max-w-screen-xl"
            >
                <h2 className="mb-4 font-sofiasanscondensed text-center text-3xl md:text-5xl max-w-[100%] md:max-w-[80%] mx-auto font-extrabold text-black">
                    From Real Estate Web Design in Hyderabad to Clinic Platforms —{" "}<br />
                    <span className="text-primary-100">
                        We Build for Your Industry
                    </span>
                </h2>
                <p className="mb-8 text-gray-900 text-sm md:text-base text-center max-w-[95$] md:max-w-[85%] mx-auto ">
                    Whether you&apos;re a founder, a franchise, or a family-run local service — your business needs a website that gets discovered, delivers value, and drives real results.
                    At <span className="font-semibold text-primary-600 dark:text-primary-300">Bixeltek</span>, we specialize in industry-specific website solutions that speak your audience’s language and solve their exact problems.
                </p>

                <div className="grid gap-4 md:gap-8 sm:grid-cols-1 lg:grid-cols-3">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start md:items-start py-6 pr-6  rounded-lg "
                        >
                            <div className="mb-4 p-2 bg-purple-300 border border-purple-300 rounded-xl ">{industry.icon}</div>
                            <h3 className="mb-2 mt-1 text-left text-xl font-bold text-black">
                                {industry.title}
                            </h3>
                            <p className="text-gray-900 text-left md:text-left ">
                                {industry.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="max-w-[95%] md:max-w-[80%] flex flex-col font-sofiasanscondensed justify-center items-center mx-auto">
                    <p className="mt-12 text-2xl text-center  text-gray-900 trackinw-g-wide font-semibold">
                        Looking for real estate websites in Hyderabad that actually bring in leads? Or a local business website that ranks for “near me” searches?
                    </p>
                    <p className="mt-2 italic text-purple-700  text-xl text-center tracking-wide font-semibold">
                        We&apos;ve built them — and we can build yours next.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default IndustrySolutions;
