import React from "react";

const GaHowItWorks = () => {
    return(
         <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-gray-700">How It Works</p>
                        <h2 className="mt-6 text-3xl font-semibold font-sofiasanscondensed tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Optimize Your Google Ads in <span className='text-purple-700'>4 Simple Steps</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
                            Maximize your ad performance with our streamlined  4-step process.
                        </p>
                    </div>
                    <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-7xl lg:grid-cols-4">
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-database text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Free Audit & Consultation</h2>
                                <h4 className="mt-2 text-base text-gray-700">We analyze your current campaigns to identify key improvement areas, optimizing ad performance and budget efficiency.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-map text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Custom Strategy Development</h2>
                                <h4 className="mt-2 text-base text-gray-700"> We craft a tailored Google Ads strategy, including audience targeting, ad copywriting, and budget allocation.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <span className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]" aria-hidden="true"></span>
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-globe text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Campaign Launch & Optimization</h2>
                                <h4 className="mt-2 text-base text-gray-700"> We launch and monitor your ads, making real-time adjustments through A/B testing, audience refinement, and bid optimization.</h4>
                            </div>
                        </li>
                        <li className="flex-start group relative flex lg:flex-col">
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-purple-800 group-hover:bg-purple-800">
                                <i className="fas fa-rocket text-purple-800 group-hover:text-white"></i>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h2 className="text-xl font-bold text-gray-900">Performance Tracking & Reporting</h2>
                                <h4 className="mt-2 text-base text-gray-700">Get clear, data-driven insights with detailed reports on conversions, click-through rates, and overall effectiveness.</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
    )
}

export default GaHowItWorks;