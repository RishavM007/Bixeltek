"use client";

import React from 'react';

export default function GoogleAdsServicesSectionToronto() {

    const googleAdsServices = [
        {
            title: 'Comprehensive Account Setup',
            description: 'From keyword research and competitor analysis to campaign structuring and ad group creation, we design campaigns to target your exact audience in Toronto.',
        },
        {
            title: 'Expert Ad Copywriting',
            description: 'We craft compelling ads that resonate with your Toronto customers and highlight your unique selling points.',
        },
        {
            title: 'Landing Page Optimization',
            description: 'Drive conversions with custom landing pages designed for clear calls-to-action and local trust signals.',
        },
        {
            title: 'Conversion Tracking & Analytics',
            description: 'Implement full tracking for calls, form submissions, sales, and more, with transparent, real-time reporting.',
        },
        {
            title: 'Budget Management & Bidding',
            description: 'Daily bid management to maximize ROI; no wasted spend.',
        },
        {
            title: 'Remarketing & Display Campaigns',
            description: 'Capture and convert visitors who didn’t convert the first time with strategic retargeting.',
        },
        {
            title: 'Ongoing Optimization',
            description: 'Continuous A/B testing, negative keyword refinement, and campaign adjustments to keep performance improving.',
        },
    ];

    return (
        <section className='relative py-24'>
            {/* Background Blobs */}
            <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

            <div>
                {/* Section Heading */}
                <div className=' max-w-[80%] mx-auto mb-5 text-center'>
                    <h2 className='text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold '>
                        At Bixeltek, We Specialize in<br></br> <span className='text-blue-500'>Making Your Ad Spend Work Smarter</span>
                    </h2>
                    <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto'>
                        Our Google Ads Management service in Toronto delivers full-cycle PPC management, tailored to your business goals and local market dynamics. We handle all the complexities so you can focus on growing your business and closing leads.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
                    {googleAdsServices.map((service, index) => (
                        <div
                            key={index}
                            className={`relative w-full h-80 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-16`}
                        >
                            <h3 className="text-white text-2xl font-bold text-center mb-2">{service.title}</h3>
                            <p className="text-gray-300 text-sm text-center">{service.description}</p>

                            {/* Decorative Plus Icons */}
                            {index % 4 === 0 && (
                                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                            {(index % 4 === 1 || index === 0 || index === 2) && (
                                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                            {(index % 4 === 2 || index === 0 || index === 3) && (
                                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                            {(index % 4 === 3 || index === 5 || index === 6 || index === 8) && (
                                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
