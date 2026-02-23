'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselImages = [
  '/dm-carousel/carousel-1.png',
  '/dm-carousel/carousel-2.png',
  // '/dm-carousel/carousel-3.png',
  // '/dm-carousel/carousel-4.png',
  // '/dm-carousel/carousel-5.png',
  // '/dm-carousel/carousel-6.png',
  '/dm-carousel/carousel-7.png',
  '/dm-carousel/carousel-8.png',
  '/dm-carousel/carousel-9.png',
  // '/dm-carousel/carousel-10.png',
]

export default function DentalMarketingHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 5000)
    return () => clearInterval(timer)
  }, [goToNext])

  return (
    <section
      className="mt-[-120px] lg:mt-[-128px] pt-48 lg:pt-60 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen"
      style={{ backgroundColor: '#0aabf0' }}
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '48px 48px',
        }}
      />

      {/* Edge vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 50%, transparent 40%, rgba(0,100,170,0.22) 100%)',
        }}
      />

      <div className="max-w-[90%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: copy ── */}
          <div className="space-y-6 lg:space-y-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest">
              Dental Marketing
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
              Grow Your Dental Practice With a Proven Patient{' '}
              <span className="underline decoration-white/40 underline-offset-4">
                Acquisition System
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We help dental practices in the USA &amp; Canada generate
              predictable patient leads and revenue —{' '}
              <strong className="text-white font-semibold">get more leads</strong>{' '}
              and{' '}
              <strong className="text-white font-semibold">win more jobs.</strong>
            </p>

            <a
              href="#pricing"
              className="inline-block bg-white text-[#0aabf0] px-8 py-4 rounded-full font-bold text-base shadow-lg transition-all duration-200 hover:bg-blue-50 hover:scale-105 hover:shadow-xl"
            >
              Plans &amp; Pricing
            </a>
          </div>

          <div className="relative w-full mt-8 lg:mt-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.5)' }}
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 aspect-video w-full md:h-[400px] lg:w-[570px] lg:h-[350px] xl:w-[800px] xl:h-[500px]">

              {/* Slides */}
              {carouselImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={index !== currentSlide}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Dental practice example ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Prev button */}
              <button
                onClick={goToPrev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black text-white backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-200 hover:bg-white hover:text-black hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next button */}
              <button
                onClick={goToNext}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-black text-white backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-200 hover:bg-white hover:text-black hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>

              {/* Navigation dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-6'
                        : 'bg-white/50 w-2 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// "use client";
// import { useState, useEffect, useRef } from "react";

// // ─── Free media from Unsplash (dental/clinic themed) ───
// const UNSPLASH = {
//   // Variant A: Modern clinic interior - bright, white, premium
//   clinicModern: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80",
//   // Variant B: Happy patient smiling in chair
//   patientSmile: "https://images.unsplash.com/photo-1588776814546-1ffbb6789c41?w=1600&q=80",
//   // Variant C: Abstract data/tech dark bg
//   techDark: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
// };

// /* ═══════════════════════════════════════════════════════════
//    VARIANT A — "LUXURY CLINICAL"
//    Palette: Ivory + Obsidian + Champagne Gold
//    Font feel: Serif editorial, brutalist numbers
//    Layout: Full-bleed image left, content right, bold vertical text
// ═══════════════════════════════════════════════════════════ */
// function HeroA() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   useEffect(() => {
//     //@ts-ignore
//     const animate = (setter, target, duration) => {
//       let start = 0;
//       const step = target / (duration / 16);
//       const t = setInterval(() => {
//         start += step;
//         if (start >= target) { setter(target); clearInterval(t); }
//         else setter(Math.floor(start));
//       }, 16);
//     };
//     setTimeout(() => {
//       animate(setCount1, 60, 1200);
//       animate(setCount2, 500, 1400);
//       animate(setCount3, 98, 1000);
//     }, 400);
//   }, []);

//   return (
//     <div className="relative min-h-screen flex bg-[#F5F0E8] overflow-hidden font-serif">
//       {/* Left: Full-bleed image with overlay */}
//       <div className="relative w-[45%] min-h-screen flex-shrink-0">
//         <img
//           src={UNSPLASH.clinicModern}
//           alt="Modern dental clinic"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
//         {/* Vertical rotated text */}
//         <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
//           <span className="text-[11px] tracking-[6px] text-white/60 uppercase font-sans font-light whitespace-nowrap">
//             Dental Marketing Excellence
//           </span>
//         </div>
//         {/* Gold accent line */}
//         <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C9A84C] via-[#E8CA7A] to-[#C9A84C]" />
//         {/* Bottom quote */}
//         <div className="absolute bottom-12 left-12 right-6">
//           <p className="text-white/80 text-sm leading-relaxed font-sans font-light italic border-l-2 border-[#C9A84C] pl-4">
//             "From 15 new patients a month to over 60 — in 90 days."
//           </p>
//           <p className="text-[#C9A84C] text-xs mt-2 font-sans tracking-widest uppercase">— Dr. Rob Dennis, Ohio</p>
//         </div>
//       </div>

//       {/* Right: Content */}
//       <div className="flex-1 flex flex-col justify-center px-16 py-20 relative">
//         {/* Nav */}
//         <div className="absolute top-8 right-12 flex items-center gap-8">
//           <a href="#" className="text-xs tracking-widest text-[#8a7a5a] uppercase hover:text-[#2a1a0a] transition-colors font-sans">Services</a>
//           <a href="#" className="text-xs tracking-widest text-[#8a7a5a] uppercase hover:text-[#2a1a0a] transition-colors font-sans">Results</a>
//           <a href="#" className="text-xs tracking-widest text-[#8a7a5a] uppercase hover:text-[#2a1a0a] transition-colors font-sans">About</a>
//           <a href="#" className="border border-[#2a1a0a] text-[#2a1a0a] text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-[#2a1a0a] hover:text-[#F5F0E8] transition-all font-sans">
//             Free Month
//           </a>
//         </div>

//         {/* Eyebrow */}
//         <div className="flex items-center gap-3 mb-8">
//           <div className="w-8 h-px bg-[#C9A84C]" />
//           <span className="text-[10px] tracking-[4px] text-[#C9A84C] uppercase font-sans">
//             Dental Growth Partner
//           </span>
//         </div>

//         {/* Headline */}
//         <h1 className="text-6xl xl:text-7xl font-bold text-[#1a0f00] leading-[1.0] tracking-[-2px] mb-6">
//           Your Practice.<br />
//           <span className="text-[#C9A84C]">Fully Booked.</span><br />
//           <span className="text-4xl xl:text-5xl font-light text-[#5a4a2a] tracking-[-1px]">Every Single Week.</span>
//         </h1>

//         <p className="text-[#6a5a3a] text-lg leading-relaxed mb-10 font-sans font-light max-w-md">
//           We build dental websites Google rewards and patients trust — then back it with ads, SEO, and real ROI dashboards. Your first month is completely free.
//         </p>

//         {/* CTAs */}
//         <div className="flex gap-4 mb-16">
//           <a href="#" className="bg-[#1a0f00] text-[#F5F0E8] px-8 py-4 text-sm tracking-widest uppercase font-sans hover:bg-[#C9A84C] hover:text-[#1a0f00] transition-all duration-300">
//             Start Free →
//           </a>
//           <a href="#" className="border border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-sm tracking-widest uppercase font-sans hover:bg-[#C9A84C] hover:text-[#1a0f00] transition-all duration-300">
//             View Results
//           </a>
//         </div>

//         {/* Stats */}
//         <div className="flex gap-12 border-t border-[#D5C9A8] pt-10">
//           <div>
//             <div className="text-5xl font-bold text-[#1a0f00] tabular-nums tracking-tight">{count1}+</div>
//             <div className="text-xs text-[#8a7a5a] mt-1 font-sans tracking-widest uppercase">New Patients/Mo</div>
//           </div>
//           <div className="w-px bg-[#D5C9A8]" />
//           <div>
//             <div className="text-5xl font-bold text-[#1a0f00] tabular-nums tracking-tight">{count2}+</div>
//             <div className="text-xs text-[#8a7a5a] mt-1 font-sans tracking-widest uppercase">Practices Grown</div>
//           </div>
//           <div className="w-px bg-[#D5C9A8]" />
//           <div>
//             <div className="text-5xl font-bold text-[#1a0f00] tabular-nums tracking-tight">{count3}%</div>
//             <div className="text-xs text-[#8a7a5a] mt-1 font-sans tracking-widest uppercase">Retention Rate</div>
//           </div>
//         </div>

//         {/* Trust badges */}
//         <div className="flex gap-6 mt-8 flex-wrap">
//           {["No Long Contracts", "Free Site Build", "Month-to-Month", "ROI Guaranteed"].map((b) => (
//             <span key={b} className="flex items-center gap-2 text-xs text-[#8a7a5a] font-sans">
//               <span className="text-[#C9A84C]">◆</span> {b}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════
//    VARIANT B — "ELECTRIC NEON CONVERSION"
//    Palette: Pitch black + Hot Coral + Electric Lime  
//    Font feel: Ultra-bold sans, condensed impact
//    Layout: Centered cinematic with video-like overlay, floating form
// ═══════════════════════════════════════════════════════════ */
// function HeroB() {
//   const [active, setActive] = useState(0);
//   const pills = ["Fill Empty Chairs", "Rank #1 on Google", "3× More Patients", "Zero Risk — Free Month"];
//   useEffect(() => {
//     const t = setInterval(() => setActive(p => (p + 1) % pills.length), 2000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center justify-center" style={{fontFamily:"'Bebas Neue', 'Impact', system-ui"}}>
//       {/* BG Image with heavy overlay */}
//       <img
//         src={UNSPLASH.patientSmile}
//         alt="Happy dental patient"
//         className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
//         style={{filter:"saturate(0.3)"}}
//       />
//       {/* Gradient mesh */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#ff3d2e]/20 via-transparent to-[#b8ff00]/10" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

//       {/* Animated scan line */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute left-0 right-0 h-px bg-white/5" style={{top:"33%"}} />
//         <div className="absolute left-0 right-0 h-px bg-white/5" style={{top:"66%"}} />
//         <div className="absolute top-0 bottom-0 w-px bg-white/3" style={{left:"33%"}} />
//         <div className="absolute top-0 bottom-0 w-px bg-white/3" style={{left:"66%"}} />
//       </div>

//       {/* <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-6 z-20">
//         <div className="text-white text-2xl font-black tracking-widest uppercase" style={{fontFamily:"'Impact',sans-serif"}}>
//           APEX<span className="text-[#ff3d2e]">DENTAL</span>
//         </div>
//         <div className="flex items-center gap-8">
//           {["Services","Results","Pricing"].map(l => (
//             <a key={l} href="#" className="text-white/50 text-xs tracking-widest uppercase hover:text-white transition-colors" style={{fontFamily:"sans-serif",fontWeight:600}}>
//               {l}
//             </a>
//           ))}
//           <a href="#" className="bg-[#ff3d2e] text-white text-xs tracking-widest uppercase px-6 py-3 font-bold hover:bg-[#b8ff00] hover:text-black transition-all duration-300" style={{fontFamily:"sans-serif"}}>
//             Free Audit
//           </a>
//         </div>
//       </nav> */}

//       {/* Main content */}
//       <div className="relative z-10 w-full px-10 lg:px-20 flex items-center justify-evenly gap-16">
//         {/* Left content */}
//         <div className="flex-1 max-w-3xl">
//           {/* Cycling pill */}
//           <div className="mb-8 h-8 overflow-hidden">
//             {pills.map((p, i) => (
//               <div
//                 key={p}
//                 className="flex items-center gap-3 transition-all duration-500"
//                 style={{
//                   transform: `translateY(${(i - active) * 32}px)`,
//                   opacity: i === active ? 1 : 0,
//                   position: i === active ? "relative" : "absolute",
//                 }}
//               >
//                 <span className="w-2 h-2 rounded-full bg-[#b8ff00] animate-pulse inline-block" />
//                 <span className="text-[#b8ff00] text-xs tracking-[4px] uppercase" style={{fontFamily:"sans-serif",fontWeight:700}}>{p}</span>
//               </div>
//             ))}
//           </div>

//           <h1 className="text-[clamp(72px,10vw,140px)] font-black leading-none tracking-[-4px] text-white mb-4 uppercase">
//             MORE<br />
//             <span className="text-[#ff3d2e]" style={{WebkitTextStroke:"2px #ff3d2e",WebkitTextFillColor:"transparent"}}>PATIENTS</span><br />
//             <span className="text-[#b8ff00]">NOW.</span>
//           </h1>

//           <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-lg" style={{fontFamily:"sans-serif",fontWeight:300}}>
//             Dental marketing built for one thing: filling your schedule. No fluff, no locked contracts — just booked appointments and tracked ROI.
//           </p>

//           <div className="flex gap-4 items-center flex-wrap">
//             <a href="#" className="bg-[#ff3d2e] text-white px-10 py-5 text-sm font-bold tracking-[2px] uppercase hover:bg-[#b8ff00] hover:text-black transition-all duration-300" style={{fontFamily:"sans-serif"}}>
//               Claim Free Month →
//             </a>
//             <a href="#" className="text-white/60 text-sm flex items-center gap-2 hover:text-white transition-colors" style={{fontFamily:"sans-serif"}}>
//               <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-base">▷</span>
//               Watch 2-min demo
//             </a>
//           </div>

//           {/* Bottom stats */}
//           <div className="flex gap-8 mt-14 pt-8 border-t border-white/10">
//             {[["102K+","Leads Generated"],["4×","Avg Patient Growth"],["$0","Site Build Cost"]].map(([n,l]) => (
//               <div key={l}>
//                 <div className="text-4xl font-black text-white">{n}</div>
//                 <div className="text-white/30 text-xs tracking-widest uppercase mt-1" style={{fontFamily:"sans-serif",fontWeight:600}}>{l}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Floating card */}
//         <div className="hidden lg:block w-[340px] flex-shrink-0">
//           <div className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 relative">
//             {/* Corner accents */}
//             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff3d2e]" />
//             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff3d2e]" />
//             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff3d2e]" />
//             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff3d2e]" />
            
//             <div className="text-[#b8ff00] text-xs tracking-widest uppercase mb-1" style={{fontFamily:"sans-serif",fontWeight:700}}>
//               Free Practice Audit
//             </div>
//             <div className="text-white text-xl font-black mb-6 uppercase tracking-tight">
//               See Where You're Losing Patients
//             </div>
            
//             <div className="space-y-3">
//               {["Full Name","Practice Name","Phone Number","Email Address"].map(p => (
//                 <input
//                   key={p}
//                   placeholder={p}
//                   className="w-full bg-black/50 border border-white/10 text-white text-sm px-4 py-3 placeholder-white/30 focus:border-[#ff3d2e] focus:outline-none transition-colors"
//                   style={{fontFamily:"sans-serif"}}
//                 />
//               ))}
//               <select className="w-full bg-black/50 border border-white/10 text-white/50 text-sm px-4 py-3 focus:outline-none" style={{fontFamily:"sans-serif"}}>
//                 <option>Monthly Ad Budget</option>
//                 <option>Under $1,000</option>
//                 <option>$1,000–$3,000</option>
//                 <option>$3,000–$5,000</option>
//                 <option>$5,000+</option>
//               </select>
//               <button className="w-full bg-[#ff3d2e] text-white py-4 text-sm font-black tracking-[2px] uppercase hover:bg-[#b8ff00] hover:text-black transition-all duration-300" style={{fontFamily:"sans-serif"}}>
//                 Get My Free Audit →
//               </button>
//             </div>
//             <p className="text-white/20 text-xs text-center mt-4" style={{fontFamily:"sans-serif"}}>No spam. Results within 48 hours.</p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom ticker */}
//       <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-3 flex gap-0 overflow-hidden bg-black/40">
//         <div className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
//           {["Custom Website Builds","Local SEO Domination","Google Ads Management","Patient ROI Tracking","No Long-Term Contracts","Free First Month","PMS Integration","Reputation Management"].concat(
//            ["Custom Website Builds","Local SEO Domination","Google Ads Management","Patient ROI Tracking","No Long-Term Contracts","Free First Month","PMS Integration","Reputation Management"]
//           ).map((t, i) => (
//             <span key={i} className="text-white/30 text-xs tracking-[3px] uppercase" style={{fontFamily:"sans-serif"}}>
//               {t} <span className="text-[#ff3d2e] mx-6">◆</span>
//             </span>
//           ))}
//         </div>
//       </div>

//       <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════
//    VARIANT C — "SOFT PREMIUM / SPA WELLNESS"
//    Palette: Sage green + Warm white + Deep teal + Blush
//    Font feel: Rounded modern, friendly, approachable
//    Layout: Asymmetric with floating cards, organic shapes
// ═══════════════════════════════════════════════════════════ */
// function HeroC() {
//   const features = [
//     { icon: "🦷", title: "Custom Website", desc: "Built free, owned by you" },
//     { icon: "📈", title: "Google Ranking", desc: "SEO that actually works" },
//     { icon: "🎯", title: "Targeted Ads", desc: "ROI tracked to the dollar" },
//     { icon: "📅", title: "Auto-Booking", desc: "PMS synced in real-time" },
//   ];

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#F8FAF7]" style={{fontFamily:"'DM Rounded', 'Nunito', sans-serif"}}>
//       {/* Organic blob backgrounds */}
//       <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#B8D8C4]/40" style={{filter:"blur(80px)"}} />
//       <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#E8D5C4]/40" style={{filter:"blur(80px)"}} />
//       <div className="absolute top-[30%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#7EB8A0]/20" style={{filter:"blur(60px)"}} />

//       {/* Nav */}
//       {/* <nav className="relative z-20 flex items-center justify-between px-10 py-6">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 rounded-xl bg-[#2D7A5F] flex items-center justify-center text-white text-sm font-bold">D</div>
//           <span className="text-[#1a3328] text-xl font-bold tracking-tight">dental<span className="text-[#2D7A5F]">grow</span></span>
//         </div>
//         <div className="hidden md:flex items-center gap-8">
//           {["Services","Success Stories","Pricing","About"].map(l => (
//             <a key={l} href="#" className="text-[#4a6b5a] text-sm font-medium hover:text-[#2D7A5F] transition-colors">{l}</a>
//           ))}
//         </div>
//         <a href="#" className="bg-[#2D7A5F] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#1a5a42] transition-all duration-300 shadow-lg shadow-[#2D7A5F]/30">
//           Free Consultation
//         </a>
//       </nav> */}

//       {/* Main grid */}
//       <div className="relative z-10 max-w-7xl mx-auto px-10 pt-6 pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-88px)]">
        
//         {/* Left */}
//         <div>
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-8 shadow-sm border border-[#D4EBE0]">
//             <span className="w-2 h-2 rounded-full bg-[#2D7A5F] animate-pulse" />
//             <span className="text-[#2D7A5F] text-xs font-semibold">500+ Dental Practices Trust Us</span>
//           </div>

//           <h1 className="text-5xl xl:text-6xl font-black text-[#0d2b20] leading-[1.1] tracking-[-2px] mb-6">
//             Your Practice<br />
//             Deserves a<br />
//             <span className="relative inline-block">
//               <span className="relative z-10 text-[#2D7A5F]">Full Schedule.</span>
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
//                 <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#B8D8C4" strokeWidth="4" strokeLinecap="round" fill="none"/>
//               </svg>
//             </span>
//           </h1>

//           <p className="text-[#4a6b5a] text-lg leading-relaxed mb-8 max-w-md">
//             We help dental practices attract more of the right patients — with beautiful websites, local SEO, and marketing that pays for itself. First month completely free.
//           </p>

//           <div className="flex gap-3 mb-10 flex-wrap">
//             <a href="#" className="bg-[#2D7A5F] text-white rounded-xl px-8 py-4 font-bold text-sm hover:bg-[#1a5a42] transition-all duration-300 shadow-lg shadow-[#2D7A5F]/25 flex items-center gap-2">
//               Start Free Today <span>→</span>
//             </a>
//             <a href="#" className="bg-white text-[#2D7A5F] rounded-xl px-8 py-4 font-bold text-sm border-2 border-[#D4EBE0] hover:border-[#2D7A5F] transition-all duration-300 flex items-center gap-2">
//               ▷ See Results
//             </a>
//           </div>

//           {/* Trust row */}
//           <div className="flex gap-6 flex-wrap">
//             {["No contracts","Free website build","Month-to-month","Guaranteed results"].map(t => (
//               <div key={t} className="flex items-center gap-2 text-sm text-[#4a6b5a]">
//                 <div className="w-5 h-5 rounded-full bg-[#D4EBE0] flex items-center justify-center text-[#2D7A5F] text-xs font-bold">✓</div>
//                 {t}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right */}
//         <div className="relative">
//           {/* Main image card */}
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0d2b20]/20">
//             <img
//               src={UNSPLASH.patientSmile}
//               alt="Happy dental patient"
//               className="w-full h-[420px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b20]/60 via-transparent to-transparent" />
//             {/* Overlay badge */}
//             <div className="absolute bottom-6 left-6 right-6">
//               <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-[#0d2b20] font-bold text-sm">Monthly Growth</div>
//                     <div className="text-[#4a6b5a] text-xs">Last 90 days</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-[#2D7A5F] text-2xl font-black">+247%</div>
//                     <div className="text-[#4a6b5a] text-xs">New Patients</div>
//                   </div>
//                 </div>
//                 {/* Mini bar chart */}
//                 <div className="flex gap-1 mt-3 items-end h-10">
//                   {[30,45,35,60,55,75,90,100].map((h, i) => (
//                     <div key={i} className="flex-1 rounded-sm bg-[#2D7A5F] opacity-80 transition-all"
//                       style={{height:`${h}%`, opacity: i === 7 ? 1 : 0.3 + i*0.1}} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Feature cards floating */}
//           <div className="grid grid-cols-2 gap-3 mt-4">
//             {features.map((f) => (
//               <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8F4EE] flex items-center gap-3 hover:shadow-md hover:border-[#B8D8C4] transition-all duration-300">
//                 <div className="w-10 h-10 rounded-xl bg-[#F0F8F4] flex items-center justify-center text-xl">{f.icon}</div>
//                 <div>
//                   <div className="text-[#0d2b20] font-bold text-sm">{f.title}</div>
//                   <div className="text-[#4a6b5a] text-xs">{f.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Floating social proof */}
//           <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-[#E8F4EE]">
//             <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">★★★★★</div>
//             <div className="text-[#0d2b20] font-bold text-sm">4.9/5 Rating</div>
//             <div className="text-[#4a6b5a] text-xs">500+ Reviews</div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom stats bar */}
//       <div className="relative z-10 border-t border-[#D4EBE0] bg-white/60 backdrop-blur">
//         <div className="max-w-7xl mx-auto px-10 py-6 flex gap-12 items-center justify-between flex-wrap">
//           {[["60+","New patients/month average"],["102K+","Total leads generated"],["$3.7M","Ad spend managed"],["98%","Client retention"]].map(([n,l]) => (
//             <div key={l} className="flex items-center gap-4">
//               <div className="text-3xl font-black text-[#2D7A5F]">{n}</div>
//               <div className="text-[#4a6b5a] text-xs leading-tight max-w-[100px]">{l}</div>
//             </div>
//           ))}
//           <a href="#" className="bg-[#2D7A5F] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#1a5a42] transition-all ml-auto">
//             Book Free Audit →
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════
//    ROOT: Tabbed switcher
// ═══════════════════════════════════════════════════════════ */
// export default function DentalHeroes() {
//   const [active, setActive] = useState("a");

//   const tabs = [
//     { id: "a", label: "Variant A", sub: "Luxury Clinical" },
//     { id: "b", label: "Variant B", sub: "Electric Neon" },
//     { id: "c", label: "Variant C", sub: "Soft Premium" },
//   ];

//   return (
//     <div>
//       {/* Tab bar */}
//       <div className="fixed top-0 left-0 right-0 z-[999] bg-black/95 backdrop-blur flex border-b border-white/10">
//         {tabs.map((t) => (
//           <button
//             key={t.id}
//             onClick={() => setActive(t.id)}
//             className={`flex-1 py-3 px-4 text-center transition-all ${
//               active === t.id ? "bg-white/10 border-b-2 border-white" : "hover:bg-white/5"
//             }`}
//           >
//             <div className={`text-xs font-bold tracking-widest uppercase ${active === t.id ? "text-white" : "text-white/40"}`}>
//               {t.label}
//             </div>
//             <div className={`text-[10px] ${active === t.id ? "text-white/60" : "text-white/20"}`}>{t.sub}</div>
//           </button>
//         ))}
//       </div>

//       <div className="pt-[52px]">
//         {active === "a" && <HeroA />}
//         {active === "b" && <HeroB />}
//         {active === "c" && <HeroC />}
//       </div>
//     </div>
//   );
// }

