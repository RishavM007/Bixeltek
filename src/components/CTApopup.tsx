"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import popupImage from "@/assets/popupimg.png"; // put your image inside /public

const DemoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("bixeltekPopupSeen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 20000); // 20s delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("bixeltekPopupSeen", "true");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-5 md:left-2 z-[100] flex justify-start w-full md:w-auto">
      <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden w-[90vw] max-w-[350px] md:w-[350px] md:h-[400px] animate-slideUp flex flex-col justify-between border border-gray-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close Popup"
        >
          ×
        </button>

        {/* Image */}
        <div className="p-4 flex justify-center">
          <Image
            src={popupImage}
            alt="Bixeltek Growth"
            width={270}
            height={270}
            className="border-gray-100"
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-6 text-center flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-inter font-bold mb-2 text-gray-900">
              Ready to Scale with Bixeltek?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We help brands dominate Google Ads and social media with powerful,
              ROI-driven strategies. Let’s turn your clicks into clients.
            </p>
          </div>
            <a href="/contact-us">
          <button
            className="mt-5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-200"
          >
            Book a Free Demo
          </button>
          </a>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DemoPopup;
