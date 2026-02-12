"use client";

import React from "react";

const EasternProvinceAreasSection = () => {
  return (
    <section className="bg-black py-20 px-6 lg:px-16">
      <div className="lg:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Proudly Serving Businesses Across the{" "}
            <span className="text-yellow-500">Eastern Province</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Bixeltek partners with organizations across major cities and
            industrial zones, including:
          </p>

          <ul className="space-y-5 text-gray-200 text-lg">
            <li>
              <span className="font-semibold text-green-400">Khobar –</span>{" "}
              Home to corporate offices and tech startups.
            </li>
            <li>
              <span className="font-semibold text-green-400">Dammam –</span>{" "}
              Industrial and logistics powerhouse.
            </li>
            <li>
              <span className="font-semibold text-green-400">Dhahran –</span>{" "}
              Hub of innovation and enterprise.
            </li>
            <li>
              <span className="font-semibold text-green-400">
                Jubail & Ras Tanura –
              </span>{" "}
              Growing sectors in manufacturing and energy.
            </li>
          </ul>

          <p className="text-gray-400 mt-8 leading-relaxed">
            We’ve designed campaigns that adapt to each city’s unique audience,
            competitive landscape, and business goals.
          </p>
        </div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        <div className="flex-1 w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
          {/* Replace the iframe below with your actual Google Maps embed */}
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14963735.107922506!2d39.52234617740168!3d23.702563250440082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f5.1!3m3!1m2!1s0x3e4019b3e33d8685%3A0x6db173e402bb58a6!2sEastern%20Province%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1760092023088!5m2!1sen!2sin" 
           width="600" height="450"  loading="lazy" className="min-h-[500px] w-full"></iframe>
        </div>
      </div>
    </section>
  );
};

export default EasternProvinceAreasSection;
