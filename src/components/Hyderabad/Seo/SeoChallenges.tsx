import React from "react";
import { PiGreaterThan } from "react-icons/pi";


const SeoChallenges = ({ seoChallenges }:any) => {
    return(
        <section className="max-w-5xl mx-auto text-center py-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofiasanscondensed font-medium text-white mb-1">Why Your Website Isn&apos;t Ranking</h2>
                <h2 className='text-5xl font-sofiasanscondensed text-purple-500 mb-6'>The SEO Challenge</h2>

                <div className="grid grid-cols-1 px-2 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* @ts-ignore */}
                    {seoChallenges.map((item, index) => (
                        <div key={index} className="px-2 py-6 md:px-6 text-white flex flex-col justify-center items-center bg-transparent">
                            <div className="text-white text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                            <p className="text-sm text-gray-300 text-center">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <a href="tel:+919100032301" className="text-white text-xl font-sans group font-semibold ">
                        Book A Call With An <span className='text-purple-500 text-xl'>SEO Expert<PiGreaterThan className='inline-block text-lg group-hover:translate-x-2 transition-all duration-300 ml-1 mb-1' /></span>
                    </a>
                </div>
            </section>
    )
}

export default SeoChallenges;
