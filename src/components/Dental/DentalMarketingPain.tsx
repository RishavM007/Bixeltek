import React from "react";

export default function DentalMarketingPain() {
    return (
             <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
               Common Practice Struggles
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Tired of Empty Schedules?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            You&apos;re not alone. Most dental practices face these challenges every single day:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "🖱️", 
                title: "Non-Converting Website", 
                desc: "Visitors land on your site but don’t book appointments",
                gradient: "from-red-500 to-pink-500",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
              },
              { 
                icon: "📉", 
                title: "Low Rankings", 
                desc: "Buried on page 3 of Google while competitors thrive",
                gradient: "from-orange-500 to-amber-500",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200"
              },
              { 
                icon: "💸", 
                title: "Wasted Ad Spend", 
                desc: "Clicks that don't convert into appointments",
                gradient: "from-amber-500 to-yellow-500",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200"
              },
              { 
                icon: "❓", 
                title: "Irrelevant Clicks & Calls", 
                desc: "Traffic that doesn’t translate into real patients",
                gradient: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
              }
            ].map((pain, i) => (
              <div key={i} className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${pain.borderColor} group`}>
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${pain.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {pain.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{pain.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pain.desc}</p>
                <div className={`mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${pain.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Sounds familiar? 
            </p>
            <p className="text-gray-600 mb-4">
              We&apos;ve helped over 500 practices break free from these challenges and achieve consistent growth.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Let&apos;s Fix This Together →
            </a>
          </div>
        </div>
      </section>
    )
}



// "use client";

// import { useState, useEffect, useRef, FC } from "react";

// // ─── Types ───────────────────────────────────────────────
// interface Stat {
//   value: string;
//   label: string;
// }

// interface Testimonial {
//   quote: string;
//   name: string;
//   role: string;
//   result: string;
// }

// interface CaseStudy {
//   practice: string;
//   type: string;
//   before: string;
//   after: string;
//   metric: string;
//   time: string;
// }

// interface Step {
//   number: string;
//   title: string;
//   desc: string;
//   detail: string;
// }

// interface Feature {
//   icon: string;
//   title: string;
//   desc: string;
// }

// // ─── Constants ───────────────────────────────────────────
// const IMGS = {
//   clinic: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&q=80",
//   patient: "https://images.unsplash.com/photo-1588776814546-1ffbb6789c41?w=1400&q=80",
//   team: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80",
//   dentist2: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
//   dentist3: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
//   office: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
// };

// const TESTIMONIALS: Testimonial[] = [
//   {
//     quote:
//       "Before Relevance we averaged 18 new patients a month — now we're consistently hitting 72. The ROI dashboard alone changed how I think about marketing spend.",
//     name: "Dr. Sarah Chen",
//     role: "General Dentist · Atlanta, GA",
//     result: "+300% New Patients",
//   },
//   {
//     quote:
//       "We went from page 4 to the #1 Google result in our city in under 60 days. Our phone literally doesn't stop ringing anymore.",
//     name: "Dr. Marcus Webb",
//     role: "Cosmetic Dentist · Austin, TX",
//     result: "#1 Google Ranking",
//   },
//   {
//     quote:
//       "Every dollar we spend, I can trace back to a specific patient and their treatment value. I've never had that kind of clarity before.",
//     name: "Dr. Priya Nair",
//     role: "Orthodontist · Seattle, WA",
//     result: "$420K Added Revenue",
//   },
// ];

// const CASE_STUDIES: CaseStudy[] = [
//   {
//     practice: "Elmwood Family Dental",
//     type: "General Practice · Ohio",
//     before: "14",
//     after: "67",
//     metric: "New Patients/Month",
//     time: "90 Days",
//   },
//   {
//     practice: "Coastal Smiles Studio",
//     type: "Cosmetic · California",
//     before: "$38K",
//     after: "$147K",
//     metric: "Monthly Production",
//     time: "4 Months",
//   },
//   {
//     practice: "Bright Orthodontics",
//     type: "Orthodontics · Texas",
//     before: "Page 7",
//     after: "Page 1",
//     metric: "Google Position",
//     time: "45 Days",
//   },
// ];

// const STEPS_A: Step[] = [
//   {
//     number: "01",
//     title: "We Audit Your Practice",
//     desc: "Deep competitive & local SEO analysis",
//     detail:
//       "We dissect your online presence, competitors, local search landscape, and current patient acquisition cost — then build a custom roadmap.",
//   },
//   {
//     number: "02",
//     title: "We Build & Launch",
//     desc: "Custom site live in 2 weeks. Free.",
//     detail:
//       "Conversion-optimized website, Google Ads campaign, and local SEO all go live simultaneously. Zero upfront cost, zero long-term contract.",
//   },
//   {
//     number: "03",
//     title: "You Watch It Work",
//     desc: "Real-time ROI dashboard, tied to production",
//     detail:
//       "Your dashboard shows exactly which campaigns brought each patient in — and how much dentistry they completed. No guesswork, ever.",
//   },
// ];

// const STEPS_C: Step[] = [
//   {
//     number: "01",
//     title: "Free Practice Audit",
//     desc: "We find exactly where you're losing patients",
//     detail:
//       "A thorough look at your local SEO, website performance, review score, and competitor gaps. Delivered in 48 hours — completely free.",
//   },
//   {
//     number: "02",
//     title: "Custom Growth Plan",
//     desc: "A roadmap built for your exact practice",
//     detail:
//       "No cookie-cutter packages. We design a strategy around your specialty, location, and patient goals — with clear monthly targets.",
//   },
//   {
//     number: "03",
//     title: "Launch & Scale",
//     desc: "Go live in 2 weeks, grow every month",
//     detail:
//       "Your new website and ad campaigns launch together. We optimize weekly and report monthly, so you always know what's working.",
//   },
// ];

// // ─── Shared hook: count-up animation ─────────────────────
// function useCountUp(target: number, duration: number = 1200, delay: number = 0) {
//   const [count, setCount] = useState(0);
//   const [started, setStarted] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setStarted(true), delay);
//     return () => clearTimeout(t);
//   }, [delay]);

//   useEffect(() => {
//     if (!started) return;
//     let current = 0;
//     const step = target / (duration / 16);
//     const timer = setInterval(() => {
//       current += step;
//       if (current >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, 16);
//     return () => clearInterval(timer);
//   }, [started, target, duration]);

//   return count;
// }

// // ─── Shared hook: intersection observer ──────────────────
// function useInView(threshold = 0.2) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// // ════════════════════════════════════════════════════════════════
// //  VARIANT A — LUXURY CLINICAL
// //  Theme: Ivory #F5F0E8 · Obsidian #1a0f00 · Champagne Gold #C9A84C
// //  Fonts: Syne (display) · DM Sans (body) · Playfair Display (accent)
// // ════════════════════════════════════════════════════════════════

// const SectionA: FC = () => {
//   const { ref: painRef, inView: painIn } = useInView();
//   const { ref: processRef, inView: processIn } = useInView();
//   const { ref: testiRef, inView: testiIn } = useInView();
//   const [activeStep, setActiveStep] = useState(0);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   useEffect(() => {
//     const t = setInterval(
//       () => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length),
//       4000
//     );
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div style={{ background: "#F5F0E8", fontFamily: "'DM Sans', sans-serif" }}>

//       {/* ── Pain Section ─────────────────────────────── */}
//       <section
//         ref={painRef}
//         style={{ padding: "120px 80px", position: "relative", overflow: "hidden" }}
//       >
//         {/* Decorative background text */}
//         <div style={{
//           position: "absolute", top: "50%", left: "50%",
//           transform: "translate(-50%,-50%)",
//           fontFamily: "'Syne', sans-serif", fontSize: "280px", fontWeight: 900,
//           color: "rgba(201,168,76,.05)", whiteSpace: "nowrap", pointerEvents: "none",
//           letterSpacing: "-10px", userSelect: "none",
//         }}>
//           GROWTH
//         </div>

//         <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//           {/* Section label */}
//           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px" }}>
//             <div style={{ width: "48px", height: "1px", background: "#C9A84C" }} />
//             <span style={{
//               fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
//               letterSpacing: "5px", color: "#C9A84C", textTransform: "uppercase",
//             }}>
//               The Reality
//             </span>
//           </div>

//           {/* Two column layout */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
//             <div
//               style={{
//                 opacity: painIn ? 1 : 0,
//                 transform: painIn ? "translateY(0)" : "translateY(40px)",
//                 transition: "all .8s cubic-bezier(.4,0,.2,1)",
//               }}
//             >
//               <h2 style={{
//                 fontFamily: "'Syne', sans-serif", fontSize: "clamp(38px,4.5vw,58px)",
//                 fontWeight: 800, color: "#1a0f00", lineHeight: 1.05,
//                 letterSpacing: "-2px", marginBottom: "28px",
//               }}>
//                 Most Dental Websites<br />
//                 Are <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Invisible.</span><br />
//                 <span style={{ fontSize: "60%", fontWeight: 400, color: "#6a5a3a" }}>
//                   Is yours one of them?
//                 </span>
//               </h2>
//               <p style={{ fontSize: "16px", color: "#6a5a3a", lineHeight: 1.8, marginBottom: "32px" }}>
//                 93% of dental websites never appear on the first page of Google.
//                 Meanwhile your competitors are capturing every patient who searches
//                 "dentist near me" — patients who should be yours.
//               </p>
//               <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//                 {[
//                   ["Your site loads in 6s+", "Patients leave after 3s"],
//                   ["Generic stock photos", "Patients choose the practice they trust"],
//                   ["No call-to-action strategy", "Visitors browse, then book elsewhere"],
//                   ["No local SEO", "Competitors rank while you pay for ads that barely work"],
//                 ].map(([problem, impact], i) => (
//                   <div key={i} style={{
//                     display: "flex", alignItems: "flex-start", gap: "16px",
//                     padding: "16px", background: "rgba(26,15,0,.03)",
//                     borderLeft: "3px solid #C9A84C",
//                     opacity: painIn ? 1 : 0,
//                     transform: painIn ? "translateX(0)" : "translateX(-20px)",
//                     transition: `all .7s cubic-bezier(.4,0,.2,1) ${i * 0.1 + 0.3}s`,
//                   }}>
//                     <div style={{
//                       width: "8px", height: "8px", borderRadius: "50%",
//                       background: "#C9A84C", marginTop: "7px", flexShrink: 0,
//                     }} />
//                     <div>
//                       <div style={{ fontWeight: 600, color: "#1a0f00", fontSize: "14px" }}>{problem}</div>
//                       <div style={{ fontSize: "13px", color: "#8a7a5a", marginTop: "2px" }}>{impact}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right: Case study cards */}
//             <div style={{
//               display: "flex", flexDirection: "column", gap: "20px",
//               opacity: painIn ? 1 : 0,
//               transform: painIn ? "translateY(0)" : "translateY(40px)",
//               transition: "all .9s cubic-bezier(.4,0,.2,1) .2s",
//             }}>
//               {CASE_STUDIES.map((cs, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     background: "white", padding: "28px 32px",
//                     boxShadow: "0 4px 32px rgba(26,15,0,.07)",
//                     border: "1px solid rgba(201,168,76,.2)",
//                     position: "relative", overflow: "hidden",
//                   }}
//                 >
//                   {/* Gold corner */}
//                   <div style={{
//                     position: "absolute", top: 0, right: 0,
//                     width: "60px", height: "60px",
//                     background: "linear-gradient(225deg, rgba(201,168,76,.15), transparent)",
//                   }} />
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
//                     <div>
//                       <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "16px", color: "#1a0f00" }}>
//                         {cs.practice}
//                       </div>
//                       <div style={{ fontSize: "12px", color: "#8a7a5a", marginTop: "2px" }}>{cs.type}</div>
//                     </div>
//                     <div style={{
//                       background: "rgba(201,168,76,.12)", color: "#8a6a1a",
//                       fontSize: "11px", padding: "4px 12px", fontWeight: 600,
//                       letterSpacing: "1px", textTransform: "uppercase",
//                     }}>
//                       {cs.time}
//                     </div>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//                     <div style={{ textAlign: "center" }}>
//                       <div style={{ fontSize: "13px", color: "#aaa", marginBottom: "4px" }}>Before</div>
//                       <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 800, color: "#c44" }}>
//                         {cs.before}
//                       </div>
//                     </div>
//                     <div style={{ flex: 1, textAlign: "center" }}>
//                       <div style={{ fontSize: "22px", color: "#C9A84C" }}>→</div>
//                       <div style={{ fontSize: "11px", color: "#8a7a5a", letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>
//                         {cs.metric}
//                       </div>
//                     </div>
//                     <div style={{ textAlign: "center" }}>
//                       <div style={{ fontSize: "13px", color: "#aaa", marginBottom: "4px" }}>After</div>
//                       <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 800, color: "#2a7a4a" }}>
//                         {cs.after}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Process Section ──────────────────────────── */}
//       <section
//         ref={processRef}
//         style={{ background: "#1a0f00", padding: "120px 80px" }}
//       >
//         <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
//             <div style={{ width: "48px", height: "1px", background: "#C9A84C" }} />
//             <span style={{ fontSize: "11px", letterSpacing: "5px", color: "#C9A84C", textTransform: "uppercase" }}>
//               How It Works
//             </span>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
//             <h2 style={{
//               fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px,4vw,54px)",
//               fontWeight: 800, color: "#F5F0E8", lineHeight: 1.1,
//               letterSpacing: "-2px",
//               opacity: processIn ? 1 : 0,
//               transform: processIn ? "translateY(0)" : "translateY(30px)",
//               transition: "all .8s cubic-bezier(.4,0,.2,1)",
//             }}>
//               Three Steps.<br />
//               <span style={{ color: "#C9A84C" }}>Fully Booked.</span><br />
//               <span style={{ fontSize: "55%", fontWeight: 300, color: "rgba(245,240,232,.4)" }}>
//                 No complexity. No confusion.<br />Just results.
//               </span>
//             </h2>

//             <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
//               {STEPS_A.map((step, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setActiveStep(i)}
//                   style={{
//                     borderTop: "1px solid rgba(245,240,232,.08)",
//                     padding: "32px 0",
//                     cursor: "pointer",
//                     opacity: processIn ? 1 : 0,
//                     transform: processIn ? "translateX(0)" : "translateX(30px)",
//                     transition: `all .7s cubic-bezier(.4,0,.2,1) ${i * 0.15}s`,
//                   }}
//                 >
//                   <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
//                     <span style={{
//                       fontFamily: "'Syne', sans-serif", fontSize: "11px",
//                       color: activeStep === i ? "#C9A84C" : "rgba(245,240,232,.2)",
//                       letterSpacing: "2px", marginTop: "6px", flexShrink: 0,
//                       transition: "color .3s",
//                     }}>
//                       {step.number}
//                     </span>
//                     <div style={{ flex: 1 }}>
//                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                         <div style={{
//                           fontFamily: "'Syne', sans-serif", fontWeight: 700,
//                           fontSize: "18px", color: "#F5F0E8",
//                         }}>
//                           {step.title}
//                         </div>
//                         <span style={{
//                           color: "#C9A84C", fontSize: "18px",
//                           transform: activeStep === i ? "rotate(45deg)" : "rotate(0deg)",
//                           transition: "transform .3s",
//                           display: "inline-block",
//                         }}>+</span>
//                       </div>
//                       <div style={{ fontSize: "13px", color: "rgba(245,240,232,.4)", marginTop: "4px" }}>
//                         {step.desc}
//                       </div>
//                       <div style={{
//                         maxHeight: activeStep === i ? "120px" : "0",
//                         overflow: "hidden",
//                         transition: "max-height .4s cubic-bezier(.4,0,.2,1)",
//                       }}>
//                         <p style={{
//                           fontSize: "14px", color: "rgba(245,240,232,.6)",
//                           lineHeight: 1.7, marginTop: "14px",
//                           paddingTop: "14px",
//                           borderTop: "1px solid rgba(201,168,76,.15)",
//                         }}>
//                           {step.detail}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div style={{ borderTop: "1px solid rgba(245,240,232,.08)", paddingTop: "32px" }}>
//                 <a href="#" style={{
//                   display: "inline-block",
//                   background: "#C9A84C", color: "#1a0f00",
//                   padding: "16px 40px",
//                   fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
//                   fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
//                   textDecoration: "none",
//                 }}>
//                   Start Your Free Month →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Testimonial Section ──────────────────────── */}
//       <section
//         ref={testiRef}
//         style={{ padding: "120px 80px", background: "#F5F0E8", position: "relative", overflow: "hidden" }}
//       >
//         <div style={{
//           position: "absolute", bottom: "-40px", right: "-40px",
//           width: "400px", height: "400px", borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(201,168,76,.08), transparent)",
//           pointerEvents: "none",
//         }} />
//         <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "60px" }}>
//             <div style={{ width: "48px", height: "1px", background: "#C9A84C" }} />
//             <span style={{ fontSize: "11px", letterSpacing: "5px", color: "#C9A84C", textTransform: "uppercase" }}>
//               Client Voices
//             </span>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "28px" }}>
//             {TESTIMONIALS.map((t, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: i === activeTestimonial ? "#1a0f00" : "white",
//                   padding: "40px 36px",
//                   border: "1px solid",
//                   borderColor: i === activeTestimonial ? "#1a0f00" : "rgba(201,168,76,.2)",
//                   position: "relative", overflow: "hidden",
//                   cursor: "pointer",
//                   transition: "all .5s cubic-bezier(.4,0,.2,1)",
//                   transform: testiIn
//                     ? (i === activeTestimonial ? "translateY(-8px)" : "translateY(0)")
//                     : "translateY(40px)",
//                   opacity: testiIn ? 1 : 0,
//                   transitionDelay: `${i * 0.1}s`,
//                   boxShadow: i === activeTestimonial ? "0 24px 60px rgba(26,15,0,.2)" : "none",
//                 }}
//                 onClick={() => setActiveTestimonial(i)}
//               >
//                 {/* Result badge */}
//                 <div style={{
//                   display: "inline-block",
//                   background: i === activeTestimonial ? "rgba(201,168,76,.2)" : "rgba(201,168,76,.1)",
//                   color: "#C9A84C",
//                   fontSize: "11px", padding: "4px 14px",
//                   letterSpacing: "1px", textTransform: "uppercase",
//                   fontWeight: 700, marginBottom: "24px",
//                 }}>
//                   {t.result}
//                 </div>

//                 <p style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: "15px",
//                   fontStyle: "italic",
//                   color: i === activeTestimonial ? "rgba(245,240,232,.85)" : "#4a3a1a",
//                   lineHeight: 1.75,
//                   marginBottom: "28px",
//                 }}>
//                   "{t.quote}"
//                 </p>

//                 <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid", borderTopColor: i === activeTestimonial ? "rgba(245,240,232,.1)" : "rgba(201,168,76,.15)", paddingTop: "20px" }}>
//                   <div style={{
//                     width: "40px", height: "40px", borderRadius: "50%",
//                     background: i === activeTestimonial ? "rgba(201,168,76,.2)" : "rgba(201,168,76,.1)",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px",
//                     color: "#C9A84C",
//                   }}>
//                     {t.name.charAt(3)}
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 700, fontSize: "13px", color: i === activeTestimonial ? "#F5F0E8" : "#1a0f00" }}>
//                       {t.name}
//                     </div>
//                     <div style={{ fontSize: "11px", color: i === activeTestimonial ? "rgba(245,240,232,.4)" : "#8a7a5a", marginTop: "2px" }}>
//                       {t.role}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom CTA band */}
//           <div style={{
//             marginTop: "80px", padding: "48px 60px",
//             background: "linear-gradient(135deg, #1a0f00, #2d1a00)",
//             display: "flex", justifyContent: "space-between", alignItems: "center",
//             gap: "32px", flexWrap: "wrap",
//           }}>
//             <div>
//               <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 800, color: "#F5F0E8", letterSpacing: "-1px" }}>
//                 Ready to be the next success story?
//               </div>
//               <div style={{ fontSize: "14px", color: "rgba(245,240,232,.4)", marginTop: "6px" }}>
//                 Your first month is completely free. No credit card required.
//               </div>
//             </div>
//             <a href="#" style={{
//               background: "#C9A84C", color: "#1a0f00",
//               padding: "18px 48px", flexShrink: 0,
//               fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
//               fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
//               textDecoration: "none",
//               whiteSpace: "nowrap",
//             }}>
//               Claim Free Month →
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // ════════════════════════════════════════════════════════════════
// //  VARIANT B — ELECTRIC NEON
// //  Theme: #080808 Black · #ff3d2e Coral · #b8ff00 Lime
// //  Fonts: Syne ultra-bold · DM Sans body
// // ════════════════════════════════════════════════════════════════

// const PainCounter: FC<{ target: number; suffix: string; prefix?: string }> = ({
//   target, suffix, prefix = "",
// }) => {
//   const { ref, inView } = useInView();
//   const count = useCountUp(inView ? target : 0, 1200);
//   return (
//     <span ref={ref}>
//       {prefix}{inView ? count : 0}{suffix}
//     </span>
//   );
// };

// const SectionB: FC = () => {
//   const { ref: painRef, inView: painIn } = useInView();
//   const { ref: caseRef, inView: caseIn } = useInView();
//   const { ref: ctaRef, inView: ctaIn } = useInView();
//   const [hoveredCase, setHoveredCase] = useState<number | null>(null);

//   const painPoints = [
//     {
//       stat: "93%",
//       headline: "of dental websites don't rank on page 1.",
//       sub: "You're essentially invisible to every patient searching Google right now.",
//     },
//     {
//       stat: "8 sec",
//       headline: "is how long a patient waits before bouncing.",
//       sub: "If your site loads slow or looks outdated, they're already calling your competitor.",
//     },
//     {
//       stat: "$12K",
//       headline: "wasted on average per year in ineffective ads.",
//       sub: "Most agencies optimize for clicks, not booked appointments. You pay the difference.",
//     },
//   ];

//   return (
//     <div style={{ background: "#080808", fontFamily: "'DM Sans', sans-serif" }}>

//       {/* ── Pain Callout Section ─────────────────────── */}
//       <section ref={painRef} style={{ padding: "120px 80px", position: "relative", overflow: "hidden" }}>
//         <div style={{
//           position: "absolute", inset: 0,
//           backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)",
//           backgroundSize: "60px 60px",
//         }} />
//         <div style={{
//           position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
//           width: "800px", height: "2px",
//           background: "linear-gradient(to right, transparent, #ff3d2e, transparent)",
//         }} />

//         <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//           {/* Label */}
//           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "64px" }}>
//             <span style={{
//               display: "inline-block", width: "8px", height: "8px",
//               borderRadius: "50%", background: "#ff3d2e",
//               boxShadow: "0 0 12px #ff3d2e",
//             }} />
//             <span style={{ fontSize: "11px", letterSpacing: "4px", color: "#ff3d2e", textTransform: "uppercase", fontWeight: 700 }}>
//               The Problem No One Talks About
//             </span>
//           </div>

//           <h2 style={{
//             fontFamily: "'Syne', sans-serif",
//             fontSize: "clamp(48px,6vw,80px)",
//             fontWeight: 900,
//             color: "white",
//             lineHeight: 1.0,
//             letterSpacing: "-3px",
//             marginBottom: "80px",
//             textTransform: "uppercase",
//             opacity: painIn ? 1 : 0,
//             transform: painIn ? "translateY(0)" : "translateY(40px)",
//             transition: "all .8s cubic-bezier(.4,0,.2,1)",
//           }}>
//             Your Practice Is<br />
//             <span style={{ WebkitTextStroke: "2px #ff3d2e", WebkitTextFillColor: "transparent" }}>
//               Bleeding Money
//             </span><br />
//             <span style={{ color: "#b8ff00", fontSize: "55%" }}>Every day without the right marketing.</span>
//           </h2>

//           {/* Pain cards */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px" }}>
//             {painPoints.map((p, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: "rgba(255,255,255,.03)",
//                   border: "1px solid rgba(255,255,255,.06)",
//                   padding: "48px 36px",
//                   position: "relative", overflow: "hidden",
//                   opacity: painIn ? 1 : 0,
//                   transform: painIn ? "translateY(0)" : "translateY(40px)",
//                   transition: `all .7s cubic-bezier(.4,0,.2,1) ${i * 0.15}s`,
//                   cursor: "default",
//                 }}
//               >
//                 {/* Top accent */}
//                 <div style={{
//                   position: "absolute", top: 0, left: 0, right: 0, height: "2px",
//                   background: i === 0 ? "#ff3d2e" : i === 1 ? "rgba(255,61,46,.4)" : "rgba(255,61,46,.2)",
//                 }} />
//                 <div style={{
//                   fontFamily: "'Syne', sans-serif",
//                   fontSize: "clamp(48px,5vw,72px)",
//                   fontWeight: 900, color: "#ff3d2e",
//                   letterSpacing: "-3px", lineHeight: 1,
//                   marginBottom: "20px",
//                 }}>
//                   {p.stat}
//                 </div>
//                 <div style={{ fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.4 }}>
//                   {p.headline}
//                 </div>
//                 <div style={{ fontSize: "14px", color: "rgba(255,255,255,.35)", lineHeight: 1.7 }}>
//                   {p.sub}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Case Studies Section ─────────────────────── */}
//       <section ref={caseRef} style={{
//         padding: "120px 80px",
//         background: "linear-gradient(180deg, #080808 0%, #0f0500 100%)",
//         position: "relative",
//       }}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", gap: "32px", flexWrap: "wrap" }}>
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
//                 <span style={{
//                   width: "8px", height: "8px", borderRadius: "50%",
//                   background: "#b8ff00", display: "inline-block",
//                   boxShadow: "0 0 12px #b8ff00",
//                 }} />
//                 <span style={{ fontSize: "11px", letterSpacing: "4px", color: "#b8ff00", textTransform: "uppercase", fontWeight: 700 }}>
//                   Proof Over Promises
//                 </span>
//               </div>
//               <h2 style={{
//                 fontFamily: "'Syne', sans-serif",
//                 fontSize: "clamp(40px,5vw,64px)",
//                 fontWeight: 900, color: "white",
//                 lineHeight: 1.0, letterSpacing: "-2px",
//                 textTransform: "uppercase",
//                 opacity: caseIn ? 1 : 0,
//                 transform: caseIn ? "translateY(0)" : "translateY(30px)",
//                 transition: "all .8s cubic-bezier(.4,0,.2,1)",
//               }}>
//                 Real Practices.<br />
//                 <span style={{ color: "#b8ff00" }}>Real Numbers.</span>
//               </h2>
//             </div>
//             <a href="#" style={{
//               border: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.6)",
//               padding: "14px 32px", textDecoration: "none",
//               fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
//               letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600,
//               flexShrink: 0,
//             }}>
//               View All Case Studies →
//             </a>
//           </div>

//           {/* Case study cards */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
//             {CASE_STUDIES.map((cs, i) => (
//               <div
//                 key={i}
//                 onMouseEnter={() => setHoveredCase(i)}
//                 onMouseLeave={() => setHoveredCase(null)}
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "2fr 1fr 1fr 1fr 120px",
//                   gap: "0",
//                   alignItems: "center",
//                   background: hoveredCase === i ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.02)",
//                   border: "1px solid",
//                   borderColor: hoveredCase === i ? "rgba(255,61,46,.3)" : "rgba(255,255,255,.05)",
//                   transition: "all .3s",
//                   cursor: "pointer",
//                   opacity: caseIn ? 1 : 0,
//                   transform: caseIn ? "translateX(0)" : "translateX(-30px)",
//                   transitionProperty: "opacity,transform,background,border-color",
//                   transitionDuration: `.6s,.6s,.3s,.3s`,
//                   transitionDelay: `${i * 0.1}s,${i * 0.1}s,0s,0s`,
//                 }}
//               >
//                 <div style={{ padding: "32px 36px", borderRight: "1px solid rgba(255,255,255,.05)" }}>
//                   <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "white" }}>
//                     {cs.practice}
//                   </div>
//                   <div style={{ fontSize: "12px", color: "rgba(255,255,255,.3)", marginTop: "4px", letterSpacing: "1px" }}>
//                     {cs.type}
//                   </div>
//                 </div>
//                 <div style={{ padding: "32px 28px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,.05)" }}>
//                   <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Before</div>
//                   <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 900, color: "#ff3d2e" }}>{cs.before}</div>
//                 </div>
//                 <div style={{ padding: "32px 28px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,.05)" }}>
//                   <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>After</div>
//                   <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 900, color: "#b8ff00" }}>{cs.after}</div>
//                 </div>
//                 <div style={{ padding: "32px 28px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,.05)" }}>
//                   <div style={{ fontSize: "12px", color: "rgba(255,255,255,.3)", letterSpacing: "1px", marginBottom: "8px" }}>{cs.metric}</div>
//                   <div style={{
//                     display: "inline-block",
//                     background: "rgba(184,255,0,.1)", color: "#b8ff00",
//                     fontSize: "11px", padding: "4px 12px",
//                     letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700,
//                   }}>
//                     {cs.time}
//                   </div>
//                 </div>
//                 <div style={{ padding: "32px 24px", textAlign: "center" }}>
//                   <span style={{
//                     color: hoveredCase === i ? "#ff3d2e" : "rgba(255,255,255,.2)",
//                     fontSize: "20px", transition: "all .3s",
//                     transform: hoveredCase === i ? "translateX(4px)" : "translateX(0)",
//                     display: "inline-block",
//                   }}>
//                     →
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom mega CTA */}
//           <div
//             ref={ctaRef}
//             style={{
//               marginTop: "80px",
//               border: "1px solid rgba(255,255,255,.08)",
//               padding: "64px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               gap: "32px",
//               flexWrap: "wrap",
//               position: "relative",
//               overflow: "hidden",
//               opacity: ctaIn ? 1 : 0,
//               transform: ctaIn ? "translateY(0)" : "translateY(30px)",
//               transition: "all .8s cubic-bezier(.4,0,.2,1)",
//             }}
//           >
//             {/* Corner accents */}
//             {[
//               { top: 0, left: 0, borderTop: "2px solid #ff3d2e", borderLeft: "2px solid #ff3d2e" },
//               { top: 0, right: 0, borderTop: "2px solid #ff3d2e", borderRight: "2px solid #ff3d2e" },
//               { bottom: 0, left: 0, borderBottom: "2px solid #ff3d2e", borderLeft: "2px solid #ff3d2e" },
//               { bottom: 0, right: 0, borderBottom: "2px solid #ff3d2e", borderRight: "2px solid #ff3d2e" },
//             ].map((s, i) => (
//               <div key={i} style={{ position: "absolute", width: "24px", height: "24px", ...s }} />
//             ))}

//             <div>
//               <div style={{
//                 fontFamily: "'Syne', sans-serif",
//                 fontSize: "clamp(28px,3.5vw,44px)",
//                 fontWeight: 900, color: "white",
//                 textTransform: "uppercase", letterSpacing: "-2px",
//                 lineHeight: 1.05,
//               }}>
//                 Stop Watching Patients<br />
//                 <span style={{ color: "#ff3d2e" }}>Choose Your Competitor.</span>
//               </div>
//               <div style={{ fontSize: "14px", color: "rgba(255,255,255,.35)", marginTop: "12px" }}>
//                 First month free. No contracts. Launch in 2 weeks.
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: "16px", flexShrink: 0, flexWrap: "wrap" }}>
//               <a href="#" style={{
//                 background: "#ff3d2e", color: "white",
//                 padding: "20px 48px",
//                 fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
//                 fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
//                 textDecoration: "none", whiteSpace: "nowrap",
//               }}>
//                 Start Free Now →
//               </a>
//               <a href="#" style={{
//                 border: "1px solid rgba(255,255,255,.15)",
//                 color: "rgba(255,255,255,.6)",
//                 padding: "20px 32px",
//                 fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
//                 fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
//                 textDecoration: "none", whiteSpace: "nowrap",
//               }}>
//                 Book a Call
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // ════════════════════════════════════════════════════════════════
// //  VARIANT C — SOFT PREMIUM / SPA WELLNESS
// //  Theme: #F3F8F4 Sage-white · #2D7A5F Deep Teal · #0d2b20 Forest
// //  Font: Nunito (rounded, friendly, authoritative)
// // ════════════════════════════════════════════════════════════════

// const SectionC: FC = () => {
//   const { ref: howRef, inView: howIn } = useInView();
//   const { ref: testiRef, inView: testiIn } = useInView();
//   const { ref: ctaRef, inView: ctaIn } = useInView();
//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     const t = setInterval(
//       () => setActiveStep((p) => (p + 1) % STEPS_C.length),
//       3000
//     );
//     return () => clearInterval(t);
//   }, []);

//   const trustItems: { icon: string; title: string; desc: string }[] = [
//     { icon: "🏆", title: "Results Guaranteed", desc: "If we don't bring new patients, you don't pay" },
//     { icon: "📋", title: "No Long Contracts", desc: "Month-to-month, cancel anytime with 30 days notice" },
//     { icon: "🆓", title: "Free Website Build", desc: "Custom designed site included, zero upfront cost" },
//     { icon: "📊", title: "Transparent Reporting", desc: "Real-time dashboard tied to your actual production data" },
//     { icon: "🔗", title: "PMS Integration", desc: "Connects with Dentrix, Eaglesoft, Open Dental & more" },
//     { icon: "🤝", title: "Dedicated Account Team", desc: "A real human who knows your practice, not a helpdesk" },
//   ];

//   return (
//     <div style={{ background: "#F3F8F4", fontFamily: "'Nunito', sans-serif" }}>

//       {/* ── How It Works ─────────────────────────────── */}
//       <section ref={howRef} style={{ padding: "120px 60px", position: "relative", overflow: "hidden" }}>
//         {/* Blob decorations */}
//         <div style={{
//           position: "absolute", top: "-10%", left: "-5%",
//           width: "400px", height: "400px", borderRadius: "50%",
//           background: "rgba(184,216,196,.3)", filter: "blur(80px)", pointerEvents: "none",
//         }} />
//         <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//           {/* Section label */}
//           <div style={{
//             display: "inline-flex", alignItems: "center", gap: "8px",
//             background: "white", borderRadius: "100px", padding: "6px 20px",
//             boxShadow: "0 2px 12px rgba(0,0,0,.06)", border: "1px solid #D4EBE0",
//             marginBottom: "48px",
//           }}>
//             <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2D7A5F", display: "inline-block" }} />
//             <span style={{ fontSize: "12px", fontWeight: 700, color: "#2D7A5F" }}>Simple Process, Real Results</span>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "80px", alignItems: "center" }}>
//             <div style={{
//               opacity: howIn ? 1 : 0,
//               transform: howIn ? "translateY(0)" : "translateY(30px)",
//               transition: "all .8s cubic-bezier(.4,0,.2,1)",
//             }}>
//               <h2 style={{
//                 fontFamily: "'Nunito', sans-serif",
//                 fontSize: "clamp(38px,4.5vw,54px)",
//                 fontWeight: 900, color: "#0d2b20",
//                 lineHeight: 1.1, letterSpacing: "-2px",
//                 marginBottom: "20px",
//               }}>
//                 From "Invisible"<br />
//                 to{" "}
//                 <span style={{
//                   color: "#2D7A5F", display: "inline-block",
//                   position: "relative",
//                 }}>
//                   Fully Booked
//                   <svg style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%" }} viewBox="0 0 240 10" fill="none">
//                     <path d="M2 7 Q60 1 120 7 Q180 13 238 7" stroke="#B8D8C4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
//                   </svg>
//                 </span>
//                 <br />in 3 Steps.
//               </h2>
//               <p style={{ fontSize: "16px", color: "#4a6b5a", lineHeight: 1.75, marginBottom: "32px" }}>
//                 We've refined this process across 500+ dental practices. No guesswork, no wasted months — just a clear path to a schedule that stays full.
//               </p>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 {STEPS_C.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActiveStep(i)}
//                     style={{
//                       width: activeStep === i ? "32px" : "8px",
//                       height: "8px", borderRadius: "100px",
//                       background: activeStep === i ? "#2D7A5F" : "#B8D8C4",
//                       border: "none", cursor: "pointer",
//                       transition: "all .4s cubic-bezier(.4,0,.2,1)",
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Steps */}
//             <div style={{ position: "relative" }}>
//               {/* Connecting line */}
//               <div style={{
//                 position: "absolute", left: "28px", top: "48px", bottom: "48px",
//                 width: "2px",
//                 background: "linear-gradient(to bottom, #B8D8C4, #D4EBE0)",
//               }} />

//               <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
//                 {STEPS_C.map((step, i) => (
//                   <div
//                     key={i}
//                     onClick={() => setActiveStep(i)}
//                     style={{
//                       display: "flex", gap: "28px", alignItems: "flex-start",
//                       padding: "24px 0", cursor: "pointer",
//                       opacity: howIn ? 1 : 0,
//                       transform: howIn ? "translateX(0)" : "translateX(30px)",
//                       transition: `all .7s cubic-bezier(.4,0,.2,1) ${i * 0.15}s`,
//                     }}
//                   >
//                     {/* Step circle */}
//                     <div style={{
//                       width: "56px", height: "56px", borderRadius: "50%", flexShrink: 0,
//                       background: activeStep === i ? "#2D7A5F" : "white",
//                       border: `2px solid ${activeStep === i ? "#2D7A5F" : "#D4EBE0"}`,
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       boxShadow: activeStep === i ? "0 8px 24px rgba(45,122,95,.3)" : "0 2px 12px rgba(0,0,0,.06)",
//                       transition: "all .4s cubic-bezier(.4,0,.2,1)",
//                       position: "relative", zIndex: 1,
//                     }}>
//                       <span style={{
//                         fontFamily: "'Nunito', sans-serif",
//                         fontWeight: 900, fontSize: "14px",
//                         color: activeStep === i ? "white" : "#4a6b5a",
//                         transition: "color .4s",
//                       }}>
//                         {step.number}
//                       </span>
//                     </div>

//                     {/* Content */}
//                     <div style={{
//                       flex: 1, paddingTop: "8px",
//                       background: activeStep === i ? "white" : "transparent",
//                       borderRadius: "16px",
//                       padding: activeStep === i ? "20px 24px" : "8px 0",
//                       border: activeStep === i ? "1px solid #D4EBE0" : "1px solid transparent",
//                       boxShadow: activeStep === i ? "0 4px 24px rgba(0,0,0,.06)" : "none",
//                       transition: "all .4s cubic-bezier(.4,0,.2,1)",
//                       marginLeft: "-8px",
//                     }}>
//                       <div style={{
//                         fontFamily: "'Nunito', sans-serif", fontWeight: 800,
//                         fontSize: "17px", color: "#0d2b20",
//                         marginBottom: "4px",
//                       }}>
//                         {step.title}
//                       </div>
//                       <div style={{ fontSize: "13px", color: "#4a6b5a", marginBottom: activeStep === i ? "12px" : "0" }}>
//                         {step.desc}
//                       </div>
//                       <div style={{
//                         fontSize: "14px", color: "#4a6b5a", lineHeight: 1.7,
//                         maxHeight: activeStep === i ? "100px" : "0",
//                         overflow: "hidden",
//                         transition: "max-height .4s cubic-bezier(.4,0,.2,1)",
//                       }}>
//                         {step.detail}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Bottom CTA */}
//               <div style={{ marginTop: "16px", paddingLeft: "84px" }}>
//                 <a href="#" style={{
//                   display: "inline-flex", alignItems: "center", gap: "8px",
//                   background: "#2D7A5F", color: "white",
//                   borderRadius: "12px", padding: "14px 32px",
//                   fontFamily: "'Nunito', sans-serif", fontWeight: 700,
//                   fontSize: "14px", textDecoration: "none",
//                   boxShadow: "0 8px 24px rgba(45,122,95,.28)",
//                 }}>
//                   Start My Free Audit <span>→</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Testimonials (Masonry-style) ─────────────── */}
//       <section ref={testiRef} style={{ padding: "120px 60px", background: "white" }}>
//         <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "24px" }}>
//             <div>
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 background: "#F3F8F4", borderRadius: "100px", padding: "6px 20px",
//                 border: "1px solid #D4EBE0", marginBottom: "16px",
//               }}>
//                 <span style={{ fontSize: "12px", fontWeight: 700, color: "#2D7A5F" }}>★★★★★ 4.9 Average Rating</span>
//               </div>
//               <h2 style={{
//                 fontFamily: "'Nunito', sans-serif",
//                 fontSize: "clamp(34px,4vw,48px)",
//                 fontWeight: 900, color: "#0d2b20",
//                 lineHeight: 1.1, letterSpacing: "-1.5px",
//                 opacity: testiIn ? 1 : 0,
//                 transform: testiIn ? "translateY(0)" : "translateY(20px)",
//                 transition: "all .8s cubic-bezier(.4,0,.2,1)",
//               }}>
//                 Dentists Who Made<br />
//                 <span style={{ color: "#2D7A5F" }}>the Switch.</span>
//               </h2>
//             </div>
//             <a href="#" style={{
//               color: "#2D7A5F", textDecoration: "none",
//               fontSize: "14px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px",
//             }}>
//               Read all stories →
//             </a>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
//             {TESTIMONIALS.map((t, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: "#F3F8F4",
//                   borderRadius: "20px",
//                   padding: "32px 28px",
//                   border: "1px solid #E8F4EE",
//                   opacity: testiIn ? 1 : 0,
//                   transform: testiIn ? "translateY(0)" : "translateY(40px)",
//                   transition: `all .7s cubic-bezier(.4,0,.2,1) ${i * 0.1}s`,
//                   position: "relative",
//                 }}
//               >
//                 {/* Quotation mark */}
//                 <div style={{
//                   position: "absolute", top: "20px", right: "24px",
//                   fontFamily: "Georgia, serif", fontSize: "60px",
//                   color: "#D4EBE0", lineHeight: 1, userSelect: "none",
//                 }}>
//                   "
//                 </div>

//                 {/* Stars */}
//                 <div style={{ color: "#f59e0b", fontSize: "14px", marginBottom: "16px" }}>★★★★★</div>

//                 {/* Result chip */}
//                 <div style={{
//                   display: "inline-block",
//                   background: "rgba(45,122,95,.1)", color: "#2D7A5F",
//                   fontSize: "12px", padding: "4px 14px", borderRadius: "100px",
//                   fontWeight: 700, marginBottom: "16px",
//                 }}>
//                   {t.result}
//                 </div>

//                 <p style={{
//                   fontFamily: "'Nunito', sans-serif",
//                   fontSize: "15px", color: "#2d4a38",
//                   lineHeight: 1.75, marginBottom: "24px",
//                   fontStyle: "italic",
//                 }}>
//                   "{t.quote}"
//                 </p>

//                 <div style={{
//                   display: "flex", alignItems: "center", gap: "12px",
//                   borderTop: "1px solid #D4EBE0", paddingTop: "20px",
//                 }}>
//                   <div style={{
//                     width: "40px", height: "40px", borderRadius: "50%",
//                     background: "#2D7A5F",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     color: "white", fontWeight: 800, fontSize: "15px",
//                   }}>
//                     {t.name.split(" ")[2]?.charAt(0) || t.name.charAt(0)}
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 800, fontSize: "14px", color: "#0d2b20" }}>{t.name}</div>
//                     <div style={{ fontSize: "12px", color: "#4a6b5a", marginTop: "2px" }}>{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Trust + CTA Section ───────────────────────── */}
//       <section ref={ctaRef} style={{ padding: "120px 60px", background: "#F3F8F4" }}>
//         <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
//           {/* Trust grid */}
//           <div style={{ marginBottom: "80px" }}>
//             <h2 style={{
//               fontFamily: "'Nunito', sans-serif",
//               fontSize: "clamp(34px,4vw,48px)",
//               fontWeight: 900, color: "#0d2b20",
//               letterSpacing: "-1.5px", textAlign: "center",
//               marginBottom: "8px",
//               opacity: ctaIn ? 1 : 0,
//               transform: ctaIn ? "translateY(0)" : "translateY(20px)",
//               transition: "all .8s cubic-bezier(.4,0,.2,1)",
//             }}>
//               Everything You Need.<br />
//               <span style={{ color: "#2D7A5F" }}>Nothing You Don't.</span>
//             </h2>
//             <p style={{
//               textAlign: "center", color: "#4a6b5a", fontSize: "16px",
//               maxWidth: "500px", margin: "0 auto 56px",
//               opacity: ctaIn ? 1 : 0,
//               transition: "all .8s cubic-bezier(.4,0,.2,1) .1s",
//             }}>
//               We built our platform around one question: what does a dental practice actually need to grow?
//             </p>

//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
//               {trustItems.map((item, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     background: "white", borderRadius: "16px",
//                     padding: "28px 24px",
//                     border: "1px solid #E8F4EE",
//                     boxShadow: "0 2px 12px rgba(0,0,0,.04)",
//                     display: "flex", alignItems: "flex-start", gap: "16px",
//                     opacity: ctaIn ? 1 : 0,
//                     transform: ctaIn ? "translateY(0)" : "translateY(30px)",
//                     transition: `all .7s cubic-bezier(.4,0,.2,1) ${i * 0.08}s`,
//                   }}
//                 >
//                   <div style={{
//                     width: "44px", height: "44px", borderRadius: "12px",
//                     background: "#F0F8F4",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontSize: "20px", flexShrink: 0,
//                   }}>
//                     {item.icon}
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 800, fontSize: "15px", color: "#0d2b20", marginBottom: "6px" }}>
//                       {item.title}
//                     </div>
//                     <div style={{ fontSize: "13px", color: "#4a6b5a", lineHeight: 1.6 }}>
//                       {item.desc}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Final CTA card */}
//           <div style={{
//             background: "linear-gradient(135deg, #0d2b20, #1a4a32)",
//             borderRadius: "28px",
//             padding: "64px",
//             display: "flex", justifyContent: "space-between",
//             alignItems: "center", gap: "40px", flexWrap: "wrap",
//             position: "relative", overflow: "hidden",
//             opacity: ctaIn ? 1 : 0,
//             transform: ctaIn ? "translateY(0)" : "translateY(30px)",
//             transition: "all .9s cubic-bezier(.4,0,.2,1) .3s",
//           }}>
//             {/* Blob inside card */}
//             <div style={{
//               position: "absolute", top: "-30%", right: "-5%",
//               width: "400px", height: "400px", borderRadius: "50%",
//               background: "rgba(184,216,196,.08)", filter: "blur(60px)",
//               pointerEvents: "none",
//             }} />

//             <div style={{ position: "relative", zIndex: 1 }}>
//               <div style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 background: "rgba(255,255,255,.08)", borderRadius: "100px",
//                 padding: "6px 18px", marginBottom: "20px",
//               }}>
//                 <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b8ff00", display: "inline-block" }} />
//                 <span style={{ fontSize: "11px", color: "rgba(255,255,255,.7)", fontWeight: 700, letterSpacing: "2px" }}>
//                   NO CREDIT CARD REQUIRED
//                 </span>
//               </div>
//               <h2 style={{
//                 fontFamily: "'Nunito', sans-serif",
//                 fontSize: "clamp(28px,3.5vw,44px)",
//                 fontWeight: 900, color: "white",
//                 lineHeight: 1.1, letterSpacing: "-1.5px",
//               }}>
//                 Start Growing Your Practice<br />
//                 <span style={{ color: "#B8D8C4" }}>This Month. For Free.</span>
//               </h2>
//               <p style={{ fontSize: "15px", color: "rgba(255,255,255,.5)", marginTop: "12px" }}>
//                 Free audit · Free website build · Free first month · Month-to-month after.
//               </p>
//             </div>

//             <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0, position: "relative", zIndex: 1 }}>
//               <a href="#" style={{
//                 background: "#2D7A5F", color: "white",
//                 borderRadius: "14px", padding: "18px 48px",
//                 fontFamily: "'Nunito', sans-serif", fontWeight: 800,
//                 fontSize: "15px", textDecoration: "none",
//                 boxShadow: "0 8px 32px rgba(45,122,95,.4)",
//                 textAlign: "center",
//                 whiteSpace: "nowrap",
//               }}>
//                 Claim My Free Month →
//               </a>
//               <a href="#" style={{
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "13px", textDecoration: "none", fontWeight: 600,
//                 textAlign: "center",
//               }}>
//                 Or schedule a quick call first →
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // ════════════════════════════════════════════════════════════════
// //  ROOT PAGE — tabbed switcher
// // ════════════════════════════════════════════════════════════════

// type Variant = "a" | "b" | "c";

// const tabs: { id: Variant; label: string; sub: string }[] = [
//   { id: "a", label: "Variant A", sub: "Luxury Clinical · Ivory & Gold" },
//   { id: "b", label: "Variant B", sub: "Electric Neon · Black & Coral" },
//   { id: "c", label: "Variant C", sub: "Soft Premium · Sage & Cream" },
// ];

// export default function DentalPage() {
//   const [active, setActive] = useState<Variant>("a");

//   return (
//     <div>
//       {/* Tab bar */}
//       <div style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
//         background: "rgba(0,0,0,.97)", backdropFilter: "blur(12px)",
//         display: "flex", borderBottom: "1px solid rgba(255,255,255,.08)",
//       }}>
//         {tabs.map((t) => (
//           <button
//             key={t.id}
//             onClick={() => setActive(t.id)}
//             style={{
//               flex: 1, padding: "12px 8px",
//               border: "none",
//               background: active === t.id ? "rgba(255,255,255,.08)" : "transparent",
//               borderBottom: active === t.id ? "2px solid white" : "2px solid transparent",
//               cursor: "pointer", transition: "all .2s",
//             }}
//           >
//             <div style={{
//               fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
//               fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
//               color: active === t.id ? "white" : "rgba(255,255,255,.3)",
//             }}>
//               {t.label}
//             </div>
//             <div style={{
//               fontFamily: "'DM Sans', sans-serif", fontSize: "10px",
//               color: active === t.id ? "rgba(255,255,255,.45)" : "rgba(255,255,255,.15)",
//               marginTop: "2px",
//             }}>
//               {t.sub}
//             </div>
//           </button>
//         ))}
//       </div>

//       <div style={{ paddingTop: "52px" }}>
//         {active === "a" && <SectionA />}
//         {active === "b" && <SectionB />}
//         {active === "c" && <SectionC />}
//       </div>
//     </div>
//   );
// }