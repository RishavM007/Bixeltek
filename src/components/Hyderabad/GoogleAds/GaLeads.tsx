import HoverDevCards from "@/components/Hovercards";
import Link from "next/link";
import React from "react";

const GaLeads = ()=>{
    return(
        <section>
                <div className="bg-white flex flex-col pt-10 pb-20 items-center">
                    <div className="text-center flex flex-col max-w-5xl">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                            Maximize Leads, Sales and Conversions with Our Proven Google Ads Strategies
                        </h2>
                        <p className="text-sm md:text-lg text-gray-700 py-10 max-w-[80%] mx-auto md:max-w-full font-sans">
                            We focus on making your ad spend count by combining precision, creativity, and data-driven insights. Here&apos;s how we transform your campaigns into performance powerhouses:
                        </p>
                    </div>
                    <div className="w-full py-10 flex justify-center">
                        <HoverDevCards />
                    </div>
                    <Link href='#'>
                        <p className='font-semibold text-lg text-center group'>Read Our Case-Studies (Coming Soon) <i className="fa fa-arrow-right ml-1 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i></p>
                    </Link>
                </div>
            </section>
    )
}

export default GaLeads;