import Link from 'next/link';
import React from 'react'
import {
    FiUsers,
    FiMapPin,
    FiBarChart,
    FiTarget,
    FiDollarSign,
    FiTrendingUp,
    FiSearch,
    FiGlobe,
    FiMonitor
} from "react-icons/fi";


const GaWorkWithUs = () => {
    return(
        <section className=" max-w-[90%] lg:max-w-6xl mx-auto pb-20 mt-20">
                {/* Heading */}
                <h2 className="text-2xl font-sofiasanscondensed font-bold text-black text-center mb-1 md:text-5xl">
                    What You Get When You Work With Us
                </h2>
                <h2 className="text-3xl font-sofiasanscondensed capitalize font-bold text-black text-center mb-14 md:text-4xl">
                    We are A certified <Link href={'https://www.google.com/partners/agency?id=2188074075'} className='text-purple-700 '>Google Partner Agency</Link>
                </h2>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10 text-gray-700">

                    {/* Feature 1 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiUsers size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">In-House Google Ads Specialists</h3>
                            <p className="mt-2 leading-relaxed">
                                No freelancers, no outsourcing. Our expert team ensures precision in every campaign.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiMapPin size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Local Audience & Geo Targeting</h3>
                            <p className="mt-2 leading-relaxed">
                                We understand Hyderabad&apos;s buyer behavior—down to the pin code level.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiBarChart size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Transparent Weekly Reporting</h3>
                            <p className="mt-2 leading-relaxed">
                                Get real-time insights on performance—know exactly what&apos;s working.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiTarget size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Landing Page & Conversion Optimization</h3>
                            <p className="mt-2 leading-relaxed">
                                We don&apos;t stop at ads—we optimize your landing pages for higher conversions.
                            </p>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiDollarSign size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Budget-Efficient Bidding Strategy</h3>
                            <p className="mt-2 leading-relaxed">
                                Every rupee counts. We fine-tune your budget for maximum ROI.
                            </p>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiTrendingUp size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Industry-Specific Funnel Execution</h3>
                            <p className="mt-2 leading-relaxed">
                                We craft unique ad funnels—because a plumber’s strategy isn’t the same as SaaS.
                            </p>
                        </div>
                    </div>

                    {/* Feature 7 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiSearch size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Competitive Benchmarking</h3>
                            <p className="mt-2 leading-relaxed">
                                We analyze competitors and find gaps to position your business strategically.
                            </p>
                        </div>
                    </div>

                    {/* Feature 8 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiGlobe size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Market Research & Insights</h3>
                            <p className="mt-2 leading-relaxed">
                                Get in-depth research on industry trends and market demand.
                            </p>
                        </div>
                    </div>

                    {/* Feature 9 */}
                    <div className="flex items-start gap-5">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiMonitor size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-black">Monthly Growth Strategy Sessions</h3>
                            <p className="mt-2 leading-relaxed">
                                We review performance, adjust tactics, and keep you ahead of the competition.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
    )
}

    export default GaWorkWithUs 