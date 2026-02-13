'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react'; // ✅ Import Check icon
import chaosImg from '@/assets/Google Ads Dashboard.png'; // replace with relevant image

export default function MarketingChaosRiyadh() {
  const points = [
    'Campaigns run without conversion tracking or analytics.',
    'Poor Arabic localization that misses cultural tone.',
    'Websites that load slowly or fail to convert.',
    'SEO strategies built on keywords, not entities.',
    'Ad budgets wasted on irrelevant audiences.',
  ];

  return (
    <section className="relative px-6 -mt-[2px] pb-20 md:pb-10 py-0 md:py-0 bg-[#fffdf5]">
      <div className="flex lg:max-w-[85%] mx-auto gap-10 flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mt-[-50px] md:mt-0 lg:py-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-inter text-black font-medium mb-6 leading-snug">
            If You’re Still Relying on Guesswork,{' '}
            <span className="text-yellow-500">You’re Leaving Growth on the Table.</span>
          </h2>

          {/* Copy */}
          <p className="text-gray-900 mb-4 font-poppins leading-relaxed max-w-2xl">
            Many Riyadh businesses still rely on outdated marketing habits — boosting random posts, running broad ads, or trusting agencies that don’t report performance transparently. That might bring clicks, but it doesn’t build a system. Here’s what we see every day:
          </p>

          {/* Points in 2 Columns with Check icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            <ul className="space-y-3">
              {points.slice(0, 3).map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="text-green-600 w-7 h-7 mt-1 flex-shrink-0" />
                  <span className="text-gray-900 font-semibold font-poppins">{point}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {points.slice(3).map((point, idx) => (
                <li key={idx + 3} className="flex items-start gap-3">
                  <Check className="text-green-600 w-7 h-7 mt-1 flex-shrink-0" />
                  <span className="text-gray-900 font-semibold font-poppins">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-900 mb-6 font-poppins leading-relaxed max-w-2xl">
            Your challenge isn’t visibility — it’s structure. Without a connected framework linking ads, SEO, and analytics, marketing becomes guesswork. Bixeltek replaces that chaos with clarity — building systems that deliver consistent, measurable ROI.
          </p>

          {/* CTA Button */}
          <Link href={'#form'}>
            <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
              Get a Free Marketing Audit
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 rounded-l-[40px] bg-transparent flex justify-center items-center">
          <Image
            src={chaosImg}
            alt="Marketing chaos in Riyadh"
            className="rounded-[0px] h-[400px] lg:h-[800px] object-cover z-10 "
          />
        </div>
      </div>
    </section>
  );
}
