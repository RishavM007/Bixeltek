import ContactFromNew from "@/components/ContactFormNew";
import React from "react";
import { PhoneCall, MessageCircle, CalendarDays } from "lucide-react"
import Link from "next/link";

const GaContact = () => {
    return(
        <section className='bg-black lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row ' id='form'>
                <div className="w-full mt-14 md:mt-0 flex justify-center items-center px-6">
                    <div className="space-y-5 text-white max-w-xl ">
                        <h2 className="text-4xl md:text-5xl capitalize font-sofiasanscondensed font-bold">
                            Lets grow your business with 
                            <span className='text-purple-500'> google ads</span>
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
                                    <span className="text-white text-sm">Call: +91-9100032301</span>
                                </div>
                            </Link>

                            <div className="flex items-center gap-2">
                                <MessageCircle size={20} />
                                <span className="text-white text-sm">WhatsApp: Start a Chat</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarDays size={20} />
                                <span className="text-white text-sm">
                                    Schedule a Free Consultation:{' '}
                                    <button

                                        className="underline underline-offset-2 text-blue-300 hover:text-blue-400"
                                    >
                                        Book Now
                                    </button>
                                </span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-200 pt-3">
                            Starting at ₹30,000 | Delivered in 7–15 Days | Built for SEO, Ads, and Conversions
                        </p>
                    </div>
                </div>
                <div className='lg:w-[87%] lg:mr-32 flex justify-start items-center px-6' >
                    <ContactFromNew />
                </div>
            </section>
    )
}
export default GaContact;