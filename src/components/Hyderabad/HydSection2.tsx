// app/components/About.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HydAbout() {
   const aboutRef = useRef(null);

  return (
    <section
      ref={aboutRef}
      className="relative min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Why Digital Marketing Matters
          </h2>
          <p className="text-gray-300 mb-4">
            Hyderabad is one of India’s most competitive markets. From healthcare and 
            education to real estate, restaurants, and SaaS — every business is fighting 
            for visibility.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>✅ Competitors appear on Google while you don’t.</li>
            <li>✅ Ads cost money but bring little return.</li>
            <li>✅ Your website looks fine but doesn’t convert.</li>
            <li>✅ Customers don’t remember or trust your brand.</li>
          </ul>

          <p className="mt-6 text-gray-200 font-medium">
            The good news? These problems are fixable. Digital marketing makes sure 
            your business is present at the right time, in the right place, with the 
            right message.
          </p>
        </div>

        {/* Right Side - Visual Card */}
        <div className="bg-neutral-800 rounded-2xl shadow-lg p-8">
          <div className="h-72 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
            <span className="text-2xl font-bold">📊 Marketing Impact</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>SEO</span>
              <span>98%</span>
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full w-[98%]" />
            </div>

            <div className="flex justify-between">
              <span>Digital Ads</span>
              <span>92%</span>
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-[92%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
