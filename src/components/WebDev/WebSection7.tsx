import React from 'react'
import Link from 'next/link'

export default function WebSection7() {
    return (
        <>
            <section className=" relative pt-20 pb-10 md:pb-20">
                 <div className="absolute -bottom-56 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-4xl max-w-6xl mx-auto md:text-6xl font-semibold text-center text-white font-inter">
                        A Website Alone{" "}
                        <span className="text-blue-500">Won’t Get You Sales</span>
                    </h2>
                    <p className="text-white max-w-[90%] md:max-w-5xl text-center text-[15px] md:text-[16px]">
                        A modern website is the foundation, but visibility and traffic are what
                        drive results. That’s why we integrate web design with our other digital
                        services to ensure your site isn’t just pretty — it’s a sales engine.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 max-w-7xl text-white mx-auto text-center">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed border-blue-500 justify-center p-6">
                        <span className="text-4xl">📈</span>
                        <h3 className="mt-2 font-semibold font-poppins">SEO Services</h3>
                        <p className="text-sm mt-2">
                            Build consistent, long-term lead flow that compounds over time. We
                            ensure your website ranks high and stays visible when it matters most.
                        </p>
                        <Link href="/services/seo-services">
                            <p className="text-blue-500 text-sm mt-3 font-semibold cursor-pointer hover:underline">
                                Explore SEO Services →
                            </p>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed border-blue-500 justify-center p-6">
                        <span className="text-4xl">🎯</span>
                        <h3 className="mt-2 font-semibold font-poppins">
                            Google Ads Management
                        </h3>
                        <p className="text-sm mt-2">
                            Generate leads quickly with targeted, ROI-driven campaigns. Our experts
                            manage every detail so you get maximum results for your budget.
                        </p>
                        <Link href="services/google-ads">
                            <p className="text-blue-500 text-sm mt-3 font-semibold cursor-pointer hover:underline">
                                Explore Google Ads →
                            </p>
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-3 text-xl items-center justify-center p-6">
                        <span className="text-4xl">📊</span>
                        <h3 className="mt-2 font-semibold font-poppins">Analytics & Tracking</h3>
                        <p className="text-sm mt-2">
                            Understand exactly where your leads come from. With data-driven
                            insights, we help you scale what works and cut what doesn’t.
                        </p>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center max-w-[90%] md:max-w-4xl mx-auto">
                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed">
                        Together, <span className="font-semibold">web design + marketing</span>{" "}
                        transform your website into a powerful sales engine that builds trust,
                        attracts traffic, and drives revenue.
                    </p>
                    <Link href="/contact-us">
                        <p className="text-blue-500 mt-4 font-semibold cursor-pointer hover:underline">
                            Talk to Our Experts →
                        </p>
                    </Link>
                </div>
            </section>

        </>
    )
}
