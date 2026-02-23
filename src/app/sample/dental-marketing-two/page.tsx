'use client'
import { useEffect, useRef, useState } from "react";

interface CaseStudy {
  practice: string;
  type: string;
  before: string;
  after: string;
  metric: string;
  time: string;
}


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

const painPoints = [
        {
          stat: "93%",
          headline: "of dental websites don't rank on page 1.",
          sub: "You're essentially invisible to every patient searching Google right now.",
        },
        {
          stat: "8 sec",
          headline: "is how long a patient waits before bouncing.",
          sub: "If your site loads slow or looks outdated, they're already calling your competitor.",
        },
        {
          stat: "$12K",
          headline: "wasted on average per year in ineffective ads.",
          sub: "Most agencies optimize for clicks, not booked appointments. You pay the difference.",
        },
      ];

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

const Page = () =>{
    const [active, setActive] = useState(0);
  const pills = ["Fill Empty Chairs", "Rank #1 on Google", "3× More Patients", "Zero Risk — Free Month"];
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % pills.length), 2000);
    return () => clearInterval(t);
  }, []);

  const { ref: painRef, inView: painIn } = useInView();
      const { ref: caseRef, inView: caseIn } = useInView();
      const { ref: ctaRef, inView: ctaIn } = useInView();
      const [hoveredCase, setHoveredCase] = useState<number | null>(null);
    return(
        <>
    <div className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center justify-center" style={{fontFamily:"'Bebas Neue', 'Impact', system-ui"}}>
      {/* BG Image with heavy overlay */}
      <img
        src='"https://images.unsplash.com/photo-1588776814546-1ffbb6789c41?w=1600&q=80"'
        alt="Happy dental patient"
        className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
        style={{filter:"saturate(0.3)"}}
      />
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff3d2e]/20 via-transparent to-[#b8ff00]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-white/5" style={{top:"33%"}} />
        <div className="absolute left-0 right-0 h-px bg-white/5" style={{top:"66%"}} />
        <div className="absolute top-0 bottom-0 w-px bg-white/3" style={{left:"33%"}} />
        <div className="absolute top-0 bottom-0 w-px bg-white/3" style={{left:"66%"}} />
      </div>

      {/* <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-6 z-20">
        <div className="text-white text-2xl font-black tracking-widest uppercase" style={{fontFamily:"'Impact',sans-serif"}}>
          APEX<span className="text-[#ff3d2e]">DENTAL</span>
        </div>
        <div className="flex items-center gap-8">
          {["Services","Results","Pricing"].map(l => (
            <a key={l} href="#" className="text-white/50 text-xs tracking-widest uppercase hover:text-white transition-colors" style={{fontFamily:"sans-serif",fontWeight:600}}>
              {l}
            </a>
          ))}
          <a href="#" className="bg-[#ff3d2e] text-white text-xs tracking-widest uppercase px-6 py-3 font-bold hover:bg-[#b8ff00] hover:text-black transition-all duration-300" style={{fontFamily:"sans-serif"}}>
            Free Audit
          </a>
        </div>
      </nav> */}

      {/* Main content */}
      <div className="relative z-10 w-full px-10 lg:px-20 flex items-center justify-evenly gap-16">
        {/* Left content */}
        <div className="flex-1 max-w-3xl">
          {/* Cycling pill */}
          <div className="mb-8 h-8 overflow-hidden">
            {pills.map((p, i) => (
              <div
                key={p}
                className="flex items-center gap-3 transition-all duration-500"
                style={{
                  transform: `translateY(${(i - active) * 32}px)`,
                  opacity: i === active ? 1 : 0,
                  position: i === active ? "relative" : "absolute",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#b8ff00] animate-pulse inline-block" />
                <span className="text-[#b8ff00] text-xs tracking-[4px] uppercase" style={{fontFamily:"sans-serif",fontWeight:700}}>{p}</span>
              </div>
            ))}
          </div>

          <h1 className="text-[clamp(72px,10vw,140px)] font-black leading-none tracking-[4px] text-white mb-4 uppercase">
            MORE<br />
            <span className="text-[#ff3d2e]" style={{WebkitTextStroke:"2px #ff3d2e",WebkitTextFillColor:"transparent"}}>PATIENTS</span><br />
            <span className="text-[#b8ff00]">NOW.</span>
          </h1>

          <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-xl" style={{fontFamily:"sans-serif",fontWeight:300}}>
            Dental marketing built for one thing: filling your schedule. No fluff, no locked contracts — just booked appointments and tracked ROI.
          </p>

          {/* Bottom stats */}
          <div className="flex gap-8 mb-14 pt-8 border-t border-white/10">
            {[["102K+","Leads Generated"],["4×","Avg Patient Growth"],["$0","Site Build Cost"]].map(([n,l]) => (
              <div key={l}>
                <div className="text-4xl font-black text-white">{n}</div>
                <div className="text-white/30 text-xs tracking-widest uppercase mt-1" style={{fontFamily:"sans-serif",fontWeight:600}}>{l}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center flex-wrap mb-10 ">
            <a href="#" className="bg-[#ff3d2e] text-white px-10 py-5 text-sm font-bold tracking-[2px] uppercase hover:bg-[#b8ff00] hover:text-black transition-all duration-300" style={{fontFamily:"sans-serif"}}>
              Claim Free Month →
            </a>
            <a href="#" className="text-white/60 text-sm flex items-center gap-2 hover:text-white transition-colors" style={{fontFamily:"sans-serif"}}>
              <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-base">▷</span>
              Watch 2-min demo
            </a>
          </div>
        </div>

        {/* Right: Floating card */}
        <div className="hidden lg:block w-[340px] flex-shrink-0">
          <div className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff3d2e]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff3d2e]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff3d2e]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff3d2e]" />
            
            <div className="text-[#b8ff00] text-xs tracking-widest uppercase mb-1" style={{fontFamily:"sans-serif",fontWeight:700}}>
              Free Practice Audit
            </div>
            <div className="text-white text-xl font-medium mb-6 uppercase tracking-[4px]">
              See Where You're Losing Patients
            </div>
            
            <div className="space-y-3">
              {["Full Name","Practice Name","Phone Number","Email Address"].map(p => (
                <input
                  key={p}
                  placeholder={p}
                  className="w-full bg-black/50 border border-white/10 text-white text-sm px-4 py-3 placeholder-white/30 focus:border-[#ff3d2e] focus:outline-none transition-colors"
                  style={{fontFamily:"sans-serif"}}
                />
              ))}
              <select className="w-full bg-black/50 border border-white/10 text-white/50 text-sm px-4 py-3 focus:outline-none" style={{fontFamily:"sans-serif"}}>
                <option>Monthly Ad Budget</option>
                <option>Under $1,000</option>
                <option>$1,000–$3,000</option>
                <option>$3,000–$5,000</option>
                <option>$5,000+</option>
              </select>
              <button className="w-full bg-[#ff3d2e] text-white py-4 text-sm font-black tracking-[2px] uppercase hover:bg-[#b8ff00] hover:text-black transition-all duration-300" style={{fontFamily:"sans-serif"}}>
                Get My Free Audit →
              </button>
            </div>
            <p className="text-white/20 text-xs text-center mt-4" style={{fontFamily:"sans-serif"}}>No spam. Results within 48 hours.</p>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-3 flex gap-0 overflow-hidden bg-black/40">
        <div className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {["Custom Website Builds","Local SEO Domination","Google Ads Management","Patient ROI Tracking","No Long-Term Contracts","Free First Month","PMS Integration","Reputation Management"].concat(
           ["Custom Website Builds","Local SEO Domination","Google Ads Management","Patient ROI Tracking","No Long-Term Contracts","Free First Month","PMS Integration","Reputation Management"]
          ).map((t, i) => (
            <span key={i} className="text-white/30 text-xs tracking-[3px] uppercase" style={{fontFamily:"sans-serif"}}>
              {t} <span className="text-[#ff3d2e] mx-6">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>

        <div style={{ background: "#080808", fontFamily: "'DM Sans', sans-serif" }}>
    
          {/* ── Case Studies Section ─────────────────────── */}
          <section ref={caseRef} style={{
            padding: "120px 80px",
            background: "linear-gradient(180deg, #080808 0%, #0f0500 100%)",
            position: "relative",
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", gap: "32px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <span style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: "#b8ff00", display: "inline-block",
                      boxShadow: "0 0 12px #b8ff00",
                    }} />
                    <span style={{ fontSize: "11px", letterSpacing: "4px", color: "#b8ff00", textTransform: "uppercase", fontWeight: 700 }}>
                      Proof Over Promises
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(40px,5vw,64px)",
                    fontWeight: 900, color: "white",
                    lineHeight: 1.0, letterSpacing: "-2px",
                    textTransform: "uppercase",
                    opacity: caseIn ? 1 : 0,
                    transform: caseIn ? "translateY(0)" : "translateY(30px)",
                    transition: "all .8s cubic-bezier(.4,0,.2,1)",
                  }}>
                    Real Practices.<br />
                    <span style={{ color: "#b8ff00" }}>Real Numbers.</span>
                  </h2>
                </div>
                <a href="#" style={{
                  border: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.6)",
                  padding: "14px 32px", textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                  letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600,
                  flexShrink: 0,
                }}>
                  View All Case Studies →
                </a>
              </div>
    
              {/* Case study cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {CASE_STUDIES.map((cs, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredCase(i)}
                    onMouseLeave={() => setHoveredCase(null)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr 120px",
                      gap: "0",
                      alignItems: "center",
                      background: hoveredCase === i ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.02)",
                      border: "1px solid",
                      borderColor: hoveredCase === i ? "rgba(255,61,46,.3)" : "rgba(255,255,255,.05)",
                      transition: "all .3s",
                      cursor: "pointer",
                      opacity: caseIn ? 1 : 0,
                      transform: caseIn ? "translateX(0)" : "translateX(-30px)",
                      transitionProperty: "opacity,transform,background,border-color",
                      transitionDuration: `.6s,.6s,.3s,.3s`,
                      transitionDelay: `${i * 0.1}s,${i * 0.1}s,0s,0s`,
                    }}
                  >
                    <div style={{ padding: "32px 36px", borderRight: "1px solid rgba(255,255,255,.05)" }}>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "white" }}>
                        {cs.practice}
                      </div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,.3)", marginTop: "4px", letterSpacing: "1px" }}>
                        {cs.type}
                      </div>
                    </div>
                    <div style={{ padding: "32px 28px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,.05)" }}>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Before</div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 900, color: "#ff3d2e" }}>{cs.before}</div>
                    </div>
                    <div style={{ padding: "32px 28px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,.05)" }}>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>After</div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 900, color: "#b8ff00" }}>{cs.after}</div>
                    </div>
                    <div style={{ padding: "32px 28px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,.05)" }}>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,.3)", letterSpacing: "1px", marginBottom: "8px" }}>{cs.metric}</div>
                      <div style={{
                        display: "inline-block",
                        background: "rgba(184,255,0,.1)", color: "#b8ff00",
                        fontSize: "11px", padding: "4px 12px",
                        letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700,
                      }}>
                        {cs.time}
                      </div>
                    </div>
                    <div style={{ padding: "32px 24px", textAlign: "center" }}>
                      <span style={{
                        color: hoveredCase === i ? "#ff3d2e" : "rgba(255,255,255,.2)",
                        fontSize: "20px", transition: "all .3s",
                        transform: hoveredCase === i ? "translateX(4px)" : "translateX(0)",
                        display: "inline-block",
                      }}>
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
    
              {/* Bottom mega CTA */}
              <div
                ref={ctaRef}
                style={{
                  marginTop: "80px",
                  border: "1px solid rgba(255,255,255,.08)",
                  padding: "64px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "32px",
                  flexWrap: "wrap",
                  position: "relative",
                  overflow: "hidden",
                  opacity: ctaIn ? 1 : 0,
                  transform: ctaIn ? "translateY(0)" : "translateY(30px)",
                  transition: "all .8s cubic-bezier(.4,0,.2,1)",
                }}
              >
                {/* Corner accents */}
                {[
                  { top: 0, left: 0, borderTop: "2px solid #ff3d2e", borderLeft: "2px solid #ff3d2e" },
                  { top: 0, right: 0, borderTop: "2px solid #ff3d2e", borderRight: "2px solid #ff3d2e" },
                  { bottom: 0, left: 0, borderBottom: "2px solid #ff3d2e", borderLeft: "2px solid #ff3d2e" },
                  { bottom: 0, right: 0, borderBottom: "2px solid #ff3d2e", borderRight: "2px solid #ff3d2e" },
                ].map((s, i) => (
                  <div key={i} style={{ position: "absolute", width: "24px", height: "24px", ...s }} />
                ))}
    
                <div>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(28px,3.5vw,44px)",
                    fontWeight: 900, color: "white",
                    textTransform: "uppercase", letterSpacing: "-2px",
                    lineHeight: 1.05,
                  }}>
                    Stop Watching Patients<br />
                    <span style={{ color: "#ff3d2e" }}>Choose Your Competitor.</span>
                  </div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,.35)", marginTop: "12px" }}>
                    First month free. No contracts. Launch in 2 weeks.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", flexShrink: 0, flexWrap: "wrap" }}>
                  <a href="#" style={{
                    background: "#ff3d2e", color: "white",
                    padding: "20px 48px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                    fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
                    textDecoration: "none", whiteSpace: "nowrap",
                  }}>
                    Start Free Now →
                  </a>
                  <a href="#" style={{
                    border: "1px solid rgba(255,255,255,.15)",
                    color: "rgba(255,255,255,.6)",
                    padding: "20px 32px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
                    textDecoration: "none", whiteSpace: "nowrap",
                  }}>
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </section>
          <B_HowItWorks/>
          <B_ROICalc/>
        </div>
        </>
      );
    };
  
export default Page

// ─── Hook: useCountUp ───────────────────────────────────────────
function useCountUp(target: number, duration = 1400, active = true) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setV(target); clearInterval(t); }
      else setV(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return v;
}

// ═══════════════════════════════════════════════════════════════
// VARIANT B — THEME: #080808 Black · #ff3d2e Coral · #b8ff00 Lime
// Fonts: Syne ultra-bold (display) · DM Sans (body)
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────
// B2 — HOW IT WORKS
// 4-step horizontal cards, neon color per step, hover glow
// ─────────────────────────────────────────────────────────────────
export function B_HowItWorks() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState<number | null>(null);

  const steps = [
    {
      n: "01", title: "Rapid Audit", time: "Day 1", color: "#ff3d2e",
      desc: "We tear apart your current online presence in 24 hours — rankings, site speed, competitor gaps, local visibility, and ad inefficiencies. You'll see the real numbers, not the comfortable ones.",
      items: ["Local SEO audit", "Competitor analysis", "Ad account review", "Site performance scan"],
    },
    {
      n: "02", title: "Build & Arm", time: "Days 2–14", color: "#ff7a00",
      desc: "Your new conversion-first website goes live. Ad campaigns are structured. Google Business is optimized. Everything launches simultaneously — no 3-month onboarding delay.",
      items: ["Custom website live", "Ad campaigns live", "Google Business optimized", "Tracking installed"],
    },
    {
      n: "03", title: "Launch Hard", time: "Day 15", color: "#ffb800",
      desc: "Full throttle. Ads running, SEO compounding, leads flowing. Your dashboard shows every patient source — from first click to completed treatment. No black boxes.",
      items: ["Leads start flowing", "ROI dashboard live", "Weekly optimization", "Monthly strategy calls"],
    },
    {
      n: "04", title: "Dominate", time: "Month 2+", color: "#b8ff00",
      desc: "Most clients see 2–4× patient volume by month 3. We keep scaling what works and cutting what doesn't — with your production data guiding every decision.",
      items: ["Scale winning channels", "Add new locations", "Referral systems", "Reputation growth"],
    },
  ];

  const timelineBars: [string, string][] = [
    ["Day 1", "#ff3d2e"],
    ["Days 2–14", "#ff7a00"],
    ["Day 15", "#ffb800"],
    ["Month 2+", "#b8ff00"],
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "#080808", padding: "120px 72px", position: "relative", overflow: "hidden" }}
    >
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Diagonal glow */}
      <div style={{
        position: "absolute", top: "20%", left: "-10%",
        width: "600px", height: "600px",
        background: "radial-gradient(ellipse, rgba(255,61,46,.04), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "end", marginBottom: "80px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              {/* Pulse dot */}
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#b8ff00", display: "inline-block",
                boxShadow: "0 0 12px #b8ff00",
                animation: "pulse-glow 2.2s ease-in-out infinite",
              }} />
              <span style={{ fontSize: "11px", letterSpacing: "4px", color: "#b8ff00", textTransform: "uppercase", fontWeight: 700 }}>
                The System
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(44px,5.5vw,72px)",
              fontWeight: 900, color: "white",
              lineHeight: .97, letterSpacing: "-3px", textTransform: "uppercase",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: "all .8s cubic-bezier(.4,0,.2,1)",
            }}>
              How We<br />
              <span style={{ color: "#ff3d2e" }}>Fill Your</span><br />
              <span style={{ WebkitTextStroke: "2px #b8ff00", WebkitTextFillColor: "transparent" }}>Schedule.</span>
            </h2>
          </div>
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all .8s cubic-bezier(.4,0,.2,1) .15s",
          }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", color: "rgba(255,255,255,.45)", lineHeight: 1.78 }}>
              No 90-day &ldquo;setup periods.&rdquo; No mystery deliverables. Four brutally clear phases — from day one audit to full domination. You see everything.
            </p>
          </div>
        </div>

        {/* ── Step Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2px" }}>
          {steps.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                background: active === i ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.02)",
                border: "1px solid",
                borderColor: active === i ? `${s.color}44` : "rgba(255,255,255,.06)",
                padding: "40px 28px",
                cursor: "default",
                transition: "all .35s cubic-bezier(.4,0,.2,1)",
                position: "relative", overflow: "hidden",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Top color bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: `linear-gradient(to right, ${s.color}, transparent)`,
              }} />
              {/* Hover glow */}
              <div style={{
                position: "absolute", top: "-40px", left: "-40px",
                width: "120px", height: "120px", borderRadius: "50%",
                background: `radial-gradient(circle, ${s.color}22, transparent)`,
                opacity: active === i ? 1 : 0,
                transition: "opacity .35s",
              }} />
              {/* Connector arrow (not last) */}
              {i < 3 && (
                <div style={{
                  position: "absolute", right: "-12px", top: "50%",
                  transform: "translateY(-50%)",
                  color: "rgba(255,255,255,.1)", fontSize: "18px", zIndex: 2,
                }}>›</div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontSize: "52px",
                  fontWeight: 900, color: s.color,
                  lineHeight: 1, letterSpacing: "-2px", opacity: 0.9,
                }}>
                  {s.n}
                </div>
                <div style={{
                  fontFamily: "'DM Sans',sans-serif", fontSize: "10px",
                  letterSpacing: "2px", textTransform: "uppercase",
                  color: `${s.color}88`,
                  border: `1px solid ${s.color}33`,
                  padding: "3px 10px",
                }}>
                  {s.time}
                </div>
              </div>

              <div style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "18px",
                color: "white", marginBottom: "14px",
                textTransform: "uppercase", letterSpacing: "-0.5px",
              }}>
                {s.title}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,.38)", lineHeight: 1.75, marginBottom: "24px" }}>
                {s.desc}
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {s.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: s.color, fontSize: "12px", flexShrink: 0 }}>◆</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "rgba(255,255,255,.5)", letterSpacing: "0.5px" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Timeline Bar ── */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "2px" }}>
          {timelineBars.map(([label, color], i) => (
            <div key={i} style={{
              flex: 1,
              background: `${color}18`,
              borderTop: `2px solid ${color}`,
              padding: "14px 28px",
              display: "flex", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: "12px",
                color: `${color}cc`, letterSpacing: "2px",
                textTransform: "uppercase", fontWeight: 600,
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", marginTop: "72px" }}>
          <div style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(24px,3.5vw,40px)",
            fontWeight: 900, color: "white",
            textTransform: "uppercase", letterSpacing: "-1.5px",
            marginBottom: "20px",
          }}>
            Ready to start the clock?
          </div>
          <a
            href="#"
            style={{
              display: "inline-block",
              background: "#ff3d2e", color: "white",
              padding: "20px 60px",
              fontFamily: "'DM Sans',sans-serif", fontWeight: 700,
              fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Begin Day 1 Free →
          </a>
        </div>
      </div>

      {/* Keyframes via style tag */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(.85); }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// B3 — ROI CALCULATOR
// Interactive sliders: patients/mo, avg value, close rate
// Live-updating split result panel
// ─────────────────────────────────────────────────────────────────
export function B_ROICalc() {
  const { ref, inView } = useInView(0.1);

  const [patients, setPatients] = useState(20);
  const [value, setValue] = useState(800);
  const [close, setClose] = useState(40);

  const monthly = Math.round(patients * (value * close / 100));
  const withUs = Math.round(monthly * 3.2);
  const gain = withUs - monthly;

  const c1 = useCountUp(monthly, 1000, inView);
  const c2 = useCountUp(withUs, 1200, inView);
  const c3 = useCountUp(gain, 1400, inView);

  const sliders = [
    {
      label: "New patients/month",
      val: patients, set: setPatients,
      min: 5, max: 100, step: 1,
      unit: "", color: "#ff3d2e",
    },
    {
      label: "Average treatment value",
      val: value, set: setValue,
      min: 200, max: 3000, step: 50,
      unit: "$", color: "#ff7a00",
    },
    {
      label: "Lead-to-patient close rate",
      val: close, set: setClose,
      min: 10, max: 90, step: 5,
      unit: "%", color: "#b8ff00",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: "#050505", padding: "120px 72px", position: "relative", overflow: "hidden" }}
    >
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Lime glow */}
      <div style={{
        position: "absolute", right: "-10%", top: "20%",
        width: "500px", height: "500px",
        background: "radial-gradient(ellipse, rgba(184,255,0,.04), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#ff3d2e", display: "inline-block",
            boxShadow: "0 0 12px #ff3d2e",
            animation: "pulse-glow 2.2s ease-in-out infinite",
          }} />
          <span style={{ fontSize: "11px", letterSpacing: "4px", color: "#ff3d2e", textTransform: "uppercase", fontWeight: 700 }}>
            Do The Math
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(40px,5.5vw,68px)",
          fontWeight: 900, color: "white",
          lineHeight: .97, letterSpacing: "-3px", textTransform: "uppercase",
          marginBottom: "16px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(28px)",
          transition: "all .8s cubic-bezier(.4,0,.2,1)",
        }}>
          What&apos;s One Empty<br />
          <span style={{ color: "#ff3d2e" }}>Chair Costing You?</span>
        </h2>

        <p style={{
          fontFamily: "'DM Sans',sans-serif", fontSize: "16px",
          color: "rgba(255,255,255,.4)", marginBottom: "72px",
          opacity: inView ? 1 : 0,
          transition: "all .8s .1s",
        }}>
          Drag the sliders. Watch your potential revenue update in real time.
        </p>

        {/* ── Main Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>

          {/* Left: Sliders */}
          <div style={{
            background: "rgba(255,255,255,.03)",
            border: "1px solid rgba(255,255,255,.07)",
            padding: "52px 48px",
            display: "flex", flexDirection: "column", gap: "52px",
          }}>
            {sliders.map(({ label, val, set, min, max, step, unit, color }) => (
              <div key={label}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", color: "rgba(255,255,255,.55)", letterSpacing: "0.5px" }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "28px", fontWeight: 900, color, letterSpacing: "-1px" }}>
                    {unit}{val.toLocaleString()}
                  </span>
                </div>

                {/* Custom slider track */}
                <div style={{ position: "relative" }}>
                  <div style={{ height: "4px", background: "rgba(255,255,255,.08)", borderRadius: "2px", position: "relative" }}>
                    <div style={{
                      position: "absolute", left: 0, top: 0, height: "100%",
                      width: `${((val - min) / (max - min)) * 100}%`,
                      background: color, borderRadius: "2px",
                      transition: "width .1s",
                    }} />
                  </div>
                  <input
                    type="range"
                    min={min} max={max} step={step} value={val}
                    onChange={e => set(Number(e.target.value))}
                    style={{
                      position: "absolute", top: "-8px", left: 0, right: 0,
                      width: "100%", height: "20px",
                      background: "transparent", cursor: "pointer",
                      WebkitAppearance: "none", appearance: "none",
                    }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,.2)" }}>
                    {unit}{min}
                  </span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,.2)" }}>
                    {unit}{max}
                  </span>
                </div>

                {/* Thumb style injected per slider */}
                <style>{`
                  input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 20px; height: 20px;
                    border-radius: 50%;
                    background: ${color};
                    border: 2px solid #080808;
                    box-shadow: 0 0 8px ${color}66;
                    cursor: pointer;
                  }
                `}</style>
              </div>
            ))}
          </div>

          {/* Right: Results */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>

            {/* Current Revenue */}
            <div style={{
              background: "rgba(255,61,46,.06)",
              border: "1px solid rgba(255,61,46,.15)",
              padding: "36px 40px", flex: 1,
            }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "rgba(255,255,255,.35)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                Your Current Monthly Revenue
              </div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, color: "#ff3d2e", letterSpacing: "-2px", lineHeight: 1 }}>
                ${c1.toLocaleString()}
              </div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "rgba(255,255,255,.25)", marginTop: "8px" }}>
                Based on your inputs
              </div>
            </div>

            {/* With Us */}
            <div style={{
              background: "rgba(184,255,0,.06)",
              border: "1px solid rgba(184,255,0,.2)",
              padding: "36px 40px", flex: 1,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, #b8ff00, transparent)" }} />
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "rgba(184,255,0,.55)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                With Relevance (avg 3.2× growth)
              </div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, color: "#b8ff00", letterSpacing: "-2px", lineHeight: 1 }}>
                ${c2.toLocaleString()}
              </div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "rgba(255,255,255,.3)", marginTop: "8px" }}>
                Conservative estimate · Typical within 90 days
              </div>
            </div>

            {/* Monthly Upside + CTA */}
            <div style={{
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.07)",
              padding: "28px 40px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              gap: "16px", flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px" }}>
                  Monthly Upside
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "32px", fontWeight: 900, color: "white", letterSpacing: "-1.5px" }}>
                  +${c3.toLocaleString()}
                </div>
              </div>
              <a
                href="#"
                style={{
                  background: "#ff3d2e", color: "white",
                  padding: "16px 32px",
                  fontFamily: "'DM Sans',sans-serif", fontWeight: 700,
                  fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
                  textDecoration: "none", flexShrink: 0,
                }}
              >
                Capture This →
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: "20px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,.18)", textAlign: "center", letterSpacing: "0.5px" }}>
          Calculator uses average results across 500+ client practices. Individual results vary based on market, specialty, and ad budget.
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(.85); }
        }
      `}</style>
    </section>
  );
}