import React from "react";
import { FaChartLine, FaChartPie, FaChartBar } from "react-icons/fa";

const GaGlimpse = () => {
    return(
        <section>
                <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Proven Success: Over $2 Million In Revenue Generated For Clients</h2>
                            <p className="text-lg md:text-xl text-gray-600">Numbers That Speak Louder Than Words</p>
                        </div>

                        <p className="text-center text-sm md:text-lg text-gray-700 mb-12">
                            We believe in results that matter. Here is a glimpse of how we have empowered our clients to achieve measurable success.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartLine className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">150%</h3>
                                <p className="text-gray-600">Increase in CTR for e-commerce campaigns, driving targeted traffic that converts.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartBar className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">200%</h3>
                                <p className="text-gray-600">Average ROI growth across all managed campaigns.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartLine className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">40%</h3>
                                <p className="text-gray-600">Reduction in CPC while maintaining ad effectiveness.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartPie className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
                                <p className="text-gray-600">Boost in conversions in just 90 days for a leading retail client.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default GaGlimpse;