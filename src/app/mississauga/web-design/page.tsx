import React from 'react'
import HeroWebDesignMiss from '@/components/Mississauga/WebDesign/WebMissHero'
import WebDesignConversionSection from '@/components/Mississauga/WebDesign/WebMissSection1'
import WhyBusinessesLoseCustomers from '@/components/Mississauga/WebDesign/WebMissSection2'
import WebDesignServicesMississauga from '@/components/Mississauga/WebDesign/WebDesignSection3'
import BusinessGoalsSection from '@/components/Mississauga/WebDesign/WebMissSection4'
import WebProcessTimeline from '@/components/Mississauga/WebDesign/WebMissTimeline'
import WebDesignFaqs from '@/components/Mississauga/WebDesign/WebMissFaq'
import Link from 'next/link'
import ContactFromNew from '@/components/ContactFormNew'
export default function page() {
    return (
        <>
            <HeroWebDesignMiss />
            <WebDesignConversionSection />
            <WhyBusinessesLoseCustomers />
            <WebDesignServicesMississauga />
            <BusinessGoalsSection />
            <WebProcessTimeline />
            <WebDesignFaqs />
            <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Build a Website That{" "}
                            <span className="text-blue-500">Wins Customers?</span>
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            Your website should do more than just exist — it should convert. Partner with{" "}
                            <span className="font-semibold">Bixeltek</span> to create a modern, SEO-ready,
                            conversion-focused website that helps your Mississauga business grow.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Link href="/contact-us">
                                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition">
                                    Get a Free Website Audit
                                </button>
                            </Link>
                            <a href="tel:+91-9100032301">
                                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-md transition">
                                    Book a Strategy Call
                                </button>
                            </a>
                        </div> */}
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
