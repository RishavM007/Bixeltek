'use client'
import { useInView } from "@/lib/inView";

export function B_Transformation() {
  const { ref, inView } = useInView();
  const { ref: r2, inView: v2 } = useInView();


const fi = (inView: boolean, delay = 0) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(28px)",
  transition: `all .8s cubic-bezier(.4,0,.2,1) ${delay}s`,
});

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
    { label: "Month 1", desc: "Foundation — Website audit, ad account setup, SEO baseline established", color: "#B8D8C4" },
    { label: "Month 2", desc: "Launch — Campaigns live, SEO optimizations deployed, tracking configured", color: "#8DC4A8" },
    { label: "Month 3", desc: "Optimize — Data-driven refinements, improved cost-per-lead, ranking gains", color: "#5DAF8C" },
    { label: "Month 4+", desc: "Scale — Proven results compounded, revenue growth accelerates", color: "#2D7A5F" },
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

    {/* <div style={{ textAlign: "center", marginBottom: "clamp(48px,6vw,72px)" }}>
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

    <div
      style={{
        display: "grid",
        gap: "20px",
        marginBottom: "clamp(56px,6vw,72px)",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
      }}
    >

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
    </div> */}

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
            Let&apos;s Talk.
          </span>
        </div>

        <a
          href="#contact"
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
          Start Today →
        </a>
      </div>
    </div>

  </div>
</section>
  );
}