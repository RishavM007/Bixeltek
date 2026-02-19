"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import crawlBudgetImg from "@/assets/Connect_data_from_all_your_SEO_tools_3c4223e73f.webp"; // 🖼️ Replace with your actual image

export default function CrawlOptimizationSection() {
  const methods = [
    { id: 1, text: "Log File Analysis: reveals which URLs Googlebot is actually crawling — and which ones it’s ignoring." },
    { id: 2, text: "Sitemap Optimization: removes noise and prioritizes URLs that drive conversions." },
    { id: 3, text: "Crawl Depth Flattening: ensures your most valuable content is never buried." },
  ];

  const impacts = [
    { id: 1, text: "30–50% improvement in indexation speed." },
    { id: 2, text: "Fewer crawl errors and wasted resources." },
    { id: 3, text: "Faster ranking updates for new and refreshed content." },
  ];

  return (
    <section className="px-6 lg:w-[85%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between md:py-20 gap-10 md:gap-16">
      {/* Left - Content */}
      <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
          Google Can’t Rank What It <span className="text-blue-500">Can’t Reach</span>
        </h2>

        <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
          Every website has a crawl budget — the number of pages Google will visit before moving on.
          Most sites waste this on irrelevant or duplicate URLs. We fix crawl inefficiencies by
          engineering how search engines explore your site.
        </p>

        {/* Methodology Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Our Methodology</h3>
          <ul className="space-y-4">
            {methods.map((method) => (
              <li key={method.id} className="flex items-start gap-3 text-gray-200">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{method.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-white mb-4">Impact</h3>
          <ul className="space-y-3">
            {impacts.map((impact) => (
              <li key={impact.id} className="flex items-start gap-3 text-gray-200">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{impact.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-gray-400 italic text-sm md:text-base">
          When search engines crawl efficiently, your updates get discovered and ranked faster —
          turning technical precision into measurable visibility.
        </p>
      </div>

      {/* Right - Image */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={crawlBudgetImg}
          alt="Crawl Optimization Dashboard"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
