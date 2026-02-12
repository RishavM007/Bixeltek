import React from "react";


const SeoLeads = ({items}:any) =>{
    return(
        <section className='pt-20 pb-10 md:pb-20'>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-4xl md:text-5xl text-center text-white font-sofiasanscondensed'>We&apos;re an <span className='text-[#670ef7]'>ROI-led</span> SEO agency. What does that mean?</h2>
                    <p className='text-white max-w-[90%] md:max-w-5xl text-center text-[15px] md:text-[16px] '>It&apos;s simple. We&apos;re not just about ticking boxes or chasing vanity metrics. As SEO specialists,every campaign, every strategy, every decision we make is geared towards one goal: maximising your return on investment through our expert SEO services. Here&apos;s how we make it happen:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-0 max-w-7xl text-white mx-auto text-center">

                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed  border-[#670ef7] justify-center p-6 ">
                        {items[0].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[0].text}</h3>
                        <p className="text-sm mt-2">{items[0].description}</p>
                    </div>

                    {/* Top-right */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed  border-[#670ef7] justify-center p-6">
                        {items[1].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[1].text}</h3>
                        <p className="text-sm mt-2">{items[1].description}</p>
                    </div>

                    {/* Bottom-left */}
                    <div className="flex flex-col gap-3 text-xl items-center justify-center p-6  border-none md:border-r md:border-dashed  border-[#670ef7]">
                        {items[2].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[2].text}</h3>
                        <p className="text-sm mt-2">{items[2].description}</p>
                    </div>

                    {/* Bottom-right */}
                    <div className="flex flex-col gap-3 text-xl items-center  justify-center p-6">
                        {items[3].icon}
                        <h3 className="mt-2 font-semibold font-poppins">{items[3].text}</h3>
                        <p className="text-sm mt-2 ">{items[3].description}</p>
                    </div>
                </div>
            </section>
    )
}

export default SeoLeads