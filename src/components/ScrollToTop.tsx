'use client'; 

import React from 'react';

export default function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed hidden md:flex bottom-10 z-50 right-10 md:right-20 items-center space-x-3"
    >
      <p className="text-white font-sofiasanscondensed tracking-wide text-sm md:text-lg">
        Back to <span className="font-bold">Top</span>
      </p>

      <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all duration-300">
        <i className="fas fa-arrow-up text-[18px] text-white"></i>
      </div>
    </button>
  );
}
