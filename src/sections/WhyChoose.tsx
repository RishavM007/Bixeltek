'use client';
import React from 'react';
import {
    BadgeCheck,
    BarChart2,
    Rocket,
    Handshake,
    Globe,
    Layers,
} from 'lucide-react';
import Image from 'next/image';
import client from '@/assets/passport-photo-man-caucasian-businessman-professional-attire-with-smile_817921-61353.avif'

const points = [
    {
        icon: <BadgeCheck className="w-6 h-6 text-white" />,
        title: 'Certified & Skilled Experts',
        desc: "Our team is certified by Google, Meta, and HubSpot — and we stay ahead by constantly updating our skills to deliver performance-focused results.",
    },
    {
        icon: <BarChart2 className="w-6 h-6 text-white" />,
        title: 'Transparent & Data-Driven',
        desc: "Clear, real-time reporting ensures you're always in control — with insights that actually mean something.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-white" />,
        title: 'Trendsetters in Digital Marketing',
        desc: "We don’t follow trends — we implement what works before your competitors even hear about it.",
    },
    {
        icon: <Handshake className="w-6 h-6 text-white" />,
        title: 'Client Success Focused',
        desc: "We adapt strategies dynamically as your business evolves — because static plans don’t win.",
    },
    {
        icon: <Globe className="w-6 h-6 text-white" />,
        title: 'Built for Global Markets',
        desc: "From Toronto to Khobar, our systems scale across borders and buyer behaviors.",
    },
    {
        icon: <Layers className="w-6 h-6 text-white" />,
        title: 'All-in-One Execution',
        desc: "One agency. One team. SEO, ads, web, design — fully integrated for faster growth.",
    },
];

export default function WhyChoose() {
    return (
        <>

            <section className="pt-20 pb-64 relative bg-neutral-900" style={{
                backgroundImage: `
      linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)),
      url('/SL-072622-51930-14.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

                <div className="max-w-[85%] z-30 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Side */}
                    <div className=''>
                        <span className="block z-50  mb-6 text-white text-sm font-semibold text-primary">
                            WHY CHOOSE US
                        </span>
                        <h2 className="text-3xl z-30  md:text-6xl font-inter font-medium leading-tight text-gray-50 mb-4">
                            We’re Not Just Another Agency.<span className='text-purple-400'>We’re Built for Performance.</span>
                        </h2>
                        <p className="text-gray-200 text-lg">
                            Choosing Bixeltek means choosing results, transparency, and a team that acts like your in-house marketing department. We’re lean, certified, and fully invested in helping you grow — fast and sustainably.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="grid sm:grid-cols-1 gap-6">
  {points.map((item, index) => (
    <div
      key={index}
      className="rounded-xl p-[1px] transition-transform duration-300 ease-in-out overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'border-box',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.01)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div
        className="flex items-start gap-4 rounded-xl p-6"
        style={{
    background: 'linear-gradient(to bottom right, #2a2a2a 1%, #000000 95%)',
  }}
      >
        <div className="flex-shrink-0 bg-purple-700 p-3 rounded-full">
          {item.icon}
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-1">{item.title}</h4>
          <p className="text-gray-50 text-sm">{item.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>

                </div>
            </section>
            <section className="relative mt-[-170px] max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white bg-cover bg-center" style={{ backgroundImage: `url('/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg')` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-80"></div>

                {/* Content */}
                <div className="relative z-10 max-w-[7xl] mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-evenly gap-10">

                    {/* Left Content */}
                    <div className="text-white md:max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-sofiasanscondensed  font-semibold mb-6 leading-tight">
                            &quot;We’ve grown our revenue 3X since working with Bixeltek. They own the outcome like it’s theirs.&quot;
                        </h2>
                        <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-md hover:bg-blue-100 transition">
                            Get More Information
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-52 h-52 rounded-md overflow-hidden mb-4">
                            <Image
                                src={client} // <-- replace this with your client image
                                alt="Jeffery Mussman"
                                width={180}
                                height={180}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="text-white font-semibold text-lg">Jeffery Mussman</p>
                        <p className="text-white/80 text-sm">Founder & CEO</p>
                    </div>
                </div>
            </section>
        </>
    );
}
