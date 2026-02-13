import Link from 'next/link';
import React from 'react'

const GaCTA1 = () => {
    return(
        <section className="pb-20 lg:px-4">
                        <div className="max-w-[90%] lg:max-w-[85%] mx-auto mt-10 flex flex-col md:flex-row gap-6">
        
                            {/* Left: 70% - Main Message */}
                            <div className="bg-gradient-to-t from-[#140d21] to-[#7028e4] text-white p-10 rounded-2xl w-full md:w-[70%] text-center md:text-left">
                                <h2 className="text-3xl font-sofiasanscondensed md:text-3xl xl:text-5xl font-bold">
                                    You&apos;re Spending on Google Ads. But Are You Really Getting Results?
                                </h2>
        
                                <p className="mt-6 text-sm md:text-lg xl:text-lg leading-7 max-w-3xl mx-auto md:mx-0">
                                    Most businesses in Hyderabad waste <span className="font-bold">30–50%</span> of their Google Ads budget. Why? Poor targeting. Generic copy. No funnel. Or agencies who ‘set and forget’.
                                    At <span className="text-purple-200 font-bold">Bixeltek</span>, we fix all that and make every click count.
                                </p>
                            </div>
        
                            {/* Right: 30% - CTA */}
                            <div className="bg-[#FFC300] text-white p-8 rounded-2xl w-full md:w-[30%] flex flex-col items-center justify-center text-center">
                                <h3 className="text-2xl xl:text-3xl text-gray-800 font-sofiasanscondensed md:text-4xl font-bold mb-4">
                                    Get a Free Google Ads Audit
                                </h3>
                                <Link href={'/contact-us'}>
                                    <button className="bg-transparent transition px-6 py-3 rounded-lg text-gray-800 hover:text-black font-semibold text-sm md:text-lg">
                                        Find the Leaks in Your Campaign →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
    )

}
export default GaCTA1;  