'use client'
import { useEffect, useRef, useState } from "react";
import logo from '@/assets/Bixeltek Black Logo.png' 
import Image from "next/image";
import { Whiteheader } from "@/components/Whiteheader";
import { Footer } from "@/sections/Footer";
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  result: string;
}

interface Step {
  number: string;
  title: string;
  desc: string;
  detail: string;
}

interface NavLink {
  link: string;
  href: string;
}

const navLinks: NavLink[] = [
  { link: "Services", href: "#services" },
  { link: "Success Stories", href: "#testimonals" },
  { link: "Process", href: "#our-process" },
  { link: "How you Transform", href: "#transformation" },
];

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

const trustItems: { icon: string; title: string; desc: string }[] = [
        { icon: "🏆", title: "Results Guaranteed", desc: "If we don't bring new patients, you don't pay" },
        { icon: "📋", title: "No Long Contracts", desc: "Month-to-month, cancel anytime with 30 days notice" },
        { icon: "🆓", title: "Free Website Build", desc: "Custom designed site included, zero upfront cost" },
        { icon: "📊", title: "Transparent Reporting", desc: "Real-time dashboard tied to your actual production data" },
        { icon: "🔗", title: "PMS Integration", desc: "Connects with Dentrix, Eaglesoft, Open Dental & more" },
        { icon: "🤝", title: "Dedicated Account Team", desc: "A real human who knows your practice, not a helpdesk" },
      ];

      const features = [
    { icon: "🦷", title: "Custom Website", desc: "Built free, owned by you" },
    { icon: "📈", title: "Google Ranking", desc: "SEO that actually works" },
    { icon: "🎯", title: "Targeted Ads", desc: "ROI tracked to the dollar" },
    { icon: "📅", title: "Auto-Booking", desc: "PMS synced in real-time" },
  ];

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
const STEPS_C: Step[] = [
  {
    number: "01",
    title: "Free Practice Audit",
    desc: "We find exactly where you're losing patients",
    detail:
      "A thorough look at your local SEO, website performance, review score, and competitor gaps. Delivered in 48 hours — completely free.",
  },
  {
    number: "02",
    title: "Custom Growth Plan",
    desc: "A roadmap built for your exact practice",
    detail:
      "No cookie-cutter packages. We design a strategy around your specialty, location, and patient goals — with clear monthly targets.",
  },
  {
    number: "03",
    title: "Launch & Scale",
    desc: "Go live in 2 weeks, grow every month",
    detail:
      "Your new website and ad campaigns launch together. We optimize weekly and report monthly, so you always know what's working.",
  },
]; 


const Page = () =>{
        
  return (
    <>
    <Whiteheader/>
    <C_Hero/>

        <div style={{ background: "#F3F8F4", fontFamily: "'Nunito', sans-serif" }}>
        <C_Testiomonials/>
            <C_HowItWorks/>          

          {/* ── How It Works ─────────────────────────────── */}

    
          {/* ── Trust + CTA Section ───────────────────────── */}
          <C_CTA/>
          <C_Services/>
          <C_Transformation/>
        </div>
        <Footer/>
        </>
      );
  }

export default Page

const fi = (inView: boolean, delay = 0) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `all .8s cubic-bezier(.4,0,.2,1) ${delay}s`,
});

export function C_Services() {
  const { ref, inView } = useInView();

  const normalCards = [
    {
      icon: "📍",
      title: "Local SEO",
      sub: "Rank #1 near you",
      desc: "Dominate 'dentist near me' searches with citation building, Google Business, and keyword architecture.",
    },
    {
      icon: "🎯",
      title: "Google & Meta Ads",
      sub: "Managed for you",
      desc: "Campaigns built to book patients, not collect clicks. Every dollar tracked from impression to treatment.",
    },
  ];

  const bottomCards = [
    {
      icon: "⭐",
      title: "Review Generation",
      sub: "Automated post-visit",
      desc: "Happy patients become 5-star Google reviews automatically. Average 47 new reviews/month across our clients.",
    },
    {
      icon: "📱",
      title: "Reputation Monitoring",
      sub: "24/7 coverage",
      desc: "Every mention tracked in real time. AI-drafted responses within minutes — keeping your reputation spotless.",
    },
    {
      icon: "💬",
      title: "Patient Reactivation",
      sub: "Win-back campaigns",
      desc: "Automated sequences that bring lapsed patients back in — turning your existing database into a steady stream of scheduled appointments.",
    },
  ];

  return (
    <section
  id="services"
  ref={ref as React.RefObject<HTMLElement>}
  style={{
    background: "#F3F8F4",
    padding: "clamp(80px,10vw,120px) clamp(20px,6vw,64px)"
  }}
>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

    {/* ── Header ── */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "56px",
        flexWrap: "wrap",
        gap: "32px"
      }}
    >
      <div style={{ flex: "1 1 400px", ...fi(inView) }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "white",
            borderRadius: "100px",
            padding: "6px 20px",
            boxShadow: "0 2px 12px rgba(0,0,0,.06)",
            border: "1px solid #D4EBE0",
            marginBottom: "20px"
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#2D7A5F"
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#2D7A5F"
            }}
          >
            Everything Included
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Nunito',sans-serif",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 900,
            color: "#0d2b20",
            lineHeight: 1.1,
            letterSpacing: "-1.5px"
          }}
        >
          One Plan.<br />
          <span style={{ color: "#2D7A5F" }}>
            Six Growth Engines.
          </span>
        </h2>
      </div>

      <div style={{ flex: "1 1 300px", maxWidth: "380px", ...fi(inView, 0.2) }}>
        <p style={{ fontSize: "15px", color: "#4a6b5a", lineHeight: 1.75 }}>
          No add-on surprises. Every client gets the full suite because
          piecemeal marketing is why most practices stagnate.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2D7A5F" }} />
          <span style={{ fontSize: "13px", color: "#4a6b5a" }}>
            From $997/mo after your free first month
          </span>
        </div>
      </div>
    </div>

    {/* ── Responsive Grid ── */}
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
      }}
    >
      {/* Website Card */}
      <div
        style={{
          background: "#0d2b20",
          borderRadius: "24px",
          padding: "clamp(28px,4vw,40px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "320px",
          position: "relative",
          overflow: "hidden",
          ...fi(inView, 0)
        }}
      >
        <div>
          <div style={{ marginBottom: "24px", fontSize: "32px" }}>🌐</div>

          <div
            style={{
              fontFamily: "'Nunito',sans-serif",
              fontWeight: 900,
              fontSize: "22px",
              color: "white",
              marginBottom: "12px"
            }}
          >
            Custom Website
          </div>

          <div style={{ fontSize: "14px", color: "rgba(255,255,255,.6)", lineHeight: 1.75 }}>
            Conversion-optimized, branded to your practice, live in 2 weeks.
            Zero upfront cost. Zero templates.
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: "32px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px"
          }}
        >
          <div>
            <div style={{ fontWeight: 900, fontSize: "26px", color: "#B8D8C4" }}>14</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,.4)" }}>
              Days to launch
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: "26px", color: "#B8D8C4" }}>$0</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,.4)" }}>
              Upfront cost
            </div>
          </div>
        </div>
      </div>

      {/* Normal Cards */}
      {[...normalCards, ...bottomCards].map((s, i) => (
        <div
          key={i}
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "clamp(24px,3vw,32px)",
            border: "1px solid #E8F4EE",
            boxShadow: "0 2px 16px rgba(0,0,0,.04)",
            ...fi(inView, i * 0.1 + 0.1)
          }}
        >
          <span style={{ fontSize: "28px", display: "block", marginBottom: "18px" }}>
            {s.icon}
          </span>
          <div style={{
            fontFamily: "'Nunito',sans-serif",
            fontWeight: 800,
            fontSize: "17px",
            color: "#0d2b20",
            marginBottom: "4px"
          }}>
            {s.title}
          </div>
          <div style={{
            fontSize: "12px",
            color: "#2D7A5F",
            fontWeight: 700,
            marginBottom: "12px"
          }}>
            {s.sub}
          </div>
          <div style={{ fontSize: "13px", color: "#4a6b5a", lineHeight: 1.7 }}>
            {s.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export function C_Transformation() {
  const { ref, inView } = useInView();
  const { ref: r2, inView: v2 } = useInView();

  const beforeItems = [
    "Website built in 2018 — shows on mobile as a mess",
    "Averaging 12–18 new patients a month",
    "Spending $800/mo on Google Ads with no idea if it works",
    "Page 6 on Google for 'dentist near me'",
    "3.8 stars on Google with 22 reviews",
    "Zero idea which channel brings in patients",
  ];

  const afterItems = [
    "Stunning, fast, conversion-first website patients trust",
    "Averaging 55–80 new patients a month",
    "Every ad dollar tied to a real patient and treatment value",
    "Page 1, position 1–3 for every local keyword",
    "4.9 stars with 180+ verified reviews",
    "Dashboard shows ROI to the dollar, updated live",
  ];

  const journeySteps = [
    { label: "Month 1", desc: "Site launches, ads live, SEO indexed", color: "#B8D8C4" },
    { label: "Month 2", desc: "First ranking jumps, lead volume grows", color: "#8DC4A8" },
    { label: "Month 3", desc: "2–3× patient volume, reviews building", color: "#5DAF8C" },
    { label: "Month 4+", desc: "Full domination, scaling what works", color: "#2D7A5F" },
  ];

  return (
    <section
  id="transformation"
  ref={ref as React.RefObject<HTMLElement>}
  style={{
    background: "white",
    padding: "clamp(80px,10vw,120px) clamp(20px,6vw,64px)"
  }}
>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

    {/* ── Header ── */}
    <div style={{ textAlign: "center", marginBottom: "clamp(48px,6vw,72px)" }}>
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "#F3F8F4",
        borderRadius: "100px",
        padding: "6px 20px",
        border: "1px solid #D4EBE0",
        marginBottom: "20px"
      }}>
        <span style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#2D7A5F"
        }} />
        <span style={{
          fontSize: "12px",
          fontWeight: 700,
          color: "#2D7A5F"
        }}>
          The Transformation
        </span>
      </div>

      <h2 style={{
        fontFamily: "'Nunito',sans-serif",
        fontSize: "clamp(30px,4vw,52px)",
        fontWeight: 900,
        color: "#0d2b20",
        lineHeight: 1.1,
        letterSpacing: "-1.5px",
        ...fi(inView)
      }}>
        Before BixelTek.<br />
        <span style={{ color: "#2D7A5F" }}>
          After BixelTek.
        </span>
      </h2>

      <p style={{
        fontSize: "16px",
        color: "#4a6b5a",
        maxWidth: "500px",
        margin: "16px auto 0",
        lineHeight: 1.75,
        ...fi(inView, 0.1)
      }}>
        This is the story of every practice that&apos;s made the switch.
        The only thing that changes is how fast you start.
      </p>
    </div>

    {/* ── Responsive Before / After ── */}
    <div
      style={{
        display: "grid",
        gap: "20px",
        marginBottom: "clamp(56px,6vw,72px)",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
      }}
    >

      {/* Before */}
      <div style={{
        background: "#fdf5f5",
        borderRadius: "20px",
        border: "1px solid #f0dada",
        padding: "clamp(24px,4vw,36px)",
        ...fi(inView, 0.1)
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#e87070" }} />
          <div style={{
            fontFamily: "'Nunito',sans-serif",
            fontWeight: 900,
            fontSize: "18px",
            color: "#7a2020"
          }}>
            Before
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {beforeItems.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px" }}>
              <span style={{ color: "#e87070" }}>✕</span>
              <span style={{
                fontFamily: "'Nunito',sans-serif",
                fontSize: "14px",
                color: "#7a4040",
                lineHeight: 1.6
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* After */}
      <div style={{
        background: "#f0f8f4",
        borderRadius: "20px",
        border: "1px solid #C4E0D4",
        padding: "clamp(24px,4vw,36px)",
        ...fi(inView, 0.2)
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2D7A5F" }} />
          <div style={{
            fontFamily: "'Nunito',sans-serif",
            fontWeight: 900,
            fontSize: "18px",
            color: "#0d2b20"
          }}>
            After BixelTek
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {afterItems.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px" }}>
              <span style={{ color: "#2D7A5F" }}>✓</span>
              <span style={{
                fontFamily: "'Nunito',sans-serif",
                fontSize: "14px",
                color: "#2d4a38",
                lineHeight: 1.6,
                fontWeight: 500
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Timeline ── */}
    <div
    //@ts-ignore
      ref={r2 as React.RefObject<HTMLElement>}
      style={{
        background: "#F3F8F4",
        borderRadius: "24px",
        padding: "clamp(28px,5vw,48px)",
        border: "1px solid #D4EBE0"
      }}
    >
      <div style={{
        marginBottom: "32px"
      }}>
        <div style={{
          fontFamily: "'Nunito',sans-serif",
          fontWeight: 900,
          fontSize: "20px",
          color: "#0d2b20"
        }}>
          Your Growth Timeline
        </div>
        <div style={{
          fontSize: "13px",
          color: "#4a6b5a",
          marginTop: "4px"
        }}>
          What to expect, month by month
        </div>
      </div>

      <div style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
      }}>
        {journeySteps.map((s, i) => (
          <div
            key={i}
            style={{
              opacity: v2 ? 1 : 0,
              transform: v2 ? "translateY(0)" : "translateY(20px)",
              transition: `all .7s cubic-bezier(.4,0,.2,1) ${i * 0.1}s`
            }}
          >
            <div style={{
              height: "6px",
              borderRadius: "100px",
              background: "#E8F4EE",
              marginBottom: "14px",
              overflow: "hidden"
            }}>
              <div style={{
                height: "100%",
                width: v2 ? `${25 + i * 25}%` : "0%",
                background: s.color,
                borderRadius: "100px",
                transition: `width 1s cubic-bezier(.4,0,.2,1)`
              }} />
            </div>

            <div style={{
              fontFamily: "'Nunito',sans-serif",
              fontWeight: 800,
              fontSize: "15px",
              color: "#0d2b20",
              marginBottom: "6px"
            }}>
              {s.label}
            </div>

            <div style={{
              fontSize: "13px",
              color: "#4a6b5a",
              lineHeight: 1.6
            }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{
        marginTop: "40px",
        paddingTop: "28px",
        borderTop: "1px solid #D4EBE0",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{
          fontFamily: "'Nunito',sans-serif",
          fontSize: "17px",
          fontWeight: 800,
          color: "#0d2b20"
        }}>
          Ready to start your Month 1?{" "}
          <span style={{ color: "#2D7A5F" }}>
            It&apos;s free.
          </span>
        </div>

        <a
          href="#"
          style={{
            background: "#2D7A5F",
            color: "white",
            borderRadius: "12px",
            padding: "14px 32px",
            fontFamily: "'Nunito',sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 8px 24px rgba(45,122,95,.28)"
          }}
        >
          Start Free →
        </a>
      </div>
    </div>

  </div>
</section>
  );
}

export function C_Hero() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#F3F8F4] pt-24 md:pt-28 lg:pt-32"
      style={{ fontFamily: "'DM Rounded', 'Nunito', sans-serif" }}
    >
      {/* Blobs (scaled down on mobile) */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#B8D8C4]/40 blur-[80px]" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#E8D5C4]/40 blur-[80px]" />
      <div className="absolute top-[30%] left-[30%] w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#7EB8A0]/20 blur-[60px]" />

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-6 pb-16 md:pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-88px)]">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 md:mb-8 shadow-sm border border-[#D4EBE0]">
            <span className="w-2 h-2 rounded-full bg-[#2D7A5F] animate-pulse" />
            <span className="text-[#2D7A5F] text-xs font-semibold">
              500+ Dental Practices Trust Us
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-[#0d2b20] leading-[1.1] tracking-[-1.5px] md:tracking-[-2px] mb-6">
            Your Practice<br />
            Deserves a<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#2D7A5F]">
                Full Schedule.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#B8D8C4" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[#4a6b5a] text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            We help dental practices attract more of the right patients — with beautiful websites, local SEO, and marketing that pays for itself. First month completely free.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mb-10 justify-center lg:justify-start">
            <a
              href="#"
              className="bg-[#2D7A5F] text-white rounded-xl px-8 py-4 font-bold text-sm hover:bg-[#1a5a42] transition-all duration-300 shadow-lg shadow-[#2D7A5F]/25 flex items-center justify-center gap-2"
            >
              Start Free Today <span>→</span>
            </a>

            <a
              href="#"
              className="bg-white text-[#2D7A5F] rounded-xl px-8 py-4 font-bold text-sm border-2 border-[#D4EBE0] hover:border-[#2D7A5F] transition-all duration-300 flex items-center justify-center gap-2"
            >
              ▷ See Results
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
            {[
              "No contracts",
              "Conversion Optimized Website",
              "Month-to-month",
              "Guaranteed results",
              "Google Certified Team"
            ].map(t => (
              <div key={t} className="flex items-center gap-2 text-xs md:text-sm text-[#4a6b5a]">
                <div className="w-5 h-5 rounded-full bg-[#D4EBE0] flex items-center justify-center text-[#2D7A5F] text-xs font-bold">
                  ✓
                </div>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mt-12 lg:mt-0">

          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0d2b20]/20">
            <img
              src="https://images.unsplash.com/photo-1662837625421-1f9f79491cf5?w=500&auto=format&fit=crop&q=60"
              alt="Happy dental patient"
              className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b20]/60 via-transparent to-transparent" />

            {/* Overlay card */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#0d2b20] font-bold text-sm">Monthly Growth</div>
                    <div className="text-[#4a6b5a] text-xs">Last 90 days</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#2D7A5F] text-xl md:text-2xl font-black">+247%</div>
                    <div className="text-[#4a6b5a] text-xs">New Patients</div>
                  </div>
                </div>

                <div className="flex gap-1 mt-3 items-end h-10">
                  {[30,45,35,60,55,75,90,100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-[#2D7A5F]"
                      style={{ height: `${h}%`, opacity: i === 7 ? 1 : 0.3 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8F4EE] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0F8F4] flex items-center justify-center text-xl">
                  {f.icon}
                </div>
                <div>
                  <div className="text-[#0d2b20] font-bold text-sm">{f.title}</div>
                  <div className="text-[#4a6b5a] text-xs">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Social Proof (hidden on small screens to prevent overlap) */}
          <div className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-[#E8F4EE]">
            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">★★★★★</div>
            <div className="text-[#0d2b20] font-bold text-sm">4.9/5 Rating</div>
            <div className="text-[#4a6b5a] text-xs">500+ Reviews</div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 border-t border-[#D4EBE0] bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[["60+","New patients/month average"],["102K+","Total leads generated"],["$3.7M","Ad spend managed"],["98%","Client retention"]].map(([n,l]) => (
              <div key={l} className="flex flex-col md:flex-row text-center md:text-left items-center gap-4">
                <div className="text-2xl md:text-3xl font-black text-[#2D7A5F]">{n}</div>
                <div className="text-[#4a6b5a] text-xs leading-tight md:max-w-[100px]">{l}</div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="bg-[#2D7A5F] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#1a5a42] transition-all"
          >
            Book Free Audit →
          </a>
        </div>
      </div>
    </div>
  );
}

export function C_Testiomonials() {
  const { ref: testiRef, inView: testiIn } = useInView();

  return (
    <section
      id="testimonals"
      ref={testiRef}
      className="py-20 md:py-28 lg:py-[120px] px-6 sm:px-8 lg:px-[60px] bg-white"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 mb-10 md:mb-14">

          <div className="text-center md:text-left">

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F3F8F4] rounded-full px-5 py-2 border border-[#D4EBE0] mb-4">
              <span className="text-[12px] font-bold text-[#2D7A5F]">
                ★★★★★ 4.9 Average Rating
              </span>
            </div>

            {/* Title */}
            <h2
              className={`
                font-['Nunito',sans-serif]
                font-black
                text-[clamp(28px,5vw,48px)]
                text-[#0d2b20]
                leading-[1.1]
                tracking-[-1.5px]
                transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
                ${testiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              Dentists Who Made<br />
              <span className="text-[#2D7A5F]">the Switch.</span>
            </h2>
          </div>

          {/* CTA Link */}
          <a
            href="#"
            className="text-[#2D7A5F] text-[14px] font-bold flex items-center gap-2 justify-center md:justify-end"
          >
            Be One of them →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">

          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`
                relative
                bg-[#F3F8F4]
                rounded-[20px]
                py-8 px-6
                border border-[#E8F4EE]
                transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
                ${testiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Quote Mark */}
              <div className="absolute top-5 right-6 font-serif text-[60px] text-[#D4EBE0] leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="text-[#f59e0b] text-[14px] mb-4">
                ★★★★★
              </div>

              {/* Result Chip */}
              <div className="inline-block bg-[rgba(45,122,95,.1)] text-[#2D7A5F] text-[12px] px-4 py-1 rounded-full font-bold mb-4">
                {t.result}
              </div>

              {/* Quote */}
              <p className="font-['Nunito',sans-serif] text-[15px] text-[#2d4a38] leading-[1.75] mb-6 italic">
                "{t.quote}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 border-t border-[#D4EBE0] pt-5">
                <div className="w-10 h-10 rounded-full bg-[#2D7A5F] flex items-center justify-center text-white font-extrabold text-[15px]">
                  {t.name.split(" ")[2]?.charAt(0) || t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-[14px] text-[#0d2b20]">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-[#4a6b5a] mt-[2px]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export function C_HowItWorks() {
  const { ref: howRef, inView: howIn } = useInView();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveStep((p) => (p + 1) % STEPS_C.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="our-process"
      ref={howRef}
      style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Blob */}
      <div style={{
        position: "absolute", top: "-10%", left: "-5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(184,216,196,.3)", filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "white", borderRadius: "100px", padding: "6px 20px",
          boxShadow: "0 2px 12px rgba(0,0,0,.06)", border: "1px solid #D4EBE0",
          marginBottom: "40px",
        }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2D7A5F", display: "inline-block" }} />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#2D7A5F" }}>Simple Process, Real Results</span>
        </div>

        <div className="how-grid">
          {/* ── Left ── */}
          <div style={{
            opacity: howIn ? 1 : 0,
            transform: howIn ? "translateY(0)" : "translateY(30px)",
            transition: "all .8s cubic-bezier(.4,0,.2,1)",
          }}>
            <h2 style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(30px,4.5vw,54px)",
              fontWeight: 900, color: "#0d2b20",
              lineHeight: 1.1, letterSpacing: "-1.5px",
              marginBottom: "16px",
            }}>
              From &quot;Invisible&quot;<br />
              to {" "}
              <span style={{ color: "#2D7A5F", display: "inline-block", position: "relative" }}>
                Fully Booked
                <svg style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%" }} viewBox="0 0 240 10" fill="none">
                  <path d="M2 7 Q60 1 120 7 Q180 13 238 7" stroke="#B8D8C4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </svg>
              </span><br />
              in 3 Steps.
            </h2>

            <p style={{ fontSize: "15px", color: "#4a6b5a", lineHeight: 1.75, marginBottom: "28px" }}>
              We&apos;ve refined this process across 500+ dental practices. No guesswork,
              no wasted months — just a clear path to a schedule that stays full.
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              {STEPS_C.map((_, i) => (
                <button key={i} onClick={() => setActiveStep(i)} style={{
                  width: activeStep === i ? "32px" : "8px", height: "8px",
                  borderRadius: "100px",
                  background: activeStep === i ? "#2D7A5F" : "#B8D8C4",
                  border: "none", cursor: "pointer",
                  transition: "all .4s cubic-bezier(.4,0,.2,1)",
                }} />
              ))}
            </div>
          </div>

          {/* ── Right: Steps ── */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div className="v-line" style={{
              position: "absolute", left: "27px", top: "44px", bottom: "44px",
              width: "2px",
              background: "linear-gradient(to bottom, #B8D8C4, #D4EBE0)",
            }} />

            <div style={{ display: "flex", flexDirection: "column" }}>
              {STEPS_C.map((step, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    cursor: "pointer",
                    /*
                      Fixed padding always — never changes.
                      This is the #1 jitter fix: padding never animates.
                    */
                    padding: "14px 0",
                    /*
                      minHeight locks the row height so siblings
                      don't shift when detail text fades in/out.
                      56px circle + 16px title + 18px desc + 60px detail + 28px padding ≈ 178
                    */
                    minHeight: "148px",
                    opacity: howIn ? 1 : 0,
                    transform: howIn ? "translateX(0)" : "translateX(30px)",
                    transition: `opacity .7s cubic-bezier(.4,0,.2,1) ${i * 0.15}s,
                                 transform .7s cubic-bezier(.4,0,.2,1) ${i * 0.15}s`,
                  }}
                >
                  {/* Circle */}
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%", flexShrink: 0,
                    background: activeStep === i ? "#2D7A5F" : "white",
                    border: `2px solid ${activeStep === i ? "#2D7A5F" : "#D4EBE0"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: activeStep === i ? "0 8px 24px rgba(45,122,95,.3)" : "0 2px 12px rgba(0,0,0,.06)",
                    transition: "all .4s cubic-bezier(.4,0,.2,1)",
                    position: "relative", zIndex: 1,
                    /* Fixed size — never changes */
                    flexBasis: "56px",
                  }}>
                    <span style={{
                      fontFamily: "'Nunito', sans-serif", fontWeight: 900,
                      fontSize: "14px",
                      color: activeStep === i ? "white" : "#4a6b5a",
                      transition: "color .4s",
                    }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content — fixed padding, never animates geometry */}
                  <div style={{
                    flex: 1,
                    /* Always same padding — no layout shift */
                    padding: "10px 20px",
                    borderRadius: "16px",
                    /* Only visual props transition */
                    background: activeStep === i ? "white" : "transparent",
                    border: `1px solid ${activeStep === i ? "#D4EBE0" : "transparent"}`,
                    boxShadow: activeStep === i ? "0 4px 24px rgba(0,0,0,.06)" : "none",
                    transition: "background .4s cubic-bezier(.4,0,.2,1), border-color .4s, box-shadow .4s",
                  }}>
                    <div style={{
                      fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                      fontSize: "16px", color: "#0d2b20", marginBottom: "4px",
                    }}>
                      {step.title}
                    </div>

                    {/* desc — fixed margin, never changes */}
                    <div style={{
                      fontSize: "13px", color: "#4a6b5a",
                      marginBottom: "10px",
                    }}>
                      {step.desc}
                    </div>

                    {/* Detail — opacity+translate only, zero layout impact */}
                    <div style={{
                      fontSize: "13px", color: "#4a6b5a", lineHeight: 1.7,
                      opacity: activeStep === i ? 1 : 0,
                      transform: activeStep === i ? "translateY(0)" : "translateY(-4px)",
                      transition: "opacity .35s cubic-bezier(.4,0,.2,1), transform .35s cubic-bezier(.4,0,.2,1)",
                      pointerEvents: activeStep === i ? "auto" : "none",
                      /* visibility keeps it out of tab order when hidden */
                      visibility: activeStep === i ? "visible" : "hidden",
                    }}>
                      {step.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="cta-wrap" style={{ marginTop: "8px", paddingLeft: "76px" }}>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#2D7A5F", color: "white",
                borderRadius: "12px", padding: "14px 32px",
                fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                fontSize: "14px", textDecoration: "none",
                boxShadow: "0 8px 24px rgba(45,122,95,.28)",
              }}>
                Start My Free Audit <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .how-section { padding: 80px 24px; }

        .how-grid {
          display: grid;
          grid-template-columns: 5fr 5fr;
          gap: 80px;
          align-items: center;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .how-section { padding: 72px 32px; }
          .how-grid { grid-template-columns: 1fr; gap: 40px; }
          .v-line { display: none; }
          .cta-wrap { padding-left: 0; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .how-section { padding: 52px 16px; }
          .how-grid { gap: 28px; }
        }
      `}</style>
    </section>
  );
}

export function C_CTA() {
  const { ref: ctaRef, inView: ctaIn } = useInView();

  const isTablet =
    typeof window !== "undefined" && window.innerWidth < 1024;
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      ref={ctaRef}
      className="py-20 px-5 md:py-24 md:px-10 lg:py-[120px] lg:px-[60px] bg-[#F3F8F4]"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Trust Grid Section */}
        <div className="mb-[60px] md:mb-[80px]">
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(28px,5vw,48px)",
              fontWeight: 900,
              color: "#0d2b20",
              letterSpacing: "-1.5px",
              textAlign: "center",
              marginBottom: "8px",
              opacity: ctaIn ? 1 : 0,
              transform: ctaIn ? "translateY(0)" : "translateY(20px)",
              transition: "all .8s cubic-bezier(.4,0,.2,1)",
            }}
          >
            Everything You Need.
            <br />
            <span style={{ color: "#2D7A5F" }}>
              Nothing You Don't.
            </span>
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#4a6b5a",
              fontSize: "16px",
              maxWidth: "500px",
              margin: "0 auto 48px",
              opacity: ctaIn ? 1 : 0,
              transition:
                "all .8s cubic-bezier(.4,0,.2,1) .1s",
            }}
          >
            We built our platform around one question:
            what does a dental practice actually need to grow?
          </p>

          {/* Responsive Grid */}
          <div
          className="grid grid-cols-[1fr] md:grid-cols-[1fr 1fr] lg:grid-cols-[1fr,1fr,1fr] gap-[16px]"
          >
            {trustItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  border: "1px solid #E8F4EE",
                  boxShadow:
                    "0 2px 12px rgba(0,0,0,.04)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  opacity: ctaIn ? 1 : 0,
                  transform: ctaIn
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all .7s cubic-bezier(.4,0,.2,1) ${
                    i * 0.08
                  }s`,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#F0F8F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "#0d2b20",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#4a6b5a",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Card */}
        <div
  className={`
    relative overflow-hidden
    bg-[linear-gradient(135deg,#0d2b20,#1a4a32)]
    rounded-[28px]

    px-6 py-10
    sm:px-10 sm:py-14
    lg:p-16

    flex flex-col lg:flex-row
    items-start lg:items-center
    justify-between

    gap-8 lg:gap-10

    transition-all duration-900 delay-300 ease-[cubic-bezier(.4,0,.2,1)]
    ${ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
>
  {/* Blob */}
  <div
    className="
      absolute
      -top-[30%] -right-[5%]
      w-[250px] h-[250px]
      lg:w-[400px] lg:h-[400px]
      rounded-full
      bg-[rgba(184,216,196,.08)]
      blur-[60px]
      pointer-events-none
    "
  />


          {/* Left Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "rgba(255,255,255,.08)",
                borderRadius: "100px",
                padding: "6px 18px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#b8ff00",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  color:
                    "rgba(255,255,255,.7)",
                  fontWeight: 700,
                  letterSpacing: "2px",
                }}
              >
                NO CREDIT CARD REQUIRED
              </span>
            </div>

            <h2
              style={{
                fontFamily:
                  "'Nunito', sans-serif",
                fontSize: "clamp(24px,5vw,44px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Start Growing Your Practice
              <br />
              <span style={{ color: "#B8D8C4" }}>
                This Month. For Free.
              </span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                color:
                  "rgba(255,255,255,.6)",
                marginTop: "12px",
              }}
            >
              Free audit · Free website build ·
              Free first month · Month-to-month
              after.
            </p>
          </div>

          {/* Right Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: isMobile ? "100%" : "auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href="#"
              style={{
                background: "#2D7A5F",
                color: "white",
                borderRadius: "14px",
                padding: "18px 48px",
                fontFamily:
                  "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow:
                  "0 8px 32px rgba(45,122,95,.4)",
                textAlign: "center",
                whiteSpace: "nowrap",
                width: isMobile
                  ? "100%"
                  : "auto",
              }}
            >
              Claim My Free Month →
            </a>

            <a
              href="#"
              style={{
                color:
                  "rgba(255,255,255,.6)",
                fontSize: "13px",
                textDecoration: "none",
                fontWeight: 600,
                textAlign: isMobile
                  ? "left"
                  : "center",
              }}
            >
              Or schedule a quick call first →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}