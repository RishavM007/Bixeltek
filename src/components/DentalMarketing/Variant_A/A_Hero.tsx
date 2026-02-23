'use client'

import { useEffect, useState } from "react";

export function A_Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    //@ts-ignore
    const animate = (setter, target, duration) => {
      let start = 0;
      const step = target / (duration / 16);
      const t = setInterval(() => {
        start += step;
        if (start >= target) {
          setter(target);
          clearInterval(t);
        } else setter(Math.floor(start));
      }, 16);
    };

    setTimeout(() => {
      animate(setCount1, 60, 1200);
      animate(setCount2, 500, 1400);
      animate(setCount3, 98, 1000);
    }, 400);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen bg-[#F5F0E8] overflow-hidden font-serif">
      
      {/* LEFT IMAGE SECTION */}
      <div className="relative w-full lg:w-[45%] h-[60vh] lg:min-h-screen flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80"
          alt="Modern dental clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent " />

        {/* Gold Accent Line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C9A84C] via-[#E8CA7A] to-[#C9A84C]" />

        {/* Vertical Text (hidden on mobile) */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <span className="text-[11px] tracking-[6px] text-white/60 uppercase font-sans font-light whitespace-nowrap">
            Dental Marketing Excellence
          </span>
        </div>

        {/* Bottom Quote */}
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6">
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans font-light italic border-l-2 border-[#C9A84C] pl-4">
            "From 15 new patients a month to over 60 — in 90 days."
          </p>
          <p className="text-[#C9A84C] text-[10px] sm:text-xs mt-2 font-sans tracking-widest uppercase">
            — Dr. Rob Dennis, Ohio
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT SECTION */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[10px] tracking-[4px] text-[#C9A84C] uppercase font-sans">
            Dental Growth Partner
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#1a0f00] leading-tight tracking-[-1px] xl:tracking-[-2px] mb-6">
          Your Practice.<br />
          <span className="text-[#C9A84C]">Fully Booked.</span><br />
          <span className="text-2xl sm:text-3xl xl:text-5xl font-light text-[#5a4a2a] tracking-[-0.5px]">
            Every Single Week.
          </span>
        </h1>

        <p className="text-[#6a5a3a] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-sans font-light max-w-xl">
          We help dental clinics achieve consistent, measurable growth through Google Ads, high-converting Web Design, and SEO that puts you at the top of local search — week after week.
        </p>

        {/* STATS */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 border-t border-[#D5C9A8] pt-8 md:pt-10">
          
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f00] tabular-nums">
              {count1}+
            </div>
            <div className="text-xs text-[#8a7a5a] mt-1 font-sans tracking-widest uppercase">
              New Patients/Mo
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-[#D5C9A8]" />

          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f00] tabular-nums">
              {count2}+
            </div>
            <div className="text-xs text-[#8a7a5a] mt-1 font-sans tracking-widest uppercase">
              Practices Grown
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-[#D5C9A8]" />

          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0f00] tabular-nums">
              {count3}%
            </div>
            <div className="text-xs text-[#8a7a5a] mt-1 font-sans tracking-widest uppercase">
              Retention Rate
            </div>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
          {[
            "No contracts",
              "Conversion Optimized Website",
              "Guaranteed results",
              "Google Certified Team"
          ].map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 text-xs text-[#8a7a5a] font-sans"
            >
              <span className="text-[#C9A84C]">◆</span> {b}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 mt-12 sm:mt-16">
          <a
            href="#"
            className="bg-[#1a0f00] text-[#F5F0E8] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest uppercase font-sans hover:bg-[#C9A84C] hover:text-[#1a0f00] transition-all duration-300 text-center"
          >
            Start How →
          </a>

          {/* <a
            href="#"
            className="border border-[#C9A84C] text-[#C9A84C] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest uppercase font-sans hover:bg-[#C9A84C] hover:text-[#1a0f00] transition-all duration-300 text-center"
          >
            View Results
          </a> */}
        </div>
      </div>
    </div>
  );
}