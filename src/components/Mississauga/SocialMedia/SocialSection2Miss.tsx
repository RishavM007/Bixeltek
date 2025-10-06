import React from "react";
import { Check } from "lucide-react";

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
    <section className="relative bg-black text-white py-28 px-6 md:px-20 flex flex-col items-center justify-center text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto space-y-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Your Audience Is Online —{" "}
          <span className="text-blue-400">Are You Reaching Them?</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Whether it’s a homeowner scrolling Instagram, a professional networking on LinkedIn,
          or a student browsing TikTok — your potential customers are already online.
          If you’re not showing up consistently, your competitors are.
        </p>
      </div>

      {/* Benefits as Numbered Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="relative bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
          >
            {/* Number Box */}
            <div className=" top-4 bg-blue-500 text-white w-10 h-10 flex items-center justify-center text-lg font-bold rounded-md">
              {index + 1}
            </div>

            <div className="mt-4 text-left">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-14">
        <a href="mailto:zee@bixeltek.com">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg">
            Get A Free Quote Now
          </button>
        </a>
      </div>
    </section>
  );
}
