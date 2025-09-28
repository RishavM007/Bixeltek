'use client';
import React from 'react';

export default function DigitalMarketingBenefits() {
    const benefits = [
        {
            id: 1,
            title: "Get Found First",
            desc: "90% of people never go past page one of Google."
        },
        {
            id: 2,
            title: "Lower Costs Over Time",
            desc: "Ads bring instant leads; SEO builds lasting visibility."
        },
        {
            id: 3,
            title: "Win Mobile Customers",
            desc: "Most searches in Toronto happen on smartphones."
        },
        {
            id: 4,
            title: "Build Trust Quickly",
            desc: "Professional websites and branding make customers choose you."
        },
    ];
    const googleColors = [
        "hover:bg-blue-600",   // Card 1 → Blue
        "hover:bg-red-600",    // Card 2 → Red
        "hover:bg-yellow-500", // Card 3 → Yellow
        "hover:bg-green-600",  // Card 4 → Green
    ];

    return (
        <section className="relative bg-black py-0 md:py-16 px-6">
            <div className="max-w-7xl flex justify-center items-center flex-col mx-auto">
                {/* Heading */}
                <h2 className="text-3xl text-white md:text-6xl text-center font-bold mb-6">
                    Digital Marketing Isn’t Optional Anymore — <span className="text-blue-600">It’s Essential</span>
                </h2>

                {/* Paragraph */}
                <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-4xl text-center">
                    In Toronto, customers don’t just browse online — they compare, research, and make decisions instantly.
                    If you’re not there when they’re searching, you’re invisible. Digital marketing gives you the visibility
                    and trust needed to win.
                </p>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.id}
                            className={`relative flex group flex-col gap-4 border justify-between border-gray-300 hover:border-transparent bg-black rounded-xl shadow-sm transition p-10 ${googleColors[index % googleColors.length]} hover:shadow-lg`}
                        >
                            {/* Number Badge */}
                            <span className="bg-blue-600 group-hover:bg-white group-hover:text-black text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
                                {benefit.id}
                            </span>

                            <div>
                                <h3 className="text-xl text-white font-semibold mb-3">{benefit.title}</h3>
                                <p className="text-gray-100 text-sm font-poppins">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <p className="mt-12 text-gray-100 font-poppins text-center font-medium text-lg max-w-3xl">
                    Digital marketing is no longer a “nice-to-have.” It’s the difference between growth and decline
                    in Toronto’s competitive market.
                </p>
            </div>
        </section>
    );
}
