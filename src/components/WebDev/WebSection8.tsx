"use client";

import { MapPin } from "lucide-react";

export default function AreasWeServe() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Areas */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Areas We Serve</h2>
          <ul className="space-y-6 text-lg">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>India</strong> → Hyderabad, Bangalore, Delhi, Mumbai
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>USA</strong> → New York, Los Angeles, Chicago, Dallas
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>Canada</strong> → Toronto, Vancouver, Calgary, Montreal
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>UAE</strong> → Dubai, Abu Dhabi, Sharjah
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>Saudi Arabia</strong> → Riyadh, Jeddah, Dammam
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>UK</strong> → London, Manchester, Birmingham
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side - Iframe */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0231806286224!2d78.39298110875555!3d17.36261755181946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x801d7036c2b29689%3A0x147a268620903039!2sBixeltek%20-%20A%20Google%20Partner%20Agency%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1smr!2sin!4v1757509966447!5m2!1smr!2sin" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}
