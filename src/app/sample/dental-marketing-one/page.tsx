'use client'
import { Whiteheader } from "@/components/Whiteheader";
import { Footer } from "@/sections/Footer";
import { useEffect, useRef, useState } from "react";


function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  result: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before Relevance we averaged 18 new patients a month — now we're consistently hitting 72. The ROI dashboard alone changed how I think about marketing spend.",
    name: "Dr. Sarah Chen",
    role: "General Dentist · Atlanta, GA",
    result: "+300% New Patients",
  },
  {
    quote:
      "We went from page 4 to the #1 Google result in our city in under 60 days. Our phone literally doesn't stop ringing anymore.",
    name: "Dr. Marcus Webb",
    role: "Cosmetic Dentist · Austin, TX",
    result: "#1 Google Ranking",
  },
  {
    quote:
      "Every dollar we spend, I can trace back to a specific patient and their treatment value. I've never had that kind of clarity before.",
    name: "Dr. Priya Nair",
    role: "Orthodontist · Seattle, WA",
    result: "$420K Added Revenue",
  },
];

interface CaseStudy {
  practice: string;
  type: string;
  before: string;
  after: string;
  metric: string;
  time: string;
}

interface Step {
  number: string;
  title: string;
  desc: string;
  detail: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    practice: "Elmwood Family Dental",
    type: "General Practice · Ohio",
    before: "14",
    after: "67",
    metric: "New Patients/Month",
    time: "90 Days",
  },
  {
    practice: "Coastal Smiles Studio",
    type: "Cosmetic · California",
    before: "$38K",
    after: "$147K",
    metric: "Monthly Production",
    time: "4 Months",
  },
  {
    practice: "Bright Orthodontics",
    type: "Orthodontics · Texas",
    before: "Page 7",
    after: "Page 1",
    metric: "Google Position",
    time: "45 Days",
  },
];

const STEPS_A: Step[] = [
  {
    number: "01",
    title: "We Audit Your Practice",
    desc: "Deep competitive & local SEO analysis",
    detail:
      "We dissect your online presence, competitors, local search landscape, and current patient acquisition cost — then build a custom roadmap.",
  },
  {
    number: "02",
    title: "We Build & Launch",
    desc: "Custom site live in 2 weeks. Free.",
    detail:
      "Conversion-optimized website, Google Ads campaign, and local SEO all go live simultaneously. Zero upfront cost, zero long-term contract.",
  },
  {
    number: "03",
    title: "You Watch It Work",
    desc: "Real-time ROI dashboard, tied to production",
    detail:
      "Your dashboard shows exactly which campaigns brought each patient in — and how much dentistry they completed. No guesswork, ever.",
  },
];

const Page = () =>{
        
           const { ref: painRef, inView: painIn } = useInView();
    return(
        <>
        <Whiteheader/>
          
          <A_Hero/>

                <div style={{ background: "#F5F0E8", fontFamily: "'DM Sans', sans-serif" }}>
              <A_Reality/>
              <A_Process/>                  
              <A_Testimonials/>
                  <A_Services/>
                  <A_Comparison/>
                  <A_ContactForm/>
                </div>
                <Footer/>
             </>
          );
        }

export default Page

// ─── Types ──────────────────────────────────────────────────────
interface FadeStyle {
  opacity: number;
  transform: string;
  transition: string;
}

const fi = (inView: boolean, delay = 0): FadeStyle => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(32px)",
  transition: `all .8s cubic-bezier(.4,0,.2,1) ${delay}s`,
});


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
          We build dental websites Google rewards and patients trust — then back
          it with ads, SEO, and real ROI dashboards. Your first month is
          completely free.
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
            "No Long Contracts",
            "Free Site Build",
            "Month-to-Month",
            "ROI Guaranteed",
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
            Start Free →
          </a>

          <a
            href="#"
            className="border border-[#C9A84C] text-[#C9A84C] px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest uppercase font-sans hover:bg-[#C9A84C] hover:text-[#1a0f00] transition-all duration-300 text-center"
          >
            View Results
          </a>
        </div>
      </div>
    </div>
  );
}

export function A_Reality(){
   const { ref: painRef, inView: painIn } = useInView();
  return(
    
   <section
  ref={painRef}
  className="
    relative overflow-hidden
    py-[80px] px-6
    md:py-[100px] md:px-10
    lg:py-[120px] lg:px-[80px]
  "
>
  {/* Decorative background text */}
  <div
    className="
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      font-['Syne'] font-black
      text-[120px]
      sm:text-[180px]
      lg:text-[280px]
      text-[rgba(201,168,76,.05)]
      whitespace-nowrap
      pointer-events-none select-none
      tracking-[-4px]
      sm:tracking-[-6px]
      lg:tracking-[-10px]
    "
  >
    GROWTH
  </div>

  <div className="relative z-[1] max-w-[1100px] mx-auto">

    {/* Section label */}
    <div className="flex items-center gap-3 mb-10 md:mb-12">
      <div className="w-[48px] h-px bg-[#C9A84C]" />
      <span className="font-['DM_Sans'] text-[11px] tracking-[5px] text-[#C9A84C] uppercase">
        The Reality
      </span>
    </div>

    {/* Grid Layout */}
    <div className="
      grid grid-cols-1
      lg:grid-cols-2
      gap-12
      sm:gap-16
      lg:gap-20
      items-center
    ">

      {/* LEFT SIDE */}
      <div
        className={`
          transition-all duration-[800ms] ease-[cubic-bezier(.4,0,.2,1)]
          ${painIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}
        `}
      >
        <h2
          className="
            font-['Syne'] font-extrabold
            text-[32px]
            sm:text-[42px]
            lg:text-[clamp(38px,4.5vw,58px)]
            text-[#1a0f00]
            leading-[1.1]
            lg:leading-[1.05]
            tracking-[-1px]
            lg:tracking-[-2px]
            mb-6
            lg:mb-7
          "
        >
          Most Dental Websites<br />
          Are <span className="text-[#C9A84C] italic">Invisible.</span><br />
          <span className="text-[65%] sm:text-[60%] font-normal text-[#6a5a3a]">
            Is yours one of them?
          </span>
        </h2>

        <p className="
          text-[15px]
          sm:text-[16px]
          text-[#6a5a3a]
          leading-[1.8]
          mb-6
          lg:mb-8
        ">
          93% of dental websites never appear on the first page of Google.
          Meanwhile your competitors are capturing every patient who searches
          "dentist near me" — patients who should be yours.
        </p>

        <div className="flex flex-col gap-4">
          {[
            ["Your site loads in 6s+", "Patients leave after 3s"],
            ["Generic stock photos", "Patients choose the practice they trust"],
            ["No call-to-action strategy", "Visitors browse, then book elsewhere"],
            ["No local SEO", "Competitors rank while you pay for ads that barely work"],
          ].map(([problem, impact], i) => (
            <div
              key={i}
              className={`
                flex items-start gap-4
                p-4
                bg-[rgba(26,15,0,.03)]
                border-l-[3px] border-[#C9A84C]
                transition-all duration-[700ms] ease-[cubic-bezier(.4,0,.2,1)]
                ${painIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[20px]"}
              `}
              style={{ transitionDelay: `${i * 0.1 + 0.3}s` }}
            >
              <div className="w-[8px] h-[8px] rounded-full bg-[#C9A84C] mt-[7px] flex-shrink-0" />
              <div>
                <div className="font-semibold text-[14px] text-[#1a0f00]">
                  {problem}
                </div>
                <div className="text-[13px] text-[#8a7a5a] mt-[2px]">
                  {impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`
          flex flex-col gap-5 w-full md:w-auto
          transition-all duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)] delay-[200ms]
          ${painIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}
        `}
      >
        {CASE_STUDIES.map((cs, i) => (
          <div
            key={i}
            className="
              relative overflow-hidden
              bg-white
              p-6
              sm:p-7
              lg:py-7 lg:px-8
              shadow-[0_4px_32px_rgba(26,15,0,.07)]
              border border-[rgba(201,168,76,.2)]
            "
          >
            <div className="
              absolute top-0 right-0
              w-[40px] h-[40px]
              sm:w-[50px] sm:h-[50px]
              lg:w-[60px] lg:h-[60px]
              bg-[linear-gradient(225deg,rgba(201,168,76,.15),transparent)]
            " />

            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-['Syne'] font-bold text-[15px] sm:text-[16px] text-[#1a0f00]">
                  {cs.practice}
                </div>
                <div className="text-[12px] text-[#8a7a5a] mt-[2px]">
                  {cs.type}
                </div>
              </div>

              <div className="
                bg-[rgba(201,168,76,.12)]
                text-[#8a6a1a]
                text-[10px]
                sm:text-[11px]
                py-[4px] px-[10px]
                sm:px-[12px]
                font-semibold
                tracking-[1px]
                uppercase
              ">
                {cs.time}
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="text-center">
                <div className="text-[12px] sm:text-[13px] text-[#aaa] mb-[4px]">
                  Before
                </div>
                <div className="font-['Syne'] text-[24px] sm:text-[28px] font-extrabold text-[#c44]">
                  {cs.before}
                </div>
              </div>

              <div className="flex-1 text-center">
                <div className="text-[18px] sm:text-[22px] text-[#C9A84C]">→</div>
                <div className="text-[10px] sm:text-[11px] text-[#8a7a5a] tracking-[1px] uppercase mt-[2px]">
                  {cs.metric}
                </div>
              </div>

              <div className="text-center">
                <div className="text-[12px] sm:text-[13px] text-[#aaa] mb-[4px]">
                  After
                </div>
                <div className="font-['Syne'] text-[24px] sm:text-[28px] font-extrabold text-[#2a7a4a]">
                  {cs.after}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  )
}

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
        How It Works
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
          No complexity. No confusion.<br />
          Just results.
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
            href="#"
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
            Start Your Free Month →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

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
            "{t.quote}"
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
        <div className="text-[14px] text-[rgba(245,240,232,.4)] mt-1">
          Your first month is completely free. No credit card required.
        </div>
      </div>

      <a
        href="#"
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
        Claim Free Month →
      </a>
    </div>
  </div>
</section>
 )
}

export function A_Services() {
  const { ref, inView } = useInView();

  const services = [
    {
      icon: "◈",
      title: "Custom Website Build",
      tag: "Included Free",
      desc: "Conversion-first design built around your specialty, brand, and patient avatar. Live in 14 days. No templates. No upfront cost.",
      highlight: true,
    },
    {
      icon: "◎",
      title: "Local SEO Domination",
      tag: "Ongoing",
      desc: "Google Business, citation building, keyword architecture, and on-page optimization targeting every high-intent search in your zip code.",
      highlight: false,
    },
    {
      icon: "◆",
      title: "Google & Meta Ads",
      tag: "Managed",
      desc: "Campaigns built to book patients — not collect clicks. Every ad dollar tracked from impression through completed treatment.",
      highlight: false,
    },
    {
      icon: "◉",
      title: "ROI Dashboard",
      tag: "Real-time",
      desc: "Your practice management system synced to your marketing data. See exactly which campaigns are producing which patients — by name.",
      highlight: false,
    },
    {
      icon: "◐",
      title: "Review Generation",
      tag: "Automated",
      desc: "Automated post-visit campaigns that turn happy patients into 5-star Google reviews. We've averaged 47 new reviews per month for our clients.",
      highlight: false,
    },
    {
      icon: "◑",
      title: "Reputation Monitoring",
      tag: "24/7",
      desc: "Every mention of your practice tracked in real time. We alert you and respond with AI-drafted replies within minutes — day or night.",
      highlight: false,
    },
  ];

  return (
   <section
  ref={ref as React.RefObject<HTMLElement>}
  className="relative overflow-hidden bg-[#F5F0E8] pb-20 px-6 md:py-[120px] md:px-[72px]"
>
  {/* Decorative Vertical Rule (hidden on mobile) */}
  <div className="hidden md:block absolute left-[72px] top-[120px] bottom-[120px] w-[1px] bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,.3),transparent)]" />

  <div className="max-w-[1120px] mx-auto">

    {/* ── Header ── */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-end mb-16 md:mb-[72px]">

      {/* Left */}
      <div
        className={`
          transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[48px] h-[1px] bg-[#C9A84C]" />
          <span className="font-['DM_Sans',sans-serif] text-[11px] tracking-[5px] text-[#C9A84C] uppercase">
            What You Get
          </span>
        </div>

        <h2 className="font-['Syne',sans-serif] text-[clamp(38px,4.5vw,58px)] font-extrabold text-[#1a0f00] leading-[1.05] tracking-[-2px]">
          One Retainer.<br />
          <span className="text-[#C9A84C]">Everything Included.</span>
        </h2>
      </div>

      {/* Right */}
      <div
        className={`
          transition-all duration-700 delay-200 ease-[cubic-bezier(.4,0,.2,1)]
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <p className="text-[17px] text-[#6a5a3a] leading-[1.8] mb-5">
          No à la carte pricing. No surprise add-ons. Every client gets the full suite —
          because piecemeal marketing is why most dental practices stagnate.
        </p>

        <div className="flex items-center gap-4">
          <div className="w-[6px] h-[6px] rounded-full bg-[#C9A84C]" />
          <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#8a7a5a]">
            Starting from $997/mo after your free first month
          </span>
        </div>
      </div>
    </div>

    {/* ── Service Cards Grid ── */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
      {services.map((s, i) => (
        <div
          key={i}
          className={`
            relative overflow-hidden p-[36px] md:p-[44px]
            transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            ${s.highlight
              ? "bg-[#1a0f00]"
              : "bg-white border border-[rgba(201,168,76,.15)]"}
          `}
          style={{ transitionDelay: `${i * 0.08}s` }}
        >
          {/* Highlight shimmer */}
          {s.highlight && (
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(201,168,76,.15),transparent)]" />
          )}

          {/* Top Row */}
          <div className="flex justify-between items-start mb-7">
            <span className="font-['DM_Sans',sans-serif] text-[26px] text-[#C9A84C]">
              {s.icon}
            </span>

            <span
              className={`
                font-['DM_Sans',sans-serif] text-[10px] tracking-[2px] uppercase
                border border-[rgba(201,168,76,.2)]
                py-[3px] px-[10px]
                ${s.highlight
                  ? "text-[rgba(201,168,76,.6)]"
                  : "text-[#8a7a5a]"}
              `}
            >
              {s.tag}
            </span>
          </div>

          {/* Title */}
          <div
            className={`
              font-['Syne',sans-serif] font-bold text-[17px] mb-3
              ${s.highlight ? "text-[#F5F0E8]" : "text-[#1a0f00]"}
            `}
          >
            {s.title}
          </div>

          {/* Description */}
          <div
            className={`
              text-[14px] leading-[1.75]
              ${s.highlight
                ? "text-[rgba(245,240,232,.55)]"
                : "text-[#6a5a3a]"}
            `}
          >
            {s.desc}
          </div>

          {/* Bottom Accent Line */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 h-[2px]
              ${
                s.highlight
                  ? "bg-[linear-gradient(to_right,#C9A84C,rgba(201,168,76,.2))]"
                  : "bg-[rgba(201,168,76,.1)]"
              }
            `}
          />
        </div>
      ))}
    </div>

    {/* ── Footer Callout ── */}
    <div className="mt-[2px] bg-[rgba(201,168,76,.06)] border border-[rgba(201,168,76,.15)] p-6 md:p-[32px_40px] flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
      
      <div className="font-['Playfair_Display',serif] text-[17px] md:text-[18px] text-[#1a0f00] italic">
        &ldquo;We don&apos;t win by locking you in. We win by earning your trust — every single month.&rdquo;
      </div>

      <a
        href="#"
        className="
          bg-[#1a0f00] text-[#F5F0E8]
          py-[14px] px-[36px]
          font-['DM_Sans',sans-serif]
          font-bold text-[13px]
          tracking-[2px] uppercase
          whitespace-nowrap
          transition-all duration-300
          hover:opacity-90
        "
      >
        See Pricing →
      </a>
    </div>

  </div>
</section>
  );
}

export function A_Comparison() {
  const { ref, inView } = useInView();

  const rows = [
    { label: "Website build cost",   them: "Charge $3,000–$8,000 upfront",        us: "Completely free. Always." },
    { label: "Contract length",       them: "12–24 month lock-in",                 us: "Month-to-month. Cancel anytime." },
    { label: "ROI visibility",        them: "Vanity metrics: clicks & impressions", us: "Revenue tied to real patient treatment" },
    { label: "SEO approach",          them: "Generic blog posts, slow results",     us: "Local-first architecture, ranking in weeks" },
    { label: "Ad management",         them: "Optimize for clicks, bill for spend",  us: "Optimize for booked patients only" },
    { label: "Practice integration",  them: "Separate tools, siloed data",          us: "Synced with Dentrix, Eaglesoft & more" },
    { label: "Account management",    them: "High churn, rotating reps",            us: "Dedicated strategist who knows your practice" },
    { label: "First month",           them: "Full billing from day 1",              us: "Free. No credit card required." },
  ];

  return (
    <section
  ref={ref as React.RefObject<HTMLElement>}
  className="bg-[#1a0f00] py-[100px] px-[24px] md:py-[120px] md:px-[72px]"
>
  <div className="max-w-[1120px] mx-auto">

    {/* ── Header Label ── */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-[48px] h-[1px] bg-[#C9A84C]" />
      <span className="font-['DM_Sans',sans-serif] text-[11px] tracking-[5px] uppercase text-[#C9A84C]">
        The Difference
      </span>
    </div>

    {/* ── Heading ── */}
    <h2
      className={`
        font-['Syne',sans-serif]
        text-[clamp(36px,4.5vw,58px)]
        font-extrabold
        leading-[1.05]
        tracking-[-2px]
        text-[#F5F0E8]
        mb-12 md:mb-[60px]
        transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      Other Agencies.<br />
      <span className="text-[#C9A84C]">
        Then There&apos;s Relevance.
      </span>
    </h2>

    {/* ── Table Header ── */}
    <div className="hidden lg:grid grid-cols-3 gap-[2px] mb-[2px]">
      <div className="bg-[rgba(255,255,255,.04)] px-6 py-4">
        <span className="font-['DM_Sans',sans-serif] text-[11px] tracking-[3px] uppercase text-[rgba(245,240,232,.3)]">
          Comparison Point
        </span>
      </div>

      <div className="bg-[rgba(255,255,255,.04)] px-6 py-4 flex items-center gap-2">
        <span className="w-[6px] h-[6px] rounded-full bg-[#c44]" />
        <span className="font-['Syne',sans-serif] text-[13px] font-bold text-[#c44]">
          Other Agencies
        </span>
      </div>

      <div className="bg-[rgba(201,168,76,.08)] px-6 py-4 flex items-center gap-2">
        <span className="w-[6px] h-[6px] rounded-full bg-[#C9A84C]" />
        <span className="font-['Syne',sans-serif] text-[13px] font-bold text-[#C9A84C]">
          Relevance
        </span>
      </div>
    </div>

    {/* ── Table Rows ── */}
    {rows.map((r, i) => (
      <div
        key={i}
        className={`
          grid grid-cols-1 lg:grid-cols-3 gap-[2px] mb-[2px]
          transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
          ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
        `}
        style={{ transitionDelay: `${i * 0.06}s` }}
      >
        {/* Label */}
        <div className="bg-[rgba(255,255,255,.025)] px-6 py-5 flex items-center">
          <span className="font-['DM_Sans',sans-serif] text-[14px] font-medium text-[rgba(245,240,232,.5)]">
            {r.label}
          </span>
        </div>

        {/* Them */}
        <div className="bg-[rgba(255,255,255,.02)] px-6 py-5 flex items-center gap-3">
          <span className="text-[#c44] text-[14px] shrink-0">✕</span>
          <span className="font-['DM_Sans',sans-serif] text-[14px] text-[rgba(245,240,232,.38)]">
            {r.them}
          </span>
        </div>

        {/* Us */}
        <div className="bg-[rgba(201,168,76,.05)] px-6 py-5 flex items-center gap-3">
          <span className="text-[#C9A84C] text-[16px] shrink-0">✓</span>
          <span className="font-['DM_Sans',sans-serif] text-[14px] font-medium text-[rgba(245,240,232,.75)]">
            {r.us}
          </span>
        </div>
      </div>
    ))}

    {/* ── Bottom CTA ── */}
    <div className="mt-12 md:mt-[60px] pt-10 border-t border-[rgba(245,240,232,.08)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

      <div>
        <div className="font-['Syne',sans-serif] text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-1px] text-[#F5F0E8]">
          You deserve better than what you&apos;ve settled for.
        </div>
        <div className="text-[14px] text-[rgba(245,240,232,.35)] mt-2">
          First month free. No contracts. No credit card.
        </div>
      </div>

      <a
        href="#"
        className="
          bg-[#C9A84C] text-[#1a0f00]
          py-[16px] md:py-[18px]
          px-[36px] md:px-[48px]
          font-['DM_Sans',sans-serif]
          font-bold text-[13px] md:text-[14px]
          tracking-[2px] uppercase
          whitespace-nowrap
          transition-all duration-300
          hover:opacity-90
        "
      >
        Switch to Relevance →
      </a>
    </div>

  </div>
</section>
  );
}

export function A_ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#F5F0E8] py-20 md:py-24 px-6 md:px-10 lg:px-20 font-['DM_Sans',sans-serif]"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section label ── */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-px bg-[#C9A84C]" />
          <span className="text-[11px] tracking-[5px] text-[#C9A84C] uppercase font-semibold">
            Get Started
          </span>
        </div>

        {/* ── Outer card: split layout ── */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 shadow-2xl shadow-[#1a0f00]/10">

          

          {/* ── Left panel — form ── */}
          <div className="lg:col-span-3 bg-white p-10 lg:p-14">

            <h3 className="font-['Syne',sans-serif] text-xl font-800 text-[#1a0f00] mb-1 font-bold tracking-tight">
              Tell us about your practice
            </h3>
            <p className="text-[#6a5a3a] text-sm mb-8">
              All fields marked <span className="text-red-500">*</span> are required.
            </p>

            <div className="flex flex-col gap-5">

              {/* Row 1: Practice Name + Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Dental Practice Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Smile Dental Studio"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Jane Smith"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jane@smiledental.com"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Website + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="www.smiledental.com"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Atlanta"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 4: Specialty dropdown */}
              {/* <div className="flex flex-col gap-1.5">
                <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                  Practice Specialty <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full appearance-none border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200 cursor-pointer pr-10">
                    <option value="" className="text-[#b8a88a]">Select your specialty</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="oral-surgery">Oral Surgery</option>
                    <option value="periodontics">Periodontics</option>
                    <option value="endodontics">Endodontics</option>
                    <option value="multi">Multi-Specialty</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#C9A84C]">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div> */}

              {/* Row 5: Message textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                  Current Challenges
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your current marketing situation, monthly patient volume, and what you're hoping to achieve..."
                  className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200 resize-none leading-relaxed"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#1a0f00] text-[#F5F0E8] text-sm font-bold uppercase tracking-[2px] py-4 hover:bg-[#C9A84C] hover:text-[#1a0f00] transition-all duration-300 group flex items-center justify-center gap-3 mt-1"
              >
                Request My Growth Audit
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

              {/* Legal */}
              <p className="text-[#8a7a5a] text-[11px] leading-relaxed text-center">
                By submitting, you consent to receive informational SMS and appointment reminders from BixelTek. Msg & data rates may apply. Reply STOP to unsubscribe.{" "}
                <a href="/privacy-policy" className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors">
                  Privacy Policy & Terms.
                </a>
              </p>
            </div>
          </div>

          {/* ── Right panel — dark obsidian ── */}
          <div className="lg:col-span-2 bg-[#1a0f00] p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C9A84C]/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#C9A84C]/8 to-transparent pointer-events-none" />

            <div>
              {/* Gold rule */}
              <div className="w-10 h-[2px] bg-[#C9A84C] mb-8" />

              <h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-black text-[#F5F0E8] leading-[1.1] tracking-[-1.5px] mb-6">
                Get Your Dental<br />
                Growth Audit.
              </h2>

              <p className="text-[#F5F0E8]/50 text-sm leading-relaxed mb-10">
                Fill out the form and our dental marketing experts will reach out within one business day to walk through your growth opportunities.
              </p>

              {/* Trust signals */}
              <div className="flex flex-col gap-4">
                {[
                  ["◈", "No sales pressure — just honest insights"],
                  ["◎", "Tailored to your specialty & location"],
                  ["◆", "Competitive analysis included"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-base mt-0.5 flex-shrink-0">{icon}</span>
                    <span className="text-[#F5F0E8]/60 text-sm leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom quote */}
            <div className="mt-12 pt-8 border-t border-[#F5F0E8]/8">
              <p className="font-['Playfair_Display',serif] text-[#F5F0E8]/45 text-[13px] italic leading-relaxed">
                "The audit alone showed us three gaps we hadn't considered."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-[10px] font-bold flex-shrink-0">
                  SC
                </div>
                <span className="text-[#F5F0E8]/30 text-xs">Dr. Sarah Chen · Atlanta, GA</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}