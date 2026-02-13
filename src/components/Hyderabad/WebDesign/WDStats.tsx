import StepCards from "@/components/WebdevSteps";
import React from "react";

const WDStats= ({problems}:any) =>{
    return(
         <section className="bg-white pt-20 px-6 lg:px-20">
                <div className="md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left stacked cards */}
                    {/* <div className="relative flex flex-col items-start justify-center -space-y-10">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                style={{
                                    transform: `translate(${i * 150}px, ${i * 10}px)`
                                }}
                                className="relative z-10 p-10 rounded-xl  bg-white border border-gray-400 w-72"
                            >
                                <div className="text-sm text-yellow-600 font-medium mb-1">0{i + 1} Step</div>
                                <div className="text-2xl font-sofiasanscondensed font-semibold text-gray-900">
                                    {['Initial Consultation', 'Data Analysis', 'Strategy Development'][i]}
                                </div>
                                <p className="mt-2 text-sm text-gray-600">
                                    {[
                                        'Introduction between consultant and the client. Understand the client’s financial situation.',
                                        'Analyze cash flow, expenses, debts, assets, liabilities, and financial ratios. Identify potential risks.',
                                        'Work with the client to set short-term and long-term financial goals, retirement planning, debt.'
                                    ][i]}
                                </p>
                            </div>
                        ))}

                    </div> */}
                    <StepCards />

                    {/* Right Problem Cards */}
                    <div className="md:max-w-5xl mx-auto ">
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold font-inter leading-tight mb-4">
                            Common Problems with Website Design in Hyderabad
                        </h2>
                        <h3 className='text-xl md:text-xl font-semibold font-inter mt-4 mb-5'>
                            Why Most Websites in Hyderabad Don’t Generate Leads
                        </h3>
                        <div className="divide-y divide-gray-200 border-b border-gray-200 rounded-lg overflow-hidden">
                            {/* @ts-ignore */}
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 py-6 pr-5 bg-white hover:bg-gray-50 transition"
                                >
                                    <div className="mt-1">{problem.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800">{problem.title}</h4>
                                        <p className="text-gray-600 text-sm mt-1">{problem.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    )
}


export default WDStats