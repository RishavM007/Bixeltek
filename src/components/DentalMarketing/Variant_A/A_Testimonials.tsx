'use client'
import { useInView } from "@/lib/inView";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  result: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We were spending on ads with zero clarity on returns. BixelTek restructured everything — within 60 days, our booking rate jumped and we finally understood our numbers.",
    name: "Dr. Sarah Chen",
    role: "General Dentist ",
    result: "+300% New Patients",
  },
  {
    quote:
      "Our old site looked great but converted nobody. After the redesign, our consultation requests doubled in the first month.",
    name: "Dr. Mark Thompson",
    role: "Cosmetic Dentist",
    result: "#1 Google Ranking",
  },
  {
    quote:
      "BixelTek's SEO work moved us from page 3 to page 1 for our top keywords. The ROI has been significant and consistent.",
    name: "Dr. Priya Nair",
    role: "Family Dental Practice",
    result: "$420K Added Revenue",
  },
];

export function A_Testimonials (){

  const { ref: testiRef, inView: testiIn } = useInView();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
                const t = setInterval(
                  () => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length),
                  4000
                );
                return () => clearInterval(t);
              }, []);
 return(
  <section
  ref={testiRef}
  className="relative overflow-hidden bg-[#F5F0E8] py-20 px-6 md:py-[120px] md:px-[80px]"
>
  {/* Radial Background Blob */}
  <div className="pointer-events-none absolute -bottom-[40px] -right-[40px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,.08),transparent)]" />

  <div className="max-w-[1100px] mx-auto">
    
    {/* Section Label */}
    <div className="flex items-center gap-3 mb-12 md:mb-[60px]">
      <div className="w-[48px] h-[1px] bg-[#C9A84C]" />
      <span className="text-[11px] tracking-[5px] text-[#C9A84C] uppercase">
        Client Voices
      </span>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[28px]">
      {TESTIMONIALS.map((t, i) => (
        <div
          key={i}
          onClick={() => setActiveTestimonial(i)}
          className={`
            relative overflow-hidden cursor-pointer
            border transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
            p-[36px] lg:p-[40px]
            ${testiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            ${i === activeTestimonial 
              ? "bg-[#1a0f00] border-[#1a0f00] shadow-[0_24px_60px_rgba(26,15,0,.2)] -translate-y-2" 
              : "bg-white border-[rgba(201,168,76,.2)]"}
          `}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          {/* Result Badge */}
          <div
            className={`
              inline-block text-[11px] font-bold uppercase tracking-[1px]
              py-[4px] px-[14px] mb-6 text-[#C9A84C]
              ${i === activeTestimonial
                ? "bg-[rgba(201,168,76,.2)]"
                : "bg-[rgba(201,168,76,.1)]"}
            `}
          >
            {t.result}
          </div>

          {/* Quote */}
          <p
            className={`
              font-['Playfair_Display',serif]
              italic text-[15px] leading-[1.75] mb-7
              ${
                i === activeTestimonial
                  ? "text-[rgba(245,240,232,.85)]"
                  : "text-[#4a3a1a]"
              }
            `}
          >
            &quot;{t.quote}&quot;
          </p>

          {/* Author */}
          <div
            className={`
              flex items-center gap-3 pt-5 border-t
              ${
                i === activeTestimonial
                  ? "border-[rgba(245,240,232,.1)]"
                  : "border-[rgba(201,168,76,.15)]"
              }
            `}
          >
            {/* Avatar */}
            <div
              className={`
                w-[40px] h-[40px] rounded-full flex items-center justify-center
                font-['Syne',sans-serif] font-bold text-[15px]
                text-[#C9A84C]
                ${
                  i === activeTestimonial
                    ? "bg-[rgba(201,168,76,.2)]"
                    : "bg-[rgba(201,168,76,.1)]"
                }
              `}
            >
              {t.name.charAt(0)}
            </div>

            <div>
              <div
                className={`
                  font-bold text-[13px]
                  ${
                    i === activeTestimonial
                      ? "text-[#F5F0E8]"
                      : "text-[#1a0f00]"
                  }
                `}
              >
                {t.name}
              </div>
              <div
                className={`
                  text-[11px] mt-[2px]
                  ${
                    i === activeTestimonial
                      ? "text-[rgba(245,240,232,.4)]"
                      : "text-[#8a7a5a]"
                  }
                `}
              >
                {t.role}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA Band */}
    <div className="mt-16 md:mt-[80px] bg-gradient-to-br from-[#1a0f00] to-[#2d1a00] p-8 md:p-[48px] lg:p-[60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      
      <div>
        <div className="font-['Syne',sans-serif] text-[24px] md:text-[28px] font-extrabold text-[#F5F0E8] tracking-[-1px]">
          Ready to be the next success story?
        </div>
      </div>

      <a
        href="#contact"
        className="
          bg-[#C9A84C] text-[#1a0f00]
          py-[16px] md:py-[18px]
          px-[40px] md:px-[48px]
          font-['DM_Sans',sans-serif]
          font-bold text-[13px] md:text-[14px]
          tracking-[2px] uppercase
          whitespace-nowrap
          transition-all duration-300
          hover:opacity-90
        "
      >
         Partner With Us  →
      </a>
    </div>
  </div>
</section>
 )
}