"use client";

import { MapPin } from "lucide-react";

export default function AreasWeServeCanada() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted SEO Partner for Brands Across <span className="text-blue-500">Canada</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Bixeltek partners with businesses nationwide. From local service providers
            to ecommerce brands, we’ve helped companies across Canada capture demand
            and expand their digital presence.
          </p>

          <ul className="space-y-6 text-lg">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>Toronto & the GTA</strong> → Toronto, Mississauga, Brampton, Vaughan,
                Markham, Scarborough, North York, Etobicoke, Oakville
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>Ontario & Central Canada</strong> → Ottawa, Hamilton,
                Kitchener-Waterloo, London, Windsor, Montreal
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>Western Canada</strong> → Calgary, Edmonton, Vancouver, Winnipeg,
                Regina, Saskatoon
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>Atlantic Canada</strong> → Halifax, Moncton, St. John’s
              </span>
            </li>
          </ul>

          <p className="text-gray-300 text-lg mt-8">
            No matter where your business operates, our SEO frameworks adapt to local
            search behavior, industry competition, and national growth objectives.
          </p>
        </div>

        {/* Right Side - Map */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369107.53666429064!2d-79.7076989920169!3d43.71776753961089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1758887394177!5m2!1sen!2sin" width="600" height="450"  loading="lazy" className="min-h-[500px] w-full"></iframe>
        </div>
      </div>
    </section>
  );
}
