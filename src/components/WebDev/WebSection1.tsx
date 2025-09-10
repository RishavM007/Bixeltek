import React from 'react'
import { LogoTicker2 } from '../GoogleAdsCarousel'

export default function WebSection1() {
    return (
        <>
            <section className="relative flex flex-col items-center justify-center h-[130vh] md:h-[100vh] bg-black -mt-32 text-center px-6 overflow-hidden">
                <div className='flex justify-center items-center'>
                    {/* Blue Sphere Glow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl pointer-events-none" />

                    <div className="relative z-10 mt-40 max-w-7xl">
                        {/* Headline */}
                        <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                            Web Design Services That Turn  {" "}
                            <span className="text-blue-500">Visitors Into Customers</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
                            Your website is the foundation of your online presence. If it loads slowly, looks outdated, or doesn’t work on mobile, you’re losing customers every day. At Bixeltek, we provide professional web design services that combine aesthetics with performance — creating websites that rank higher, build trust, and generate measurable growth. As a global web design agency, we serve businesses across India, USA, Canada, UAE, Saudi Arabia & UK.

                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href="tel:+919100032301"
                                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                            >
                                Request Your Free Web Design Consultation
                            </a>
                            
                        </div>
                    </div>
                </div>
                <LogoTicker2 />
            </section>

        </>
    )
}
