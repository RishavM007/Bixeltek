import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import laptopimage from '@/assets/Free-Laptop-Notebook-in-Darkness-Mockup-PSD-File-1.jpg';

export default function WebDesignConversionSection() {
  const benefits = [
    "Build credibility and trust instantly",
    "Provide seamless mobile and desktop experiences",
    "Increase leads and sales with conversion-focused layouts",
    "Improve SEO performance with a technically optimized foundation",
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center bg-black text-white px-6 lg:px-20 py-20 gap-10">
      
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 relative">
        <Image
          src={laptopimage}
          alt="Web Design Mississauga"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl md:text-6xl font-bold">
          Your Website Is Your 24/7 Salesperson —{" "}
          <span className="text-blue-500">Is It Converting?</span>
        </h2>
        <p className="text-gray-300 text-lg">
          In a competitive city like Mississauga, customers research online before making a decision. 
          If your website looks outdated, loads slowly, or doesn’t work well on mobile, visitors leave — 
          and they don’t come back.
        </p>

        {/* Benefits List */}
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200 text-lg">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Closing Line */}
        <p className="mt-4 text-gray-300 font-semibold">
          A well-designed website keeps visitors engaged and drives growth.
        </p>
      </div>
    </section>
  );
}
