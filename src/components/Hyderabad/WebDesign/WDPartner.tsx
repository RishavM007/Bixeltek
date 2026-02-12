import React from "react";

const WDPartner = ({features}:any) =>{
    return(
        <section className="pt-14 pb-0 lg:pb-24 px-6 lg:px-16 bg-white text-center">
                <p className="text-sm text-purple-500 font-semibold uppercase mb-2">WHAT YOU GET</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-6xl mx-auto">
                    Everything You Get with Our Web Design Services in Hyderabad
                </h2>
                <p className="text-gray-700 text-base mb-6 mt-7 mx-auto max-w-3xl">
                    When you partner with Bixeltek, you’re not just getting a design — you’re getting a full-stack growth-ready website. Every project includes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-7xl mx-auto">
                    {/* @ts-ignore */}
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
                        >
                            <div className={`rounded-full p-3 ${feature.bg} shrink-0`}>
                                {feature.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-2xl font-sofiasanscondensed text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-gray-700 text-sm font-poppins">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-gray-500 text-sm mt-12 max-w-3xl mx-auto">
                    Every project is managed by an experienced team, small projects are delivered in 2 weeks, and starts from just ₹30,000 — no hidden charges, no unnecessary upsells.
                </p>
            </section>
    )
}

export default WDPartner