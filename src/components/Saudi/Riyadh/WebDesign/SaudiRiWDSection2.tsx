import React from 'react'
import image1 from '@/assets/Unlock Your Online Potential_ Pro Web Design_.jpg'
import Image from 'next/image'

export default function SaudiRiWDSection2() {
    return (
        <section className="bg-black max-w-[95%] mx-auto md:max-w-[85%] text-white py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10">
            {/* LEFT SIDE — TEXT */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-5xl font-medium text-white">
                    Beautiful Isn’t Enough — <span className='text-yellow-500'>Your Website Has to Perform.</span> 
                </h2>
                <p className="text-gray-100 text-lg">
                    Many Riyadh businesses invest in design but forget performance. Here’s what usually breaks the funnel:
                </p>
                <ul className="list-disc list-inside text-gray-100 space-y-2">
                    <li>Pages that load slowly and lose mobile users.</li>
                    <li>No keyword or SEO structure behind the design.</li>
                    <li>Weak calls-to-action and poor conversion flow.</li>
                    <li>No analytics or tracking setup.</li>
                    <li>Outdated layouts that ignore bilingual audiences.</li>
                </ul>
                <p className="text-white font-semibold">
                    If your website doesn’t sell, it’s not marketing — it’s just decoration. We fix that by turning design into a measurable growth system.
                </p>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            <div className="relative w-full md:w-1/2 h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={image1}
                    alt="High-speed web design for Riyadh businesses"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient mask overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.1),_transparent_90%)] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.9),transparent_20%,transparent_80%,rgba(0,0,0,0.9))]" />
            </div>
        </section>

    )
}
