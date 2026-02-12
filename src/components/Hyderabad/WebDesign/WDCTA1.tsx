import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import hyderabad from '@/assets/Hyderabad.jpg'


const WDCTA1 = () =>{
    return(
        <section className="bg-gradient-to-r from-white to-purple-50 py-6 md:py-16">
                <div className=" w-full mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-20 items-center">
                    {/* Left Image with Blue Background */}
                    <div className="relative w-full lg:w-1/3  bg-transparent md:bg-purple-100 rounded-r-3xl overflow-visible flex items-center justify-center p-6 md:p-12">
                        <Image src={hyderabad} alt='' className='h-[400px] object-cover translate-x-0 lg:translate-x-52 rounded-2xl'></Image>
                    </div>
                    {/* Right Content */}
                    <div className='w-full lg:w-2/3 md:py-10 lg:py-20 px-6 lg:px-40'>
                        {/* <p className="text-purple-600 text-sm font-semibold uppercase mb-3">Why Choose Us</p> */}
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold font-inter leading-tight mb-4">
                            Custom Websites Tailored for <br />
                            <span className="underline decoration-purple-600 underline-offset-4">Hyderabad’s Top Industries</span>
                        </h2>

                        <p className="text-gray-700 text-base mb-6 mt-7">
                            Hyderabad is diverse — tech startups in Gachibowli, dental clinics in Jubilee Hills, cloud kitchens in Madhapur, and NGOs in Secunderabad. Each has a different buyer persona, different brand story, and different online behavior.
                            <br /><span className='italic font-semibold'>That’s why we never use templates. We tailor each site to the exact needs of your industry.</span>
                        </p>

                        {/* <div className="flex gap-4 mb-6 flex-wrap">
                            <button className="bg-purple-600 text-white text-sm px-5 py-2.5 rounded-full font-semibold shadow hover:bg-purple-700 transition">
                                Data Analysis
                            </button>
                            <button className="border border-gray-300 text-sm px-5 py-2.5 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition">
                                Mission & Vision
                            </button>
                        </div> */}

                        <p className="text-gray-700 text-base mb-4">
                            If you run a dental clinic, we’ll showcase services, before-after cases, and Google reviews. If you’re in ecommerce, we’ll focus on fast product discovery, secure payment integration, and mobile UX. If you’re a local service provider, we’ll build trust, highlight service zones, and make it easy to call or WhatsApp instantly.

                        </p>
                        <p className="text-gray-700 text-base mb-6">
                            We serve businesses across healthcare, education, ecommerce, real estate, consulting, home services, restaurants, non-profits, and more.
                        </p>
                        <div className='flex flex-row gap-6'>
                            <Link href={'#form'}>
                                <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-purple-700 transition text-sm">
                                    Get in Touch <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </Link>

                            <Link href={'tel:+919100032301'}>
                                <button className="inline-flex items-center gap-2 bg-white text-purple-500 px-5 py-3 rounded-full border border-purple-500 font-semibold hover:bg-purple-700 hover:text-white transition text-sm">
                                    Call Us <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </Link>


                        </div>

                    </div>
                </div>
            </section>
    )
}

export default WDCTA1