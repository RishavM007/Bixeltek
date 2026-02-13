import React from "react";
import { SiPolestar } from "react-icons/si";


const GaWhatWeDo = () => {
    return(
        <section className='bg-white mb-20'>
                <div className='flex flex-col'>
                    <h2 className='text-black ml-24 text-4xl md:text-6xl px-6 mb-12 font-semibold font-sofiasanscondensed'>What we do</h2>

                    {/* First Container - Google Yellow Theme */}
                    <div className='w-[85%] mx-auto rounded-3xl flex border-l-[3px] py-14 z-10 hover:bg-[#EAAA00] group transition-all duration-300 border-l-[#EAAA00] mb-10 relative overflow-hidden'>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(234, 170, 0, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 gap-4 flex py-3 flex-col md:flex-row ml-5 w-full">
                            <div className="flex flex-col w-full md:w-1/3 justify-center items-start text-4xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#8A5B00]">
                                <p>Google Ads</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-2/3 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-sm md:text-lg mr-10 md:mr-10 text-black'>
                                    Our expert-driven Google Ads campaigns ensure your business reaches the right audience at the right time.
                                    With strategic ad placements, compelling copy, and continuous optimization, we drive high-quality traffic,
                                    increase conversions, and maximize your advertising budget.
                                </p>

                                <div className='flex flex-wrap gap-x-4 mt-4'>
                                    {[
                                        "Targeted Campaign Strategy",
                                        "Conversion-Optimized Landing Pages",
                                        "Search & Display Ads",
                                        "Remarketing & Retargeting",
                                        "Performance Tracking & Optimization",
                                        "YouTube & Shopping Ads"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#EAAA00] py-2 px-4 mt-4 font-medium rounded-full text-xs md:text-sm inline-block bg-white'>
                                            <SiPolestar className='text-[#EAAA00] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Second Container - Google Blue Theme */}
                    <div className='w-[85%] mx-auto rounded-3xl flex border-l-[3px] py-14 hover:bg-[#DB4437] group transition-all duration-300 border-l-[#DB4437] mb-10 relative overflow-hidden '>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(219, 68, 55, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row ml-5  gap-4 w-full">
                            <div className="flex flex-col w-1/3 justify-center items-start text-4xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#a2362c]">
                                <p>Performance</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-2/3 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-sm md:text-lg mr-10 md:mr-10  text-black'>
                                    We create data-driven marketing campaigns that fuel growth and maximize ROI. From precise paid search to engaging social ads, our strategies boost brand reach, generate qualified leads, and increase conversions across all channels, including e-commerce and social platforms.
                                </p>

                                <div className='flex flex-wrap gap-x-4 text-xs md:text-sm mt-4'>
                                    {[
                                        "Conversion Rate Optimization",
                                        "Lead Generation",
                                        "Boost Social Media Reach",
                                        "App Installs",
                                        "Increase Revenue",
                                        "Brand Awareness & Increased Traffic"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#a2362c] py-2 px-4 mt-4 font-medium rounded-full inline-block bg-white'>
                                            <SiPolestar className='text-[#a2362c] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default GaWhatWeDo;