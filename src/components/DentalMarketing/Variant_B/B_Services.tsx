'use client'
import { useInView } from "@/lib/inView";

export function B_Services() {

const fi = (inView: boolean, delay = 0) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `all .8s cubic-bezier(.4,0,.2,1) ${delay}s`,
});

  const { ref, inView } = useInView();

  const normalCards = [
    {
      icon: "📍",
      title: " Google Ads (PPC)",
      sub: "Rank #1 near you",
      desc: "Every dollar tracked. We run data-driven paid campaigns targeting high-intent local patients, optimized continuously for the lowest cost-per-appointment.",
    },
    {
      icon: "🎯",
      title: "Google & Map Ads",
      sub: "Managed for you",
      desc: "Own your local market. We position your practice at the top of Google Maps and local search so nearby patients find you first.",
    },
  ];

  const bottomCards = [
    {
      icon: "⭐",
      title: "Review Generation",
      sub: "Automated post-visit",
      desc: "More 5-star reviews, more trust, more bookings. We systematically grow your online reputation to convert searchers into scheduled patients.",
    },
    {
      icon: "📱",
      title: "Reputation Monitoring",
      sub: "24/7 coverage",
      desc: "Your brand, protected. We monitor and manage your online presence so a strong reputation works in your favor around the clock.",
    },
    {
      icon: "💬",
      title: "Patient Reactivation",
      sub: "Win-back campaigns",
      desc: "Revenue hiding in plain sight. We re-engage your existing patient base to drive appointments without increasing your ad spend.",
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
          Every engagement includes our full suite of dental marketing services, engineered to work together and drive maximum ROI.
        </p>
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
            Built to convert. Your website becomes your highest-performing patient acquisition tool — fast, mobile-optimized, and designed specifically for dental practices.
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