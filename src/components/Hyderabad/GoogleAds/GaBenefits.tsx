import React from "react";

const GaBenefits = ({ benefits }:any) => {
    return(
        <section className="pb-16 bg-white">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-4xl font-semibold font-sofiasanscondensed text-gray-900">Key Benefits of Our <span className='text-purple-700'>Google Ads Service</span> </h2>
                    <p className="text-gray-600 text-lg mt-2 mb-10">Unlock better performance with expert ad strategies.</p>
                    {/* Grid with Tic-Tac-Toe style borders */}
                    <div className="grid grid-cols-1  md:grid-cols-3">
                        {benefits.map((benefit:any, index:any) => (
                            <div
                                key={index}
                                className={`p-8 md:p-14 flex flex-col justify-center items-center border-0 border-purple-900 ${index < 3 ? "md:border-b " : ""} ${index % 3 !== 2 ? "md:border-r" : ""}`}
                            >
                                <div className="mb-4 text-purple-500">{benefit.icon}</div>
                                <h2 className="text-xl font-semibold text-gray-800 font-poppins">{benefit.title}</h2>
                                <p className="text-gray-600 mt-2">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )
}

export default GaBenefits;