import ContactFrom from "@/components/ContactFrom";
import React from "react";


const SMWhyChooseUs = () =>{
    return(
        <section className=" pt-8 flex flex-col justify-center items-center max-w-[100%] lg:max-w-[85%] mx-auto text-white sm:py-24" id="form">
                <div className="mx-auto flex max-w-md md:max-w-[90%]  flex-col justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-full lg:w-1/2 px-4 pb-10 md:pb-0 lg:pr-24">
                        <h3 className="mb-2 text-purple-600">Why Choose Us?</h3>
                        <h2 className="mb-5 text-3xl font-semibold"> Why Bixeltek is Hyderabad&apos;s Trusted Social Media Marketing Agency</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-50">Bixeltek stands out as a leading social media management agency in Hyderabad, known for innovative strategies, exceptional creativity, and measurable results. Our specialized team delivers bespoke solutions designed to meet the unique needs of Hyderabad&apos;s dynamic market.</p>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Experienced Professionals</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50">Skilled social media strategists with deep expertise in Hyderabad&apos;s local business ecosystem.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Result-Oriented Approach</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50"> Proven success stories of significantly improving online visibility and conversion rates.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">
                            <div className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7 text-purple-800">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="mb-2">Comprehensive Solutions</p>
                                <span className="font-normal text-sm md:text-lg text-gray-50">End-to-end social media management and marketing tailored specifically to your business goals.</span>
                            </div>
                        </div>
                    </div>
                    <ContactFrom />
                </div>
            </section>
    )
}

export default SMWhyChooseUs