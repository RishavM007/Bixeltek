'use client';

import React from 'react';
import Image from 'next/image';
import adsImg from '@/assets/Google Ads Dashboard.png';
import { Check } from 'lucide-react';

export default function AdBudgetSection() {
  const issues = [
    "High cost-per-click with low ROI",
    "Ads showing for irrelevant searches",
    "Weak ad copy that fails to attract clicks",
    "Landing pages that don’t convert visitors",
    "No tracking or reporting, leaving businesses blind",
  ];

  return (
    <section className="bg-black max-w-[90%] lg:max-w-[85%] mx-auto py-10 md:py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center items-center relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
          <Image
            src={adsImg}
            alt="Ad budget issues"
            className="rounded-xl shadow-2xl object-cover object-center"
            fill
            priority
          />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2 flex flex-col justify-center text-white gap-6 ">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Many Vancouver Businesses <span className="text-blue-500">Waste Ad Budgets</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Google Ads is powerful — but without expertise, it quickly becomes expensive. 
            We’ve seen businesses across Vancouver waste thousands of dollars because campaigns weren’t set up or optimized correctly.
          </p>

          <ul className="space-y-3">
            {issues.map((issue, idx) => (
              <li key={idx} className='flex gap-3 items-start'>
                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" /> 
                <span className="text-gray-300">{issue}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-blue-500 font-semibold text-lg">
            We transform underperforming ad accounts into lead-generation machines.
          </p>
        </div>

      </div>
    </section>
  );
}
