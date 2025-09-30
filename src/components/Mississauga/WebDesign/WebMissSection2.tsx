import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import laptopimage from '@/assets/MacBook-Pro-Mockup.jpg';

export default function WhyBusinessesLoseCustomers() {
  const problems = [
    "Outdated designs that reduce brand credibility",
    "Slow loading speeds that push users away",
    "Poor mobile responsiveness",
    "No clear CTAs, leading to lost leads",
    "Sites not optimized for SEO or Google indexing",
  ];

  return (
    <section className="flex flex-col md:flex-row items-center bg-black text-white px-8 md:px-20 py-20 gap-10">
      
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          Why Businesses <span className="text-blue-500">Lose Customers Online</span>
        </h2>
        <p className="text-gray-300 text-lg">
          We’ve worked with Mississauga businesses that struggled with websites built years ago, 
          without modern design or functionality. The result? Visitors didn’t trust the brand 
          and left without converting.
        </p>

        {/* Problems List */}
        <ul className="space-y-3">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200 text-lg">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              {problem}
            </li>
          ))}
        </ul>

        {/* Closing Line */}
        <p className="mt-4 text-gray-300 font-semibold">
          We don’t just design websites — we build digital platforms that convert visitors into customers.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src={laptopimage}
          alt="Why Businesses Lose Customers"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
