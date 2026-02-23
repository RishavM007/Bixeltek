'use client'
import { useInView } from "@/lib/inView";
import { useState } from "react";

interface Step {
  number: string;
  title: string;
  desc: string;
  detail: string;
}

const STEPS_A: Step[] = [
  {
    number: "01",
    title: "We Audit Your Practice",
    desc: "Deep competitive & local SEO analysis",
    detail:
      "We conduct a deep-dive into your Google Ads account, website conversion performance, and local SEO standing. You'll see exactly where revenue is being lost and where the biggest growth opportunities are.",
  },
  {
    number: "02",
    title: "We Build a Solution",
    desc: "Custom site live in 2 weeks. Free.",
    detail:
      "A custom growth strategy built around your market, your goals, and your practice size — combining Google Ads, Web Design, and SEO into one cohesive system.",
  },
  {
    number: "03",
    title: "We Drive Growth",
    desc: "Real-time ROI dashboard, tied to production",
    detail:
      "We implement, manage, and continuously optimize your campaigns and website. You see the results in your chair — more appointments, more patients, stronger ROI.",
  },
];

export function A_Process(){
                const { ref: processRef, inView: processIn } = useInView();
              const [activeStep, setActiveStep] = useState(0);
  return(
    <section
  ref={processRef}
  className="bg-[#1a0f00] py-[100px] px-[24px] md:py-[120px] md:px-[80px]"
>
  <div className="max-w-[1100px] mx-auto">
    
    {/* Top Label */}
    <div className="flex items-center gap-3 mb-5">
      <div className="w-[48px] h-[1px] bg-[#C9A84C]" />
      <span className="text-[11px] tracking-[5px] text-[#C9A84C] uppercase">
        THE PROCESS
      </span>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-start">
      
      {/* Left Heading */}
      <h2
        className={`
          font-['Syne',sans-serif]
          font-extrabold
          text-[clamp(36px,4vw,54px)]
          leading-[1.1]
          tracking-[-2px]
          text-[#F5F0E8]
          transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
          ${processIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        Three Steps.<br />
        <span className="text-[#C9A84C]">Fully Booked.</span><br />
        <span className="text-[55%] font-light text-[rgba(245,240,232,.4)]">
          No contracts. No confusion.<br />
          No guesswork.
        </span>
      </h2>

      {/* Steps */}
      <div className="flex flex-col">
        {STEPS_A.map((step, i) => (
          <div
            key={i}
            onClick={() => setActiveStep(i)}
            className={`
              border-t border-[rgba(245,240,232,.08)]
              py-8
              cursor-pointer
              transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
              ${processIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
            `}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="flex gap-6 items-start">
              
              {/* Step Number */}
              <span
                className={`
                  font-['Syne',sans-serif]
                  text-[11px]
                  tracking-[2px]
                  mt-[6px]
                  shrink-0
                  transition-colors duration-300
                  ${
                    activeStep === i
                      ? "text-[#C9A84C]"
                      : "text-[rgba(245,240,232,.2)]"
                  }
                `}
              >
                {step.number}
              </span>

              <div className="flex-1">
                
                {/* Title Row */}
                <div className="flex justify-between items-center">
                  <div className="font-['Syne',sans-serif] font-bold text-[18px] text-[#F5F0E8]">
                    {step.title}
                  </div>

                  <span
                    className={`
                      text-[#C9A84C]
                      text-[18px]
                      transition-transform duration-300
                      inline-block
                      ${activeStep === i ? "rotate-45" : "rotate-0"}
                    `}
                  >
                    +
                  </span>
                </div>

                {/* Short Description */}
                <div className="text-[13px] text-[rgba(245,240,232,.4)] mt-1">
                  {step.desc}
                </div>

                {/* Expandable Detail */}
                <div
                  className={`
                    overflow-hidden
                    transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
                    ${activeStep === i ? "max-h-[120px]" : "max-h-0"}
                  `}
                >
                  <p className="text-[14px] text-[rgba(245,240,232,.6)] leading-[1.7] mt-4 pt-4 border-t border-[rgba(201,168,76,.15)]">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="border-t border-[rgba(245,240,232,.08)] pt-8">
          <a
            href="#contact"
            className="
              inline-block
              bg-[#C9A84C]
              text-[#1a0f00]
              py-[16px] px-[40px]
              font-['DM Sans',sans-serif]
              font-bold
              text-[13px]
              tracking-[2px]
              uppercase
              transition-all duration-300
              hover:opacity-90
            "
          >
            Start Your Growth Audit  →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}