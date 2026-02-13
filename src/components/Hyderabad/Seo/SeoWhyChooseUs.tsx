import ContactFrom from "@/components/ContactFrom";
import React from "react";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";


const SeoWhyChooseUs = () => {
    return(
         <section>
                    <div className="min-h-screen bg-black flex items-center justify-center px-0 md:px-4 py-10">
                        <div className="max-w-7xl w-full bg-black text-white rounded-xl shadow-md p-8 flex flex-col lg:flex-row">

                            <div className="w-full lg:w-1/2 p-0 md:py-6 md:px-3">
                                <h2 className="text-3xl md:text-5xl font-normal font-sofiasanscondensed tracking-wide text-white mb-4 ">
                                    Why Choose <span className='text-[#6728cc]'>Bixeltek</span> – Your Trusted SEO Company in Hyderabad?
                                </h2>

                                <p className="text-gray-300 relative font-sans text-lg py-5 leading-relaxed">
                                    Ready to outshine the competition and drive consistent leads? Bixeltek is your trusted SEO company in Hyderabad, offering cutting-edge SEO services that propel your business to the top of Google&apos;s search results. Let&apos;s turn organic traffic into tangible growth.
                                </p>


                                <div className='grid grid-cols-1 gap-y-7 pb-10 pt-5  text-white'>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Proven Local Expertise – We optimize your SEO for Hyderabad&apos;s unique market, ensuring high-intent local audiences find your business.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Data-Driven Methodology – Our SEO strategies evolve with keyword analytics, competitor insights, and real-time performance tracking.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Transparent & Collaborative – We provide clear reporting, regular updates, and involve you in key SEO strategy decisions.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Cutting-Edge Tools – Advanced keyword research, auditing software, and optimization ensure peak SEO performance.
                                    </h3>
                                </div>
                                <div className='mt-2 mb-10 ml-2'>
                                    <a href="tel:+919100032301" >
                                        <button className='px-4 py-3 bg-[#670ef7] text-white transition-all duration-300 hover:bg-white font-medium hover:text-black rounded-md'>Book An Appointment</button>
                                    </a>
                                </div>
                            </div>


                            {/* Right Section: Contact Form */}
                            <ContactFrom />
                        </div>
                    </div>
                </section>
    )
}

export default SeoWhyChooseUs;