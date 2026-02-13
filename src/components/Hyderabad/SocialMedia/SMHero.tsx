import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import messageimage from '@/assets/images/message.png'
import cursorimg from '@/assets/images/cursor.png';


const SMHero = () =>{
    return(
        <section className="bg-black h-auto text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] pt-[72px] relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full z-30 h-40 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="container relative mx-auto px-4">
                            <div className="flex items-center justify-center">
                                <a href="#" className="border py-1 px-2 inline-flex gap-3 rounded-lg border-white/30">
                                    <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                                        Transform Your Social Media Presence
                                    </span>
                                </a>
                            </div>
        
                            {/* Ensure images do not cause overflow */}
                            <div className="flex justify-center mt-8 relative">
                                <div className="relative w-full max-w-5xl px-4">
                                    <Image src={cursorimg} alt="cursor" height={200} width={200} className="absolute right-[876px] top-[108px] hidden md:inline" />
                                    <Image src={messageimage} alt="message" height={200} width={200} className="absolute left-[85%] top-[106px] hidden md:inline" />
                                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter text-center">
                                        Top Social Media Marketing Agency in Hyderabad
                                    </h1>
                                </div>
                            </div>
        
                            <p className="text-center text-sm md:text-xl mt-8 max-w-[650px]  m-auto">
                                Partner with Hyderabad&apos;s premier social media management agency to drive growth, engagement, and conversions through targeted Instagram ads, Facebook ads, and more.
                            </p>
        
                            <div className="flex justify-center mt-6 mb-3">
                                <Link href={'/contact-us'}>
                                    <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get a quote</button>
                                </Link>
                            </div>
                        </div>
        
                        <div className="bg-[#7b00e0] max-w-[90%] md:max-w-[80%] mt-20  pt-2 md:pt-5 mx-auto shadow-purple-custom2 rounded-t-2xl">
                            <div className="max-w-[97%] pt-4 md:pt-10 pb-5  px-5 mx-auto bg-black rounded-t-2xl flex flex-col lg:flex-row justify-center items-center">
                                {/* Left side */}
                                <div className=" w-full lg:w-1/2 flex flex-col">
                                    <h2 className="text-xl md:text-2xl lg:text-4xl text-white mt-4 md:mt-10 mx-2 md:mx-5 lg:mx-7">
                                        <span className="text-[#7b00e0]">Rank Higher, Get More Traffic</span> & Skyrocket Your Business Growth
                                    </h2>
                                    <div className="flex mt-10 md:mt-20 mb-6 mx-2 px-0 gap-8">
                                        <div className=" w-1/2 flex flex-col text-white">
                                            <h1 className="text-[#6728cc] text-3xl md:text-5xl font-semibold">278%</h1>
                                            <p className="text-gray-100 text-sm mt-2">Increase in organic traffic <br /> within six months for our clients</p>
                                        </div>
                                        <div className="w-1/2 flex flex-col text-white">
                                            <h1 className="text-[#6728cc] text-3xl md:text-5xl font-semibold">4.2X</h1>
                                            <p className="text-gray-100 text-sm mt-2">
                                                Higher lead conversions from targeted SEO campaigns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
        
                                {/* Right side */}
                                <div className="w-full lg:w-1/2 pb-10 md:pb-0">
                                    <ul className="flex flex-col text-gray-100 gap-10 px-2 md:px-6">
                                        <li className="flex items-start gap-4 text-sm md:text-[16px]">
                                            <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-[-17px] text-6xl" />
                                            <span>
                                                <span className='font-semibold'>Is your website struggling to generate leads and sales?</span> You&apos;re not alone. Over 91% of online content gets zero traffic from Google, meaning businesses without a strong SEO strategy are missing out on valuable customers.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4 text-2xl ml-8 ">
                                            <span>
                                                <Link href={'#'}>Want to dominate search engine rankings? <span className='text-[#670ef7]'>Get a Free SEO Audit today!</span> </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
        
                            </div>
                        </div>
        
                        {/* Background Gradient Fix */}
                        {/* <div className="absolute h-[300px] w-[600px] md:w-[1200px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100% - 96px)] md:top-[calc(100% - 120px)]">
                        </div> */}
                    </section>
    )
}

export default SMHero