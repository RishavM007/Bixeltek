"use client";

import { Shield, BarChart3, Globe2, LineChart, Users2, FileText } from "lucide-react";

export default function WhyChooseBixeltekSMiss() {
  const values = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Data-Driven Strategies",
      subtitle: "SEO backed by real insights",
      color: "hover:bg-blue-600",
      description:
        "We don’t guess. Every SEO move is based on analytics, keyword research, and performance tracking to maximize results for your Mississauga business.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-green-400" />,
      title: "Local + National SEO",
      subtitle: "Expertise at every scale",
      color: "hover:bg-green-600",
      description:
        "Whether you’re targeting Mississauga neighborhoods or expanding Canada-wide, our tailored strategies ensure visibility in the right places.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: "Transparent Reporting",
      subtitle: "Clarity on every campaign",
      color: "hover:bg-purple-600",
      description:
        "You’ll know exactly how your SEO is performing with detailed reporting on rankings, traffic, and leads — no hidden numbers, no vague updates.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-yellow-400" />,
      title: "Proven ROI Growth",
      subtitle: "10x scaling success",
      color: "hover:bg-yellow-500",
      description:
        "We’ve helped businesses achieve 10x ROI by focusing on sustainable strategies that grow revenue steadily instead of short-lived spikes.",
    },
    {
      icon: <Users2 className="w-8 h-8 text-pink-400" />,
      title: "Integrated SEO Team",
      subtitle: "Experts across disciplines",
      color: "hover:bg-pink-600",
      description:
        "Our SEO, content, and web development specialists work together as one unit — ensuring seamless strategies that deliver results faster.",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Sustainable Growth",
      subtitle: "Built for the long term",
      color: "hover:bg-red-600",
      description:
        "Unlike quick-fix agencies, we focus on lasting results. Our methods build authority and visibility that compounds over time.",
    },
  ];

  return (
    <section className="max-w-[90%] lg:max-w-[80%] mx-auto bg-black md:py-20 px-6 lg:px-20">
      <div className="max-w-[95%] md:max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-bold text-white font-inter mb-6">
          SEO Backed by <br></br><span className="text-blue-500">Experience and Proven Results</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto font-poppins leading-relaxed">
          For over 4 years, Bixeltek has been helping Canadian businesses rank higher, generate organic leads,
          and build long-term authority. Unlike quick-fix SEO agencies, we focus on sustainable growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((item, idx) => (
          <div
            key={idx}
            className={`bg-[#fff] group border ${item.color} border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition`}
          >
            <div className="flex items-center pb-4 border-b border-gray-200 mb-6">
              <div className="p-3 rounded-lg bg-neutral-100 ">{item.icon}</div>
              <div className="ml-3">
                <h3 className="text-lg group-hover:text-white font-semibold text-black">{item.title}</h3>
                <p className="text-sm group-hover:text-gray-100 text-gray-800">{item.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-900 group-hover:text-gray-50 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
