'use client'
import { useInView } from "@/lib/inView";
import { useEffect, useState } from "react";


interface Step {
  number: string;
  title: string;
  desc: string;
  detail: string;
}

const STEPS_C: Step[] = [
  {
    number: "01",
    title: "Audit Your Practice Growth",
    desc: "We find exactly where you're losing patients",
    detail:
      "We analyze your current Google Ads performance, website conversion rate, and local SEO standing to find exactly where you're losing patients.",
  },
  {
    number: "02",
    title: "Custom Growth Plan",
    desc: "A roadmap built for your exact practice",
    detail:
      "You receive a tailored strategy built around Google Ads, Web Design, and SEO — aligned to your practice size, market, and revenue goals.",
  },
  {
    number: "03",
    title: "Launch & Scale",
    desc: "Go live in 4 weeks, grow every month",
    detail:
      "We execute, manage, and optimize everything. You focus on patients. We focus on growth.",
  },
]; 

export function B_HowItWorks() {
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
              Most dental practices are leaving significant revenue on the table. Here&apos;s how we fix that.
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
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#2D7A5F", color: "white",
                borderRadius: "12px", padding: "14px 32px",
                fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                fontSize: "14px", textDecoration: "none",
                boxShadow: "0 8px 24px rgba(45,122,95,.28)",
              }}>
                Get My Growth Audit <span>→</span>
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