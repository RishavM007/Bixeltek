"use client";

import { Check } from "lucide-react";
import laptopimg from '@/assets/laptop dentist 2.png'
import Image from "next/image";

const WebsiteAuditSection = () => {
  const points = [
    "Design Without Strategy: Visually pleasing layouts with no lead flow.",
    "No SEO Integration: Websites invisible on Google or Gemini.",
    "Slow Loading Speeds: Every second delay increases bounce rate by 30%.",
    "Disconnected Messaging: Visitors can’t understand what the business offers.",
    "No Analytics or Tracking: Decisions based on assumption, not data.",
  ];

  return (
    <section className="bg-[black] py-10 md:py-20 flex flex-col md:flex-row items-center justify-between mx-auto max-w-[95%] md:max-w-[85%] gap-10">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
        <h2 className="text-3xl md:text-5xl font-inter font-medium  text-white mb-6 leading-snug">
          A Beautiful Website That Doesn’t Convert <span className="text-yellow-500">Is Just an Expensive Poster.</span> 
        </h2>

        <p className="text-gray-50 font-poppins text-base md:text-base leading-relaxed mb-8">
          We’ve audited hundreds of websites built by design agencies across Khobar, Dammam, and Riyadh — and the same issues keep showing up:
        </p>

        <ul className="text-gray-50 font-poppins text-base md:text-base space-y-4 mb-8">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="text-green-700 w-5 h-5 mt-1  flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-white font-poppins text-base md:text-base leading-relaxed">
          These mistakes don’t just cost traffic — they cost credibility. In a region where trust defines reputation, your website has to perform like your best salesperson, not just look like one.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={laptopimg}
          alt="Website Audit Illustration"
          className="rounded-2xl shadow-lg w-full max-w-[700px] object-contain"
        />
      </div>
    </section>
  );
};

export default WebsiteAuditSection;
