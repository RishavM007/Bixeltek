import Link from "next/link";
import React from "react";

const SeoCTA1 = () =>{
    return(
         <section className="pt-2 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-800 to-violet-800 flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div className="block text-center w-full lg:w-3/4 mb-5 lg:text-left lg:mb-0">
                            <h2
                                className="font-manrope text-2xl text-white font-semibold mb-5 lg:mb-2"
                            >
                                Dominate &quot;Near Me&quot; Searches in Hyderabad with Local SEO
                            </h2>
                            <p className=" text-base md:text-xl text-indigo-100">
                                Capture high-intent customers who are actively searching for services nearby. Our targeted local SEO ensures your business appears at the top of “near me” results, driving foot traffic and real leads in Hyderabad.
                            </p>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/4 flex justify-center lg:justify-end'>
                            <Link
                                href="/contact-us"
                                className="flex w-fit items-center text-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-10 transition-all duration-500"
                            >Get In Touch
                                <svg
                                    width="19"
                                    height="14"
                                    viewBox="0 0 19 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                        stroke="#4F46E5"
                                        stroke-width="2.4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default SeoCTA1