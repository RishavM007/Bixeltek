// components/MarketingInfrastructureSection.js
import React from 'react';
import { Sparkles, Globe, Users, BarChart, UserPlus2, Database } from 'lucide-react';

export default function MarketingInfrastructureSection() {
    const features = [
        {
            title: "Google Partner Certified Team",
            description: "Google Partner Certified technical & SEO team.",
            icon: <Sparkles className="h-8 w-8 text-neon-pink" />,
            tag: "Certified",
            gradient: "from-neon-pink to-primary-500",
            shadow: "shadow-glow-pink",
        },
        {
            title: "Platform-Agnostic Expertise",
            description: "WordPress, Shopify, Next.js, Strapi — we adapt to your platform.",
            icon: <Globe className="h-8 w-8 text-neon-blue" />,
            tag: "Flexible",
            gradient: "from-primary-500 to-neon-blue",
            shadow: "shadow-glow-blue",
        },
        {
            title: "Dual-Language Development",
            description: "Arabic + English websites for global reach.",
            icon: <Users className="h-8 w-8 text-neon-purple" />,
            tag: "Global",
            gradient: "from-neon-purple to-neon-pink",
            shadow: "shadow-glow-pink",
        },
        {
            title: "Transparent Analytics",
            description: "Uptime dashboards and analytics that give actionable insights.",
            icon: <BarChart className="h-8 w-8 text-neon-blue" />,
            tag: "Data-Driven",
            gradient: "from-neon-blue to-neon-purple",
            shadow: "shadow-glow-blue",
        },
        {
            title: "Dedicated Support",
            description: "Continuous optimization cycles and reliable support.",
            icon: <UserPlus2 className="h-8 w-8 text-primary-500" />,
            tag: "Reliable",
            gradient: "from-primary-500 to-neon-purple",
            shadow: "shadow-glow",
        },
        {
            title: "Data-Driven Asset",
            description: "Your website becomes a data-driven asset, not a static cost center.",
            icon: <Database className="h-8 w-8 text-neon-pink" />,
            tag: "ROI-Focused",
            gradient: "from-neon-pink to-neon-blue",
            shadow: "shadow-glow-pink",
        },
    ];

    return (
        <section className="bg-transprent text-black min-h-screen p-6 font-sans">
            <div className="max-w-6xl mx-auto py-16">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-medium tracking-wide text-base font-inter">WHY CHOOSE US</span>
                    <h2 className="text-4xl md:text-6xl  font-medium mt-4 ">
                        Because We Don&apos;t Just Build Websites <br /> <span className='text-blue-500'>We Build Marketing Infrastructure.</span> 
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 font-inter text-gray-900">
                        Businesses across India, UAE, Saudi Arabia, Canada, and the U.S. trust Bixeltek for one reason: measurable results.
                        Our CMS systems are engineered to align with marketing goals — not just technical spec.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl p-8 border border-gray-300 overflow-hidden 
             transition-all duration-300 hover:border-primary-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                        >
                            {/* Fixed Gradient hover overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 
                transition-opacity duration-500 rounded-xl pointer-events-none`}
                            ></div>

                            {/* Optional: Add a subtle border glow */}
                            <div
                                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                bg-gradient-to-r ${feature.gradient} blur-sm -z-10`}
                            ></div>

                            <div className="relative z-10">
                                {/* Icon with neon glow */}
                                <div
                                    className={`w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-6 
                  transition-all duration-500 group-hover:scale-110 ${feature.shadow}`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-900">{feature.description}</p>
                                {feature.tag && (
                                    <div className="mt-6 pt-6 border-t border-gray-700">
                                        <span className={`inline-block px-3 py-1 text-white rounded-full text-xs font-semibold bg-gradient-to-tr from-black to-blue-600`}>
                                            {feature.tag}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}