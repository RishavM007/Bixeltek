"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FiTarget, FiTrendingUp, FiUsers, FiGlobe } from "react-icons/fi";

const AdsFailureSection = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
        }
    }, [inView, controls]);

    const failures = [
        "Broad match targeting that brings junk traffic",
        "No conversion tracking or funnel",
        "Ads run at wrong times or to wrong locations",
        "Agencies that don’t report, test, or optimize",
    ];

    const solutions = [
        "Precise keyword mapping",
        "High-converting ad copy",
        "Responsive landing pages",
        "Audience-driven bidding",
        "Conversion-focused strategy that scales with your growth",
    ];
    const strategyDetails = [
        {
            icon: <FiTarget size={24} className="text-white" />,
            title: "Precision Keyword Mapping",
            description: "We strategically target high-intent keywords to ensure your ads reach the right audience.",
        },
        {
            icon: <FiTrendingUp size={24} className="text-white" />,
            title: "Data-Driven Performance",
            description: "Our campaigns are continuously optimized based on real-time data and insights.",
        },
        {
            icon: <FiUsers size={24} className="text-white" />,
            title: "Expert-Led Strategy",
            description: "Our in-house team ensures each campaign is tailored to your business needs — no outsourcing.",
        },
        {
            icon: <FiGlobe size={24} className="text-white" />,
            title: "Local Market Focus",
            description: "We customize ad strategies to match Hyderabad’s competitive landscape for better ROI.",
        },
    ];

    return (
        <section ref={ref} className="w-full py-16 bg-white text-black px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="max-w-6xl mx-auto"
            >
                {/* Heading */}
                <h2 className="text-4xl xl:text-5xl font-medium mb-10 text-center font-sofiasanscondensed border-black pb-4">
                    Why Most Google Ads Campaigns Fail — <br /> And What We Do Differently
                </h2>

                {/* Table Layout */}
                <div className="overflow-hidden border border-black rounded-xl">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-black bg-purple-800 text-white">
                                <th className="py-4 md:text-lg font-semibold text-left pl-5">Common Failures</th>
                                <th className="py-4 md:text-lg font-semibold text-left pl-5">Our Process</th>
                            </tr>
                        </thead>
                        <tbody>
                            {failures.map((failure, index) => (
                                <tr key={index} className=" group transition-all">
                                    <td className="py-5 text-black border-b group-hover:border-purple-800 border-black text-left pl-5">
                                        <span className="flex items-center gap-2">
                                            <RxCross2 className="text-red-500 text-xs  md:text-lg" /> {failure}
                                        </span>
                                    </td>
                                    <td className="py-5 text-black border-b border-black group-hover:border-purple-800 text-left pl-5">
                                        <span className="flex items-center gap-2">
                                            <IoCheckmarkOutline className="text-green-500 text-xs md:text-lg" /> {solutions[index]}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Promise Section */}
                <div className="mt-12 p-6 bg-white">
                    {/* Heading */}
                    <h2 className="text-4xl font-sofiasanscondensed capitalize font-semibold mb-4 text-center">
                        This is how we do it differently from other Google Adwords Agency
                    </h2>
                    <p className="mb-6 text-center max-w-5xl mx-auto text-lg">
                        We don&apos;t just run your ads — we engineer them to produce measurable leads and ROI,
                        with complete transparency and a local strategy tailored to Hyderabad&apos;s markets.
                    </p>
                    <p className="mb-6 text-center max-w-5xl mx-auto text-lg">
                        We rebuild campaigns from the ground up with:
                    </p>

                    {/* Two-Column Grid */}
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-20">
                        {/* Left Side - First 2 Items */}
                        <div className="space-y-10">
                            {strategyDetails.slice(0, 2).map((item, index) => (
                                <div key={index} className="flex items-start gap-5">
                                    <div className="bg-purple-500 p-3 rounded-xl">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black">{item.title}</h3>
                                        <p className="mt-2 text-gray-700">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Next 2 Items */}
                        <div className="space-y-10">
                            {strategyDetails.slice(2, 4).map((item, index) => (
                                <div key={index} className="flex items-start gap-5">
                                    <div className="bg-purple-500 p-3 rounded-xl">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black">{item.title}</h3>
                                        <p className="mt-2 text-gray-700">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* CTA */}
                <div className="mt-10 font-sofiasanscondensed tracking-wide text-2xl text-center">
                    <p className="text-xl font-semibold">
                        Our goal? <span className="text-purple-600">Get your business in front of the right people</span> at the right time — and make every rupee you spend count.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default AdsFailureSection;
