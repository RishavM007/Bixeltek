"use client";

import React from 'react';

export default function DigitalMarketingServicesMississauga() {

    const services = [
        {
            title: 'Google Ads Management',
            description: 'Ad budgets are wasted when campaigns aren’t set up right. We create and optimize Google Ads campaigns targeting Mississauga customers to drive more leads at lower cost.',
        },
        {
            title: 'SEO Services',
            description: 'If you don’t appear in Google results, you’re invisible. Our SEO boosts local and national rankings, generating consistent organic traffic and qualified leads.',
        },
        {
            title: 'Web Design & Development',
            description: 'An outdated website hurts credibility. We build modern, mobile-first, SEO-ready websites that strengthen your brand and convert visitors into customers effectively.',
        },
        {
            title: 'Social Media Marketing',
            description: 'Low engagement weakens your brand. We create campaigns and content that increase visibility, grow your following, and drive meaningful engagement for your business.',
        },
        {
            title: 'Analytics & CRO',
            description: 'Without tracking, you’re guessing. We implement full analytics and conversion rate optimization, providing actionable insights to maximize ROI and improve marketing performance.',
        },
        {
            title: 'Graphic Design & Branding',
            description: 'Weak branding creates confusion. Our team crafts consistent, impactful logos, creatives, and brand assets that make your business stand out in Mississauga’s competitive market.',
        },
    ];

    return (
        <section className='relative py-24'>
            {/* Background Blobs */}
            <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

            <div>
                {/* Section Heading */}
                <div className='max-w-[80%] mx-auto mb-5 text-center'>
                    <h2 className='text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold '>
                        Digital Marketing Services That Solve <br /> <span className='text-blue-500'>Real Business Problems</span>
                    </h2>
                    <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto'>
                        Bixeltek offers a complete range of digital marketing services for Mississauga businesses, each designed to solve a problem and deliver measurable ROI.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
                    {services.map((service, index) => (
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
