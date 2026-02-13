import ContactFromNew from "@/components/ContactFormNew";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";


const WDContact = () =>{
    return(
        <section className='bg-black py-10 lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row ' id='form'>
                <div className="w-full mt-14 md:mt-0 flex justify-center items-center px-6">
                    <div className="space-y-5 text-white lg:max-w-xl ">
                        <h2 className="text-4xl md:text-5xl font-sofiasanscondensed font-bold">
                            Ready to Work with
                            <span className='text-purple-500'> Hyderabad&apos;s Leading Web Design</span> Company?
                        </h2>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Your current website might be costing you leads, visibility, and money every single day. Let’s change that.
                        </p>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Book a free 30-minute strategy call with our Hyderabad-based team. We’ll audit your current website, identify what’s holding you back, and show you how we can fix it — fast.
                        </p>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Whether you&apos;re looking to rebuild your online presence or launch a new business with a strong digital foundation, <span className="font-semibold">Bixeltek</span> is your trusted web design partner in Hyderabad.
                        </p>

                        <div className="space-y-3 pt-3">
                            <Link href={'tel:+919100032301'}>
                                <div className="flex items-center gap-2">
                                    <PhoneCall size={20} />
                                    <span className="text-white text-lg">Call: +91-9100032301</span>
                                </div>
                            </Link>           
                        </div>
                        <p className="text-sm text-gray-200 pt-3">
                            Starting at ₹30,000 | Delivered in 7–15 Days | Built for SEO, Ads, and Conversions
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center px-6' >
                    <ContactFromNew />
                </div>
            </section>
    )
}

export default WDContact