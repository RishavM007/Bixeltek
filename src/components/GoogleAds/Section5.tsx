// components/BiddingStrategies.jsx
'use client';
import { FaRobot, FaHandPointer, FaChartLine, FaRocket, FaSyncAlt } from 'react-icons/fa';
import { motion } from "framer-motion"

const BiddingStrategies = () => {
    const strategies = [
        {
            icon: <FaHandPointer className="text-2xl" />,
            title: "Manual CPC",
            description: "Controlled bidding for testing & granular optimization"
        },
        {
            icon: <FaChartLine className="text-2xl" />,
            title: "Target CPA",
            description: "Consistent lead acquisition at predictable costs"
        },
        {
            icon: <FaRocket className="text-2xl" />,
            title: "Target ROAS",
            description: "Perfect for scaling eCommerce & SaaS campaigns profitably"
        },
        {
            icon: <FaSyncAlt className="text-2xl" />,
            title: "Maximize Conversions",
            description: "Fast growth mode for aggressive scaling"
        }
    ];

    return (
        <section className="py-5 md:py-16 px-4 bg-[#131313]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-6xl text-white text-center max-w-4xl mx-auto font-bold font-inter mb-6">
                    <span className='text-blue-500'>AI Meets Human </span>Expertise in Bidding Strategies
                </h2>

                <p className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-12">
                    Google&apos;s algorithms are powerful, but they don&apos;t understand your margins, seasonality, or competitive realities.
                    That&apos;s why blind automation = wasted spend.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {strategies.map((strategy, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-xl border-2 border-blue-700"
                                animate={{
                                    borderColor: [
                                        "rgba(29, 78, 216, 0.2)",
                                        "rgba(29, 78, 216, 0.6)",
                                        "rgba(29, 78, 216, 0.2)",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Icon container */}
                            <div className="relative z-10 bg-blue-100 p-4 rounded-full mb-4 shadow-md">
                                {strategy.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-xl font-semibold text-white mb-2">
                                {strategy.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400">{strategy.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-transparent rounded-xl p-8 ">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <h3 className="text-2xl font-bold text-center text-white">The Bixeltek Difference</h3>
                        <p className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-12 mt-5">
                            We don&apos;t &quot;set and forget.&quot; We analyze search terms, layer audience insights, and adjust bids dynamically.
                            This ensures your campaigns work smarter — not harder.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BiddingStrategies;