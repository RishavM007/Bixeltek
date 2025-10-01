'use client';

import React from 'react';
import Image from 'next/image';
import adsImg from '@/assets/seo-packages.png';
import { Check } from 'lucide-react'; // replace with your actual image

export default function AdBudgetSection() {
  const issues = [
    "High cost-per-click with low ROI",
    "Ads showing for irrelevant searches",
    "Weak ad copy that fails to attract clicks",
    "Landing pages that don’t convert visitors",
    "No tracking or reporting, leaving businesses blind",
  ];

  return (
    <section className="bg-black py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={adsImg}
          alt="Ad budget issues"
          className="rounded-xl shadow-lg"
          width={600}
          height={400}
          priority
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-white max-w-xl flex flex-col gap-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Why Many Vancouver Businesses <span className="text-blue-500">Waste Ad Budgets</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Google Ads is powerful — but without expertise, it quickly becomes expensive. 
          We’ve seen businesses across Vancouver waste thousands of dollars because campaigns weren’t set up or optimized correctly.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {issues.map((issue, idx) => (
            <p key={idx} className='flex gap-2'> <Check className="text-blue-500  w-5 h-5 shrink-0 mt-1" /> {issue}</p>
          ))}
        </ul>

        <p className="mt-4 text-blue-500 font-semibold text-lg">
          We transform underperforming ad accounts into lead-generation machines.
        </p>
      </div>
    </section>
  );
}
