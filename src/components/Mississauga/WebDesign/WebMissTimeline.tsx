"use client";

import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Discovery & Research',
        text: "We start by understanding your business goals, target audience, and competitors. This research lays the foundation for a website that resonates with your customers and outperforms competitors.",
        gradient: 'from-blue-500 via-blue-400 to-black',
        color: 'text-blue-500',
    },
    {
        number: '02',
        title: 'Wireframing & Design',
        text: "We create intuitive layouts and design mockups that prioritize user experience, accessibility, and conversion. Each design element is tailored to your brand and optimized for engagement.",
        gradient: 'from-green-500 via-teal-400 to-transparent',
        color: 'text-teal-500',
    },
    {
        number: '03',
        title: 'Development',
        text: "Our developers build websites with clean, semantic code, mobile-first responsiveness, fast load speeds, and SEO-friendly structure to ensure your site performs technically and visually.",
        gradient: 'from-yellow-400 via-yellow-300 to-transparent',
        color: 'text-yellow-500',
    },
    {
        number: '04',
        title: 'Content Integration',
        text: "We incorporate optimized content, compelling visuals, and strategic calls-to-action. Every section of your website is designed to guide visitors through your customer journey seamlessly.",
        gradient: 'from-pink-500 via-purple-400 to-transparent',
        color: 'text-purple-500',
    },
    {
        number: '05',
        title: 'Testing & QA',
        text: "Before launch, we rigorously test your site across devices, browsers, and performance metrics. This ensures a flawless user experience, fast load times, and functional forms and features.",
        gradient: 'from-indigo-500 via-indigo-400 to-transparent',
        color: 'text-indigo-500',
    },
    {
        number: '06',
        title: 'Launch',
        text: "We deploy your website live with SEO foundations in place, ensuring it’s discoverable and ready to attract leads, conversions, and traffic from day one.",
        gradient: 'from-red-500  to-transparent',
        color: 'text-red-500',
    },
    {
        number: '07',
        title: 'Ongoing Support',
        text: "Post-launch, we provide maintenance, updates, and performance monitoring. Your website evolves with your business while maintaining speed, security, and conversion effectiveness.",
        gradient: 'from-purple-500 via-transparent to-transparent',
        color: 'text-pink-500',
    },
];

const WebProcessTimeline = () => {
    return (
        <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-6xl text-white text-center max-w-6xl mx-auto font-bold font-inter mb-6">
                How We Build Websites That <span className="text-blue-500">Deliver Results</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
                We follow a structured, transparent process to ensure your website is not only beautiful but also functional and conversion-focused.
            </p>

            {/* MOBILE VERSION */}
            <div className="space-y-10 md:hidden">
                {steps.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start">
                        <p className={`${item.color} text-5xl font-bold mb-2`}>{item.number}</p>
                        <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
                        <p className="text-gray-300">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
                {steps.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    let positionClasses = '';
                    if (idx % 4 === 0) positionClasses = '-top-20 right-10';
                    else if (idx % 4 === 1) positionClasses = '-top-20 left-1/3 -translate-x-1/4';
                    else if (idx % 4 === 2) positionClasses = '-top-20 left-10';
                    else if (idx % 4 === 3) positionClasses = '-top-20 left-1/3 -translate-x-1/4';

                    return (
                        <div key={idx} className="relative z-0">
                            {/* Gradient border */}
                            <div
                                className={`absolute -inset-1 rounded-[20px] ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} ${item.gradient} z-0`}
                            ></div>

                            <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                                {/* Floating content box */}
                                <div
                                    className={`absolute flex items-center gap-5 flex-row border border-white/50 bg-black max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
                                >
                                    <div>
                                        <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                                        <p className="text-gray-300">{item.text}</p>
                                    </div>
                                </div>
                                {idx === steps.length - 1 && (
                                    <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                                        <a href={'#form'}>
                                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                                Book a Free Social Media Consultation
                                            </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[30%] mx-auto mb-12 font-poppins leading-relaxed text-center">
                This structured web design process ensures your website performs optimally, converts visitors into customers, and grows with your Mississauga business.
            </p>
        </div>
    );
};

export default WebProcessTimeline;
