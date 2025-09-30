import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import laptopimage from '@/assets/kpi-img-3.webp'

export default function SocialMediaStruggleSection() {
  const issues = [
    "Low engagement and follower growth",
    "Inconsistent posting that weakens brand presence",
    "Ads that drain budgets without delivering ROI",
    "Content that fails to connect with the right audience",
    "No clear metrics or reporting",
  ];

  return (
    <section className="flex flex-col md:flex-row items-center bg-black text-white px-8 md:px-20 py-20 gap-10">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src={laptopimage}
          alt="Social Media Struggles"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          Why Most Mississauga Businesses <span className='text-blue-500'>Struggle With Social Media</span> 
        </h2>
        <p className="text-gray-300 text-lg">
          Posting random updates or boosting posts isn’t enough. Many Mississauga businesses waste time and ad dollars because they lack strategy, content, or expertise.
        </p>

        {/* Issues List */}
        <ul className="space-y-3">
          {issues.map((issue, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200 text-lg">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              {issue}
            </li>
          ))}
        </ul>

        {/* Closing Line */}
        <p className="mt-4 text-gray-300 font-semibold">
          We transform underperforming accounts into growth engines.
        </p>
      </div>
    </section>
  );
}
