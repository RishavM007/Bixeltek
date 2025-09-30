"use client";

import React from 'react';

export default function SEOCampaignsMississauga() {

    const campaigns = [
        {
            title: 'Local SEO Campaigns',
            description: 'Ideal for clinics, home services, and neighborhood stores in Mississauga. We optimize maps, citations, and local keywords to bring more walk-ins and phone calls.',
        },
        {
            title: 'National SEO',
            description: 'Expand your reach across Canada by targeting broader search terms, building authoritative backlinks, and increasing brand credibility nationwide for long-term visibility and trust.',
        },
        {
            title: 'Ecommerce SEO',
            description: 'Boost your product visibility and category page rankings. We optimize product descriptions, technical structure, and conversion flow to maximize sales and organic revenue growth.',
        },
        {
            title: 'Enterprise SEO',
            description: 'Designed for large businesses managing multiple locations or thousands of pages. Our scalable strategies strengthen visibility, streamline indexing, and sustain competitive advantage online.',
        },
        {
            title: 'AI SEO',
            description: 'Stay ahead of competitors by appearing in AI-driven search results and large language model recommendations, ensuring your brand remains discoverable in the new search era.',
        },
        {
            title: 'Technical SEO',
            description: 'From site speed to structured data, we fix backend issues that block rankings. A technically sound website improves crawlability, user experience, and overall search performance.',
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
                        Tailored SEO Campaigns for <br /> 
                        <span className='text-blue-500'>Mississauga Businesses</span>
                    </h2>
                    <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto'>
                        Different businesses require different SEO approaches. We customize campaigns based on your industry, competition, and growth goals to deliver measurable results that last.
                    </p>
                </div>

                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
                    {campaigns.map((campaign, index) => (
                        <div
                            key={index}
                            className={`relative w-full h-80 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14`}
                        >
                            <h3 className="text-white text-2xl font-bold text-center mb-2">{campaign.title}</h3>
                            <p className="text-gray-300 text-sm text-center">{campaign.description}</p>

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
                            {(index % 4 === 3 || index === 5) && (
                                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <div className="max-w-3xl mx-auto text-center mt-12">
                    <p className="text-gray-100 text-lg md:text-xl font-medium">
                        Whatever your size or industry, our SEO campaigns are designed to bring visibility, credibility, and long-term ROI.
                    </p>
                </div>
            </div>
        </section>
    );
}
