'use client'
import { useInView } from "@/lib/inView";
import {
  FiGlobe,
  FiMapPin,
  FiTarget,
  FiStar,
  FiSmartphone,
  FiMessageCircle
} from "react-icons/fi";

export function B_Services() {

const fi = (inView: boolean, delay = 0) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `all .8s cubic-bezier(.4,0,.2,1) ${delay}s`,
});

  const { ref, inView } = useInView();

  const normalCards = [
  {
    icon: FiMapPin,
    title: "Google Ads (PPC)",
    sub: "Rank #1 near you",
    desc: "Every dollar tracked. We run data-driven paid campaigns targeting high-intent local patients, optimized continuously for the lowest cost-per-appointment.",
  },
  {
    icon: FiTarget,
    title: "Google & Map Ads",
    sub: "Managed for you",
    desc: "Own your local market. We position your practice at the top of Google Maps and local search so nearby patients find you first.",
  },
];

const bottomCards = [
  {
    icon: FiStar,
    title: "Review Generation",
    sub: "Automated post-visit",
    desc: "More 5-star reviews, more trust, more bookings. We systematically grow your online reputation to convert searchers into scheduled patients.",
  },
  {
    icon: FiSmartphone,
    title: "Reputation Monitoring",
    sub: "24/7 coverage",
    desc: "Your brand, protected. We monitor and manage your online presence so a strong reputation works in your favor around the clock.",
  },
  {
    icon: FiMessageCircle,
    title: "Patient Reactivation",
    sub: "Win-back campaigns",
    desc: "Revenue hiding in plain sight. We re-engage your existing patient base to drive appointments without increasing your ad spend.",
  },
]

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
          Every engagement includes our full suite of dental marketing services, engineered to work together and drive maximum ROI.
        </p>
      </div>
    </div>

    {/* ── Responsive Grid ── */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

  {/* WEBSITE CARD */}
  <div
    className="
      group bg-[#0d2b20] rounded-3xl p-8 md:p-10
      flex flex-col justify-between min-h-[320px]
      relative overflow-hidden
      transition duration-500 ease-out
      hover:-translate-y-2 hover:scale-[1.02]
      hover:shadow-2xl
    "
  >
    {/* Soft Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#4f9f83]/0 to-[#4f9f83]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

    <div className="relative z-10">
      <div className="mb-6 text-[#7dd3b0]">
        <FiGlobe size={32} />
      </div>

      <h3 className="font-[Nunito] font-extrabold text-xl text-white mb-3">
        Custom Website
      </h3>

      <p className="text-white/70 text-sm leading-relaxed">
        Built to convert. Your website becomes your highest-performing
        patient acquisition tool — fast, mobile-optimized, and designed
        specifically for dental practices.
      </p>
    </div>
  </div>

  {/* OTHER CARDS */}
  {[...normalCards, ...bottomCards].map((s, i) => {
    const Icon = s.icon;

    return (
      <div
        key={i}
        className="
          group bg-white rounded-2xl p-6 md:p-8
          border border-[#E8F4EE]
          shadow-sm
          transition duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02]
          hover:shadow-xl
        "
      >
        <div className="mb-5 text-[#4f9f83] group-hover:scale-110 transition duration-300">
          <Icon size={28} />
        </div>

        <h4 className="font-[Nunito] font-bold text-lg text-[#0d2b20] mb-1">
          {s.title}
        </h4>

        <p className="text-[#2D7A5F] text-xs font-semibold mb-3">
          {s.sub}
        </p>

        <p className="text-[#4a6b5a] text-sm leading-relaxed">
          {s.desc}
        </p>
      </div>
    );
  })}
</div>
  </div>
</section>
  );
}