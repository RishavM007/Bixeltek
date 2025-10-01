"use client";

import React from 'react';

export default function SEOcategoryServicesToronto() {

const seoServices = [
    {
        title: 'SEO Audits',
        description: 'Conduct thorough technical, on-page, off-page, and AI readiness audits to identify issues, uncover opportunities, and optimize your website for maximum organic search performance.',
    },
    {
        title: 'Keyword Strategy',
        description: 'Develop a targeted keyword strategy focusing on profitable, intent-driven, and local search terms to attract high-quality traffic and drive measurable results for Toronto businesses.',
    },
    {
        title: 'On-Page SEO',
        description: 'Optimize metadata, headings, schema markup, internal linking, and page content to ensure higher rankings, better crawlability, and enhanced search engine visibility across relevant queries.',
    },
    {
        title: 'Content Development',
        description: 'Create high-quality blogs, service pages, and topical clusters that establish authority, improve search engine rankings, and provide value to visitors while supporting long-term SEO goals.',
    },
    {
        title: 'Local SEO Toronto',
        description: 'Optimize Google Business Profile, local citations, and maps visibility to dominate Toronto search results, increase local traffic, and attract ready-to-buy customers in your area.',
    },
    {
        title: 'Ecommerce SEO',
        description: 'Optimize product pages, categories, structured data, and navigation to enhance visibility, drive conversions, and improve organic traffic for online stores and ecommerce platforms.',
    },
    {
        title: 'AI SEO Services',
        description: 'Implement advanced AI-driven SEO strategies to ensure your brand is recognized by Gemini, ChatGPT, and other emerging AI-powered search engines for long-term visibility.',
    },
    {
        title: 'Link Building',
        description: 'Execute white-hat link building campaigns and digital PR strategies that strengthen your website’s authority, improve trustworthiness, and boost search engine rankings over time.',
    },
    {
        title: 'Technical SEO',
        description: 'Enhance site speed, mobile responsiveness, crawlability, security, and structured data implementation to ensure optimal performance, better user experience, and improved search engine rankings.',
    },
];


    return (
        <section className='relative py-14 md:py-24'>
            {/* Background Blobs */}
            <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

            <div>
                {/* Section Heading */}
                <div className=' max-w-[80%] mx-auto mb-5 text-center'>
                    <h2 className='text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold '>
                        Our <span className='text-blue-500'>SEO Services</span> in Toronto
                    </h2>
                    <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto'>
                        Bixeltek delivers end-to-end SEO solutions designed for Toronto businesses and brands across Canada. Our strategies combine proven fundamentals with emerging AI SEO methods to deliver sustainable results.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
                    {seoServices.map((service, index) => (
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
