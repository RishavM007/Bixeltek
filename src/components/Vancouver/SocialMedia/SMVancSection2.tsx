"use client";

import React from "react";

export default function WhyBusinessesStruggleSocial() {
  const struggles = [
    {
      title: "Low Engagement Despite Frequent Posting",
      subtitle: "Activity ≠ Strategy",
      description:
        "Most brands focus on posting often but not posting smart. Without understanding audience intent, timing, and content psychology, frequent posting leads to noise — not engagement. The result? Great effort, zero connection.",
      color: "hover:bg-blue-600",
    },
    {
      title: "Poor Targeting & Wasted Ad Spend",
      subtitle: "Boosts don’t equal business growth",
      description:
        "Random ad boosting burns through budgets fast. Without data-driven targeting, businesses miss the people who actually convert. Strategic audience segmentation and optimized ad sets make every dollar count.",
      color: "hover:bg-green-600",
    },
    {
      title: "Inconsistent Brand Voice & Design",
      subtitle: "Mixed messaging confuses your audience",
      description:
        "Every post should sound and look like it’s from the same brand. When visuals and tone change every week, trust fades fast. A consistent brand voice and visual system keep recognition strong across every platform.",
      color: "hover:bg-purple-600",
    },
    {
      title: "No Funnel From Awareness to Conversion",
      subtitle: "Traffic without purpose",
      description:
        "Most social campaigns stop at awareness. Without a conversion path — lead magnets, landing pages, or remarketing — your audience scrolls past. A clear funnel turns impressions into measurable ROI.",
      color: "hover:bg-yellow-500",
    },
    {
      title: "Lack of Reporting or Measurable ROI",
      subtitle: "You can’t improve what you don’t measure",
      description:
        "Without data, you’re flying blind. Tracking engagement, click-throughs, and conversions isn’t optional — it’s how smart brands evolve. Analytics reveal what works and what needs a pivot.",
      color: "hover:bg-red-500",
    },
    {
      title: "No Unified Strategy or Partner",
      subtitle: "Disconnected efforts lead to weak results",
      description:
        "Social media isn’t a one-person job — it’s a system. Without unified creative direction, ad management, and analytics, performance stalls. That’s why brands need a strategic partner to align it all.",
      color: "hover:bg-pink-500",
    },
  ];

  return (
    <section className="lg:max-w-[80%] mx-auto bg-black py-10 md:py-20 px-6 lg:px-20 relative z-10">
      {/* ✅ Heading + Paragraph */}
      <div className="lg:max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-bold text-white font-inter mb-6">
          Why Most Businesses{" "}
          <span className="text-blue-500">Struggle With Social Media</span>
        </h2>
        <p className="text-gray-300 lg:max-w-3xl mx-auto font-poppins leading-relaxed">
          Many Vancouver businesses spend time and money on social media without
          seeing results — because they focus on <span className="text-white font-semibold">activity, not strategy</span>.
          From low engagement to wasted ad spend, most challenges stem from missing the
          bigger picture: a unified, goal-driven approach to digital growth.
        </p>
      </div>

      {/* ✅ Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {struggles.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white group border ${item.color} border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition`}
          >
            <div className="flex items-center pb-4 border-b border-gray-200 mb-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-black group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 group-hover:text-gray-100">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <p className="text-gray-900 group-hover:text-gray-50 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Closing Line */}
      <div className="text-center mt-16">
        <p className="text-gray-400 italic max-w-3xl mx-auto leading-relaxed">
          Bixeltek builds and manages strategic social media ecosystems that
          align with your goals — combining{" "}
          <span className="text-blue-500">content, ads, and analytics</span> to
          create lasting impact.
        </p>
      </div>
    </section>
  );
}
