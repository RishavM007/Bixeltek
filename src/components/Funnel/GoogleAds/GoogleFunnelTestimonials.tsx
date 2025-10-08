import React from "react";
import { FiAward, FiUsers, FiGlobe, FiClock, FiCheckCircle } from "react-icons/fi";
import person1 from '@/assets/PERSON1.jpg'
import person2 from '@/assets/PERSON2.jpg'
import person3 from '@/assets/PERSON3.jpg'
import Image from "next/image";
import quotes from '@/assets/end-quotes-svgrepo-com.png'

export default function GoogleAdsTrustSection() {
  const stats = [
    { title: "Google Partner Certified", icon: <FiAward size={32} />, border: "border-blue-500" },
    { title: "90% Client Retention Rate", icon: <FiUsers size={32} />, border: "border-green-500" },
    { title: "Active in 4 Countries", icon: <FiGlobe size={32} />, border: "border-red-500" },
    { title: "4+ Years in Ads Management", icon: <FiClock size={32} />, border: "border-yellow-500" },
    { title: "200+ Campaigns Managed", icon: <FiCheckCircle size={32} />, border: "border-purple-500" },
  ];

  return (
    <section className="bg-[#0E0E0E] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading & Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why <span className="text-blue-500">200+ Businesses</span> Trust
            Bixeltek With Their Ad Spend
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            When you work with Bixeltek, you don’t get automated dashboards or
            cookie-cutter templates — you get a dedicated partner that treats
            your ad account like its own.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-[#1A1A1A] rounded-2xl p-6 hover:scale-105 transition-all duration-300 border-4 ${stat.border}`}
            >
              <div className="text-white mb-2 flex justify-center">
                {stat.icon}
              </div>
              <p className="text-gray-300 text-lg font-inter">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Snippets */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white relative text-black p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="rounded-bl-3xl absolute top-0 right-0 bg-blue-600 p-3">
                <Image src={quotes} alt="end quotes" className="w-10 h-auto"></Image>
            </div>
            <Image src={person1} alt="Revita Image" className="rounded-full w-20 h-auto mt-2 mb-5"></Image>
            <p className="text-lg italic mb-6">
              “Our cost per lead dropped by 41% within the first month. The
              Bixeltek team completely restructured our account and gave us the
              reporting clarity we were missing for years.”
            </p>
            <p className="font-semibold">— Revita Dentistry, Canada</p>
          </div>

          <div className="bg-white relative text-black p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
             <div className="rounded-bl-3xl absolute top-0 right-0 bg-red-600 p-3">
                <Image src={quotes} alt="end quotes" className="w-10 h-auto"></Image>
            </div>
             <Image src={person2} alt="Revita Image" className="rounded-full w-20 h-auto mt-2 mb-5"></Image>
            <p className="text-lg italic mb-6">
              “We’d almost given up on Google Ads until Bixeltek rebuilt
              everything from scratch. Now we get 20+ new customers weekly and
              actually understand where our money goes.”
            </p>
            <p className="font-semibold">— Eazy Bike Repairs, Hyderabad</p>
          </div>

          <div className="bg-white relative text-black p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
             <div className="rounded-bl-3xl absolute top-0 right-0 bg-yellow-500 p-3">
                <Image src={quotes} alt="end quotes" className="w-10 h-auto"></Image>
            </div>
             <Image src={person3} alt="Revita Image" className="rounded-full w-20 h-auto mt-2 mb-5"></Image>
            <p className="text-lg italic mb-6">
              “Before working with Bixeltek, we were overspending and seeing no
              ROI. Their team’s strategy helped us cut wasted spend and double
              our conversions in 2 months flat.”
            </p>
            <p className="font-semibold">— MetroFit Gym, Dubai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
