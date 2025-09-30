import React from 'react';
import { Check } from 'lucide-react';
export default function AudienceReachSection() {
  const benefits = [
    {
      title: "Build brand awareness and credibility",
      desc: "Stand out in your industry with consistent and authentic social media presence.",
    },
    {
      title: "Engage directly with your target audience",
      desc: "Start conversations, answer questions, and build stronger customer relationships.",
    },
    {
      title: "Drive leads and sales through paid campaigns",
      desc: "Use targeted ads to reach the right people at the right time for higher conversions.",
    },
    {
      title: "Retain customers with ongoing connection",
      desc: "Keep your brand top-of-mind with engaging content that nurtures loyalty.",
    },
  ];

  return (
    <section
      className="relative bg-black mt-20 text-white py-32 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden"
      style={{
        backgroundImage: "url('/Missasuaga_Social_Media.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top and Bottom Fade Mask */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 space-y-6 z-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Your Audience Is Online — <span className="text-blue-300">Are You Reaching Them?</span>
        </h2>
        <p className="text-gray-100 text-base md:text-lg leading-relaxed">
          Whether it’s a homeowner scrolling Instagram, a professional networking on LinkedIn,
          or a student browsing TikTok, your potential customers are already on social media.
          If you’re not showing up consistently, your competitors are.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-4 mt-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-transparent rounded-xl gap-2 flex flex-col backdrop-blur-sm"
            >
              <h3 className="font-semibold flex gap-2 text-xl"><Check className='text-blue-200' />{item.title}</h3>
              <p className="text-gray-200 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-4 z-10 relative">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          Get A Free Quote Now
        </button>
        <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition">
          Learn More
        </button>
      </div>
      </div>

      {/* Right Side - Empty 50% Container */}
      <div className="hidden md:block w-full md:w-1/2"></div>
    </section>
  );
}
