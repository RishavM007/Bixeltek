import ContactFrom from '@/components/ContactFrom'
import React from 'react'


const GaWhyUs = () =>{
  return(
    <section className=" pt-8 flex justify-center items-center max-w-[100%] lg:max-w-[85%] mx-auto text-gray-800 sm:py-24">
                <div className="mx-auto flex flex-col   justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-full lg:w-1/2 px-6 pb-10 md:pb-0 lg:pr-24">
                        <h3 className="mb-2 text-purple-600">Why Choose Us?</h3>
                        <h2 className="mb-5 text-3xl font-semibold"> Dedicated Certified Google Ads Experts</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-600">Our team consists of certified Google Ads specialists who stay ahead of the latest PPC trends, ensuring your campaigns are optimized for success.</p>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Proven Track Records</p>
                                <span className="font-normal text-sm md:text-lg text-gray-600">We have helped businesses across various industries scale with high-performing ad campaigns. Our clients see measurable improvements in lead generation, sales, and overall campaign performance.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Data-Driven Approach </p>
                                <span className="font-normal text-sm md:text-lg text-gray-600">Every decision is backed by in-depth analytics and market research. We analyze customer behavior, competitor strategies, and industry trends to fine-tune your campaigns.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Full-Service PPC Management </p>
                                <span className="font-normal text-sm md:text-lg text-gray-600">From campaign setup to continuous optimization, we handle everything so you can focus on running your business.</span>
                            </div>
                        </div>
                    </div>
                    <ContactFrom />
                </div>
            </section>
  )    
}

export default GaWhyUs;
