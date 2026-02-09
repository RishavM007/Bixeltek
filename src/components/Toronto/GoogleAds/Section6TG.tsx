// components/WhoIsThisServiceFor.jsx
"use client";
import React from "react";
import Image from "next/image";

// Import PNGs directly
import leadsIcon from "@/assets/google-opinion-rewards-svgrepo-com.png";
import businessIcon from "@/assets/handshake-deal-svgrepo-com.png";

export default function WhoIsThisServiceFor() {
    const points = [
        {
            heading: "Need High-Quality Leads",
            description:
                "Looking for real customers instead of random website clicks? We focus on delivering qualified leads for real business growth.",
            highlight: true,
            icon: leadsIcon,
        },
        {
            heading: "Serve Any Business Type",
            description:
                "Whether you run a service business, retail shop, clinic, B2B company, or ecommerce store — our strategy adapts to your needs.",
            highlight: false,
            icon: businessIcon,
        },
        {
            heading: "Ready to Scale or Struggling with Ad Spend",
            description:
                "Launching a new campaign, want to scale what’s working, or tired of rising ad costs with underwhelming results? Get more for your investment.",
            highlight: false,
            icon: leadsIcon,
        },
        {
            heading: "Want Full Visibility, Control, and Expert Support",
            description:
                "Transparent reporting, direct access to experts, and total control over your advertising—no secrets, just results.",
            highlight: false,
            icon: leadsIcon,
        },
    ];

    return (
        <section className="bg-black py-16 md:px-4">
            <div className="max-w-[100%] lg:max-w-[80%] mx-auto">
                <h3 className="text-center text-blue-500 text-sm tracking-wider font-semibold mb-2 uppercase">
                    Who Is This Service For?
                </h3>
                <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-white">
                    Our Google Ads Management Is <br /><span className="text-blue-500">Perfect If You…</span>
                </h2>

                <div className="grid  md:grid-cols-2 gap-6 px-6  lg:px-0">
                    {points.map((point, idx) => (
                        <div
                            key={idx}
                            className="
                relative p-2 md:p-6 lg:p-10 rounded-xl  flex items-start gap-6 transition-all duration-500 cursor-pointer
                bg-transparent hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-transparent
                hover:backdrop-blur-lg
              "
                        >
                            {/* Icon on the left */}
                            <div className="flex-shrink-0 bg-white p-2 rounded-full w-14 h-14 flex items-center justify-center">
                                <Image
                                    src={point.icon}
                                    alt={`${point.heading} icon`}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>


                            {/* Text content */}
                            <div>
                                <h3
                                    className={`text-2xl font-inter font-semibold mb-3 ${point.highlight ? "text-blue-200" : "text-white"
                                        }`}
                                >
                                    {point.heading}
                                </h3>
                                <p
                                    className={
                                        point.highlight ? "text-blue-100" : "text-gray-300"
                                    }
                                >
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-xl text-white">
                        If generating more revenue from every ad dollar matters,{" "}
                        <span className="font-bold text-[#EA4335]">
                            Our system is designed for you.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
